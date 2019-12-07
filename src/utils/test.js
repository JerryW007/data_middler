const Thenjs = require('thenjs');
const _ = require('lodash');

function task(name, callback) {
    setTimeout(() => {
        // console.log(name);
        callback(null, name + '----');
    }, 2);
}

// let newArr = [];
// Thenjs().series(['a', 'b', 'c', 'd'], (cont, item) => {

//     task(item, (err, result) => {
//         newArr = newArr.concat(result);
//         cont(null, result);
//     });
// }).eachSeries(newArr, (cont, result) => {
//     console.log(newArr);
//     return;
// })

// let a =['dd'];
// console.log(_.isNil(a));
// a.push('a');
// a.push('bb');
// a.push('cc');
// console.log(a);

// a = [
//     { cc: 1, dd: 2, ff: [{ dd: 2 }, { dd: 3, ff: [{ dd: 5 }] }] },
//     { cc: 4, dd: 3 },
// ];
// let count = 0;
// count = getDDs(a, count);
// console.log(count)

// function getDDs(data, result = 0) {
//     _.each(data, item => {
//         if (!_.isNil(item.dd)) result += item.dd;
//         if (!_.isNil(item.ff)) result += getDDs(item.ff, count);
//     });
//     return result;
// }

// const cc = ['1', '33', '44'];
// console.log(cc.includes('445'))
// console.log('sdafsda'.endsWith('a'))
// console.log('sdafsda'.substring(0, 'sdafsda'.length - 'a'.length));


// const key = forwardSwitch('books', true, ['books'])
// console.log(key);
// function forwardSwitch(key, isArray = false, ignoreKeys) {
//     if (ignoreKeys.includes(key)) return key;
//     let newKey = key.replace(/[A-Z]{1}/g, arg => {
//         if (!arg) return '';
//         return '_' + arg.toLowerCase();
//     });
//     if (isArray && newKey.endsWith('s')) newKey = newKey.substring(0, newKey.length - 's'.length);
//     return isArray ? `[${newKey}]` : newKey;
// }

// const DataSwitch = require('./dataSwitch');

// const key = DataSwitch.reverseSwitch('child', true);
// console.log(key);



// const objs = ['1', '2', '3'];
// _.map(objs, (obj, key) => {
//     console.log(obj);
//     console.log(key);
// })


// const filObj = [{ a: 1, c: 2 }, { a: 2, c: 2 }, { a: 3, c: 5 }];
// const obj2 = _.filter(filObj, o => {return o.c === 2});
// console.log(obj2);
// obj2[0].c = 44;
// console.log(obj2);
// console.log(filObj);

// _.each(obj2,item=>{
//     item.c = 111;
// });
// console.log(obj2);

// const bb = [1,2,35,6,4,223,5,2234,5];
// const tt = _.reduce(bb,(total,v) => {
//     console.log(total);
//     console.log(v);
//     return total + v;
// })

// console.log(tt);

// const list = ['ss','33','da','sda'];
// _.map(list, item => {
//     console.log(item);
// });

const line = 'ᐁ┌────┬ ᒣ';
_.each(line, c => {
    console.log(c.charCodeAt());
})

const allPointIds  = [1,'31231','21','23'];
console.log(_.includes(allPointIds, 1));


const onj = [{ id: 1, re: 2 }, { id: 2, re: 4 }, { id: 3, re: 5 }];


const ret = {};
_.each(onj, item => {
    ret[item.id] = item.re;
});
console.log(ret);
//test