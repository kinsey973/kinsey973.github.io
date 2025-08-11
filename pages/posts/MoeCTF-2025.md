---
title: MoeCTF 2025
date: 2025-08-11 08:19:59
tags:
categories: 学习笔记
---

## web

### 神秘的手镯

打开页面，提示我们输入万言启封咒

![image-20250811083623045](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202508110836220.png)

但是页面禁止了复制粘贴，我们首先猜测这里使用了js代码禁用了复制粘贴，那么我们将js禁用了就能解决

![image-20250811083739175](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202508110837309.png)

但是禁用了js代码就不能提交了，提交按钮应该也是js代码执行的，那么我们来看看js源码

![image-20250811083853036](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202508110838081.png)

我们在源代码中找到shouzhou.js，查看在验证代码处找到flag

![image-20250811084325390](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202508110843434.png)

### **初识金曦玄轨**

我们查看源代码，发现一个路由/golden_trail

![image-20250811084704695](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202508110847738.png)

我们进去这个路由后提示：路径不正，难窥天道

我们直接抓个包看看，在响应界面发现flag

![image-20250811084806849](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202508110848913.png)

### **打上门来！**

输入../../../进行目录穿越，然后找到flag

![image-20250811091659228](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202508110916330.png)

### **Moe笑传之猜猜爆**

我们在源代码里查看js代码

在最后一行发现randomNumber 是在前端生成的

![image-20250811092059697](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202508110920749.png)

使用我们直接在控制台输入randomNumber ，就能得到随机数了

![image-20250811092157951](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202508110921024.png)

