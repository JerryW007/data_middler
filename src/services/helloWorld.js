const express = require('express');
const router = express.Router();
router.get(``, (req, resp) => {
    resp.send('hello world');
})

module.exports = router;