/*
 * @Author: wangchao 
 * @Date: 2020-01-04 11:47:44 
 * @Last Modified by: wangchao
 * @Last Modified time: 2020-03-04 09:55:55
 */

console.log('test')
const _ = require('lodash');
// test
// @@@试试水
const arr = [1, 2, 3, 4, 44, 4];
arr.forEach(item => {
    // setTimeout(() => {
    // console.log(item);
    // },1000)
    console.log(item);
    // break;
});
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     return
// }
console.log("111")

const aa = Math.floor(`${new Date().getTime()}1`)
console.log(typeof aa === 'number')


const TestEnum = {
    AA: 1,
    BB: 2,
    CC: 3,
}

_.map(TestEnum, (k, v) => {
    console.log(k, v)
})

console.log('this branch is fixBug2')