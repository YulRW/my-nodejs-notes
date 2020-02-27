/*
 * @Author: your name
 * @Date: 2020-01-29 13:25:42
 * @LastEditTime : 2020-01-30 17:38:33
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \crud\test.js
 */
function fn(callback) {
    setTimeout(function () {
        var data = 'hello';
        callback(data);
    }, 1000);

}

// fn(function (data) {
//     console.log(data);
// })


function test2(obj) {
    setTimeout(function () {
        var res = obj.num1 + obj.num2;
        if (res >= 3) {
            obj.success(res)

        } else {
            obj.fail(res)
        }
    }, 2000)
}

test2({
    num1: 1,
    num2: 0,
    success: function (res) {
        console.log(res, 'res大于等于3');

    },
    fail: function (res) {
        console.log(res, 'res小于3');

    }
})

let student = [
    {
        id: 1,
        name:'yx'
    },
    {
        id: 2,
        name:'yx'
    },
]


let id = 1;
let temp = student.find(function (item) {
    return item.id == id;
})

temp.name = 'yhs'
console.log(student);


// {
//     "students":[
//         {
//             "id":1,
//             "name":"于翔",
//             "age":20,
//             "gender":0,
//             "hobbies":"yhs"
//         }
//     ]
// }