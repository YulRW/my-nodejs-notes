var fs  = require('fs')


fs.readFile('./a.txt','utf8',function (err,data) {
    if(err){
        throw err;
    }
    console.log(data);
})

fs.readFile('./b.txt','utf8',function (err,data) {
    if(err){
        throw err;
    }
    console.log(data);
})

fs.readFile('./c.txt','utf8',function (err,data) {
    if(err){
        throw err;
    }
    console.log(data);
})