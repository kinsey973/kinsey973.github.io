---
title: '[JMCTF 2021]GoOSS'
date: 2025-03-16 14:41:36
tags: 302重定向
categories: 学习笔记
---

## [JMCTF 2021]GoOSS

题目给了源码，我们下载下来看

是一个go语言的题目，index.php可以读取文件

我们来看一下go文件，大致分为了两块，upload和vul，并且可以上传一个json请求

upload没法利用，我们来看vul

它首先严格限制了url必须是以`http://127.0.0.1:1234/`开头的ssrf

![image-20250316151707267](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503161517309.png)

然后我们在fileMidderware里面发现如果满足fi是文件夹且c.Request.URL.String()不以"/"结尾的话，那么就会重定向到c.Request.URL.String()+"/"的页面，实质上是进行了一次请求，而c.Request.URL.String()是我们可控的，所以这里应该存在ssrf。但是直接在浏览器中构造，发现无论怎么构造最后解析的路由都是"/"，无法利用，于是又把目光放到之前的/vul路由上。

![image-20250316151857184](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503161518212.png)

那我们思路就清晰了，利用302跳转到本地的80端口的index.php，进而读取flag

参考

```
https://www.secpulse.com/archives/102918.html
https://xz.aliyun.com/t/3302
https://www.freebuf.com/articles/web/272577.html
```

我们需要使用双斜杠告诉浏览器这是绝对路径

比如：http://127.0.0.1:8000//baidu.com/ 会跳转到baidu.com里

payload

```
{"url":http://127.0.0.1:1234//vps/index.php/..}
```

这里的..是为了让url不以/结尾

vps/indexphp

```
<?php
header("Location: http://127.0.0.1/index.php?file=/flag");
```

![image-20250316155641264](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503161556325.png)
