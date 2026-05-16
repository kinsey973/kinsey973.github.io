import{Bt as e,Gn as t,Gt as n,H as r,Qn as i,Rt as a,V as o,X as s,_n as c}from"./framework.DfD1zdSt.js";import{t as l}from"./theme.DMgGaAyl.js";import"./chunks/vue-i18n.BSMUyWAh.js";import{a as u,i as d}from"./chunks/vue-router.DZdD3Cav.js";var f={__name:`Javaweb`,setup(f,{expose:p}){let m=t(JSON.parse(`{"title":"Javaweb","description":"","frontmatter":{"title":"Javaweb","date":"2025-07-07 17:54:56","tags":["java"],"categories":["学习笔记"],"firstImage":"https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202506071803327.png"},"headers":[],"relativePath":"pages/posts/Javaweb.md"}`)),h=u(),g=d(),_=Object.assign(g.meta.frontmatter||{},m.value?.frontmatter||{});return h.currentRoute.value.data=m.value,e(`valaxy:frontmatter`,_),globalThis.$frontmatter=_,p({frontmatter:{title:`Javaweb`,date:`2025-07-07 17:54:56`,tags:[`java`],categories:[`学习笔记`]}}),(e,t)=>{let u=l;return a(),r(u,{frontmatter:i(_)},{"main-content-md":c(()=>[...t[0]||=[o(`p`,null,`摘要：Js Js用来负责网页行为 引入方式 内部脚本：将JS代码定义在html界面 javascript必须在<script<\/script之间 在html文档中，可以在任意地方，放置任意数量的<script，一般放在<body元素的地步，可改善显示速度 外部脚本：将js代码定义在外部js文件，然。`,-1),o(`p`,null,`<!-- more -->`,-1),o(`h3`,{id:`js`,tabindex:`-1`},[s(`Js `),o(`a`,{class:`header-anchor`,href:`#js`,"aria-label":`Permalink to "Js"`},`​`)],-1),o(`p`,null,`Js用来负责网页行为`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202506071803327.png`,alt:`image-20250607180345208`,loading:`lazy`,decoding:`async`})],-1),o(`h4`,{id:`引入方式`,tabindex:`-1`},[s(`引入方式 `),o(`a`,{class:`header-anchor`,href:`#引入方式`,"aria-label":`Permalink to "引入方式"`},`​`)],-1),o(`p`,null,`内部脚本：将JS代码定义在html界面`,-1),o(`p`,null,`javascript必须在<script><\/script>之间`,-1),o(`p`,null,`在html文档中，可以在任意地方，放置任意数量的<script>，一般放在<body>元素的地步，可改善显示速度`,-1),o(`p`,null,`外部脚本：将js代码定义在外部js文件，然后引入到html中`,-1),o(`div`,{class:`language-js`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`js`),o(`pre`,null,[o(`code`,{class:`language-js`},`<script src="js/demo .js"><\/script>
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h4`,{id:`变量-数据类型`,tabindex:`-1`},[s(`变量&数据类型 `),o(`a`,{class:`header-anchor`,href:`#变量-数据类型`,"aria-label":`Permalink to "变量&数据类型"`},`​`)],-1),o(`h4`,{id:`变量`,tabindex:`-1`},[s(`变量 `),o(`a`,{class:`header-anchor`,href:`#变量`,"aria-label":`Permalink to "变量"`},`​`)],-1),o(`p`,null,`js用let声明变量（弱类型语言）`,-1),o(`p`,null,`js用关键字来声明变量`,-1),o(`p`,null,`输出变量有三种方式：`,-1),o(`p`,null,`1.alert()弹出框形式`,-1),o(`p`,null,`2.console.log()输出到控制台`,-1),o(`p`,null,`3.document.write()输出到body区域`,-1),o(`h4`,{id:`数据类型`,tabindex:`-1`},[s(`数据类型 `),o(`a`,{class:`header-anchor`,href:`#数据类型`,"aria-label":`Permalink to "数据类型"`},`​`)],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202506241703616.png`,alt:`image-20250624170312534`,loading:`lazy`,decoding:`async`})],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202506241713291.png`,alt:`image-20250624171351241`,loading:`lazy`,decoding:`async`})],-1),o(`p`,null,`字符串反引号用于模版字符串`,-1),o(`h4`,{id:`函数`,tabindex:`-1`},[s(`函数 `),o(`a`,{class:`header-anchor`,href:`#函数`,"aria-label":`Permalink to "函数"`},`​`)],-1),o(`p`,null,[o(`strong`,null,`定义方法一：`)],-1),o(`div`,{class:`language-js`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`js`),o(`pre`,null,[o(`code`,{class:`language-js`},`function functionName(参数1，参数2){

要执行的代码

}
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`注意：形式参数不需要类型，因为javascript是弱类型语言`,-1),o(`p`,null,`返回值也不需要定义类型，可以在函数内部直接是使用return返回即可`,-1),o(`p`,null,`调用：函数名称(实际参数列表)`,-1),o(`p`,null,[o(`strong`,null,`定义方法二：`)],-1),o(`div`,{class:`language-js`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`js`),o(`pre`,null,[o(`code`,{class:`language-js`},`var functionName=function(参数1，参数2){

//执行的代码

}
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h4`,{id:`js对象`,tabindex:`-1`},[s(`js对象 `),o(`a`,{class:`header-anchor`,href:`#js对象`,"aria-label":`Permalink to "js对象"`},`​`)],-1),o(`h5`,{id:`array对象`,tabindex:`-1`},[s(`array对象 `),o(`a`,{class:`header-anchor`,href:`#array对象`,"aria-label":`Permalink to "array对象"`},`​`)],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507250928695.png`,alt:`image-20250725092755610`,loading:`lazy`,decoding:`async`})],-1),o(`p`,null,`js中的数组相当于java中的集合，数组长度可变，二js是弱类型，所以可以存储任意类型的数据`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507250939801.png`,alt:`image-20250725093903765`,loading:`lazy`,decoding:`async`})],-1),o(`p`,null,`forEach数组遍历：`,-1),o(`p`,null,`arr.forEach(function(e){`,-1),o(`p`,null,`console.log(e);})`,-1),o(`p`,null,`ES6箭头函数遍历 （。。。）=>(…)`,-1),o(`p`,null,`arr.forEach(e)=>{`,-1),o(`p`,null,`console.log(e);`,-1),o(`p`,null,`}`,-1),o(`h5`,{id:`string`,tabindex:`-1`},[s(`string `),o(`a`,{class:`header-anchor`,href:`#string`,"aria-label":`Permalink to "string"`},`​`)],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507250949620.png`,alt:`image-20250725094948553`,loading:`lazy`,decoding:`async`})],-1),o(`h5`,{id:`json`,tabindex:`-1`},[s(`json `),o(`a`,{class:`header-anchor`,href:`#json`,"aria-label":`Permalink to "json"`},`​`)],-1),o(`p`,null,[o(`strong`,null,`js自定义对象`)],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507250951389.png`,alt:`image-20250725095143347`,loading:`lazy`,decoding:`async`})],-1),o(`p`,null,[o(`strong`,null,`JSON介绍`)],-1),o(`p`,null,`由于其语法简单，层次结构鲜明，现多用于作为数据载体，在网络中进行数据传递`,-1),o(`p`,{"“key”:value":``},`格式：`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507251010047.png`,alt:`image-20250725101013985`,loading:`lazy`,decoding:`async`})],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507251010047.png`,alt:``,loading:`lazy`,decoding:`async`})],-1),o(`h5`,{id:`bom`,tabindex:`-1`},[s(`BOM `),o(`a`,{class:`header-anchor`,href:`#bom`,"aria-label":`Permalink to "BOM"`},`​`)],-1),o(`p`,null,`概念：BOM是浏览器对象模型，允许js与浏览器对话，js将浏览器的各个组成部分分封装为对象`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507251022607.png`,alt:`image-20250725102254563`,loading:`lazy`,decoding:`async`})],-1),o(`p`,null,`Window对象`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507251024821.png`,alt:`image-20250725102434780`,loading:`lazy`,decoding:`async`})],-1),o(`p`,null,`Location对象`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507251042121.png`,alt:`image-20250725104228083`,loading:`lazy`,decoding:`async`})],-1),o(`h5`,{id:`dom对象`,tabindex:`-1`},[s(`DOM对象 `),o(`a`,{class:`header-anchor`,href:`#dom对象`,"aria-label":`Permalink to "DOM对象"`},`​`)],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507251048846.png`,alt:`image-20250725104826799`,loading:`lazy`,decoding:`async`})],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507251053321.png`,alt:`image-20250725105304286`,loading:`lazy`,decoding:`async`})],-1),o(`p`,null,`html中Element对象可以通过Document对象获取，二Document对象时通过windows对象获取的`,-1),o(`p`,null,`Document对象中提供了下面获取Element元素对象的函数：`,-1),o(`p`,null,`1.根据id属性值获取，返回単个Element对象`,-1),o(`div`,{class:`language-js`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`js`),o(`pre`,null,[o(`code`,{class:`language-js`},`var h1=document.getElementById('h1');
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`2.根据标签名获取，返回Element对象数组`,-1),o(`div`,{class:`language-js`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`js`),o(`pre`,null,[o(`code`,{class:`language-js`},`var divs=document.getElementsByTagName('div');
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`3.根据name属性值获取，返回Element对象数组`,-1),o(`div`,{class:`language-js`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`js`),o(`pre`,null,[o(`code`,{class:`language-js`},`var hobbys=document.getElementsByName('hobby');
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`4.根据class属性值获取，返回Element对象数组`,-1),o(`div`,{class:`language-js`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`js`),o(`pre`,null,[o(`code`,{class:`language-js`},`.var class=document.getElementsByClassName('cls');
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h4`,{id:`js事件监听`,tabindex:`-1`},[s(`js事件监听 `),o(`a`,{class:`header-anchor`,href:`#js事件监听`,"aria-label":`Permalink to "js事件监听"`},`​`)],-1),o(`p`,null,`事件：html事件时发生在html上元素的“事情”`,-1),o(`p`,null,`例如：按钮被点击。。。`,-1),o(`p`,null,`事件监听：js可以在事件被侦测到时执行指定的代码`,-1),o(`p`,null,`事件绑定`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507251120694.png`,alt:`image-20250725112026653`,loading:`lazy`,decoding:`async`})],-1),o(`p`,null,`常见事件`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507251125544.png`,alt:`image-20250725112555509`,loading:`lazy`,decoding:`async`})],-1),o(`h3`,{id:`vue`,tabindex:`-1`},[s(`Vue `),o(`a`,{class:`header-anchor`,href:`#vue`,"aria-label":`Permalink to "Vue"`},`​`)],-1),o(`p`,null,`Vue是一个用于构建用户界面的渐进式js框架`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507280856720.png`,alt:`image-20250728085647555`,loading:`lazy`,decoding:`async`})],-1),o(`p`,null,`框架:就是一套完整的项目解决方案，用于快速构建项目`,-1),o(`p`,null,`优点：提高前端项目的开发效率`,-1),o(`p`,null,`缺点：要理解记忆框架使用规则`,-1),o(`h4`,{id:`vue模块的引入`,tabindex:`-1`},[s(`vue模块的引入 `),o(`a`,{class:`header-anchor`,href:`#vue模块的引入`,"aria-label":`Permalink to "vue模块的引入"`},`​`)],-1),o(`p`,null,`准备`,-1),o(`ul`,null,[o(`li`,null,`引入Vue模块`),o(`li`,null,`创建Vue程序的应用实例，控制视图的元素`),o(`li`,null,`准备元素(div)被Vue控制`)],-1),o(`p`,null,`创建驱动视图`,-1),o(`ul`,null,[o(`li`,null,`准备数据`),o(`li`,null,`通过插值表达式渲染页面`)],-1),o(`div`,{class:`language-html`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`html`),o(`pre`,null,[o(`code`,{class:`language-html`},`<div id="app">
    <h1>{{message}}</h1>
</div>
<script type="module">
import{createApp} from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
createApp({
    data(){
        return{
            message:"Hello Vue"
        }
    }
}).mount("#app");
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h4`,{id:`vue常用指令`,tabindex:`-1`},[s(`vue常用指令 `),o(`a`,{class:`header-anchor`,href:`#vue常用指令`,"aria-label":`Permalink to "vue常用指令"`},`​`)],-1),o(`p`,null,`指令：HTML标签上带有v-前缀的特殊属性，不同的指令具有不同的含义，可以实现不同的功能。`,-1),o(`div`,{class:`language-js`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`js`),o(`pre`,null,[o(`code`,{class:`language-js`},`<p v-xxx="...">...</p>
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`常用指令`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507280917315.png`,alt:`image-20250728091713271`,loading:`lazy`,decoding:`async`})],-1),o(`p`,null,`插值表达式不能出现在标签内部`,-1),o(`h5`,{id:`v-for`,tabindex:`-1`},[s(`v-for `),o(`a`,{class:`header-anchor`,href:`#v-for`,"aria-label":`Permalink to "v-for"`},`​`)],-1),o(`p`,null,`作用：列表渲染，遍历容器的元素或者对象的属性`,-1),o(`p`,null,`语法：`,-1),o(`div`,{class:`language-js`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`js`),o(`pre`,null,[o(`code`,{class:`language-js`},`<tr v-for="(item,index) in items":key="item.id"> {{item}}</tr>
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,[o(`strong`,null,`参数说明：`)],-1),o(`p`,null,`items为遍历的数组`,-1),o(`p`,null,`item为遍历出来的元素`,-1),o(`p`,null,`index为索引/下标，从o开始；可以省略，省略index语法:v-for="item in items`,-1),o(`p`,null,[o(`strong`,null,`key:`)],-1),o(`p`,null,`作用：给元素添加的唯一标识，便于vue进行列表项的正确排序复用，提升渲染性能`,-1),o(`p`,null,`推荐使用id作为key(唯一)，不推荐使用index作为key(会变化)`,-1),o(`p`,null,`注意：遍历的数组，必须在data中定义;要想让哪个标签循环展示多次，就在哪个标签上使用v-for指令。`,-1),o(`div`,{class:`language-html`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`html`),o(`pre`,null,[o(`code`,{class:`language-html`},`<div id="app">
    <h2>员工列表</h2>
    <ul>
        <li v-for="(emp, index) in employees" :key="emp.id">
            {{ index + 1 }}. 姓名：{{ emp.name }} | 职位：{{ emp.position }} | 年龄：{{ emp.age }}
        </li>
    </ul>
</div>
<script type="module">
    import{createApp} from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
    createApp({
        data(){
            return{
               employees:[
                   { id: 1, name: '张三', position: '前端工程师', age: 25 },
                   { id: 2, name: '李四', position: '后端工程师', age: 28 },
                   { id: 3, name: '王五', position: '产品经理', age: 30 },
                   { id: 4, name: '赵六', position: '测试工程师', age: 24 }
               ]
            }
        }
    }).mount("#app");

<\/script>
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h5`,{id:`v-bind`,tabindex:`-1`},[s(`v-bind `),o(`a`,{class:`header-anchor`,href:`#v-bind`,"aria-label":`Permalink to "v-bind"`},`​`)],-1),o(`p`,null,`作用：动态为HTML标签绑定属性值，如设置href，src，style样式等`,-1),o(`p`,null,`语法:v-bind:属性名=“属性值”`,-1),o(`div`,{class:`language-js`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`js`),o(`pre`,null,[o(`code`,{class:`language-js`},`<img v-bind:src="item.image" width="30px">
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`简化：属性名=“属性值”`,-1),o(`div`,{class:`language-js`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`js`),o(`pre`,null,[o(`code`,{class:`language-js`},`<img :src="item.image" width="30px">
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`注意：动态的为标签的属性绑定值，不能使用插值表达式，得使用v-bind指令。且绑定的数据，必须在data中定义。`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507281005134.png`,alt:`image-20250728100519100`,loading:`lazy`,decoding:`async`})],-1),o(`h5`,{id:`v-if-v-show`,tabindex:`-1`},[s(`v-if&v-show `),o(`a`,{class:`header-anchor`,href:`#v-if-v-show`,"aria-label":`Permalink to "v-if&v-show"`},`​`)],-1),o(`p`,null,`作用：这两类指令都是用来控制元素的显示与隐藏的`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507281010589.png`,alt:`image-20250728101035543`,loading:`lazy`,decoding:`async`})],-1),o(`p`,null,`注意：v-else-if必须出现在v-if之后，可以出现多个；v-else 必须出现在v-if/v-else-if之后。`,-1),o(`p`,null,`v-if`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507281013180.png`,alt:`image-20250728101340145`,loading:`lazy`,decoding:`async`})],-1),o(`p`,null,`v-show`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507281015223.png`,alt:`image-20250728101536195`,loading:`lazy`,decoding:`async`})],-1),o(`h5`,{id:`v-model`,tabindex:`-1`},[s(`v-model `),o(`a`,{class:`header-anchor`,href:`#v-model`,"aria-label":`Permalink to "v-model"`},`​`)],-1),o(`p`,null,`作用：在表单元素上使用，双向数据绑定。可以方便的获取或设置表单项数据`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507281029904.png`,alt:`image-20250728102907861`,loading:`lazy`,decoding:`async`})],-1),o(`h5`,{id:`v-on`,tabindex:`-1`},[s(`v-on `),o(`a`,{class:`header-anchor`,href:`#v-on`,"aria-label":`Permalink to "v-on"`},`​`)],-1),o(`p`,null,`作用：为html标签绑定事件(添加事件监听)`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507281043178.png`,alt:`image-20250728104312131`,loading:`lazy`,decoding:`async`})],-1),o(`h3`,{id:`ajax`,tabindex:`-1`},[s(`Ajax `),o(`a`,{class:`header-anchor`,href:`#ajax`,"aria-label":`Permalink to "Ajax"`},`​`)],-1),o(`p`,null,`作用：数据交换：通过ajax可以给服务器发送请求，并获取服务器响应的数据`,-1),o(`p`,null,`异步交互：可以在不重新加载整个页面的情况下，与服务器交换数据表格更新部分网页的技术，如搜索联想、用户名是否可用的校验等等`,-1),o(`h4`,{id:`同步与异步`,tabindex:`-1`},[s(`同步与异步 `),o(`a`,{class:`header-anchor`,href:`#同步与异步`,"aria-label":`Permalink to "同步与异步"`},`​`)],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507290815068.png`,alt:`image-20250729081519966`,loading:`lazy`,decoding:`async`})],-1),o(`h4`,{id:`axios`,tabindex:`-1`},[s(`Axios `),o(`a`,{class:`header-anchor`,href:`#axios`,"aria-label":`Permalink to "Axios"`},`​`)],-1),o(`p`,null,`介绍：Axios对原生的Ajax进行了封装，简化书写，快速开发`,-1),o(`p`,null,[s(`官网：`),o(`a`,{href:`https://www.axios-http.cn/`,target:`_blank`,rel:`noreferrer`},`https://www.axios-http.cn/`)],-1),o(`p`,null,`步骤：`,-1),o(`p`,null,`引入Axios的js文件（参考官网）`,-1),o(`p`,null,`使用Axios发送请求，并获取响应结果`,-1),o(`div`,{class:`language-js`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`js`),o(`pre`,null,[o(`code`,{class:`language-js`},`<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"><\/script>
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`div`,{class:`language-js`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`js`),o(`pre`,null,[o(`code`,{class:`language-js`},`axios({
     method:'GET',
     url:'https://web-server.itheima.net/emps/list'
 }).then((result)=>{
     console.log(result.data); 
 }).catch((err)=>{
 alert(err);
 })
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`method:请求方式 url：请求路径 data：请求数据(POST)`,-1),o(`p`,null,`params:发送请求时携带的url参数 如：…?key=val`,-1),o(`p`,null,`then({})成功回调函数 catch({})失败回调函数`,-1),o(`h4`,{id:`请求方式别名`,tabindex:`-1`},[s(`请求方式别名 `),o(`a`,{class:`header-anchor`,href:`#请求方式别名`,"aria-label":`Permalink to "请求方式别名"`},`​`)],-1),o(`p`,null,`格式：axios.请求方式(url[,data[,config]])`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507290842566.png`,alt:`image-20250729084235513`,loading:`lazy`,decoding:`async`})],-1),o(`h4`,{id:`async-await`,tabindex:`-1`},[s(`async&await `),o(`a`,{class:`header-anchor`,href:`#async-await`,"aria-label":`Permalink to "async&await"`},`​`)],-1),o(`p`,null,`可以通过async、await可以让异步变为同步操作。async就是来声明一个异步方法，await是用来等待异步任务执行`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507290917685.png`,alt:`image-20250729091729614`,loading:`lazy`,decoding:`async`})],-1),o(`h4`,{id:`生命周期`,tabindex:`-1`},[s(`生命周期 `),o(`a`,{class:`header-anchor`,href:`#生命周期`,"aria-label":`Permalink to "生命周期"`},`​`)],-1),o(`p`,null,`指一个对象从创建到销毁的整个过程`,-1),o(`p`,null,`生命周期的八个阶段：每触发一个生命周期事件，会自动执行一个生命周期方法(钩子)，也就是说可以在特定时机执行自己的逻辑代码`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507290947923.png`,alt:`image-20250729094714875`,loading:`lazy`,decoding:`async`})],-1),o(`p`,null,`典型的应用场景：`,-1),o(`p`,null,`在页面加载完毕时，发起异步请求，加载数据，渲染页面`,-1),o(`h3`,{id:`maven`,tabindex:`-1`},[s(`Maven `),o(`a`,{class:`header-anchor`,href:`#maven`,"aria-label":`Permalink to "Maven"`},`​`)],-1),o(`p`,null,`Maven是一款用于管理和构建Java项目的工具，是apache旗下的一个开源项目`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507300853293.png`,alt:`image-20250730085255162`,loading:`lazy`,decoding:`async`})],-1),o(`h4`,{id:`介绍`,tabindex:`-1`},[s(`介绍 `),o(`a`,{class:`header-anchor`,href:`#介绍`,"aria-label":`Permalink to "介绍"`},`​`)],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507300942274.png`,alt:`image-20250730094219221`,loading:`lazy`,decoding:`async`})],-1),o(`p`,null,`仓库：用于存储资源，管理各种jar包`,-1),o(`p`,null,`本地仓库：自己计算机上的一个目录`,-1),o(`p`,null,`远程仓库：一般由公司团队搭建的私有仓库`,-1),o(`p`,null,[s(`中央仓库：有Maven团队维护的全球唯一性，仓库地址：`),o(`a`,{href:`https://repol.maven.org/maven2/`,target:`_blank`,rel:`noreferrer`},`https://repol.maven.org/maven2/`)],-1),o(`h4`,{id:`maven的编译和打包`,tabindex:`-1`},[s(`maven的编译和打包 `),o(`a`,{class:`header-anchor`,href:`#maven的编译和打包`,"aria-label":`Permalink to "maven的编译和打包"`},`​`)],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507300923146.png`,alt:`image-20250730092347029`,loading:`lazy`,decoding:`async`})],-1),o(`p`,null,`compile会编译整个项目，把源代码编译成可以被 JVM 执行的中间格式（字节码）。`,-1),o(`p`,null,[s(`package会打包整个项目，`),o(`strong`,null,[s(`将项目编译、打包成可执行的 `),o(`code`,null,`.jar`),s(` 或 `),o(`code`,null,`.war`),s(` 文件`)]),s(`，通常位于 `),o(`code`,null,`target/`),s(` 目录下。`)],-1),o(`h4`,{id:`maven坐标`,tabindex:`-1`},[s(`Maven坐标 `),o(`a`,{class:`header-anchor`,href:`#maven坐标`,"aria-label":`Permalink to "Maven坐标"`},`​`)],-1),o(`p`,null,`Maven中的坐标是资源(jar)的唯一标识，通过该坐标可以唯一定位资源位置`,-1),o(`p`,null,`使用坐标来定义项目或引入项目中需要的依赖`,-1),o(`p`,null,[o(`strong`,null,`Maven坐标主要组成`)],-1),o(`p`,null,`groupId：定义当前Maven项目隶属组织名称(通常是域名反写，例如：com.iteima)`,-1),o(`p`,null,`artifactId:定义当前Maven项目名称(通常是模块名称，例如order-sercive、goods-service)`,-1),o(`p`,null,`version：定义当前项目版本号`,-1),o(`p`,null,`Maven项目版本分类`,-1),o(`ul`,null,[o(`li`,null,`​ SNAPSHOT：功能不稳定，尚处于开发中的版本，即快照版本`),o(`li`,null,`​ RELEASE：功能趋于稳定，当前更新停止，可以用于发行的版本`)],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507301053867.png`,alt:`image-20250730105334773`,loading:`lazy`,decoding:`async`})],-1),o(`h4`,{id:`导入maven项目`,tabindex:`-1`},[s(`导入Maven项目 `),o(`a`,{class:`header-anchor`,href:`#导入maven项目`,"aria-label":`Permalink to "导入Maven项目"`},`​`)],-1),o(`p`,null,`建议选择Maven项目的pom.xml文件进行导入`,-1),o(`h4`,{id:`依赖管理`,tabindex:`-1`},[s(`依赖管理 `),o(`a`,{class:`header-anchor`,href:`#依赖管理`,"aria-label":`Permalink to "依赖管理"`},`​`)],-1),o(`p`,null,`依赖：指当前项目运行所需要的jar包，应该项目中可以引入多个依赖`,-1),o(`p`,null,`配置：`,-1),o(`p`,null,`1.在pom.xml中编写<dependencies>标签`,-1),o(`p`,null,`2.在<dependencies>标签中使用<dependency>引入标签`,-1),o(`p`,null,`3.定义坐标的groupId,artifactId,version`,-1),o(`p`,null,`4.点击刷新按钮，引入最新加入的坐标`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507310928083.png`,alt:`image-20250731092812942`,loading:`lazy`,decoding:`async`})],-1),o(`p`,null,[s(`如果不知道依赖的坐标信息，可以到`),o(`a`,{href:`https://mvnrepository.com/%E4%B8%AD%E6%90%9C%E7%B4%A2`,target:`_blank`,rel:`noreferrer`},`https://mvnrepository.com/中搜索`)],-1),o(`h4`,{id:`排除依赖`,tabindex:`-1`},[s(`排除依赖 `),o(`a`,{class:`header-anchor`,href:`#排除依赖`,"aria-label":`Permalink to "排除依赖"`},`​`)],-1),o(`p`,null,`指主动断开依赖的资源，被排除的资源无需指定版本`,-1),o(`p`,null,`用<exclusion></exclusion>来排除依赖`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507310937280.png`,alt:`image-20250731093708228`,loading:`lazy`,decoding:`async`})],-1),o(`p`,null,`具体作用`,-1),o(`ol`,null,[o(`li`,null,[o(`strong`,null,`解决依赖冲突`),s(` 当多个依赖引入了同一个库的不同版本，可能导致运行时错误或编译错误。通过排除其中一个依赖的传递依赖，可以避免版本冲突。`)]),o(`li`,null,[o(`strong`,null,`减小最终包大小`),s(` 如果某个传递依赖你用不上，可以排除它，减少项目的依赖体积，提升启动速度和构建速度。`)]),o(`li`,null,[o(`strong`,null,`避免重复引入`),s(` 某些库可能被多次引入不同版本，排除可以避免重复依赖。`)])],-1),o(`p`,null,`注意：一旦依赖配置变更了，记得重新加载`,-1),o(`p`,null,`引入的依赖本地仓库不存在记得联网`,-1),o(`h4`,{id:`生命周期-1`,tabindex:`-1`},[s(`生命周期 `),o(`a`,{class:`header-anchor`,href:`#生命周期-1`,"aria-label":`Permalink to "生命周期"`},`​`)],-1),o(`p`,null,`Maven的生命周期就是为了对所有的maven项目构建过程进行抽象和统一`,-1),o(`p`,null,`Maven中有三套相互独立的生命周期`,-1),o(`ul`,null,[o(`li`,null,`clean:清理工作`),o(`li`,null,`default:核心工作，如：编译、测试、打包、安装、部署`),o(`li`,null,`site：生成报告、发布站点`)],-1),o(`p`,null,`执行指定生命周期的两种方式:`,-1),o(`p`,null,`在idea中，右侧的maven工具栏，选中对应的生命周期，双击执行`,-1),o(`p`,null,`在命令行中，通过命令执行`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507311002568.png`,alt:`image-20250731100241499`,loading:`lazy`,decoding:`async`})],-1),o(`p`,null,`生命周期阶段`,-1),o(`ul`,null,[o(`li`,null,`clean:溢出上一次构建生成的文件`),o(`li`,null,`compile:编译项目源代码`),o(`li`,null,`test:使用合适的单元测试框架进行测试(junit)`),o(`li`,null,`package:将编译后的文件打包，如jar、war`),o(`li`,null,`install：安装项目到本地仓库`)],-1),o(`p`,null,`注意：在同一套生命周期中，当运行后面的阶段时，前面的阶段都会运行`,-1),o(`h4`,{id:`单元测试`,tabindex:`-1`},[s(`单元测试 `),o(`a`,{class:`header-anchor`,href:`#单元测试`,"aria-label":`Permalink to "单元测试"`},`​`)],-1),o(`p`,null,`测试：用来促进鉴定软件的正确性、完整性、安全性和质量的过程`,-1),o(`p`,null,`阶段划分：单元测试（白盒）、集成测试（灰盒）、系统测试（黑盒）、验收测试（黑盒）`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507311038807.png`,alt:`image-20250731103827736`,loading:`lazy`,decoding:`async`})],-1),o(`p`,null,`测试方法：白盒测试，黑盒测试及灰盒测试`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507311041784.png`,alt:`image-20250731104128739`,loading:`lazy`,decoding:`async`})],-1),o(`p`,null,`单元测试：针对最小的功能单元，编写测试代码对其正确的进行测试`,-1),o(`p`,null,`JUnit：最流行的Java测试框架只有，提供了一些功能，方便程序进行单元测试`,-1),o(`h5`,{id:`引入依赖`,tabindex:`-1`},[o(`strong`,null,`引入依赖`),s(),o(`a`,{class:`header-anchor`,href:`#引入依赖`,"aria-label":`Permalink to "**引入依赖**"`},`​`)],-1),o(`p`,null,`1.在pox.xml中引入JUnit的依赖`,-1),o(`p`,null,`2.在test/java目录下创建测试类，并编写对应的测试方法，并在方法上声明@Test注解`,-1),o(`p`,null,`3.运行单元测试(测试通过：绿色，不通过：红色)`,-1),o(`p`,null,`pom.xml`,-1),o(`div`,{class:`language-xml`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`xml`),o(`pre`,null,[o(`code`,{class:`language-xml`},`    <dependencies>
        <dependency>
            <groupId>org.junit.jupiter</groupId>
            <artifactId>junit-jupiter</artifactId>
            <version>5.9.1</version>
        </dependency>
`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`p`,null,`JUnit单元测试类名命名规范为：XxxxxTest【规范】。JUnit单元测试的方法，必须声明为public void【规定】。`,-1),o(`h5`,{id:`断言`,tabindex:`-1`},[s(`断言 `),o(`a`,{class:`header-anchor`,href:`#断言`,"aria-label":`Permalink to "断言"`},`​`)],-1),o(`p`,null,`JUnit提供了一些辅助方法，用来帮助我们确定被测试的犯法是否按照预期的效果正常工作，这种方式称为断言`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202508041028351.png`,alt:`image-20250804102819237`,loading:`lazy`,decoding:`async`})],-1),o(`div`,{class:`language-java`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`java`),o(`pre`,null,[o(`code`,{class:`language-java`},`package com.itheima;

import org.junit.jupiter.api.*;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

public class UserServiceTest {
    
    @Test
    public void testGetAge2(){
        Integer age = new UserService().getAge("110002200505091218");
        Assertions.assertNotEquals(18, age, "两个值相等");
//        String s1 = new String("Hello");
//        String s2 = "Hello";
//        Assertions.assertSame(s1, s2, "不是同一个对象引用");
    }

    @Test
    public void testGetGender2(){
        String gender = new UserService().getGender("612429198904201611");
        Assertions.assertEquals("男", gender);
    }
}

`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h5`,{id:`常见注解`,tabindex:`-1`},[s(`常见注解 `),o(`a`,{class:`header-anchor`,href:`#常见注解`,"aria-label":`Permalink to "常见注解"`},`​`)],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202508041037122.png`,alt:`image-20250804103733076`,loading:`lazy`,decoding:`async`})],-1),o(`div`,{class:`language-java`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`java`),o(`pre`,null,[o(`code`,{class:`language-java`},`
import org.junit.jupiter.api.*;

public class UserServiceTest {

    @BeforeEach
    public void testBefore(){
        System.out.println("before...");
    }

    @AfterEach
    public void testAfter(){
        System.out.println("after...");
    }

    @BeforeAll //该方法必须被static修饰
    public static void testBeforeAll(){
        System.out.println("before all ...");
    }

    @AfterAll //该方法必须被static修饰
    public static void testAfterAll(){
        System.out.println("after all...");
    }

    @Test
    public void testGetAge(){
        Integer age = new UserService().getAge("110002200505091218");
        System.out.println(age);
    }

    @Test
    public void testGetGender(){
        String gender = new UserService().getGender("612429198904201611");
        System.out.println(gender);
    }
}

`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h5`,{id:`依赖范围`,tabindex:`-1`},[s(`依赖范围 `),o(`a`,{class:`header-anchor`,href:`#依赖范围`,"aria-label":`Permalink to "依赖范围"`},`​`)],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202508041103661.png`,alt:`image-20250804110357603`,loading:`lazy`,decoding:`async`})],-1),o(`h3`,{id:`web基础`,tabindex:`-1`},[s(`web基础 `),o(`a`,{class:`header-anchor`,href:`#web基础`,"aria-label":`Permalink to "web基础"`},`​`)],-1),o(`p`,null,`那在前面讲解Web前端开发的时候，我们学习了前端网页开发的三剑客HTML、CSS、JS，通过这三项技术，我们就可以制作前端页面了。 那最终，这些个页面资料，我们就可以部署在服务器上，然后打开浏览器就可以直接访问服务器上部署的前端页面了。`,-1),o(`figure`,null,[o(`img`,{src:`https://heuqqdmbyk.feishu.cn/space/api/box/stream/download/asynccode/?code=OWNlZWQ0MTg0NTY5ZjhhY2RkYmQ5MDUzMWJlN2UwNDJfUGVFSVI0U2ZXMDE0SlRsVmdiZmtuYVk2Nk5wMkM3WGhfVG9rZW46R0N1U2J1dVhZb3A4TWR4aVBIOGM1aDBZbjNnXzE3NTQyNzczMDE6MTc1NDI4MDkwMV9WNA`,alt:`img`,loading:`lazy`,decoding:`async`})],-1),o(`p`,null,[s(`而像HTML、CSS、JS 以及图片、音频、视频等这些资源，我们都称为`),o(`strong`,null,`静态资源`),s(`。 所谓静态资源，就是指在服务器上存储的不会改变的数据，通常不会根据用户的请求而变化。`)],-1),o(`p`,null,[s(`那与静态资源对应的还有一类资源，就是动态资源。那所谓`),o(`strong`,null,`动态资源`),s(`，就是指在服务器端上存储的，会根据用户请求和其他数据动态生成的，内容可能会在每次请求时都发生变化。比如：Servlet、JSP等(负责逻辑处理)。而Servlet、JSP这些技术现在早都被企业淘汰了，现在在企业项目开发中，都是直接基于Spring框架来构建动态资源。`)],-1),o(`p`,null,[o(`strong`,null,`BS架构`),s(`。`)],-1),o(`ul`,null,[o(`li`,null,[o(`p`,null,`BS架构：Browser/Server，浏览器/服务器架构模式。客户端只需要浏览器，应用程序的逻辑和数据都存储在服务端。`),o(`p`,null,`优点：维护方便`),o(`p`,null,`缺点：体验一般`)]),o(`li`,null,[o(`p`,null,`CS架构：Client/Server，客户端/服务器架构模式。需要单独开发维护客户端。`),o(`p`,null,`优点：体验不错`),o(`p`,null,`缺点：开发维护麻烦`)])],-1),o(`h4`,{id:`springboot-web`,tabindex:`-1`},[s(`SpringBoot Web `),o(`a`,{class:`header-anchor`,href:`#springboot-web`,"aria-label":`Permalink to "SpringBoot Web"`},`​`)],-1),o(`p`,null,[o(`strong`,null,`Spring Boot 可以帮助我们非常快速的构建应用程序、简化开发、提高效率 。`)],-1),o(`p`,null,[o(`strong`,null,`而直接基于SpringBoot进行项目构建和开发，不仅是Spring官方推荐的方式，也是现在企业开发的主流。`)],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202508051019338.png`,alt:`image-20250805101916166`,loading:`lazy`,decoding:`async`})],-1),o(`h4`,{id:`http协议`,tabindex:`-1`},[s(`HTTP协议 `),o(`a`,{class:`header-anchor`,href:`#http协议`,"aria-label":`Permalink to "HTTP协议"`},`​`)],-1),o(`p`,null,`http协议规定了浏览器和服务器之间数据传输的规则`,-1),o(`p`,null,`特点：`,-1),o(`p`,null,`1.基于TCP协议：面向连接，安全`,-1),o(`p`,null,`2.基于请求-响应模型的：因此请求对应因此响应`,-1),o(`p`,null,`3.http协议是无状态的协议：对于事务处理没有记忆能力。每次请求-响应都是独立的`,-1),o(`ul`,null,[o(`li`,null,`缺点：多次请求间不能各项数据`),o(`li`,null,`优点：速度快`)],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202508051038045.png`,alt:`image-20250805103806999`,loading:`lazy`,decoding:`async`})],-1),o(`h5`,{id:`请求协议`,tabindex:`-1`},[s(`请求协议 `),o(`a`,{class:`header-anchor`,href:`#请求协议`,"aria-label":`Permalink to "请求协议"`},`​`)],-1),o(`p`,null,`请求数据`,-1),o(`p`,null,`由请求行：请求数据第一行（请求方式、资源路径、协议）`,-1),o(`p`,null,`请求头：第二行开始，格式key:value`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202508051037914.png`,alt:`image-20250805103740867`,loading:`lazy`,decoding:`async`})],-1),o(`p`,null,`请求体：POST请求，存放请求参数（GET部分没有）`,-1),o(`p`,null,`Web服务器(Tomcat)对HTTP协议的请求数据进行解析，并进行了封装(HttpServletRequest)，在调用Controller方法的时候传递给了该方法。这样，就使得程序员不必直接对协议进行操作，让Web开发更加便捷。`,-1),o(`h5`,{id:`请求数据获取`,tabindex:`-1`},[s(`请求数据获取 `),o(`a`,{class:`header-anchor`,href:`#请求数据获取`,"aria-label":`Permalink to "请求数据获取"`},`​`)],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202508071046180.png`,alt:`image-20250807104555029`,loading:`lazy`,decoding:`async`})],-1),o(`div`,{class:`language-java`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`java`),o(`pre`,null,[o(`code`,{class:`language-java`},`package com.kinsey.demo;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController //标记这个类用来处理浏览器发送过来的网络请求
public class RequestController {

    @RequestMapping("/request")
    public String request(HttpServletRequest request){
        //1.获取请求方式
        String method = request.getMethod();
        //2.获取请求的url地址
        String url = request.getRequestURL().toString();
        System.out.println("请求url地址: "+url);

        String uri=request.getRequestURI();
        System.out.println("请求uri地址: "+uri);

        //3.获取请求协议
        String protocol = request.getProtocol();
        System.out.println("请求协议: "+protocol);
        //4.获取请求参数 -name
        String name = request.getParameter("name");
        System.out.println("请求参数-name: "+name);

        //5.获取请求头 -Accept
        String header = request.getHeader("Accept");
        System.out.println("请求头-Accept: "+header);

        return "OK";

    }
}

`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h5`,{id:`响应协议`,tabindex:`-1`},[s(`响应协议 `),o(`a`,{class:`header-anchor`,href:`#响应协议`,"aria-label":`Permalink to "响应协议"`},`​`)],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202508071136946.png`,alt:`image-20250807113637867`,loading:`lazy`,decoding:`async`})],-1),o(`h5`,{id:`响应数据设置`,tabindex:`-1`},[s(`响应数据设置 `),o(`a`,{class:`header-anchor`,href:`#响应数据设置`,"aria-label":`Permalink to "响应数据设置"`},`​`)],-1),o(`p`,null,`Web服务器对HTTP协议的响应数据进行了封装(HttpServletResponse)，并在调用Controller方法的时候传递给 了该方法。这样，就使得程序员不必直接对协议进行操作，让Web开发更加便捷。`,-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202508071146869.png`,alt:`image-20250807114612816`,loading:`lazy`,decoding:`async`})],-1),o(`div`,{class:`language-java`},[o(`button`,{title:`Copy code`,class:`copy`}),o(`span`,{class:`lang`},`java`),o(`pre`,null,[o(`code`,{class:`language-java`},`package com.kinsey.demo;

import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
public class ResponseController {
    /**
     * 响应 方式一：HttpServletResponse设置响应数据
     * @param response
     * @throws IOException
     */
    @RequestMapping("/response")
    public  void response(HttpServletResponse response) throws IOException {
        //1.设置响应状态码
        response.setStatus(401);

        //2.设置响应头
        response.setHeader("name","kinsey");

        //3.设置响应体
        response.getWriter().write("<h1>hello response</h1>");

    }

    /**
     * 响应方式二：ResponseEntity Spring提供的方法
     * @return
     */

    @RequestMapping("response2")
    public ResponseEntity<String> response2(){

        return ResponseEntity
                .status(401)
                .header("name","kinsey")
                .body("<h1>hello response2</h1>");
    }

}

`)]),o(`button`,{class:`code-block-unfold-btn`})],-1),o(`h3`,{id:`分层解耦`,tabindex:`-1`},[s(`分层解耦 `),o(`a`,{class:`header-anchor`,href:`#分层解耦`,"aria-label":`Permalink to "分层解耦"`},`​`)],-1),o(`h4`,{id:`三层架构`,tabindex:`-1`},[s(`三层架构 `),o(`a`,{class:`header-anchor`,href:`#三层架构`,"aria-label":`Permalink to "三层架构"`},`​`)],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202508151009125.png`,alt:`image-20250815100908024`,loading:`lazy`,decoding:`async`})],-1),o(`h4`,{id:`分层解耦-1`,tabindex:`-1`},[s(`分层解耦 `),o(`a`,{class:`header-anchor`,href:`#分层解耦-1`,"aria-label":`Permalink to "分层解耦"`},`​`)],-1),o(`p`,null,`耦合:衡量软件中各个层/各个模块的依赖关联程度`,-1),o(`p`,null,`内聚：软件中各个功能模块内部的功能联系`,-1),o(`p`,null,`软件设计原则：高内聚，低耦合`,-1),o(`ul`,null,[o(`li`,null,[o(`strong`,null,`高内聚`),s(`，指的是一个模块或类的内部功能要尽可能相关、集中，围绕一个明确的目标来组织`)]),o(`li`,null,[o(`strong`,null,`低耦合`),s(`，指的是模块之间的依赖关系要尽量减少和简化`)])],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202508190949745.png`,alt:`image-20250819094931621`,loading:`lazy`,decoding:`async`})],-1),o(`p`,null,`实现分层解耦的思路：将项目中的类交给IOC容器管理(IOC,控制反转)`,-1),o(`p`,null,`应用程序运行时需要什么对象，直接依赖容器为其提供(DI，依赖注入)`,-1),o(`h4`,{id:`ioc和di`,tabindex:`-1`},[s(`IOC和DI `),o(`a`,{class:`header-anchor`,href:`#ioc和di`,"aria-label":`Permalink to "IOC和DI"`},`​`)],-1),o(`figure`,null,[o(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202508191000790.png`,alt:`image-20250819100043731`,loading:`lazy`,decoding:`async`})],-1),o(`p`,null,`使用注解@Autowired，程序在运行时会自动找到这个类型的bean对象并赋值给成员变量`,-1),o(`p`,null,`使用注解@Comment，将当前类交给IOC容器管理`,-1)]]),"main-header":c(()=>[n(e.$slots,`main-header`)]),"main-header-after":c(()=>[n(e.$slots,`main-header-after`)]),"main-nav":c(()=>[n(e.$slots,`main-nav`)]),"main-content-before":c(()=>[n(e.$slots,`main-content-before`)]),"main-content":c(()=>[n(e.$slots,`main-content`)]),"main-content-after":c(()=>[n(e.$slots,`main-content-after`)]),"main-nav-before":c(()=>[n(e.$slots,`main-nav-before`)]),"main-nav-after":c(()=>[n(e.$slots,`main-nav-after`)]),comment:c(()=>[n(e.$slots,`comment`)]),footer:c(()=>[n(e.$slots,`footer`)]),aside:c(()=>[n(e.$slots,`aside`)]),"aside-custom":c(()=>[n(e.$slots,`aside-custom`)]),default:c(()=>[n(e.$slots,`default`)]),_:3},8,[`frontmatter`])}}};export{f as default};