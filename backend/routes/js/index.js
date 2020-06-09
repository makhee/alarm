const router = require('express').Router();

router.get('/sw.js', (req, res) => {
    res.sendFile('/app/backend/lib/service_worker/index.js');
});

module.exports = router;