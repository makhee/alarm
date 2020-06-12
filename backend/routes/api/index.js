const router = require('express').Router();
const apiController = require('../../controllers/api');

router.get('/', function (req, res, next) {
    res.send('list of apis');
});

router.post('/subscribe', (req, res) => {
    if (req.body.endpoint) {
        apiController.webPush.subscription(req.body.endpoint);
    }

    res.status(200);
});

router.delete('/subscribe', (req, res) => {
    if (req.body.endpoint) {
        apiController.webPush.unsubscription(req.body.endpoint);
    }

    res.status(200);
});

router.post('/sendpush', (req, res) => {
    if (req.body.endpoint) {
        apiController.webPush.getTemplate(req.body.endpoint.keys.auth, (template) => {
            apiController.webPush.send(req.body.endpoint, template);
        });
    }

    res.status(200);
});

module.exports = router;