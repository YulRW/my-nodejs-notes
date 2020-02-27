/**
 * app.js:入口模块
 * 职责:
 *      启动服务
 *      做一些服务相关配置
 *          模板引擎
 *          body-parser 解析表单POST请求体
 *          提供静态资源服务
 *      监听端口启动服务
 *      挂载路由
 * 
 */

//引包
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var router = require('./router');

var app = express();

//配置
app.engine('html',require('express-art-template'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/public/',express.static('./public/'));
app.use('/node_modules/',express.static('./node_modules/'));

app.use(router);

app.listen(8088,()=>{
    console.log('Server is running...');
})