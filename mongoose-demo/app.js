/*
* @Author: your name
* @Date: 2020-02-01 15:18:30
 * @LastEditTime : 2020-02-01 16:10:58
 * @LastEditors  : Please set LastEditors
* @Description: In User Settings Edit
* @FilePath: \mongoose-demo\app.js
*/

//引入第三方包
var mongoose = require('mongoose');
//链接数据库test
mongoose.connect('mongodb://localhost/test',{ useNewUrlParser:true,useUnifiedTopology: true});
//暂时不用
mongoose.Promise = global.Promise;

//创建一个模型，设计数据库。
//mongodb是动态的，非常灵活，只需要在代码中设计你的数据库就可以了
//这个包可以让你的设计编写过程变得非常简单
var Cat = mongoose.model('Cat',{name:String});

var kitty = new Cat({name:'yuxiang'});

kitty.save(function (err) {
    if(err){
        console.log(err);
        
    }else{
        console.log('success');
        
    }
})