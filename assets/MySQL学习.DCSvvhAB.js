import{Bt as e,Gn as t,Gt as n,H as r,Qn as i,Rt as a,V as o,X as s,_n as c}from"./framework.DfD1zdSt.js";import{t as l}from"./theme.DMgGaAyl.js";import"./chunks/vue-i18n.BSMUyWAh.js";import{a as u,i as d}from"./chunks/vue-router.DZdD3Cav.js";var f={__name:`MySQL学习`,setup(f,{expose:p}){let m=t(JSON.parse(`{"title":"MySQL学习","description":"","frontmatter":{"title":"MySQL学习","date":"2023-12-20 21:22:58","tags":["sql注入"],"categories":["学习笔记"],"firstImage":"https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202401081925812.png"},"headers":[],"relativePath":"pages/posts/MySQL学习.md"}`)),h=u(),g=d(),_=Object.assign(g.meta.frontmatter||{},m.value?.frontmatter||{});return h.currentRoute.value.data=m.value,e(`valaxy:frontmatter`,_),globalThis.$frontmatter=_,p({frontmatter:{title:`MySQL学习`,date:`2023-12-20 21:22:58`,tags:[`sql注入`],categories:[`学习笔记`]}}),(e,t)=>{let u=l;return a(),r(u,{frontmatter:i(_)},{"main-content-md":c(()=>[...t[0]||=[o(`p`,null,`摘要：Mysql 数据库 打开：mysql -u root -p 关系型数据库 ​ 概念：建立在关系模型基础上，由多张相互连接的二维表组成的数据库 ​ 特点： 1. 使用表存储数据，格式统一，便于维护。1. 使用SQL语言操作，标准统一，使用方便。`,-1),o(`p`,null,`<!-- more -->`,-1),o(`h2`,{id:`mysql`,tabindex:`-1`},[s(`Mysql `),o(`a`,{class:`header-anchor`,href:`#mysql`,"aria-label":`Permalink to "Mysql"`},`​`)],-1),o(`p`,null,`数据库`,-1),o(`p`,null,`打开：mysql -u root -p`,-1),o(`p`,null,`关系型数据库`,-1),o(`p`,null,`​ 概念：建立在关系模型基础上，由多张相互连接的二维表组成的数据库`,-1),o(`p`,null,`​ 特点：`,-1),o(`pre`,null,[o(`code`,null,`			1. 使用表存储数据，格式统一，便于维护。
			1. 使用SQL语言操作，标准统一，使用方便。
`)],-1),o(`h2`,{id:`sql语法`,tabindex:`-1`},[s(`SQL语法 `),o(`a`,{class:`header-anchor`,href:`#sql语法`,"aria-label":`Permalink to "SQL语法"`},`​`)],-1),o(`h3`,{id:`通用语法`,tabindex:`-1`},[s(`通用语法： `),o(`a`,{class:`header-anchor`,href:`#通用语法`,"aria-label":`Permalink to "通用语法："`},`​`)],-1),o(`p`,null,`1.SQL语句可以单行或多行书写，以分号结尾`,-1),o(`p`,null,`2.SQL语句可以使用空格/缩进来增强语句的可读性`,-1),o(`p`,null,`3.mysql数据库的SQL语句不区分大小写，关键字建议使用大写.`,-1),o(`p`,null,`4.注释 单行 ：–注释内容或#注释内容（mysql特有）`,-1),o(`p`,null,`​ 多行 ：/*注释内容*/`,-1),o(`h3`,{id:`sql分类`,tabindex:`-1`},[s(`SQL分类： `),o(`a`,{class:`header-anchor`,href:`#sql分类`,"aria-label":`Permalink to "SQL分类："`},`​`)],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202401081925812.png`,alt:`image-20240108192521759`,loading:`lazy`,decoding:`async`})],-1),o(`h3`,{id:`ddl`,tabindex:`-1`},[s(`DDL： `),o(`a`,{class:`header-anchor`,href:`#ddl`,"aria-label":`Permalink to "DDL："`},`​`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`查询
   查询所有数据库
   SHOW DATABASE；
   查询当前数据库
   SELECT DATABASE();
   
创建
	CREATA DATABASE[IF NOT EXISTS]数据库名[DEFAULT CHARSET字符集][COLLATE 排序规则];  
	字符集建议utf8mb4
删除
	DROP DATABASE[IF EXISTS]数据库名;
	
使用
    USE 数据库名;
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h4`,{id:`ddl-表结构-查询`,tabindex:`-1`},[s(`DDL-表结构-查询 `),o(`a`,{class:`header-anchor`,href:`#ddl-表结构-查询`,"aria-label":`Permalink to "DDL-表结构-查询"`},`​`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`查询当前数据库所有表
show tables;
查询表结构
desc 表名；
查询指定表的建表语句
show create table 表名;
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h4`,{id:`ddl-表操作-创建`,tabindex:`-1`},[s(`DDL-表操作-创建 `),o(`a`,{class:`header-anchor`,href:`#ddl-表操作-创建`,"aria-label":`Permalink to "DDL-表操作-创建"`},`​`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`create table 表名(
    字段1 字段1类型[COMMENT 字段1注释],
   字段2 字段2类型[COMMENT 字段2注释]

)[COMMENT 表注释];
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202401081925880.png`,alt:`image-20240108192550862`,loading:`lazy`,decoding:`async`})],-1),o(`h4`,{id:`数值类型`,tabindex:`-1`},[s(`数值类型 `),o(`a`,{class:`header-anchor`,href:`#数值类型`,"aria-label":`Permalink to "数值类型"`},`​`)],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202401071514943.png`,alt:`image-20240107151403868`,loading:`lazy`,decoding:`async`})],-1),o(`p`,null,`age TINYINT UNSLGNED；无符号类型 unsigned`,-1),o(`p`,null,`age TINYINT SLGNED ； 有符号类型 signed`,-1),o(`p`,null,`字符串类型`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202401071515371.png`,alt:`image-20240107151551336`,loading:`lazy`,decoding:`async`})],-1),o(`p`,null,`char(x)和varchar(x)都要带参数，表示存储字符串的个数`,-1),o(`p`,null,`char()性能好 gander char(1)`,-1),o(`p`,null,`varchar()性能差 name varchar(10); 定长用char，不定长用varchar`,-1),o(`p`,null,`日期类型`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202401071522440.png`,alt:`image-20240107152239395`,loading:`lazy`,decoding:`async`})],-1),o(`h4`,{id:`ddl-表操作-修改`,tabindex:`-1`},[s(`DDL-表操作-修改 `),o(`a`,{class:`header-anchor`,href:`#ddl-表操作-修改`,"aria-label":`Permalink to "DDL-表操作-修改"`},`​`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`添加字段
alter table 表名 add 字段名 类型（长度）[comment 注释];
修改数据类型
alter table 表名 modify 字段名 新数据类型（长度）
修改字段名和字段类型
alter 表名 change 旧字段名 新字段名 类型（长度）[comment 注释][约束]；
修改表名
alter table rename to 表名
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h4`,{id:`ddl-表操作-删除`,tabindex:`-1`},[s(`DDL-表操作-删除 `),o(`a`,{class:`header-anchor`,href:`#ddl-表操作-删除`,"aria-label":`Permalink to "DDL-表操作-删除"`},`​`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`删除字段
alter table 表名 drop 字段名；
删除表
drop table[if exists] 表名；
删除指定表，并重新创建该表
truncate table 表名
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h3`,{id:`dml`,tabindex:`-1`},[s(`DML `),o(`a`,{class:`header-anchor`,href:`#dml`,"aria-label":`Permalink to "DML"`},`​`)],-1),o(`h4`,{id:`dml-添加数据`,tabindex:`-1`},[s(`DML-添加数据 `),o(`a`,{class:`header-anchor`,href:`#dml-添加数据`,"aria-label":`Permalink to "DML-添加数据"`},`​`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`给指定字段添加数据
insert into 表名（字段1，字段2...）values(值1,值2,...);
给全部字段添加数据
insert into表名 values(值1,值2,...);
批量添加数据
insert into 表名(字段名1，字段名2,...) values(值1,值2,...),(值1,值2,...),(值1,值2,...);

insert into 表名 values(值1，值2,...),(值1,值2,...);
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`注意：`,-1),o(`p`,null,`插入数据时，指定字段顺序需要与值的顺序一一对应。`,-1),o(`p`,null,`字符串和日期型的数据应该包含在引号中`,-1),o(`p`,null,`输入的数据大小，应该在字段的规定范围内。`,-1),o(`h4`,{id:`dml-修改数据`,tabindex:`-1`},[s(`DML-修改数据 `),o(`a`,{class:`header-anchor`,href:`#dml-修改数据`,"aria-label":`Permalink to "DML-修改数据"`},`​`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`update 表名 set 字段名1=值1，字段2=值2，...[where 条件];
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h4`,{id:`dml-删除数据`,tabindex:`-1`},[s(`DML-删除数据 `),o(`a`,{class:`header-anchor`,href:`#dml-删除数据`,"aria-label":`Permalink to "DML-删除数据"`},`​`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`delete from 字段 where 条件
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`注意：`,-1),o(`p`,null,`*delete 语句的条件可以有，也可以没有，如果没有条件，则会删除整张表的所有数据`,-1),o(`p`,null,`*delete 语句不能删除每一个字段的值（可以使用update）`,-1),o(`h3`,{id:`dql–查询`,tabindex:`-1`},[s(`DQL–查询 `),o(`a`,{class:`header-anchor`,href:`#dql–查询`,"aria-label":`Permalink to "DQL--查询"`},`​`)],-1),o(`h4`,{id:`dql-语法`,tabindex:`-1`},[s(`DQL-语法 `),o(`a`,{class:`header-anchor`,href:`#dql-语法`,"aria-label":`Permalink to "DQL-语法"`},`​`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`select
     字段列表
from  
      表名列表
      
where 
       条件列表
      
group by
        分组字段列表
having
        分组后条件列表
        
order by
         排序字段列表
         
limlt
       分页参数
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h4`,{id:`dql-基本查询`,tabindex:`-1`},[s(`DQL-基本查询 `),o(`a`,{class:`header-anchor`,href:`#dql-基本查询`,"aria-label":`Permalink to "DQL-基本查询"`},`​`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`查询多个字段
select 字段1，字段2.....from 表名;
select * from 表名;(查询返回所有字段)

设置别名
select 字段1 [as 别名1]，字段2 [as 别名2] ... from 表名;

去除重复记录
select distinct 字段列表 from 表名;
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h4`,{id:`dql-条件查询-where`,tabindex:`-1`},[s(`DQL-条件查询（where） `),o(`a`,{class:`header-anchor`,href:`#dql-条件查询-where`,"aria-label":`Permalink to "DQL-条件查询（where）"`},`​`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`语法
select 字段列表 from 表名 where 条件列表;
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202401172136641.png`,alt:`image-20240117213616515`,loading:`lazy`,decoding:`async`})],-1),o(`p`,null,`'–'两个字符，‘%x’最后一个字符为x；`,-1),o(`h4`,{id:`dql-聚合函数`,tabindex:`-1`},[s(`DQL-聚合函数 `),o(`a`,{class:`header-anchor`,href:`#dql-聚合函数`,"aria-label":`Permalink to "DQL-聚合函数"`},`​`)],-1),o(`p`,null,`含义：将一列数据作为一个整体，进行纵向计算。`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202401172157958.png`,alt:`image-20240117215749842`,loading:`lazy`,decoding:`async`})],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`语法
select 聚合函数（字段列表） from 表名 [where...];
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`注意：null值不参与所有`,-1),o(`h4`,{id:`dql-分组查询`,tabindex:`-1`},[s(`DQL-分组查询 `),o(`a`,{class:`header-anchor`,href:`#dql-分组查询`,"aria-label":`Permalink to "DQL-分组查询"`},`​`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`语法
select 字段列表 from 表名[where 条件 ] group by 分组字段名[having 分组后过滤条件]
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202401172210435.png`,alt:`image-20240117221047389`,loading:`lazy`,decoding:`async`})],-1),o(`p`,null,`注意：执行顺序：where>聚合函数>having.`,-1),o(`p`,null,`分组之后，查询的字段一般为聚合函数和分组字段，查询其他字段无任何意义`,-1),o(`h4`,{id:`dql-排序查询`,tabindex:`-1`},[s(`DQL-排序查询 `),o(`a`,{class:`header-anchor`,href:`#dql-排序查询`,"aria-label":`Permalink to "DQL-排序查询"`},`​`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`语法
select 字段列表 from 表名 order by 字段1 排序方式1，字段2 排序方式2;

排序方式
asc：升序（默认）
desc：降序

注意：如果是多字段排序，当第一个字段值相同是，才会根据第二个字段进行排序
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h4`,{id:`dql-分页查询`,tabindex:`-1`},[s(`DQL-分页查询 `),o(`a`,{class:`header-anchor`,href:`#dql-分页查询`,"aria-label":`Permalink to "DQL-分页查询"`},`​`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`语法
select 字段列表 from 表名 limit 起始索引，查询记录数；
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`注意 起始索引从0开始，起始索引 = (查询页码 - 1) * 每页显示记录数`,-1),o(`p`,null,`分页查询是数据库的方言，不同的数据库有不同的实现，MySQL中是LIMIT`,-1),o(`p`,null,`如果查询的是第一页数据，起始索引可以省略，直接简写为 limit 10。`,-1),o(`h4`,{id:`dql-查询顺序`,tabindex:`-1`},[s(`DQL-查询顺序 `),o(`a`,{class:`header-anchor`,href:`#dql-查询顺序`,"aria-label":`Permalink to "DQL-查询顺序"`},`​`)],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202401192032785.png`,alt:`image-20240119203234662`,loading:`lazy`,decoding:`async`})],-1),o(`h3`,{id:`dcl`,tabindex:`-1`},[s(`DCL `),o(`a`,{class:`header-anchor`,href:`#dcl`,"aria-label":`Permalink to "DCL"`},`​`)],-1),o(`h4`,{id:`dcl-管理用户`,tabindex:`-1`},[s(`DCL-管理用户 `),o(`a`,{class:`header-anchor`,href:`#dcl-管理用户`,"aria-label":`Permalink to "DCL-管理用户"`},`​`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`查询用户
use mysql;
select * from user;

创建用户
crate user '用户名'@'主机名' identified by '密码';
主机名为%时，意思是在任意主机上访问

修改密码
alter user '用户名'@'主机名' identified with mysql_native_password by '新密码';

删除用户
drop user '用户名'@'主机名';
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h4`,{id:`dcl-权限控制`,tabindex:`-1`},[s(`DCL-权限控制 `),o(`a`,{class:`header-anchor`,href:`#dcl-权限控制`,"aria-label":`Permalink to "DCL-权限控制"`},`​`)],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202401202053085.png`,alt:`image-20240120205326969`,loading:`lazy`,decoding:`async`})],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`查询权限
show grants for '用户名'@'主机名';

授予权限
grant 权限列表 on 数据库名.表名 to '用户名'@'主机名';

撤销权限
revoke 权限列表 on 数据库名.表名 from '用户名'@'主机名';
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`注意`,-1),o(`p`,null,`多个权限之间，使用逗号分隔`,-1),o(`p`,null,`授权时，数据库名和表名可以使用*进行通配，代表所有`,-1),o(`h2`,{id:`函数`,tabindex:`-1`},[s(`函数 `),o(`a`,{class:`header-anchor`,href:`#函数`,"aria-label":`Permalink to "函数"`},`​`)],-1),o(`p`,null,`介绍：一段可以直接被另一段程序调用的程序或代码`,-1),o(`h3`,{id:`字符串函数`,tabindex:`-1`},[s(`字符串函数 `),o(`a`,{class:`header-anchor`,href:`#字符串函数`,"aria-label":`Permalink to "字符串函数"`},`​`)],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202401202111781.png`,alt:`image-20240120211126711`,loading:`lazy`,decoding:`async`})],-1),o(`p`,null,`语法`,-1),o(`p`,null,`select 函数( )；`,-1),o(`h3`,{id:`数值函数`,tabindex:`-1`},[s(`数值函数 `),o(`a`,{class:`header-anchor`,href:`#数值函数`,"aria-label":`Permalink to "数值函数"`},`​`)],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202401202121632.png`,alt:`image-20240120212149550`,loading:`lazy`,decoding:`async`})],-1),o(`h3`,{id:`日期函数`,tabindex:`-1`},[s(`日期函数 `),o(`a`,{class:`header-anchor`,href:`#日期函数`,"aria-label":`Permalink to "日期函数"`},`​`)],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202401202130612.png`,alt:`image-20240120213007540`,loading:`lazy`,decoding:`async`})],-1),o(`h3`,{id:`流程函数`,tabindex:`-1`},[s(`流程函数 `),o(`a`,{class:`header-anchor`,href:`#流程函数`,"aria-label":`Permalink to "流程函数"`},`​`)],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202401202138125.png`,alt:`image-20240120213803018`,loading:`lazy`,decoding:`async`})],-1),o(`h2`,{id:`约束`,tabindex:`-1`},[s(`约束 `),o(`a`,{class:`header-anchor`,href:`#约束`,"aria-label":`Permalink to "约束"`},`​`)],-1),o(`p`,null,`含义：作用于表中字段上的规则，用于限制存储在表中的数据`,-1),o(`p`,null,`目的：保证数据库中数据的正确、有效性和完整性`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202401271921634.png`,alt:`image-20240127192147524`,loading:`lazy`,decoding:`async`})],-1),o(`p`,null,[o(`strong`,null,`约束是作用于表中字段上的，可以在创建表/修改表时添加`)],-1),o(`p`,null,`想要实现主键的自增长要使用auto_increment`,-1),o(`h2`,{id:`外键约束`,tabindex:`-1`},[s(`外键约束 `),o(`a`,{class:`header-anchor`,href:`#外键约束`,"aria-label":`Permalink to "外键约束"`},`​`)],-1),o(`p`,null,`概念：外键用来让两张表的数据之间建立连接，从而保证数据的一致性和完整性`,-1),o(`p`,null,`语法`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`添加外键
create table 表名(
字段名 数据类型
...
[constraint][外键名称] foreign key(外键字段名) references 主表（主表列名）
);

alter table 表名 add constraint 外键名称 foreign key(外键字段名) references 主表（主表列名);

删除外键
alter table 表名 drop foreign key 外键名称;
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`删除/更新行为`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202401271954410.png`,alt:`image-20240127195407287`,loading:`lazy`,decoding:`async`})],-1),o(`p`,null,`cascade 级联`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`ALTER TABLE 表名 ADD CONSTRAINT 外键名称 FOREIGN KEY (外键字段) REFERENCES 主表名(主表字段名) ON UPDATE 行为 ON DELETE 行为; 更新时执行这个行为，删除时执行这个行为
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h2`,{id:`多表查询`,tabindex:`-1`},[s(`多表查询 `),o(`a`,{class:`header-anchor`,href:`#多表查询`,"aria-label":`Permalink to "多表查询"`},`​`)],-1),o(`h3`,{id:`多表关系`,tabindex:`-1`},[s(`多表关系 `),o(`a`,{class:`header-anchor`,href:`#多表关系`,"aria-label":`Permalink to "多表关系"`},`​`)],-1),o(`ul`,null,[o(`li`,null,`一对多（多对一）`),o(`li`,null,`多对多`),o(`li`,null,`一对一`)],-1),o(`h4`,{id:`一对多`,tabindex:`-1`},[s(`一对多 `),o(`a`,{class:`header-anchor`,href:`#一对多`,"aria-label":`Permalink to "一对多"`},`​`)],-1),o(`p`,null,`案例：部门与员工 关系：一个部门对应多个员工，一个员工对应一个部门 实现：在多的一方建立外键，指向一的一方的主键`,-1),o(`h4`,{id:`多对多`,tabindex:`-1`},[s(`多对多 `),o(`a`,{class:`header-anchor`,href:`#多对多`,"aria-label":`Permalink to "多对多"`},`​`)],-1),o(`p`,null,`案例：学生与课程 关系：一个学生可以选多门课程，一门课程也可以供多个学生选修 实现：建立第三张中间表，中间表至少包含两个外键，分别关联两方主键`,-1),o(`h4`,{id:`一对一`,tabindex:`-1`},[s(`一对一 `),o(`a`,{class:`header-anchor`,href:`#一对一`,"aria-label":`Permalink to "一对一"`},`​`)],-1),o(`p`,null,`案例：用户与用户详情 关系：一对一关系，多用于单表拆分，将一张表的基础字段放在一张表中，其他详情字段放在另一张表中，以提升操作效率 实现：在任意一方加入外键，关联另外一方的主键，并且设置外键为唯一的（UNIQUE）`,-1),o(`h3`,{id:`查询`,tabindex:`-1`},[s(`查询 `),o(`a`,{class:`header-anchor`,href:`#查询`,"aria-label":`Permalink to "查询"`},`​`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`合并查询（笛卡尔积，会展示所有组合结果）：
select * from employee, dept;
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`blockquote`,null,[o(`p`,null,`笛卡尔积：两个集合A集合和B集合的所有组合情况（在多表查询时，需要消除无效的笛卡尔积）`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`消除无效笛卡尔积：
select * from employee, dept where employee.dept = dept.id;
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202401281951405.png`,alt:`image-20240128195137288`,loading:`lazy`,decoding:`async`})],-1),o(`h3`,{id:`内连接查询`,tabindex:`-1`},[s(`内连接查询 `),o(`a`,{class:`header-anchor`,href:`#内连接查询`,"aria-label":`Permalink to "内连接查询"`},`​`)],-1),o(`p`,null,`内连接查询的是两张表交集的部分`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`隐式内连接：
SELECT 字段列表 FROM 表1, 表2 WHERE 条件 ...;

显式内连接：
SELECT 字段列表 FROM 表1 [ INNER ] JOIN 表2 ON 连接条件 ...；
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`显式性能比隐式高`,-1),o(`p`,null,`例子：`,-1),o(`div`,{class:`language-mysql`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`mysql`),o(`pre`,null,[o(`code`,{class:`language-mysql`},`-- 查询员工姓名，及关联的部门的名称
-- 隐式
select e.name, d.name from employee as e, dept as d where e.dept = d.id;
-- 显式
select e.name, d.name from employee as e inner join dept as d on e.dept = d.id;
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h3`,{id:`外连接查询`,tabindex:`-1`},[s(`外连接查询 `),o(`a`,{class:`header-anchor`,href:`#外连接查询`,"aria-label":`Permalink to "外连接查询"`},`​`)],-1),o(`p`,null,`左外连接： 查询左表所有数据，以及两张表交集部分数据`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`SELECT 字段列表 FROM 表1 LEFT [ OUTER ] JOIN 表2 ON 条件 ...;
相当于查询表1的所有数据，包含表1和表2交集部分数据
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`右外连接： 查询右表所有数据，以及两张表交集部分数据`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`SELECT 字段列表 FROM 表1 RIGHT [ OUTER ] JOIN 表2 ON 条件 ...;
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`例子：`,-1),o(`div`,{class:`language-mysql`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`mysql`),o(`pre`,null,[o(`code`,{class:`language-mysql`},`左
select e.*, d.name from employee as e left outer join dept as d on e.dept = d.id;
select d.name, e.* from dept d left outer join emp e on e.dept = d.id;  -- 这条语句与下面的语句效果一样
右
select d.name, e.* from employee as e right outer join dept as d on e.dept = d.id;
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`左连接可以查询到没有dept的employee，右连接可以查询到没有employee的dept`,-1),o(`h3`,{id:`自连接查询`,tabindex:`-1`},[s(`自连接查询 `),o(`a`,{class:`header-anchor`,href:`#自连接查询`,"aria-label":`Permalink to "自连接查询"`},`​`)],-1),o(`p`,null,`当前表与自身的连接查询，自连接必须使用表别名`,-1),o(`p`,null,[s(`语法： `),o(`code`,null,`SELECT 字段列表 FROM 表A 别名A JOIN 表A 别名B ON 条件 ...;`)],-1),o(`p`,null,`自连接查询，可以是内连接查询，也可以是外连接查询`,-1),o(`p`,null,`例子：`,-1),o(`div`,{class:`language-mysql`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`mysql`),o(`pre`,null,[o(`code`,{class:`language-mysql`},`-- 查询员工及其所属领导的名字
select a.name, b.name from employee a, employee b where a.manager = b.id;
-- 没有领导的也查询出来
select a.name, b.name from employee a left join employee b on a.manager = b.id;
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h3`,{id:`联合查询-union-union-all`,tabindex:`-1`},[s(`联合查询 union, union all `),o(`a`,{class:`header-anchor`,href:`#联合查询-union-union-all`,"aria-label":`Permalink to "联合查询 union, union all"`},`​`)],-1),o(`p`,null,`把多次查询的结果合并，形成一个新的查询集`,-1),o(`p`,null,`语法：`,-1),o(`div`,{class:`language-mysql`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`mysql`),o(`pre`,null,[o(`code`,{class:`language-mysql`},`SELECT 字段列表 FROM 表A ...
UNION [ALL]
SELECT 字段列表 FROM 表B ...
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h4`,{id:`注意事项`,tabindex:`-1`},[s(`注意事项 `),o(`a`,{class:`header-anchor`,href:`#注意事项`,"aria-label":`Permalink to "注意事项"`},`​`)],-1),o(`ul`,null,[o(`li`,null,`UNION ALL 会有重复结果，UNION 不会`),o(`li`,null,`联合查询比使用or效率高，不会使索引失效`)],-1),o(`h3`,{id:`子查询`,tabindex:`-1`},[s(`子查询 `),o(`a`,{class:`header-anchor`,href:`#子查询`,"aria-label":`Permalink to "子查询"`},`​`)],-1),o(`p`,null,"SQL语句中嵌套SELECT语句，称谓嵌套查询，又称子查询。 `",-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`SELECT * FROM t1 WHERE column1 = ( SELECT column1 FROM t2);
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,[s("` "),o(`strong`,null,`子查询外部的语句可以是 INSERT / UPDATE / DELETE / SELECT 的任何一个`)],-1),o(`p`,null,`根据子查询结果可以分为：`,-1),o(`ul`,null,[o(`li`,null,`标量子查询（子查询结果为单个值）`),o(`li`,null,`列子查询（子查询结果为一列）`),o(`li`,null,`行子查询（子查询结果为一行）`),o(`li`,null,`表子查询（子查询结果为多行多列）`)],-1),o(`p`,null,`根据子查询位置可分为：`,-1),o(`ul`,null,[o(`li`,null,`WHERE 之后`),o(`li`,null,`FROM 之后`),o(`li`,null,`SELECT 之后`)],-1),o(`h4`,{id:`标量子查询`,tabindex:`-1`},[s(`标量子查询 `),o(`a`,{class:`header-anchor`,href:`#标量子查询`,"aria-label":`Permalink to "标量子查询"`},`​`)],-1),o(`p`,null,`子查询返回的结果是单个值（数字、字符串、日期等）。 常用操作符：- < > > >= < <=`,-1),o(`p`,null,`例子：`,-1),o(`div`,{class:`language-mysql`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`mysql`),o(`pre`,null,[o(`code`,{class:`language-mysql`},`-- 查询销售部所有员工
select id from dept where name = '销售部';
-- 根据销售部部门ID，查询员工信息
select * from employee where dept = 4;
-- 合并（子查询）
select * from employee where dept = (select id from dept where name = '销售部');

-- 查询xxx入职之后的员工信息
select * from employee where entrydate > (select entrydate from employee where name = 'xxx');
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h4`,{id:`列子查询`,tabindex:`-1`},[s(`列子查询 `),o(`a`,{class:`header-anchor`,href:`#列子查询`,"aria-label":`Permalink to "列子查询"`},`​`)],-1),o(`p`,null,`返回的结果是一列（可以是多行）。`,-1),o(`p`,null,`常用操作符：`,-1),o(`table`,null,[o(`thead`,null,[o(`tr`,null,[o(`th`,null,`操作符`),o(`th`,null,`描述`)])]),o(`tbody`,null,[o(`tr`,null,[o(`td`,null,`IN`),o(`td`,null,`在指定的集合范围内，多选一`)]),o(`tr`,null,[o(`td`,null,`NOT IN`),o(`td`,null,`不在指定的集合范围内`)]),o(`tr`,null,[o(`td`,null,`ANY`),o(`td`,null,`子查询返回列表中，有任意一个满足即可`)]),o(`tr`,null,[o(`td`,null,`SOME`),o(`td`,null,`与ANY等同，使用SOME的地方都可以使用ANY`)]),o(`tr`,null,[o(`td`,null,`ALL`),o(`td`,null,`子查询返回列表的所有值都必须满足`)])])],-1),o(`p`,null,`例子：`,-1),o(`div`,{class:`language-mysql`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`mysql`),o(`pre`,null,[o(`code`,{class:`language-mysql`},`-- 查询销售部和市场部的所有员工信息
select * from employee where dept in (select id from dept where name = '销售部' or name = '市场部');
-- 查询比财务部所有人工资都高的员工信息
select * from employee where salary > all(select salary from employee where dept = (select id from dept where name = '财务部'));
-- 查询比研发部任意一人工资高的员工信息
select * from employee where salary > any (select salary from employee where dept = (select id from dept where name = '研发部'));
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h4`,{id:`行子查询`,tabindex:`-1`},[s(`行子查询 `),o(`a`,{class:`header-anchor`,href:`#行子查询`,"aria-label":`Permalink to "行子查询"`},`​`)],-1),o(`p`,null,`返回的结果是一行（可以是多列）。 常用操作符：=, <, >, IN, NOT IN`,-1),o(`p`,null,`例子：`,-1),o(`div`,{class:`language-mysql`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`mysql`),o(`pre`,null,[o(`code`,{class:`language-mysql`},`-- 查询与xxx的薪资及直属领导相同的员工信息
select * from employee where (salary, manager) = (12500, 1);
select * from employee where (salary, manager) = (select salary, manager from employee where name = 'xxx');
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h4`,{id:`表子查询`,tabindex:`-1`},[s(`表子查询 `),o(`a`,{class:`header-anchor`,href:`#表子查询`,"aria-label":`Permalink to "表子查询"`},`​`)],-1),o(`p`,null,`返回的结果是多行多列 常用操作符：IN`,-1),o(`p`,null,`例子：`,-1),o(`div`,{class:`language-mysql`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`mysql`),o(`pre`,null,[o(`code`,{class:`language-mysql`},`-- 查询与xxx1，xxx2的职位和薪资相同的员工
select * from employee where (job, salary) in (select job, salary from employee where name = 'xxx1' or name = 'xxx2');
-- 查询入职日期是2006-01-01之后的员工，及其部门信息
select e.*, d.* from (select * from employee where entrydate > '2006-01-01') as e left join dept as d on e.dept = d.id;
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h2`,{id:`事务`,tabindex:`-1`},[s(`事务 `),o(`a`,{class:`header-anchor`,href:`#事务`,"aria-label":`Permalink to "事务"`},`​`)],-1),o(`p`,null,`事务是一组操作的集合，事务会把所有操作作为一个整体一起向系统提交或撤销操作请求，即这些操作要么同时成功，要么同时失败。`,-1),o(`p`,null,`基本操作：`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`-- 1. 查询张三账户余额select * from account where name = '张三';-- 2. 将张三账户余额-1000update account set money = money - 1000 where name = '张三';-- 此语句出错后张三钱减少但是李四钱没有增加模拟sql语句错误-- 3. 将李四账户余额+1000update account set money = money + 1000 where name = '李四';-- 查看事务提交方式SELECT @@AUTOCOMMIT;-- 设置事务提交方式，1为自动提交，0为手动提交，该设置只对当前会话有效SET @@AUTOCOMMIT = 0;-- 提交事务COMMIT;-- 回滚事务ROLLBACK;-- 设置手动提交后上面代码改为：select * from account where name = '张三';update account set money = money - 1000 where name = '张三';update account set money = money + 1000 where name = '李四';commit;
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`操作方式二：`,-1),o(`p`,null,[s(`开启事务： `),o(`code`,null,`START TRANSACTION 或 BEGIN TRANSACTION;`),s(` 提交事务： `),o(`code`,null,`COMMIT;`),s(` 回滚事务： `),o(`code`,null,`ROLLBACK;`)],-1),o(`p`,null,`操作实例：`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`start transaction;select * from account where name = '张三';update account set money = money - 1000 where name = '张三';update account set money = money + 1000 where name = '李四';commit;
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h3`,{id:`四大特性acid`,tabindex:`-1`},[s(`四大特性ACID `),o(`a`,{class:`header-anchor`,href:`#四大特性acid`,"aria-label":`Permalink to "四大特性ACID"`},`​`)],-1),o(`ul`,null,[o(`li`,null,`原子性(Atomicity)：事务是不可分割的最小操作但愿，要么全部成功，要么全部失败`),o(`li`,null,`一致性(Consistency)：事务完成时，必须使所有数据都保持一致状态`),o(`li`,null,`隔离性(Isolation)：数据库系统提供的隔离机制，保证事务在不受外部并发操作影响的独立环境下运行`),o(`li`,null,`持久性(Durability)：事务一旦提交或回滚，它对数据库中的数据的改变就是永久的`)],-1),o(`h3`,{id:`并发事务`,tabindex:`-1`},[s(`并发事务 `),o(`a`,{class:`header-anchor`,href:`#并发事务`,"aria-label":`Permalink to "并发事务"`},`​`)],-1),o(`table`,null,[o(`thead`,null,[o(`tr`,null,[o(`th`,{style:{"text-align":`left`}},`问题`),o(`th`,{style:{"text-align":`left`}},`描述`)])]),o(`tbody`,null,[o(`tr`,null,[o(`td`,{style:{"text-align":`left`}},`脏读`),o(`td`,{style:{"text-align":`left`}},`一个事务读到另一个事务还没提交的数据`)]),o(`tr`,null,[o(`td`,{style:{"text-align":`left`}},`不可重复读`),o(`td`,{style:{"text-align":`left`}},`一个事务先后读取同一条记录，但两次读取的数据不同`)]),o(`tr`,null,[o(`td`,{style:{"text-align":`left`}},`幻读`),o(`td`,{style:{"text-align":`left`}},`一个事务按照条件查询数据时，没有对应的数据行，但是再插入数据时，又发现这行数据已经存在`)])])],-1),o(`blockquote`,null,[o(`p`,null,[s(`这三个问题的详细演示：`),o(`a`,{href:`https://www.bilibili.com/video/BV1Kr4y1i7ru?p=55cd`,target:`_blank`,rel:`noreferrer`},`https://www.bilibili.com/video/BV1Kr4y1i7ru?p=55cd`)])],-1),o(`p`,null,`并发事务隔离级别：`,-1),o(`table`,null,[o(`thead`,null,[o(`tr`,null,[o(`th`,{style:{"text-align":`left`}},`隔离级别`),o(`th`,{style:{"text-align":`left`}},`脏读`),o(`th`,{style:{"text-align":`left`}},`不可重复读`),o(`th`,{style:{"text-align":`left`}},`幻读`)])]),o(`tbody`,null,[o(`tr`,null,[o(`td`,{style:{"text-align":`left`}},`Read uncommitted`),o(`td`,{style:{"text-align":`left`}},`√`),o(`td`,{style:{"text-align":`left`}},`√`),o(`td`,{style:{"text-align":`left`}},`√`)]),o(`tr`,null,[o(`td`,{style:{"text-align":`left`}},`Read committed`),o(`td`,{style:{"text-align":`left`}},`×`),o(`td`,{style:{"text-align":`left`}},`√`),o(`td`,{style:{"text-align":`left`}},`√`)]),o(`tr`,null,[o(`td`,{style:{"text-align":`left`}},`Repeatable Read(默认)`),o(`td`,{style:{"text-align":`left`}},`×`),o(`td`,{style:{"text-align":`left`}},`×`),o(`td`,{style:{"text-align":`left`}},`√`)]),o(`tr`,null,[o(`td`,{style:{"text-align":`left`}},`Serializable`),o(`td`,{style:{"text-align":`left`}},`×`),o(`td`,{style:{"text-align":`left`}},`×`),o(`td`,{style:{"text-align":`left`}},`×`)])])],-1),o(`ul`,null,[o(`li`,null,`√表示在当前隔离级别下该问题会出现`),o(`li`,null,`Serializable 性能最低；Read uncommitted 性能最高，数据安全性最差`)],-1),o(`p`,null,[s(`查看事务隔离级别： `),o(`code`,null,`SELECT @@TRANSACTION_ISOLATION;`),s(` 设置事务隔离级别： `),o(`code`,null,`SET [ SESSION | GLOBAL ] TRANSACTION ISOLATION LEVEL {READ UNCOMMITTED | READ COMMITTED | REPEATABLE READ | SERIALIZABLE };`),s(` SESSION 是会话级别，表示只针对当前会话有效，GLOBAL 表示对所有会话有效`)],-1)]]),"main-header":c(()=>[n(e.$slots,`main-header`)]),"main-header-after":c(()=>[n(e.$slots,`main-header-after`)]),"main-nav":c(()=>[n(e.$slots,`main-nav`)]),"main-content-before":c(()=>[n(e.$slots,`main-content-before`)]),"main-content":c(()=>[n(e.$slots,`main-content`)]),"main-content-after":c(()=>[n(e.$slots,`main-content-after`)]),"main-nav-before":c(()=>[n(e.$slots,`main-nav-before`)]),"main-nav-after":c(()=>[n(e.$slots,`main-nav-after`)]),comment:c(()=>[n(e.$slots,`comment`)]),footer:c(()=>[n(e.$slots,`footer`)]),aside:c(()=>[n(e.$slots,`aside`)]),"aside-custom":c(()=>[n(e.$slots,`aside-custom`)]),default:c(()=>[n(e.$slots,`default`)]),_:3},8,[`frontmatter`])}}};export{f as default};