---
title: Javaweb
date: 2025-07-07 17:54:56
tags:
---

### Js

Js用来负责网页行为

![image-20250607180345208](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202506071803327.png)

#### 引入方式

内部脚本：将JS代码定义在html界面

javascript必须在\<script>\</script>之间

在html文档中，可以在任意地方，放置任意数量的\<script>，一般放在\<body>元素的地步，可改善显示速度



外部脚本：将js代码定义在外部js文件，然后引入到html中

```js
<script src="js/demo .js"></script>
```



#### 变量&数据类型

#### 变量

js用let声明变量（弱类型语言）

js用关键字来声明变量

输出变量有三种方式：

1.alert()弹出框形式

2.console.log()输出到控制台

3.document.write()输出到body区域

#### 数据类型

![image-20250624170312534](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202506241703616.png)

![image-20250624171351241](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202506241713291.png)



字符串反引号用于模版字符串



#### 函数

**定义方法一：**

function functionName(参数1，参数2){

要执行的代码

}

注意：形式参数不需要类型，因为javascript是弱类型语言

返回值也不需要定义类型，可以在函数内部直接是使用return返回即可

调用：函数名称(实际参数列表)

**定义方法二：**

var functionName=function(参数1，参数2){

//执行的代码

}



#### js对象

##### array对象

![image-20250725092755610](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507250928695.png)

js中的数组相当于java中的集合，数组长度可变，二js是弱类型，所以可以存储任意类型的数据

![image-20250725093903765](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507250939801.png)

forEach数组遍历：

arr.forEach(function(e){

console.log(e);})



ES6箭头函数遍历 （。。。）=>(...)

arr.forEach(e)=>{

console.log(e);

}



##### string

![image-20250725094948553](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507250949620.png)



##### json

**js自定义对象**

![image-20250725095143347](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507250951389.png)



**JSON介绍**

由于其语法简单，层次结构鲜明，现多用于作为数据载体，在网络中进行数据传递

格式：{“key”:"value"}

![image-20250725101013985](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507251010047.png)



![](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507251010047.png)

##### BOM

概念：BOM是浏览器对象模型，允许js与浏览器对话，js将浏览器的各个组成部分分封装为对象

![image-20250725102254563](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507251022607.png)



Window对象

![image-20250725102434780](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507251024821.png)



Location对象

![image-20250725104228083](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507251042121.png)

##### DOM对象

![image-20250725104826799](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507251048846.png)

![image-20250725105304286](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507251053321.png)

html中Element对象可以通过Document对象获取，二Document对象时通过windows对象获取的

Document对象中提供了下面获取Element元素对象的函数：

1.根据id属性值获取，返回単个Element对象

```js
var h1=document.getElementById('h1');
```

2.根据标签名获取，返回Element对象数组

```js
var divs=document.getElementsByTagName('div');
```

3.根据name属性值获取，返回Element对象数组

```js
var hobbys=document.getElementsByName('hobby');
```

4.根据class属性值获取，返回Element对象数组

```js
.var class=document.getElementsByClassName('cls');
```



#### js事件监听

事件：html事件时发生在html上元素的“事情”

例如：按钮被点击。。。

事件监听：js可以在事件被侦测到时执行指定的代码



事件绑定

![image-20250725112026653](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507251120694.png)

常见事件

![image-20250725112555509](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507251125544.png)



### Vue

Vue是一个用于构建用户界面的渐进式js框架

![image-20250728085647555](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507280856720.png)

框架:就是一套完整的项目解决方案，用于快速构建项目

优点：提高前端项目的开发效率

缺点：要理解记忆框架使用规则



#### vue模块的引入

准备

- 引入Vue模块
- 创建Vue程序的应用实例，控制视图的元素
- 准备元素(div)被Vue控制

创建驱动视图

- 准备数据
- 通过插值表达式渲染页面

```html
<div id="app">
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
```



#### vue常用指令

指令：HTML标签上带有v-前缀的特殊属性，不同的指令具有不同的含义，可以实现不同的功能。

```js
<p v-xxx="...">...</p>
```

常用指令

![image-20250728091713271](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507280917315.png)

插值表达式不能出现在标签内部

##### v-for

作用：列表渲染，遍历容器的元素或者对象的属性

语法：

```js
<tr v-for="(item,index) in items":key="item.id"> {{item}}</tr>
```

**参数说明：**

items为遍历的数组

item为遍历出来的元素

index为索引/下标，从o开始；可以省略，省略index语法:v-for="item in items

**key:**

作用：给元素添加的唯一标识，便于vue进行列表项的正确排序复用，提升渲染性能

推荐使用id作为key(唯一)，不推荐使用index作为key(会变化)



注意：遍历的数组，必须在data中定义;要想让哪个标签循环展示多次，就在哪个标签上使用v-for指令。

```html
<div id="app">
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

</script>
```



##### v-bind

作用：动态为HTML标签绑定属性值，如设置href，src，style样式等

语法:v-bind:属性名="属性值" 

```js
<img v-bind:src="item.image" width="30px">
```

简化：属性名=“属性值”

```js
<img :src="item.image" width="30px">
```

注意：动态的为标签的属性绑定值，不能使用插值表达式，得使用v-bind指令。且绑定的数据，必须在data中定义。

![image-20250728100519100](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507281005134.png)



##### v-if&v-show

作用：这两类指令都是用来控制元素的显示与隐藏的

![image-20250728101035543](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507281010589.png)

注意：v-else-if必须出现在v-if之后，可以出现多个；v-else 必须出现在v-if/v-else-if之后。

v-if

![image-20250728101340145](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507281013180.png)

v-show

![image-20250728101536195](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507281015223.png)



##### v-model

作用：在表单元素上使用，双向数据绑定。可以方便的获取或设置表单项数据

![image-20250728102907861](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507281029904.png)



##### v-on

作用：为html标签绑定事件(添加事件监听)

![image-20250728104312131](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507281043178.png)



### Ajax

作用：数据交换：通过ajax可以给服务器发送请求，并获取服务器响应的数据

异步交互：可以在不重新加载整个页面的情况下，与服务器交换数据表格更新部分网页的技术，如搜索联想、用户名是否可用的校验等等



#### 同步与异步

![image-20250729081519966](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507290815068.png)



#### Axios

介绍：Axios对原生的Ajax进行了封装，简化书写，快速开发

官网：https://www.axios-http.cn/

步骤：

引入Axios的js文件（参考官网）

使用Axios发送请求，并获取响应结果

```js
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

```js
axios({
     method:'GET',
     url:'https://web-server.itheima.net/emps/list'
 }).then((result)=>{
     console.log(result.data); 
 }).catch((err)=>{
 alert(err);
 })
```

method:请求方式   url：请求路径  data：请求数据(POST) 

params:发送请求时携带的url参数 如：...?key=val

then({})成功回调函数   catch({})失败回调函数



#### 请求方式别名

格式：axios.请求方式(url[,data[,config]])

![image-20250729084235513](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507290842566.png)



#### async&await

可以通过async、await可以让异步变为同步操作。async就是来声明一个异步方法，await是用来等待异步任务执行

![image-20250729091729614](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507290917685.png)



#### 生命周期

指一个对象从创建到销毁的整个过程

生命周期的八个阶段：每触发一个生命周期事件，会自动执行一个生命周期方法(钩子)，也就是说可以在特定时机执行自己的逻辑代码

![image-20250729094714875](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507290947923.png)

典型的应用场景：

在页面加载完毕时，发起异步请求，加载数据，渲染页面



### Maven

Maven是一款用于管理和构建Java项目的工具，是apache旗下的一个开源项目

![image-20250730085255162](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507300853293.png)





#### 介绍

![image-20250730094219221](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507300942274.png)

仓库：用于存储资源，管理各种jar包

本地仓库：自己计算机上的一个目录

远程仓库：一般由公司团队搭建的私有仓库

中央仓库：有Maven团队维护的全球唯一性，仓库地址：https://repol.maven.org/maven2/

####  maven的编译和打包

![image-20250730092347029](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507300923146.png)

compile会编译整个项目，把源代码编译成可以被 JVM 执行的中间格式（字节码）。

package会打包整个项目，**将项目编译、打包成可执行的 `.jar` 或 `.war` 文件**，通常位于 `target/` 目录下。



#### Maven坐标

Maven中的坐标是资源(jar)的唯一标识，通过该坐标可以唯一定位资源位置

使用坐标来定义项目或引入项目中需要的依赖



**Maven坐标主要组成**

groupId：定义当前Maven项目隶属组织名称(通常是域名反写，例如：com.iteima)

artifactId:定义当前Maven项目名称(通常是模块名称，例如order-sercive、goods-service)

version：定义当前项目版本号

Maven项目版本分类

- ​	SNAPSHOT：功能不稳定，尚处于开发中的版本，即快照版本
- ​	RELEASE：功能趋于稳定，当前更新停止，可以用于发行的版本

![image-20250730105334773](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507301053867.png)

#### 导入Maven项目

建议选择Maven项目的pom.xml文件进行导入



#### 依赖管理

依赖：指当前项目运行所需要的jar包，应该项目中可以引入多个依赖

配置：

1.在pom.xml中编写<dependencies\>标签

2.在<dependencies\>标签中使用\<dependency>引入标签

3.定义坐标的groupId,artifactId,version

4.点击刷新按钮，引入最新加入的坐标

![image-20250731092812942](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507310928083.png)

如果不知道依赖的坐标信息，可以到https://mvnrepository.com/中搜索



#### 排除依赖

指主动断开依赖的资源，被排除的资源无需指定版本

用<exclusion\></exclusion\>来排除依赖

![image-20250731093708228](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507310937280.png)

具体作用

1. **解决依赖冲突**
    当多个依赖引入了同一个库的不同版本，可能导致运行时错误或编译错误。通过排除其中一个依赖的传递依赖，可以避免版本冲突。
2. **减小最终包大小**
    如果某个传递依赖你用不上，可以排除它，减少项目的依赖体积，提升启动速度和构建速度。
3. **避免重复引入**
    某些库可能被多次引入不同版本，排除可以避免重复依赖。

注意：一旦依赖配置变更了，记得重新加载

引入的依赖本地仓库不存在记得联网



#### 生命周期

Maven的生命周期就是为了对所有的maven项目构建过程进行抽象和统一

Maven中有三套相互独立的生命周期

- clean:清理工作
- default:核心工作，如：编译、测试、打包、安装、部署
- site：生成报告、发布站点

执行指定生命周期的两种方式:

在idea中，右侧的maven工具栏，选中对应的生命周期，双击执行

在命令行中，通过命令执行

![image-20250731100241499](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507311002568.png)

生命周期阶段

- clean:溢出上一次构建生成的文件
- compile:编译项目源代码
- test:使用合适的单元测试框架进行测试(junit)
- package:将编译后的文件打包，如jar、war
- install：安装项目到本地仓库

注意：在同一套生命周期中，当运行后面的阶段时，前面的阶段都会运行



#### 单元测试

测试：用来促进鉴定软件的正确性、完整性、安全性和质量的过程

阶段划分：单元测试（白盒）、集成测试（灰盒）、系统测试（黑盒）、验收测试（黑盒）

![image-20250731103827736](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507311038807.png)

测试方法：白盒测试，黑盒测试及灰盒测试

![image-20250731104128739](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202507311041784.png)

单元测试：针对最小的功能单元，编写测试代码对其正确的进行测试

JUnit：最流行的Java测试框架只有，提供了一些功能，方便程序进行单元测试

##### **引入依赖**

1.在pox.xml中引入JUnit的依赖

2.在test/java目录下创建测试类，并编写对应的测试方法，并在方法上声明@Test注解

3.运行单元测试(测试通过：绿色，不通过：红色)

pom.xml

```xml
    <dependencies>
        <dependency>
            <groupId>org.junit.jupiter</groupId>
            <artifactId>junit-jupiter</artifactId>
            <version>5.9.1</version>
        </dependency>
```

JUnit单元测试类名命名规范为：XxxxxTest【规范】。JUnit单元测试的方法，必须声明为public void【规定】。



##### 断言

JUnit提供了一些辅助方法，用来帮助我们确定被测试的犯法是否按照预期的效果正常工作，这种方式称为断言

![image-20250804102819237](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202508041028351.png)

```java
package com.itheima;

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

```



##### 常见注解

![image-20250804103733076](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202508041037122.png)

```java


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

```



##### 依赖范围

![image-20250804110357603](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202508041103661.png)



### web基础



那在前面讲解Web前端开发的时候，我们学习了前端网页开发的三剑客HTML、CSS、JS，通过这三项技术，我们就可以制作前端页面了。 那最终，这些个页面资料，我们就可以部署在服务器上，然后打开浏览器就可以直接访问服务器上部署的前端页面了。

![img](https://heuqqdmbyk.feishu.cn/space/api/box/stream/download/asynccode/?code=OWNlZWQ0MTg0NTY5ZjhhY2RkYmQ5MDUzMWJlN2UwNDJfUGVFSVI0U2ZXMDE0SlRsVmdiZmtuYVk2Nk5wMkM3WGhfVG9rZW46R0N1U2J1dVhZb3A4TWR4aVBIOGM1aDBZbjNnXzE3NTQyNzczMDE6MTc1NDI4MDkwMV9WNA)

而像HTML、CSS、JS 以及图片、音频、视频等这些资源，我们都称为**静态资源**。 所谓静态资源，就是指在服务器上存储的不会改变的数据，通常不会根据用户的请求而变化。

那与静态资源对应的还有一类资源，就是动态资源。那所谓**动态资源**，就是指在服务器端上存储的，会根据用户请求和其他数据动态生成的，内容可能会在每次请求时都发生变化。比如：Servlet、JSP等(负责逻辑处理)。而Servlet、JSP这些技术现在早都被企业淘汰了，现在在企业项目开发中，都是直接基于Spring框架来构建动态资源。

**BS架构**。

- BS架构：Browser/Server，浏览器/服务器架构模式。客户端只需要浏览器，应用程序的逻辑和数据都存储在服务端。

  优点：维护方便

  缺点：体验一般

- CS架构：Client/Server，客户端/服务器架构模式。需要单独开发维护客户端。

  优点：体验不错

  缺点：开发维护麻烦



#### SpringBoot Web

**Spring Boot 可以帮助我们非常快速的构建应用程序、简化开发、提高效率 。**

**而直接基于SpringBoot进行项目构建和开发，不仅是Spring官方推荐的方式，也是现在企业开发的主流。**

![image-20250805101916166](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202508051019338.png)



#### HTTP协议

http协议规定了浏览器和服务器之间数据传输的规则

特点：

1.基于TCP协议：面向连接，安全

2.基于请求-响应模型的：因此请求对应因此响应

3.http协议是无状态的协议：对于事务处理没有记忆能力。每次请求-响应都是独立的

- 缺点：多次请求间不能各项数据
- 优点：速度快

![image-20250805103806999](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202508051038045.png)

##### 请求协议

请求数据

由请求行：请求数据第一行（请求方式、资源路径、协议）

请求头：第二行开始，格式key:value

![image-20250805103740867](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202508051037914.png)

请求体：POST请求，存放请求参数（GET部分没有）

Web服务器(Tomcat)对HTTP协议的请求数据进行解析，并进行了封装(HttpServletRequest)，在调用Controller方法的时候传递给了该方法。这样，就使得程序员不必直接对协议进行操作，让Web开发更加便捷。

##### 请求数据获取

![image-20250807104555029](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202508071046180.png)

```java
package com.kinsey.demo;

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

```



##### 响应协议

![image-20250807113637867](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202508071136946.png)



##### 响应数据设置

Web服务器对HTTP协议的响应数据进行了封装(HttpServletResponse)，并在调用Controller方法的时候传递给
了该方法。这样，就使得程序员不必直接对协议进行操作，让Web开发更加便捷。

![image-20250807114612816](https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202508071146869.png)

```java
package com.kinsey.demo;

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

```



