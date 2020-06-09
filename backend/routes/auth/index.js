const router = require('express').Router();

router.get('/naver', function (req, res, next) {
    res.send('list of apis');
});

router.get('/naver_oauth', function (req, res, next) {
    res.send('new');
});

module.exports = router;