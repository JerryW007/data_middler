/* jshint esversion:8 */
/**
 * app.js
 * @Autor  王朝
 * @Description
 * @Created 2019-08-26 11:00:41
 * @LastModified 2019-11-12 11:58:59
 * @EnterpriseEmail wangchao04@iyunxiao.com
 */
const mongodbUtil = require('./utils/mongodber');
const logger = require('./utils/logger').getLogger(__filename);
const jwt = require('./utils/jwt');
const { router, beforeRouter } = require('./router')
const express = require('express');
const app = new express();
async function main () {
    //初始化
    // await mongodbUtil.init();
    // const mongodber = mongodbUtil.use('test');
    logger.info('开启世界的大门...');

    // test();

    //初始化web服务
    // app.use(beforeRouter);
    app.use(router);
    app.listen('8081');
    logger.info('Listen port:8081 success!');

}

main();




function test () {
    let sessionId = "6719da848e0ec864081ea55f28ff77ab197f90829085338f8d5b7871aeae4f97961f9a4c0da90c0771f20cd85ba1f1b00a99d5d99ac9aa33828c325b46ee51c9928ba13a47eeadbfe314a977f1f3d62e49e7293796390d9a75ac9f4fe2c178b46f58883cd56e1a8ea030f7637fb46623b466d14cdd4e2ac34732ce2d0a358f66ffe498a40b2bc577881516dc70d8ac88985925366a3ab2c8ff01d203f6a1797b2958a76e388db579c66fbcdeaa79fdac0a9f7029579dcc4d56908c1860de1f0a119d055ac876fc6a9e8c7ba279133ddcf75267f7c70f3c58a6e54b9af3edb784b19680cda3c7f833532dffd91c1d6885940bf1e990c7b727a9ccb71ec245adb75ecab3f07354b2827818ceec8adac99cebb107e1017dc00f7a4c43cbc96da1880915a946f48e7b2e33eef5d53843d20b86dce88166c22adfcec97c8029271266a4c7d7dcb31c593c3ec1734e9e792e85862fcd4ec1e684712aa6ac93b390ac2a023c92e45272cfcdc48cb005dac2368de638a47b77b59caf220036d52690245f6921eb245452c8c0181000b35048b8629377adbc5ecdcb8130e9157b828bd9c4f8de464d687599c96e4c2bf91354d3b60e6664cc08b059186fda3cfc85b607f2e1191e16624780c1d78a4639edfaba0785f31012b27246f04b3667aa88cfef263bae1ec3195a7eae6497ee91b7d344756f519ff990108936aff19ca1faa352dd285dbb302bb816a86db421f49763be81";
    let userInfo = "%7B%22id%22%3A2947281081401344%2C%22name%22%3A%22%E7%9F%A5%E8%AF%86%E5%BA%93%E6%B5%8B%E8%AF%95%22%2C%22avatar%22%3A%22%22%7D";

    Thenjs(1).then(2).then(3);
    let user = jwt.decode(sessionId);
    logger.info(user);

}