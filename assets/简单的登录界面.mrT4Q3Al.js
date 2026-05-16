import{Bt as e,Gn as t,Gt as n,H as r,Qn as i,Rt as a,V as o,X as s,_n as c}from"./framework.DfD1zdSt.js";import{t as l}from"./theme.DMgGaAyl.js";import"./chunks/vue-i18n.BSMUyWAh.js";import{a as u,i as d}from"./chunks/vue-router.DZdD3Cav.js";var f={__name:`简单的登录界面`,setup(f,{expose:p}){let m=t(JSON.parse(`{"title":"简单的登录界面","description":"","frontmatter":{"title":"简单的登录界面","date":"2024-02-02 21:07:32","tags":["题解"],"categories":["学习笔记"]},"headers":[],"relativePath":"pages/posts/简单的登录界面.md"}`)),h=u(),g=d(),_=Object.assign(g.meta.frontmatter||{},m.value?.frontmatter||{});return h.currentRoute.value.data=m.value,e(`valaxy:frontmatter`,_),globalThis.$frontmatter=_,p({frontmatter:{title:`简单的登录界面`,date:`2024-02-02 21:07:32`,tags:[`题解`],categories:[`学习笔记`]}}),(e,t)=>{let u=l;return a(),r(u,{frontmatter:i(_)},{"main-content-md":c(()=>[...t[0]||=[o(`p`,null,`摘要：1.编写一个登录界面 2.与mysql建立联系 line 5：要先在mysql中创建一个名为db随便的表，不然会报错 die 输出一条信息，并退出当前脚本 connecterror 返回上一次连接错误的错误描述报个错 3.注册 $result-numrows 返回结果集中行的数量 $result-f。`,-1),o(`p`,null,`<!-- more -->`,-1),o(`p`,null,[o(`a`,{href:`https://www.runoob.com/php/php-mysql-intro.html`,target:`_blank`,rel:`noreferrer`},`PHP MySQL 简介 | 菜鸟教程 (runoob.com)`)],-1),o(`h3`,{id:`_1-编写一个登录界面`,tabindex:`-1`},[s(`1.编写一个登录界面 `),o(`a`,{class:`header-anchor`,href:`#_1-编写一个登录界面`,"aria-label":`Permalink to "1.编写一个登录界面"`},`​`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>登录界面</title>
</head>
<body>

<h1>登录注册系统</h1>
<form action="result.php" method="post">
    <table>
        <tr>
            <td>请输入你的用户名</td>
            <td><input type="text" name="username"></td>
        </tr>
        <tr>
            <td>请输入你的密码</td>
            <td><input type="text" name="password"></td>
        </tr>
        <tr>
            <td colspan="2">
                <input type="submit" name="denglu" value="登录">
                <input type="submit" name="zhuce" value="注册">
            <td>
        </tr>
    </table>
</form>
</body>
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h3`,{id:`_2-与mysql建立联系`,tabindex:`-1`},[s(`2.与mysql建立联系 `),o(`a`,{class:`header-anchor`,href:`#_2-与mysql建立联系`,"aria-label":`Permalink to "2.与mysql建立联系"`},`​`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`<?php
$servername = "localhost";
$username = "你的用户名";
$password = "你的密码";
$dbname="db";  
$conn = new mysqli($servername, $username, $password,$dbname);

// 检测连接
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}
echo "连接成功";
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,[s(`line 5：`),o(`strong`,null,`要先在mysql中创建一个名为db(随便)的表，不然会报错`)],-1),o(`p`,null,`die( ) 输出一条信息，并退出当前脚本`,-1),o(`p`,null,`connect_error 返回上一次连接错误的错误描述(报个错)`,-1),o(`h3`,{id:`_3-注册`,tabindex:`-1`},[s(`3.注册 `),o(`a`,{class:`header-anchor`,href:`#_3-注册`,"aria-label":`Permalink to "3.注册"`},`​`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`<?php
$arg1=$_REQUEST['username'];
$arg2=$_REQUEST['password'];
$flag=0;
if($arg1==""||$arg2==""){
    $flag=1;
    $final=1;
 //echo "账户或密码不能为空"."<br/>";
}
else {
    if ($result->num_rows > 0) {
        // 输出数据
        while($row = $result->fetch_assoc()) {
        //查重
            if($arg1==$row["username"]){
                $final=5;
                // echo " 此用户名已存在 " . "<br />";
                break;
            }
        }
    }
}
if(!$flag){

    $sql = "insert into user (username, password)
values ('" . $arg1 . "','" . $arg2 . "')";

    //  echo $sql;
    if ($conn->query($sql) === TRUE) {
        $final=6;
        // echo " 注册成功 " . "<br />";
    } else {
        $final=7;
        // echo "注册失败". "<br />";
    }
}

$result->num_rows      返回结果集中行的数量

$result->fetch_assoc()  从结果集中取得一行作为关联数组

$conn->query(\\$sql)    对数据库进行查询     
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h3`,{id:`_4-登录`,tabindex:`-1`},[s(`4.登录 `),o(`a`,{class:`header-anchor`,href:`#_4-登录`,"aria-label":`Permalink to "4.登录"`},`​`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`<?php
//登录
$arg1=$_REQUEST['username'];
$arg2=$_REQUEST['password'];
$flag=0;
if($arg1=="" || $arg2==""){
    $final =1;
  //  echo " 用户名或密码不能为空！ " . "<br />";
}
else if ($result->num_rows > 0) {

    while($row = $result->fetch_assoc()) {
        if($arg1==$row["username"]){
            $flag=1;
            if($arg2==$row["password"]){
                $final =2;
                //echo " 登录成功 " ."<br />";
            }
            else{
                $final =3;
               // echo " 密码错误 " . "<br />";
                break;
            }
        }
    }
    if(!$flag)
        $final =4;
    //echo " 不存在此用户 " . "<br />";
} else {
    $final =4;
   // echo " 不存在此用户 " . "<br />";
}
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`_REQUEST 收集表单数据`,-1),o(`h3`,{id:`_5-将注册和登录结合`,tabindex:`-1`},[s(`5.将注册和登录结合 `),o(`a`,{class:`header-anchor`,href:`#_5-将注册和登录结合`,"aria-label":`Permalink to "5.将注册和登录结合"`},`​`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`<?php
include ('lianjie.php');
$sql="select username,password from user";
$result=$conn->query($sql);
$final=0;
if(!empty($_REQUEST["zhuce"])){
    include ('zhuce.php');
}
else if(!empty($_REQUEST['denglu'])){
    include("denglu.php");
}
switch ($final) {
    case 0:
        echo " 初始结果 " . "<br />";
        break;
    case 1:
        echo " 用户名或密码不能为空！ " . "<br />";
        break;
    case 2:
        echo " 登录成功 " . "<br />";
        break;
    case 3:
        echo " 密码错误 " . "<br />";
        break;
    case 4:
        echo " 不存在此用户 " . "<br />";
        break;
    case 5:
        echo " 此用户名已存在 " . "<br />";
        break;
    case 6:
        echo " 注册成功 " . "<br />";
        break;
    case 7:
        echo "注册失败" . "<br />" ;
        break;
    default:
        echo " 默认结果 " . "<br />";
        break;
}
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1)]]),"main-header":c(()=>[n(e.$slots,`main-header`)]),"main-header-after":c(()=>[n(e.$slots,`main-header-after`)]),"main-nav":c(()=>[n(e.$slots,`main-nav`)]),"main-content-before":c(()=>[n(e.$slots,`main-content-before`)]),"main-content":c(()=>[n(e.$slots,`main-content`)]),"main-content-after":c(()=>[n(e.$slots,`main-content-after`)]),"main-nav-before":c(()=>[n(e.$slots,`main-nav-before`)]),"main-nav-after":c(()=>[n(e.$slots,`main-nav-after`)]),comment:c(()=>[n(e.$slots,`comment`)]),footer:c(()=>[n(e.$slots,`footer`)]),aside:c(()=>[n(e.$slots,`aside`)]),"aside-custom":c(()=>[n(e.$slots,`aside-custom`)]),default:c(()=>[n(e.$slots,`default`)]),_:3},8,[`frontmatter`])}}};export{f as default};