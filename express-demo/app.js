//0. 安装


//1. 引包
var express = require('express');
var template = require('art-template');


let comments = [
    {
        name: '于翔',
        message: '学习Node.js',
        dateTime: '2015-5-5'
    },
    {
        name: '于翔',
        message: '学习Node.js',
        dateTime: '2015-5-5'
    }
]


//2. 创建服务器应用程序（相当于http.createServer）
var app = express();

//公开指定目录，可以通过路径访问/public/xxx的所有资源了
//在Express中开放资源就是一个API的事
app.use('/public/',express.static('./public/'));
app.use('/views/',express.static('./views/'));

console.log(1111111111111111,__dirname);


//模板引擎在Express中也是一个API的事

//当服务器收到get请求 / 的时候，执行回调处理函数
app.get('/',function(req,res){
    //在express中可以直接用req.query来直接获得查询字符串参数
    console.log(req.query);
    
    res.send('/view/index.html');
    
    
})

//在express中使用模板引擎有更好的方式 res.render('name',{ object })
//可以去看express的官方文档，如何让art-template结合express来使用

//相当于server.listen
app.listen(8088,function(){
    console.log('app is running at 8088');
    
})