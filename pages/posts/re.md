---
title: re
date: 2025-04-20 14:19:03
tags:
categories: 学习笔记
---

### 新年快乐

我们先进行查壳

![image-20250420142946865](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202504201429029.png)

发现存在一个UPX壳

[UPX的介绍](https://www.cnblogs.com/bonelee/p/16407794.html)

如果我们直接放到ida中分析

此处就只有两个函数

![image-20250420143330951](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202504201433019.png)

我们使用软件进行脱壳

![image-20250420143415623](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202504201434692.png)

把脱壳后的文件放入ida进行分析

Shif+F12查看字符串（找到关键词） 

再用ctrl+f查找flag

![image-20250420143542974](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202504201435043.png)

我们双击该字符串找到它对应的位置

![image-20250420143621811](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202504201436958.png)

双击引用该字符串的位置，进入到流程图

![image-20250420143851028](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202504201438129.png)

 直接按F5查看伪代码

![image-20250420143901999](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202504201439067.png)

分析代码

flag为flag{HappyNewYear!}
