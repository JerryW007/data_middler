const MongoClient = require('mongodb').Client;
const fudao = 'mongodb://testfudao:0i4SphfNM59UDnOe@10.10.254.11:6011/testhfs-fudao04';
const coll = '@StudentStudyPlan';

//1:读取学生各年级各维度得分情况
//    方案:每周执行一次，1亿的用户平均每秒执行165个人的维度值(1亿 /7/86400)
//    结合node异步IO的特性,可以并行
function init() {

}




