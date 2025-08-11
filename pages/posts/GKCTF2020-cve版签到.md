---
title: '[GKCTF2020]cve版签到'
date: 2025-05-15 18:47:06
tags: 漏洞
categories: cve
---

## [GKCTF2020]cve版签到

**cve-2020-7066:** 在低于7.2.29的PHP版本7.2.x，低于7.3.16的7.3.x和低于7.4.4的7.4.x中，将get_headers（）与用户提供的URL一起使用时，如果URL包含零（\ 0）字符，则URL将被静默地截断。这可能会导致某些软件对get_headers（）的目标做出错误的假设，并可能将某些信息发送到错误的服务器。

打开题目

![image-20250515204736447](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202505152047571.png)

F12之后在Headers中发现hint

两者结合利用零字符截断使get_headers()请求到本地127.0.0.1以及链接

![image-20250515204819615](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202505152048665.png)

提示必须以123结尾

```
?url=http://127.0.0.123%00www.ctfhub.com
```

得到flag

![image-20250515204855768](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202505152048815.png)
