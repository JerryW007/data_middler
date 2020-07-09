const _ = require('lodash');
const moment = require('moment');
const Thenjs = require('thenjs');
/*
 * @Author: wangchao 
 * @Date: 2020-01-04 11:47:44 
 * @Last Modified by: wangchao
 * @Last Modified time: 2020-05-13 15:14:19
 */

// console.log('test')
// const _ = require('lodash');
// // test
// // @@@试试水
// const arr = [1, 2, 3, 4, 44, 4];
// arr.forEach(item => {
//     // setTimeout(() => {
//     // console.log(item);
//     // },1000)
//     console.log(item);
//     // break;
// });
// // for (let i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);
// //     return
// // }
// console.log("111")

// const aa = Math.floor(`${new Date().getTime()}1`)
// console.log(typeof aa === 'number')


// const TestEnum = {
//     AA: 1,
//     BB: 2,
//     CC: 3,
// }

// _.map(TestEnum, (k, v) => {
//     console.log(k, v)
// })

// console.log('this branch is fixBug2')
// console.log('this branch is fixBug2 test')
// console.log('this branch is fixBug2 test2')
// console.log(new Date(1584676800000))

// // 团队类型
// const AdminGroupType = {
//     CONSULTANT: 1,      // 咨询师团队
//     CLASS_MANAGER: 2,   // 班主任团队
//     TEACHING: 3,        // 教务团队
//     TEACHER: 4,         // 老师团队
//     GROW_UP: 5,         // 成长师
// };

// const key = Object.keys(AdminGroupType).filter(k=> AdminGroupType[k] === 1);
// console.log(AdminGroupType[key]);

// const testArr = [11,22,33,44,55,66,77]

// async function test(item) {
//     return new Promise((item) => setTimeout((item) => {
//         console.log(`item`);
//     }, 1000));
// }
// testArr.map(async (item) => {
//     console.log(`start:${item}`);
//     await test(item);
//     console.log(`end:${item}`);
// })
// const cc = '23';
// const oo = {
//     'aa' :1,
//     bb:2,
// }
// _.forOwn(oo, (v, k) => console.log(k));
// // console.log(new Date(new Date(new Date().toLocaleDateString()) + 24 * 60 * 60 * 1000));

// {
//     console.log(new Date(1586226064000))
// }
// const su = 1
// const ooo = [
//     su > 1 ? '212' : '2000'
// ];
// console.log(ooo);


// // console.log(_.values(MessagePushRole));
// const inviild = 'sss';
// const quert = 'sss';
// const sendTime = 1535419062000;
// console.log(quert);
// console.log(moment(sendTime).endOf('day').valueOf());


// const Thenjs = require('thenjs');

// const as = [1, 2, 3, 4, 5];
// Thenjs.eachLimit(as, (cont, a) => {
//     console.log(a)
//     if (a === 3) {
//         cont('a', null);
//     } else {
//         cont(null, null);
//     }
// }).fin((cont, err, arg) => {
//     console.log(err, arg)
// });
const scheduler = require('../src/epoll/scheduler');

// const ccc = [{
//   student_id: '5dc46fa9000004412813bb7a',
//   free_lesson_id: '5ea3eb280000068782f6e1a5',
//   creator_type: 'system',
//   situation: 'confirm_attend',
//   type: 'todo',
//   sort: 3,
//   status: 'todo'
// }];

// const cccc = _.find(ccc, { student_id: '5dc46fa9000004412813bb7a', free_lesson_id: '5ea3eb280000068782f6e1a5', situation: 'confirm_attend'});
// console.log(cccc);

console.log(scheduler.syncData);
describe('TEST', done => {
  let syncData;
  before(done => {
    syncData = scheduler.syncData
    if (!syncData) done();
  });
  it('TEST sync data', done => {
    console.log(syncData)
  })
})