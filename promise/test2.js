/*
 * @Author: your name
 * @Date: 2020-02-04 15:43:43
 * @LastEditTime : 2020-02-04 15:45:47
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \promise\test2.js
 */

var fs = require('fs');
console.log(1);


new Promise(function () {
    var a = 1;
    var b = 2;
    console.log('a+b',a+b);
    console.log(2);
    
    
    setTimeout(function () {
        console.log(3);
        
    },0);
})

console.log(4);
