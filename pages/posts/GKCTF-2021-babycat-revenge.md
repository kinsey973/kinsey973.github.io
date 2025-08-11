---
title: '[GKCTF 2021]babycat-revenge'
date: 2025-03-11 19:40:02
tags:
---

## [GKCTF 2021]babycat-revenge

打开网页源码，我们发现有个注册页面，但我们打开会提示没有权限

![image-20250311194859862](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503111948975.png)

而登录那里试了也没有注入和弱密码，我们抓包看看

它抓到的数据是json类型的，我们访问register

![image-20250311195033880](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503111950035.png)

它自动注册成功了

成功后，我们登录

![image-20250311195123988](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503111951090.png)

我们在这发现了上传页面和下载页面

点击上传页面，会提示我们不是管理员，看来这题还需要我们获得管理员权限

我们在下载页面抓包

![image-20250311195604488](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503111956599.png)

 看这url，熟悉的目录穿越

我们用Wappalyzer能发现这是用java写的网站

![image-20250311195643255](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503111956334.png)

war包结构如下

![image-20250311195738204](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503111957271.png)

我们来看下WEB-INF下的web.xml 

![image-20250311201923265](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503112019311.png)

我们看到有这么几个类，我们路径也知道了，那就去把代码下下来

```
/home/download?file=../../WEB-INF/classes/com/web/servlet/registerServlet.class
```

