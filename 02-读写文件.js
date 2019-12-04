//fs是file-system的简写，是文件系统的意思
// 在node中如果要文件操作就必须要引入fs核心模块
// 在这个fs模块中提供了所有的文件操作相关的api
// 例如  fs.readfile就是来读取文件的

// 使用require方法加载fs核心模块
var fs = require('fs');

// 2.读取文件,第二个参数是回调函数  error 和  data
fs.readFile('./02test.txt',function(error,data){
    // console.log("失败"+error);
    // console.log(data.toString());
    console.log(data);
    
    
    
})
    //1. 路径 2.内容 3.回调函数
    fs.writeFile('./03test.txt','爱严慧珊~~',function(error){
        console.log(error);
        console.log("文件写入成功！");
        
        
    })
