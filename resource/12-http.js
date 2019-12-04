const http = require('http');
const fs = require("fs");

const server = http.createServer();

server.on("request", function (req, res) {
    console.log(req.url);
    
    if (req.url === "/") {
        fs.readFile("./index.html", function (err, data) {
            if (err) {
                res.setHeader("Content-Type", "text/plain;charset=utf-8")
                res.end("未找到该页面");
            } else {
                res.setHeader("Content-Type", "text/html;charset=utf-8")
                res.end(data);
            }
        });
    }
})


server.listen(8088, function () {
    console.log("Server is running");

})