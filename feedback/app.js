

const http = require('http');
const fs = require('fs');
const template = require('art-template');
const Url = require('url');

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
        let parseObj = new URL(req.url,'http://localhost:8088/');
        let pathName = parseObj.pathname;
        console.log(parseObj);
        
        if (pathName === '/') {
            fs.readFile('./views/index.html', function (err, data) {
                if (err) {
                    return res.end('404')
                }

                let html = template.render(data.toString(), {
                    comments: comments
                });

                res.end(html)
            })
        } else if (pathName === '/addMeg') {
            console.log(url);

            let obj = new URL(url, 'http://localhost:8088/').searchParams;

            console.log(obj.get("name"));


        } else if (pathName === '/post') {
            fs.readFile('./views/post.html', function (err, data) {
                res.end(data);
            });

        } else if (pathName.indexOf('/public/') === 0) {
            fs.readFile('.' + pathName, function (err, data) {
                res.end(data);

            });

        } else {
            res.end('404 Not Found!');
        }
    })
    .listen(8088, function (err) {
        if (err) {
            console.log(err);
        }
        console.log('Server is running...');

    })

