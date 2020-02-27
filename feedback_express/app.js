
//引包
var express = require('express');
var bodyParser = require('body-parser');

//服务器设置
var app = express();

//art-template配置
app.engine('html',require('express-art-template')); //定义渲染的文件后缀为html
app.set('views','./pages'); //默认目录改为/pages目录
app.set('view options',{//模板引擎的选项，可写可不写
    debug:process.env.NODE_ENV !== 'production'
});

//body-parser配置
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//开放资源配置
app.use('/public/',express.static('./public/'));

//评论数据
let comments = [
]

//访问主页
app.get('/',(req,res)=>{
    res.render('index.html',{
        comments:comments
    });
})

//访问提交留言页
app.get('/post',(req,res)=>{
    res.render('post.html');
})

//GET请求提交留言
app.get('/addMeg',(req,res)=>{
    var msg = req.query;
    let comment = {
        name: msg.name,
        message: msg.message,
        dateTime: new Date()
    }

    comments.unshift(comment);

    res.redirect('/');
})

//POST请求提交留言
app.post('/post',(req,res)=>{
    console.log('收到post请求');
    
})

//服务器开启，端口设置
app.listen(8088,()=>{
    console.log('Server is running...');
    
})