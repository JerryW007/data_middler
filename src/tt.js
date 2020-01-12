/*
 * @Author: wangchao 
 * @Date: 2020-01-04 11:47:44 
 * @Last Modified by: wangchao
 * @Last Modified time: 2020-01-12 23:25:43
 */

console.log('test')

// test
const arr = [1, 2, 3, 4, 44, 4];
arr.forEach(item => {
    // setTimeout(() => {
    // console.log(item);
    // },1000)
    console.log(item);
    break;
});
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    return
}
console.log("111")