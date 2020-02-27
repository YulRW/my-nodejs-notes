const http = require('http');
const fs = require('fs');
const template = require('art-template');

// const url = require('url');--->用新的接口，已经无需引用url模块

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

http
    .createServer(function (req, res) {
        let parseObj = new URL(req.url, 'http://localhost:8088/');
        let pathName = parseObj.pathname;
        let url = parseObj.href;
        console.log(parseObj);

        if (pathName === '/') {
            fs.readFile('./views/index.html', function (err, data) {
                if (err) {
                    return res.end('404 NotFound!');
                }

                let html = template.render(data.toString(), {
                    comments: comments
                });

                res.end(html)
            })
        } else if (pathName === '/addMeg') {    //发布留言
            let name = parseObj.searchParams.get('name');
            let message = parseObj.searchParams.get('message');
            let comment = {
                name: name,
                message: message,
                dateTime: '2020-1-20'
            }
            comments.unshift(comment);
            res.statusCode = 302;
            res.setHeader("Location", '/');
            res.end();


        } else if (pathName === '/post') {  //提交留言页面
            fs.readFile('./views/post.html', function (err, data) {
                res.end(data);
            });

        } else if (pathName.indexOf('/public/') === 0) {    //公共开放资源
            fs.readFile('.' + pathName, function (err, data) {
                res.end(data);

            });

        } else {    //未找到页面
            res.end('404 Not Found!');
        }
    })
    .listen(8088, function (err) {
        if (err) {
            console.log(err);
        }
        console.log('Server is running...');

    })

