// 1.加载http核心模块
const http = require('http');   
// import { createServer } from 'http';   

const fs = require('fs');

// import {http} from "http";

// 2.使用http.createServer()创建一个Web服务器   
    // 返回一个Server实例
var server = http.createServer();//相当于apache,但我们使用代码来开发服务器

//服务器要做什么？提供服务--》对数据的服务

    // 接受请求
    // 处理请求
    // 返回请求

    //当服务器收到请求后,触发request的请求事件，执行回调函数
    //注册request请求事件

    // 其request处理函数有两个对象
    // request 是请求对象
    // response是响应对象

    // 请求对象用来获取客户端的一些请求信息，，例如请求路径
    // 响应对象可以发送回响应消息
    server.on("request",function(request,response){
        console.log("收到客户端的请求啦！！！请求路径是"+request.url);
        // console.log("收到的请求",request);
        
        //response对象有一个方法 write可以给客户端发送响应数据
        // write可以使用多次但是最后一定要使用end来结束响应，否则客户端会一直等待
        // response.write('i love you too,HS\'s');
        // var str = "么么哒" 
        // response.write(str.toString());
        
        //告诉客户端我说完了，你可以呈递给用户了

        //返回的响应头：文本类型--》普通（plain）文本（text） 字符设置（charset）为 utf-8
        // response.setHeader("Content-Type","text/plain;charset=utf-8");
        response.setHeader("Content-Type","text/html;charset=utf-8");

        console.log("请求服务器的客户端端口号是",request.socket.remotePort);
        console.log("请求服务器的客户端远程IP是",request.socket.remoteAddress);
        
        

        let data = [
            {
                name:'于翔',
            },
            {
                age:'21'
            },
            {
                lover:'严慧珊'
            }
        ]
        // response.end(JSON.stringify(data));
        response.end("<p style='color:red'><a href='点我'>点我</a>hello world!</p>");
    })

    // 4.绑定端口号，启动服务器
    //涉及到网络通信的都一定有端口号
    //2参数，，，，启动成功后，回调函数执行、、接下来等待客户端请求 
    server.listen(8088,function(){
        console.log("服务器启动成功了，可以访问");//127.0.0.1:8088/////---localhost:8088
        
    })