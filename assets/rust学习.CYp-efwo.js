import{Bt as e,G as t,Ht as n,Q as r,U as i,W as a,er as o,qn as s,qt as c,yn as l}from"./framework.rjUWPBWi.js";import{n as u}from"./theme.HhYiq06G.js";import"./chunks/vue-i18n.Bu3NfVdi.js";import{a as d,i as f}from"./chunks/vue-router.BUgoFmsr.js";var p={__name:`rust学习`,setup(p,{expose:m}){let h=s(JSON.parse(`{"title":"rust学习","description":"","frontmatter":{"title":"rust学习","date":"2025-03-26 19:07:14","tags":["rust"],"categories":["学习笔记"],"firstImage":"https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503261937218.png"},"headers":[],"relativePath":"pages/posts/rust学习.md"}`)),g=d(),_=f(),v=Object.assign(_.meta.frontmatter||{},h.value?.frontmatter||{});return g.currentRoute.value.data=h.value,n(`valaxy:frontmatter`,v),globalThis.$frontmatter=v,m({frontmatter:{title:`rust学习`,date:`2025-03-26 19:07:14`,tags:[`rust`],categories:[`学习笔记`]}}),(n,s)=>{let d=u;return e(),a(d,{frontmatter:o(v)},{"main-content-md":l(()=>[s[0]||=i(`p`,null,`摘要：本文详细介绍了rust学习的核心概念与实践方法，涵盖关键技术要点与应用场景。`,-1),t(` more `),s[1]||=i(`h3`,{id:`基本介绍`,tabindex:`-1`},[r(`基本介绍 `),i(`a`,{class:`header-anchor`,href:`#基本介绍`,"aria-label":`Permalink to "基本介绍"`},`​`)],-1),s[2]||=i(`p`,null,[i(`strong`,null,`Rust`),r(` 是由 Mozilla 团队于 2010 年推出的系统级编程语言，专注于 `),i(`strong`,null,`安全性`),r(`、`),i(`strong`,null,`性能`),r(` 和 `),i(`strong`,null,`并发性`),r(`。它通过独特的编译时检查机制（如所有权系统），在无需垃圾回收（GC）的前提下保障内存安全，同时性能媲美 C/C++，被 Stack Overflow 评为最受开发者喜爱的语言之一（2016-2023 连续多年）。`)],-1),s[3]||=i(`p`,null,`我们来通过一段代码来简单浏览一下Rust语法`,-1),s[4]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`// Rust 程序入口函数，跟其它语言一样，都是 main，该函数目前无返回值
fn main() {
    // 使用let来声明变量，进行绑定，a是不可变的
    // 此处没有指定a的类型，编译器会默认根据a的值为a推断类型：i32，有符号32位整数
    // 语句的末尾必须以分号结尾
    let a = 10;
    // 主动指定b的类型为i32
    let b: i32 = 20;
    // 这里有两点值得注意：
    // 1. 可以在数值中带上类型:30i32表示数值是30，类型是i32
    // 2. c是可变的，mut是mutable的缩写
    let mut c = 30i32;
    // 还能在数值和类型中间添加一个下划线，让可读性更好
    let d = 30_i32;
    // 跟其它语言一样，可以使用一个函数的返回值来作为另一个函数的参数
    let e = add(add(a, b), add(c, d));

    // println!是宏调用，看起来像是函数但是它返回的是宏定义的代码块
    // 该函数将指定的格式化字符串输出到标准输出中(控制台)
    // {}是占位符，在具体执行过程中，会把e的值代入进来
    println!("( a + b ) + ( c + d ) = {}", e);
}

// 定义一个函数，输入两个i32类型的32位有符号整数，返回它们的和
fn add(i: i32, j: i32) -> i32 {
    // 返回相加值，这里可以省略return
    i + j
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[5]||=i(`p`,null,`注意：`,-1),s[6]||=i(`ul`,null,[i(`li`,null,[r(`字符串使用双引号 `),i(`code`,null,`""`),r(` 而不是单引号 `),i(`code`,null,`''`),r(`，Rust 中单引号是留给单个字符类型（`),i(`code`,null,`char`),r(`）使用的`)]),i(`li`,null,[r(`Rust 使用 `),i(`code`,null,`{}`),r(` 来作为格式化输出占位符，其它语言可能使用的是 `),i(`code`,null,`%s`),r(`，`),i(`code`,null,`%d`),r(`，`),i(`code`,null,`%p`),r(` 等，由于 `),i(`code`,null,`println!`),r(` 会自动推导出具体的类型，因此无需手动指定`)])],-1),s[7]||=i(`h3`,{id:`变量绑定与解构`,tabindex:`-1`},[r(`变量绑定与解构 `),i(`a`,{class:`header-anchor`,href:`#变量绑定与解构`,"aria-label":`Permalink to "变量绑定与解构"`},`​`)],-1),s[8]||=i(`h4`,{id:`变量命名`,tabindex:`-1`},[r(`变量命名 `),i(`a`,{class:`header-anchor`,href:`#变量命名`,"aria-label":`Permalink to "变量命名"`},`​`)],-1),s[9]||=i(`p`,null,[r(`rust和其它语言一样，都需要遵循`),i(`a`,{href:`https://course.rs/practice/naming.html`,target:`_blank`,rel:`noreferrer`},`命名规范`)],-1),s[10]||=i(`p`,null,`下面是一些例子：`,-1),s[11]||=i(`table`,null,[i(`thead`,null,[i(`tr`,null,[i(`th`,null,`类型`),i(`th`,null,`命名风格`),i(`th`,null,`示例`)])]),i(`tbody`,null,[i(`tr`,null,[i(`td`,null,`变量、函数、模块`),i(`td`,null,`蛇形命名法（snake_case）`),i(`td`,null,[i(`code`,null,`calculate_length`),r(`, `),i(`code`,null,`user_name`)])]),i(`tr`,null,[i(`td`,null,`结构体、枚举、特性`),i(`td`,null,`大驼峰式（PascalCase）`),i(`td`,null,[i(`code`,null,`String`),r(`, `),i(`code`,null,`HttpRequest`),r(`, `),i(`code`,null,`FromStr`)])]),i(`tr`,null,[i(`td`,null,`常量和静态变量`),i(`td`,null,`全大写蛇形（SCREAMING_SNAKE_CASE）`),i(`td`,null,[i(`code`,null,`MAX_CONNECTIONS`),r(`, `),i(`code`,null,`DEFAULT_PORT`)])]),i(`tr`,null,[i(`td`,null,`生命周期参数`),i(`td`,null,`短小写字母 + 单引号`),i(`td`,null,[i(`code`,null,`'a`),r(`, `),i(`code`,null,`'ctx`),r(`, `),i(`code`,null,`'static`)])]),i(`tr`,null,[i(`td`,null,`泛型类型参数`),i(`td`,null,`简明的大驼峰式或单字母`),i(`td`,null,[i(`code`,null,`T`),r(`, `),i(`code`,null,`K`),r(`, `),i(`code`,null,`V`),r(`, `),i(`code`,null,`Context`)])])])],-1),s[12]||=i(`h4`,{id:`变量绑定`,tabindex:`-1`},[r(`变量绑定 `),i(`a`,{class:`header-anchor`,href:`#变量绑定`,"aria-label":`Permalink to "变量绑定"`},`​`)],-1),s[13]||=i(`p`,null,[r(`在其他的语言里，我们使用`),i(`code`,null,`var a="hello world"`),r(`的方式给a复制，也就是把等式右边的字符串赋给了变量a，而在rust中，我们使用`),i(`code`,null,`let a="hello world"`),r(`，我们在rust中称这个过程为变量绑定`)],-1),s[14]||=i(`p`,null,`为什么使用变量绑定忙着哩设计了Rust最核心的原则——所有权，简单来讲，任何内存对象都是有主人的，而且一般情况完全属于它的主人，绑定就是把这个对象绑定给一个变量，让这个变量成为它的主人（在这种情况下，该对象之前的主人就会丧失对该对象的所有权）`,-1),s[15]||=i(`p`,null,`绑定就意味着不可变了吗？`,-1),s[16]||=i(`h4`,{id:`变量的可变性`,tabindex:`-1`},[r(`变量的可变性 `),i(`a`,{class:`header-anchor`,href:`#变量的可变性`,"aria-label":`Permalink to "变量的可变性"`},`​`)],-1),s[17]||=i(`p`,null,[r(`Rust一般情况下是不可变的，但如果实在想变，可以使用**`),i(`code`,null,`mut`),r(`**关键字来使变量可变`)],-1),s[18]||=i(`p`,null,[r(`如果我们不使用`),i(`code`,null,`mut`),r(`，那么变量一旦绑定一个数，就不能再绑定另一个数了`)],-1),s[19]||=i(`p`,null,[r(`例如我们不使用mut ，在新建的 `),i(`em`,null,`variables`),r(` 目录下，编辑 `),i(`em`,null,`src/main.rs`),r(` ，改为下面代码：`)],-1),s[20]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn main() {
    let x = 5;
    println!("The value of x is: {}", x);
    x = 6;
    println!("The value of x is: {}", x);
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[21]||=i(`p`,null,`保存文件，再用cargo run运行`,-1),s[22]||=i(`p`,null,[i(`strong`,null,[i(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503261937218.png`,alt:`image-20250326193653127`})])],-1),s[23]||=i(`p`,null,[r(`报了一个错，具体的错误原因是 `),i(`code`,null,`cannot assign twice to immutable variable x`),r(`（无法对不可变的变量进行重复赋值），因为我们想为不可变的 `),i(`code`,null,`x`),r(` 变量再次赋值。`)],-1),s[24]||=i(`p`,null,`这种错误是为了避免无法预期的错误发生在我们的变量上：一个变量往往被多处代码所使用，其中一部分代码假定该变量的值永远不会改变，而另外一部分代码却无情的改变了这个值，在实际开发过程中，这个错误是很难被发现的，特别是在多线程编程中。`,-1),s[25]||=i(`p`,null,`如果我们使用mut，代码就能成功执行`,-1),s[26]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn main() {
    let mut x = 5;
    println!("The value of x is: {}", x);
    x = 6;
    println!("The value of x is: {}", x);
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[27]||=i(`p`,null,[i(`strong`,null,[i(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503261939795.png`,alt:`image-20250326193919766`})])],-1),s[28]||=i(`p`,null,`所以选择可变还是不可变，取决于你的使用场景，例如不可变可以带来安全性，但是丧失了灵活性和性能（如果你要改变，就要重新创建一个新的变量，这里涉及到内存对象的再分配）。而可变变量最大的好处就是使用上的灵活性和性能上的提升。`,-1),s[29]||=i(`h4`,{id:`使用下划线开头忽略未使用的变量`,tabindex:`-1`},[r(`使用下划线开头忽略未使用的变量 `),i(`a`,{class:`header-anchor`,href:`#使用下划线开头忽略未使用的变量`,"aria-label":`Permalink to "使用下划线开头忽略未使用的变量"`},`​`)],-1),s[30]||=i(`p`,null,`如果你创建了一个变量却不在任何地方使用它，Rust就会给出一个警告，因为这可能会是个 BUG，如果不希望rust给出警告，就可以在rust前面加一个下划线来避免它`,-1),s[31]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn main(){
	let _x=10;
	let y=10;
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[32]||=i(`figure`,null,[i(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503261950017.png`,alt:`image-20250326195013988`,loading:`lazy`,decoding:`async`})],-1),s[33]||=i(`p`,null,[r(`可以看到，两个变量都是只有声明，没有使用，但是编译器却独独给出了 `),i(`code`,null,`y`),r(` 未被使用的警告，充分说明了 `),i(`code`,null,`_`),r(` 变量名前缀在这里发挥的作用。并且rust给出了修复的建议`)],-1),s[34]||=i(`h4`,{id:`变量解构`,tabindex:`-1`},[r(`变量解构 `),i(`a`,{class:`header-anchor`,href:`#变量解构`,"aria-label":`Permalink to "变量解构"`},`​`)],-1),s[35]||=i(`p`,null,`let 表达式不仅仅用于变量的绑定，而且还能进行复杂变量的解构:从一个相对复杂的变量里，匹配出该变量的一部分.`,-1),s[36]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn main() {
    let (a, mut b): (bool,bool) = (true, false);
    // a = true,不可变; b = false，可变
    println!("a = {:?}, b = {:?}", a, b);

    b = true;
    assert_eq!(a, b);
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[37]||=i(`h5`,{id:`解构式赋值`,tabindex:`-1`},[r(`解构式赋值 `),i(`a`,{class:`header-anchor`,href:`#解构式赋值`,"aria-label":`Permalink to "解构式赋值"`},`​`)],-1),s[38]||=i(`p`,null,`解构式赋值是指将一个复合数据类型（如元组、数组、结构体等）的内部值提取并赋值给多个变量的操作。在 Rust 中，解构赋值通常用于将一个复杂的数据结构的各个部分提取到单独的变量中。`,-1),s[39]||=i(`p`,null,[r(`解构式赋值在 Rust 中并不直接使用“赋值”的形式（如传统编程语言中的解构赋值），而是通过模式匹配来实现的。在 Rust 中，这种解构通常是通过 `),i(`code`,null,`let`),r(` 语句和匹配模式（如元组模式、数组模式、结构体模式等）来完成的。`)],-1),s[40]||=i(`p`,null,[r(`在 `),i(`a`,{href:`https://course.rs/appendix/rust-versions/1.59.html`,target:`_blank`,rel:`noreferrer`},`Rust 1.59`),r(` 版本后，我们可以在赋值语句的左式中使用元组、切片和结构体模式了。`)],-1),s[41]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`struct Struct {
    e: i32
}

fn main() {
    let (a, b, c, d, e);

    (a, b) = (1, 2);
    // _ 代表匹配一个值，但是我们不关心具体的值是什么，因此没有使用一个变量名而是使用了 _
    [c, .., d, _] = [1, 2, 3, 4, 5];
    Struct { e, .. } = Struct { e: 5 };

    assert_eq!([1, 2, 1, 4, 5], [a, b, c, d, e]);
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[42]||=i(`p`,null,[r(`这种使用方式跟之前的 `),i(`code`,null,`let`),r(` 保持了一致性，但是 `),i(`code`,null,`let`),r(` 会重新绑定，而这里仅仅是对之前绑定的变量进行再赋值。`)],-1),s[43]||=i(`p`,null,[r(`需要注意的是，使用 `),i(`code`,null,`+=`),r(` 的赋值语句还不支持解构式赋值。`)],-1),s[44]||=i(`h4`,{id:`变量和常量之间的差异`,tabindex:`-1`},[r(`变量和常量之间的差异 `),i(`a`,{class:`header-anchor`,href:`#变量和常量之间的差异`,"aria-label":`Permalink to "变量和常量之间的差异"`},`​`)],-1),s[45]||=i(`p`,null,[r(`变量的值不能更改可能让你想起其他另一个很多语言都有的编程概念：`),i(`strong`,null,`常量`),r(`(`),i(`em`,null,`constant`),r(`)。与不可变变量一样，常量也是绑定到一个常量名且不允许更改的值，但是常量和变量之间存在一些差异：`)],-1),s[46]||=i(`ul`,null,[i(`li`,null,[r(`常量不允许使用 `),i(`code`,null,`mut`),r(`。`),i(`strong`,null,`常量不仅仅默认不可变，而且自始至终不可变`),r(`，因为常量在编译完成后，已经确定它的值。`)]),i(`li`,null,[r(`常量使用 `),i(`code`,null,`const`),r(` 关键字而不是 `),i(`code`,null,`let`),r(` 关键字来声明，并且值的类型`),i(`strong`,null,`必须`),r(`标注。`)])],-1),s[47]||=i(`p`,null,[r(`下面是一个常量声明的例子，其常量名为 `),i(`code`,null,`MAX_POINTS`),r(`，值设置为 `),i(`code`,null,`100,000`),r(`。（Rust 常量的命名约定是全部字母都使用大写，并使用下划线分隔单词，另外对数字字面量可插入下划线以提高可读性）：`)],-1),s[48]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`const MAX_POINTS: u32 = 100_000;
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[49]||=i(`p`,null,`常量可以在任意作用域内声明，包括全局作用域，在声明的作用域内，常量在程序运行的整个过程中都有效。对于需要在多处代码共享一个不可变的值时非常有用，例如游戏中允许玩家赚取的最大点数或光速。`,-1),s[50]||=i(`blockquote`,null,[i(`p`,null,`在实际使用中，最好将程序中用到的硬编码值都声明为常量，对于代码后续的维护有莫大的帮助。如果将来需要更改硬编码的值，你也只需要在代码中更改一处即可。`)],-1),s[51]||=i(`h4`,{id:`变量的遮蔽`,tabindex:`-1`},[r(`变量的遮蔽 `),i(`a`,{class:`header-anchor`,href:`#变量的遮蔽`,"aria-label":`Permalink to "变量的遮蔽"`},`​`)],-1),s[52]||=i(`p`,null,`rust允许声明相同的变量名，但后面的变量名会遮蔽掉前面的变量名`,-1),s[53]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn main() {
    let x = 5;
    // 在main函数的作用域内对之前的x进行遮蔽
    let x = x + 1;

    {
        // 在当前的花括号作用域内，对之前的x进行遮蔽
        let x = x * 2;
        println!("The value of x in the inner scope is: {}", x);
    }

    println!("The value of x is: {}", x);
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[54]||=i(`p`,null,`输出`,-1),s[55]||=i(`figure`,null,[i(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503262007537.png`,alt:`image-20250326200735503`,loading:`lazy`,decoding:`async`})],-1),s[56]||=i(`p`,null,[r(`这个程序首先将数值 `),i(`code`,null,`5`),r(` 绑定到 `),i(`code`,null,`x`),r(`，然后通过重复使用 `),i(`code`,null,`let x =`),r(` 来遮蔽之前的 `),i(`code`,null,`x`),r(`，并取原来的值加上 `),i(`code`,null,`1`),r(`，所以 `),i(`code`,null,`x`),r(` 的值变成了 `),i(`code`,null,`6`),r(`。第三个 `),i(`code`,null,`let`),r(` 语句同样遮蔽前面的 `),i(`code`,null,`x`),r(`，取之前的值并乘上 `),i(`code`,null,`2`),r(`，得到的 `),i(`code`,null,`x`),r(` 最终值为 `),i(`code`,null,`12`),r(`。`)],-1),s[57]||=i(`p`,null,[r(`这和 `),i(`code`,null,`mut`),r(` 变量的使用是不同的，第二个 `),i(`code`,null,`let`),r(` 生成了完全不同的新变量，两个变量只是恰好拥有同样的名称，涉及一次内存对象的再分配 ，而 `),i(`code`,null,`mut`),r(` 声明的变量，可以修改同一个内存地址上的值，并不会发生内存对象的再分配，性能要更好。`)],-1),s[58]||=i(`h3`,{id:`基本类型`,tabindex:`-1`},[r(`基本类型 `),i(`a`,{class:`header-anchor`,href:`#基本类型`,"aria-label":`Permalink to "基本类型"`},`​`)],-1),s[59]||=i(`p`,null,`Rust 每个值都有其确切的数据类型，总的来说可以分为两类：基本类型和复合类型。 基本类型意味着它们往往是一个最小化原子类型，无法解构为其它类型（一般意义上来说），由以下组成：`,-1),s[60]||=i(`ul`,null,[i(`li`,null,[r(`数值类型：有符号整数 (`),i(`code`,null,`i8`),r(`, `),i(`code`,null,`i16`),r(`, `),i(`code`,null,`i32`),r(`, `),i(`code`,null,`i64`),r(`, `),i(`code`,null,`isize`),r(`)、 无符号整数 (`),i(`code`,null,`u8`),r(`, `),i(`code`,null,`u16`),r(`, `),i(`code`,null,`u32`),r(`, `),i(`code`,null,`u64`),r(`, `),i(`code`,null,`usize`),r(`) 、浮点数 (`),i(`code`,null,`f32`),r(`, `),i(`code`,null,`f64`),r(`)、以及有理数、复数`)]),i(`li`,null,[r(`字符串：字符串字面量和字符串切片 `),i(`code`,null,`&str`)]),i(`li`,null,[r(`布尔类型：`),i(`code`,null,`true`),r(` 和 `),i(`code`,null,`false`)]),i(`li`,null,`字符类型：表示单个 Unicode 字符，存储为 4 个字节`),i(`li`,null,[r(`单元类型：即 `),i(`code`,null,`()`),r(` ，其唯一的值也是 `),i(`code`,null,`()`)])],-1),s[61]||=i(`h4`,{id:`数值类型`,tabindex:`-1`},[r(`数值类型 `),i(`a`,{class:`header-anchor`,href:`#数值类型`,"aria-label":`Permalink to "数值类型"`},`​`)],-1),s[62]||=i(`h5`,{id:`整数类型`,tabindex:`-1`},[r(`整数类型 `),i(`a`,{class:`header-anchor`,href:`#整数类型`,"aria-label":`Permalink to "整数类型"`},`​`)],-1),s[63]||=i(`p`,null,`整数是没有小数部分的数字，之前使用过的i32类型，表示有符号的32为整数(i是英文单词integer的首字母，与之相反的是u，代表无符号的unsigned类型），下表显示了Rust中的内置函数整数类型:`,-1),s[64]||=i(`table`,null,[i(`thead`,null,[i(`tr`,null,[i(`th`,null,`长度`),i(`th`,null,`有符号类型`),i(`th`,null,`无符号类型`)])]),i(`tbody`,null,[i(`tr`,null,[i(`td`,null,`8 位`),i(`td`,null,[i(`code`,null,`i8`)]),i(`td`,null,[i(`code`,null,`u8`)])]),i(`tr`,null,[i(`td`,null,`16 位`),i(`td`,null,[i(`code`,null,`i16`)]),i(`td`,null,[i(`code`,null,`u16`)])]),i(`tr`,null,[i(`td`,null,`32 位`),i(`td`,null,[i(`code`,null,`i32`)]),i(`td`,null,[i(`code`,null,`u32`)])]),i(`tr`,null,[i(`td`,null,`64 位`),i(`td`,null,[i(`code`,null,`i64`)]),i(`td`,null,[i(`code`,null,`u64`)])]),i(`tr`,null,[i(`td`,null,`128 位`),i(`td`,null,[i(`code`,null,`i128`)]),i(`td`,null,[i(`code`,null,`u128`)])]),i(`tr`,null,[i(`td`,null,`视架构而定`),i(`td`,null,[i(`code`,null,`isize`)]),i(`td`,null,[i(`code`,null,`usize`)])])])],-1),s[65]||=i(`p`,null,[r(`类型定义的形式统一为：`),i(`code`,null,`有无符号 + 类型大小(位数)`),r(`。`),i(`strong`,null,`无符号数`),r(`表示数字只能取正数和 0，而`),i(`strong`,null,`有符号`),r(`则表示数字可以取正数、负数还有 0。就像在纸上写数字一样：当要强调符号时，数字前面可以带上正号或负号；然而，当很明显确定数字为正数时，就不需要加上正号了。有符号数字以`),i(`a`,{href:`https://en.wikipedia.org/wiki/Two's_complement`,target:`_blank`,rel:`noreferrer`},`补码`),r(`形式存储。`)],-1),s[66]||=i(`p`,null,[r(`每个有符号类型规定的数字范围是 -(2n - 1) ~ 2n - 1 - 1，其中 `),i(`code`,null,`n`),r(` 是该定义形式的位长度。因此 `),i(`code`,null,`i8`),r(` 可存储数字范围是 -(27) ~ 27 - 1，即 -128 ~ 127。无符号类型可以存储的数字范围是 0 ~ 2n - 1，所以 `),i(`code`,null,`u8`),r(` 能够存储的数字为 0 ~ 28 - 1，即 0 ~ 255。`)],-1),s[67]||=i(`p`,null,[r(`此外，`),i(`code`,null,`isize`),r(` 和 `),i(`code`,null,`usize`),r(` 类型取决于程序运行的计算机 CPU 类型： 若 CPU 是 32 位的，则这两个类型是 32 位的，同理，若 CPU 是 64 位，那么它们则是 64 位。`)],-1),s[68]||=i(`p`,null,`整型字面量可以用下表的形式书写：`,-1),s[69]||=i(`table`,null,[i(`thead`,null,[i(`tr`,null,[i(`th`,null,`数字字面量`),i(`th`,null,`示例`)])]),i(`tbody`,null,[i(`tr`,null,[i(`td`,null,`十进制`),i(`td`,null,[i(`code`,null,`98_222`)])]),i(`tr`,null,[i(`td`,null,`十六进制`),i(`td`,null,[i(`code`,null,`0xff`)])]),i(`tr`,null,[i(`td`,null,`八进制`),i(`td`,null,[i(`code`,null,`0o77`)])]),i(`tr`,null,[i(`td`,null,`二进制`),i(`td`,null,[i(`code`,null,`0b1111_0000`)])]),i(`tr`,null,[i(`td`,null,[r(`字节 (仅限于 `),i(`code`,null,`u8`),r(`)`)]),i(`td`,null,[i(`code`,null,`b'A'`)])])])],-1),s[70]||=i(`h6`,{id:`整型溢出`,tabindex:`-1`},[r(`整型溢出 `),i(`a`,{class:`header-anchor`,href:`#整型溢出`,"aria-label":`Permalink to "整型溢出"`},`​`)],-1),s[71]||=i(`p`,null,[r(`假设我们有个u8类型的数，它可以存放0到255的数，如果我们修改为256或更大，就会发生整型溢出，关于这一行为 Rust 有一些有趣的规则：当在 debug 模式编译时，Rust 会检查整型溢出，若存在这些问题，则使程序在编译时 `),i(`em`,null,`panic`),r(`(崩溃,Rust 使用这个术语来表明程序因错误而退出)。`)],-1),s[72]||=i(`p`,null,[r(`在当使用 `),i(`code`,null,`--release`),r(` 参数进行 release 模式构建时，Rust `),i(`strong`,null,`不`),r(`检测溢出。相反，当检测到整型溢出时，Rust 会按照补码循环溢出（`),i(`em`,null,`two’s complement wrapping`),r(`）的规则处理。简而言之，大于该类型最大值的数值会被补码转换成该类型能够支持的对应数字的最小值。比如在 `),i(`code`,null,`u8`),r(` 的情况下，256 变成 0，257 变成 1，依此类推。程序不会 `),i(`em`,null,`panic`),r(`，但是该变量的值可能不是你期望的值。依赖这种默认行为的代码都应该被认为是错误的代码。`)],-1),s[73]||=i(`p`,null,`要显式处理可能的溢出，可以使用标准库针对原始数字类型提供的这些方法：`,-1),s[74]||=i(`ul`,null,[i(`li`,null,[r(`使用 `),i(`code`,null,`wrapping_*`),r(` 方法在所有模式下都按照补码循环溢出规则处理，例如 `),i(`code`,null,`wrapping_add`)]),i(`li`,null,[r(`如果使用 `),i(`code`,null,`checked_*`),r(` 方法时发生溢出，则返回 `),i(`code`,null,`None`),r(` 值`)]),i(`li`,null,[r(`使用 `),i(`code`,null,`overflowing_*`),r(` 方法返回该值和一个指示是否存在溢出的布尔值`)]),i(`li`,null,[r(`使用 `),i(`code`,null,`saturating_*`),r(` 方法，可以限定计算后的结果不超过目标类型的最大值或低于最小值，例如:`)])],-1),s[75]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`//101没有超过u8的最大值，过可以返回101
assert_eq!(100u8.saturating_add(1), 101);

//尝试将 255 加上 127 时，结果 382 超出了 u8 能表示的最大值（255）。但是，saturating_add 会确保不会发生溢出，而是返回 u8 类型的最大值 255。
assert_eq!(u8::MAX.saturating_add(127), u8::MAX);

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[76]||=i(`p`,null,`下面是一个演示wrapping_*方法的示例`,-1),s[77]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn main() {
    let a : u8 = 255;
    let b = a.wrapping_add(20);
    println!("{}", b);  // 19
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[78]||=i(`p`,null,`输出是19，相当于是275mod256=19`,-1),s[79]||=i(`h5`,{id:`浮点类型`,tabindex:`-1`},[r(`浮点类型 `),i(`a`,{class:`header-anchor`,href:`#浮点类型`,"aria-label":`Permalink to "浮点类型"`},`​`)],-1),s[80]||=i(`p`,null,`浮点类型数字是带有小数点的数字，在rust中浮点类型也有两种基本类型:f32和f64，分别为32位和64位大小。默认浮点类型是f64，在线代的CPU中它的速度与f32几乎相同，但精度更高`,-1),s[81]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn main() {
    let x = 2.0; // f64

    let y: f32 = 3.0; // f32
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[82]||=i(`p`,null,[i(`code`,null,`f32`),r(` 类型是单精度浮点型，`),i(`code`,null,`f64`),r(` 为双精度。`)],-1),s[83]||=i(`p`,null,[r(`注意：1.`),i(`strong`,null,`浮点数往往是你想要数字的近似表达`)],-1),s[84]||=i(`p`,null,[r(`​ 2.`),i(`strong`,null,`浮点数在某些特性上是反直觉的`)],-1),s[85]||=i(`p`,null,`所以有些浮点数虽然看上去相等，但由于精度问题，并不相等`,-1),s[86]||=i(`h6`,{id:`nan`,tabindex:`-1`},[r(`NaN `),i(`a`,{class:`header-anchor`,href:`#nan`,"aria-label":`Permalink to "NaN"`},`​`)],-1),s[87]||=i(`p`,null,[r(`对于数学上未定义的结果，例如对负数取平方根 `),i(`code`,null,`-42.1.sqrt()`),r(` ，会产生一个特殊的结果：Rust 的浮点数类型使用 `),i(`code`,null,`NaN`),r(` (not a number) 来处理这些情况。`)],-1),s[88]||=i(`p`,null,[i(`strong`,null,[r(`所有跟 `),i(`code`,null,`NaN`),r(` 交互的操作，都会返回一个 `),i(`code`,null,`NaN`)]),r(`，而且 `),i(`code`,null,`NaN`),r(` 不能用来比较，下面的代码会崩溃：`)],-1),s[89]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn main() {
  let x = (-42.0_f32).sqrt();
  assert_eq!(x, x);
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[90]||=i(`p`,null,[r(`出于防御性编程的考虑，可以使用 `),i(`code`,null,`is_nan()`),r(` 等方法，可以用来判断一个数值是否是 `),i(`code`,null,`NaN`),r(` ：`)],-1),s[91]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn main() {
    let x = (-42.0_f32).sqrt();
    if x.is_nan() {
        println!("未定义的数学行为")
    }
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[92]||=i(`p`,null,`所以NaN的用处大概是用来抛出计算过程中的异常的`,-1),s[93]||=i(`h5`,{id:`数字运算`,tabindex:`-1`},[r(`数字运算 `),i(`a`,{class:`header-anchor`,href:`#数字运算`,"aria-label":`Permalink to "数字运算"`},`​`)],-1),s[94]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn main() {
    // 加法
    let sum = 5 + 10;

    // 减法
    let difference = 95.5 - 4.3;

    // 乘法
    let product = 4 * 30;

    // 除法
    let quotient = 56.7 / 32.2;

    // 求余
    let remainder = 43 % 5;
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[95]||=i(`p`,null,[r(`这些语句中的每个表达式都使用了数学运算符，并且计算结果绑定到一个变量上，`),i(`a`,{href:`https://course.rs/appendix/operators.html#%E8%BF%90%E7%AE%97%E7%AC%A6`,target:`_blank`,rel:`noreferrer`},`附录 B`),r(` 中给出了 Rust 提供的所有运算符的列表。`)],-1),s[96]||=i(`p`,null,`再来看一个综合性的示例：`,-1),s[97]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn main() {
  // 编译器会进行自动推导，给予twenty i32的类型
  let twenty = 20;
  // 类型标注
  let twenty_one: i32 = 21;
  // 通过类型后缀的方式进行类型标注：22是i32类型
  let twenty_two = 22i32;

  // 只有同样类型，才能运算
  let addition = twenty + twenty_one + twenty_two;
  println!("{} + {} + {} = {}", twenty, twenty_one, twenty_two, addition);

  // 对于较长的数字，可以用_进行分割，提升可读性
  let one_million: i64 = 1_000_000;
  println!("{}", one_million.pow(2));

  // 定义一个f32数组，其中42.0会自动被推导为f32类型
  let forty_twos = [
    42.0,
    42f32,
    42.0_f32,
  ];

  // 打印数组中第一个值，并控制小数位为2位
  println!("{:.2}", forty_twos[0]);
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[98]||=i(`h5`,{id:`位运算`,tabindex:`-1`},[r(`位运算 `),i(`a`,{class:`header-anchor`,href:`#位运算`,"aria-label":`Permalink to "位运算"`},`​`)],-1),s[99]||=i(`p`,null,`Rust 的位运算基本上和其他语言一样`,-1),s[100]||=i(`table`,null,[i(`thead`,null,[i(`tr`,null,[i(`th`,null,`运算符`),i(`th`,null,`说明`)])]),i(`tbody`,null,[i(`tr`,null,[i(`td`,null,`& 位与`),i(`td`,null,`相同位置均为1时则为1，否则为0`)]),i(`tr`,null,[i(`td`,null,`| 位或`),i(`td`,null,`相同位置只要有1时则为1，否则为0`)]),i(`tr`,null,[i(`td`,null,`^ 异或`),i(`td`,null,`相同位置不相同则为1，相同则为0`)]),i(`tr`,null,[i(`td`,null,`! 位非`),i(`td`,null,`把位中的0和1相互取反，即0置为1，1置为0`)]),i(`tr`,null,[i(`td`,null,`<< 左移`),i(`td`,null,`所有位向左移动指定位数，右位补0`)]),i(`tr`,null,[i(`td`,null,`>> 右移`),i(`td`,null,`所有位向右移动指定位数，带符号移动（正数补0，负数补1）`)])])],-1),s[101]||=i(`h5`,{id:`序列`,tabindex:`-1`},[r(`序列 `),i(`a`,{class:`header-anchor`,href:`#序列`,"aria-label":`Permalink to "序列"`},`​`)],-1),s[102]||=i(`p`,null,[r(`用`),i(`code`,null,`..`),r(`来表示范围，例如 `),i(`code`,null,`1..5`),r(`，生成从 1 到 4 的连续数字，不包含 5 ；`),i(`code`,null,`1..=5`),r(`，生成从 1 到 5 的连续数字，包含 5，它的用途很简单，常常用于循环中：`)],-1),s[103]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`for i in 1..=5 {
    println!("{}",i);
}

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[104]||=i(`p`,null,`最终程序输出1到5`,-1),s[105]||=i(`p`,null,[i(`strong`,null,`注意`),r(`:序列只允许用于数字或字符类型，原因是：它们可以连续，同时编译器在编译期可以检查该序列是否为空，字符和数字值是 Rust 中仅有的可以用于判断是否为空的类型。`)],-1),s[106]||=i(`h5`,{id:`使用-as-完成类型转换`,tabindex:`-1`},[r(`使用 As 完成类型转换 `),i(`a`,{class:`header-anchor`,href:`#使用-as-完成类型转换`,"aria-label":`Permalink to "使用 As 完成类型转换"`},`​`)],-1),s[107]||=i(`p`,null,[r(`Rust 中可以使用 As 来完成一个类型到另一个类型的转换，其最常用于将原始类型转换为其他原始类型，但是它也可以完成诸如将指针转换为地址、地址转换为指针以及将指针转换为其他指针等功能。你可以在`),i(`a`,{href:`https://course.rs/advance/into-types/converse.html`,target:`_blank`,rel:`noreferrer`},`这里`),r(`了解更多相关的知识。`)],-1),s[108]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn main() {
   let a = 3.1 as i8;
   let b = 100_i8 as i32;
   let c = 'a' as u8; // 将字符'a'转换为整数，97

   println!("{},{},{}",a,b,c)
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[109]||=i(`h5`,{id:`有理数和复数`,tabindex:`-1`},[r(`有理数和复数 `),i(`a`,{class:`header-anchor`,href:`#有理数和复数`,"aria-label":`Permalink to "有理数和复数"`},`​`)],-1),s[110]||=i(`p`,null,`Rust 的标准库相比其它语言，准入门槛较高，因此有理数和复数并未包含在标准库中：`,-1),s[111]||=i(`ul`,null,[i(`li`,null,`有理数和复数`),i(`li`,null,`任意大小的整数和任意精度的浮点数`),i(`li`,null,`固定精度的十进制小数，常用于货币相关的场景`)],-1),s[112]||=i(`p`,null,[r(`好在社区已经开发出高质量的 Rust 数值库：`),i(`a`,{href:`https://crates.io/crates/num`,target:`_blank`,rel:`noreferrer`},`num`),r(`。`)],-1),s[113]||=i(`p`,null,[r(`按照以下步骤来引入 `),i(`code`,null,`num`),r(` 库：`)],-1),s[114]||=i(`ol`,null,[i(`li`,null,[r(`创建新工程 `),i(`code`,null,`cargo new complex-num && cd complex-num`)]),i(`li`,null,[r(`在 `),i(`code`,null,`Cargo.toml`),r(` 中的 `),i(`code`,null,`[dependencies]`),r(` 下添加一行 `),i(`code`,null,`num = "0.4.0"`)]),i(`li`,null,[r(`将 `),i(`code`,null,`src/main.rs`),r(` 文件中的 `),i(`code`,null,`main`),r(` 函数替换为下面的代码`)]),i(`li`,null,[r(`运行 `),i(`code`,null,`cargo run`)])],-1),s[115]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`use num::complex::Complex;

 fn main() {
   let a = Complex { re: 2.1, im: -1.2 };
   let b = Complex::new(11.1, 22.2);
   let result = a + b;

   println!("{} + {}i", result.re, result.im)
 }
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[116]||=i(`h4`,{id:`字符、布尔、单元类型`,tabindex:`-1`},[r(`字符、布尔、单元类型 `),i(`a`,{class:`header-anchor`,href:`#字符、布尔、单元类型`,"aria-label":`Permalink to "字符、布尔、单元类型"`},`​`)],-1),s[117]||=i(`h5`,{id:`字符类型-char`,tabindex:`-1`},[r(`字符类型(char) `),i(`a`,{class:`header-anchor`,href:`#字符类型-char`,"aria-label":`Permalink to "字符类型(char)"`},`​`)],-1),s[118]||=i(`p`,null,`在rust中，不仅仅是ASCII，所有的Unicode、単个中文，日文、韩文、emoji 表情符号等等，都是合法的字符类型,占4个字节`,-1),s[119]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn main() {
    let c = 'z';
    let z = 'ℤ';
    let g = '国';
    let heart_eyed_cat = '😻';
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[120]||=i(`h5`,{id:`布尔-bool`,tabindex:`-1`},[r(`布尔(bool) `),i(`a`,{class:`header-anchor`,href:`#布尔-bool`,"aria-label":`Permalink to "布尔(bool)"`},`​`)],-1),s[121]||=i(`p`,null,`拥有true和false，占1个字节`,-1),s[122]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn main() {
    let t = true;

    let f: bool = false; // 使用类型标注,显式指定f的类型

    if f {
        println!("这是段毫无意义的代码");
    }
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[123]||=i(`h5`,{id:`单元类型`,tabindex:`-1`},[r(`单元类型 `),i(`a`,{class:`header-anchor`,href:`#单元类型`,"aria-label":`Permalink to "单元类型"`},`​`)],-1),s[124]||=i(`p`,null,[r(`单元类型就是 `),i(`code`,null,`()`)],-1),s[125]||=i(`h4`,{id:`语句及表达式`,tabindex:`-1`},[r(`语句及表达式 `),i(`a`,{class:`header-anchor`,href:`#语句及表达式`,"aria-label":`Permalink to "语句及表达式"`},`​`)],-1),s[126]||=i(`p`,null,`Rust 的函数体是由一系列语句组成，最后由一个表达式来返回值，例如：`,-1),s[127]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn add_with_extra(x: i32, y: i32) -> i32 {
    let x = x + 1; // 语句
    let y = y + 5; // 语句
   	x+y //表达式
}

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[128]||=i(`p`,null,`语句会执行一些操作但是不会返回一个值，而表达式会在求值后返回一个值，因此在上述函数体的三行代码中，前两行是语句，最后一行是表达式。`,-1),s[129]||=i(`p`,null,[r(`对于 Rust 语言而言，`),i(`strong`,null,`这种基于语句（statement）和表达式（expression）的方式是非常重要的，你需要能明确的区分这两个概念`),r(`，但是对于很多其它语言而言，这两个往往无需区分。基于表达式是函数式语言的重要特征，`),i(`strong`,null,`表达式总要返回值`),r(`。`)],-1),s[130]||=i(`h5`,{id:`语句`,tabindex:`-1`},[r(`语句 `),i(`a`,{class:`header-anchor`,href:`#语句`,"aria-label":`Permalink to "语句"`},`​`)],-1),s[131]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`let a = 8;
let b: Vec<f64> = Vec::new();
let (a, c) = ("hi", false);

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[132]||=i(`p`,null,`以上都是语句，它们完成一个具体的操作，但是并没有返回值，因此是语句`,-1),s[133]||=i(`p`,null,`由于let是语句，那当然不能把一个语句赋给其他值`,-1),s[134]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`let b = (let a = 8);
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[135]||=i(`p`,null,`上述操作会报错`,-1),s[136]||=i(`h5`,{id:`表达式`,tabindex:`-1`},[r(`表达式 `),i(`a`,{class:`header-anchor`,href:`#表达式`,"aria-label":`Permalink to "表达式"`},`​`)],-1),s[137]||=i(`p`,null,`表达式会进行求职，然后返回一个值，例如5+6在求值后会返回11，因此它是一个表达式`,-1),s[138]||=i(`p`,null,`调用一个函数是表达式，因为会返回一个值，调用宏也是表达式，用花括号包裹最终返回一个值的语句块也是表达式，总之，能返回值，它就是表达式:`,-1),s[139]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn main() {
    let y = {
        let x = 3;
        x + 1
    };

    println!("The value of y is: {}", y);
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[140]||=i(`p`,null,[r(`上面使用一个语句块表达式将值赋给 `),i(`code`,null,`y`),r(` 变量，语句块长这样：`)],-1),s[141]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`{
let x=3；
x+1
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[142]||=i(`p`,null,[r(`注意:`),i(`strong`,null,`表达式不能包含分号`),r(`。这一点非常重要，一旦你在表达式后加上分号，它就会变成一条语句，再也`),i(`strong`,null,`不会`),r(`返回一个值`)],-1),s[143]||=i(`h4`,{id:`函数`,tabindex:`-1`},[r(`函数 `),i(`a`,{class:`header-anchor`,href:`#函数`,"aria-label":`Permalink to "函数"`},`​`)],-1),s[144]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn add(i: i32, j: i32) -> i32 {
   i + j
 }

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[145]||=i(`p`,null,[r(`声明函数的关键字 `),i(`code`,null,`fn`),r(`，函数名 `),i(`code`,null,`add()`),r(`，参数 `),i(`code`,null,`i`),r(` 和 `),i(`code`,null,`j`),r(`，参数类型和返回值类型都是 `),i(`code`,null,`i32`)],-1),s[146]||=i(`figure`,null,[i(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503272205857.png`,alt:`image-20250327220537722`,loading:`lazy`,decoding:`async`})],-1),s[147]||=i(`h5`,{id:`函数要点`,tabindex:`-1`},[r(`函数要点 `),i(`a`,{class:`header-anchor`,href:`#函数要点`,"aria-label":`Permalink to "函数要点"`},`​`)],-1),s[148]||=i(`ul`,null,[i(`li`,null,[r(`函数名和变量名使用`),i(`a`,{href:`https://course.rs/practice/naming.html`,target:`_blank`,rel:`noreferrer`},`蛇形命名法(snake case)`),r(`，例如 `),i(`code`,null,`fn add_two() -> {}`)]),i(`li`,null,`函数的位置可以随便放，Rust 不关心我们在哪里定义了函数，只要有定义即可`),i(`li`,null,`每个函数参数都需要标注具体类型`)],-1),s[149]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn main() {
    another_function(5, 6.1);
}

fn another_function(x: i32, y: f32) {
    println!("The value of x is: {}", x);
    println!("The value of y is: {}", y);
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[150]||=i(`p`,null,`x:i32的i32是必要的，去掉的话会报错`,-1),s[151]||=i(`h5`,{id:`函数返回`,tabindex:`-1`},[r(`函数返回 `),i(`a`,{class:`header-anchor`,href:`#函数返回`,"aria-label":`Permalink to "函数返回"`},`​`)],-1),s[152]||=i(`p`,null,`在rust中，函数就是表达式，因此我们可以把函数的返回值直接给调用者。`,-1),s[153]||=i(`p`,null,[r(`函数的返回值就是函数体最后一条表达式的返回值，当然我们也可以使用 `),i(`code`,null,`return`),r(` 提前返回，下面的函数使用最后一条表达式来返回一个值：`)],-1),s[154]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn plus_five(x:i32) -> i32 {
    x + 5
}

fn main() {
    let x = plus_five(5);

    println!("The value of x is: {}", x);
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[155]||=i(`p`,null,[i(`code`,null,`x + 5`),r(` 是一条表达式，求值后，返回一个值，因为它是函数的最后一行，因此该表达式的值也是函数的返回值。`)],-1),s[156]||=i(`p`,null,`再来看两个重点：`,-1),s[157]||=i(`ol`,null,[i(`li`,null,[i(`code`,null,`let x = plus_five(5)`),r(`，说明我们用一个函数的返回值来初始化 `),i(`code`,null,`x`),r(` 变量，因此侧面说明了在 Rust 中函数也是表达式，这种写法等同于 `),i(`code`,null,`let x = 5 + 5;`)]),i(`li`,null,[i(`code`,null,`x + 5`),r(` 没有分号，因为它是一条表达式，所以函数最终返回的结果是x+5的结果`)])],-1),s[158]||=i(`p`,null,[r(`再来看一段代码，同时使用 `),i(`code`,null,`return`),r(` 和表达式作为返回值：`)],-1),s[159]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn plus_or_minus(x:i32) -> i32 {
    if x > 5 {
        return x - 5
    }

    x + 5
}

fn main() {
    let x = plus_or_minus(5);

    println!("The value of x is: {}", x);
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[160]||=i(`p`,null,[i(`code`,null,`plus_or_minus`),r(` 函数根据传入 `),i(`code`,null,`x`),r(` 的大小来决定是做加法还是减法，若 `),i(`code`,null,`x > 5`),r(` 则通过 `),i(`code`,null,`return`),r(` 提前返回 `),i(`code`,null,`x - 5`),r(` 的值,否则返回 `),i(`code`,null,`x + 5`),r(` 的值。`)],-1),s[161]||=i(`h5`,{id:`rust-中的特殊返回类型`,tabindex:`-1`},[r(`Rust 中的特殊返回类型 `),i(`a`,{class:`header-anchor`,href:`#rust-中的特殊返回类型`,"aria-label":`Permalink to "Rust 中的特殊返回类型"`},`​`)],-1),s[162]||=i(`h6`,{id:`无返回值`,tabindex:`-1`},[r(`无返回值`),i(`code`,null,`()`),r(),i(`a`,{class:`header-anchor`,href:`#无返回值`,"aria-label":'Permalink to "无返回值`()`"'},`​`)],-1),s[163]||=i(`p`,null,`对于 Rust 新手来说，有些返回类型很难理解，而且如果你想通过百度或者谷歌去搜索，都不好查询，因为这些符号太常见了，根本难以精确搜索到。`,-1),s[164]||=i(`p`,null,[r(`例如单元类型 `),i(`code`,null,`()`),r(`，是一个零长度的元组。它没啥作用，但是可以用来表达一个函数没有返回值：`)],-1),s[165]||=i(`ul`,null,[i(`li`,null,[r(`函数没有返回值，那么返回一个 `),i(`code`,null,`()`)]),i(`li`,null,[r(`通过 `),i(`code`,null,`;`),r(` 结尾的语句返回一个 `),i(`code`,null,`()`)])],-1),s[166]||=i(`p`,null,[r(`例如下面的 `),i(`code`,null,`report`),r(` 函数会隐式返回一个 `),i(`code`,null,`()`),r(`：`)],-1),s[167]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`use std::fmt::Debug;

fn report<T: Debug>(item: T) {
  println!("{:?}", item);

}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[168]||=i(`p`,null,[r(`与上面的函数返回值相同，但是下面的函数显式的返回了 `),i(`code`,null,`()`),r(`：`)],-1),s[169]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn clear(text: &mut String) -> () {
  *text = String::from("");
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[170]||=i(`p`,null,[r(`在实际编程中，你会经常在错误提示中看到该 `),i(`code`,null,`()`),r(` 的身影出没，假如你的函数需要返回一个 `),i(`code`,null,`u32`),r(` 值，但是如果你不幸的以 `),i(`code`,null,`表达式;`),r(` 的语句形式作为函数的最后一行代码，就会报错：`)],-1),s[171]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn add(x:u32,y:u32) -> u32 {
    x + y;
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[172]||=i(`p`,null,`错误如下：`,-1),s[173]||=i(`div`,{class:`language-console`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`console`),i(`pre`,null,[i(`code`,{class:`language-console`},`error[E0308]: mismatched types // 类型不匹配
 --> src/main.rs:6:24
  |
6 | fn add(x:u32,y:u32) -> u32 {
  |    ---                 ^^^ expected \`u32\`, found \`()\` // 期望返回u32,却返回()
  |    |
  |    implicitly returns \`()\` as its body has no tail or \`return\` expression
7 |     x + y;
  |          - help: consider removing this semicolon
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[174]||=i(`p`,null,[i(`strong`,null,`注意：只有表达式能返回值`),r(`，而 `),i(`code`,null,`;`),r(` 结尾的是语句，在 Rust 中，一定要严格区分`),i(`strong`,null,`表达式`),r(`和`),i(`strong`,null,`语句`),r(`的区别，这个在其它语言中往往是被忽视的点。`)],-1),s[175]||=i(`h6`,{id:`永不返回的发散函数`,tabindex:`-1`},[r(`永不返回的发散函数 `),i(`code`,null,`!`),r(),i(`a`,{class:`header-anchor`,href:`#永不返回的发散函数`,"aria-label":'Permalink to "永不返回的发散函数 `!`"'},`​`)],-1),s[176]||=i(`p`,null,[r(`当用 `),i(`code`,null,`!`),r(` 作函数返回类型的时候，表示该函数永不返回( diverge function )，特别的，这种语法往往用做会导致程序崩溃的函数：`)],-1),s[177]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn dead_end() -> ! {
  panic!("你已经到了穷途末路，崩溃吧！");
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[178]||=i(`p`,null,`下面的函数创建了一个无限循环，该循环永不跳出，因此函数也永不返回：`,-1),s[179]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn forever() -> ! {
  loop {
    //...
  };
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[180]||=i(`h3`,{id:`所有权和借用`,tabindex:`-1`},[r(`所有权和借用 `),i(`a`,{class:`header-anchor`,href:`#所有权和借用`,"aria-label":`Permalink to "所有权和借用"`},`​`)],-1),s[181]||=i(`h4`,{id:`所有权`,tabindex:`-1`},[r(`所有权 `),i(`a`,{class:`header-anchor`,href:`#所有权`,"aria-label":`Permalink to "所有权"`},`​`)],-1),s[182]||=i(`p`,null,`所有的程序都必须和计算机内存打交道，如何从内存中申请空间来存放程序的运行内容，如何在不需要的时候释放这些空间，成了重中之重，也是所有编程语言设计的难点之一。在计算机语言不断演变过程中，出现了三种流派：`,-1),s[183]||=i(`ul`,null,[i(`li`,null,[i(`strong`,null,`垃圾回收机制(GC)`),r(`，在程序运行时不断寻找不再使用的内存，典型代表：Java、Go`)]),i(`li`,null,[i(`strong`,null,`手动管理内存的分配和释放`),r(`, 在程序中，通过函数调用的方式来申请和释放内存，典型代表：C++`)]),i(`li`,null,[i(`strong`,null,`通过所有权来管理内存`),r(`，编译器在编译时会根据一系列规则进行检查`)])],-1),s[184]||=i(`p`,null,`其中 Rust 选择了第三种，最妙的是，这种检查只发生在编译期，因此对于程序运行期，不会有任何上的性能损失`,-1),s[185]||=i(`h5`,{id:`栈和堆`,tabindex:`-1`},[r(`栈和堆 `),i(`a`,{class:`header-anchor`,href:`#栈和堆`,"aria-label":`Permalink to "栈和堆"`},`​`)],-1),s[186]||=i(`p`,null,`栈和堆是编程语言最核心的数据结构，在rust中，值是位于栈还是堆上非常重要，这会影响程序的行为和性能`,-1),s[187]||=i(`p`,null,`注意:栈和堆的核心目标就是为程序在运行时提供可供使用的内存空间`,-1),s[188]||=i(`h6`,{id:`栈`,tabindex:`-1`},[r(`栈 `),i(`a`,{class:`header-anchor`,href:`#栈`,"aria-label":`Permalink to "栈"`},`​`)],-1),s[189]||=i(`p`,null,[r(`栈按照顺序存储值并以相反顺序取出值，这中操作方式也被称作`),i(`strong`,null,`后进先出`),r(`。`)],-1),s[190]||=i(`p`,null,`增加数据叫做进栈，减少数据叫做出栈`,-1),s[191]||=i(`p`,null,`但是，栈中所有的数据都必须占用已知固定大小的内存空间，假设数据大小未知，那么在取出数据时，你讲无法取到你想要的数据`,-1),s[192]||=i(`h6`,{id:`堆`,tabindex:`-1`},[r(`堆 `),i(`a`,{class:`header-anchor`,href:`#堆`,"aria-label":`Permalink to "堆"`},`​`)],-1),s[193]||=i(`p`,null,`与栈不同的是，当我们遇见大小未知或者可能变化的数据，我们就需要将其存储在堆上`,-1),s[194]||=i(`p`,null,`当向堆上放入数据时，需要请求一定大小的内存空间。操作系统在对的没出找到一块足够大的空位，把它标记为已使用，不返回一个表示该位置地址的指针，该过程被称为在堆上分配内存`,-1),s[195]||=i(`p`,null,[r(`接着，`),i(`strong`,null,`该指针会被推入栈中`),r(`，因为指针大小固定，在后续使用过程中，将通过栈中的指针，来获取数据在堆上的时机内存位置， 进而访问该数据`)],-1),s[196]||=i(`p`,null,`由上可知，堆是一种缺乏组织的数据结构`,-1),s[197]||=i(`h6`,{id:`性能区别`,tabindex:`-1`},[r(`性能区别 `),i(`a`,{class:`header-anchor`,href:`#性能区别`,"aria-label":`Permalink to "性能区别"`},`​`)],-1),s[198]||=i(`p`,null,`在栈上分配内存比在堆上分配内存要快，因为入栈是操作系统无需调用函数来分配现代科技，只需要将新数据放入栈顶即可。相比之下，在堆上分配内存则需要更多的工作，这是因为操作系统必须首先找到一块足够存放数据的内存空间，接着做一些记录为下一次分配空间做准备，如果当前进程分配的内存页不足时，还需要进行系统调用来申请更多内存。 因此，处理器在栈上分配数据会比在堆上分配数据更加高效。`,-1),s[199]||=i(`h6`,{id:`所有权和堆栈`,tabindex:`-1`},[r(`所有权和堆栈 `),i(`a`,{class:`header-anchor`,href:`#所有权和堆栈`,"aria-label":`Permalink to "所有权和堆栈"`},`​`)],-1),s[200]||=i(`p`,null,`当你的代码调用一个函数时，传递给函数的参数（包括可能指向堆上数据的指针和函数的局部变量）依次被压入栈中，当函数调用结束时，这些值将被从栈中按照相反的顺序依次移除。`,-1),s[201]||=i(`p`,null,`因为堆上的数据缺乏组织，因此跟踪这些数据何时分配和释放是非常重要的，否则堆上的数据将产生内存泄漏 —— 这些数据将永远无法被回收。这就是 Rust 所有权系统为我们提供的强大保障。`,-1),s[202]||=i(`p`,null,[r(`对于其他很多编程语言，你确实无需理解堆栈的原理，但是`),i(`strong`,null,`在 Rust 中，明白堆栈的原理，对于我们理解所有权的工作原理会有很大的帮助`),r(`。`)],-1),s[203]||=i(`h5`,{id:`所有权原则`,tabindex:`-1`},[r(`所有权原则 `),i(`a`,{class:`header-anchor`,href:`#所有权原则`,"aria-label":`Permalink to "所有权原则"`},`​`)],-1),s[204]||=i(`p`,null,`注意几点：`,-1),s[205]||=i(`ol`,null,[i(`li`,null,`Rust 中每一个值都被一个变量所拥有，该变量被称为值的所有者`),i(`li`,null,`一个值同时只能被一个变量所拥有，或者说一个值只能拥有一个所有者`),i(`li`,null,`当所有者（变量）离开作用域范围时，这个值将被丢弃(drop)`)],-1),s[206]||=i(`h6`,{id:`变量作用域`,tabindex:`-1`},[r(`变量作用域 `),i(`a`,{class:`header-anchor`,href:`#变量作用域`,"aria-label":`Permalink to "变量作用域"`},`​`)],-1),s[207]||=i(`p`,null,`作用域是一个变量在程序中有效的范围，假如有这样一个 变量：`,-1),s[208]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`let s = "hello";
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[209]||=i(`p`,null,[r(`变量 `),i(`code`,null,`s`),r(` 绑定到了一个字符串字面值，该字符串字面值是硬编码到程序代码中的。`),i(`code`,null,`s`),r(` 变量从声明的点开始直到当前作用域的结束都是有效的：`)],-1),s[210]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`{                      // s 在这里无效，它尚未声明
    let s = "hello";   // 从此处起，s 是有效的

    // 使用 s
}                      // 此作用域已结束，s不再有效
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[211]||=i(`p`,null,[r(`简而言之，`),i(`code`,null,`s`),r(` 从创建开始就有效，然后有效期持续到它离开作用域为止，可以看出，就作用域来说，Rust 语言跟其他编程语言没有区别。`)],-1),s[212]||=i(`h5`,{id:`变量绑定背后的数据交互`,tabindex:`-1`},[r(`变量绑定背后的数据交互 `),i(`a`,{class:`header-anchor`,href:`#变量绑定背后的数据交互`,"aria-label":`Permalink to "变量绑定背后的数据交互"`},`​`)],-1),s[213]||=i(`h6`,{id:`转移所有权`,tabindex:`-1`},[r(`转移所有权 `),i(`a`,{class:`header-anchor`,href:`#转移所有权`,"aria-label":`Permalink to "转移所有权"`},`​`)],-1),s[214]||=i(`p`,null,`先来看一段代码`,-1),s[215]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`let x = 5;
let y = x;

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[216]||=i(`p`,null,[r(`这段代码并没有发生所有权的转移，原因很简单： 代码首先将 `),i(`code`,null,`5`),r(` 绑定到变量 `),i(`code`,null,`x`),r(`，接着`),i(`strong`,null,`拷贝`),r(),i(`code`,null,`x`),r(` 的值赋给 `),i(`code`,null,`y`),r(`，最终 `),i(`code`,null,`x`),r(` 和 `),i(`code`,null,`y`),r(` 都等于 `),i(`code`,null,`5`),r(`，因为整数是 Rust 基本数据类型，是固定大小的简单值，因此这两个值都是通过`),i(`strong`,null,`自动拷贝`),r(`的方式来赋值的，都被存在栈中，完全无需在堆上分配内存。`)],-1),s[217]||=i(`p`,null,`整个过程中的赋值都是通过值拷贝的方式完成（发生在栈中），因此并不需要所有权转移。`,-1),s[218]||=i(`p`,null,`我们在来看下面代码:`,-1),s[219]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`let s1=String::from("hello");
let s2=s1;
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[220]||=i(`p`,null,[r(`对于基本类型（存储在栈上），Rust 会自动拷贝，但是 `),i(`code`,null,`String`),r(` 不是基本类型，而且是存储在堆上的，因此不能自动拷贝。`)],-1),s[221]||=i(`p`,null,`String类型是一个字符串类型，由存储在栈中的堆指针、字符串长度、字符串容器组成，其中堆指针是最重要的，它指向了真实存储字符串内容的堆指针`,-1),s[222]||=i(`p`,null,[r(`关于上面`),i(`code`,null,`let s2=s1`),r(`，分成两种方式讨论`)],-1),s[223]||=i(`ol`,null,[i(`li`,null,[r(`拷贝 `),i(`code`,null,`String`),r(` 和存储在堆上的字节数组 如果该语句是拷贝所有数据(深拷贝)，那么无论是 `),i(`code`,null,`String`),r(` 本身还是底层的堆上数据，都会被全部拷贝，这对于性能而言会造成非常大的影响`)]),i(`li`,null,[r(`只拷贝 `),i(`code`,null,`String`),r(` 本身 这样的拷贝非常快，因为在 64 位机器上就拷贝了 `),i(`code`,null,`8字节的指针`),r(`、`),i(`code`,null,`8字节的长度`),r(`、`),i(`code`,null,`8字节的容量`),r(`，总计 24 字节，但是带来了新的问题，还记得我们之前提到的所有权规则吧？其中有一条就是：`),i(`strong`,null,`一个值只允许有一个所有者`),r(`，而现在这个值（堆上的真实字符串数据）有了两个所有者：`),i(`code`,null,`s1`),r(` 和 `),i(`code`,null,`s2`),r(`。`)])],-1),s[224]||=i(`p`,null,`好吧，就假定一个值可以拥有两个所有者，会发生什么呢？`,-1),s[225]||=i(`p`,null,[r(`当变量离开作用域后，Rust 会自动调用 `),i(`code`,null,`drop`),r(` 函数并清理变量的堆内存。不过由于两个 `),i(`code`,null,`String`),r(` 变量指向了同一位置。这就有了一个问题：当 `),i(`code`,null,`s1`),r(` 和 `),i(`code`,null,`s2`),r(` 离开作用域，它们都会尝试释放相同的内存。这是一个叫做 `),i(`strong`,null,`二次释放（double free）`),r(` 的错误，也是之前提到过的内存安全性 BUG 之一。两次释放（相同）内存会导致内存污染，它可能会导致潜在的安全漏洞。`)],-1),s[226]||=i(`p`,null,[r(`因此，Rust 这样解决问题：`),i(`strong`,null,[r(`当 `),i(`code`,null,`s1`),r(` 被赋予 `),i(`code`,null,`s2`),r(` 后，Rust 认为 `),i(`code`,null,`s1`),r(` 不再有效，因此也无需在 `),i(`code`,null,`s1`),r(` 离开作用域后 `),i(`code`,null,`drop`),r(` 任何东西，这就是把所有权从 `),i(`code`,null,`s1`),r(` 转移给了 `),i(`code`,null,`s2`),r(`，`),i(`code`,null,`s1`),r(` 在被赋予 `),i(`code`,null,`s2`),r(` 后就马上失效了`)]),r(`。`)],-1),s[227]||=i(`p`,null,`所以在上面代码中，当s1的所有权转移到了s2之后，s1就没有用了`,-1),s[228]||=i(`h6`,{id:`克隆-深拷贝`,tabindex:`-1`},[r(`克隆（深拷贝） `),i(`a`,{class:`header-anchor`,href:`#克隆-深拷贝`,"aria-label":`Permalink to "克隆（深拷贝）"`},`​`)],-1),s[229]||=i(`p`,null,[r(`首先，`),i(`strong`,null,`Rust 永远也不会自动创建数据的 “深拷贝”`),r(`。因此，任何`),i(`strong`,null,`自动`),r(`的复制都不是深拷贝，可以被认为对运行时性能影响较小。`)],-1),s[230]||=i(`p`,null,`如果我们实在想要胜读复制String堆上的数据，可以使用clone方法`,-1),s[231]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`let s1 = String::from("hello");
let s2 = s1.clone();

println!("s1 = {}, s2 = {}", s1, s2);

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[232]||=i(`p`,null,`能正常运行，没报错`,-1),s[233]||=i(`h6`,{id:`拷贝-浅拷贝`,tabindex:`-1`},[r(`拷贝(浅拷贝) `),i(`a`,{class:`header-anchor`,href:`#拷贝-浅拷贝`,"aria-label":`Permalink to "拷贝(浅拷贝)"`},`​`)],-1),s[234]||=i(`p`,null,`浅拷贝只发生在栈上，因此性能很高，在日常编程中，浅拷贝无处不在。`,-1),s[235]||=i(`p`,null,`再回到之前看过的例子:`,-1),s[236]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`let x = 5;
let y = x;

println!("x = {}, y = {}", x, y);
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[237]||=i(`p`,null,[r(`但这段代码似乎与我们刚刚学到的内容相矛盾：没有调用 `),i(`code`,null,`clone`),r(`，不过依然实现了类似深拷贝的效果 —— 没有报所有权的错误。`)],-1),s[238]||=i(`p`,null,[r(`因为`),i(`strong`,null,[r(`任何基本类型的组合可以 `),i(`code`,null,`Copy`),r(` ，不需要分配内存或某种形式资源的类型是可以 `),i(`code`,null,`Copy`),r(` 的`)]),r(`。如下是一些 `),i(`code`,null,`Copy`),r(` 的类型：`)],-1),s[239]||=i(`ul`,null,[i(`li`,null,[r(`所有整数类型，比如 `),i(`code`,null,`u32`)]),i(`li`,null,[r(`布尔类型，`),i(`code`,null,`bool`),r(`，它的值是 `),i(`code`,null,`true`),r(` 和 `),i(`code`,null,`false`)]),i(`li`,null,[r(`所有浮点数类型，比如 `),i(`code`,null,`f64`)]),i(`li`,null,[r(`字符类型，`),i(`code`,null,`char`)]),i(`li`,null,[r(`元组，当且仅当其包含的类型也都是 `),i(`code`,null,`Copy`),r(` 的时候。比如，`),i(`code`,null,`(i32, i32)`),r(` 是 `),i(`code`,null,`Copy`),r(` 的，但 `),i(`code`,null,`(i32, String)`),r(` 就不是`)]),i(`li`,null,[r(`不可变引用 `),i(`code`,null,`&T`),r(` ，例如`),i(`a`,{href:`https://course.rs/basic/ownership/ownership.html#%E8%BD%AC%E7%A7%BB%E6%89%80%E6%9C%89%E6%9D%83`,target:`_blank`,rel:`noreferrer`},`转移所有权`),r(`中的最后一个例子，`),i(`strong`,null,[r(`但是注意：可变引用 `),i(`code`,null,`&mut T`),r(` 是不可以 Copy的`)])])],-1),s[240]||=i(`h4`,{id:`引用与借用`,tabindex:`-1`},[r(`引用与借用 `),i(`a`,{class:`header-anchor`,href:`#引用与借用`,"aria-label":`Permalink to "引用与借用"`},`​`)],-1),s[241]||=i(`p`,null,[r(`如果仅仅支持通过转移所有权的方式获取一个值，那会让程序变得复杂。因此，Rust通过借用来获取一个值，`),i(`strong`,null,`获取变量的引用，称之为借用`)],-1),s[242]||=i(`p`,null,`借用分为两种类型：`,-1),s[243]||=i(`ol`,null,[i(`li`,null,[i(`strong`,null,`不可变引用`),r(`：允许多个借用者同时读取该值，但不允许修改。`)]),i(`li`,null,[i(`strong`,null,`可变引用`),r(`：只允许一个借用者修改该值，但在借用期间不能有其他借用者。`)])],-1),s[244]||=i(`h5`,{id:`引用和解引用`,tabindex:`-1`},[r(`引用和解引用 `),i(`a`,{class:`header-anchor`,href:`#引用和解引用`,"aria-label":`Permalink to "引用和解引用"`},`​`)],-1),s[245]||=i(`p`,null,`常规引用时一个指针类型，指向了对象存储的内存地址。在下面代码中，我们创建了一个i32的值引用y，然后使用解引用运算符来解出y所使用的值:`,-1),s[246]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn main() {
    let x = 5;
    let y = &x; //引用类型
    println!("{}",x);
    println!("{}",*y);

    assert_eq!(5, x);
    assert_eq!(5, *y);
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[247]||=i(`p`,null,`我们使用&来引用一个变量，然后使用*来解引用这个变量`,-1),s[248]||=i(`h5`,{id:`不可变引用`,tabindex:`-1`},[r(`不可变引用 `),i(`a`,{class:`header-anchor`,href:`#不可变引用`,"aria-label":`Permalink to "不可变引用"`},`​`)],-1),s[249]||=i(`p`,null,[r(`下面的代码，我们用 `),i(`code`,null,`s1`),r(` 的引用作为参数传递给 `),i(`code`,null,`calculate_length`),r(` 函数，而不是把 `),i(`code`,null,`s1`),r(` 的所有权转移给该函数：`)],-1),s[250]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn main() {
    let s1 = String::from("hello");

    let len = calculate_length(&s1);

    println!("The length of '{}' is {}.", s1, len);
}

fn calculate_length(s: &String) -> usize {
    s.len()
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[251]||=i(`p`,null,`我们注意到：`,-1),s[252]||=i(`ol`,null,[i(`li`,null,`无需像上章一样：先通过函数参数传入所有权，然后再通过函数返回来传出所有权，代码更加简洁`),i(`li`,null,[i(`code`,null,`calculate_length`),r(` 的参数 `),i(`code`,null,`s`),r(` 类型从 `),i(`code`,null,`String`),r(` 变为 `),i(`code`,null,`&String`)])],-1),s[253]||=i(`p`,null,[r(`在这里，`),i(`code`,null,`&`),r(`符号即是引用，他们允许你使用值，但是不获取所有权`)],-1),s[254]||=i(`figure`,null,[i(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202503282101141.png`,alt:`image-20250328210117010`,loading:`lazy`,decoding:`async`})],-1),s[255]||=i(`p`,null,`通过&s1语法，我们创建了一个指向s1的引用，但是并不拥有他。因为并不拥有这个值，当离开作用域后，其指向的值也不会被丢弃。`,-1),s[256]||=i(`p`,null,[r(`同理，函数 `),i(`code`,null,`calculate_length`),r(` 使用 `),i(`code`,null,`&`),r(` 来表明参数 `),i(`code`,null,`s`),r(` 的类型是一个引用：`)],-1),s[257]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn calculate_length(s: &String) -> usize { // s 是对 String 的引用
    s.len()
} // 这里，s 离开了作用域。但因为它并不拥有引用值的所有权，
  // 所以什么也不会发生

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[258]||=i(`p`,null,[r(`注意：`),i(`strong`,null,`借用的变量不可修改`)],-1),s[259]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn main() {
    let s = String::from("hello");

    change(&s);
}

fn change(some_string: &String) {
    some_string.push_str(", world");
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[260]||=i(`p`,null,[r(`这里尝试在s里添加`),i(`code`,null,`，world`),r(`，但是会报错`)],-1),s[261]||=i(`h5`,{id:`可变引用`,tabindex:`-1`},[r(`可变引用 `),i(`a`,{class:`header-anchor`,href:`#可变引用`,"aria-label":`Permalink to "可变引用"`},`​`)],-1),s[262]||=i(`p`,null,`我们知道用let直接定义的变量的值不可修改，但我们使用mut后，就可修改了`,-1),s[263]||=i(`p`,null,`我们修改上面报错代码`,-1),s[264]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn main() {
    let mut s = String::from("hello");

    change(&mut s);
    println!("{}", s);
}

fn change(some_string: &mut String) {
    some_string.push_str(", world");
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[265]||=i(`p`,null,`输出hello，world`,-1),s[266]||=i(`p`,null,[i(`strong`,null,`可变引用同时只能存在一个`)],-1),s[267]||=i(`p`,null,[r(`不过可变引用并不是随心所欲、想用就用的，它有一个很大的限制： `),i(`strong`,null,`同一作用域，特定数据只能有一个可变引用`),r(`：`)],-1),s[268]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`let mut s = String::from("hello");

let r1 = &mut s;
let r2 = &mut s;

println!("{}, {}", r1, r2);

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[269]||=i(`p`,null,`会报一个错`,-1),s[270]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`error[E0499]: cannot borrow \`s\` as mutable more than once at a time 同一时间无法对 \`s\` 进行两次可变借用
 --> src/main.rs:5:14
  |
4 |     let r1 = &mut s;
  |              ------ first mutable borrow occurs here 首个可变引用在这里借用
5 |     let r2 = &mut s;
  |              ^^^^^^ second mutable borrow occurs here 第二个可变引用在这里借用
6 |
7 |     println!("{}, {}", r1, r2);
  |                        -- first borrow later used here 第一个借用在这里使用

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[271]||=i(`p`,null,[r(`这段代码出错的原因在于，第一个可变借用 `),i(`code`,null,`r1`),r(` 必须要持续到最后一次使用的位置 `),i(`code`,null,`println!`),r(`在 `),i(`code`,null,`r1`),r(` 创建和最后一次使用之间，我们又尝试创建第二个可变借用 `),i(`code`,null,`r2`),r(`。`)],-1),s[272]||=i(`p`,null,`我们改写成下面这种形式`,-1),s[273]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn main() {
    let mut s = String::from("hello");

    let r1 = &mut s;
    println!("{}", r1);
    let r2 = &mut s;
    println!("{}", r2);

}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[274]||=i(`p`,null,[r(`这就避免了在同一时间有多个可变引用指向数据，r1变量在`),i(`code`,null,`println!`),r(`后就离开作用域了，后面只存在r2一个可变引用指向数据`)],-1),s[275]||=i(`p`,null,`这种限制的好处就是使 Rust 在编译期就避免数据竞争，数据竞争可由以下行为造成：`,-1),s[276]||=i(`ul`,null,[i(`li`,null,`两个或更多的指针同时访问同一数据`),i(`li`,null,`至少有一个指针被用来写入数据`),i(`li`,null,`没有同步数据访问的机制`)],-1),s[277]||=i(`p`,null,`数据竞争会导致未定义行为，这种行为很可能超出我们的预期，难以在运行时追踪，并且难以诊断和修复。而 Rust 避免了这种情况的发生，因为它甚至不会编译存在数据竞争的代码！`,-1),s[278]||=i(`p`,null,`很多时候，大括号可以帮我们解决一些编译不通过的问题，通过手动限制变量的作用域：`,-1),s[279]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`let mut s = String::from("hello");

{
    let r1 = &mut s;

} // r1 在这里离开了作用域，所以我们完全可以创建一个新的引用

let r2 = &mut s;

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[280]||=i(`p`,null,[i(`strong`,null,`可变引用与不可变引用不能同时存在`)],-1),s[281]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`let mut s = String::from("hello");

let r1 = &s; // 没问题
let r2 = &s; // 没问题
let r3 = &mut s; // 大问题

println!("{}, {}, and {}", r1, r2, r3);

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[282]||=i(`p`,null,`总的来说，借用规则如下：`,-1),s[283]||=i(`ul`,null,[i(`li`,null,`同一时刻，你只能拥有要么一个可变引用，要么任意多个不可变引用`),i(`li`,null,`引用必须总是有效的`)],-1),s[284]||=i(`h5`,{id:`悬垂引用`,tabindex:`-1`},[r(`悬垂引用 `),i(`a`,{class:`header-anchor`,href:`#悬垂引用`,"aria-label":`Permalink to "悬垂引用"`},`​`)],-1),s[285]||=i(`p`,null,`悬垂引用也叫做悬垂指针，意思为指针指向某个值后，这个值被释放掉了，而指针仍然存在，其指向的内存可能不存在任何值或已被其它变量重新使用。在 Rust 中编译器可以确保引用永远也不会变成悬垂状态：当你获取数据的引用后，编译器可以确保数据不会在引用结束前被释放，要想释放数据，必须先停止其引用的使用。`,-1),s[286]||=i(`h3`,{id:`复合类型`,tabindex:`-1`},[r(`复合类型 `),i(`a`,{class:`header-anchor`,href:`#复合类型`,"aria-label":`Permalink to "复合类型"`},`​`)],-1),s[287]||=i(`h4`,{id:`字符串与切片`,tabindex:`-1`},[r(`字符串与切片 `),i(`a`,{class:`header-anchor`,href:`#字符串与切片`,"aria-label":`Permalink to "字符串与切片"`},`​`)],-1),s[288]||=i(`h5`,{id:`切片`,tabindex:`-1`},[r(`切片 `),i(`a`,{class:`header-anchor`,href:`#切片`,"aria-label":`Permalink to "切片"`},`​`)],-1),s[289]||=i(`p`,null,`切片并不是Rust独有的，其他语言都有，它允许你引用集合中部分连续的元素序列`,-1),s[290]||=i(`p`,null,`对于字符串来说，切片就是对String类型某一部分的引用`,-1),s[291]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`let s = String::from("hello world");

let hello = &s[0..5];
let world = &s[6..11];

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[292]||=i(`p`,null,`hello没有引用整个String s，而是引用s的一部分内容，通过[0…5]的方式来指定`,-1),s[293]||=i(`p`,null,[r(`这就是创建切片的语法，使用方括号包括的一个序列：`),i(`strong`,null,`[开始索引…终止索引]`)],-1),s[294]||=i(`p`,null,[r(`对于 `),i(`code`,null,`let world = &s[6..11];`),r(` 来说，`),i(`code`,null,`world`),r(` 是一个切片，该切片的指针指向 `),i(`code`,null,`s`),r(` 的第 7 个字节(索引从 0 开始, 6 是第 7 个字节)，且该切片的长度是 `),i(`code`,null,`5`),r(` 个字节。`)],-1),s[295]||=i(`p`,null,[r(`在使用 Rust 的 `),i(`code`,null,`..`),r(),i(`a`,{href:`https://course.rs/basic/base-type/numbers.html#%E5%BA%8F%E5%88%97range`,target:`_blank`,rel:`noreferrer`},`range 序列`),r(`语法时，如果你想从索引 0 开始，可以使用如下的方式，这两个是等效的：`)],-1),s[296]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`let s = String::from("hello");

let slice = &s[0..2];
let slice = &s[..2];
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[297]||=i(`p`,null,[r(`同样的，如果你的切片想要包含 `),i(`code`,null,`String`),r(` 的最后一个字节，则可以这样使用：`)],-1),s[298]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`let s = String::from("hello");

let len = s.len();

let slice = &s[4..len];
let slice = &s[4..];
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[299]||=i(`p`,null,[r(`你也可以截取完整的 `),i(`code`,null,`String`),r(` 切片：`)],-1),s[300]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`let s = String::from("hello");

let len = s.len();

let slice = &s[0..len];
let slice = &s[..];
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[301]||=i(`blockquote`,null,[i(`p`,null,`在对字符串使用切片语法时需要格外小心，切片的索引必须落在字符之间的边界位置，也就是 UTF-8 字符的边界，例如中文在 UTF-8 中占用三个字节，下面的代码就会崩溃：`),i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},` let s = "中国人";
 let a = &s[0..2];
 println!("{}",a);
`)]),i(`button`,{class:`code-block-unfold-btn`})]),i(`p`,null,[r(`因为我们只取 `),i(`code`,null,`s`),r(` 字符串的前两个字节，但是本例中每个汉字占用三个字节，因此没有落在边界处，也就是连 `),i(`code`,null,`中`),r(` 字都取不完整，此时程序会直接崩溃退出，如果改成 `),i(`code`,null,`&s[0..3]`),r(`，则可以正常通过编译。 因此，当你需要对字符串做切片索引操作时，需要格外小心这一点，关于该如何操作 UTF-8 字符串，参见`),i(`a`,{href:`https://course.rs/basic/compound-type/string-slice.html#%E6%93%8D%E4%BD%9C-utf-8-%E5%AD%97%E7%AC%A6%E4%B8%B2`,target:`_blank`,rel:`noreferrer`},`这里`),r(`。`)])],-1),s[302]||=i(`p`,null,`当然，数组也可以切片`,-1),s[303]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`let a = [1, 2, 3, 4, 5];

let slice = &a[1..3];

assert_eq!(slice, &[2, 3]);

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[304]||=i(`h5`,{id:`string和-str转换`,tabindex:`-1`},[r(`String和&str转换 `),i(`a`,{class:`header-anchor`,href:`#string和-str转换`,"aria-label":`Permalink to "String和&str转换"`},`​`)],-1),s[305]||=i(`p`,null,[i(`code`,null,`&str`),r(` 类型生成 `),i(`code`,null,`String`),r(` 类型的操作：`)],-1),s[306]||=i(`ul`,null,[i(`li`,null,[i(`code`,null,`String::from("hello,world")`)]),i(`li`,null,[i(`code`,null,`"hello,world".to_string()`)])],-1),s[307]||=i(`p`,null,`那如何将String类型转换成&str`,-1),s[308]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn main() {
    let s = String::from("hello,world!");
    say_hello(&s);
    say_hello(&s[..]);
    say_hello(s.as_str());
}

fn say_hello(s: &str) {
    println!("{}",s);
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[309]||=i(`h5`,{id:`string和-str区别`,tabindex:`-1`},[r(`String和&str区别 `),i(`a`,{class:`header-anchor`,href:`#string和-str区别`,"aria-label":`Permalink to "String和&str区别"`},`​`)],-1),s[310]||=i(`table`,null,[i(`thead`,null,[i(`tr`,null,[i(`th`,null,`特性`),i(`th`,null,[i(`code`,null,`&str`)]),i(`th`,null,[i(`code`,null,`String`)])])]),i(`tbody`,null,[i(`tr`,null,[i(`td`,null,[i(`strong`,null,`内存分配`)]),i(`td`,null,`通常不涉及堆分配，指向现有内存或字符串字面量`),i(`td`,null,`在堆上分配内存，存储和管理自己的数据`)]),i(`tr`,null,[i(`td`,null,[i(`strong`,null,`可变性`)]),i(`td`,null,`不可变的字符串切片`),i(`td`,null,`可变字符串，可以修改其内容`)]),i(`tr`,null,[i(`td`,null,[i(`strong`,null,`生命周期`)]),i(`td`,null,[i(`code`,null,`&str`),r(` 的生命周期依赖于引用的源`)]),i(`td`,null,[i(`code`,null,`String`),r(` 是所有权类型，生命周期与所有权相关`)])]),i(`tr`,null,[i(`td`,null,[i(`strong`,null,`性能`)]),i(`td`,null,`更高效，不需要堆分配内存`),i(`td`,null,[r(`相比 `),i(`code`,null,`&str`),r(` 有额外的堆分配和内存管理开销`)])]),i(`tr`,null,[i(`td`,null,[i(`strong`,null,`常见用途`)]),i(`td`,null,`只读字符串，不需要修改`),i(`td`,null,`需要修改或动态生成字符串`)])])],-1),s[311]||=i(`h5`,{id:`字符串索引`,tabindex:`-1`},[r(`字符串索引 `),i(`a`,{class:`header-anchor`,href:`#字符串索引`,"aria-label":`Permalink to "字符串索引"`},`​`)],-1),s[312]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`   let s1 = String::from("hello");
   let h = s1[0];

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[313]||=i(`p`,null,`会报错`,-1),s[314]||=i(`p`,null,[r(`注意：rust`),i(`strong`,null,`不存在字符串索引`)],-1),s[315]||=i(`h5`,{id:`字符串操作`,tabindex:`-1`},[r(`字符串操作 `),i(`a`,{class:`header-anchor`,href:`#字符串操作`,"aria-label":`Permalink to "字符串操作"`},`​`)],-1),s[316]||=i(`h6`,{id:`追加-push`,tabindex:`-1`},[r(`追加（push） `),i(`a`,{class:`header-anchor`,href:`#追加-push`,"aria-label":`Permalink to "追加（push）"`},`​`)],-1),s[317]||=i(`p`,null,`push追加字符`,-1),s[318]||=i(`p`,null,`push_str追加字符串`,-1),s[319]||=i(`p`,null,[r(`这两个方法都是`),i(`strong`,null,`在原有的字符串上追加，并不会返回新的字符串`),r(`。由于字符串追加操作要修改原来的字符串，则该字符串必须是可变的，即`),i(`strong`,null,[r(`字符串变量必须由 `),i(`code`,null,`mut`),r(` 关键字修饰`)]),r(`。`)],-1),s[320]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn main() {
    let mut s = String::from("Hello ");

    s.push_str("rust");
    println!("追加字符串 push_str() -> {}", s);

    s.push('!');
    println!("追加字符 push() -> {}", s);
}

//追加字符串 push_str() -> Hello rust
//追加字符 push() -> Hello rust!
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[321]||=i(`h6`,{id:`插入-insert`,tabindex:`-1`},[r(`插入（insert） `),i(`a`,{class:`header-anchor`,href:`#插入-insert`,"aria-label":`Permalink to "插入（insert）"`},`​`)],-1),s[322]||=i(`p`,null,`insert()插入単个字符`,-1),s[323]||=i(`p`,null,`insert_str()插入字符串`,-1),s[324]||=i(`p`,null,[r(`这俩方法需要传入两个参数，第一个参数是字符（串）插入位置的索引，第二个参数是要插入的字符（串），索引从 0 开始计数，如果越界则会发生错误。由于字符串插入操作要`),i(`strong`,null,`修改原来的字符串`),r(`，则该字符串必须是可变的，即`),i(`strong`,null,[r(`字符串变量必须由 `),i(`code`,null,`mut`),r(` 关键字修饰`)]),r(`。`)],-1),s[325]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn main() {
    let mut s = String::from("Hello rust!");
    s.insert(5, ',');
    println!("插入字符 insert() -> {}", s);
    s.insert_str(6, " I like");
    println!("插入字符串 insert_str() -> {}", s);
}

//插入字符 insert() -> Hello, rust!
//插入字符串 insert_str() -> Hello, I like rust!
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[326]||=i(`h6`,{id:`替换-replace`,tabindex:`-1`},[r(`替换（replace） `),i(`a`,{class:`header-anchor`,href:`#替换-replace`,"aria-label":`Permalink to "替换（replace）"`},`​`)],-1),s[327]||=i(`p`,null,[i(`strong`,null,`1.replace`)],-1),s[328]||=i(`p`,null,[r(`适用于String和&str类型，replace()方法接收两个参数，第一个是要被替换的字符，第二个是新的字符串，该方法会匹配到所有的字符串。`),i(`strong`,null,`该方法是返回一个新的字符串，而不是操作原来的字符串`),r(`。`)],-1),s[329]||=i(`p`,null,`示例代码如下：`,-1),s[330]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn main() {
    let string_replace = String::from("I like rust. Learning rust is my favorite!");
    let new_string_replace = string_replace.replace("rust", "RUST");
    dbg!(new_string_replace);
}

//new_string_replace = "I like RUST. Learning RUST is my favorite!"
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[331]||=i(`p`,null,[i(`strong`,null,`2.replacen`)],-1),s[332]||=i(`p`,null,[r(`该方法可适用于 `),i(`code`,null,`String`),r(` 和 `),i(`code`,null,`&str`),r(` 类型。`),i(`code`,null,`replacen()`),r(` 方法接收三个参数，前两个参数与 `),i(`code`,null,`replace()`),r(` 方法一样，第三个参数则表示替换的个数。`),i(`strong`,null,`该方法是返回一个新的字符串，而不是操作原来的字符串`),r(`。`)],-1),s[333]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn main() {
    let string_replace = "I like rust. Learning rust is my favorite!";
    let new_string_replacen = string_replace.replacen("rust", "RUST", 1);
    dbg!(new_string_replacen);
}

//new_string_replacen = "I like RUST. Learning rust is my favorite!"
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[334]||=i(`p`,null,`3.replace_range`,-1),s[335]||=i(`p`,null,`该方法仅适用于String类型。replace_range接受两个参数，第一个参数是要替换字符串的范围（Range），第二个参数是新的字符。`,-1),s[336]||=i(`p`,null,[i(`strong`,null,[r(`该方法是直接操作原来的字符串，不会返回新的字符串。该方法需要使用 `),i(`code`,null,`mut`),r(` 关键字修饰`)]),r(`。`)],-1),s[337]||=i(`p`,null,`示例代码如下：`,-1),s[338]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn main() {
    let mut string_replace_range = String::from("I like rust!");
    string_replace_range.replace_range(7..8, "R");
    dbg!(string_replace_range);
}
//string_replace_range = "I like Rust!"
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[339]||=i(`h6`,{id:`删除-delete`,tabindex:`-1`},[r(`删除（delete） `),i(`a`,{class:`header-anchor`,href:`#删除-delete`,"aria-label":`Permalink to "删除（delete）"`},`​`)],-1),s[340]||=i(`p`,null,[r(`与删除有关的方法有4个，`),i(`code`,null,`pop(),remove(),truncate(),clear()`),r(`.这四个方法仅适用于String类型`)],-1),s[341]||=i(`p`,null,[i(`strong`,null,`1.pop`),r(` –`),i(`strong`,null,`删除并返回字符串的最后一个字符`)],-1),s[342]||=i(`p`,null,[i(`strong`,null,`该方法是直接操作原来的字符串`),r(`。但是存在返回值，其返回值是一个 `),i(`code`,null,`Option`),r(` 类型，如果字符串为空，则返回 `),i(`code`,null,`None`),r(`。`)],-1),s[343]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn main() {
    let mut string_pop = String::from("rust pop 中文!");
    let p1 = string_pop.pop();
    let p2 = string_pop.pop();
    dbg!(p1);
    dbg!(p2);
    dbg!(string_pop);
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[344]||=i(`p`,null,[i(`strong`,null,`2.remove --删除并返回字符串中指定位置的字符`)],-1),s[345]||=i(`p`,null,[i(`strong`,null,`该方法是直接操作原来的字符串`),r(`。但是存在返回值，其返回值是删除位置的字符串，只接收一个参数，表示该字符起始索引位置。`)],-1),s[346]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn main() {
    let mut string_remove = String::from("测试remove方法");
    println!(
        "string_remove 占 {} 个字节",
        std::mem::size_of_val(string_remove.as_str())
    );
    // 删除第一个汉字
    string_remove.remove(0);
    // 下面代码会发生错误
    // string_remove.remove(1);
    // 直接删除第二个汉字
    // string_remove.remove(3);
    dbg!(string_remove);
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[347]||=i(`p`,null,[i(`strong`,null,`3.truncate --删除字符串中从指定位置开始到结尾的全部字符`)],-1),s[348]||=i(`p`,null,[i(`strong`,null,`该方法是直接操作原来的字符串`),r(`。无返回值。该方法 `),i(`code`,null,`truncate()`),r(` 方法是按照字节来处理字符串的`)],-1),s[349]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn main() {
    let mut string_truncate = String::from("测试truncate");
    string_truncate.truncate(3);
    dbg!(string_truncate);
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[350]||=i(`p`,null,[i(`strong`,null,`4.clear --清空字符串`)],-1),s[351]||=i(`p`,null,[i(`strong`,null,`该方法是直接操作原来的字符串`),r(`。调用后，删除字符串中的所有字符，相当于 `),i(`code`,null,`truncate()`),r(` 方法参数为 0 的时候。`)],-1),s[352]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn main() {
    let mut string_clear = String::from("string clear");
    string_clear.clear();
    dbg!(string_clear);
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[353]||=i(`h6`,{id:`连接-concatenate`,tabindex:`-1`},[r(`连接 (Concatenate) `),i(`a`,{class:`header-anchor`,href:`#连接-concatenate`,"aria-label":`Permalink to "连接 (Concatenate)"`},`​`)],-1),s[354]||=i(`p`,null,`使用+或者+=连接字符串`,-1),s[355]||=i(`p`,null,[r(`在使用 `),i(`code`,null,`+`),r(` 时， 必须传递切片引用类型。不能直接传递 `),i(`code`,null,`String`),r(` 类型。`),i(`strong`,null,[i(`code`,null,`+`),r(` 是返回一个新的字符串，所以变量声明可以不需要 `),i(`code`,null,`mut`),r(` 关键字修饰`)]),r(`。`)],-1),s[356]||=i(`h4`,{id:`元组`,tabindex:`-1`},[r(`元组 `),i(`a`,{class:`header-anchor`,href:`#元组`,"aria-label":`Permalink to "元组"`},`​`)],-1),s[357]||=i(`p`,null,`定义：`,-1),s[358]||=i(`p`,null,`长度固定、元素顺序固定`,-1),s[359]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn main() {
    let tup: (i32, f64, u8) = (500, 6.4, 1);
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[360]||=i(`h5`,{id:`用模式匹配解构元组`,tabindex:`-1`},[r(`用模式匹配解构元组 `),i(`a`,{class:`header-anchor`,href:`#用模式匹配解构元组`,"aria-label":`Permalink to "用模式匹配解构元组"`},`​`)],-1),s[361]||=i(`p`,null,`将tup里的值分别赋值给x,y,z`,-1),s[362]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn main() {
    let tup = (500, 6.4, 1);

    let (x, y, z) = tup;

    println!("The value of y is: {}", y);
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[363]||=i(`h5`,{id:`用-来访问元组`,tabindex:`-1`},[r(`用.来访问元组 `),i(`a`,{class:`header-anchor`,href:`#用-来访问元组`,"aria-label":`Permalink to "用.来访问元组"`},`​`)],-1),s[364]||=i(`p`,null,`如果我们想要访问某个特定的元素，我们使用.进行访问`,-1),s[365]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn main() {
    let x: (i32, f64, u8) = (500, 6.4, 1);

    let five_hundred = x.0;

    let six_point_four = x.1;

    let one = x.2;
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[366]||=i(`p`,null,`和其他语言一样，元组的索引从0开始。`,-1),s[367]||=i(`h4`,{id:`结构体`,tabindex:`-1`},[r(`结构体 `),i(`a`,{class:`header-anchor`,href:`#结构体`,"aria-label":`Permalink to "结构体"`},`​`)],-1),s[368]||=i(`h5`,{id:`定义`,tabindex:`-1`},[r(`定义 `),i(`a`,{class:`header-anchor`,href:`#定义`,"aria-label":`Permalink to "定义"`},`​`)],-1),s[369]||=i(`p`,null,`一个结构体由几部分组成：`,-1),s[370]||=i(`ul`,null,[i(`li`,null,[r(`通过关键字 `),i(`code`,null,`struct`),r(` 定义`)]),i(`li`,null,[r(`一个清晰明确的结构体 `),i(`code`,null,`名称`)]),i(`li`,null,[r(`几个有名字的结构体 `),i(`code`,null,`字段`)])],-1),s[371]||=i(`p`,null,`例如：`,-1),s[372]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`struct User {
    active: bool,
    username: String,
    email: String,
    sign_in_count: u64,
}

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[373]||=i(`h5`,{id:`实例化`,tabindex:`-1`},[r(`实例化 `),i(`a`,{class:`header-anchor`,href:`#实例化`,"aria-label":`Permalink to "实例化"`},`​`)],-1),s[374]||=i(`p`,null,`我们尝试实例化上面一个结构体`,-1),s[375]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`    let user1 = User {
        email: String::from("someone@example.com"),
        username: String::from("someusername123"),
        active: true,
        sign_in_count: 1,
    };

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[376]||=i(`p`,null,`有几点值得注意:`,-1),s[377]||=i(`ol`,null,[i(`li`,null,[r(`初始化实例时，`),i(`strong`,null,`每个字段`),r(`都需要进行初始化`)]),i(`li`,null,[r(`初始化时的字段顺序`),i(`strong`,null,`不需要`),r(`和结构体定义时的顺序一致`)])],-1),s[378]||=i(`h5`,{id:`访问结构体字段`,tabindex:`-1`},[r(`访问结构体字段 `),i(`a`,{class:`header-anchor`,href:`#访问结构体字段`,"aria-label":`Permalink to "访问结构体字段"`},`​`)],-1),s[379]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`    let mut user1 = User {
        email: String::from("someone@example.com"),
        username: String::from("someusername123"),
        active: true,
        sign_in_count: 1,
    };

    user1.email = String::from("anotheremail@example.com");

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[380]||=i(`p`,null,`我们用.来访问和修改结构体实例内部的字段值`,-1),s[381]||=i(`p`,null,`需要注意的是，必须要将结构体实例声明为可变的，才能修改其中的字段`,-1),s[382]||=i(`h5`,{id:`简化结构体构造`,tabindex:`-1`},[r(`简化结构体构造 `),i(`a`,{class:`header-anchor`,href:`#简化结构体构造`,"aria-label":`Permalink to "简化结构体构造"`},`​`)],-1),s[383]||=i(`p`,null,[r(`下面的函数类似一个构建函数，返回了 `),i(`code`,null,`User`),r(` 结构体的实例：`)],-1),s[384]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn build_user(email: String, username: String) -> User {
    User {
        email: email,
        username: username,
        active: true,
        sign_in_count: 1,
    }
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[385]||=i(`p`,null,[r(`它接收两个字符串参数： `),i(`code`,null,`email`),r(` 和 `),i(`code`,null,`username`),r(`，然后使用它们来创建一个 `),i(`code`,null,`User`),r(` 结构体，并且返回。可以注意到这两行： `),i(`code`,null,`email: email`),r(` 和 `),i(`code`,null,`username: username`),r(`，非常的扎眼，因为实在有些啰嗦，如果你从 TypeScript 过来，肯定会鄙视 Rust 一番，不过好在，它也不是无可救药：`)],-1),s[386]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn build_user(email: String, username: String) -> User {
    User {
        email,
        username,
        active: true,
        sign_in_count: 1,
    }
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[387]||=i(`p`,null,`如上所示，当函数参数和结构体字段同名时，可以直接使用缩略的方式进行初始化，跟 TypeScript 中一模一样。`,-1),s[388]||=i(`h5`,{id:`结构体更新语法`,tabindex:`-1`},[r(`结构体更新语法 `),i(`a`,{class:`header-anchor`,href:`#结构体更新语法`,"aria-label":`Permalink to "结构体更新语法"`},`​`)],-1),s[389]||=i(`p`,null,[r(`根据已有的结构体实例，创建新的结构体实例，例如根据已有的 `),i(`code`,null,`user1`),r(` 实例来构建 `),i(`code`,null,`user2`),r(`：`)],-1),s[390]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`  let user2 = User {
        active: user1.active,
        username: user1.username,
        email: String::from("another@example.com"),
        sign_in_count: user1.sign_in_count,
    };
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[391]||=i(`p`,null,`我们发现，user1的三个字段居然手动被赋值给了user2，太麻烦了，Rust提供了结构体更新语法：`,-1),s[392]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`  let user2 = User {
        email: String::from("another@example.com"),
        ..user1
    };

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[393]||=i(`p`,null,`只需用一个…，就能将与user1一样的值赋给了user2`,-1),s[394]||=i(`h5`,{id:`元组结构体-tuple-struct`,tabindex:`-1`},[r(`元组结构体（tuple struct） `),i(`a`,{class:`header-anchor`,href:`#元组结构体-tuple-struct`,"aria-label":`Permalink to "元组结构体（tuple struct）"`},`​`)],-1),s[395]||=i(`p`,null,`结构体必须要有名称，但是结构体的字段可以没有名称，这种结构体长得像元组，因此称为元组结构体： struct Color(i32, i32, i32); struct Point(i32, i32, i32);`,-1),s[396]||=i(`pre`,null,[i(`code`,null,`let black = Color(0, 0, 0);
let origin = Point(0, 0, 0);
`)],-1),s[397]||=i(`p`,null,[r(`元组结构体在你希望有一个整体名称，但是又不关心里面字段的名称时将非常有用。例如上面的 `),i(`code`,null,`Point`),r(` 元组结构体，众所周知 3D 点是 `),i(`code`,null,`(x, y, z)`),r(` 形式的坐标点，因此我们无需再为内部的字段逐一命名为：`),i(`code`,null,`x`),r(`, `),i(`code`,null,`y`),r(`, `),i(`code`,null,`z`),r(`。`)],-1),s[398]||=i(`h5`,{id:`单元结构体`,tabindex:`-1`},[r(`单元结构体 `),i(`a`,{class:`header-anchor`,href:`#单元结构体`,"aria-label":`Permalink to "单元结构体"`},`​`)],-1),s[399]||=i(`p`,null,`单元结构体和单元类型很像，没有任何字段和属性`,-1),s[400]||=i(`p`,null,[r(`如果你定义一个类型，但是不关心该类型的内容，只关心它的行为时，就可以使用 `),i(`code`,null,`单元结构体`),r(`：`)],-1),s[401]||=i(`h5`,{id:`使用-derive-debug-来打印结构体的信息`,tabindex:`-1`},[r(`使用 `),i(`code`,null,`#[derive(Debug)]`),r(` 来打印结构体的信息 `),i(`a`,{class:`header-anchor`,href:`#使用-derive-debug-来打印结构体的信息`,"aria-label":'Permalink to "使用 `#[derive(Debug)]` 来打印结构体的信息"'},`​`)],-1),s[402]||=i(`p`,null,[r(`如果我们想要对一个结构体实例进行打印，需要在代码最前方加上一个`),i(`code`,null,`#[derive(Debug)]`),r(` ，然后使用`),i(`code`,null,`dbg!()`),r(`或者`),i(`code`,null,`println!("{:?}", s);`),r(`来输出`)],-1),s[403]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`#[derive(Debug)]
struct Rectangle {
    width: u32,
    height: u32,
}

fn main() {
    let rect1 = Rectangle {
        width: 30,
        height: 50,
    };

    println!("rect1 is {:?}", rect1);
}
--------------------------------------------------------------------------------------------------------
#[derive(Debug)]
struct Rectangle {
    width: u32,
    height: u32,
}

fn main() {
    let scale = 2;
    let rect1 = Rectangle {
        width: dbg!(30 * scale),
        height: 50,
    };

    dbg!(&rect1);
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[404]||=i(`h4`,{id:`枚举`,tabindex:`-1`},[r(`枚举 `),i(`a`,{class:`header-anchor`,href:`#枚举`,"aria-label":`Permalink to "枚举"`},`​`)],-1),s[405]||=i(`p`,null,[r(`枚举允许你通过列举可能的成员来定义一个`),i(`strong`,null,`枚举类型`),r(`，例如扑克牌花色：`)],-1),s[406]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`enum PokerSuit {
  Clubs,
  Spades,
  Diamonds,
  Hearts,
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[407]||=i(`p`,null,[i(`strong`,null,`枚举类型是一个类型，它会包含所有可能的枚举成员，而枚举值是该类型中的具体某个成员的实例。`)],-1),s[408]||=i(`h5`,{id:`枚举值`,tabindex:`-1`},[r(`枚举值 `),i(`a`,{class:`header-anchor`,href:`#枚举值`,"aria-label":`Permalink to "枚举值"`},`​`)],-1),s[409]||=i(`p`,null,[r(`我们通过`),i(`code`,null,`::`),r(`来访问枚举类型下的具体成员`)],-1),s[410]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`let heart = PokerSuit::Hearts;
let diamond = PokerSuit::Diamonds;
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[411]||=i(`p`,null,[r(`接下来，我们想让扑克牌变得更加实用，那么需要给每张牌赋予一个值：`),i(`code`,null,`A`),r(`(1)-`),i(`code`,null,`K`),r(`(13)，这样再加上花色，就是一张真实的扑克牌了，例如红心 A。`)],-1),s[412]||=i(`p`,null,`目前来说，枚举值还不能带有值，因此先用结构体来实现：`,-1),s[413]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`enum PokerSuit {
    Clubs,
    Spades,
    Diamonds,
    Hearts,
}

struct PokerCard {
    suit: PokerSuit,
    value: u8
}

fn main() {
   let c1 = PokerCard {
       suit: PokerSuit::Clubs,
       value: 1,
   };
   let c2 = PokerCard {
       suit: PokerSuit::Diamonds,
       value: 12,
   };
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[414]||=i(`p`,null,[r(`这段代码很好的完成了它的使命，通过结构体 `),i(`code`,null,`PokerCard`),r(` 来代表一张牌，结构体的 `),i(`code`,null,`suit`),r(` 字段表示牌的花色，类型是 `),i(`code`,null,`PokerSuit`),r(` 枚举类型，`),i(`code`,null,`value`),r(` 字段代表扑克牌的数值。`)],-1),s[415]||=i(`p`,null,`可以吗？可以！好吗？说实话，不咋地，因为还有简洁得多的方式来实现：`,-1),s[416]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`enum PokerCard {
    Clubs(u8),
    Spades(u8),
    Diamonds(u8),
    Hearts(u8),
}

fn main() {
   let c1 = PokerCard::Spades(5);
   let c2 = PokerCard::Diamonds(13);
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[417]||=i(`p`,null,`直接将数据信息关联到枚举成员上，省去近一半的代码，这种实现是不是更优雅？`,-1),s[418]||=i(`p`,null,[r(`不仅如此，同一个枚举类型下的不同成员还能持有不同的数据类型，例如让某些花色打印 `),i(`code`,null,`1-13`),r(` 的字样，另外的花色打印上 `),i(`code`,null,`A-K`),r(` 的字样：`)],-1),s[419]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`enum PokerCard {
    Clubs(u8),
    Spades(u8),
    Diamonds(char),
    Hearts(char),
}

fn main() {
   let c1 = PokerCard::Spades(5);
   let c2 = PokerCard::Diamonds('A');
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[420]||=i(`h5`,{id:`同一化类型`,tabindex:`-1`},[r(`同一化类型 `),i(`a`,{class:`header-anchor`,href:`#同一化类型`,"aria-label":`Permalink to "同一化类型"`},`​`)],-1),s[421]||=i(`p`,null,[r(`枚举（`),i(`code`,null,`enum`),r(`）是 Rust 中一种常用的类型，它可以将不同类型的数据统一为一个枚举类型。通过定义不同的枚举变体，可以将多种类型的数据封装在一个类型中，然后使用模式匹配来解构和统一处理它们。`)],-1),s[422]||=i(`p`,null,[r(`例如我们有一个 WEB 服务，需要接受用户的长连接，假设连接有两种：`),i(`code`,null,`TcpStream`),r(` 和 `),i(`code`,null,`TlsStream`),r(`，但是我们希望对这两个连接的处理流程相同，也就是用同一个函数来处理这两个连接，代码如下：`)],-1),s[423]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn new (stream: TcpStream) {
  let mut s = stream;
  if tls {
    s = negotiate_tls(stream)
  }

  // websocket是一个WebSocket<TcpStream>或者
  //   WebSocket<native_tls::TlsStream<TcpStream>>类型
  websocket = WebSocket::from_raw_socket(
    s, ......)
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[424]||=i(`p`,null,`此时，枚举类型就能帮上大忙：`,-1),s[425]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`enum Websocket {
  Tcp(Websocket<TcpStream>),
  Tls(Websocket<native_tls::TlsStream<TcpStream>>),
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[426]||=i(`h4`,{id:`数组`,tabindex:`-1`},[r(`数组 `),i(`a`,{class:`header-anchor`,href:`#数组`,"aria-label":`Permalink to "数组"`},`​`)],-1),s[427]||=i(`p`,null,`在Rust中，最常用的数组有两种，第一种是速度很快但是长度固定的array，第二种是可动态增长的但是有性能损耗的Vector，我们将前面的array称之为数组，将后面的Vector称之为动态数组`,-1),s[428]||=i(`p`,null,`数组的具体定义很简单：将多个类型相同的元素依次组合在一起，就是一个数组，数组具有以下三要素：`,-1),s[429]||=i(`ul`,null,[i(`li`,null,`长度固定`),i(`li`,null,`元素必须有相同的类型`),i(`li`,null,`依次线性排列`)],-1),s[430]||=i(`p`,null,[i(`strong`,null,[r(`我们这里说的数组是 Rust 的基本类型，是固定长度的，这点与其他编程语言不同，其它编程语言的数组往往是可变长度的，与 Rust 中的动态数组 `),i(`code`,null,`Vector`),r(` 类似`)])],-1),s[431]||=i(`p`,null,[i(`strong`,null,`创建数组`)],-1),s[432]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn main() {
    let a = [1, 2, 3, 4, 5];
}

//为数组声明类型
let a: [i32; 5] = [1, 2, 3, 4, 5];

//用;进行分隔，前面是值，后面是出现的次数
let a=[3;5]
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[433]||=i(`p`,null,[i(`strong`,null,`访问数组元素`)],-1),s[434]||=i(`p`,null,`更其他语言一样，用索引来访问`,-1),s[435]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn main() {
    let a = [1, 2, 3, 4, 5];
    println!("{}",a[0]);
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[436]||=i(`p`,null,`访问数组的第一个元素`,-1),s[437]||=i(`p`,null,[r(`注意：`),i(`strong`,null,`数组元素是非基本类型`)],-1),s[438]||=i(`p`,null,[i(`strong`,null,`数组切片`)],-1),s[439]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`let a: [i32; 5] = [1, 2, 3, 4, 5];

let slice: &[i32] = &a[1..3];

assert_eq!(slice, &[2, 3]);
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[440]||=i(`p`,null,[r(`上面的数组切片 `),i(`code`,null,`slice`),r(` 的类型是`),i(`code`,null,`&[i32]`),r(`，与之对比，数组的类型是`),i(`code`,null,`[i32;5]`),r(`，简单总结下切片的特点：`)],-1),s[441]||=i(`ul`,null,[i(`li`,null,`切片的长度可以与数组不同，并不是固定的，而是取决于你使用时指定的起始和结束位置`),i(`li`,null,`创建切片的代价非常小，因为切片只是针对底层数组的一个引用`),i(`li`,null,[r(`切片类型 [T] 拥有不固定的大小，而切片引用类型 &[T] 则具有固定的大小，因为 Rust 很多时候都需要固定大小数据类型，因此 &[T] 更有用，`),i(`code`,null,`&str`),r(` 字符串切片也同理`)])],-1),s[442]||=i(`h3`,{id:`流程控制-语句学习`,tabindex:`-1`},[r(`流程控制（语句学习） `),i(`a`,{class:`header-anchor`,href:`#流程控制-语句学习`,"aria-label":`Permalink to "流程控制（语句学习）"`},`​`)],-1),s[443]||=i(`h4`,{id:`_1-if语句`,tabindex:`-1`},[r(`1.if语句 `),i(`a`,{class:`header-anchor`,href:`#_1-if语句`,"aria-label":`Permalink to "1.if语句"`},`​`)],-1),s[444]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`if condition == true {
    // A...
} else {
    // B...
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[445]||=i(`h4`,{id:`_2-if-else语句`,tabindex:`-1`},[r(`2.if-else语句 `),i(`a`,{class:`header-anchor`,href:`#_2-if-else语句`,"aria-label":`Permalink to "2.if-else语句"`},`​`)],-1),s[446]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn main() {
    let n = 6;

    if n % 4 == 0 {
        println!("number is divisible by 4");
    } else if n % 3 == 0 {
        println!("number is divisible by 3");
    } else if n % 2 == 0 {
        println!("number is divisible by 2");
    } else {
        println!("number is not divisible by 4, 3, or 2");
    }
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[447]||=i(`h4`,{id:`_3-for循环`,tabindex:`-1`},[r(`3.for循环 `),i(`a`,{class:`header-anchor`,href:`#_3-for循环`,"aria-label":`Permalink to "3.for循环"`},`​`)],-1),s[448]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn main() {
    for i in 1..=5 {
        println!("{}", i);
    }
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[449]||=i(`p`,null,[i(`code`,null,`1..=5`),r(`的意思是1到5（包括5），`),i(`code`,null,`1..5`),r(`意思是1到5（不包括5）`)],-1),s[450]||=i(`p`,null,[r(`注意，使用 `),i(`code`,null,`for`),r(` 时我们往往使用集合的引用形式，除非你不想在后面的代码中继续使用该集合（比如我们这里使用了 `),i(`code`,null,`container`),r(` 的引用）。如果不使用引用的话，所有权会被转移（move）到 `),i(`code`,null,`for`),r(` 语句块中，后面就无法再使用这个集合了)：`)],-1),s[451]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`for item in &container {
  // ...
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[452]||=i(`p`,null,[r(`如果想在循环中，`),i(`strong`,null,`修改该元素`),r(`，可以使用 `),i(`code`,null,`mut`),r(` 关键字：`)],-1),s[453]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`for item in &mut collection {
  // ...
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[454]||=i(`p`,null,`总结如下：`,-1),s[455]||=i(`table`,null,[i(`thead`,null,[i(`tr`,null,[i(`th`,null,`使用方法`),i(`th`,null,`等价使用方式`),i(`th`,null,`所有权`)])]),i(`tbody`,null,[i(`tr`,null,[i(`td`,null,[i(`code`,null,`for item in collection`)]),i(`td`,null,[i(`code`,null,`for item in IntoIterator::into_iter(collection)`)]),i(`td`,null,`转移所有权`)]),i(`tr`,null,[i(`td`,null,[i(`code`,null,`for item in &collection`)]),i(`td`,null,[i(`code`,null,`for item in collection.iter()`)]),i(`td`,null,`不可变借用`)]),i(`tr`,null,[i(`td`,null,[i(`code`,null,`for item in &mut collection`)]),i(`td`,null,[i(`code`,null,`for item in collection.iter_mut()`)]),i(`td`,null,`可变借用`)])])],-1),s[456]||=i(`p`,null,[r(`如果想在循环中`),i(`strong`,null,`获取元素的索引`),r(`：`)],-1),s[457]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn main() {
    let a = [4, 3, 2, 1];
    // \`.iter()\` 方法把 \`a\` 数组变成一个迭代器
    for (i, v) in a.iter().enumerate() {
        println!("第{}个元素是{}", i + 1, v);
    }
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[458]||=i(`p`,null,[r(`当然如果我们想用 `),i(`code`,null,`for`),r(` 循环控制某个过程执行 10 次，但是又不想单独声明一个变量来控制这个流程`)],-1),s[459]||=i(`p`,null,`我们用_来代替那个变量`,-1),s[460]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`for _ in 0..10 {
  // ...
}

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[461]||=i(`h4`,{id:`_4-continue`,tabindex:`-1`},[r(`4.continue `),i(`a`,{class:`header-anchor`,href:`#_4-continue`,"aria-label":`Permalink to "4.continue"`},`​`)],-1),s[462]||=i(`p`,null,`使用continue可以跳过当前循环，开始下一次循环`,-1),s[463]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},` for i in 1..4 {
     if i == 2 {
         continue;
     }
     println!("{}", i);
 }

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[464]||=i(`h4`,{id:`_5-break`,tabindex:`-1`},[r(`5.break `),i(`a`,{class:`header-anchor`,href:`#_5-break`,"aria-label":`Permalink to "5.break"`},`​`)],-1),s[465]||=i(`p`,null,`使用break跳出当前整个循环`,-1),s[466]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},` for i in 1..4 {
     if i == 2 {
         break;
     }
     println!("{}", i);
 }
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[467]||=i(`h4`,{id:`_6-while循环`,tabindex:`-1`},[r(`6.while循环 `),i(`a`,{class:`header-anchor`,href:`#_6-while循环`,"aria-label":`Permalink to "6.while循环"`},`​`)],-1),s[468]||=i(`p`,null,`跟c的差不多`,-1),s[469]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`fn main() {
    let mut n = 0;

    while n <= 5  {
        println!("{}!", n);

        n = n + 1;
    }

    println!("我出来了！");
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[470]||=i(`h4`,{id:`_7-loop循环`,tabindex:`-1`},[r(`7.loop循环 `),i(`a`,{class:`header-anchor`,href:`#_7-loop循环`,"aria-label":`Permalink to "7.loop循环"`},`​`)],-1),s[471]||=i(`p`,null,`简单的无限循环，我们可以在其内部设置break决定何时结束循环`,-1),s[472]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn main() {
    loop {
        println!("again!");
    }
}

//无限的again!,知道crtl+c跳出循环
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[473]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn main() {
    let mut counter = 0;

    let result = loop {
        counter += 1;

        if counter == 10 {
            break counter * 2;
        }
    };

    println!("The result is {}", result);
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[474]||=i(`p`,null,`这里有几点值得注意：`,-1),s[475]||=i(`ul`,null,[i(`li`,null,[i(`strong`,null,`break 可以单独使用，也可以带一个返回值`),r(`，有些类似 `),i(`code`,null,`return`)]),i(`li`,null,[i(`strong`,null,`loop 是一个表达式`),r(`，因此可以返回一个值`)])],-1),s[476]||=i(`h3`,{id:`模式匹配`,tabindex:`-1`},[r(`模式匹配 `),i(`a`,{class:`header-anchor`,href:`#模式匹配`,"aria-label":`Permalink to "模式匹配"`},`​`)],-1),s[477]||=i(`h4`,{id:`match和if-let`,tabindex:`-1`},[r(`match和if let `),i(`a`,{class:`header-anchor`,href:`#match和if-let`,"aria-label":`Permalink to "match和if let"`},`​`)],-1),s[478]||=i(`h5`,{id:`match匹配`,tabindex:`-1`},[r(`match匹配 `),i(`a`,{class:`header-anchor`,href:`#match匹配`,"aria-label":`Permalink to "match匹配"`},`​`)],-1),s[479]||=i(`p`,null,`先看看match的通用形式：`,-1),s[480]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`match target {
    模式1 => 表达式1,
    模式2 => {
        语句1;
        语句2;
        表达式2
    },
    _ => 表达式3
}

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[481]||=i(`p`,null,[i(`code`,null,`match`),r(` 允许我们将一个值与一系列的模式相比较，并根据相匹配的模式执行对应的代码`)],-1),s[482]||=i(`p`,null,`我们来看一个例子`,-1),s[483]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`enum Coin {
    Penny,
    Nickel,
    Dime,
    Quarter,
}

fn value_in_cents(coin: Coin) -> u8 {
    match coin {
        Coin::Penny =>  {
            println!("Lucky penny!");
            1
        },
        Coin::Nickel => 5,
        Coin::Dime => 10,
        Coin::Quarter => 25,
    }
}

fn main() {
    // 调用 value_in_cents 函数，传入一个 Coin::Penny 枚举值
    let penny_value = value_in_cents(Coin::Penny);
    println!("The value of a penny is: {} cents", penny_value);

    // 你也可以调用其他硬币类型的 value_in_cents
    let nickel_value = value_in_cents(Coin::Nickel);
    println!("The value of a nickel is: {} cents", nickel_value);
}

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[484]||=i(`blockquote`,null,[i(`p`,null,[i(`code`,null,`value_in_cents`),r(` 函数根据匹配到的硬币，返回对应的美分数值。`),i(`code`,null,`match`),r(` 后紧跟着的是一个表达式，跟 `),i(`code`,null,`if`),r(` 很像，但是 `),i(`code`,null,`if`),r(` 后的表达式必须是一个布尔值，而 `),i(`code`,null,`match`),r(` 后的表达式返回值可以是任意类型，只要能跟后面的分支中的模式匹配起来即可，这里的 `),i(`code`,null,`coin`),r(` 是枚举 `),i(`code`,null,`Coin`),r(` 类型`)]),i(`p`,null,[r(`接下来是match的分支。一个分支有两个部分：一`),i(`strong`,null,`个模式和针对该模式的处理代码`),r(`。第一个分支的模式是 `),i(`code`,null,`Coin::Penny`),r(`，其后的 `),i(`code`,null,`=>`),r(` 运算符将模式和将要运行的代码分开。这里的代码就仅仅是表达式 `),i(`code`,null,`1`),r(`，不同分支之间使用逗号分隔。`)]),i(`p`,null,[r(`当 `),i(`code`,null,`match`),r(` 表达式执行时，它将目标值 `),i(`code`,null,`coin`),r(` 按顺序依次与每一个分支的模式相比较，如果模式匹配了这个值，那么模式之后的代码将被执行。如果模式并不匹配这个值，将继续执行下一个分支。`)]),i(`p`,null,[r(`每个分支相关联的代码是一个表达式，而表达式的结果值将作为整个 `),i(`code`,null,`match`),r(` 表达式的返回值。如果分支有多行代码，那么需要用 `),i(`code`,null,`{}`),r(` 包裹，同时最后一行代码需要是一个表达式。`)])],-1),s[485]||=i(`p`,null,`简单来说就是在下面main中的传入value_in_cents的值，匹配到啥，就输出啥`,-1),s[486]||=i(`h5`,{id:`模式绑定`,tabindex:`-1`},[r(`模式绑定 `),i(`a`,{class:`header-anchor`,href:`#模式绑定`,"aria-label":`Permalink to "模式绑定"`},`​`)],-1),s[487]||=i(`p`,null,`模式匹配的另外一个重要功能是从模式中取出绑定的值，例如：`,-1),s[488]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`#![allow(unused)]
fn main() {
#[derive(Debug)]
enum UsState {
    Alabama,
    Alaska,
    // --snip--
}

enum Coin {
    Penny,
    Nickel,
    Dime,
    Quarter(UsState), // 25美分硬币
}
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[489]||=i(`p`,null,[r(`其中 `),i(`code`,null,`Coin::Quarter`),r(` 成员还存放了一个值：美国的某个州（因为在 1999 年到 2008 年间，美国在 25 美分(Quarter)硬币的背后为 50 个州印刷了不同的标记，其它硬币都没有这样的设计）。`)],-1),s[490]||=i(`p`,null,`接下来，我们希望在模式匹配中，获取到 25 美分硬币上刻印的州的名称：`,-1),s[491]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn value_in_cents(coin: Coin) -> u8 {
    match coin {
        Coin::Penny => 1,
        Coin::Nickel => 5,
        Coin::Dime => 10,
        Coin::Quarter(state) => {
            println!("State quarter from {:?}!", state);
            25
        },
    }
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[492]||=i(`p`,null,[r(`上面代码中，在匹配 `),i(`code`,null,`Coin::Quarter(state)`),r(` 模式时，我们把它内部存储的值绑定到了 `),i(`code`,null,`state`),r(` 变量上，因此 `),i(`code`,null,`state`),r(` 变量就是对应的 `),i(`code`,null,`UsState`),r(` 枚举类型。`)],-1),s[493]||=i(`p`,null,[r(`例如有一个印了阿拉斯加州标记的 25 分硬币：`),i(`code`,null,`Coin::Quarter(UsState::Alaska)`),r(`，它在匹配时，`),i(`code`,null,`state`),r(` 变量将被绑定 `),i(`code`,null,`UsState::Alaska`),r(` 的枚举值。`)],-1),s[494]||=i(`h5`,{id:`穷尽匹配`,tabindex:`-1`},[r(`穷尽匹配 `),i(`a`,{class:`header-anchor`,href:`#穷尽匹配`,"aria-label":`Permalink to "穷尽匹配"`},`​`)],-1),s[495]||=i(`p`,null,`之前说过match的匹配必须穷尽所有情况，下面来距离说明。例如：`,-1),s[496]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`enum Direction {
    East,
    West,
    North,
    South,
}

fn main() {
    let dire = Direction::South;
    match dire {
        Direction::East => println!("East"),
        Direction::North | Direction::South => {
            println!("South or North");
        },
    };
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[497]||=i(`p`,null,`上述代码中，我们匹配了East，North，South，但没有匹配West，程序就会报一个错`,-1),s[498]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`error[E0004]: non-exhaustive patterns: \`West\` not covered // 非穷尽匹配，\`West\` 没有被覆盖
  --> src/main.rs:10:11
   |
1  | / enum Direction {
2  | |     East,
3  | |     West,
   | |     ---- not covered
4  | |     North,
5  | |     South,
6  | | }
   | |_- \`Direction\` defined here
...
10 |       match dire {
   |             ^^^^ pattern \`West\` not covered // 模式 \`West\` 没有被覆盖
   |
   = help: ensure that all possible cases are being handled, possibly by adding wildcards or more match arms
   = note: the matched value is of type \`Direction\`

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[499]||=i(`p`,null,`所以我们在写模式匹配时，需要将所有枚举的值都赋上值`,-1),s[500]||=i(`h5`,{id:`通配符`,tabindex:`-1`},[r(`_通配符 `),i(`a`,{class:`header-anchor`,href:`#通配符`,"aria-label":`Permalink to "\\_通配符"`},`​`)],-1),s[501]||=i(`p`,null,[r(`当我们不想在匹配时列出所有值的时候，可以使用Rust提供的一个特殊模式，例如，`),i(`code`,null,`u8`),r(` 可以拥有 0 到 255 的有效的值，但是我们只关心 `),i(`code`,null,`1、3、5 和 7`),r(` 这几个值，不想列出其它的 `),i(`code`,null,`0、2、4、6、8、9 一直到 255`),r(` 的值。那么, 我们不必一个一个列出所有值, 因为可以使用特殊的模式 `),i(`code`,null,`_`),r(` 替代：`)],-1),s[502]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`let some_u8_value = 0u8;
match some_u8_value {
    1 => println!("one"),
    3 => println!("three"),
    5 => println!("five"),
    7 => println!("seven"),
    _ => (),
}

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[503]||=i(`p`,null,`通常，将*防止其他分支后，*将会匹配所有遗漏的值。()表示返回单元类型与所有分支返回值的类型相同，所以当匹配到_后，什么也不会发生`,-1),s[504]||=i(`p`,null,`除了_通配符，用一个变量来承载其他情况也是可以的。`,-1),s[505]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`#[derive(Debug)]
enum Direction {
    East,
    West,
    North,
    South,
}

fn main() {
    let dire = Direction::South;
    match dire {
        Direction::East => println!("East"),
        other => println!("other direction: {:?}", other),
    };
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[506]||=i(`p`,null,[r(`然而，在某些场景下，我们其实只关心`),i(`strong`,null,`某一个值是否存在`),r(`，此时 `),i(`code`,null,`match`),r(` 就显得过于啰嗦。`)],-1),s[507]||=i(`h5`,{id:`if-let匹配`,tabindex:`-1`},[r(`if let匹配 `),i(`a`,{class:`header-anchor`,href:`#if-let匹配`,"aria-label":`Permalink to "if let匹配"`},`​`)],-1),s[508]||=i(`p`,null,[r(`在 Rust 中，`),i(`code`,null,`Some`),r(` 是 `),i(`code`,null,`Option`),r(` 枚举的一个变体。`),i(`code`,null,`Option`),r(` 是一个非常常用的枚举类型，它用于表示一个可能存在或不存在的值。`),i(`code`,null,`Option`),r(` 有两个变体：`)],-1),s[509]||=i(`ol`,null,[i(`li`,null,[i(`code`,null,`Some(T)`),r(`：表示一个包含类型 `),i(`code`,null,`T`),r(` 的值。`),i(`code`,null,`Some`),r(` 用来包装一个具体的值，表示该值存在。`)]),i(`li`,null,[i(`code`,null,`None`),r(`：表示没有值，也就是值不存在。`)])],-1),s[510]||=i(`p`,null,`有时候会遇到只有一个模式的值需要被处理，其他值被忽略的情况，如果使用match就要写成一下模式`,-1),s[511]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`    let v = Some(3u8);
    match v {
        Some(3) => println!("three"),
        _ => (),
    }

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[512]||=i(`p`,null,`这样写太过于繁冗，我们使用if let的方式来实现`,-1),s[513]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`if let Some(3) = v {
    println!("three");
}

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[514]||=i(`h5`,{id:`matches-宏`,tabindex:`-1`},[r(`matches!宏 `),i(`a`,{class:`header-anchor`,href:`#matches-宏`,"aria-label":`Permalink to "matches!宏"`},`​`)],-1),s[515]||=i(`p`,null,`Rust标准库中提供了一个非常实用的宏：matches!,他可以将一个表达式跟模式进行匹配，然后返回匹配的结果 true or false。`,-1),s[516]||=i(`p`,null,`例如，有一个动态数组，里面存有以下枚举`,-1),s[517]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`enum MyEnum {
    Foo,
    Bar
}

fn main() {
    let v = vec![MyEnum::Foo,MyEnum::Bar,MyEnum::Foo];
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[518]||=i(`p`,null,`现在如果想对v进行过滤，只保留类型是MyEnum::Foo的元素，按经验一般来说是这样写的`,-1),s[519]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`v.iter().filter(|x| x == MyEnum::Foo);
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[520]||=i(`p`,null,`但是，实际上这行代码会报错，因为你无法将x直接跟一个枚举成员进行比较。我们使用matches!进行比较`,-1),s[521]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`v.iter().filter(|x| matches!(x, MyEnum::Foo));
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[522]||=i(`p`,null,`我们来看看其他例子`,-1),s[523]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`let foo = 'f';
assert!(matches!(foo, 'A'..='Z' | 'a'..='z'));

let bar = Some(4);
assert!(matches!(bar, Some(x) if x > 2));

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[524]||=i(`h5`,{id:`变量遮蔽`,tabindex:`-1`},[r(`变量遮蔽 `),i(`a`,{class:`header-anchor`,href:`#变量遮蔽`,"aria-label":`Permalink to "变量遮蔽"`},`​`)],-1),s[525]||=i(`p`,null,[r(`无论是 `),i(`code`,null,`match`),r(` 还是 `),i(`code`,null,`if let`),r(`，这里都是一个新的代码块，而且这里的绑定相当于新变量，如果你使用同名变量，会发生变量遮蔽：`)],-1),s[526]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn main() {
   let age = Some(30);
   println!("在匹配前，age是{:?}",age);
   if let Some(age) = age {
       println!("匹配出来的age是{}",age);
   }

   println!("在匹配后，age是{:?}",age);
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[527]||=i(`p`,null,[i(`code`,null,`cargo run `),r(`运行后输出如下：`)],-1),s[528]||=i(`div`,{class:`language-console`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`console`),i(`pre`,null,[i(`code`,{class:`language-console`},`在匹配前，age是Some(30)
匹配出来的age是30
在匹配后，age是Some(30)
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[529]||=i(`p`,null,[r(`可以看出在 `),i(`code`,null,`if let`),r(` 中，`),i(`code`,null,`=`),r(` 右边 `),i(`code`,null,`Some(i32)`),r(` 类型的 `),i(`code`,null,`age`),r(` 被左边 `),i(`code`,null,`i32`),r(` 类型的新 `),i(`code`,null,`age`),r(` 遮蔽了，该遮蔽一直持续到 `),i(`code`,null,`if let`),r(` 语句块的结束。因此第三个 `),i(`code`,null,`println!`),r(` 输出的 `),i(`code`,null,`age`),r(` 依然是 `),i(`code`,null,`Some(i32)`),r(` 类型。`)],-1),s[530]||=i(`p`,null,[r(`对于 `),i(`code`,null,`match`),r(` 类型也是如此:`)],-1),s[531]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn main() {
   let age = Some(30);
   println!("在匹配前，age是{:?}",age);
   match age {
       Some(age) =>  println!("匹配出来的age是{}",age),
       _ => ()
   }
   println!("在匹配后，age是{:?}",age);
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[532]||=i(`p`,null,[r(`需要注意的是，`),i(`strong`,null,[i(`code`,null,`match`),r(` 中的变量遮蔽其实不是那么的容易看出`)]),r(`，因此要小心！其实这里最好不要使用同名，避免难以理解`)],-1),s[533]||=i(`h4`,{id:`解构option`,tabindex:`-1`},[r(`解构Option `),i(`a`,{class:`header-anchor`,href:`#解构option`,"aria-label":`Permalink to "解构Option"`},`​`)],-1),s[534]||=i(`p`,null,`定义：`,-1),s[535]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`enum Option<T> {
    None,
    Some(T),
}

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[536]||=i(`p`,null,`简单解释就是，应该变量要么有值：Some(T),要么为空：None.`,-1),s[537]||=i(`p`,null,`那现在我们该如何去使用这个Option枚举类型，根据经验，可以通过match来实现`,-1),s[538]||=i(`blockquote`,null,[i(`p`,null,[r(`因为 `),i(`code`,null,`Option`),r(`，`),i(`code`,null,`Some`),r(`，`),i(`code`,null,`None`),r(` 都包含在 `),i(`code`,null,`prelude`),r(` 中，因此你可以直接通过名称来使用它们，而无需以 `),i(`code`,null,`Option::Some`),r(` 这种形式去使用，总之，千万不要因为调用路径变短了，就忘记 `),i(`code`,null,`Some`),r(` 和 `),i(`code`,null,`None`),r(` 也是 `),i(`code`,null,`Option`),r(` 底下的枚举成员！`)])],-1),s[539]||=i(`h5`,{id:`匹配option-t`,tabindex:`-1`},[r(`匹配Option<T> `),i(`a`,{class:`header-anchor`,href:`#匹配option-t`,"aria-label":`Permalink to "匹配Option&lt;T&gt;"`},`​`)],-1),s[540]||=i(`p`,null,[r(`使用`),i(`code`,null,`Option<T>`),r(`,是为了从Some中取出起内部的T值以及处理没有值的情况，为了演示这一点，下面编写一个函数，它获取一个`),i(`code`,null,`Option<i32>`),r(`,如果其中含有一个值，将其加一；如果其中没有值，则返回`),i(`code`,null,`None`),r(`值；`)],-1),s[541]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn plus_one(x: Option<i32>) -> Option<i32> {
    match x {
        None => None,
        Some(i) => Some(i + 1),
    }
}

let five = Some(5);
let six = plus_one(five);
let none = plus_one(None);

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[542]||=i(`p`,null,[i(`code`,null,`plus_one`),r(`接受一个`),i(`code`,null,`Option<i32>`),r(`类型的参数，提示返回一个`),i(`code`,null,`Option<i32>`),r(`类型的值（这种形式的函数在标准库类随处可见），在该函数的内部处理中，如果传入的是一个None，则返回一个None且不做任何处理；如果传入的是一个Some(i32)，则通过模式绑定，把其中的值绑定到变量i上，然后返回i+1的值，同时用Some进行包裹`)],-1),s[543]||=i(`p`,null,`当传入Some(5)时，首先匹配None分支，由于值不满足，继续匹配下一个分支：`,-1),s[544]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`Some(i) => Some(i + 1)
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[545]||=i(`p`,null,`Some(5)与Some(i)匹配上了，i绑定了Some包含的值，因此i在这里i的值为5，接着匹配分支的代码被执行，最后将i的值加一并返回一个含有值6的新Some。`,-1),s[546]||=i(`p`,null,`当传入None时，直接就匹配到了match的第一个分支，后续分支将不再匹配`,-1),s[547]||=i(`h4`,{id:`模式匹配适用场景`,tabindex:`-1`},[r(`模式匹配适用场景 `),i(`a`,{class:`header-anchor`,href:`#模式匹配适用场景`,"aria-label":`Permalink to "模式匹配适用场景"`},`​`)],-1),s[548]||=i(`h5`,{id:`match分支`,tabindex:`-1`},[r(`match分支 `),i(`a`,{class:`header-anchor`,href:`#match分支`,"aria-label":`Permalink to "match分支"`},`​`)],-1),s[549]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`match VALUE {
    PATTERN => EXPRESSION,
    PATTERN => EXPRESSION,
    PATTERN => EXPRESSION,
}

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[550]||=i(`p`,null,[r(`如上所示，match的每一个分支就是一个模式，因为match是无穷尽，因此我们需要一个`),i(`code`,null,`_`),r(`通配符来匹配剩余所有情况：`)],-1),s[551]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`match VALUE {
    PATTERN => EXPRESSION,
    PATTERN => EXPRESSION,
    _ => EXPRESSION,
}

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[552]||=i(`h5`,{id:`if-let分支`,tabindex:`-1`},[r(`if let分支 `),i(`a`,{class:`header-anchor`,href:`#if-let分支`,"aria-label":`Permalink to "if let分支"`},`​`)],-1),s[553]||=i(`p`,null,`if let 分支往往用于匹配一个模式，而忽略剩下所有模式的场景：`,-1),s[554]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`if let PATTERN = SOME_VALUE {

}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[555]||=i(`h5`,{id:`while-let条件循环`,tabindex:`-1`},[r(`while let条件循环 `),i(`a`,{class:`header-anchor`,href:`#while-let条件循环`,"aria-label":`Permalink to "while let条件循环"`},`​`)],-1),s[556]||=i(`p`,null,`它只允许条件满足，模式匹配就能一直进行while循环。`,-1),s[557]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`#![allow(unused)]
fn main() {
// Vec是动态数组
let mut stack = Vec::new();

// 向数组尾部插入元素
stack.push(1);
stack.push(2);
stack.push(3);

// stack.pop从数组尾部弹出元素
while let Some(top) = stack.pop() {
    println!("{}", top);
}
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[558]||=i(`h5`,{id:`for循环`,tabindex:`-1`},[r(`for循环 `),i(`a`,{class:`header-anchor`,href:`#for循环`,"aria-label":`Permalink to "for循环"`},`​`)],-1),s[559]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`let v = vec!['a', 'b', 'c'];

for (index, value) in v.iter().enumerate() {
    println!("{} is at index {}", value, index);
}

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[560]||=i(`p`,null,`这里使用enumerate方法生成了一个迭代器，该迭代器每次迭代都会返回一个（索引，值）形式的元组，然后用（index，value）来匹配`,-1),s[561]||=i(`h5`,{id:`let语句`,tabindex:`-1`},[r(`let语句 `),i(`a`,{class:`header-anchor`,href:`#let语句`,"aria-label":`Permalink to "let语句"`},`​`)],-1),s[562]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`let PATTERN = EXPRESSION;

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[563]||=i(`p`,null,`该语句也是一种模式匹配`,-1),s[564]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`let x = 5;
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[565]||=i(`p`,null,[r(`这其中，x是一种模式绑定，代表将`),i(`strong`,null,`匹配的值绑定到变量`),r(`上，因此，在Rust中，变量名也是一种模式，只不过它比较朴素很不起眼罢了`)],-1),s[566]||=i(`h5`,{id:`函数参数`,tabindex:`-1`},[r(`函数参数 `),i(`a`,{class:`header-anchor`,href:`#函数参数`,"aria-label":`Permalink to "函数参数"`},`​`)],-1),s[567]||=i(`p`,null,`函数参数也是模式：`,-1),s[568]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn foo(x: i32) {
    // 代码
}

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[569]||=i(`p`,null,`其中x就是一个模式，你还可以在参数中匹配元组：`,-1),s[570]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn print_coordinates(&(x, y): &(i32, i32)) {
    println!("Current location: ({}, {})", x, y);
}

fn main() {
    let point = (3, 5);
    print_coordinates(&point);
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[571]||=i(`p`,null,[i(`code`,null,`&(3,5)`),r(`会匹配模式`),i(`code`,null,`&(x,y)`)],-1),s[572]||=i(`h5`,{id:`let和if-let`,tabindex:`-1`},[r(`let和if let `),i(`a`,{class:`header-anchor`,href:`#let和if-let`,"aria-label":`Permalink to "let和if let"`},`​`)],-1),s[573]||=i(`p`,null,`对于以下代码，编译器会报错：`,-1),s[574]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`let Some(x) = some_option_value;

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[575]||=i(`p`,null,[r(`因为右边的值可能不为`),i(`code`,null,`Some`),r(`，而是`),i(`code`,null,`None`),r(`，这种时候就不能进行匹配，也就是上面的代码遗漏`),i(`code`,null,`None`),r(`的匹配`)],-1),s[576]||=i(`p`,null,[r(`类似`),i(`code`,null,`let，for和match`),r(`都必须要求完全覆盖匹配，才能通过编译(不可驳模式匹配)`)],-1),s[577]||=i(`p`,null,`但是对于if let，就可以这样使用:`,-1),s[578]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`if let Some(x) = some_option_value{
println!("{}",x);
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[579]||=i(`p`,null,`因为if let允许匹配一种模式，而忽略区域的模式(可驳模式匹配)。`,-1),s[580]||=i(`h5`,{id:`let-else-rust-1-65-新增`,tabindex:`-1`},[r(`let-else(Rust 1.65 新增) `),i(`a`,{class:`header-anchor`,href:`#let-else-rust-1-65-新增`,"aria-label":`Permalink to "let-else(Rust 1.65 新增)"`},`​`)],-1),s[581]||=i(`p`,null,[r(`使用 `),i(`code`,null,`let-else`),r(` 匹配，即可使 `),i(`code`,null,`let`),r(` 变为可驳模式。它可以使用 `),i(`code`,null,`else`),r(` 分支来处理模式不匹配的情况，但是 `),i(`code`,null,`else`),r(` 分支中必须用发散的代码块处理（例如：`),i(`code`,null,`break`),r(`、`),i(`code`,null,`return`),r(`、`),i(`code`,null,`panic`),r(`）`)],-1),s[582]||=i(`h4`,{id:`全模式列表-总结`,tabindex:`-1`},[r(`全模式列表（总结） `),i(`a`,{class:`header-anchor`,href:`#全模式列表-总结`,"aria-label":`Permalink to "全模式列表（总结）"`},`​`)],-1),s[583]||=i(`p`,null,`由于不同类型的模式匹配的例子比较多，为了方便查询，总结一下`,-1),s[584]||=i(`h5`,{id:`匹配字面值`,tabindex:`-1`},[r(`匹配字面值 `),i(`a`,{class:`header-anchor`,href:`#匹配字面值`,"aria-label":`Permalink to "匹配字面值"`},`​`)],-1),s[585]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`let x = 1;

match x {
    1 => println!("one"),
    2 => println!("two"),
    3 => println!("three"),
    _ => println!("anything"),
}

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[586]||=i(`h5`,{id:`匹配命名变量`,tabindex:`-1`},[r(`匹配命名变量 `),i(`a`,{class:`header-anchor`,href:`#匹配命名变量`,"aria-label":`Permalink to "匹配命名变量"`},`​`)],-1),s[587]||=i(`p`,null,[r(`在match中存在变量遮蔽问题，这个在`),i(`strong`,null,`匹配命名变量`),r(`时会遇到`)],-1),s[588]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn main() {
    let x = Some(5);
    let y = 10;

    match x {
        Some(50) => println!("Got 50"),
        Some(y) => println!("Matched, y = {:?}", y),
        _ => println!("Default case, x = {:?}", x),
    }

    println!("at the end: x = {:?}, y = {:?}", x, y);
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[589]||=i(`p`,null,`当match运行时，第一个匹配分支的模式并不匹配x中定义的值，所以代码继续执行`,-1),s[590]||=i(`p`,null,`第二个匹配分支中的模式引入了一个新的变量y，他会匹配some的任何值，由于这里的y在match表达式的作用域总，所以这是一个新变量，而不是开头声明的y`,-1),s[591]||=i(`p`,null,[r(`如果 `),i(`code`,null,`x`),r(` 的值是 `),i(`code`,null,`None`),r(` 而不是 `),i(`code`,null,`Some(5)`),r(`，头两个分支的模式不会匹配，所以会匹配模式 `),i(`code`,null,`_`),r(`。这个分支的模式中没有引入变量 `),i(`code`,null,`x`),r(`，所以此时表达式中的 `),i(`code`,null,`x`),r(` 会是外部没有被遮蔽的 `),i(`code`,null,`x`),r(`，也就是 `),i(`code`,null,`None`),r(`。`)],-1),s[592]||=i(`p`,null,[r(`如果你不想引入变量遮蔽，可以使用另一个变量名而非 `),i(`code`,null,`y`),r(`，或者使用匹配守卫(match guard)的方式，稍后在`),i(`a`,{href:`https://course.rs/basic/match-pattern/all-patterns.html#%E5%8C%B9%E9%85%8D%E5%AE%88%E5%8D%AB%E6%8F%90%E4%BE%9B%E7%9A%84%E9%A2%9D%E5%A4%96%E6%9D%A1%E4%BB%B6`,target:`_blank`,rel:`noreferrer`},`匹配守卫提供的额外条件`),r(`中会讲解。`)],-1),s[593]||=i(`h5`,{id:`单支多模式`,tabindex:`-1`},[r(`单支多模式 `),i(`a`,{class:`header-anchor`,href:`#单支多模式`,"aria-label":`Permalink to "单支多模式"`},`​`)],-1),s[594]||=i(`p`,null,[r(`在match表达式中，可以使用`),i(`code`,null,`|`),r(`语法匹配多个模式`)],-1),s[595]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`let x = 1;

match x {
    1 | 2 => println!("one or two"),
    3 => println!("three"),
    _ => println!("anything"),
}

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[596]||=i(`p`,null,`上面的代码会打印one or two`,-1),s[597]||=i(`h5`,{id:`通过-匹配值的范围`,tabindex:`-1`},[r(`通过…=匹配值的范围 `),i(`a`,{class:`header-anchor`,href:`#通过-匹配值的范围`,"aria-label":`Permalink to "通过..=匹配值的范围"`},`​`)],-1),s[598]||=i(`p`,null,[r(`在`),i(`a`,{href:`https://course.rs/basic/base-type/numbers.html#%E5%BA%8F%E5%88%97range`,target:`_blank`,rel:`noreferrer`},`数值类型`),r(`中我们有讲到一个序列语法，该语法不仅可以用于循环中，还能用于匹配模式`)],-1),s[599]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`let x = 5;

match x {
    1..=5 => println!("one through five"),
    _ => println!("something else"),
}

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[600]||=i(`p`,null,`如果x的值是1,2,3,4,5就会匹配到1…=5`,-1),s[601]||=i(`h5`,{id:`解构并分解值`,tabindex:`-1`},[r(`解构并分解值 `),i(`a`,{class:`header-anchor`,href:`#解构并分解值`,"aria-label":`Permalink to "解构并分解值"`},`​`)],-1),s[602]||=i(`p`,null,`也可以使用模式来解构结构体、枚举、元组、数组和引用`,-1),s[603]||=i(`h6`,{id:`解构结构体`,tabindex:`-1`},[r(`解构结构体 `),i(`a`,{class:`header-anchor`,href:`#解构结构体`,"aria-label":`Permalink to "解构结构体"`},`​`)],-1),s[604]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`struct Point {
    x: i32,
    y: i32,
}

fn main() {
    let p = Point { x: 0, y: 7 };

    let Point { x: a, y: b } = p;
    assert_eq!(0, a);
    assert_eq!(7, b);
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[605]||=i(`p`,null,`这段代码创建了变量a，b来匹配结构体p中的x和y`,-1),s[606]||=i(`p`,null,[r(`字段，这个例子展示了`),i(`strong`,null,`模式中的变量名不必与结构体中的字段名一致`),r(`。不过通常希望变量名与字段名一致以便于理解变量来自于哪些字段。`)],-1),s[607]||=i(`h6`,{id:`解构枚举`,tabindex:`-1`},[r(`解构枚举 `),i(`a`,{class:`header-anchor`,href:`#解构枚举`,"aria-label":`Permalink to "解构枚举"`},`​`)],-1),s[608]||=i(`p`,null,[r(`​ 下面代码以 `),i(`code`,null,`Message`),r(` 枚举为例，编写一个 `),i(`code`,null,`match`),r(` 使用模式解构每一个内部值：`)],-1),s[609]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`enum Message {
    Quit,
    Move { x: i32, y: i32 },
    Write(String),
    ChangeColor(i32, i32, i32),
}

fn main() {
    let msg = Message::ChangeColor(0, 160, 255);

    match msg {
        Message::Quit => {
            println!("The Quit variant has no data to destructure.")
        }
        Message::Move { x, y } => {
            println!(
                "Move in the x direction {} and in the y direction {}",
                x,
                y
            );
        }
        Message::Write(text) => println!("Text message: {}", text),
        Message::ChangeColor(r, g, b) => {
            println!(
                "Change the color to red {}, green {}, and blue {}",
                r,
                g,
                b
            )
        }
    }
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[610]||=i(`p`,null,[r(`这里老生常谈一句话，模式匹配一样要类型相同，因此匹配 `),i(`code`,null,`Message::Move{1,2}`),r(` 这样的枚举值，就必须要用 `),i(`code`,null,`Message::Move{x,y}`),r(` 这样的同类型模式才行。这段代码会打印出 `),i(`code`,null,`Change the color to red 0, green 160, and blue 255`),r(`。尝试改变 `),i(`code`,null,`msg`),r(` 的值来观察其他分支代码的运行。`)],-1),s[611]||=i(`h6`,{id:`解构嵌套的结构体和枚举`,tabindex:`-1`},[r(`解构嵌套的结构体和枚举 `),i(`a`,{class:`header-anchor`,href:`#解构嵌套的结构体和枚举`,"aria-label":`Permalink to "解构嵌套的结构体和枚举"`},`​`)],-1),s[612]||=i(`p`,null,[r(`目前为止，所有的例子都只匹配了深度为一级的结构体或枚举。 `),i(`code`,null,`match`),r(` 也可以匹配嵌套的项！`)],-1),s[613]||=i(`p`,null,`例如使用下面的代码来同时支持 RGB 和 HSV 色彩模式：`,-1),s[614]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`enum Color {
   Rgb(i32, i32, i32),
   Hsv(i32, i32, i32),
}

enum Message {
    Quit,
    Move { x: i32, y: i32 },
    Write(String),
    ChangeColor(Color),
}

fn main() {
    let msg = Message::ChangeColor(Color::Hsv(0, 160, 255));

    match msg {
        Message::ChangeColor(Color::Rgb(r, g, b)) => {
            println!(
                "Change the color to red {}, green {}, and blue {}",
                r,
                g,
                b
            )
        }
        Message::ChangeColor(Color::Hsv(h, s, v)) => {
            println!(
                "Change the color to hue {}, saturation {}, and value {}",
                h,
                s,
                v
            )
        }
        _ => ()
    }
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[615]||=i(`p`,null,[i(`code`,null,`match`),r(` 第一个分支的模式匹配一个 `),i(`code`,null,`Message::ChangeColor`),r(` 枚举成员，该枚举成员又包含了一个 `),i(`code`,null,`Color::Rgb`),r(` 的枚举成员，最终绑定了 3 个内部的 `),i(`code`,null,`i32`),r(` 值`)],-1),s[616]||=i(`h6`,{id:`解构结构体和元组`,tabindex:`-1`},[r(`解构结构体和元组 `),i(`a`,{class:`header-anchor`,href:`#解构结构体和元组`,"aria-label":`Permalink to "解构结构体和元组"`},`​`)],-1),s[617]||=i(`p`,null,`我们可以用复杂的方式来混合、匹配和嵌套解构模式。如下是一个复杂结构体的例子，其中结构体和元组嵌套在元组中，并将所有的原始类型解构出来`,-1),s[618]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`struct Point {
     x: i32,
     y: i32,
 }

let ((feet, inches), Point {x, y}) = ((3, 10), Point { x: 3, y: -10 });

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[619]||=i(`h6`,{id:`解构数组`,tabindex:`-1`},[r(`解构数组 `),i(`a`,{class:`header-anchor`,href:`#解构数组`,"aria-label":`Permalink to "解构数组"`},`​`)],-1),s[620]||=i(`p`,null,`对于数组，我们可以用类似元组的方式进行解构，分为两种情况`,-1),s[621]||=i(`p`,null,`定长数组:`,-1),s[622]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`let arr: [u16; 2] = [114, 514];
let [x, y] = arr;

assert_eq!(x, 114);
assert_eq!(y, 514);

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[623]||=i(`p`,null,`不定长数组`,-1),s[624]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`let arr: &[u16] = &[114, 514];

if let [x, ..] = arr {
    assert_eq!(x, &114);
}

if let &[.., y] = arr {
    assert_eq!(y, 514);
}

let arr: &[u16] = &[];

assert!(matches!(arr, [..]));
assert!(!matches!(arr, [x, ..]));

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[625]||=i(`h5`,{id:`忽略模式中的值`,tabindex:`-1`},[r(`忽略模式中的值 `),i(`a`,{class:`header-anchor`,href:`#忽略模式中的值`,"aria-label":`Permalink to "忽略模式中的值"`},`​`)],-1),s[626]||=i(`p`,null,`又是忽略模式的一些值也是很有用的，比如在match中的最后一个分支使用_模式匹配所有剩余的值。也可以在另一个模式中使用_模式，使用一个亿下划线开始的名称，或者使用…忽略所剩部分的值`,-1),s[627]||=i(`h6`,{id:`使用-忽略整个值`,tabindex:`-1`},[r(`使用_忽略整个值 `),i(`a`,{class:`header-anchor`,href:`#使用-忽略整个值`,"aria-label":`Permalink to "使用\\_忽略整个值"`},`​`)],-1),s[628]||=i(`p`,null,[r(`虽然 `),i(`code`,null,`_`),r(` 模式作为 `),i(`code`,null,`match`),r(` 表达式最后的分支特别有用，但是它的作用还不限于此。例如可以将其用于函数参数中：`)],-1),s[629]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn foo(_: i32, y: i32) {
    println!("This code only uses the y parameter: {}", y);
}

fn main() {
    foo(3, 4);
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[630]||=i(`p`,null,[r(`这段代码会完全忽略作为第一个参数传递的值 `),i(`code`,null,`3`),r(`，并会打印出 `),i(`code`,null,`This code only uses the y parameter: 4`),r(`。`)],-1),s[631]||=i(`p`,null,[r(`大部分情况当你不再需要特定函数参数时，最好修改签名不再包含无用的参数。在一些情况下忽略函数参数会变得特别有用，比如实现特征时，当你需要特定类型签名但是函数实现并不需要某个参数时。此时编译器就`),i(`strong`,null,`不会警告说存在未使用的函数参数`),r(`，就跟使用命名参数一样。`)],-1),s[632]||=i(`h6`,{id:`使用嵌套的-忽略部分值`,tabindex:`-1`},[r(`使用嵌套的_忽略部分值 `),i(`a`,{class:`header-anchor`,href:`#使用嵌套的-忽略部分值`,"aria-label":`Permalink to "使用嵌套的\\_忽略部分值"`},`​`)],-1),s[633]||=i(`p`,null,`可以在一个模式内部使用_忽略部分值`,-1),s[634]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`let mut setting_value = Some(5);
let new_setting_value = Some(10);

match (setting_value, new_setting_value) {
    (Some(_), Some(_)) => {
        println!("Can't overwrite an existing customized value");
    }
    _ => {
        setting_value = new_setting_value;
    }
}

println!("setting is {:?}", setting_value);

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[635]||=i(`p`,null,[r(`这段代码会打印出 `),i(`code`,null,`Can't overwrite an existing customized value`),r(` 接着是 `),i(`code`,null,`setting is Some(5)`),r(`。`)],-1),s[636]||=i(`p`,null,[r(`第一个匹配分支，我们不关心里面的值，只关心元组中两个元素的类型，因此对于 `),i(`code`,null,`Some`),r(` 中的值，直接进行忽略。 剩下的形如 `),i(`code`,null,`(Some(_),None)`),r(`，`),i(`code`,null,`(None, Some(_))`),r(`, `),i(`code`,null,`(None,None)`),r(` 形式，都由第二个分支 `),i(`code`,null,`_`),r(` 进行分配。`)],-1),s[637]||=i(`h6`,{id:`使用下划线忽略未使用的变量`,tabindex:`-1`},[r(`使用下划线忽略未使用的变量 `),i(`a`,{class:`header-anchor`,href:`#使用下划线忽略未使用的变量`,"aria-label":`Permalink to "使用下划线忽略未使用的变量"`},`​`)],-1),s[638]||=i(`p`,null,`如果你创建了一个变量却不在任何地方使用它就需要使用_放在变量开头来忽略它`,-1),s[639]||=i(`p`,null,[r(`注意, 只使用 `),i(`code`,null,`_`),r(` 和使用以下划线开头的名称有些微妙的不同：比如 `),i(`strong`,null,[i(`code`,null,`_x`),r(` 仍会将值绑定到变量，而 `),i(`code`,null,`_`),r(` 则完全不会绑定`)]),r(`。`)],-1),s[640]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`let s = Some(String::from("Hello!"));

if let Some(_s) = s {
    println!("found a string");
}

println!("{:?}", s);

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[641]||=i(`p`,null,[i(`code`,null,`s`),r(` 是一个拥有所有权的动态字符串，在上面代码中，我们会得到一个错误，因为 `),i(`code`,null,`s`),r(` 的值会被转移给 `),i(`code`,null,`_s`),r(`，在 `),i(`code`,null,`println!`),r(` 中再次使用 `),i(`code`,null,`s`),r(` 会报错：`)],-1),s[642]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`s 是一个拥有所有权的动态字符串，在上面代码中，我们会得到一个错误，因为 s 的值会被转移给 _s，在 println! 中再次使用 s 会报错：
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[643]||=i(`p`,null,`只使用下滑线本身就不会绑定值了，因为s没有移动进_:`,-1),s[644]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`let s = Some(String::from("Hello!"));

if let Some(_) = s {
    println!("found a string");
}

println!("{:?}", s);

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[645]||=i(`h5`,{id:`匹配守卫提供的额外条件`,tabindex:`-1`},[r(`匹配守卫提供的额外条件 `),i(`a`,{class:`header-anchor`,href:`#匹配守卫提供的额外条件`,"aria-label":`Permalink to "匹配守卫提供的额外条件"`},`​`)],-1),s[646]||=i(`p`,null,`匹配守卫是一个位于match分支模式之后的额外的if条件，它能为分支模式提供更进一步的匹配条件`,-1),s[647]||=i(`p`,null,`这个条件可以使用模式中创建的变量：`,-1),s[648]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`let num = Some(4);

match num {
    Some(x) if x < 5 => println!("less than five: {}", x),
    Some(x) => println!("{}", x),
    None => (),
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[649]||=i(`p`,null,[r(`这个例子会打印出 `),i(`code`,null,`less than five: 4`),r(`。当 `),i(`code`,null,`num`),r(` 与模式中第一个分支匹配时，`),i(`code`,null,`Some(4)`),r(` 可以与 `),i(`code`,null,`Some(x)`),r(` 匹配，接着匹配守卫检查 `),i(`code`,null,`x`),r(` 值是否小于 5，因为 4 小于 5，所以第一个分支被选择。`)],-1),s[650]||=i(`p`,null,[r(`相反如果 `),i(`code`,null,`num`),r(` 为 `),i(`code`,null,`Some(10)`),r(`，因为 10 不小于 5 ，所以第一个分支的匹配守卫为假。接着 Rust 会前往第二个分支，因为这里没有匹配守卫所以会匹配任何 `),i(`code`,null,`Some`),r(` 成员。`)],-1),s[651]||=i(`p`,null,[r(`模式中无法提供类如 `),i(`code`,null,`if x < 5`),r(` 的表达能力，我们可以通过匹配守卫的方式来实现。`)],-1),s[652]||=i(`h5`,{id:`绑定`,tabindex:`-1`},[r(`@绑定 `),i(`a`,{class:`header-anchor`,href:`#绑定`,"aria-label":`Permalink to "@绑定"`},`​`)],-1),s[653]||=i(`p`,null,[r(`@运算符允许为一个字段绑定另外一个变量。下面例子中，我们希望测试Message::hello的id字段是否位于3…=7的范围内，同时也希望能将其值绑定到 `),i(`code`,null,`id_variable`),r(` 变量中以便此分支中相关的代码可以使用它。我们可以将 `),i(`code`,null,`id_variable`),r(` 命名为 `),i(`code`,null,`id`),r(`，与字段同名，不过出于示例的目的这里选择了不同的名称。`)],-1),s[654]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`enum Message {
    Hello { id: i32 },
}

let msg = Message::Hello { id: 5 };

match msg {
    Message::Hello { id: id_variable @ 3..=7 } => {
        println!("Found an id in range: {}", id_variable)
    },
    Message::Hello { id: 10..=12 } => {
        println!("Found an id in another range")
    },
    Message::Hello { id } => {
        println!("Found some other id: {}", id)
    },
}

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[655]||=i(`p`,null,[r(`上例会打印出 `),i(`code`,null,`Found an id in range: 5`),r(`。通过在 `),i(`code`,null,`3..=7`),r(` 之前指定 `),i(`code`,null,`id_variable @`),r(`，我们捕获了任何匹配此范围的值并同时将该值绑定到变量 `),i(`code`,null,`id_variable`),r(` 上。`)],-1),s[656]||=i(`p`,null,[r(`第二个分支只在模式中指定了一个范围，`),i(`code`,null,`id`),r(` 字段的值可以是 `),i(`code`,null,`10、11 或 12`),r(`，不过这个模式的代码并不知情也不能使用 `),i(`code`,null,`id`),r(` 字段中的值，因为没有将 `),i(`code`,null,`id`),r(` 值保存进一个变量。`)],-1),s[657]||=i(`p`,null,[r(`最后一个分支指定了一个没有范围的变量，此时确实拥有可以用于分支代码的变量 `),i(`code`,null,`id`),r(`，因为这里使用了结构体字段简写语法。不过此分支中没有像头两个分支那样对 `),i(`code`,null,`id`),r(` 字段的值进行测试：任何值都会匹配此分支。`)],-1),s[658]||=i(`p`,null,[r(`当你既想要限定分支范围，又想要使用分支的变量时，就可以用 `),i(`code`,null,`@`),r(` 来绑定到一个新的变量上，实现想要的功能。`)],-1),s[659]||=i(`h6`,{id:`前绑定后解构-rust-1-56-新增`,tabindex:`-1`},[r(`@前绑定后解构(Rust 1.56 新增) `),i(`a`,{class:`header-anchor`,href:`#前绑定后解构-rust-1-56-新增`,"aria-label":`Permalink to "@前绑定后解构(Rust 1.56 新增)"`},`​`)],-1),s[660]||=i(`p`,null,[r(`使用 `),i(`code`,null,`@`),r(` 还可以在绑定新变量的同时，对目标进行解构：`)],-1),s[661]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`#[derive(Debug)]
struct Point {
    x: i32,
    y: i32,
}

fn main() {
    // 绑定新变量 \`p\`，同时对 \`Point\` 进行解构
    let p @ Point {x: px, y: py } = Point {x: 10, y: 23};
    println!("x: {}, y: {}", px, py);
    println!("{:?}", p);

    let point = Point {x: 10, y: 5};
    if let p @ Point {x: 10, y} = point {
        println!("x is 10 and y is {} in {:?}", y, p);
    } else {
        println!("x was not 10 :(");
    }
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[662]||=i(`h6`,{id:`新特性-rust-1-53-新增`,tabindex:`-1`},[r(`@新特性(Rust 1.53 新增) `),i(`a`,{class:`header-anchor`,href:`#新特性-rust-1-53-新增`,"aria-label":`Permalink to "@新特性(Rust 1.53 新增)"`},`​`)],-1),s[663]||=i(`p`,null,`考虑下面一段代码:`,-1),s[664]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn main() {
    match 1 {
        num @ 1 | 2 => {
            println!("{}", num);
        }
        _ => {}
    }
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[665]||=i(`p`,null,[r(`编译不通过，是因为 `),i(`code`,null,`num`),r(` 没有绑定到所有的模式上，只绑定了模式 `),i(`code`,null,`1`),r(`，你可能会试图通过这个方式来解决：`)],-1),s[666]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`num @ (1 | 2)
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[667]||=i(`p`,null,`但是，如果你用的是 Rust 1.53 之前的版本，那这种写法会报错，因为编译器不支持。`,-1),s[668]||=i(`p`,null,`至此，模式匹配的内容已经全部完结，复杂但是详尽，想要一次性全部记住属实不易，因此读者可以先留一个印象，等未来需要时，再来翻阅寻找具体的模式实现方式。`,-1),s[669]||=i(`h3`,{id:`方法method`,tabindex:`-1`},[r(`方法Method `),i(`a`,{class:`header-anchor`,href:`#方法method`,"aria-label":`Permalink to "方法Method"`},`​`)],-1),s[670]||=i(`h4`,{id:`定义方法`,tabindex:`-1`},[r(`定义方法 `),i(`a`,{class:`header-anchor`,href:`#定义方法`,"aria-label":`Permalink to "定义方法"`},`​`)],-1),s[671]||=i(`p`,null,`Rust使用impl来定义方法，例如以下代码：`,-1),s[672]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`struct Circle {
    x: f64,
    y: f64,
    radius: f64,
}

impl Circle {
    // new是Circle的关联函数，因为它的第一个参数不是self，且new并不是关键字
    // 这种方法往往用于初始化当前结构体的实例
    fn new(x: f64, y: f64, radius: f64) -> Circle {
        Circle {
            x: x,
            y: y,
            radius: radius,
        }
    }

    // Circle的方法，&self表示借用当前的Circle结构体
    fn area(&self) -> f64 {
        std::f64::consts::PI * (self.radius * self.radius)
    }
}

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[673]||=i(`p`,null,`我们来看看Rust和其它语言的区别:`,-1),s[674]||=i(`figure`,null,[i(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202504091920787.png`,alt:`image-20250409192008695`,loading:`lazy`,decoding:`async`})],-1),s[675]||=i(`p`,null,`我们可以看到其它语言中所有定义都在class中，但是Rust的对象定义和方法定义是分离的，这种数据和使用分离的方式会给使用者极高的灵活度`,-1),s[676]||=i(`p`,null,`我们来看下面例子`,-1),s[677]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`#[derive(Debug)]
struct Rectangle {
    width: u32,
    height: u32,
}

impl Rectangle {
    fn area(&self) -> u32 {
        self.width * self.height
    }
}

fn main() {
    let rect1 = Rectangle { width: 30, height: 50 };

    println!(
        "The area of the rectangle is {} square pixels.",
        rect1.area()
    );
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[678]||=i(`p`,null,`该例子定义了一个Rectangle结构体，并且在其定义了一个area方法，用于计算该矩阵的面积`,-1),s[679]||=i(`p`,null,[i(`code`,null,`impl Rectangle {}`),r(` 表示为 `),i(`code`,null,`Rectangle`),r(` 实现方法（`),i(`code`,null,`impl`),r(` 是实现 `),i(`em`,null,`implementation`),r(` 的缩写），这样的写法表明 `),i(`code`,null,`impl`),r(` 语句块中的一切都是跟 `),i(`code`,null,`Rectangle`),r(` 相关联的。`)],-1),s[680]||=i(`h4`,{id:`self、-self和-mut-self`,tabindex:`-1`},[r(`self、&self和&mut self `),i(`a`,{class:`header-anchor`,href:`#self、-self和-mut-self`,"aria-label":`Permalink to "self、&self和&mut self"`},`​`)],-1),s[681]||=i(`p`,null,`在area的签名中，我们使用&self替代rectangle:&Rectangle，&self其实是self:&Self的简写（注意大小写）。在一个impl快内，Self指代被实现方法的结构体内向，self指代此类型的实例`,-1),s[682]||=i(`p`,null,`换句话说，self指代的是Rectangle结构体实例，这样的写法会让代码简洁好多`,-1),s[683]||=i(`p`,null,[r(`需要注意的是，`),i(`code`,null,`self`),r(` 依然有所有权的概念：`)],-1),s[684]||=i(`ul`,null,[i(`li`,null,[i(`code`,null,`self`),r(` 表示 `),i(`code`,null,`Rectangle`),r(` 的所有权转移到该方法中，这种形式用的较少`)]),i(`li`,null,[i(`code`,null,`&self`),r(` 表示该方法对 `),i(`code`,null,`Rectangle`),r(` 的不可变借用`)]),i(`li`,null,[i(`code`,null,`&mut self`),r(` 表示可变借用`)])],-1),s[685]||=i(`p`,null,`我们并不想获取所有权，也无需去改变它，只是希望能够读取结构体中的数据就使用&self，而当我们需要去改变当前结构体时，就需要使用&mut self`,-1),s[686]||=i(`p`,null,`简单总结下，使用方法代替函数有以下好处：`,-1),s[687]||=i(`ul`,null,[i(`li`,null,[r(`不用在函数签名中重复书写 `),i(`code`,null,`self`),r(` 对应的类型`)]),i(`li`,null,`代码的组织性和内聚性更强，对于代码维护和阅读来说，好处巨大`)],-1),s[688]||=i(`h4`,{id:`方法名跟结构体字段名相同`,tabindex:`-1`},[r(`方法名跟结构体字段名相同 `),i(`a`,{class:`header-anchor`,href:`#方法名跟结构体字段名相同`,"aria-label":`Permalink to "方法名跟结构体字段名相同"`},`​`)],-1),s[689]||=i(`p`,null,`在Rust中，允许方法名跟结构体字段名相同：`,-1),s[690]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`impl Rectangle {
    fn width(&self) -> bool {
        self.width > 0
    }
}

fn main() {
    let rect1 = Rectangle {
        width: 30,
        height: 50,
    };

    if rect1.width() {
        println!("The rectangle has a nonzero width; it is {}", rect1.width);
    }
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[691]||=i(`p`,null,[r(`当我们使用 `),i(`code`,null,`rect1.width()`),r(` 时，Rust 知道我们调用的是它的方法，如果使用 `),i(`code`,null,`rect1.width`),r(`，则是访问它的字段。`)],-1),s[692]||=i(`h4`,{id:`带多个参数的方法`,tabindex:`-1`},[r(`带多个参数的方法 `),i(`a`,{class:`header-anchor`,href:`#带多个参数的方法`,"aria-label":`Permalink to "带多个参数的方法"`},`​`)],-1),s[693]||=i(`p`,null,`方法和函数一样， 可以使用多个参数:`,-1),s[694]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`impl Rectangle {
    fn area(&self) -> u32 {
        self.width * self.height
    }

    fn can_hold(&self, other: &Rectangle) -> bool {
        self.width > other.width && self.height > other.height
    }
}

fn main() {
    let rect1 = Rectangle { width: 30, height: 50 };
    let rect2 = Rectangle { width: 10, height: 40 };
    let rect3 = Rectangle { width: 60, height: 45 };

    println!("Can rect1 hold rect2? {}", rect1.can_hold(&rect2));
    println!("Can rect1 hold rect3? {}", rect1.can_hold(&rect3));
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[695]||=i(`h4`,{id:`关联函数`,tabindex:`-1`},[r(`关联函数 `),i(`a`,{class:`header-anchor`,href:`#关联函数`,"aria-label":`Permalink to "关联函数"`},`​`)],-1),s[696]||=i(`p`,null,[r(`如何为一个结构体定义一个构造器方法？也就是接受几个参数，然后构造并返回该结构体的实例，很简单，参数中不包含 `),i(`code`,null,`self`),r(` 即可`)],-1),s[697]||=i(`p`,null,[r(`这种定义在 `),i(`code`,null,`impl`),r(` 中且没有 `),i(`code`,null,`self`),r(` 的函数被称之为`),i(`strong`,null,`关联函数`),r(`： 因为它没有 `),i(`code`,null,`self`),r(`，不能用 `),i(`code`,null,`f.read()`),r(` 的形式调用，因此它是一个函数而不是方法，但它又在impl中，与结构体紧密关联，因此称为关联函数`)],-1),s[698]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`impl Rectangle {
    fn new(w: u32, h: u32) -> Rectangle {
        Rectangle { width: w, height: h }
    }
}

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[699]||=i(`h4`,{id:`多个impl定义`,tabindex:`-1`},[r(`多个impl定义. `),i(`a`,{class:`header-anchor`,href:`#多个impl定义`,"aria-label":`Permalink to "多个impl定义."`},`​`)],-1),s[700]||=i(`p`,null,[r(`Rust 允许我们为一个结构体定义多个 `),i(`code`,null,`impl`),r(` 块，目的是提供更多的灵活性和代码组织性，例如当方法多了后，可以把相关的方法组织在同一个 `),i(`code`,null,`impl`),r(` 块中，那么就可以形成多个 `),i(`code`,null,`impl`),r(` 块，各自完成一块儿目标：`)],-1),s[701]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`impl Rectangle {
    fn area(&self) -> u32 {
        self.width * self.height
    }
}

impl Rectangle {
    fn can_hold(&self, other: &Rectangle) -> bool {
        self.width > other.width && self.height > other.height
    }
}

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[702]||=i(`h4`,{id:`为枚举实现方法`,tabindex:`-1`},[r(`为枚举实现方法 `),i(`a`,{class:`header-anchor`,href:`#为枚举实现方法`,"aria-label":`Permalink to "为枚举实现方法"`},`​`)],-1),s[703]||=i(`p`,null,[r(`枚举类型之所以强大，不仅仅在于它好用、可以`),i(`a`,{href:`https://course.rs/basic/compound-type/enum.html#%E5%90%8C%E4%B8%80%E5%8C%96%E7%B1%BB%E5%9E%8B`,target:`_blank`,rel:`noreferrer`},`同一化类型`),r(`，还在于，我们可以像结构体一样，为枚举实现方法：`)],-1),s[704]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`#![allow(unused)]
enum Message {
    Quit,
    Move { x: i32, y: i32 },
    Write(String),
    ChangeColor(i32, i32, i32),
}

impl Message {
    fn call(&self) {
        // 在这里定义方法体
    }
}

fn main() {
    let m = Message::Write(String::from("hello"));
    m.call();
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[705]||=i(`p`,null,`除了结构体和枚举，我们还能为特征(trait)实现方法，在此之前，先来看看泛型。`,-1),s[706]||=i(`h3`,{id:`泛型和特征`,tabindex:`-1`},[r(`泛型和特征 `),i(`a`,{class:`header-anchor`,href:`#泛型和特征`,"aria-label":`Permalink to "泛型和特征"`},`​`)],-1),s[707]||=i(`h4`,{id:`泛型generics`,tabindex:`-1`},[r(`泛型Generics `),i(`a`,{class:`header-anchor`,href:`#泛型generics`,"aria-label":`Permalink to "泛型Generics"`},`​`)],-1),s[708]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn add<T>(a:T, b:T) -> T {
    a + b
}

fn main() {
    println!("add i8: {}", add(2i8, 3i8));
    println!("add i32: {}", add(20, 30));
    println!("add f64: {}", add(1.23, 1.23));
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[709]||=i(`p`,null,`上面的代码T就是泛型参数，实际上在Rust中，泛型参数的名称可以随便起，但是出于惯例，我们都是用T来作为首选`,-1),s[710]||=i(`p`,null,`使用泛型参数，有一个先决条件，必需在使用前对其进行声明：`,-1),s[711]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`fn largest<T>(list: &[T]) -> T {
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[712]||=i(`p`,null,[r(`该泛型函数的作用是从列表中找出最大的值，其中列表中的元素类型为 T。首先 `),i(`code`,null,`largest<T>`),r(` 对泛型参数 `),i(`code`,null,`T`),r(` 进行了声明，然后才在函数参数中进行使用该泛型参数 `),i(`code`,null,`list: &[T]`),r(` （还记得 `),i(`code`,null,`&[T]`),r(` 类型吧？这是`),i(`a`,{href:`https://course.rs/basic/compound-type/array.html#%E6%95%B0%E7%BB%84%E5%88%87%E7%89%87`,target:`_blank`,rel:`noreferrer`},`数组切片`),r(`）。`)],-1),s[713]||=i(`p`,null,[r(`总之，我们可以这样理解这个函数定义：函数 `),i(`code`,null,`largest`),r(` 有泛型类型 `),i(`code`,null,`T`),r(`，它有个参数 `),i(`code`,null,`list`),r(`，其类型是元素为 `),i(`code`,null,`T`),r(` 的数组切片，最后，该函数返回值的类型也是 `),i(`code`,null,`T`),r(`。`)],-1),s[714]||=i(`h5`,{id:`显式地指定泛型的类型参数`,tabindex:`-1`},[r(`显式地指定泛型的类型参数 `),i(`a`,{class:`header-anchor`,href:`#显式地指定泛型的类型参数`,"aria-label":`Permalink to "显式地指定泛型的类型参数"`},`​`)],-1),s[715]||=i(`p`,null,`有时候，编译器无法推断你想要的泛型参数:`,-1),s[716]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`use std::fmt::Display;

fn create_and_print<T>() where T: From<i32> + Display {
    let a: T = 100.into(); // 创建了类型为 T 的变量 a，它的初始值由 100 转换而来
    println!("a is: {}", a);
}

fn main() {
    create_and_print();
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[717]||=i(`p`,null,`上面代码直接运行会报错，我们修改代码，使用显式指定类型:`,-1),s[718]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`use std::fmt::Display;

fn create_and_print<T>() where T: From<i32> + Display {
    let a: T = 100.into(); // 创建了类型为 T 的变量 a，它的初始值由 100 转换而来
    println!("a is: {}", a);
}

fn main() {
    create_and_print::<i64>();
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[719]||=i(`h5`,{id:`结构体中使用泛型`,tabindex:`-1`},[r(`结构体中使用泛型 `),i(`a`,{class:`header-anchor`,href:`#结构体中使用泛型`,"aria-label":`Permalink to "结构体中使用泛型"`},`​`)],-1),s[720]||=i(`p`,null,`结构体中的字段类型也可以用泛型来定义，下面的代码定义了一个坐标点Point，它可以存放任何类型的坐标值`,-1),s[721]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`struct Point<T>{
	x:T,
	y:T,
}

fn main(){
	let integer=Point{x:5,y:10};
	let float=Point{x:1.0,y:4.0}

}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[722]||=i(`p`,null,`这里有两点需要注意`,-1),s[723]||=i(`ul`,null,[i(`li`,null,[i(`strong`,null,`提前声明`),r(`，跟泛型函数定义类似，首先我们在使用泛型参数之前必需要进行声明 `),i(`code`,null,`Point<T>`),r(`，接着就可以在结构体的字段类型中使用 `),i(`code`,null,`T`),r(` 来替代具体的类型`)]),i(`li`,null,[i(`strong`,null,`x 和 y 是相同的类型`)])],-1),s[724]||=i(`p`,null,`第二点非常重要，如果使用不同的类型，那么它会导致下面代码的报错:`,-1),s[725]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`struct Point<T> {
    x: T,
    y: T,
}

fn main() {
    let p = Point{x: 1, y :1.1};
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[726]||=i(`p`,null,`x是整数类型，y是浮点数类型的，会发生报错`,-1),s[727]||=i(`p`,null,`如果我们想要x,y既能类型相同，又能类型不同，那我们需要使用不同的泛型参数:`,-1),s[728]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`struct Point<T,U> {
    x: T,
    y: U,
}
fn main() {
    let p = Point{x: 1, y :1.1};
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[729]||=i(`p`,null,[r(`切记，所有的泛型参数都要提前声明：`),i(`code`,null,`Point<T,U>`),r(` ! 但是如果你的结构体变成这鬼样：`),i(`code`,null,`struct Woo<T,U,V,W,X>`),r(`，那么你需要考虑拆分这个结构体，减少泛型参数的个数和代码复杂度。`)],-1),s[730]||=i(`h5`,{id:`枚举中使用泛型`,tabindex:`-1`},[r(`枚举中使用泛型 `),i(`a`,{class:`header-anchor`,href:`#枚举中使用泛型`,"aria-label":`Permalink to "枚举中使用泛型"`},`​`)],-1),s[731]||=i(`p`,null,[r(`提到枚举类型，`),i(`code`,null,`Option`),r(`永远是第一个应该被想起来的`)],-1),s[732]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`enum Option<T> {
    Some(T),
    None,
}

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[733]||=i(`p`,null,`Option<T>是一个拥有泛型T的枚举类型，它的第一个成员是Some(T)，存放了一个类型为T的值。`,-1),s[734]||=i(`p`,null,[r(`得益于泛型的引入，我们可以在任何一个需要返回值的函数中，去使用 `),i(`code`,null,`Option<T>`),r(` 枚举类型来做为返回值，用于返回一个任意类型的值 `),i(`code`,null,`Some(T)`),r(`，或者没有值 `),i(`code`,null,`None`),r(`。`)],-1),s[735]||=i(`p`,null,[r(`对于枚举而言，卧龙凤雏永远是绕不过去的存在：如果是 `),i(`code`,null,`Option`),r(` 是卧龙，那么 `),i(`code`,null,`Result`),r(` 就一定是凤雏，得两者可得天下：`)],-1),s[736]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`enum Result<T, E> {
    Ok(T),
    Err(E),
}

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[737]||=i(`p`,null,[r(`这个枚举和Option一样，主要用于函数返回值，与`),i(`code`,null,`Option`),r(`用于值的存在与否不同，`),i(`code`,null,`Result`),r(`关注的主要是值的正确性。`)],-1),s[738]||=i(`h5`,{id:`方法中使用泛型`,tabindex:`-1`},[r(`方法中使用泛型 `),i(`a`,{class:`header-anchor`,href:`#方法中使用泛型`,"aria-label":`Permalink to "方法中使用泛型"`},`​`)],-1),s[739]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`struct Point<T> {
    x: T,
    y: T,
}

impl<T> Point<T> {
    fn x(&self) -> &T {
        &self.x
    }
}

fn main() {
    let p = Point { x: 5, y: 10 };

    println!("p.x = {}", p.x());
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[740]||=i(`p`,null,`使用泛型参数前，依然需要提前声明：impl<T>,只有提前声明了，我们才能在Point<T>中使用它，这样Rust就知道Point的尖括号中的类型是泛型而不是具体类型。这里需要注意的是，这里的Point<T>不在是泛型声明，而是一个完整的结构体类型，因为我们定义的结构体是Point<T>,而不是Point`,-1),s[741]||=i(`h5`,{id:`为具体的泛型实现方法`,tabindex:`-1`},[r(`为具体的泛型实现方法 `),i(`a`,{class:`header-anchor`,href:`#为具体的泛型实现方法`,"aria-label":`Permalink to "为具体的泛型实现方法"`},`​`)],-1),s[742]||=i(`p`,null,[r(`对于 `),i(`code`,null,`Point<T>`),r(` 类型，你不仅能定义基于 `),i(`code`,null,`T`),r(` 的方法，还能针对特定的具体类型，进行方法定义：`)],-1),s[743]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`impl Point<f32> {
    fn distance_from_origin(&self) -> f32 {
        (self.x.powi(2) + self.y.powi(2)).sqrt()
    }
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[744]||=i(`p`,null,[r(`这段代码意味着 `),i(`code`,null,`Point<f32>`),r(` 类型会有一个方法 `),i(`code`,null,`distance_from_origin`),r(`，而其他 `),i(`code`,null,`T`),r(` 不是 `),i(`code`,null,`f32`),r(` 类型的 `),i(`code`,null,`Point<T> `),r(`实例则没有定义此方法。这个方法计算点实例与坐标`),i(`code`,null,`(0.0, 0.0)`),r(` 之间的距离，并使用了只能用于浮点型的数学运算符。`)],-1),s[745]||=i(`p`,null,`这样我们就能针对特定的泛型类型实现某个特定的方法，对于其它泛型类型则没有定义该方法。`,-1),s[746]||=i(`h5`,{id:`const泛型-rust1-51版本引入的主要特征`,tabindex:`-1`},[r(`const泛型(Rust1.51版本引入的主要特征) `),i(`a`,{class:`header-anchor`,href:`#const泛型-rust1-51版本引入的主要特征`,"aria-label":`Permalink to "const泛型(Rust1.51版本引入的主要特征)"`},`​`)],-1),s[747]||=i(`p`,null,`以上总结起来就是：针对类型实现的泛型，所有的泛型都是为了抽象不同的类型，那有没有针对值的泛型？`,-1),s[748]||=i(`p`,null,`我们来看下面，在数组中说过[i32;2]和[i32;3]是不同的数组类型，比如下面的代码`,-1),s[749]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn display_array(arr: [i32; 3]) {
    println!("{:?}", arr);
}
fn main() {
    let arr: [i32; 3] = [1, 2, 3];
    display_array(arr);

    let arr: [i32; 2] = [1, 2];
    display_array(arr);
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[750]||=i(`p`,null,[r(`结合代码和报错，可以很清楚的看出，`),i(`code`,null,`[i32; 3]`),r(` 和 `),i(`code`,null,`[i32; 2]`),r(` 确实是两个完全不同的类型，因此无法用同一个函数调用。`)],-1),s[751]||=i(`p`,null,`首先，让我们修改代码，让display_array能打印任意长度的i32数组:`,-1),s[752]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn display_array(arr: &[i32]) {
    println!("{:?}", arr);
}
fn main() {
    let arr: [i32; 3] = [1, 2, 3];
    display_array(&arr);

    let arr: [i32; 2] = [1, 2];
    display_array(&arr);
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[753]||=i(`p`,null,`很简单，只要使用数组切片，然后传入arr的不可变引用即可`,-1),s[754]||=i(`p`,null,`接着，将i32改成所有类型的数组:`,-1),s[755]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn display_array<T: std::fmt::Debug>(arr: &[T]) {
    println!("{:?}", arr);
}
fn main() {
    let arr: [i32; 3] = [1, 2, 3];
    display_array(&arr);

    let arr: [i32; 2] = [1, 2];
    display_array(&arr);
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[756]||=i(`p`,null,`这里需要注意的是需要对T加一个限制std::fmt::Debug,该限制表明T可以用在println!(“{:?}”,arr)中，因为{:?}形式的格式化输出需要arr实现该特征`,-1),s[757]||=i(`p`,null,`通过引用，我们可以很轻松的解决处理任何类型数组的问题，但是如果在某些场景下引用不适宜用或者干脆不能用呢？你们知道为什么以前 Rust 的一些数组库，在使用的时候都限定长度不超过 32 吗？因为它们会为每个长度都单独实现一个函数，简直。。。毫无人性。难道没有什么办法可以解决这个问题吗？`,-1),s[758]||=i(`p`,null,`好在，现在咱们有了 const 泛型，也就是针对值的泛型，正好可以用于处理数组长度的问题：`,-1),s[759]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn display_array<T: std::fmt::Debug, const N: usize>(arr: [T; N]) {
    println!("{:?}", arr);
}
fn main() {
    let arr: [i32; 3] = [1, 2, 3];
    display_array(arr);

    let arr: [i32; 2] = [1, 2];
    display_array(arr);
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[760]||=i(`p`,null,`如上，我们对了一该类型为[T;N]的数组，其中T是一个基于类型的泛型参数，这个和之前讲的泛型没什么区别，而重点在于N，是一个基于值的泛型参数，因为它用来替代的是数组的长度。`,-1),s[761]||=i(`p`,null,`N就是const泛型，定义的语法是const N：usize，表示const泛型N,它基于的值是usize`,-1),s[762]||=i(`h5`,{id:`const泛型表达式`,tabindex:`-1`},[r(`const泛型表达式 `),i(`a`,{class:`header-anchor`,href:`#const泛型表达式`,"aria-label":`Permalink to "const泛型表达式"`},`​`)],-1),s[763]||=i(`p`,null,`假设我们某个代码需要再内存很小的平台上工作，因此需要限制函数参数占用的内存大小，此时就可以使用const泛型表达式来实现:`,-1),s[764]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`// 目前只能在nightly版本下使用
#![allow(incomplete_features)]
#![feature(generic_const_exprs)]

fn something<T>(val: T)
where
    Assert<{ core::mem::size_of::<T>() < 768 }>: IsTrue,
    //       ^-----------------------------^ 这里是一个 const 表达式，换成其它的 const 表达式也可以
{
    //
}

fn main() {
    something([0u8; 0]); // ok
    something([0u8; 512]); // ok
    something([0u8; 1024]); // 编译错误，数组长度是1024字节，超过了768字节的参数长度限制
}

// ---

pub enum Assert<const CHECK: bool> {
    //
}

pub trait IsTrue {
    //
}

impl IsTrue for Assert<true> {
    //
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[765]||=i(`h5`,{id:`const-fn`,tabindex:`-1`},[r(`const fn `),i(`a`,{class:`header-anchor`,href:`#const-fn`,"aria-label":`Permalink to "const fn"`},`​`)],-1),s[766]||=i(`p`,null,`常量函数，const fn允许我们在编译期对函数进行求值，进而实现更高效、灵活的代码设计`,-1),s[767]||=i(`p`,null,`作用：在某些场景下，我们希望在编译期就计算出一些值，以提高运行时的性能或满足某些编译期的约束条件。例如，定义数组的长度、计算常量值等。`,-1),s[768]||=i(`p`,null,`const fn基本用法:`,-1),s[769]||=i(`p`,null,`要定义一个常量函数，只需要在函数声明前加上const关键字`,-1),s[770]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`const fn add(a: usize, b: usize) -> usize {
    a + b
}

const RESULT: usize = add(5, 10);

fn main() {
    println!("The result is: {}", RESULT);
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[771]||=i(`h5`,{id:`const-fn的限制`,tabindex:`-1`},[r(`const fn的限制 `),i(`a`,{class:`header-anchor`,href:`#const-fn的限制`,"aria-label":`Permalink to "const fn的限制"`},`​`)],-1),s[772]||=i(`p`,null,[r(`由于其在编译期执行，以确保函数能在编译期被安全地求值，因此有一些限制，例如，不可将随机数生成器写成 `),i(`code`,null,`const fn`)],-1),s[773]||=i(`p`,null,[r(`无论在编译时还是运行时调用const fn，它们的结果总是相同的，即是多次调用也一样。唯一的例外是，如果你在极端情况下进行复杂的浮点操作，可能会得到（非常轻微的）不同结构。因此，不建议使 `),i(`code`,null,`数组长度 (arr.len())`),r(` 和 `),i(`code`,null,`Enum判别式`),r(` 依赖于浮点计算。`)],-1),s[774]||=i(`h5`,{id:`结合const-fn与const泛型`,tabindex:`-1`},[r(`结合const fn与const泛型 `),i(`a`,{class:`header-anchor`,href:`#结合const-fn与const泛型`,"aria-label":`Permalink to "结合const fn与const泛型"`},`​`)],-1),s[775]||=i(`p`,null,[r(`将 `),i(`code`,null,`const fn`),r(` 与 `),i(`code`,null,`const 泛型`),r(` 结合，可以实现更加灵活和高效的代码设计。例如，创建一个固定大小的缓冲区结构，其中缓冲区大小由编译期计算确定：`)],-1),s[776]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`struct Buffer<const N: usize> {
    data: [u8; N],
}

const fn compute_buffer_size(factor: usize) -> usize {
    factor * 1024
}

fn main() {
    const SIZE: usize = compute_buffer_size(4);
    let buffer = Buffer::<SIZE> {
        data: [0; SIZE],
    };
    println!("Buffer size: {} bytes", buffer.data.len());
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[777]||=i(`p`,null,[r(`在这个例子中，`),i(`code`,null,`compute_buffer_size`),r(` 是一个常量函数，它根据传入的 `),i(`code`,null,`factor`),r(` 计算缓冲区的大小。在 `),i(`code`,null,`main`),r(` 函数中，我们使用 `),i(`code`,null,`compute_buffer_size(4)`),r(` 来计算缓冲区大小为 4096 字节，并将其作为泛型参数传递给 `),i(`code`,null,`Buffer`),r(` 结构体。这样，缓冲区的大小在编译期就被确定下来，避免了运行时的计算开销。`)],-1),s[778]||=i(`h5`,{id:`泛型的性能`,tabindex:`-1`},[r(`泛型的性能 `),i(`a`,{class:`header-anchor`,href:`#泛型的性能`,"aria-label":`Permalink to "泛型的性能"`},`​`)],-1),s[779]||=i(`p`,null,`Rust通过在编译时进行泛型代码的单态化来保证效率。单态化是一个通过填充编译时使用的具体类型，将通用的代码转换为特定代码的国城`,-1),s[780]||=i(`p`,null,`编译器所做的工作正好与我们创建泛型函数的步骤相反，编译器寻找所有泛型代码被调用的位置并针对具体类型生成代码。`,-1),s[781]||=i(`p`,null,`我们来看看一个使用标准库中Option枚举的例子:`,-1),s[782]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`#![allow(unused)]
fn main() {
let integer = Some(5);
let float = Some(5.0);
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[783]||=i(`p`,null,[r(`当 Rust 编译这些代码的时候，它会进行单态化。编译器会读取传递给 `),i(`code`,null,`Option<T>`),r(` 的值并发现有两种 `),i(`code`,null,`Option<T>`),r(`：一种对应 `),i(`code`,null,`i32`),r(` 另一种对应 `),i(`code`,null,`f64`),r(`。为此，它会将泛型定义 `),i(`code`,null,`Option<T>`),r(` 展开为 `),i(`code`,null,`Option_i32`),r(` 和 `),i(`code`,null,`Option_f64`),r(`，接着将泛型定义替换为这两个具体的定义。`)],-1),s[784]||=i(`p`,null,`编译器生成的单态化版本的代码看起来像这样：`,-1),s[785]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`enum Option_i32 {
    Some(i32),
    None,
}

enum Option_f64 {
    Some(f64),
    None,
}

fn main() {
    let integer = Option_i32::Some(5);
    let float = Option_f64::Some(5.0);
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[786]||=i(`p`,null,`我们可以使用泛型来编写不重复的代码，而 Rust 将会为每一个实例编译其特定类型的代码。这意味着在使用泛型时没有运行时开销；当代码运行，它的执行效率就跟好像手写每个具体定义的重复代码一样。这个单态化过程正是 Rust 泛型在运行时极其高效的原因。`,-1),s[787]||=i(`h4`,{id:`特征trait`,tabindex:`-1`},[r(`特征Trait `),i(`a`,{class:`header-anchor`,href:`#特征trait`,"aria-label":`Permalink to "特征Trait"`},`​`)],-1),s[788]||=i(`p`,null,`跟接口类似`,-1),s[789]||=i(`p`,null,[r(`在之前的代码中，我们也多次见过特征的使用，例如 `),i(`code`,null,`#[derive(Debug)]`),r(`，它在我们定义的类型(`),i(`code`,null,`struct`),r(`)上自动派生 `),i(`code`,null,`Debug`),r(` 特征，接着可以使用 `),i(`code`,null,`println!("{:?}", x)`),r(` 打印这个类型；再例如：`)],-1),s[790]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn add<T: std::ops::Add<Output = T>>(a:T, b:T) -> T {
    a + b
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[791]||=i(`p`,null,[r(`通过 `),i(`code`,null,`std::ops::Add`),r(` 特征来限制 `),i(`code`,null,`T`),r(`，只有 `),i(`code`,null,`T`),r(` 实现了 `),i(`code`,null,`std::ops::Add`),r(` 才能进行合法的加法操作，毕竟不是所有的类型都能进行相加。`)],-1),s[792]||=i(`p`,null,[r(`这些都说明一个道理，特征定义了`),i(`strong`,null,`一组可以被共享的行为，只要实现了特征，你就能使用这组行为`),r(`。`)],-1),s[793]||=i(`h5`,{id:`定义-1`,tabindex:`-1`},[r(`定义 `),i(`a`,{class:`header-anchor`,href:`#定义-1`,"aria-label":`Permalink to "定义"`},`​`)],-1),s[794]||=i(`p`,null,[r(`如果不同的类型具有相同的行为，那么我们就可以定义一个特征，然后为这些类型实现该特征。`),i(`strong`,null,`定义特征`),r(`是把一些方法组合在一起，目的是定义一个实现某些目标所必需的行为的集合。`)],-1),s[795]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`pub trait Summary {
    fn summarize(&self) -> String;
}

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[796]||=i(`p`,null,[r(`这里使用 `),i(`code`,null,`trait`),r(` 关键字来声明一个特征，`),i(`code`,null,`Summary`),r(` 是特征名。在大括号中定义了该特征的所有方法，在这个例子中是： `),i(`code`,null,`fn summarize(&self) -> String`),r(`。`)],-1),s[797]||=i(`p`,null,[r(`特征只定义行为看起来怎么样，而不对行为具体是怎么样的。因此，我们只定义特征方法的前面，而不进行实现，此时方法签名结尾是`),i(`code`,null,`;`),r(`，而不是一个{}`)],-1),s[798]||=i(`h5`,{id:`为类型实现特征`,tabindex:`-1`},[r(`为类型实现特征 `),i(`a`,{class:`header-anchor`,href:`#为类型实现特征`,"aria-label":`Permalink to "为类型实现特征"`},`​`)],-1),s[799]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`pub trait Summary {
    fn summarize(&self) -> String;
}
pub struct Post {
    pub title: String, // 标题
    pub author: String, // 作者
    pub content: String, // 内容
}

impl Summary for Post {
    fn summarize(&self) -> String {
        format!("文章{}, 作者是{}", self.title, self.author)
    }
}

pub struct Weibo {
    pub username: String,
    pub content: String
}

impl Summary for Weibo {
    fn summarize(&self) -> String {
        format!("{}发表了微博{}", self.username, self.content)
    }
}

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[800]||=i(`p`,null,`实现特征的语法与为结构体、枚举实现方法很像:impl Summary for Post，我们把它称做"为Post类型实现Summary特征"，然后在impl内实现该特征的具体方法`,-1),s[801]||=i(`p`,null,`接下来就是调用特征方法:`,-1),s[802]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn main() {
    let post = Post{title: "Rust语言简介".to_string(),author: "Sunface".to_string(), content: "Rust棒极了!".to_string()};
    let weibo = Weibo{username: "sunface".to_string(),content: "好像微博没Tweet好用".to_string()};

    println!("{}",post.summarize());
    println!("{}",weibo.summarize());
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[803]||=i(`h6`,{id:`特性定义与实现的位置-孤儿法则`,tabindex:`-1`},[i(`strong`,null,`特性定义与实现的位置(孤儿法则)`),r(),i(`a`,{class:`header-anchor`,href:`#特性定义与实现的位置-孤儿法则`,"aria-label":`Permalink to "**特性定义与实现的位置(孤儿法则)**"`},`​`)],-1),s[804]||=i(`p`,null,[r(`上面我们将`),i(`code`,null,`Summary`),r(`定义成了pub公开的，这样，如果他人想要使用我们的 `),i(`code`,null,`Summary`),r(` 特征，则可以引入到他们的包中，然后再进行实现。`)],-1),s[805]||=i(`p`,null,[r(`关于特征实现与定义的位置，`),i(`strong`,null,`如果你想要为类型A实现特征T，那么A或者T至少有一个是在当前作用域中定义的`),r(`，例如我们可以为上面的 `),i(`code`,null,`Post`),r(` 类型实现标准库中的 `),i(`code`,null,`Display`),r(` 特征，这是因为 `),i(`code`,null,`Post`),r(` 类型定义在当前的作用域中。同时，我们也可以在当前包中为 `),i(`code`,null,`String`),r(` 类型实现 `),i(`code`,null,`Summary`),r(` 特征，因为 `),i(`code`,null,`Summary`),r(` 定义在当前作用域中。`)],-1),s[806]||=i(`p`,null,[r(`但是你无法在当前作用域中，为 `),i(`code`,null,`String`),r(` 类型实现 `),i(`code`,null,`Display`),r(` 特征，因为它们俩都定义在标准库中，其定义所在的位置都不在当前作用域，跟你半毛钱关系都没有，看看就行了。`)],-1),s[807]||=i(`p`,null,[r(`该规则被称为`),i(`strong`,null,`孤儿规则`),r(`，可以确保其它人编写的代码不会破坏你的代码，也确保了你不会莫名其妙就破坏了风马牛不相及的代码`)],-1),s[808]||=i(`h6`,{id:`默认实现`,tabindex:`-1`},[r(`默认实现 `),i(`a`,{class:`header-anchor`,href:`#默认实现`,"aria-label":`Permalink to "默认实现"`},`​`)],-1),s[809]||=i(`p`,null,`我们可以在特征中定义具有默认实现的方法，这样其它类型无需再实现该方法，或者也可以选择重载该方法:`,-1),s[810]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`pub trait Summary {
    fn summarize(&self) -> String {
        String::from("(Read more...)")
    }
}

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[811]||=i(`p`,null,`上面为Summary定义了一个默认实现，下面我们编写段代码来测试：`,-1),s[812]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`impl Summary for Post {}

impl Summary for Weibo {
    fn summarize(&self) -> String {
        format!("{}发表了微博{}", self.username, self.content)
    }
}

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[813]||=i(`p`,null,`我们发现post使用了默认实现，而Weibo重载了该方法`,-1),s[814]||=i(`p`,null,`默认实现允许调用相同特征中的其他方法，哪怕这些方法没有默认实现。如此，特征可以提供很多有用的功能而只需要实现指定的一小部分内容。`,-1),s[815]||=i(`h5`,{id:`使用特征作为函数参数`,tabindex:`-1`},[i(`strong`,null,`使用特征作为函数参数`),r(),i(`a`,{class:`header-anchor`,href:`#使用特征作为函数参数`,"aria-label":`Permalink to "**使用特征作为函数参数**"`},`​`)],-1),s[816]||=i(`p`,null,`之前提到，特征仅仅是用来实现方法，有些浪费`,-1),s[817]||=i(`p`,null,`现在来定义一个函数，使用特征作为函数参数：`,-1),s[818]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`pub fn notify(item: &impl Summary) {
    println!("Breaking news! {}", item.summarize());
}

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[819]||=i(`p`,null,[i(`code`,null,`impl Summary `),r(`，意思是实现了Summary特征的 item参数`)],-1),s[820]||=i(`h5`,{id:`特征约束`,tabindex:`-1`},[r(`特征约束 `),i(`a`,{class:`header-anchor`,href:`#特征约束`,"aria-label":`Permalink to "特征约束"`},`​`)],-1),s[821]||=i(`p`,null,`虽然impl Trait这种语法非常好理解，但它实际上知识一个语法糖`,-1),s[822]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`pub fn notify<T: Summary>(item:&T){
println!("Breaking news!{}",item.summarize());
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[823]||=i(`p`,null,[r(`真正完整书写形式如上所示，形如T：Summary被称为`),i(`strong`,null,`特征约束`)],-1),s[824]||=i(`p`,null,[r(`在复杂的场景，特征约束可以让我们拥有更大的灵活性和语法表现能力，例如一个函数接受两个 `),i(`code`,null,`impl Summary`),r(` 的参数：`)],-1),s[825]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`pub fn notify(item1: &impl Summary, item2: &impl Summary) {}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[826]||=i(`p`,null,[r(`如果函数两个参数是不同的类型，那么上面的方法很好，只要这两个类型都实现了 `),i(`code`,null,`Summary`),r(` 特征即可。但是如果我们想要强制函数的两个参数是同一类型呢？上面的语法就无法做到这种限制，此时我们只能使特征约束来实现：`)],-1),s[827]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`pub fn notify<T: Summary>(item1: &T, item2: &T) {}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[828]||=i(`p`,null,[r(`泛型类型 `),i(`code`,null,`T`),r(` 说明了 `),i(`code`,null,`item1`),r(` 和 `),i(`code`,null,`item2`),r(` 必须拥有同样的类型，同时 `),i(`code`,null,`T: Summary`),r(` 说明了 `),i(`code`,null,`T`),r(` 必须实现 `),i(`code`,null,`Summary`),r(` 特征。`)],-1),s[829]||=i(`h6`,{id:`多重约束`,tabindex:`-1`},[r(`多重约束 `),i(`a`,{class:`header-anchor`,href:`#多重约束`,"aria-label":`Permalink to "多重约束"`},`​`)],-1),s[830]||=i(`p`,null,`除了当约束条件，我们还可以指定多个约束条件，例如除了让参数实现Summary特征外 ，还可以让参数实现Display特征以控制它的格式化输出：`,-1),s[831]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`pub fn notify(item: &(impl Summary + Display)) {}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[832]||=i(`p`,null,`除了上述的语法糖形式，还能使用特征约束的形式：`,-1),s[833]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`pub fn notify<T: Summary + Display>(item: &T) {}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[834]||=i(`h6`,{id:`where约束`,tabindex:`-1`},[r(`Where约束 `),i(`a`,{class:`header-anchor`,href:`#where约束`,"aria-label":`Permalink to "Where约束"`},`​`)],-1),s[835]||=i(`p`,null,`当特征约束变得很多时，函数的签名将变得很复杂：`,-1),s[836]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn some_function<T: Display + Clone, U: Clone + Debug>(t: &T, u: &U) -> i32 {}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[837]||=i(`p`,null,[r(`严格来说，上面的例子还是不够复杂，但是我们还是能对其做一些形式上的改进，通过 `),i(`code`,null,`where`),r(`：`)],-1),s[838]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn some_function<T, U>(t: &T, u: &U) -> i32
    where T: Display + Clone,
          U: Clone + Debug
{}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[839]||=i(`h6`,{id:`使用特征约束有条件地实现方法或特征`,tabindex:`-1`},[r(`使用特征约束有条件地实现方法或特征 `),i(`a`,{class:`header-anchor`,href:`#使用特征约束有条件地实现方法或特征`,"aria-label":`Permalink to "使用特征约束有条件地实现方法或特征"`},`​`)],-1),s[840]||=i(`p`,null,`特征约束，可以让我们在指定类型 + 指定特征的条件下去实现方法，例如：`,-1),s[841]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`use std::fmt::Display;

struct Pair<T> {
    x: T,
    y: T,
}

impl<T> Pair<T> {
    fn new(x: T, y: T) -> Self {
        Self {
            x,
            y,
        }
    }
}

impl<T: Display + PartialOrd> Pair<T> {
    fn cmp_display(&self) {
        if self.x >= self.y {
            println!("The largest member is x = {}", self.x);
        } else {
            println!("The largest member is y = {}", self.y);
        }
    }
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[842]||=i(`p`,null,[i(`code`,null,`cmp_display`),r(` 方法，并不是所有的 `),i(`code`,null,`Pair<T>`),r(` 结构体对象都可以拥有，只有 `),i(`code`,null,`T`),r(` 同时实现了 `),i(`code`,null,`Display + PartialOrd`),r(` 的 `),i(`code`,null,`Pair<T>`),r(` 才可以拥有此方法。 该函数可读性会更好，因为泛型参数、参数、返回值都在一起，可以快速的阅读，同时每个泛型参数的特征也在新的代码行中通过`),i(`strong`,null,`特征约束`),r(`进行了约束。`)],-1),s[843]||=i(`p`,null,[i(`strong`,null,`也可以有条件地实现特征`),r(`，例如，标准库为任何实现了 `),i(`code`,null,`Display`),r(` 特征的类型实现了 `),i(`code`,null,`ToString`),r(` 特征：`)],-1),s[844]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`impl<T: Display> ToString for T {
    // --snip--
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[845]||=i(`p`,null,[r(`我们可以对任何实现了 `),i(`code`,null,`Display`),r(` 特征的类型调用由 `),i(`code`,null,`ToString`),r(` 定义的 `),i(`code`,null,`to_string`),r(` 方法。例如，可以将整型转换为对应的 `),i(`code`,null,`String`),r(` 值，因为整型实现了 `),i(`code`,null,`Display`),r(`：`)],-1),s[846]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`let s = 3.to_string();
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[847]||=i(`h5`,{id:`函数返回中的impl-trait`,tabindex:`-1`},[r(`函数返回中的impl Trait `),i(`a`,{class:`header-anchor`,href:`#函数返回中的impl-trait`,"aria-label":`Permalink to "函数返回中的impl Trait"`},`​`)],-1),s[848]||=i(`p`,null,`可以通过impl Trait来说明一个函数返回了一个类型，该类型实现了某个特征：`,-1),s[849]||=i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,null,[i(`code`,null,`fn returns_summarizable() -> impl Summary {
    Weibo {
        username: String::from("sunface"),
        content: String::from(
            "m1 max太厉害了，电脑再也不会卡",
        )
    }
}

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[850]||=i(`p`,null,[r(`因为 `),i(`code`,null,`Weibo`),r(` 实现了 `),i(`code`,null,`Summary`),r(`，因此这里可以用它来作为返回值。要注意的是，虽然我们知道这里是一个 `),i(`code`,null,`Weibo`),r(` 类型，但是对于 `),i(`code`,null,`returns_summarizable`),r(` 的调用者而言，他只知道返回了一个实现了 `),i(`code`,null,`Summary`),r(` 特征的对象，但是并不知道返回了一个 `),i(`code`,null,`Weibo`),r(` 类型。`)],-1),s[851]||=i(`p`,null,[r(`这种 `),i(`code`,null,`impl Trait`),r(` 形式的返回值，在一种场景下非常非常有用，那就是返回的真实类型非常复杂，你不知道该怎么声明时（毕竟 Rust 要求你必须标出所有的类型），此时就可以用 `),i(`code`,null,`impl Trait`),r(` 的方式简单返回。例如，闭包和迭代器就是很复杂，只有编译器才知道那玩意的真实类型，如果让你写出来它们的具体类型，估计内心有一万只草泥马奔腾，好在你可以用 `),i(`code`,null,`impl Iterator`),r(` 来告诉调用者，返回了一个迭代器，因为所有迭代器都会实现 `),i(`code`,null,`Iterator`),r(` 特征。`)],-1),s[852]||=i(`p`,null,`但是这种返回值方式有一个很大的限制：只能有一更具体的类型，例如`,-1),s[853]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn returns_summarizable(switch: bool) -> impl Summary {
    if switch {
        Post {
            title: String::from(
                "Penguins win the Stanley Cup Championship!",
            ),
            author: String::from("Iceburgh"),
            content: String::from(
                "The Pittsburgh Penguins once again are the best \\
                 hockey team in the NHL.",
            ),
        }
    } else {
        Weibo {
            username: String::from("horse_ebooks"),
            content: String::from(
                "of course, as you probably already know, people",
            ),
        }
    }
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[854]||=i(`p`,null,[r(`以上的代码就无法通过编译，因为它返回了两个不同的类型 `),i(`code`,null,`Post`),r(` 和 `),i(`code`,null,`Weibo`),r(`。`)],-1),s[855]||=i(`div`,{class:`language-console`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`console`),i(`pre`,null,[i(`code`,{class:`language-console`},"`if` and `else` have incompatible types\nexpected struct `Post`, found struct `Weibo`\n")]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[856]||=i(`p`,null,[r(`报错提示我们 `),i(`code`,null,`if`),r(` 和 `),i(`code`,null,`else`),r(` 返回了不同的类型。如果想要实现返回不同的类型，需要使用下一章节中的`),i(`a`,{href:`https://course.rs/basic/trait/trait-object.html`,target:`_blank`,rel:`noreferrer`},`特征对象`),r(`。`)],-1),s[857]||=i(`h5`,{id:`通过derive派生特征`,tabindex:`-1`},[r(`通过derive派生特征 `),i(`a`,{class:`header-anchor`,href:`#通过derive派生特征`,"aria-label":`Permalink to "通过derive派生特征"`},`​`)],-1),s[858]||=i(`p`,null,[r(`形如 `),i(`code`,null,`#[derive(Debug)]`),r(` 的代码已经出现了很多次，这种是一种特征派生语法，被 `),i(`code`,null,`derive`),r(` 标记的对象会自动实现对应的默认特征代码，继承相应的功能。`)],-1),s[859]||=i(`p`,null,[r(`例如 `),i(`code`,null,`Debug`),r(` 特征，它有一套自动实现的默认代码，当你给一个结构体标记后，就可以使用 `),i(`code`,null,`println!("{:?}", s)`),r(` 的形式打印该结构体的对象。`)],-1),s[860]||=i(`p`,null,[r(`再如 `),i(`code`,null,`Copy`),r(` 特征，它也有一套自动实现的默认代码，当标记到一个类型上时，可以让这个类型自动实现 `),i(`code`,null,`Copy`),r(` 特征，进而可以调用 `),i(`code`,null,`copy`),r(` 方法，进行自我复制。`)],-1),s[861]||=i(`p`,null,[r(`总之，`),i(`code`,null,`derive`),r(` 派生出来的是 Rust 默认给我们提供的特征，在开发过程中极大的简化了自己手动实现相应特征的需求，当然，如果你有特殊的需求，还可以自己手动重载该实现。`)],-1),s[862]||=i(`p`,null,[r(`详细的 `),i(`code`,null,`derive`),r(` 列表参见`),i(`a`,{href:`https://course.rs/appendix/derive.html`,target:`_blank`,rel:`noreferrer`},`附录-派生特征`),r(`。`)],-1),s[863]||=i(`h5`,{id:`调用方法需要引入特征`,tabindex:`-1`},[r(`调用方法需要引入特征 `),i(`a`,{class:`header-anchor`,href:`#调用方法需要引入特征`,"aria-label":`Permalink to "调用方法需要引入特征"`},`​`)],-1),s[864]||=i(`p`,null,`在一些场景中，使用as关键字做类型转换会有比较大的限制，因为你想要在类型转换上拥有完全的控制，例如处理转换错误，那么你将需要TryInto:`,-1),s[865]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`use std::convert::TryInto;

fn main() {
  let a: i32 = 10;
  let b: u16 = 100;

  let b_ = b.try_into()
            .unwrap();

  if a < b_ {
    println!("Ten is less than one hundred.");
  }
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[866]||=i(`p`,null,[r(`上面代码中引入了 `),i(`code`,null,`std::convert::TryInto`),r(` 特征，但是却没有使用它，可能有些同学会为此困惑，主要原因在于`),i(`strong`,null,`如果你要使用一个特征的方法，那么你需要将该特征引入当前的作用域中`),r(`，我们在上面用到了 `),i(`code`,null,`try_into`),r(` 方法，因此需要引入对应的特征。`)],-1),s[867]||=i(`p`,null,[r(`但是 Rust 又提供了一个非常便利的办法，即把最常用的标准库中的特征通过 `),i(`a`,{href:`https://course.rs/appendix/prelude.html`,target:`_blank`,rel:`noreferrer`},[i(`code`,null,`std::prelude`)]),r(` 模块提前引入到当前作用域中，其中包括了 `),i(`code`,null,`std::convert::TryInto`),r(`，你可以尝试删除第一行的代码 `),i(`code`,null,`use ...`),r(`，看看是否会报错。`)],-1),s[868]||=i(`h4`,{id:`特征对象`,tabindex:`-1`},[r(`特征对象 `),i(`a`,{class:`header-anchor`,href:`#特征对象`,"aria-label":`Permalink to "特征对象"`},`​`)],-1),s[869]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn returns_summarizable(switch: bool) -> impl Summary {
    if switch {
        Post {
           // ...
        }
    } else {
        Weibo {
            // ...
        }
    }
}

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[870]||=i(`p`,null,`Post和Weibo都实现了Summary特征，因此上面的函数识图通过返回impl Summary来返回这两个类型，但是编译器报错了，原因是impl Trait的返回值类型并不支持多种不同类型返回，那我们向返回多种类型，该怎么办`,-1),s[871]||=i(`p`,null,`再来考虑一个问题：现在在做一款游戏，需要将多个对象渲染在屏幕上，这些对象属于不同的类型，存储在列表中，渲染的时候，需要循环该列表并顺序渲染每个对象，在 Rust 中该怎么实现？`,-1),s[872]||=i(`p`,null,`聪明的同学可能已经能想到一个办法，利用枚举：`,-1),s[873]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`#[derive(Debug)]
enum UiObject {
    Button,
    SelectBox,
}

fn main() {
    let objects = [
        UiObject::Button,
        UiObject::SelectBox
    ];

    for o in objects {
        draw(o)
    }
}

fn draw(o: UiObject) {
    println!("{:?}",o);
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[874]||=i(`p`,null,`Bingo，这个确实是一个办法，但是问题来了，如果你的对象集合并不能事先明确地知道呢？或者别人想要实现一个 UI 组件呢？此时枚举中的类型是有些缺少的，是不是还要修改你的代码增加一个枚举成员？`,-1),s[875]||=i(`p`,null,`总之，在编写这个 UI 库时，我们无法知道所有的 UI 对象类型，只知道的是：`,-1),s[876]||=i(`ul`,null,[i(`li`,null,`UI 对象的类型不同`),i(`li`,null,`需要一个统一的类型来处理这些对象，无论是作为函数参数还是作为列表中的一员`),i(`li`,null,[r(`需要对每一个对象调用 `),i(`code`,null,`draw`),r(` 方法`)])],-1),s[877]||=i(`p`,null,[r(`在拥有继承的语言中，可以定义一个名为 `),i(`code`,null,`Component`),r(` 的类，该类上有一个 `),i(`code`,null,`draw`),r(` 方法。其他的类比如 `),i(`code`,null,`Button`),r(`、`),i(`code`,null,`Image`),r(` 和 `),i(`code`,null,`SelectBox`),r(` 会从 `),i(`code`,null,`Component`),r(` 派生并因此继承 `),i(`code`,null,`draw`),r(` 方法。它们各自都可以覆盖 `),i(`code`,null,`draw`),r(` 方法来定义自己的行为，但是框架会把所有这些类型当作是 `),i(`code`,null,`Component`),r(` 的实例，并在其上调用 `),i(`code`,null,`draw`),r(`。不过 Rust 并没有继承，我们得另寻出路。`)],-1),s[878]||=i(`h5`,{id:`特征对象定义`,tabindex:`-1`},[r(`特征对象定义 `),i(`a`,{class:`header-anchor`,href:`#特征对象定义`,"aria-label":`Permalink to "特征对象定义"`},`​`)],-1),s[879]||=i(`p`,null,`在介绍特征对象之前，先来为之前的UI组件定义一个特征:`,-1),s[880]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`pub trait Draw {
    fn draw(&self);
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[881]||=i(`p`,null,`只要组件实现了Draw特征，就可以调用Draw方法来进行渲染。假设有一个Button和SelectBox组件实现了Draw特征`,-1),s[882]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`pub struct Button {
    pub width: u32,
    pub height: u32,
    pub label: String,
}

impl Draw for Button {
    fn draw(&self) {
        // 绘制按钮的代码
    }
}

struct SelectBox {
    width: u32,
    height: u32,
    options: Vec<String>,
}

impl Draw for SelectBox {
    fn draw(&self) {
        // 绘制SelectBox的代码
    }
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[883]||=i(`p`,null,`此时，还需要一个动态数组来存储这些UI对象:`,-1),s[884]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`pub struct Screen {
    pub components: Vec<?>,
}

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[885]||=i(`p`,null,`注意到上面的?，它的意思是我们应该填入什么类型，在之前的内容中，我们找不到那个类型可以填入，但是因为Button和SelectBox都实现了Draw特征，那我们就可以把Draw特征的对象作为类型，填入数组中`,-1),s[886]||=i(`p`,null,`特征对象指向实现了Draw特征的类型的实力，也就是指向了Button和SelectBox的实例，这种映射关系是存储在一张表中，可以在运行时通过特征对象找到具体调用的类型方法`,-1),s[887]||=i(`p`,null,`可以通过&引用或者Box<T>智能指针来创建特征对象`,-1),s[888]||=i(`blockquote`,null,[i(`p`,null,[i(`code`,null,`Box<T>`),r(` 在后面会`),i(`a`,{href:`https://course.rs/advance/smart-pointer/box.html`,target:`_blank`,rel:`noreferrer`},`详细讲解`),r(`，大家现在把它当成一个引用即可，只不过它包裹的值会被强制分配在堆上。`)]),i(`p`,null,[i(`code`,null,`dyn`),r(` 关键字用于表示`),i(`strong`,null,`动态分发`),r(`（dynamic dispatch）的特征对象。它允许你在运行时确定调用哪个方法，而不是在编译时确定。这是 Rust 中实现多态的一种方式，特别是在处理具有共同接口（特征）的不同类型时。`)])],-1),s[889]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`trait Draw {
    fn draw(&self) -> String;
}

impl Draw for u8 {
    fn draw(&self) -> String {
        format!("u8: {}", *self)
    }
}

impl Draw for f64 {
    fn draw(&self) -> String {
        format!("f64: {}", *self)
    }
}

// 若 T 实现了 Draw 特征， 则调用该函数时传入的 Box<T> 可以被隐式转换成函数参数签名中的 Box<dyn Draw>
fn draw1(x: Box<dyn Draw>) {
    // 由于实现了 Deref 特征，Box 智能指针会自动解引用为它所包裹的值，然后调用该值对应的类型上定义的 \`draw\` 方法
    x.draw();
}

fn draw2(x: &dyn Draw) {
    x.draw();
}

fn main() {
    let x = 1.1f64;
    // do_something(&x);
    let y = 8u8;

    // x 和 y 的类型 T 都实现了 \`Draw\` 特征，因为 Box<T> 可以在函数调用时隐式地被转换为特征对象 Box<dyn Draw>
    // 基于 x 的值创建一个 Box<f64> 类型的智能指针，指针指向的数据被放置在了堆上
    draw1(Box::new(x));
    // 基于 y 的值创建一个 Box<u8> 类型的智能指针
    draw1(Box::new(y));
    draw2(&x);
    draw2(&y);
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[890]||=i(`p`,null,`上面代码，有几个非常重要的点：`,-1),s[891]||=i(`ul`,null,[i(`li`,null,[i(`code`,null,`draw1`),r(` 函数的参数是 `),i(`code`,null,`Box<dyn Draw>`),r(` 形式的特征对象，该特征对象是通过 `),i(`code`,null,`Box::new(x)`),r(` 的方式创建的`)]),i(`li`,null,[i(`code`,null,`draw2`),r(` 函数的参数是 `),i(`code`,null,`&dyn Draw`),r(` 形式的特征对象，该特征对象是通过 `),i(`code`,null,`&x`),r(` 的方式创建的`)]),i(`li`,null,[i(`code`,null,`dyn`),r(` 关键字只用在特征对象的类型声明上，在创建时无需使用 `),i(`code`,null,`dyn`)])],-1),s[892]||=i(`p`,null,`因此，可以使用特征对象来代表泛型或具体的类型。`,-1),s[893]||=i(`p`,null,[r(`继续来完善之前的 UI 组件代码，首先来实现 `),i(`code`,null,`Screen`),r(`：`)],-1),s[894]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`pub struct Screen {
    pub components: Vec<Box<dyn Draw>>,
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[895]||=i(`p`,null,`其中存储了一个动态数组，里面的元素类型是Draw特征对象:Box<dyn Draw>，任何实现了Draw特征的类型都可以存放其中`,-1),s[896]||=i(`p`,null,`我们再来为Screen定义run方法，用于将列表中的UI组件渲染到屏幕上`,-1),s[897]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`impl Screen {
    pub fn run(&self) {
        for component in self.components.iter() {
            component.draw();
        }
    }
}

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[898]||=i(`p`,null,`至此，我们就完成了之前的目标：在列表中存储多种不同类型的实力，然后将他们使用同一个方法逐一渲染到屏幕上`,-1),s[899]||=i(`p`,null,`我们再来看看，如果通过泛型实现，会如何：`,-1),s[900]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`pub struct Screen<T: Draw> {
    pub components: Vec<T>,
}

impl<T> Screen<T>
    where T: Draw {
    pub fn run(&self) {
        for component in self.components.iter() {
            component.draw();
        }
    }
}

`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[901]||=i(`p`,null,[r(`上面的Screen的列表中，存储了类型为T的元素，然后再Screen中使用特征约束让T实现了 `),i(`code`,null,`Draw`),r(` 特征，进而可以调用 `),i(`code`,null,`draw`),r(` 方法。`)],-1),s[902]||=i(`p`,null,[r(`但是这种写法限制了 `),i(`code`,null,`Screen`),r(` 实例的 `),i(`code`,null,`Vec<T>`),r(` 中的每个元素必须是 `),i(`code`,null,`Button`),r(` 类型或者全是 `),i(`code`,null,`SelectBox`),r(` 类型。如果只需要同质（相同类型）集合，更倾向于采用泛型+特征约束这种写法，因其实现更清晰，且性能更好(特征对象，需要在运行时从 `),i(`code`,null,`vtable`),r(` 动态查找需要调用的方法)。`)],-1),s[903]||=i(`p`,null,`现在来运行渲染下咱们精心设计的 UI 组件列表：`,-1),s[904]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn main() {
    let screen = Screen {
        components: vec![
            Box::new(SelectBox {
                width: 75,
                height: 10,
                options: vec![
                    String::from("Yes"),
                    String::from("Maybe"),
                    String::from("No")
                ],
            }),
            Box::new(Button {
                width: 50,
                height: 10,
                label: String::from("OK"),
            }),
        ],
    };

    screen.run();
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[905]||=i(`p`,null,[r(`上面使用 `),i(`code`,null,`Box::new(T)`),r(` 的方式来创建了两个 `),i(`code`,null,`Box<dyn Draw>`),r(` 特征对象，如果以后还需要增加一个 UI 组件，那么让该组件实现 `),i(`code`,null,`Draw`),r(` 特征，则可以很轻松的将其渲染在屏幕上，甚至用户可以引入我们的库作为三方库，然后在自己的库中为自己的类型实现 `),i(`code`,null,`Draw`),r(` 特征，然后进行渲染。`)],-1),s[906]||=i(`p`,null,[r(`在动态类型语言中，有一个很重要的概念：`),i(`strong`,null,`鸭子类型`),r(`(`),i(`em`,null,`duck typing`),r(`)，简单来说，就是只关心值长啥样，而不关心它实际是什么。当一个东西走起来像鸭子，叫起来像鸭子，那么它就是一只鸭子，就算它实际上是一个奥特曼，也不重要，我们就当它是鸭子。`)],-1),s[907]||=i(`p`,null,[r(`在上例中，`),i(`code`,null,`Screen`),r(` 在 `),i(`code`,null,`run`),r(` 的时候，我们并不需要知道各个组件的具体类型是什么。它也不检查组件到底是 `),i(`code`,null,`Button`),r(` 还是 `),i(`code`,null,`SelectBox`),r(` 的实例，只要它实现了 `),i(`code`,null,`Draw`),r(` 特征，就能通过 `),i(`code`,null,`Box::new`),r(` 包装成 `),i(`code`,null,`Box<dyn Draw>`),r(` 特征对象，然后被渲染在屏幕上。`)],-1),s[908]||=i(`p`,null,`使用特征对象和 Rust 类型系统来进行类似鸭子类型操作的优势是，无需在运行时检查一个值是否实现了特定方法或者担心在调用时因为值没有实现方法而产生错误。如果值没有实现特征对象所需的特征， 那么 Rust 根本就不会编译这些代码：`,-1),s[909]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn main() {
    let screen = Screen {
        components: vec![
            Box::new(String::from("Hi")),
        ],
    };

    screen.run();
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[910]||=i(`p`,null,[r(`因为 `),i(`code`,null,`String`),r(` 类型没有实现 `),i(`code`,null,`Draw`),r(` 特征，编译器直接就会报错，不会让上述代码运行。如果想要 `),i(`code`,null,`String`),r(` 类型被渲染在屏幕上，那么只需要为其实现 `),i(`code`,null,`Draw`),r(` 特征即可，非常容易。`)],-1),s[911]||=i(`p`,null,[r(`注意 `),i(`code`,null,`dyn`),r(` 不能单独作为特征对象的定义，例如下面的代码编译器会报错，原因是特征对象可以是任意实现了某个特征的类型，编译器在编译期不知道该类型的大小，不同的类型大小是不同的。`)],-1),s[912]||=i(`p`,null,[r(`而 `),i(`code`,null,`&dyn`),r(` 和 `),i(`code`,null,`Box<dyn>`),r(` 在编译期都是已知大小，所以可以用作特征对象的定义。`)],-1),s[913]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`fn draw2(x: dyn Draw) {
    x.draw();
}
10 | fn draw2(x: dyn Draw) {
   |          ^ doesn't have a size known at compile-time
   |
   = help: the trait \`Sized\` is not implemented for \`(dyn Draw + 'static)\`
help: function arguments must have a statically known size, borrowed types always have a known size
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[914]||=i(`h5`,{id:`特征对象的动态分发`,tabindex:`-1`},[r(`特征对象的动态分发 `),i(`a`,{class:`header-anchor`,href:`#特征对象的动态分发`,"aria-label":`Permalink to "特征对象的动态分发"`},`​`)],-1),s[915]||=i(`p`,null,[r(`我们之前学过泛型，是在编译期完成处理的:编译期会为每一个泛型参数对应的具体类型生成一份代码，这种方式是`),i(`strong`,null,`静态分发`),r(`，由于是在编译期完成的，对于运行期性能完全没有影响`)],-1),s[916]||=i(`p`,null,[r(`与静态分发相对应的是`),i(`strong`,null,`动态分发`),r(`，在这种情况下，直到运行时，才能确定需要调用什么方法，之前代码的dyn正是在强调这一"动态特点"`)],-1),s[917]||=i(`p`,null,`当使用特征对象时，Rust必须使用动态分发。编译器无法知晓所有可能用于特征对象代码的类型，所以它也不知道应该调用哪个类型的哪个方法实现。为此，Rust 在运行时使用特征对象中的指针来知晓需要调用哪个方法。动态分发也阻止编译器有选择的内联方法代码，这会相应的禁用一些优化。`,-1),s[918]||=i(`p`,null,[r(`下面这张图很好的解释了静态分发 `),i(`code`,null,`Box<T>`),r(` 和动态分发 `),i(`code`,null,`Box<dyn Trait>`),r(` 的区别：`)],-1),s[919]||=i(`figure`,null,[i(`img`,{src:`https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202504162034162.png`,alt:`image-20250416203409035`,loading:`lazy`,decoding:`async`})],-1),s[920]||=i(`p`,null,`结合上文的内容和这张图可以了解：`,-1),s[921]||=i(`ul`,null,[i(`li`,null,[i(`strong`,null,`特征对象大小不固定`),r(`：这是因为，对于特征 `),i(`code`,null,`Draw`),r(`，类型 `),i(`code`,null,`Button`),r(` 可以实现特征 `),i(`code`,null,`Draw`),r(`，类型 `),i(`code`,null,`SelectBox`),r(` 也可以实现特征 `),i(`code`,null,`Draw`),r(`，因此特征没有固定大小`)]),i(`li`,null,[r(`几乎总是使用特征对象的引用方式，如&dyn Draw、Box<dyn Draw> `),i(`ul`,null,[i(`li`,null,[r(`虽然特征对象没有固定大小，但它的引用类型的大小是固定的，它由两个指针组成（`),i(`code`,null,`ptr`),r(` 和 `),i(`code`,null,`vptr`),r(`），因此占用两个指针大小`)]),i(`li`,null,[r(`一个指针 `),i(`code`,null,`ptr`),r(` 指向实现了特征 `),i(`code`,null,`Draw`),r(` 的具体类型的实例，也就是当作特征 `),i(`code`,null,`Draw`),r(` 来用的类型的实例，比如类型 `),i(`code`,null,`Button`),r(` 的实例、类型 `),i(`code`,null,`SelectBox`),r(` 的实例`)]),i(`li`,null,[r(`另一个指针 `),i(`code`,null,`vptr`),r(` 指向一个虚表 `),i(`code`,null,`vtable`),r(`，`),i(`code`,null,`vtable`),r(` 中保存了类型 `),i(`code`,null,`Button`),r(` 或类型 `),i(`code`,null,`SelectBox`),r(` 的实例对于可以调用的实现于特征 `),i(`code`,null,`Draw`),r(` 的方法。当调用方法时，直接从 `),i(`code`,null,`vtable`),r(` 中找到方法并调用。之所以要使用一个 `),i(`code`,null,`vtable`),r(` 来保存各实例的方法，是因为实现了特征 `),i(`code`,null,`Draw`),r(` 的类型有多种，这些类型拥有的方法各不相同，当将这些类型的实例都当作特征 `),i(`code`,null,`Draw`),r(` 来使用时(此时，它们全都看作是特征 `),i(`code`,null,`Draw`),r(` 类型的实例)，有必要区分这些实例各自有哪些方法可调用`)])])])],-1),s[922]||=i(`p`,null,[r(`简而言之，当类型 `),i(`code`,null,`Button`),r(` 实现了特征 `),i(`code`,null,`Draw`),r(` 时，类型 `),i(`code`,null,`Button`),r(` 的实例对象 `),i(`code`,null,`btn`),r(` 可以当作特征 `),i(`code`,null,`Draw`),r(` 的特征对象类型来使用，`),i(`code`,null,`btn`),r(` 中保存了作为特征对象的数据指针（指向类型 `),i(`code`,null,`Button`),r(` 的实例数据）和行为指针（指向 `),i(`code`,null,`vtable`),r(`）。`)],-1),s[923]||=i(`p`,null,[r(`一定要注意，此时的 `),i(`code`,null,`btn`),r(` 是 `),i(`code`,null,`Draw`),r(` 的特征对象的实例，而不再是具体类型 `),i(`code`,null,`Button`),r(` 的实例，而且 `),i(`code`,null,`btn`),r(` 的 `),i(`code`,null,`vtable`),r(` 只包含了实现自特征 `),i(`code`,null,`Draw`),r(` 的那些方法（比如 `),i(`code`,null,`draw`),r(`），因此 `),i(`code`,null,`btn`),r(` 只能调用实现于特征 `),i(`code`,null,`Draw`),r(` 的 `),i(`code`,null,`draw`),r(` 方法，而不能调用类型 `),i(`code`,null,`Button`),r(` 本身实现的方法和类型 `),i(`code`,null,`Button`),r(` 实现于其他特征的方法。`),i(`strong`,null,[r(`也就是说，`),i(`code`,null,`btn`),r(` 是哪个特征对象的实例，它的 `),i(`code`,null,`vtable`),r(` 中就包含了该特征的方法。`)])],-1),s[924]||=i(`h5`,{id:`self-与-self`,tabindex:`-1`},[r(`Self 与 self `),i(`a`,{class:`header-anchor`,href:`#self-与-self`,"aria-label":`Permalink to "Self 与 self"`},`​`)],-1),s[925]||=i(`p`,null,[r(`在 Rust 中，有两个`),i(`code`,null,`self`),r(`，一个指代当前的实例对象，一个指代特征或者方法类型的别名：`)],-1),s[926]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`trait Draw {
    fn draw(&self) -> Self;
}

#[derive(Clone)]
struct Button;
impl Draw for Button {
    fn draw(&self) -> Self {
        return self.clone()
    }
}

fn main() {
    let button = Button;
    let newb = button.draw();
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[927]||=i(`p`,null,[r(`上述代码中，`),i(`code`,null,`self`),r(`指代的就是当前的实例对象，也就是 `),i(`code`,null,`button.draw()`),r(` 中的 `),i(`code`,null,`button`),r(` 实例，`),i(`code`,null,`Self`),r(` 则指代的是 `),i(`code`,null,`Button`),r(` 类型。`)],-1),s[928]||=i(`p`,null,[r(`当理解了 `),i(`code`,null,`self`),r(` 与 `),i(`code`,null,`Self`),r(` 的区别后，我们再来看看何为对象安全。`)],-1),s[929]||=i(`h5`,{id:`特征对象的限制`,tabindex:`-1`},[r(`特征对象的限制 `),i(`a`,{class:`header-anchor`,href:`#特征对象的限制`,"aria-label":`Permalink to "特征对象的限制"`},`​`)],-1),s[930]||=i(`p`,null,`不是所有特征都能拥有特征对象，只有对象安全的特征才行。当一个特征的所有方法都有如下属性时，它的对象才是安全的：`,-1),s[931]||=i(`ul`,null,[i(`li`,null,[r(`方法的返回类型不能是 `),i(`code`,null,`Self`)]),i(`li`,null,`方法没有任何泛型参数`)],-1),s[932]||=i(`p`,null,[r(`对象安全对于特征对象是必须的，因为一旦有了特征对象，就不再需要知道实现该特征的具体类型是什么了。如果特征方法返回了具体的 `),i(`code`,null,`Self`),r(` 类型，但是特征对象忘记了其真正的类型，那这个 `),i(`code`,null,`Self`),r(` 就非常尴尬，因为没人知道它是谁了。但是对于泛型类型参数来说，当使用特征时其会放入具体的类型参数：此具体类型变成了实现该特征的类型的一部分。而当使用特征对象时其具体类型被抹去了，故而无从得知放入泛型参数类型到底是什么。`)],-1),s[933]||=i(`p`,null,[r(`标准库中的 `),i(`code`,null,`Clone`),r(` 特征就不符合对象安全的要求：`)],-1),s[934]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`pub trait Clone {
    fn clone(&self) -> Self;
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[935]||=i(`p`,null,[r(`因为它的其中一个方法，返回了 `),i(`code`,null,`Self`),r(` 类型，因此它是对象不安全的。`)],-1),s[936]||=i(`p`,null,[i(`code`,null,`String`),r(` 类型实现了 `),i(`code`,null,`Clone`),r(` 特征， `),i(`code`,null,`String`),r(` 实例上调用 `),i(`code`,null,`clone`),r(` 方法时会得到一个 `),i(`code`,null,`String`),r(` 实例。类似的，当调用 `),i(`code`,null,`Vec<T>`),r(` 实例的 `),i(`code`,null,`clone`),r(` 方法会得到一个 `),i(`code`,null,`Vec<T>`),r(` 实例。`),i(`code`,null,`clone`),r(` 的签名需要知道什么类型会代替 `),i(`code`,null,`Self`),r(`，因为这是它的返回值。`)],-1),s[937]||=i(`p`,null,[r(`如果违反了对象安全的规则，编译器会提示你。例如，如果尝试使用之前的 `),i(`code`,null,`Screen`),r(` 结构体来存放实现了 `),i(`code`,null,`Clone`),r(` 特征的类型：`)],-1),s[938]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`pub struct Screen {
    pub components: Vec<Box<dyn Clone>>,
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[939]||=i(`p`,null,`将会得到如下错误：`,-1),s[940]||=i(`div`,{class:`language-text`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`text`),i(`pre`,null,[i(`code`,{class:`language-text`},`error[E0038]: the trait \`std::clone::Clone\` cannot be made into an object
 --> src/lib.rs:2:5
  |
2 |     pub components: Vec<Box<dyn Clone>>,
  |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ the trait \`std::clone::Clone\`
  cannot be made into an object
  |
  = note: the trait cannot require that \`Self : Sized\`
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[941]||=i(`p`,null,`这意味着不能以这种方式使用此特征作为特征对象。`,-1),s[942]||=i(`h5`,{id:`深入了解特征`,tabindex:`-1`},[r(`深入了解特征 `),i(`a`,{class:`header-anchor`,href:`#深入了解特征`,"aria-label":`Permalink to "深入了解特征"`},`​`)],-1),s[943]||=i(`h6`,{id:`关联类型`,tabindex:`-1`},[r(`关联类型 `),i(`a`,{class:`header-anchor`,href:`#关联类型`,"aria-label":`Permalink to "关联类型"`},`​`)],-1),s[944]||=i(`p`,null,`关联类型是在特征定义的语句块中声明一个自定义类型，这样就可以在特征的方法签名中使用该类型：`,-1),s[945]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`pub trait pub trait Iterator {
    type Item;

    fn next(&mut self) -> Option<Self::Item>;
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[946]||=i(`p`,null,`上面是标准库中迭代器特征Iterator，它有一个Item关联类型，用于替代遍历的值的类型`,-1),s[947]||=i(`p`,null,`同时，next也返回了一个Item类型，不过使用了Option枚举进行了包裹，假如迭代器中的值是i32类型，那么调用next方法就将获取到一个Option<i32>的值`,-1),s[948]||=i(`p`,null,[i(`strong`,null,`Self用来指代当前调用者的具体类型，那么Self::Item就用来指代该类型实现中定义的Item类型：`)],-1),s[949]||=i(`div`,{class:`language-rust`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`},`rust`),i(`pre`,null,[i(`code`,{class:`language-rust`},`impl Iterator for Counter {
    type Item = u32;

    fn next(&mut self) -> Option<Self::Item> {
        // --snip--
    }
}

fn main() {
    let c = Counter{..}
    c.next()
}
`)]),i(`button`,{class:`code-block-unfold-btn`})],-1),s[950]||=i(`p`,null,[r(`在上述代码中，我们为Counter类型实现了Iterator特征，变量c是特征Iterator的实力，也是next方法的调用者。结合之前的黑体内容可以得到：对于next方法而言，Self是调用者c的具体类型 `),i(`code`,null,`Counter`),r(`，而 `),i(`code`,null,`Self::Item`),r(` 是 `),i(`code`,null,`Counter`),r(` 中定义的 `),i(`code`,null,`Item`),r(` 类型: `),i(`code`,null,`u32`),r(`。`)],-1)]),"main-header":l(()=>[c(n.$slots,`main-header`)]),"main-header-after":l(()=>[c(n.$slots,`main-header-after`)]),"main-nav":l(()=>[c(n.$slots,`main-nav`)]),"main-content-before":l(()=>[c(n.$slots,`main-content-before`)]),"main-content":l(()=>[c(n.$slots,`main-content`)]),"main-content-after":l(()=>[c(n.$slots,`main-content-after`)]),"main-nav-before":l(()=>[c(n.$slots,`main-nav-before`)]),"main-nav-after":l(()=>[c(n.$slots,`main-nav-after`)]),comment:l(()=>[c(n.$slots,`comment`)]),footer:l(()=>[c(n.$slots,`footer`)]),aside:l(()=>[c(n.$slots,`aside`)]),"aside-custom":l(()=>[c(n.$slots,`aside-custom`)]),default:l(()=>[c(n.$slots,`default`)]),_:3},8,[`frontmatter`])}}};export{p as default};