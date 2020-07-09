const { Router } = require('express');
const router = Router();
const helloWorld = require('./services/helloWorld');

router.get('/status', function (req, resp) {
    resp.send('Hello,Middler System!');
});

router.use('/health', helloWorld);

module.exports = {
    router,
    beforeRouter: Router(),
}