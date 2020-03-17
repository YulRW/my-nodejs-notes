node

记笔记很重要！！（归类整理）

为什么学Node-->招聘上来讲：具有服务端开发经验更好



Node.js是js运行时环境--》可以解释并执行js代码--》可以用nodejs脱离浏览器来运行！。不是语言也不是库不是框架

1. nodejs里面包含

​	ecmascript（没有dom和bom）

**在node这个js环境中为js提供了一些服务器级别的操作api（可以控制服务器）

​	例如：文件读写

​	网络服务构建

​	网络通信

​	（所以主要做服务端这些事儿



解析js代码---->js引擎 （v8引擎），他是解析执行js代码的机器---是一个虚拟机

**nodejs的作者把v8引擎移植出来做了开发了独立的js运行环境





学nodejs----》学web服务器开发



2. node使用了（特性） 1. 事件驱动
   2. 非阻塞IO模型（简单来讲就是异步操作）
      3. 轻量和高效
3. npm是基于nodejs开发的包管理工具，是世界上最大的开源库生态系统（让开发人员更方便地下载和使用）





### nodejs能做什么？

web服务器后台（php ，java）

命令行工具（git（c），npm（node），hexo（node），在命令行下运行的工具----》用命令来开发）----》是辅助类工具

对于前段开发工程师来讲，接触node最多的是命令行工具，但是自己写的很少，主要是用别人的：webpack，gulp，npm，



要知道一些简单的命令行操作：cd（切换   dir（列出目录  ls（列出目录

mkdir rm 等





##### 一些资源：

深入浅出nodejs---》学node底层最好，，偏理论，几乎没有实战内容，纯底层，帮助理解原理，底层有帮助，需要一些基础。

nodejs权威指南--》api讲解，无业务无实战

学习是个过程--》要慢慢学，多几遍学习 

node入门——》推荐去看  nodebeginner.org

cnodejs 里面有很多不错的资源



##### 这门课学到了什么？



B/S变成模型（浏览器和服务器模型  browser-server  back-end 任何服务端技术这种BS编程模型都是一样的，和语言无关，即模型和概念是一样的

node只是作为我们学习BS编程模型的工具而已，技术只是工具

，只要能解决问题的都是好东西

模块化编程

- require js
- seajs
- @import（‘’）（js不行，以前js必须要通过html页面的标签才能使用
- 在node中可以像@import来引用加载js脚本文件

node常用的api



- 异步编程

- 回调函数（在node里面有很多很多0
  - promise
  - async
  - generator
- express web 开发框架
- es 6 （穿插讲解

##### 学习node不仅可以帮助大家打开服务端黑盒子，还可以帮助学习前端高级内容：vue react angular（有很大帮助！！！





## 2.起步

下载，安装  



执行代码：文件就是.js文件，没有html页面

如何运行js？

用命令工具行--》cd切换过去

或者：在目录那边，用gitbush就可以打开（用什么都行

或者：按住shift+右键也可以打开命令行窗口



1. 定位到相应的目录
2. node + 文件
3. 运行！这个时候已经脱离浏览器运行了



#### 01-没有bom和dom

log（document），log（window 

但是可以有：

- 读写文件（浏览器不能读某个文件的内容，不能生成文件写文件



#### 02-读取文件

//浏览器中的js是没有文件操作能力而node可以

--》buffer是二进制数据

文件中存储的其实是二进制01数据

但为什么看到不是01呢，是因为2转到16进制了。

我们可以通过toString转成字符

cls清屏 （clear



#### 07 简单的http服务 

node可以非常轻松的构建一个web 服务器 ，非常简单

在node中专门提供了一个核心模块：http

http这个模块的职责就是帮忙创建服务器的

tip：命令工具按上箭头可以快速用上一条  命令



服务器设置

服务器启动



服务器启动后不能再使用工具命令行，包括cd之类，以及一些其他操作，而且不能关闭

ctrl+c 关闭服务器  



所有请求路径都是以/开头



代码如果修改了一定要重启服务器才生效



遇到问题：response.write()写出的内容如果是中文那么会返回乱码

思考：请求不同的路径的时候响应不同的结果



现在可以根据发送请求的不同路径而返回字符串，但是还要学如何返回不同的html、json等





res.write()其实比较麻烦，一般很少会用。

推荐直接end的同时发送响应数据

res.end(“hello”)//发送响应数据的同时结束响应

注意，响应内容只能是二进制或者字符串，其他都不行（数字，对象，数组，布尔）



favicon.ico请求：浏览器标签请求



#### 先讲模块 08-

node中有：

- ecmascript
  - 没有dom bom
- 核心模块
- 第三方模块
- 用户自定义模块



##### 核心模块 

在node中为js提供了很多服务器级别的api，这些api很多都包装到了具名的核心模块中了

例如，文件操作的fs核心模块 http服务 的核心模块 path路径操作模块  os操作系统信息模块等等等等



以后只要说这个模块是核心模块，就要想到要使用就要引用

var fs = require('fs')

os:operation system



#### 模块化编程

引入js文件

require是一个方法，他的作用是用来加载模块的

在node中模块有三种

- 具名的核心模块

- 用户自己编写的文件模块（说白了就是js

  require引入时，相对路径必须加./或者../，不然就会被当做核心模块了，后缀名（.js）可以省略

require模型的执行顺序：执行引入的模块后再出来继续执行原有模块

node中没有全局作用域只有模块作用域

单个模块用不了外部文件的属性，外部文件也拿不到他的属性

##### 模块间如何通信？

有时候加载文件的目的不是为了简单地执行代码，更重要的是使用里面的某个成员



--加载与导出

require方法有两个作用，

- 加载文件模块并执行代码
- 拿到被加载文件模块导出的接口对象

每个文件模块（js）都提供了一个exports对象（使require有返回值

exports默认是空对象

我们要做的是把所有对象成员挂载到exports成员对象中

exports.foo = "hello world"



#### ip地址和端口号

计算机只有一个物理网卡

同一个局域网中网卡的地址必须是唯一的

网卡是通过唯一的ip地址来进行定位的

所有需要联网的软件都要网络通信，

服务器可能有多个需要网络通信的软件，所以当其他客户端发送请求时需要知道这个请求对应的是服务器哪个通信软件，所以用端口号来判别



所以：ip地址用来定位计算机

端口号用来定位具体的应用程序

--》所有需要联网通信的软件都必须具有端口号



需要注意的是：响应回去的数据也必须要端口号

在服务器可以通过request.socket.remotePort来拿到客户端的端口号

我们的API已经高度封装，不需要知道IP地址和端口号，只需要发送响应就可以了

（实际上服务器也需要知道客户端的IP地址和端口号才能发送回数据）

客户端的浏览器会自动开一个端口号进行通信

什么时候用80端口？网站部署上线时用80，这样用户就不用手动输入端口号了（浏览器默认加80）



##### 总结

request

端口号

模块



一个项目需要依赖n多文件构成

可以同时开启多个服务，但其端口号不能一样（同一时间不能被同一程序占用

中文乱码问题

---》其实不是中文乱码的问题，是在服务器默认发送的数据，其实是utf8编码的内容

但是浏览器不知道你是utf8编码的内容 

浏览器在不知道服务器响应内容的编码的情况下会按照当前操作系统的默认编码去解析

中文操作系统默认是gdk，所以解析不正确--》乱码

所以要告诉浏览器发送的是utf8

不同类型的content-type 



如何通过一个地址访问html？？？

以前--》通过把html扔进apache然后设置默认打开页面

现在node：要创建apache（因为没有apache的能力）



读文件返回的data默认是二进制文件，可以通过toString转为咱们能识别的字符串

图片就不需要指定编码了，一般常说的编码指的是字符编码，所以把charset=utf-8去掉



url：统一资源定位符---》url最终是定位到一个资源的



总结：结合fs发送文件数据

Content-Type不一样

学习:如何在项目中使用这种变成方式



核心模块是由node提供的一个个具名的模块,他们都有自己特殊的名称标识

什么是require,端口号



之后讲: node中的其他核心模块,

做一个小管理系统:增删改查CRUD

学Express Web 开发框架(可以把通过手动设置路径来访问资源而变得极其简单)



一切先教你框架的都是耍流氓



## day2

要学的:request  response

node中使用模板引擎(最早期是用在服务端)

统一处理静态资源(之前所有资源访问都要ifelse判断....)

服务端渲染

做留言本



提问:

md使用风格:由git推荐使用的"GFM"风格



#### 代码风格



一些代码风格定义:

- javascript standard style
- airbnb javascript style(更加严谨)

通过看别人的代码风格可以很容易知道是新手还是老手

当采用无代码风格时,要注意以下三种情况:

- 当一行代码是以 ( [ `开头的时候,则在前面补上一个; 避免一些错误(反引号是es6新增的字符串包裹方式,叫模板字符串,他支持换行和方便的拼接变量,普通字符串不支持换行的,可以理解为html的pre标签),

无论是有分号还是无分号的风格,一行代码如果是以([`开头的,都建议加上分号



有时候不一定要是分号,也可以加!或者~等奇奇怪怪的符号...



##### 服务器开发

永远是请求/响应

一个请求对应一个响应,如果在请求过程中已经结束响应了,则不能重复发响应

而且没有请求就没有响应

apache软件有个www目录,所有存放在www的都可以通过地址来访问到

return有两个作用:

- 阻止代码继续执行(return res.end('404'))
- 方法返回值

c除了Content-Type 可以指定编码以外,浏览器也可以通过meta标签元数据来声明当前文本的编码格式,浏览器也会识别它(一般描述特征/信息/存储内容的叫元数据)



模仿apache:

- 可以通过url来直接访问目录下的任意资源(通过拼接ip+url来实现)
- 在访问目录时可以显示目录列表



->引出需求:

- 如何将目录的下的文件名全部获取-->fs.readdir

- 如何将文件名替换到html中的指定位置---->模板引擎-->字符串解析替换
  - fs.readFile读取文件并获取html
  - 用data.tostring转换成字符串
  - 用data.replace('@@@','替换的字符串')来替换事先写的占位符



在服务端也可以使用模板引擎

##### 05-使用模板引擎

模板引擎有很多,太多了

常用:art-template不仅可以在浏览器使用,也可以在node中用

她是js模板引擎

npm install art-template -->最简单的安装方式



安装了art-template以后发现node_modules很多东西,因为AT还有一些别的依赖,它本身就是一个包,这个包还依赖于别的包



npm install art-template--->该命令在哪儿执行就会把包下载到哪里,默认会下载到node_modules目录里面,目录不可变.



- art-template教程

模板引擎最早是诞生于服务器,后来才发展到了前端



如何在服务端使用at?

- 下载安装 (用npm)
- 在要使用的文件模块中加载 at
- 查文档,使用模板引擎的api

!引入的模块不需要写什么相对路劲绝对路径,只要写模块名就OK,像加载核心模块那样子



用服务端的模板引擎来渲染叫做 服务端渲染



总结:

- 代码风格
  - javascript standard style
  - airbnb javascript style
- 分号的问题
  - 括号
  - 中括号
  - 反引号
  - 在以上的前面补分号
- 推荐书籍: 《编写可维护的javascript》
  - 不仅是功能,漂亮也是目标
- 在服务端使用模板引擎



服务端和客户端渲染的区别



浏览器:

- 第一次请求拿到的是页面的字符串,针对页面
- 第二次请求是在解析字符串时拿到的动态数据(ajax请求模板),针对接口数据

网站的loading是表示在正在请求

好处:页面显示比较快,但是内容数据就比较慢了



服务端渲染:

一次请求就搞定

- 请求页面------>服务器在那边就处理了,提前渲染好了再返回
- 只用请求一次



==>服务端渲染更快,但是服务端压力更大



客户端好处:能尽早看到页面

而服务端渲染他出来的就是结果了.



如果在源代码中看到了数据内容---->一定是服务端渲染过来的

而如果是客户端渲染,而查看不到数据



京东评价:评价按下一页时没有刷新,一看就是异步的.客服端渲染



商品列表下一页--->刷新了,一定是服务端渲染的



商品列表那么慢,为什么不用异步的?

原因:绝大数网站既有服务端也有客户端渲染

因为考虑SEO问题.----->ajax渲染的数据(异步数据),爬虫爬不到的

- 客户端渲染不利于SEO--->搜索引擎优化,可能就搜不到商品了
- 服务端渲染是可以被爬虫抓取,而客户端渲染很难抓取到
- 所以真正的网站既不是纯异步也不是纯服务端

所以商品列表用服务端渲染是为了SEO搜索引擎优化

而他的商品评论列表为了用户体验,而且也不需要SEO优化,所以用客户端渲染

如果以后爬虫可以抓取到异步的内容,那么可能以后所有网站都是异步的了..

异步体验好,而且开发方式简单

但是其实他里面东西还很多,目前只知道什么时候用客户端渲染什么时候用服务端渲染



以后的社区系统案例会给大家讲



Apache的那种文件列表的基础功能,其实是他本身那个软件已经帮你实现了,他后面的本质也是一坨代码



##### 开始做留言本 



习惯:把所有需要使用的包放在最前面

 简写:

http.createServer(function(req,res){

​	

})

自动把这个函数作为他request事件的函数---简写方式

http.createServer的返回值是server.

所以也可以直接

http.createSever().listen('8080',function...)



推荐文件放在 views中



当你需要操作字符串的时候才用转化成字符串

当返回的文件中里面又有其他文件请求(例如css

因为:.浏览器收到响应后会从上到下解析,若发现了link script img iframe video audio等具有src或者href属性的时候,浏览器会自动对这些静态资源发起新的请求

 页面本身是一个请求,而且页面里面的每一个资源也是请求



-->为了方便地统一处理这些静态资源,所以我们约定所有静态资源存放在public目录中

这样可以好处理,统一处理

可以判断页面请求访问的路径,当为/public/时当做静态资源处理: fs.readfile...然后文件..这样就相当于把public里面的文件开放出去了

如果以 / 开头则是在磁盘根目录开始,以./才是以当前目录开始

   

哪些文件能被通过目录访问哪些不可以,现在就可以对代码进行灵活的控制

而apache很难做到

真正网站有公共的也有非公共的文件



所以!只能通过/来这么做。所有服务端技术都是这么干的

现在变成了url路径-->以后所有的东西都用url地址!

以后开发就是这么干的



当你到了前后端融会贯通了以后,就有那种感觉:为所欲为!!!!!!!!!!!!!!



### 领悟

领悟: 用户访问的url的名字不一定就是返回文件的名字,开发者可以根据用户输入了什么(url),来返回任何自己想返回的东西---->url只是一个标识,而/只不过是方便去分类??而后台想要发送什么样的文件,确实需要/路径来查找自己想返回的文件

前端里面输入的url 或者是点击a标签,实际上是发送了一个请求,请求内容是url:xxx,这个请求是任意的,但是必须要和后台协商好

url相当于请求,而且还可以附带参数,相加自己想加的参数,后台可以从中解析,其实不一定要?key=value&key=value,只不过form表单提交是默认的,我们后台要从中手动拿取





去掉后缀名:美化url--->精简





##### 渲染

 template.render(data.toString(),{

​	comments:comments

})



##### 表单提交:

- 表单中要提交的必须有name属性
- 表单提交分为:
  - 默认的提交行为--->代码不用写,默认发送
  - 异步提交:我们需要自己写一些代码
- action是表单提交的地址-->说白了就是请求提交的地址
- method请求方法



有个核心模块名叫url 里面有个parse()方法



url.parse(url)--->可以变成对象,把url拆成多个部分

可以在返回的对象里面  query获取

pathname就可以获得不包含字符串的路径

url.parse(url,true)-->

获取的对象返回时,query也是一个对象了,里面有url的参数对象



结论:对于我们来说只要判定请求路径是/pinglun时,就认为提交表单的请求过来了



疑问: 每次 url.query的时候会有 **[Object: null prototype]**,导致不能点出query

****URL接口废弃



技术只是工具,领起来就干!解决问题

现在只是见得少

需要一个过程去适应

服务器原来是傻子-------->现在可以解决问题了

服务端都是通用的!API不一样但是道理都一样



获取完问询参数后

---->可以重定向

如何通过服务器让客户端重定向?

- 状态码设置为302----临时重定向  (还有永久重定向301)   res.
- 响应头中通过location告诉客户端(往哪里重定向?)

如果客户端收到服务器的响应的状态码是302,就会自动去响应头去找location ,然后对该地址发出新的请求

所以能看到客户端自动跳转了

res.statusCode = 302;

res.setHeader('location','/')





node从0.12.7 直接到4.0.0

react 直接从 0.xx直接蹦到14.xx 版本帝

笑死我了



**学习:在chrome的控制台里，preserve log 勾选上可以保留之前的请求记录，而不会随着网页跳转而被删除掉（有用，可以看到重定向的过程）





#### day2总结



老师体会：node不适合从来没有接触过服务端的人学习

如果还想要真正的学好服务端，还是老牌的java ，php这些平台

Node不是特别适合入门服务端,但是不代表不强大

Node很厉害.不适合新手的原因是因为比较偏底层,太灵活

java,php好入门因为他们屏蔽了底层



明天学 模块系统,开始express,他是一个第三方框架

后面更多的是关注于业务



node:在任意目录下输入node ,直接回车,就可以用类似于控制台的效果 



在node的控制台里核心模块可以直接使用



这个环境有个术语:REPL read eval print loop





### day3

学习:

- 模块系统
  - 核心模块
  - 第三方模块
  - 自己写的模块
  - 学习加载规则,深入浅出,学习require到底是什么
  - 加载规则以及加载机制
  - 循环加载

- 学习npm,以及package.json

- 学习express-->高度封装了http模块,是第三方web开发框架,像jq一样,目的是提高编码效率,更加专注于业务而不是底层细节->知其所以然

- 做案例:增删改查 

- 数据库:非常简单
  - 学习MongoDB(所有方法都封装好了,很简单)
  - 但是我们采用文件来保存数据,锻炼异步编码
  - 最多半天时间学习
- node项目最少要做两天:登录注册,头像,头像上传,图片截取,前后端全部结合,以及列表,列表分页
- 反馈:
  - 推荐书籍:js高级编程第三版,但是我们现在更多是学习,解决问题,而书是可以更好地系统整理学过的内容,了解一些细节
    - js语言精粹
  - seo资料(搜索引擎的优化:网站运营,SEO
    - SEO运营专员,百度,google,搜狗,等怎么进行优化
  - MD的软件使用
  - 软件开发版本:涉及到软件工程学 x.x.x
    - 0.0.1  0.0.2常见:前面是大版本,中间是一般用于新功能(加入了新特性),后面:提升性能,修复bug,大版本:新增功能比较多,甚至可能去除了某些功能,里面是有理论支持的
    - 一般是客户端软件,技术框架开发者比较理解的多
    - 做网站的版本概念很低,因为网站的目的就是快,一访问就要全部更新 
    - forEach:是es5中的数组遍历函数,jq1版本可以兼容i8,而forEach不能在IE8上使用
      - 用jq获取的div数组是伪数组,伪数组是对象.对象的原型链中没有forEach,所以用jq的each: $('div').each(function(){....})
      - 伪数组转为数组: [].slice.call($('div'))
  - Node 有没有用:对于前端来讲是进阶前端开发工程师必备的技能
    - 屌丝最容易逆袭的职业
    - 见得东西多了你就不怕了
    - 为所欲为
  - 路径概念:
    - 网页中所有的路径都是url路径,不是文件路径
  - a加载b: require:
    - 执行b中的代码
    - 同时得到b中导出的接口对象:exports
    - 这叫循环引用(加载...如果出现了这种情况,代表你思路有问题



复习:

网站开发模型:

- 我们服务器就是黑盒子,哑巴

- 通过写代码让他更智能

- 网站开发就是一个设计的过程,按照我自己设计好的套路供用户使用

  php定制性没有node强,而且node比php更轻量

  数据库和技术没什么关系,node也可以操作mysql数据库

node既是js环境,还可以充当服务器,而apache是集成环境.但可定制性不太好

php+apache只是默认帮你封装好了很多底层细节操作

node特性:比较偏底层,很多东西需要代码亲自来写,所以学框架.

在node中开启的服务器默认是黑盒子,他不像php中无论是代码还是网页都可以通过web url访问

php很难做到自定义url,比如其他url名.----------->路由的概念.

总之出现在浏览器地址栏上面的,就是url地址.在node中可以很方便的自定义这个url地址,想要他叫什么就叫什么.可以美化url,node可以把url处理的很漂亮---->所有东西都是可以自定义!!!!,自定义非常灵活

我们node要做的:设计好url地址,设计好规则,让用户按照你的规则来访问使用

----->总之,更人性化

手动模拟url.parse的底层: split,灵活使用



301:永久重定向-->浏览器会记住,如果从a.com跳到b.com,那么再次访问a.com时浏览器直接访问b.com而不再向a.com发送请求

而302是临时重定向,浏览器不会记住

例子:新浪



### 模块系统

项目内容:

- 增删查改
- 登录
- 注册
- 头像
  - 服务端图片
  - 水印
  - 图片水印
- 找回密码
- 密码修改



使用Node编写应用程序主要就是在使用:

- ESMA语言
  - 和浏览器不一样,没有Node中的BOMDOM
- 核心模块
  - 文件操作fs
  - http服务
  - url模块
  - path路径处理模块
  - os操作系统信息模块

- 第三方模块
  - art-template
  - 必须通过npm下载使用
- 咱们自己写的模块
  - 自己创建的文件



##### 概念: CommonJS模块规范

js本身不支持模块化

什么是模块化?

- 文件作用域
- 通信规则
  - 加载 require
  - 导出 exports
- 但是以前的js做不到.



但是在node中的js可以做到.有模块系统,他是模块作用域,不是全局作用域

- 模块作用域
- 用require方法来加载模块
- 用exports接口对象来导出模块



为什么直接对exports直接赋值不行?如何require只得到一个方法而不是对象?

=>用module.exports = function 就可以

结论:如果一个模块需要直接导出成员,而非挂载的方式,则必须用module.exports

原理: 

exports:

- node中是模块作用域,默认是文件中所有的成员只在当前文件模块有效
- 对于希望被其他模块访问的成员,我们就需要把这些公开的成员都挂载到exports接口对象中
  - 导出多个成员:必须在对象中
  - 导出单个成员:拿到的就是函数,字符串,如果写了多个的话,后面会覆盖前面
  - (```是可以引入代码块)

```javascript
exports.a = 123
exports.b = 123
exports.foo = function(){
    console.log('hello World')
}
```

```javascript
module.exports = 'hello'
```



当然 module.exports也可以导出多个成员:

```javascript
module.exports = {
    a : 123,
    b : 456,
    add : function(){
        console.log(a)
    },
}
```



模块原理:

exports 是module.exports的一个引用

每个模块都默认有一个module对象,module对象里面有一个exports对象,负责暴露数据

每个模块后面都隐式地有一个return module



那为什么只导出一个成员就必须要用module.exports?

原因: 对象的赋值,赋值的是地址引用.

```javascript
var obj;
var obj1 = obj;
obj.foo = 123;
console.log(obj1.foo);	//123
```



所以,把module.exports和exports类比于obj和obj1

当exports被直接赋值时

例如

```javascript
exports = function(){
    console.log('hello')
}
exports = 'hello'
exports = {}
```

以上重新赋值的几种情况都会修改exports对象指向的地方,导致最后return module.exports 最后返回的不是exports



所以给exports赋值的时候应该使用成员变量赋值的方法:

```javascript
exports.foo = '123'
exports.a = function(){
    console.log(123)
}
```



#### day3上午复习

myslice自定义slice函数

Node 是一个比肩java php的一个平台



#### require方法的加载规则

- 优先从缓存加载：多次引用相同的js文件时，只会在第一次引用时执行，之后的几次require只会得到接口，而不会执行。为了提高模块加载效率

- 判断模块标识（require参数）：

  - 核心模块：其本质也是文件，但其已经被编译到二进制文件中了，我们只需要加载名字就好了
  - 第三方模块：都必须要通过npm下载，然后用require（’包名‘）的方式来加载使用。不可能有第三方包的名字和核心模块是一样的。
    - 先找核心模块
    - 找不到核心模块则找当前文件所属目录的node_modules 目录
    - 再找node_modules/xxxx目录
    - 找node_modules/xxxx/package.json文件
    - 找node_modules/xxxxx/package.json文件中的main属性
    - main属性中记录了xxxx的入口模块，既真正加载的是main属性中的模块
    - 然后加载使用这个第三方包（最终加载的还是文件）
    - 如果没有package.json或者里面的main属性没有或者是错误的，那么会默认加载index.js
    - 如果没有index.js也没有，以上所有一个条件都不成立，那么会到上一级的node_modules文件夹进行查找
    - 如果上上级还没有则继续查找，直到当前磁盘根目录还找不到，则报错 can not find module xxx（找NM有点像作用域和原型链）
    - 注意：一个项目有且只有一个node_modules，一般放在根目录中
  - 自己的模块
  - 有几种形式：
    - ./ 当前路径（常用）
    - ../ 上一个路径（常用）
    - /xxx 几乎不用。其表示当前文件模块所属磁盘的根路径
    - d:/a/foo.js 几乎不用。绝对路径
  - 模块加载机制：
    - 优先从缓存加载
    - 核心模块
    - 路径形式模块
    - 第三方模块

  **明白的越底层，写代码才越放心**

  **知其然知其所以然**

  如果想要了解更多底层细节，可以自行参考《深入浅出Nodejs》中的模块系统章节

  包描述文件：package.json

#### 包说明文件

npm

- node package manager包管理器

- package.json（包说明文件）：便于看出来装了哪些第三方包，这个项目依赖了哪些包，项目名字，项目作者、

- 有些安装包时后面有指令--save：npm install jquery --save。这个时候安装时会在安装包的同时把安装的包的名字信息写入package.json中的dependencies

- 建议每一个项目都要有package.json的文件

- 正确的使用方式：可以通过 npm init 自动初始化出来。不用手动创建

- npm install 直接把package.json里面的所有依赖包自动安装

- npm网站

  - 找别人的包
  - 自己发包

- npm命令行工具

  - npm也有版本这个概念：npm --version
  - 升级npm ： npm install --global npm 

- 常用命令：

  - npm init   npm初始化，建立package.json 
    - npm init -y    快速向导，快速生成
  - npm install：从package.json中的依赖中自动安装包
    - npm install 包名：只下载包
    - npm install 包名 --save（-S）：下载包并保存依赖项到package.json
  - npm uninstall （un）包名：只删除包，如果有依赖项在package，依然保存
    - npm uninstall --save （un -S）包名：删除的同时也会把依赖信息也去除
  - npm help ：查看使用帮助
  - npm 命令 --help ：某命令的使用帮助

- 解决npm被墙问题：npm存储包文件的服务器在国外，速度慢。

- cnpm：淘宝的开发团队把npm在国内做了一个备份

  ```javascript
  npm install --global cnpm
  ```

  接下来把npm替换成cnpm就好

  --global表示安装到全局，而非当前目录

  如果不想安装cnpm又想使用淘宝的服务器来下载

```javascript
npm install jquery --registry=http://registry.npm.taobao.org
```

每次输入很麻烦，所以可以加到配置文件中

```javascript
npm config set registry https://registry.npm.taobao.org
//可以通过查看 npm 的配置信息
npm config list
```

只要经过上面命令的配置，则你以后所有的npm install 都会默认通过淘宝的服务器来下载

npm：package-lock.json的出现和作用



#### Express

原生的http在某些方面不足以应对我们的开发需求，所以我们要使用框架来加快开发效率，让我们代码更高度统一

在Node中有很多Web开发框架，我们以学习Express为主

作者：tj，node开发中十分活跃的作者，很牛逼，写了很多框架，写什么火什么，他以前搞设计。

顺带补充Node作者：ryan dahl 数学博士 现在搞go语言了 现在不搞node了



express内置了很多便捷东西：让代码平行化

把get请求简化

自动进行中文乱码的处理

自动进行404处理



静态资源文件处理：express方便：公开指定目录

只要这样做了，你就可以直接通过/public/xxx/的方式访问public里面所有静态资源

app.use('/public/',express.static('./public/'))



#### day3复习

#### day4反馈+复习

模块中的/ 和文件路径中的/ 

- 文件操作中的路劲可以省略 ./ ：fs.readFile('data/a.txt')
  - 如果读文件不用 ./data 而是用 /data 那么会在C盘的根目录下寻找（要么省略./要么加./，而不能直接/）
- 模块标识：require（“package”），在模块加载中相对路径不能省略 ./



#### Express



服务器自动重启修改的代码：

- 使用一个第三方工具 nodemon 来解决我们频繁修改服务器的问题
  - nodemon是一个基于nodejs开发的第三方命令行工具，使用时需要独立安装
  - npm install --global nodemon
  - 使用：node app.js ---> nodemon app.js，可以监视文件变化，自动重启服务器
  - 所有需要--global来安装的包都可以在任意目录中执行

什么叫路由？

- 路由器：通过一根线链接网络，分发到多个端口下，交换机也是这个道理
- 而在web中的路由是：每个路径相当于一个端口，只有分发了端口才能请求这个端口，比如 / 、/about 、 /router
- 路由其实就是一张表，表里面有映射关系： 百度 4楼15号   腾讯 6楼23号---》当请求/的时候执行一个函数，当请求/about时候请求另一个函数
- 当假设函数文件非常多非常大时，我们可以新建一个router.js文件，把所有端口放到router.js文件中：

```javascript
app
	.get('/login',函数)
	.post('/register',函数)
	.get('/index',函数)
	.post('/test',函数)
```

上面的映射表就相当于路由

静态资源开放：

当以 /public/开头的时候，去 ./public/目录中查找对应的资源

app.use('./pubilc/',express.static('./public/'))

当省略第一个参数时，是默认‘/’的url路径下去请求（自己想的）

自己思考：其实，前面的路径是url的请求路径，可以自己定义，后面的是真正在文件夹中访问资源的文件路径，这个路径下必须有资源，而请求路径下可以自定义，前面的参数只是个标识（url可以看做是一个标识）



在express中配置使用art-template模板引擎

- 安装
- 配置
  - express-art-template
  - app.engine('art',require('express-art-template'))：第一个参数表示当渲染以.art结尾的文件时用art-template模板引擎
  - express-art-template 是专门用来在Express中把art-template整合到Express中
  - express-art-template依赖了art-template这个包
  - Express为Response 相应对象提供了一个方法：render
  - render方法默认是不可以使用的，但是如果配置了模板引擎就可以使用了
  - res.render('模板名'，模板数据)
  - 默认第一个参数不能写路径，默认去views目录查找该模板文件
  - Express有一个约定，开发人员把所有视图文件都放在views文件目录中
  - 如果想要修改默认的views目录，可以：app.set('views',render函数的默认路径)
  - 重定向 ： res.redirect('/')
- 使用
  - 用post怎么使用？
    - 获取post请求体数据：
      - 结合第三方插件：因为Express默认没有提供给你获取post请求数据的api，要用middleware
      - 安装:npm install body-parser
      - 配置：app.use(bodyParser.urlencoded({extended: false}))：注意，只要加入这个配置，则在req请求对象上会多出来一个属性：body，也就是说可以直接通过req.body来获取表单POST请求体数据了
      - 凡是在URL地址栏输入地址，那么就永远是GET请求
      - res.send 和res.redirect会自动结束相应
    - 处理
    - 发送响应

CRUD

数据持久化：先不搞数据库，先放在文件里

读文件：

```javascript
fs.readFile('./db.json','utf8',(err,data)=>{
})
//中间的是可选参数utf8，添加了这个就不用data.toString()了，数据不再是二进制而是utf形式
```



#### day4上午总结

演讲

- 最重要的是说服
- 找痛点 why
- 解决方案 what
- 怎么去使用 how
- where 在哪儿用
- when 什么时候用
- ppt是最能帮助人去整理你的思路、脑图、markdown
- 结构思维，很重要-》 看结构化思维的书，归类，整理，自己去照着以上问题去走，会发现很多博客，老师都这样讲，这就是套路，不会演讲没关系，把以上几个点找到就行了



复习：

- 文件路径中的/ 和模块标识中的/
- nodemon
- express
  - art-template 模板引擎的配置
  - body-parser 解析表达POST请求体
  - 以后从node开始到课程结束，几乎都是第三方的东西
- 技术只是解决问题的一种手段，一种工具而已
  - 学习第三方的东西不要纠结
  - 先以解决问题为主
- 详解了express 静态服务API
  - app.use('/public/',express.static('./public/'))





继续CRUD

先做路由设计

| 请求方法 | 请求路径         | get请求参数 | post参数                 | 备注             |
| :------: | ---------------- | ----------- | ------------------------ | ---------------- |
|   GET    | /students        |             |                          | 渲染首页         |
|   GET    | /students/new    |             |                          | 渲染添加学生页面 |
|   POST   | /students/new    |             | name ,age,gender,hobbies | 处理添加学生请求 |
|   GET    | /students/edit   | id          |                          | 渲染编辑页面     |
|   POST   | /students/edit   |             | id,age,gender,hobbies    | 处理编辑请求     |
|   GET    | /students/delete | id          |                          | 处理删除请求     |

把APP里面的路由提取出来，划分成模块，提高可维护性



但是，如果modules.exports = app，然后在router中require(app)，但是这样就只能在router中执行，不是我们想要的。我们希望app始终作为我们的入口

所以，第二种方法是：我们自己封装一个函数 

```javascript
modules.exports = function(app){
    app.get('/',(req,res)=>{
        
    })
    
}

//app.js

var router = require('./router')

router(app);
```

但是这样也不方便，express提供了一种更好的方式，专门用来包装路由的

- 创建一个路由容器： var router = express.Router()
- 把路由都挂载到Router路由容器中：router.get('/index',(req,res)=>{...})
- 把router导出：modules.exports = router
- 把路由容器挂载到app服务中：app.use(router)



app.js:启动模块

router.js:路由模块

每一个模块都有对应的职责，划分模块的目的就是增强代码的可维护性，提升开发效率

职责清晰-》很好找	

配置art-template 和body-parser一定在app.use(router)之前

添加学生页面：

- 获取数据
- 处理
  - 数据持久化：把数据保存在db.json中
  - 先读取出来，转成对象
  - 往对象中push数据
  - 把对象转为字符串
  - 写入文件
- 响应



发现：获取index需要读取文件，添加学生需要读取文件，这种重复的操作我们可以把它提取出来，封装成一个API，每当需要使用时直接调用就可以了

**设计操作数据的API文件模块**（重要）===》是一种编程方式

小问题：回调函数的封装

思考：

```javascript
exports.find = function (){
	fs.readFile(dbPath,function(err,data){
        
    })
}
```

这个时候我们就该思考，这个API如何有返回值？因为fs是异步调用，他的回调函数是异步的，如果在里面用return的话，return的将不是调用该find函数所return的东西，因为在调用find函数中调用fs函数后将会异步执行，而主执行将会结束

#### 封装异步API

自己思考：

```javascript
function fn(f){
    setTimeout(function(){
        var data = 'hello';
        f(data);
    },3000)
}

fn(function(data){
    console.log(data);	//hello
})
```

通过这样的方法可以获取到调用异步函数后的结果



老师：如果有一个方法，需要得到这个方法的异步操作结果

比如

```javascript
setTimeout(function(){
    var data = 'hello';
},1000)
```

其中data就是异步操作的结果

则必须通过回调函数来获取----》函数也是一种数据类型，它也是可以通过参数进行传递的

当写成：

```javascript
function fn(callback){
    setTimeout(function(){
        console.log()
    },1000)
}

fn(function(data){
	console.log(data);  
})
```

其中fn()里面的function就是回调函数，想当于在函数fn开头加了这么一段代码：

```javascript
function fn(callback){
    var callback = function(data){ console.log(data); }	//加了这么一段代码
    
    setTimeout(function(){
        var data = 'hello';
        console.log()
    },1000)
}

fn(function(data){
	console.log(data);  
})
```

也就是说，当真正执行了setTimeout里面的函数时，如果调用了callback函数，那么就可以调用执行fn的回调函数callback，从而达成传递异步结果的目的

```javascript
function fn(callback){
    var callback = function(data){ console.log(data); }	//加了这么一段代码
    
    setTimeout(function(){
        var data = 'hello';
        callback(data)
    },1000)
}

fn(function(data){
	console.log(data);  //hello 
})
```



老师：回调函数目的：获取异步操作的结果

会晕：写的回调函数写的少，写的太少了



做项目思想发展：模块化、封装化



分清楚业务和数据处理

```javascript
router.get('/students/new',function(req,res){
    Student.find(function(err,students){
        if(err){
            return res.status(500).send('Server error.')//这个是业务
        }
    })
})
```

其中里面的return res.status(500).send('xxx')是业务：有具体交互了，跟用户去反馈了，

而在student.js里面的 API的err是对数据的处理，只关心数据

需要知道：id是唯一的，就算被删除了也不能再次有人使用它，像身份证号，如果有人死了那么不能再有人用一模一样的身份证号	 	



异步编程：这种编程方式才是Node里面最难最核心的部分（基础）

之后还有promise

ger生成既函数（ES6）

async

但是，异步编程是核心，一切都以他为基础，这是异步编程的基础

普通方法发return ，而这个不一样。

这叫上层传递，下层调用。这种思路是需要转变的，没有大量的代码是学不会的



代码样式：

对不同的代码分段

在最后一行闪一个空格

路由处理和路由处理之间中间也闪个空行

不会没事，模仿老师，学习不就是模仿吗，像学画画，一开始就是模仿别人的

美术靠自己动手。学画画，写代码都是一样，要自己打出来，不动手怎么会呀





按照你期望的对应方式来封装上层的API



ES6中的一个数组方法： Array.find

需要接收一个函数作为参数

```javascript
var stu = students.find(function (item){
    return item.id === student.id
})
```

当某个遍历项符合item.id===student.id条件的时候，find会终止遍历，同时返回条件项，记住，一定要return一个真假条件（一个布尔值）

如果要用一个对象写入到另一个对象，需要用循环：

```javascript
for(var key in student){
    stu[key] = student[key]
}
```

这就是遍历拷贝对象



高度封装：

老师没有讲，但是我自己测试过了，可以在student.js里面声明函数，然后可以在导出的模块方法里面使用就好了，而无需导出模块方法中要调用的函数a

```javascript
function a(){
    console.log('调用')
}
exports.test = function(){
    a();	//输出 调用
}
```



#### 编辑

遇到的问题：

从req.query.id中点出的id会是String类型





以前：下层封装，上层调用

现在：上层封装，下层调用

上层：调用者其实就是上层



input表单隐藏域的使用

用于存放一些不需要被用户看到但是需要存放在服务端的数据



找数组下标（ES6）：

students.findIndex 专门用来根据条件来查找元素的下标

var deleteId = students.findindex(function(item){

​	return item.id === parseInt(id);

})

从数组中删除元素： students.splice(一，二)

参数一：下标x

参数二：删除几个



先写调用，因为调用是定义函数

再去封装



做这个demo的目标练习就是封装api以及强调练习模块化开发思维



写的步骤

- 设计API，先把大体结构写出来。先把有几个API写出来，然后再填充细节

自己编写的步骤：

- 处理模板：自己拿或者自己做
- 配置开放静态资源
- 配置模板引擎
- 简单路由：/students 渲染静态页出来
- 路由设计
- 提取路由模块
- 由于接下来的一系列的业务操作都需要处理文件数据，所以我们都需要封装students.js
- 先写好studentsjs文件结构
  - 查询所有学生列表api
  - findbyid
  - save
  - updata
  - delete
- 关注细节，实现具体功能
  - 通过路由会收到请求
  - 接受请求中的数据（get、post）
  - 调用数据操作API，处理数据
  - 根据操作结果，给客户端发送响应（渲染页面/重定向等）
- 业务功能顺序
  - 列表
  - 添加
  - 编辑
  - 删除

模块化思想

​	模块如何划分

- 模块职责要单一！！！
  - app配置服务相关的
  - router配置路由相关的，不管数据
  - students只管数据
- 这样可以尽量减少他们之间的依赖，提高可维护性
- vue、angular、react
- 为什么先学node？目的不全在于服务端，最重要的是也非常有利于学习前端三大框架，是非常有利于的



### day5

##### 今天内容：

- Express
- MongoDB
- 项目
  - 一天半时间

##### 反馈

- 如何选中多个内容（出现多个光标）
  - ctrl+alt+上/下
  - ctrl+d：可以把临近的单词选中（ctrl是跳单词，shift是选中）
- 函数既是一种数据类型，可以当做参数传递，也可以当做方法的返回值
  - js的函数是一等功民，很多人喜欢js，因为他的函数太牛逼了，太灵活了，无所不能，可以写的非常巧妙
  - 什么时候把函数作为参数？：
    - 一般情况下把函数作为参数的目的就是为了获取函数内部的异步操作结果
    - 底层原理：js事件循环
    - 单线程
    - 因为node也是v8引擎，执行机制都一样
    - 自己思考：又回调函数又联想到了闭包，因为当同步操作完了之后函数已经结束了，但是函数里面的异步操作并没有完成，而且异步操作里面依然可以调用函数里面的变量，这就表明这个函数它虽然同步是执行完成了，但是它并没有消失。里面的变量什么的依然可以访问到
    - 哪些属于异步操作？：
      - setTImeout
      - readFile
      - writeFile
      - ajax
      - 这种情况必须通过回调函数
      - 自己博客想法：可以先把回调函数直接写到函数里，先不作为参数，然后再说这样子也可以执行，但是这样的话回调函数的写法就固定了不够灵活，所以我们把函数提取出来了，作为一个参数传进去，这样的话就可以自定义回调函数，非常灵活
- 封装ajax
- 现在的模块化cmd？：不是，js天生不支持模块化，像require、exports这些js都没有，是node才有
  - 实际上在浏览器里面像node的这种模块化方法也能来用，但是需要使用第三方库
    - require.js，第三方库
    - sea.js 第三方库
  - PHP天生就支持，而JS不支持，为什么JS天生支持？语言的问题
  - 好处：模块作用域、可以使用API来进行文件文件之间的依赖加载
  - 如果不用模块化加载，在浏览器只能用script标签来引用加载，那么还必须考虑加载的顺序问题。如果支持，那么如果a依赖b依赖c，那么直接require a就可以了，a里面会require b，b里面会require c，简单说就是引入a后不用再去知道a依赖了什么
  - Node里面给了一个术语：commonJS，是个定义，是个模块化规范。JS的模块化可以在多个环境下去用，不同的模块化它的规范也不一样
    - NodeJS是 commonJS
    - requireJS 术语是 AMD
    - seaJS 是 CMD （国人开发）
    - 无论是commonjs、amd、cmd、umd、es6 modules官方规范，他们都是为了解决js不支持模块化问题，可能使用起来稍有点不一样
    - commonJS、amd、cmd都是民间搞出来的
    - es 是官方规范定义
    - 官方看民间都在搞，开发人员为了在不同的环境使用不同的模块化解决方案，所以es在2015年发布了es2016官方标准，其中包含了官方对js模块化的支持，也就是说现在天生就支持了。里面有一套api
    - 但是虽然标准已经发布了，但是很多js运行环境还不支持、
    - node也是只在8.5版本之后才对ES6 modules进行支持
    - 后面学vue时会去学习
    - less编译器 > css
    - es6 > 编译器 > es5
    - 目前的前端情况都是使用很多新技术，然后利用编译器工具打包可以在低版本浏览器运行
    - 使用新技术的目的就是为了提高编程的效率，增加可维护性
- 陆金所：前端架构师，常在知乎
- 达芬奇画鸡蛋精神
  - 《使徒行者》 三哥
  - 《反黑》陈小春
    - 卧底 8年卧底生涯
    - 文职工作
    - 不会电脑，报了电脑班
    - 吃饭都在看书
    - 以前看电视剧就看一个乐呵，现在就想知道道理呀，真理啊这样的一些东西
    - 学习 -》吃饭也是看书
    - 边角余料
- var router = require('./router') 这一步不是加载router.js吗，为什么还要执行app.use...
  - 这里涉及到一个中间件的概念
  - app.use不仅仅用来做静态资源
- package-lock.json：
  - 在npm5以前不会有这个文件，5以后才有这个文件
  - 当你安装包的时候，会自动生成，或更新lock文件
  - 新版本的npm不需要再--save，也会自动在package里面加入dep依赖项
  - 当安装了express后，express它本身还有其他第三方依赖，可在express的package.json里查看到
  - 执行npm时，他会先去下载express，下载后会分析express的依赖项，而依赖项还可能有依赖项
  - dependencies-》依赖 ，devDependencies-》开发依赖
  - 一个个下载然后分析依赖。是一个很麻烦很慢的一件事，，而lock里面保存了node_modules里面整个包的依赖树
    - 好处：如果把nodemodules删除了，这个时候如果有lock的话，再去npm i 时，会比没有lock文件要快，因为这个文件它保存了所有npm的安装依赖包（package-lock.json文件会保存node_modules文件中的所有依赖包的信息（版本、下载地址））
    - 另一个功能：从文件来看，有一个lock
      - 这个lock是用来锁定版本的（锁定安装依赖的包的版本）
      - 比如jquery是^1.11.1，这个^表示最高可以升级到2
      - 但是如果再用npm i 他会升级jq到新版本
      - 所以lock文件的另一个作用是锁定版本号，升级新版
- 拖堂效率不高
  - 想让大家多学点东西
- find 和findindex
  - ES6对数组新增了很多方法
    - find：接收一个方法作为参数，方法内部返回一个条件，符合该条件的元素会作为find方法的返回值
    - 自己做find方法
      - 问题：如何获取调用该方法的变量？：比如，[1,2,3].myFind()调用，如何在myFInd中获取调用他的[1,2,3]??-->傻了，原来可以用this
- express 处理 404：需要通过中间件来配置
  - 只需要在自己的路由之后增加一个：app.use(function (req,res){})
  - 所有未处理的请求路径都会跑到这里

MongoDB数据库

- Nosql：非关系型数据库 not only sql，不用学习sql语法，他会提供对应的api，尤其是和js，node，结合的非常好

- 关系型数据库和非关系型：

  表就是关系，表具有结构

  或者说表与表之间存在关系

  像传统的mysql，oricle，scleserver，DBtwo都是关系型

  所有的关系型数据库都要通过sql语言来操作

  所有的关系型数据库在操作之前都需要设计表结构

  而且数据表支持约束：唯一的、主键、默认值、非空，这些约束是为了保证数据的完整性

- 非关系型数据库可以说非常灵活，也可以在里面加入关系，有些非关系型数据库就是key-value对，没有表的概念

- 但是mongoDB是长得最像关系型数据库的非关系型数据库

  - 数据库-》数据库
  - 数据表-》集合（数组）
  - 表记录-》文档对象

- mongoDB不需要设计表结构

- 也就是说可以任意往里面存数据，没有结构性一说，非常灵活



上午总结：

学的都懂，但是关键是你有没有去做。不是有句话吗？道理听了很多遍，最后该怎么样还是该怎么样。不要这样，要有点行动

回调函数

- 异步编程
- 如果需要得到一个函数内部异步操作的结果，这个时候必须通过回调函数来处理

find、findIndex、forEach

- 数组的遍历方法，都是对函数作为参数的运用，用了回调函数但是并不是异步的
  - 尝试自己封装一下array的原型方法
    - map
    - reduce
    - every
    - some
    - includes
- lock文件的作用
  - 保存树状依赖信息
  - 锁定版本
- js模块化
  - CommonJS：Node的标准定义
  - 浏览器的
    - AMD：requireJS
    - CMD：seaJS
  - 他们的目标都一样，都是为了解决JS不支持模块化的问题
  - 官方在ES6中增加了官方支持
- mongoDB数据库



开始学习：MongoDB数据库

- 启动和关闭数据库
  - 启动：控制台-》 mongod，mongodb默认使用执行命令所处盘符根目录下的data/db作为自己的数据存储目录。所以在第一次执行该命令前自己手动新建一个data/db，然后在要安装的盘符下的cmd输入mongod就可以启动
  - 关闭：直接ctrl + c，或者关闭cmd
- 修改数据存储路径
  - 如果想要修改默认的数据存储目录，可以：mongod --dbpath=数据存储目录路径
- 连接和退出数据库：
  - 链接：再打开一个cmd，输入mongo，他默认你链接本机的数据库
  - 退出：输入exit
- 基本命令：
  - `show dbs` 
    - 查看数据库列表，一开始的admin和local是系统级别的数据库，不用动它
  - `db` 查看当前操作的数据库，一开始会弹出test数据库，但是不会再show dbs里面显示，因为test里面还没有数据，等在往test里面插入数据后就会自动创建出来了
  - `use 数据库名称`
    - 切换到指定的数据库，如果没有，则新建
  - `db.students.insertOne({"name":"Jack"})`其实这就是JS
  - `show collections `显示当前db的所有集合，里面就有students
  - `db.students.find()`查询所有students的数据，他里面会有个`"_id":ObjectId("xxxxxxx")`这个就像mysql的id差不多，不过它不是123456罢了，不过是不会重复的。可以认为students就是个数组，存数据可以认为是存一个对象，所以前端学成本非常低
- 通过NodeJS来链接操作Mongodb数据库



在Node中如何操作mongodb数据库

- 使用官方的mongodb包来操作：`npm i mongodb` ，真正开发不用它，因为比较麻烦。比较原生
- 使用第三方 mongoose 来操作mongodb数据库：mongoose是基于mongodb的包做了一个再次的封装
- 在用Node设计mongodb时，一切都是动态的，都是很灵活的



day5-11-重新说明mongodb数据库概念

- 数据库
- 数据表（集合）
- 文档

```javascript
{
    qq:{
        {
            user:[	//集合（表）是以数组形式呈现
                {},	//里面每一项都是一个对象，称为文档（表记录），而文档里面想存什么存什么，没有结构性
                {},
                
            ],
            products:[
                
            ]
        }
    },
    taobao:{
        
    },
    baidu:{
        
    }
}
```

Mongodb非常灵活，不需要像MySQL一样先创建数据库、表、设计表结构

- 在这里只需要：当你需要插入数据的时候，只需要指定往哪个数据库的哪个集合中插入哪个数据操作就可以了
- 一切都由mongodb帮你自动完成建库建表这件事儿



MongoDB 开始

- 1。链接数据库---》链接数据库时指定的数据库不一定要存在，当没有时并且在插入了第一条数据时他就会自动创建

- 虽然很灵活，但是也不要乱存结构，mongodb可以用代码设计集合结构

  - var Schema = mongoose.Schema

  - ```javascript
    //字段名称就是表结构的属性名称，值就是js的类型值
    //2.设计文档结构
    var blogSchema = new Schema({
        title:String,
        author:String，
        date:{type:Date,default:Date.now}//->这里比较严谨，有个默认值
    })
    ```

  - 约束：保证数据的完整性，不要有脏数据，让数据保持统一

  - ```javascript
    var userSchema = new Schema({
        username:{
            type:String,
            required:true,//设置约束：必须有username，不能为空
        },
        password:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            
        }
    })
    ```

  - 3.->将文档结构发布为模型（可以用了）

  - ```javascript
    var User = mongoose.model('User',userSchema);
    ```

  - mongoose.model方法就是讲一个架构发布为model

    - 第一个参数：传入一个大写名词单数字符串，表示数据库名称，mongoose会自动将大写字符串生成小写复数的集合名称
    - 第二个参数：架构Schema
    - 返回：模型构造函数

  - 当我们有了这个模型构造函数时就可以对User集合中的数据为所欲为了：增删改查

    - 插入文档：

    - ```javascript
      var admin = new User({
          username:'yhs',
          password:'123',
          email:'123@qq.com'
      })
      
      //保存数据
      admin.save(function(err,res){
          if(err){
              log(err)
          }
          log(res)	//res是刚刚插入的数据
      });
      ```

    - 查询数据

    - ```javascript
      User.find(function(err,res){
          if(err){
          	log('查询失败')    
          }
          log(ret)
      })
      //按条件查：--》得到的是个数组
      User.find({
          username:'yhs'
      },function(err,res){
          if(err){
              log(err)
          }
          log(res)
      })
      
      //findOne->只找匹配的第一个-->得到的是个对象,如果没条件，那就查第一个
      User.findOne({
          username:'yhs'
      },function(err,res){
         ... 
      })
      
      
      ```

    - 删除数据

    - ```javascript
      //根据条件删除，有多少个符合条件就删除多少个 
      User.remove({
          username:'yx'
      },function(err,res){
          ...
      })
      ```

    - 其他：根据条件删除一个：User.findOneAndRemove(条件,[options],[callback])

    - 更新编辑数据
    
    - ```javascript
      User.findByIdAndUpdate('id...',{
          password:123,
      },function(err,res){
      })
      ```
    
    - 根据其他的来更新...

把CRUD的文件操作该为数据库操作

- 设计表时：如果gender只能是0,1，那么可以:

  - ```javascript
    gender:{
        type:Number,
        enum:[0,1],	//限定了必须是0、1
        default:0
    }
    ```

- replace的使用：支持字符串或者正则：`acba.replace(/a/g,'')`  

Node怎么操作Mysql？（也非常简单）

- 安装：用来链接操作mysql数据库的包：mysql `npm install --save mysql`

- ```javascript
  //创建连接
  var connection = mysql.createConnection({
      host:'localhost',
      user:'root',
      password:123,
      database:'my_db'
  })
  //连接数据库
  connection.connect();
  
  //执行数据操作--》很强大，所有的增删改查都在这儿写
  connection.query('SELECT 1 + 1 AS	//sql语句 solution',function(err,res,fields){
      if(err){
          throw err;	//抛出异常，阻止程序往后执行
      }
      log('the solution is:',res[0].solution)
  })
  
  //关闭连接
  connection.end();
  
  
  ```

  

- sql语句：

  - SELECT * FROM \`users\`  
  - INSERT INTO users() VALUES(NULL,"admin","123456")
    - null表示自动生成
  - 不建议写 *
  - 名字建议加``(反引号)





### day5总结

express里面也有类似于支持xxxx（php登录注册的插件）的插件

晚上补充：

- promise

- 中间件



总结：

- mongodb 的数据存储结构
  - 数据库
  - 集合（表）
  - 文档（表记录）
- mongodb官方有一个mongodb的包用来操作数据库，但是这个包比较麻烦，所以不使用
- mongoose：真正在开发使用的是mongoose使用的第三方包，是基于官方的mongodb的官方包做了进一步的封装，提高开发效率，操作更方便 
  - 查才是最繁琐的，如果要查age大于18怎么查？？有指定的api，大于叫dollorDT，小于叫dollorLT
  - 掌握增删改查就可以了（CRUD）
- 把之前的CRUD改为mongodb的版本
- 使用node操作mysql数据库
  - 数据库和平台没有关系，任何数据库node都可以操作





promise(这个技术和异步编程有关)：

- 写异步遇到的问题：回调地域（callback hell）

  - ```javascript
    var fs = require('fs');
    
    fs.readFile('./data/a.txt',function(err,data){
        if(err){
            return console.log(err);
        }
        console.log(data);
    })
    ```

  - 有时候做测试的时候会这样：`throw err` 

    - 表示抛出异常，两个作用：
      - 阻止程序的执行
      - 把错误消息打印到控制台
      - 这是JS的一个语法和Node没关系

  - 自己思考：老师问三个文件谁快，但是JS不是单线程的吗？不是还是应该一个一个读取吗？

    - 自己测试

  - 如果有三个一起的异步，你决定不了谁先完成任务（读取a，b，c三个文件）

    - 那么我如何保证这三个任务的完成顺序（读取完a再读b再读c）？很简单，我们可以通过回调嵌套来保证回调顺序：a读取完的回调函数里放读取b，读取b的回调函数里放读取c
      - 自己思考：感觉老师举得例子不太好，可以举读取数据和写数据的顺序，这样举例子更贴合实际
    - 总结：异步APi无法保证执行顺序，如果要保证顺序必须要进行回调嵌套。
    - 思考：有些技术和有些东西必须自己学习了一段时间或者自己有了一些足够的经验才能够懂，不会也不用太着急。当我以前看promise时还不是很懂还不知道具体做什么的，然后逐渐我学了nodejs，使用多了很多异步的回调函数api，接触多了后自己也学了回调函数，在自己用回调函数的过程中又渐渐地体会到了回调函数多层嵌套所带来的问题和烦恼，所以便深刻地理解了promise所带来的作用

  - 回调嵌套带来的问题——>回调地域：嵌套太深代码太丑，很难维护，很恶心

- 如何解决回调地域？为了解决回调地域嵌套的问题，所以ES6 中新增了一个api，就叫promise，它是一个构造函数，一个api

  - promise的英文是承诺、保证

  - 可以把promise看做是一个容器，里面存放着将要执行的异步任务，这个异步任务分为三种状态：

    - pending：默认正在进行状态，然后pending后只会变成两种状态，如果变为其中一种状态了那么就不能变为其他状态了（状态不能改变，只能变成其中一种）
      - Resolved：成功
      - rejected：失败

  - 如何得到promise容器？

    - ES6新增了一个api promise，promise是一个构造函数

  - 实现

    - ```javascript
      //1. 创建promise容器（给别人一个承诺）
      
      //把异步任务写在里面（放入promise容器中）
      //promise容器一旦创建，就开始执行里面的代码（new一下后里面的function会自动执行）
      //承诺不是异步的，承诺里面的任务是异步的
      
      console.log(1)
      new Promise(function(){
          console.log(2)
          fs.readFile('./a.txt','utf8',function(err,data){
              if(err){
                  //承诺容器中的任务失败了
              }else{
                  //承诺容器中的任务成功了
                  console.log(3)
              }
          })
      })	
      console.log(4)
      //输出： 1,2,4,3
      //以上的写法其实没有用promise的功能，只不过是演示一遍而已
      ```

    - 重要：承诺本身不是异步！他的回调函数function也不是异步，是function里面的操作往往是异步的（经测试）

    - promise功能实现：

      - ```javascript
        //起名为p1，表示我们封装好了一个异步任务
        var p1 = new Promise(function(resolve,rejecte){
        
            fs.readFile('./a.txt','utf8',function(err,data){
                if(err){
                    //承诺容器中的任务失败了
                   	
                    //把容器的pending状态变为rejected
                    //调用reject就相当于调用then方法的第2个function
                    reject(err)
                    
                }else{
                    //承诺容器中的任务成功了
        			
                    //把容器的pending状态变为resolved
                    //这里定义的resolve方法实际上是then方法传递的那个function
                    resolve(data)
                }
            })
        })	
        //p1就是那个承诺，当p1成功了，然后(then)做指定的操作
        //p1实例这么来用：
        //then方法接收的funciton就是容器中的resolve函数
        p1.then(function(data){	//这个function就是resolve
            
        },function(err){		//这个function就是reject函数
            console.log(err);
            
        })
        
        //现在还没有解决回调的问题，现在只是解决了语法的部分
        ```

      - 自己的理解：是在then里面把成功和失败的函数传进去了，实际上在promise里面的异步操作里面调用？

      - 开始解决嵌套问题：

      - ```javascript
        var p1 = new Promise(function(resolve,rejecte){
           fs.readFile('./a.txt','utf8',function(err,data){
                if(err){
                    reject(err)
                    
                }else{
                    resolve(data)
                }
            })
        })	
        
        var p2 = new Promise(function(resolve,rejecte){
           fs.readFile('./b.txt','utf8',function(err,data){
                if(err){
                    reject(err)
                    
                }else{
                    resolve(data)
                }
            })
        })
        
        var p3 = new Promise(function(resolve,rejecte){
           fs.readFile('./c.txt','utf8',function(err,data){
                if(err){
                    reject(err)
                    
                }else{
                    resolve(data)
                }
            })
        })
        
        p1.
        	then(function(data){	//当p1读取成功的时候
            	return p2;			//当前结果return的就可以再后面then中的function中接收到
            //真正有用的是，我们可以return一个promise对象
            //当return 一个promise对象时，后续的then中的方法第一个参数会作为p2的resolve，第二个方法是p2的reject
            //这叫做then的链式调用
        	},function(err){		
            	console.log(err);
            
        	})
        ```

      - 用promise可以异步调用，链式编程（也是编程的一种方式）

      - 现在的问题：读取a，b，c都是写死的，代码都是高度重复的

  - promise的封装：

    - 封装是一种编程方式，本身没有额外的新功能

    - ```javascript
      var fs = require('fs');
      
      function pReadFile(filePath){
          return new Promise(function(resolve,reject){
              fs.readFile(filePath,'utf8'function(err,data){
                  if(err){
                      reject(err);
                  }
                  resolve(data)
              })
          })
      }
      
      preadFile('./a.txt')
      	.then(function(data){
          	console.log('success--A');
          	return preadFile('./b.txt');
      	},function(err){
          	console.log('error');
      	})
      	.then(function(data){
          	console.log('success--B')
      	})
      ```

    - 链式最好是折下来，很漂亮，优雅

- promise应用场景：

  - 业务达不到很复杂的话很难用好，只有业务真正复杂了才能真正用好promise

  - 分类、信息展示：

    - 比如用户的职业编辑问题，一开始加载页面后要加载用户的信息，然后又要加载对应的职业表，根据职业表和用户信息来综合才能渲染页面

      - 把job变成了数字，然后建了个job对应表，是为了解决冗余问题，查了用户信息后又要根据职业信息表来查职业信息

      - ```javascript
        {
            users:[
                {
                	id:1,
                	username:'yx',
                	age:20,
                	job:1
                }
            ],
            jobs:[
                {
                    id:1,
                    name:'学生'
                },
                {
                    id:2,
                    name:'老师'
                },
                {
                    id:3,
                    name:'司机'
                },
                {
                    id:4,
                    name:'画家'
                }
            ]
        }
        ```

      - 老师：json-server --version

        - json-server --watch data.json
        - 开启一个数据接口服务
        - hs -c-l -0 通过http启动起来
        - document.querySelector('#user_from').innerHtml = htmlStr

      - 根据案例：一定要拿到两份数据才能渲染模板，必须嵌套，这是嵌套的场景

      - jq的ajax已经支持promise的api方式了

      - ```javascript
        var data = {};	//想要获取第一个获取到的数据，需要再外部声明一个变量对象，然后存入变量对象中
        $.get(xxxxx)
        	.then(function(user){
            	console.log(user);
            	data.user = user;
            	return $.get(xxxx);
        	})
        	.then(function(jobs){
            	console.log(jobs);
            	data.jobs = jobs;
        	})
        ```

- 封装promise版本的ajax方法

  - 也可以做一个既支持callback又支持promise的方法：只需要在参数里面加上callback，然后在结果中调用callback就好，和promise不冲突
    - 记得加上`callback && callback(JSON.parse(oReq.responseText))` (巧妙)
  - 当我们前后端都通的时候，我们可以达到非常灵活的程度
  - 当需要多个接口的信息并且要一并处理时，promise就发挥出它的强大威力了
  
- promise数据库操作例子（mongoose所有的api都支持promise）

  - 用户注册：

    - 判断用户是否存在

    - 如果存在，结束注册

    - 如果不存在，注册（保存一条用户信息）

    - 代码：

      - ```javascript
        User.findOne({
            	username:'admin'
        	})
        	,then(function(user){
            	if(user){
                	console.log('用户已经存在')
            	}else{
                	return new User({
                    	username:'123',
                    	password:'123',
                    	email:'asdas'
                	}).save()
            	}
        	})
        	.then(function(ret){
            	
        	})
        ```

    - 既然学了，那么以后不管是node还是浏览器，哪怕只是一个请求，都要尽量使用，尽量多写

    - 这个promise的基本使用

      - 可以参考阮一峰的promise文章（在他的书es6中）
      - 还有一个人写了es6书，叫尼古拉斯 · 泽卡斯也是js高级编程第三版的作者
      - 学生提问：promise不会影响性能吗，就像oop过度封装一样影响处理性能
        - 目前来讲不用考虑性能问题



#### day6

讲什么：

- 多人社区案例

反馈：没有知识点相关的

- 老师：看反馈让我热泪盈眶的

复习

- mongodb数据库
  - 灵活
  - 不用设计数据表
  - 业务的改动不需要关心数据表结构，非常灵活
  - 招聘岗位： DBA 、架构师 这些级别的工程师都需要掌握这项技能
    - 设计
    - 维护
    - 分布式计算
    - 这些随着项目的不断积累，使用的经验也会越多，这些就是更高级的纬度了
- mongoose
  - 第三方包：开发包的公司是大名鼎鼎的WordPress，是开源博客系统，php做的。也可以说是内容管理系统。很多社区、论坛，类似小米的miui什么的，其实不用写，稍微改一改就行了。很少有公司会重新开发，都是用成熟的框架来做。wordpress的开发团队非常出名，mongoose的作者就是wordpress的项目开发团队
  - 设计Schema
  - 发布model（得到模型构造函数）
    - 查询 find
    - 增加 new -> save
    - 修改 updata
    - 删除 delete
- promise
  - 解决回调地域问题
  - 回调函数中套了回调函数
  - Promise（es6中新增的语法api）
  - 容器
    - 异步任务（pending）
    - resolve
    - reject
  - then 方法获取容器的结果（成功、失败）
  - then方法支持链式调用
  - 可以在then方法中返回promise对象，然后在后面的then方法中获取上一个then返回的promise对象的状态结果
  - 参考阮一峰es6文档
  - 学vue之前，会带大家把es6里面常用的语法讲一讲，可以学一点用一点，如果会了就用，只要语法不报错那就是对的

 

### 案例开始

- 新建文件夹，`npm init -y` `git init`，里面建`README.md` 项目说明文件，在github上面就会把它显示出来

  - `.gitignore` git的忽略文件，忽略配置项，哪些东西不需要提交到github上，可以进行忽略

- `npm i express mongoose`  

- 创建文件夹 `public` 公开资源文件夹

  - `css`
  - `img`
  - `js`

- 新建`app.js` 入口文件

- 启动服务

  - ```javascript
    var express = require('express');
    
    var app = express();
    
    //把public和node_modules开放出来
    app.use('/public',express.static('./public/'));
    app.user('/node_modules',express.static('./node_modules'));
    ```

  - 讲个知识点：官网有有个东西叫：

    - ```javascript
      app.use('/static',express.static(path.join(__dirname,'public')));
      ```

      - 什么意思：里面的path是个核心模块 需要`var path = require('path')` ，加了join这段代码后其实效果是一样的只不过把我们的相对路径改为了绝对路径。这里涉及到了两个知识点
        - path，路径操作模块（它是核心模块）：
          - path.basename('c:/a/b/c/index.js')-->index.js（获取给定路径当中的文件名部分）
            - path.basename('c:/a/b/c/index.js','.js')-->index
          - `path.dirname('c:/a/b/c/index.js')` 获取一个路径当中的目录部分-->c:/a/b/c
          - `path.extname('c:/a/b/c/index.js')`-->js
          - `path.isAbsolute()`判断是否是绝对路径
          - `path.parse('C:/a/b/c/d')`-->相当于上面的api的集合结果，转换成对象形式
          - `path.join`
            - 反斜杠在字符串中要用两个反斜杠表示
            - 这个api是为了解决自己手动拼接路径所带来的小问题，而join这个可以帮你处理，多/少/都可以解决
            - 当你自己用路径拼接的时候，不要自己去手动拼
        - __dirname文件路径，Node中的其他成员
          - 在每个模块中，除了`require`、`exports`等模块相关api之外，还有两个特殊的成员
            - `__dirname` 用来获取当前文件模块所属目录的绝对路径
            - `filename` 用来获取当前文件的绝对路径（包含这个文件名）
            - 以上两个成员都是可以动态获取的，可以随着文件位置改变而改变
          - 作用：重要！
            - 在引入的模块里面的相对路径，其实不是引入模块的路径，而是启动的终端的路径，是执行node命令所处的终端路径，而我们一般都是在文件的所属目录里面执行的文件，而如果 `node foo/index.js` 这样的话，就有问题了
            - 文件操作的路径不是相对于所属文件，而是相对于cmd执行node 的所处的路径
            - 为什么要这样设计?这样设计是有原因的，如果开发命令行工具，会利用这个特性来开发命令行工具。这不是错误，node就是这样设计的，文件操作路径中，相对路径设计的就是相对于执行Node命令所处的路径
            - 在文件操作中，相对路径是不可靠的，因为在Node中文件操作的路径被设计为相对于执行node命令所处的路径，为了解决这个问题，只需要把相对路径变为绝对路径就可以了
            - 我们这里就可以使用\_\_dirname或者 __filename来帮我们解决文件所属路径的问题
            - 在拼接路径的过程中，为了避免手动拼接带来的一些低级错误，所以推荐多使用`path.join` 方法
            - 推荐以后凡是文件操作的路径都用动态的绝对路径
            - 补充：模块中的路径表示和这儿的路径没关系，不受影响，他就是相对于文件模块的

- art-template中的include-extend-block语法

  - 在做案例时会遇到有公共的头部和公共的底部这样的情况
  - 自己思考：归纳一些网站的编程和制作模式
  - 因为art-template是操作字符串而不是dom什么的，所以这个模板引擎在js中或者node中都能用
  - 在node中有很多第三方模板引擎可以用，而不只是art-template
    - ejs
    - jade（改名叫pug）：简洁
    - handlebars
    - nunjucks
    - 不同模板引擎支持的模板语法都不太一样
  - 公共部分（子模板）用法：`{{ include './header.html'}}` 自己想：有点像组件
  - 模板继承：解决复用页面，但是只用改几处的问题，比如要用的页面里面有公共部分又有html（自己理解：就是在组件里面用组件，然后加上类似小程序的插槽功能？slot标签？）
    - 使用：在layout.html文件中中用{{ block  ‘content’}}	\<h1>默认内容\<h1>{{ /block }}
    - 在index.html文件中选择填坑：`{{extend './layout'}} {{block 'content'}}  ...  {{/block}}` 
    - 为了能有自己的样式和自己的脚本，可以再留几个坑
  
- 对于不是要渲染的页面而是组件的话，可以命名用下划线开头来区别

- 思考：老师还没说明的问题：

  - package里面的开发依赖和依赖的区别
  - promise的抓取错误信息的使用
  - express的中间件

- 自己：文档按照一定的顺序结构

  - 目录结构

    - app.js->项目入口文件
    - controllers
    - models->存储使用mongoose 设计的数据模型
    - node_modules 第三方包
    - package.json ->包描述文件
    - package-lock.json->第三方包版本锁定文件（npm5以后才有
    - public->公共静态资源
    - README.md->项目说明文档
    - routes->如果业务比较多，代码量大，最好把路由按照业务分类存储到routes目录中
    - router.js->简单一点把所有路由都放到这个文件
    - views->存储视图目录

  - 模板页

  - 路由设计

    - | 路径      | 方法 | `get`参数 | `post` 参数               | 是否需要登录 | 备注         |
      | --------- | ---- | --------- | ------------------------- | ------------ | ------------ |
      | /         | GET  |           |                           |              | 首页         |
      | /register | GET  |           |                           |              | 渲染注册页面 |
      | /register | POST |           | email、nickname、password |              | 处理注册请求 |
      | /login    | GET  |           |                           |              | 渲染登录页面 |
      | /login    | POST |           | email、password           |              | 处理登录请求 |
      | /logout   | GET  |           |                           |              | 处理退出请求 |
      |           |      |           |                           |              |              |

      - 知识点：登录依靠cookie-session来保存状态，所以注销时不需要参数，只要把session清了就可以了

  - 模型设计：

    - 有多个集合，所以要设计多个数据模型，且都放在models文件夹里

      - 博客：topic.js

      - 用户：user.js

      - 评论：comment.js

        - ```javascript
          var mongoose = require('mongoose');
          
          //因为有多个集合文件，肯定不能连接一次数据库，但是先放到这儿
          mongoose.connect('mongodb://localhost/test',{userMongoClient:true})
          
          var Schema = mongoose.Schema;
          //设计Schema(设计表)
          var userSchema = new Schema({
              email:{
                  type:String,
                  required:true,
                   
              },
              nickname:{
                  type:String,
                  required:true,
                  
              },
              password:{
                  type:String,
                  required:true
              },
              created_time:{
                  type:Date,
                  default:Date.now //他是个方法，获取时间戳
              },
              last_modified_time:{
                  type:Date,
                  default:Date.now
              },
              avatar:{
                  type:String,
                  default:'/public/img/avatar-default.png'
              },
              bio:{
                  type:String,
                  default:''	//保证数据的完整性:虽然它不是必须的，但是也是要设置默认有的
              },
              gender:{
                  type:Number,
                 	enum:[-1,0,1],
                  default:-1
              },
              birthday:{
                  type:Date
              },
              status:{
                  type:Number,
                  //0 没有权限限制
                  //1 不可以评论
                  //2 不可以登录
                  enum:[1,2],
                  default:0	
              }
            //这个数据模型还少了约束，比如，必须是邮箱，不是邮箱格式不能填写等约束(在模型上达到限制的目的，不能传脏数据进去)
          	//1.email格式
              //2.nickname 长度，特殊字符
              //3.password 长度，特殊字符
              //
              
          })
          //发布模型
          module.exports = mongoose.model('User',userSchema);
          ```

        - 知识点：

          - 为什么不用Date.now()加括号调用：因为new传进去的对象他会自动计算值，而如果写了Date.now()的话相当于写死了时间戳，如果不调用那么会在真正传入对象时系统自动计算时间。当你去new这个Schema的时候，会发现Date.now是一个方法，他就来调这个方法，方法的返回值就是default的值

  - 功能实现

- 思考：现在用node做后台的问题是，路由是写在后台的，不像vue一样路由是在前端的，这个是不是不符合前后端分离的原则？我改如何去写前端和后台？是像之前做vue项目那样前端全部是前端，后台只用写数据接口就可以了是吗（思考前后端编程模式）

- 对于小项目，只用放router.js里面就好，但是有些大项目，需要对路由进行分类：

  - 注册、登录、退出相关的放到session.js里面
  - 新建话题、删除话题、修改话题、查看话题列表放入topic.js里面，
  - 思考：如果router要再分类，该如何分类

- 老师：

  - 代码测试完毕后要及时删除console.log，不要留它了
  - 一定要在挂载路由之前配置中间件





### day6下午

win10第二个桌面：win+tab

路由：

- ```javascript
  router.post('/register',function(req,res){
      //1. 获取表达提交的数据
      //	req.body
      //2. 操作数据库
     	//	判断该用户是否存在
      // 	如果存在，则不允许注册
      //  如果不存在，注册新建用户
      //3. 发送响应
      
      //先查邮箱，再查昵称是否存在——-->是顺序关系而不应该是并列查找关系
      User.findOne({
          //错误写法并列查找
          //email:body.email,
          //nickname:body.nickname
          
          $or:[
              {email:body.email},
              {nickname:body.nickname}
          ]
      },function(err,data){
          if(err){
              return res.status(500).json({
                  err_code:500,
                  message:''
              });
          }
          if(data){
              return res.status(200).json({
                  err_code:1,
                  message:'email or nickname aleary exists.'
              })
          }
          new User(body).save(function(err,user){
              if(err){
                  return res.status(500).json({
                      err_code:500,
                      message:'Internal error.'
                  })
              }
              
              res.status(200).json({
              	err_code:0,
              	message:'OK'
          	});
          })
          
      })
  })
  ```

  - 当发送用res.status(200).send(JSON.stringify({})) 很麻烦，但是express提供了一个方法： res.status(200).json()

  - 思考：如何写可以链式调用的方法

  - 后端发送给前端的状态信息message不该是字符串写死数据，例如：”邮箱或者昵称已存在“、”ok“等，一般情况下服务器该设计一些自定义的**业务状态码**：

    - err_code
      - 0：正常
      - 1：邮箱或者昵称已存在
      - 500：服务端错误
      - 这就像http的状态码，有相对应的状态短语一样
    - 接口文档

  - 密码加密（md5）

    - 包：直接去npm或者github上面搜索就可以了，然后直接用

    - 密码加密一般都不做一层，建议加两次，重复加密

    - 学习到了：md5是正向加密的，原来根本就不能解密，能解密的无非是很简单的字符串的事先做好的东西，再加上暴力破解罢了（原数值和加密后的数值对应，然后去数据库找。。。）

      - 只是用来生成密码密文,并对输入的密码明文进行校验的
        它不能从密文直接翻译成明文
        所以其实它并不是加密
        但是既然本来就是对密码进行操作,所以习惯性的也把它称为加密

      - MD5是散列算法
        它跟加密算法最本质的不同点就在于,密文和明文的长度无关,固定32位16进制数

        加密算法,如果想解密,不管是怎么加密的,密文如果想保留全部的信息,那么必然是要和明文长度相关的
        明文如果有500万个字节,那么密文至少要是同一个数量级的,不能差太多,否则必然会丢失信息

        而用MD5,500万字节一样变32位16进制数,这东西能还原回500万字节才怪

        当然作为密码没人会输入500万个字符

      - 盐

      - 字典

      - MD5加密法早被中国的那个谁在国际公开大会上给论证过了，完全是可以破解的，也不用花几天，几年什么的，也就几个小时的事，具体自己看新闻去，现在世界上没有哪一款加密是理论安全的，OpenSSL前段时间也出了heartbleading，，，，

      - 公钥、秘钥、数字签名

        - 博客：如何确保数字证书不会被盗用？
    
  - 新式写法：
  
    - ```javascript
      router.post('/register',function (req,res) {
          var body = req.body;
          try {
              if(await User.findOne({email:body.email})){
                  return res.status(200).json({
                      err_code:1,
                      message:'邮箱已存在'
                  })
              }
      
              if(await User.findOne({nickname:body.nickname})){
                  return res.status(200).json({
                      err_code:2,
                      message:'昵称已存在'
                  })
              }
      
              // 密码加密
              
              //创建用户，注册
              await new User(body).save();
              res.status(200).json({
                  err_code:0,
                  message:'ok'
              })
          } catch (err) {
              res.status(500).json({
                  err_code:500,
                  message:err.message
              })
          }
      })
      ```
  
    - tryCatch捕获异常
  
    - async是新的异步编程方式
  
    - 所有异步操作前面有 await（等待）
  
  - 表单的提交：
  
    - 表单具有默认的提交行为，默认是同步的，同步表单提交，浏览器会锁死（转圈）等待服务端的响应结果
    - 同步提交，浏览器锁死；异步提交，浏览器可以干别的事
    - 同步提交后，浏览器会把响应的结果直接渲染到浏览器当中、同步请求，不管后台发了什么，浏览器都会显示出来。以前没有ajax的时候都是要重新渲染页面。ajax的提出者是一个不懂编程的小渣渣，他是用户体验设计师。以前用户体验就是，注册后如果存在那么就显示”用户已存在“，如果想重新注册还必须要后退。
      - 后来，有人想到了一种办法来解决这个问题：提示的结果和提交的表单可以在一个页面了，甚至还可以留住内容：渲染render页面到当面页面（相当于刷新），然后在register页面里面写上{{ message_code }}，服务器返回了重新渲染的页面并且加上错误信息。现在仍然有部分网站是这样的。这样其实不是不好，因为是后台处理，所以会更安全一些。github的登录就是同步提交（刷新）。同步提交会更安全一些，因为是服务端处理，比客户端安全。但是也会给服务器带来压力。但是作为大网站，他们不在乎
      - 表单存留：form.email-->报错，因为form是undefined，und点出成员会报错——》解决：form && form.email
      - 没有那么灵活：服务器不能操作DOM。这种方式很麻烦，但是客户端就可以没有脚本就可以实现
      - 现在网站，为了降低前后端的耦合，有些不会弄同步提交。而且同步提交前端是控制不到的
      - 后来诞生了AJAX，让交互、处理变得更丰富一些了
      - 但是在一些比较成熟的框架里面，也不会有多麻烦。github用的是ruby 平台，是日本人开发的一个语言，美国人写的框架ruby ool，做网站的，很强大，特别牛逼。中国有易语言，中文编程语言
      - 有了ajax，前端可以做一些更灵活的处理
      - 老师：从框架开始，会教大家前后端分离的方式。现在绝大多数都是前后端总和在了一起。。。目前有一些过时、比较老的项目，还是前后 端糅杂在一起的这种
      - 更优的解决还是后面用的前端框架，前后端分离：数据和页面完全分开了。前端只关心页面，所有接口都通过后台交互，后台不再有views的概念（不处理页面），而且甚至路由的控制，也是通过前端来处理：当请求谁的时候响应谁，那个时候前端也可以控制，叫做单页面应用程序STA，是现在前后端分离的开发方式，现在是混合，但也是种解决方案
      - 总结：同步提交的话信息是服务端处理。异步提交的话服务端只需要返回要交互的数据或者内容信息
  
- 服务端重定向针对异步请求无效：服务端的重定向只有针对同步请求才有效，对异步请求无效，不会跳的。虽然浏览器还是会发出重定向的请求，但是页面是不会跳的

- session

  - 老师发苹果：领过苹果的不能再领了

    - 班里那么多人，老师怎么记得住谁拿了苹果谁没有拿——》http是无状态的，记不住谁是谁。人那么多，记住有没有拿过是很难的，但是，你可以自己记住你自己就好了：
      - 谁来领了苹果，我就在他背后贴个小纸条，下次他来了一看背后有个小纸条就知道领过苹果了，小纸条就是cookie（保存在客户端本地，普通用户也不知道。但是cookie有时候不太安全）
    - cookie可以用来保存一些不太敏感的数据，但是不能用来保存用户的登录状态，因为登录是用来获取权限的。就像网站vip里面cookie有 isVIP：true，那么就很容易伪造了
      - 一般用来：记住用户名（记住输入过的用户名），购物车数据（登录不登录都能加入购物车）
    - session：用来解决客户端cookie不能保存敏感信息的问题——应该把敏感信息保存在服务端
      - 超市例子：电子柜（服务端） 我（客户端） 开箱凭证（凭证是唯一的，不可能重复，一旦丢失，不可找回，如果小票丢失，那么你的状态也就丢失了（一些数据找不到了，小票就是cookie
        - 钥匙是服务器给的，比较安全，难伪造，我们只要拿着钥匙就可以获取服务端的数据

  - express中可以使用session，但它默认是没有session和cookie的功能的，需要结合第三方插件来完成express-session来解决

    - `npm i express-session`
    - 配置
      - 引包
      - 一定要在挂载路由之前
      - 可以用req.session来访问和设置session成员
        - 添加 req.session.foo = 'bar'
        - 访问: req.session.foo
        - 
    - 使用
      - 当用户登录成功后，默认是登录了，那么我们就在session中记录登录状态：req.session.isLogin = true
      - 想法：互联网都是互通的：别人可以通过IP访问到自己的电脑上面的服务器。原来所有电脑都是互通的，，，
      - 当服务端记录下状态时，只要有session那么就会有一把钥匙（cookie）
        - 点开——》connect.sid，他就是那把钥匙。是服务器发的。那个看着像乱码的东西是唯一的，他就是钥匙
          - EditThisCookie插件，很方便看cookie
      - session也存在过期时间：cookie过期了session也就过期了
      - 思考：问题：那么如果仅仅根据登录成功这个信息来返回用户登录后的信息？？？
        - 思考：可以在session里面写入登录成功的用户名，服务端可以在后台用用户名来登录
        - 老师：实际上也不会记录islogin为true，应该把当前用户直接记录在session中
        - 重要：默认session是在内存中存储的，服务器重启，session丢失，登录状态也就丢失了。
          - 解决：持久化session存储
            - 默认：内存中存储session，服务器重启就丢失
            - 持久化存储
          - 思考疑问：服务器返回的钥匙到底是包含了什么信息？如果有人把这个钥匙拿走了然后在自己的电脑上输入呢？？？？

  - session中间件的配置说明

    - ```javascript
      app.use(session({
          secret:'xxx',
          resave:false,
          saveUninitialized:true
      }))
      ```

    - secret：加密字符串，加一些key，只要他们不知道这个key，就很难比对，提高安全性。配置加密字符串，它会在原有加密的基础之上会和这个字符串拼起来去加密（说白了就是增加安全性，防止客户端恶意伪造session

    - resave：比较特殊，待解决

    - saveUninitialized：未初始化保存——》无论你是否使用session，我都默认直接给你分配一把钥匙

    - 服务端的session，对每次客户端请求过来，都会自动给客户端分配一个sessionID，无论需不需要存数据（浏览器里面的钥匙就是加密字符串）
    
    - 真正的生产环境，会把session持久化存储。例如可以把session存储到mongodb里面
    
  - 退出：
  
    - 清除登录状态（session）
    - a链接是同步请求
  
  - 分离：router文件里面放太多也不太合适
  
- 书写步骤

  - 创建目录结构
  - 整合静态页-模板页
    - include
    - block
    - extend
  - 设计用户登录、退出。注册的路由
  - 用户注册
    - 先处理好客户端页面的内容（表单的name。发送请求、收集表单数据、表单验证（可以通过jq插件实现
    - 服务端
      - 获取客户端表单请求的数据
      - 操作数据库
        - 如果有错，发送500，告诉客户端服务器错了
        - 其他的根据业务发送不同的响应数据 
  - 用户登录
  - 用户退出

### day6总结

- path模块
- \_\_dirname和\_\_filename 两个属性
  - 动态获取当前文件的绝对路径
  - 用来解决文件操作路径的相对路径问题
  - 文件操作中相对路径相对于执行node命令所属的路径
  - 为了尽量避免这个问题，都建议文件操作的相对路径都转为：动态的绝对路径
  - 方式``path.join(__dirname,文件名)`
- art-template模板引擎高级语法
  - include
  - extend
  - block
  -  浏览器应该是不能用的
- 表单同步提交和异步提交
  - 以前没有ajax都是这么干的，甚至有些就直接渲染了提示信息出来了
  - 异步提交页面不会刷新，交互方式更灵活
- express中配置使用session插件



### day7

#### 反馈

- 文件操作路径
  - 文件操作路径总是相对于cmd命令行是node的一个特性。老师举例时在开发npm工具时有用到
- 老师以前是课霸，连续上课3天都很晚的故事，都快锁门了撵他走了
- 字体：标准的15号字体，在操作系统中1366x768分辨率，15号字体是最合适的：小一号就变细，不好看，大一号就会影响美感了，在1366x768中15号字体是最合适的
- 对象拷贝：把一个对象拷贝到另一个对象当中：extend（继承）
- 能不能做到，吃饭的时候也在想问题，例如翻开手机，看一篇技术文章，或者看一个文档，学一个知识点，或者把这些东西去复习一下
- 模块会缓存，不用担心重复加载的效率问题
- 可以自己去写，实现session。但是效果不理想，有点饶，就像jsonp一样，本身不难
  - session是基于cookie来实现的，本身原理一样

#### 复习

要理解web的本质

- 就是字符串交互
- 请求：发送一堆字符串。而报文：就是具有一定格式的字符串
- http就是web中的沟通语言
- 服务器就是响应内容：内容也是字符串
- 最终本质：字符串，也就是0和1

一定要动手写一写，不动手是不行的

插件也是工具，你只需要明确你的目标就可以了

最终的目标就是使用session来帮助我们管理一些敏感信息数据状态

- 例如保存登录状态
- 删除session的严谨语法：delete语法 ： delete req.session.xxx(delete用来删除对象的某个成员)



Express 中间件

- 中间件就是对一个信息依次进行多个处理。例如

  - get请求处理
  - post请求处理
  - session处理

- 其中每个处理都相当于是一个插件，可以单独地成为一个文件，里面放着处理的相关操作，这些就叫中间件---》模块化，职责更清晰，维护更方便

  - 老师：对象是引用传递，那么所以我们可以在方法里面动态地添加引用成员了
  - 请求进来时不是直接处理你的业务
  - 中间件：从请求到响应的过程中调用了方法，每个方法都有他的特殊含义
  - 所以，那些中间件都是在进行操作前要配置，而不能放到后面（这就是为什么老师说中间件要放到代码前面的原因，所以中间件的顺序也很重要，有些中间件是依赖顺序的

- 自己思考：可以相当于是加了很多不同的预处理功能

- express中的中间件具体使用体会：

  - 中间件：处理请求的，本质就是一个函数

  - 在express中对中间件有几种分类：

    - 不关心请求路径和请求方法的中间件，也就是说任何请求都会进入这个中间件

      - ```javascript
        app.use(function(req,res){
            console.log('请求进来了')
        })
        //每次有请求访问服务器时都会触发这个函数
        //这个就是不关心请求路径和请求方法的中间件
        ```

      - 中间件本身是一个方法，该方法接受3个参数

        - Request 请求对象

        - Response 响应对象

        - next 下一个中间件

        - ```javascript
          app.use(function(req,res,next){
              console.log(1);
              next();
          })
          
          app.use(function(req,res,next){
              console.log(2);
          })
          
          //中间件默认是不会往后走的，必须要调用next函数指定下一个执行的中间件
          ```

        - 当一个请求进入中间件之后，如果不调用next则会停留在当前中间件

    - 关心请求路径的中间件：

      - ```javascript
        app.use('/a',function(req,res,next){
            
        })
        ```

      - 

    - 除了以上的中间件之外还有严格匹配请求方法和请求方式的中间件：

      - ```javascript
        app.get('/test',function(req,res,next){
            
        })
        ```

      - 

  - 配置中间件

    - 模块化：分而治之的思想
    - 第三方中间件
    - 有很多不同的中间件，可以在要使用的时候加上去就好了。所以说Node很灵活，它可以DIY，想要什么功能就可以加什么功能

  - 配置一个处理404的中间件

    - 在路由后面配置个app.use就可以了

  - 配置一个全局错误处理中间件

    - 在之前的项目开发中，遇到过很多情况都是直接`return res.status(500)`等重复情况，于是我们可以写到单独的一个错误处理中间件

    - ```javascript
      app.use(function(err,req,res,next){
          
      })
      ```

      

    - 必须要4个参数！而且第一个是error

    - F11禅模式：zen code

    - 我们在之前的app.get()中如果出现错误，可以直接调用next方法，并且要传个参数：next(err)，这样的话就可以直接去到全局错误处理的中间件处，而不会再响应其他中间件

    - 应用程序级别中间件和路由级别中间件

  - 系统内置的中间件：

    - ```javascript
      app.use('/public',express.static(path.join(__dirname,'./public/')))
      ```

  - 在所有请求来时，都会经过一些配置好的中间件进行处理