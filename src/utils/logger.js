/* jshint esversion:8 */
/**
 * logger.js
 * @Autor  王朝
 * @Description 
 * @Created 2019-08-26 18:36:06
 * @LastModified 2019-08-26 18:36:06
 * @EnterpriseEmail wangchao04@iyunxiao.com
 */

const log4js = require('log4js');

log4js.configure({
    appenders: {
        console: {
            type: 'console',
        },
    },
    categories: {
        default: {
            appenders: ['console'],
            level: 'debug'
        },
    }
});


module.exports.getLogger = function (name) { //name取categories项
    if (name) {
        name = name.substring(name.indexOf('data_middler') + 'data_middler'.length, name.length);
    }
    return log4js.getLogger(name || 'console');
};

module.exports.useLogger = function (app, logger) { //用来与express结合
    app.use(log4js.connectLogger(logger || log4js.getLogger('default'), {
        format: '[:remote-addr :method :url :status :response-timems][:referrer HTTP/:http-version :user-agent]' //自定义输出格式
    }));
};