/*
 * @Author: your name
 * @Date: 2020-01-27 16:52:56
 * @LastEditTime : 2020-01-30 19:10:17
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \crud\router.js
 */
/**
 * router.js 路由模块
 * 职责：
 *      处理路由
 *      根据不同的请求方法和请求路径，设置具体的请求处理函数
 */

var express = require('express');
var router = express.Router();
var fs = require('fs');
var Students = require('./student');


router.get('/', (req, res) => {
    //没有封装API的--》淘汰
    // fs.readFile('./db.json','utf8',(err,data)=>{
    //     if(err){
    //         return res.status(500).send('Server error.')
    //     }
    //     res.render('index.html',{
    //         students:JSON.parse(data).students
    //     });
    // })

    //封装API
    Students.find(function (err, data) {
        if (err) {
            return res.status(500).send('Server error.')    //业务逻辑
        }
        res.render('index.html', {
            students: data
        })
    })
})

router.get('/students', (req, res) => {
    res.redirect('/');
})

router.get('/students/new', (req, res) => {

    res.render('./new.html');

})

router.post('/students/new', (req, res) => {
    console.log(req.body);
    Students.save(req.body, function (err) {
        if (err) {
            return res.status(500).send('Server error.')    //业务逻辑
        }
        res.redirect('/');
    })
})

router.get('/students/edit', (req, res) => {
    let id = req.query.id;
    Students.findById(id, function (err, student) {
        if (err) {
            return res.status(500).send('Server error.')    //业务逻辑
        }
        console.log(student);
        res.render('./edit.html',{
            student:student
        })

    })

})

router.post('/students/edit', (req, res) => {
    var stu = req.body;
    
    Students.updataById(stu,function (err) {
        if(err){
            return res.status(500).send('Server error.')    //业务逻辑
        }
        res.redirect('/');
    })

})

router.get('/students/delete', (req, res) => {
    let id = req.query.id;
    Students.delete(id,function (err) {
        if(err){
            return res.status(500).send('Server error.')    //业务逻辑
        }
        res.redirect('/');
    })
    

})

module.exports = router;


