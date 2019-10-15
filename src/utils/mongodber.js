/* jshint esversion:8 */
/**
 * mongodber.js
 * @Autor  王朝
 * @Description 
 * @Created 2019-08-26 14:42:22
 * @LastModified 2019-08-26 14:42:22
 * @EnterpriseEmail wangchao04@iyunxiao.com
 */

const MongoClient = require('mongodb').MongoClient;
const logger = require('./logger').getLogger(__filename);

class Mongodber {
    constructor() {
        this.databases = {
            'test': 'mongodb://127.0.0.1:27017/test',
        };
        this.dbs = {};
    }
}
module.exports = new Mongodber();


Mongodber.prototype.init = async function () {
    let dbs = this.dbs;
    for (let dbName in this.databases) {
        try {
            logger.info('Init database:' + this.databases[dbName]);
            let client = await MongoClient.connect(this.databases[dbName], {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
            if (!this.client) {
                this.client = client;
            }
            dbs[dbName] = client.db(dbName);
            logger.info('Success init db:', dbName);
        } catch (err) {
            logger.error('初始化数据库错误', err);
            throw new Error(err);
        }
    }
};

Mongodber.prototype.use = function (db) {
    return this.dbs[db];
};
Mongodber.prototype.getClient = function () {
    return this.client;
};