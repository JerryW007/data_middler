/* jshint esversion:6 */
/**
* worker.js
* @Autor  王朝
* @Description 从mongodb中读取数据
* @Created 2019-08-26 12:07:02
* @LastModified 2019-08-26 12:07:02
* @EnterpriseEmail wangchao04@iyunxiao.com
*/


process.on('message', (msg) => {
    console.log('Received message from master: ' + msg);
    console.log('worker-' + process.pid + ': hello world');
})