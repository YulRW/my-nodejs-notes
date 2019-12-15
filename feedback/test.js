const url = require('url');

// const URL = url;

// let obj = url.parse('/test?name=YulRW&message=666',true)
let obj = new URL('/test?name=YulRW&message=666','http://localhost:8088/');

console.log(obj);
