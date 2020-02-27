//不关心业务，里面封装了对文件操作的相关API：至少四个：增删改查
/**
 * student.js
 * 数据操作文件模块
 * 职责：操作文件中的数据，只处理数据，不关心业务
 * 这里才是我们学习Node的精华部分：奥义之所在
 * 封装异步API
 * 
 */

var fs = require('fs');
var dbPath = './db.json';

/**
 * 获取所有学生列表
 * @param {Function} callback 回调函数
 * return []
 */
exports.find = function(callback){
    fs.readFile(dbPath,'utf8',function (err,data) {
        if(err){
            return callback(err);
        }
        callback(null,JSON.parse(data).students);
    })
}

/**
 * @description: 根据id获取学生对象
 * @param {Number} id 学生id
 * @param {Function} callback 回调函数
  */
exports.findById = function (id,callback) {
    fs.readFile(dbPath,'utf8',function (err,data) {
        if(err){
            return callback(err);
        }
        var students = JSON.parse(data).students;
        id = Number(id);
        
        var stu = students.find(function (item) {
            return item.id === id;
        })
        
        callback(null,stu);
    })
}


/**
 * 保存添加学生
 * @param {Object} student 学生对象
 * @param {Function} callback 回调函数
 */
exports.save = function(student,callback){
    fs.readFile(dbPath,'utf8',function (err,data) {
        if(err){
            return callback(err);
        }
        var students = JSON.parse(data).students;
        let newID = students[students.length-1].id + 1;
        student.id = newID;
        students.push(student);
        fileData = JSON.stringify({
            students:students
        });
        fs.writeFile(dbPath,fileData,function (err) {
            if(err){
                return callback(err);
            }
            callback(null);
        });
    })

}

/**
 * 更新修改学生
 */
exports.updataById = function(student,callback){
    fs.readFile(dbPath,'utf8',function (err,data) {
        if(err){
            return callback(err);
        }
        student.id = Number(student.id);
        var studentData = JSON.parse(data).students;
        
        var stu = studentData.find(function (item) {
            return item.id === parseInt(student.id);
        })
        
        //遍历拷贝对象
        for(var key in student){
            stu[key] = student[key];
        }

        var fileData = JSON.stringify({
            students:studentData
        })
        
        fs.writeFile(dbPath,fileData,function (err) {
            console.log('写入完成');
            
            if(err){
                return callback(err);
            }
            callback(null);
        })
    })
}


/**
 * @description: 删除学生 
 * @param {Number}      id        学生id 
 * @param {Function}    callback  回调函数
 */
exports.delete = function(id,callback){
    fs.readFile(dbPath,'utf8',function (err,data) {
        if(err){
            return callback(err);
        }
        let students = JSON.parse(data).students;
        id = Number(id);
        
        var index = students.findIndex(function (item) {
            return item.id === id;
        })
        students.splice(index,1);
        var fileData = JSON.stringify({
            students:students
        })
        
        fs.writeFile(dbPath,fileData,function (err) {
            if(err){
                return callback(err);
            }
            callback(null);
        })
        
        
    })
}
