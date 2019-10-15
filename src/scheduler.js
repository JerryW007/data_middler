/* jshint esversion:6 */
/**
* scheduler.js
* @Autor  王朝
* @Description 多线程的调度者
* @Created 2019-08-26 12:19:29
* @LastModified 2019-08-26 12:19:29
* @EnterpriseEmail wangchao04@iyunxiao.com
*/

class Scheduler {
    constructor(){
        this.TotalThreadNumber = 10; //总的线程数        
        this.Offset = 0; //记录拉取数据的位置
    }
}

module.exports = new Scheduler();