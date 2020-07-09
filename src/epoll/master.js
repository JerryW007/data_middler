const childProcess = require('child_process');
const cpuNum = require('os').cpus().length;

for (let i = 0; i < cpuNum; ++i) {
    const worker = childProcess.fork('./worker.js');
    worker.on('message', (msg) => {
        console.log('[]Received msg form worker:' + msg);
    }) 
}

console.log('master: hello world');
