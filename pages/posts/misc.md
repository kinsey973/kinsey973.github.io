---
title: misc
date: 2025-04-18 19:27:01
tags:
categories: 学习笔记
---

## 二维码

打开我们发现是个二维码，我们用QRReasearch进行扫描

![image-20250418192834634](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202504181928743.png)

提示这个图片里有秘密

由于附件中只有一张二维码，而且刚才的提示信息secret is here 表明flag确实在这里，于是想到可能在图片中可能隐藏了其他文件。隐藏原理如下：

```
一个完整的 JPG 文件由 FF D8 开头，FF D9结尾
图片浏览器会忽略 FF D9 以后的内容，因此可以在 JPG 文件中加入其他文件。
其余同理：
png
十进制数137 80 78 71 13 10 26 10
十六进制数 89 50 4e 47 0d 0a 1a 0a
gif
图像开始标志：47 49 46 38 39 61  
结束标志：01 01 00 3B

```

我们在kail中打开图片，发现有个4number.txt

![image-20250418192950695](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202504181929733.png)

我们用binwalk进行检测

![image-20250418193005025](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202504181930051.png)

下一步用foremost进行分离

![image-20250418193102602](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202504181931628.png)

分离后解压zip文件需要密码，根据提示密码为4位数

我们直接zip爆破

![image-20250418193537846](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202504181935874.png)

密码为7631，打开就能得到flag



## 大白

![image-20250418193650588](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202504181936638.png)

图片打开长这样，我们需要修改它的高

放010里打开

图片放在010 Editor，修改图片宽高。我们来分析png文件格式，

首先，“89 50 4E 47 0D 0A 1A 0A”为标识png文件的八个字节的文件头标志。

然后是IHDR数据块，

“00 00 00 0D”说明IHDR头块长为13

”49 48 44 52“为IHDR标识（ASCII码为IHDR）

“00 00 02 A7”为图像的宽，24像素

”00 00 01 00“为图像的高，24像素
![image-20250418193821619](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202504181938654.png)
将00 00 01 00改为00 00 04 00，得到flag

![image-20250418193858545](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202504181938586.png)



## wireshark

根据提示过滤出POST包

```
http.request.method==POST
```

![image-20250418194451475](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202504181944512.png)
