const router = require('express').Router();
const apiController = require('../../controllers/api');

router.get('/', function (req, res, next) {
    res.send('list of apis');
});

router.post('/subscribe', (req, res) => {
    apiController.webPush.subscription(req.body.endpoint);
    console.log('subscribe');
});

router.put('/subscribe', (req, res) => {
    apiController.webPush.unsubscription(req.body.endpoint);
    console.log('unsubscribe');
});

router.post('/sendpush', (req, res) => {
    apiController.webPush.send(req.body.endpoint, 'payload');
    console.log('sendpush');
});

module.exports = router;