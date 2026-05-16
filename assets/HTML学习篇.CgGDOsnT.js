import{Bt as e,Gn as t,Gt as n,H as r,Qn as i,Rt as a,V as o,X as s,_n as c}from"./framework.DfD1zdSt.js";import{t as l}from"./theme.DMgGaAyl.js";import"./chunks/vue-i18n.BSMUyWAh.js";import{a as u,i as d}from"./chunks/vue-router.DZdD3Cav.js";var f={__name:`HTML学习篇`,setup(f,{expose:p}){let m=t(JSON.parse(`{"title":"HTML学习篇","description":"","frontmatter":{"title":"HTML学习篇","date":"2023-12-09 18:12:26","tags":["题解"],"categories":["学习笔记"],"firstImage":"https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202312101447318.png"},"headers":[],"relativePath":"pages/posts/HTML学习篇.md"}`)),h=u(),g=d(),_=Object.assign(g.meta.frontmatter||{},m.value?.frontmatter||{});return h.currentRoute.value.data=m.value,e(`valaxy:frontmatter`,_),globalThis.$frontmatter=_,p({frontmatter:{title:`HTML学习篇`,date:`2023-12-09 18:12:26`,tags:[`题解`],categories:[`学习笔记`]}}),(e,t)=>{let u=l;return a(),r(u,{frontmatter:i(_)},{"main-content-md":c(()=>[...t[0]||=[o(`p`,null,`摘要：HTML是什么 HTML 不是一门编程语言，而是一种用于定义内容结构的标记语言。HTML 由一系列的组成，这些元素可以用来包围不同部分的内容，使其以某种方式呈现或者工作。一对可以为一段文字或者一张图片添加超链接，将文字设置为斜体，改变字号，等等。`,-1),o(`p`,null,`<!-- more -->`,-1),o(`h1`,{id:`html是什么`,tabindex:`-1`},[s(`HTML是什么 `),o(`a`,{class:`header-anchor`,href:`#html是什么`,"aria-label":`Permalink to "HTML是什么"`},`​`)],-1),o(`p`,null,[s(`HTML 不是一门编程语言，而是一种用于定义内容结构的`),o(`em`,null,`标记语言`),s(`。HTML 由一系列的`),o(`a`,{href:`https://developer.mozilla.org/zh-CN/docs/Glossary/Element`,target:`_blank`,rel:`noreferrer`},`元素`),s(`组成，这些元素可以用来包围不同部分的内容，使其以某种方式呈现或者工作。一对`),o(`a`,{href:`https://developer.mozilla.org/zh-CN/docs/Glossary/Tag`,target:`_blank`,rel:`noreferrer`},`标签`),s(`可以为一段文字或者一张图片添加超链接，将文字设置为斜体，改变字号，等等。`)],-1),o(`p`,null,[s(`在了解前，先看一下大概：`),o(`a`,{href:`https://www.runoob.com/tags/html-reference.html`,target:`_blank`,rel:`noreferrer`},`HTML 标签列表(字母排序)`)],-1),o(`h1`,{id:`html学习`,tabindex:`-1`},[s(`HTML学习 `),o(`a`,{class:`header-anchor`,href:`#html学习`,"aria-label":`Permalink to "HTML学习"`},`​`)],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202312101447318.png`,alt:`image-20231209193738651-170213087190711`,loading:`lazy`,decoding:`async`})],-1),o(`h2`,{id:`基础语法`,tabindex:`-1`},[s(`基础语法 `),o(`a`,{class:`header-anchor`,href:`#基础语法`,"aria-label":`Permalink to "基础语法"`},`​`)],-1),o(`h3`,{id:`标签`,tabindex:`-1`},[s(`标签 `),o(`a`,{class:`header-anchor`,href:`#标签`,"aria-label":`Permalink to "标签"`},`​`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`单标签 ：   无属性<标签名 />

​          有属性<标签名 属性名="属性值"></标签名>

双标签 ：   无属性 <标签名></标签名>

​           有属性<标签名 属性名="属性值"></标签名>    
DOCTYPE

<!DOCTYPE html> heml 5版本声明，需写在文档第一行

`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`例如：<meta charset="utf-8" />   meta为标签，charset为属性，utf-8为属性值
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,[o(`strong`,null,`‘ / ’是结束标志`)],-1),o(`h3`,{id:`整体结构`,tabindex:`-1`},[s(`整体结构 `),o(`a`,{class:`header-anchor`,href:`#整体结构`,"aria-label":`Permalink to "整体结构"`},`​`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`<html>...</html> 表示当前是一个网页

<head>...</head> 头部信息

<body>...</body> 身体部分
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h3`,{id:`doctype`,tabindex:`-1`},[s(`DOCTYPE `),o(`a`,{class:`header-anchor`,href:`#doctype`,"aria-label":`Permalink to "DOCTYPE"`},`​`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`<!DOCTYPE html>  html 5版本声明，需写在文档的第一行，‘！’要加
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h3`,{id:`例子`,tabindex:`-1`},[s(`例子 `),o(`a`,{class:`header-anchor`,href:`#例子`,"aria-label":`Permalink to "例子"`},`​`)],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202312101448705.png`,alt:`image-20231209211145818-170213088699513`,loading:`lazy`,decoding:`async`})],-1),o(`h2`,{id:`常用标签`,tabindex:`-1`},[s(`常用标签 `),o(`a`,{class:`header-anchor`,href:`#常用标签`,"aria-label":`Permalink to "常用标签"`},`​`)],-1),o(`p`,null,[o(`strong`,null,`标签的属性之间要以空格隔开`)],-1),o(`p`,null,[s(`若想要给页面设置颜色，参考以下文章：`),o(`a`,{href:`https://www.runoob.com/cssref/pr-text-color.html`,target:`_blank`,rel:`noreferrer`},`CSS color 属性`)],-1),o(`h3`,{id:`标题和水平线`,tabindex:`-1`},[s(`标题和水平线 `),o(`a`,{class:`header-anchor`,href:`#标题和水平线`,"aria-label":`Permalink to "标题和水平线"`},`​`)],-1),o(`p`,null,`标题标签：`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`<h1></h1>~<h6></h6>  标题依次从大到小
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,[o(`em`,null,[o(`strong`,null,`不建议在页面中使用多个h1标签，h1标签可以被搜索引擎获取到，如果有多个，可能会被搜索引擎拉黑`)])],-1),o(`p`,null,`水平线标签：`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`<hr>   放在body内任意一行，都会在该行生成一个水平线

常用属性：
width 宽度    1.百分比 
              2. px

align 对齐方式 left      right     center（默认）

size  水平线粗细

例如：
<hr width="50%" alien="left" size="5” /> 
宽度为50% 居左 大小为5的水平线
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h3`,{id:`段落和换行`,tabindex:`-1`},[s(`段落和换行 `),o(`a`,{class:`header-anchor`,href:`#段落和换行`,"aria-label":`Permalink to "段落和换行"`},`​`)],-1),o(`p`,null,`段落标签：`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`<p>...<p/> 段落会自动换行
常用属性：
    align 对齐方式:
             left  居左对齐
             right 居右对齐
             center 居中对齐
             justify 两端对齐
例如：             
<p align="left">...</p> 
段落居左对齐
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`换行标签：`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`<br/> 有几个换几行
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,[o(`strong`,null,`段落标签和换行标签的区别：`)],-1),o(`p`,null,`段落标签换行的距离比换行标签换行的距离大`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202312101513952.png`,alt:`image-20231210151308888`,loading:`lazy`,decoding:`async`})],-1),o(`p`,null,`第一行与第二行间用的是段落标签，第四行和第五行之间用的是换行标签`,-1),o(`h3`,{id:`列表`,tabindex:`-1`},[s(`列表 `),o(`a`,{class:`header-anchor`,href:`#列表`,"aria-label":`Permalink to "列表"`},`​`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`无序列表：
格式：<ul>
       <li></li>
       <li></li>
    </ul>
常用属性：
    type列表的图标：
           square 实心方块
           circle 空心圆
           disc   实心圆      
例如：           
 <ul type="square"> 
       <li>...</li>
       <li>...</li>
  </ul>   
  ...前有实心方块    
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`有序列表：
格式：<ol>
        <li></li>
       <li></li>
    </ol>
常用属性：
    type 列表的图标
        1  数字序号
        a  小写字母
        A  大写字母
        i  小写罗马字母
        I  大写罗马字母 
例如：        
<ol type="1">
    <li>...</li>
    <li>...</li>
</ol>   
...前从1开始标号
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h3`,{id:`div和span`,tabindex:`-1`},[s(`div和span `),o(`a`,{class:`header-anchor`,href:`#div和span`,"aria-label":`Permalink to "div和span"`},`​`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`div标签
   层，块级元素，标签会自动换行
   常用于布局。
   常用元素：
         align   div元素中内容的对齐方式

span标签
    块，行内元素，标签不会自动换行
       
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,[o(`strong`,null,`div标签和span标签主要结合css用于布局`)],-1),o(`p`,null,[s(`区别参考csdn：`),o(`a`,{href:`https://blog.csdn.net/Obito_TXP/article/details/120106931#:~:text=div%E5%92%8Cspan%E7%9A%84%E5%8C%BA%E5%88%AB%E6%98%AF%EF%BC%9Adiv%E6%A0%87%E7%AD%BE%E6%98%AF%E5%9D%97%E7%BA%A7%E5%85%83%E7%B4%A0%EF%BC%8C%E6%AF%8F%E4%B8%AAdiv%E6%A0%87%E7%AD%BE%E9%83%BD%E4%BC%9A%E4%BB%8E%E6%96%B0%E8%A1%8C%E5%BC%80%E5%A7%8B%E6%98%BE%E7%A4%BA%EF%BC%8C%E5%8D%A0%E6%8D%AE%E4%B8%80%E8%A1%8C%EF%BC%9Bdiv%E6%A0%87%E7%AD%BE%E5%86%85%E5%8F%AF%E4%BB%A5%E6%B7%BB%E5%8A%A0%E5%85%B6%E4%BB%96%E7%9A%84%E6%A0%87%E7%AD%BE%E5%85%83%E7%B4%A0%EF%BC%88%E8%A1%8C%E5%86%85%E5%85%83%E7%B4%A0%E3%80%81%E5%9D%97%E7%BA%A7%E5%85%83%E7%B4%A0%E9%83%BD%E8%A1%8C%EF%BC%89%E3%80%82,%E8%80%8C%EF%BC%8Cspan%E6%A0%87%E7%AD%BE%E6%98%AF%E8%A1%8C%E5%86%85%E5%85%83%E7%B4%A0%EF%BC%8C%E4%BC%9A%E5%9C%A8%E4%B8%80%E8%A1%8C%E6%98%BE%E7%A4%BA%EF%BC%9Bspan%E6%A0%87%E7%AD%BE%E5%86%85%E5%8F%AA%E8%83%BD%E6%B7%BB%E5%8A%A0%E8%A1%8C%E5%86%85%E5%85%83%E7%B4%A0%E7%9A%84%E6%A0%87%E7%AD%BE%E6%88%96%E6%96%87%E6%9C%AC%E3%80%82`,target:`_blank`,rel:`noreferrer`},`span和div的区别是什么`)],-1),o(`h3`,{id:`格式化标签`,tabindex:`-1`},[s(`格式化标签 `),o(`a`,{class:`header-anchor`,href:`#格式化标签`,"aria-label":`Permalink to "格式化标签"`},`​`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`font
   设置字体相关的属性
   常用属性：
        color 字体颜色
        size  字体大小
        face  字体风格
 例如：       
 <font color="red" size="5" face="楷体">
       ...
 </font> 
 ...为红色，字体大小为5的楷体
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`pre
   定义预格式化的文本。保留文本中的空格和换行。文本呈现等宽字体
例如：  
<pre>
     hello
     world
</pre>   
hello在一行，world在另一行，且hello前没有空格，world前有空格    
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`字体
    粗体：            例子
    b或者strong    <b>hello</b>   得到粗体hello
    
    斜体：
    i             <i>hello</i>   得到斜体hello
    
    下划线：
    u             <u>hello</u>   得到有下划线的hello
    
    中划线：
    del            <del>hello</del>  得到中间有一条线的hello
    
    下标：
    sub             H<sub>2<sub>O    得到H₂O
    
    上标
    sup             10<sup>2<sup>   得到10²
  
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h3`,{id:`a标签`,tabindex:`-1`},[s(`a标签 `),o(`a`,{class:`header-anchor`,href:`#a标签`,"aria-label":`Permalink to "a标签"`},`​`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`超链接a标签：
    定义超链接：用于从一个页面链接到另外一个页面
    
    常用属性
        href  必须要有属性值（若无，则a标签与普通标签无异）
            需要跳转的地址
            
       例： <a href="网站地址">网站</a>   覆盖当前页面，跳转到新的页面
        
        target
               窗口打开的方式
               _self  当前窗口打开（默认）
               _blank 新开空白窗口打开
               
     例：   <a href="网站地址" target="_blank">网站</a>  新开页面打开网站 
    
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h3`,{id:`a标签扩展——锚点的实现`,tabindex:`-1`},[s(`a标签扩展——锚点的实现 `),o(`a`,{class:`header-anchor`,href:`#a标签扩展——锚点的实现`,"aria-label":`Permalink to "a标签扩展——锚点的实现"`},`​`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`如果想要跳转到当前页面，那么href的值可以设置为#
    1.利用a标签的name属性
    
     <a name="dd"></a>a...
        b...
        c...
        d...
     <a href="#dd">跳转</a>  
     点击跳转就会跳转到a...这行。
     
     注意：若未设name属性，则直接跳转到页面最上方  例如：<a href="# ">跳转</a> 点击跳转就会来到页面最上方
     
     2.利用其他标签的id属性
     
        <p > 1...</p>
          <p id="dd"> 2...</p>
          <p> 3...</p> 
         <p> 4...</p>
         <a href="#dd">跳转</a>
         点击跳转就会来到2...这一行
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h3`,{id:`图片`,tabindex:`-1`},[s(`图片 `),o(`a`,{class:`header-anchor`,href:`#图片`,"aria-label":`Permalink to "图片"`},`​`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`img 标签：
    必须属性：
    	src   被引入图片的地址
    常用属性：
        title 当鼠标悬停在图片上的文字
        alt   当图片加载失败时显示的文本
        width 设置图片的宽度
        height 设置图片的高度
        align  规定如何根据文本来排列图像
        border  给图片加框

例：
<img src="图片地址" alt="图片错误"/>
<img src="图片地址" width="200px" height="100px"/>

<a href="网站地址">
<img src="图片地址 " title="..." border="2"/>
</a>
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h3`,{id:`表格`,tabindex:`-1`},[s(`表格 `),o(`a`,{class:`header-anchor`,href:`#表格`,"aria-label":`Permalink to "表格"`},`​`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,` 表格标签：
    table 表示表格
    tr    表示表格中的行（每一行可以包含多个th或tr）
    td    表示表格中的标准单元格
    th    表示表格中的表头单元格（具有标题的效果，字体加粗，居中显示）
    
************************    
 table 常用属性
     border 表格的边框
     width  表格的宽度（使用像素值或百分比，如果是百分比，参考的是上一元素，如果上一元素未设置，则参考屏幕宽度）
     height 表格的高度
     align  表格的对齐方式（left right center）
     
************************     
 tr和th 常用属性 
       align 每行中文本内容的水平方向对齐方式
       valign 每行中文本内容的垂直方向对齐方式（top bottom middle）
       bgcolor 设置行的背景颜色
       
********************
 css样式
   border-collapse:collapse; 合并表格边框
  
 **************** 
 合并单元格
    <td>的colspan和rowspan分别规定单元格横跨的列数和行数
    纵向合并 rowspan
    横向合并 colspan
       
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`例：
<table border="1" width="500px" align="center" style="border-collaspe:collaspe;">
<tr>
   <th colspan="2">班级+姓名</th>
   <th>年龄</th>
   <th>性别</th>
</tr>
<tr align="center">
    <td rowspan="2">101班</td>
    <td>张三</td>
    <td>18</td>
    <td>男</td>
 </tr>   
 <tr align="center">
    <td >101班</td>
    <td>李四</td>
    <td>19</td>
    <td>女</td>
 </tr>   
 <tr align="center">
    <td>102班</td>
    <td>王五</td>
    <td>19</td>
    <td>男</td>
 </tr>   
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,[s(`效果图：`),o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202312122036586.png`,alt:`image-20231212203606559`})],-1),o(`h3`,{id:`表单form`,tabindex:`-1`},[s(`表单form `),o(`a`,{class:`header-anchor`,href:`#表单form`,"aria-label":`Permalink to "表单form"`},`​`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`	所有标签都有的属性：
	       id属性   用来标识元素的唯一性
	       name属性 提交数据时的参数名
	       style属性 设置元素的行内样式
	       class属性 设置元素的样式名
	       
******************************************************

	form 
        表单用于向服务器传输数据。form元素是块级元素，其前后会产生折行
        表单提交时，必须设置表单元素的name属性值，否则无法获取数据
        表单需要结合表单元素一起使用
        
       常用属性
          action 提交表单的地址
          method 提交方式（不区分大小写）
             get提交 GET
             post提交 POST
          target 提交数据时打开窗口的方式
             _self 当前窗口
             _blank 空白窗口
   
   GET请求和POST请求的区别：
        1.get请求时参数会跟在浏览器地址后面，而post请求不会
        2.get请求相当于post而言，不那么安全
        3.get请求传递的数据长度是有限的，而post请求基本没有（长度与服务器有关）
        4.get请求比post快（2倍）
        5.get请求有缓存，而post无
 
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h3`,{id:`input标签`,tabindex:`-1`},[s(`input标签 `),o(`a`,{class:`header-anchor`,href:`#input标签`,"aria-label":`Permalink to "input标签"`},`​`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,` input标签（行内元素）
     type   元素的类型
          text  文本框
          psaaword 密码框
          radio   单选框
          checkbox 复选框
          file     文件域
          hidden   隐藏域
          button   普通按钮
          submit   提交按钮
          reset    重置按钮
          date     日期框
      value    元素的值
      readonly  只读状态
      maxlength  最多输入的长度
      disabled   禁用标签
      
注意：
    1.单选框需要通过name属性设置为一组，复选框需要通过name属性设置为一组。
    2.如果是上传文件的表单，则表单需要设置一个属性 enctype=“multipart/form-date”，提交方式为post请求
    3.没有name属性是无法提交数据的。
    
    
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`<body>
    <form action="http://www.baidu.com" method="get">
     文本框：<input type="text" value="zhangsan" maxlength="10"/><br/>
     文本框：<input type="text" value="zhangsan" readonly="readonly"/><br/>
     密码框:<input type="password" /><br />
     单选框：<input type="radio" value="man" name="sex">男
     		<input type="radio" value="woman" name="sex">女 <br/>
     复选框：<input type="checkbox" value="1" name="test"> 1
            <input type="checkbox" value="2" name="test"> 2
     		<input type="checkbox" value="3" name="test"> 3 <br/>
     文件域: <input type="file" /><br/>
     隐藏域：<input type="hidden" value="admin" /><br/>
     普通按钮：<input type="button" value="普通按钮"><br/>
     提交按钮：<input type="submit" value="提交按钮"><br/>
     重置按钮：<input type="reset" value="重置按钮"><br/>
     日期框：<input type="date" /><br/>
    </form>
</body>    
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202312122033423.png`,alt:`image-20231212203322384`,loading:`lazy`,decoding:`async`})],-1),o(`h3`,{id:`textarea和label标签`,tabindex:`-1`},[s(`textarea和label标签 `),o(`a`,{class:`header-anchor`,href:`#textarea和label标签`,"aria-label":`Permalink to "textarea和label标签"`},`​`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`textarea: 定义可输入多行文本的控件
          cols 文本的可见宽度
          rows 文本的可见行数
label：元素聚焦
      for属性
      当for属性与元素的id属性一致时，点击label标签，会自动续航

例：
简历：<textarea cols="30" rows="10"></textarea>
  <label for="uname">姓名</label><input type="text" name="uname"/><br/>
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h3`,{id:`按钮`,tabindex:`-1`},[s(`按钮 `),o(`a`,{class:`header-anchor`,href:`#按钮`,"aria-label":`Permalink to "按钮"`},`​`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`input按钮：
   type="button"  普通按钮
   type="submit"  提交按钮
   type="reset"  重置按钮
button标签：
  type="button"  普通按钮
   type="submit"  提交按钮（默认）  注意 不写type就相当于提交按钮！！！
   type="reset"  重置按钮

`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h3`,{id:`下拉框`,tabindex:`-1`},[s(`下拉框 `),o(`a`,{class:`header-anchor`,href:`#下拉框`,"aria-label":`Permalink to "下拉框"`},`​`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`select 下拉框标签
option  下拉框的选项标签

select：
     multiple  设置下拉框多选
     size      设置下拉框可见选项数
     disabled  禁用元素
option：
      selected  默认选中值
      disabled  禁用某个选项
      value     提交给服务器的选项值
      注意： 如果设置了value属性值，则提交的是value的值
            如果未设置，则提交option双标签中的文本值
            value=""也相当于设置了。
            
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h2`,{id:`常用字符实体`,tabindex:`-1`},[s(`常用字符实体 `),o(`a`,{class:`header-anchor`,href:`#常用字符实体`,"aria-label":`Permalink to "常用字符实体"`},`​`)],-1),o(`h3`,{id:`常用字符实体-1`,tabindex:`-1`},[s(`常用字符实体 `),o(`a`,{class:`header-anchor`,href:`#常用字符实体-1`,"aria-label":`Permalink to "常用字符实体"`},`​`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`<   小于号   &lt
>   大于号   &gt
空格        &nbsp
版权         &copy
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`hr`,null,null,-1)]]),"main-header":c(()=>[n(e.$slots,`main-header`)]),"main-header-after":c(()=>[n(e.$slots,`main-header-after`)]),"main-nav":c(()=>[n(e.$slots,`main-nav`)]),"main-content-before":c(()=>[n(e.$slots,`main-content-before`)]),"main-content":c(()=>[n(e.$slots,`main-content`)]),"main-content-after":c(()=>[n(e.$slots,`main-content-after`)]),"main-nav-before":c(()=>[n(e.$slots,`main-nav-before`)]),"main-nav-after":c(()=>[n(e.$slots,`main-nav-after`)]),comment:c(()=>[n(e.$slots,`comment`)]),footer:c(()=>[n(e.$slots,`footer`)]),aside:c(()=>[n(e.$slots,`aside`)]),"aside-custom":c(()=>[n(e.$slots,`aside-custom`)]),default:c(()=>[n(e.$slots,`default`)]),_:3},8,[`frontmatter`])}}};export{f as default};