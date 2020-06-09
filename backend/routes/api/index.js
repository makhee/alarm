const router = require('express').Router();

router.get('/', function (req, res, next) {
    res.send('list of apis');
});

router.post('/subscribe', (req, res) => {
    console.log(subscription);
    res.send('subscribe');
});

module.exports = router;