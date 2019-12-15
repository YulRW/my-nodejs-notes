
const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on('request',function(req,res){
    let url = req.url;
    
    fs.readFile('./list.html',function(err,data){
        if(err){
            return res.end('Not Found 404')
        }

        fs.readdir('../',function(err,files){
            console.log(files)
        })






        res.end(data);
    })

})

server.listen('8080',function(err){
    console.log('服务器启动!')
})