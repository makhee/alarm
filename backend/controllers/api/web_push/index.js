const config = require('../../../config');
const webPush = require('web-push');
const { SUBSCRIPTION_TB } = require('../../../models');

class WebPush {
    constructor() { }

    setVapid() {
        webPush.setVapidDetails(
            'mailto:fzl7808777@gmail.com',
            config.FCM_PUBLIC_KEY,
            config.FCM_PRIVATE_KEY
        );
    }

    subscription(endpoint_json) {
        SUBSCRIPTION_TB.findAll({
            where: { auth: endpoint_json.keys.auth }
        })
        .then((res) => {
            if (res.length == 0) {
                SUBSCRIPTION_TB.create({
                    auth: endpoint_json.keys.auth,
                    endpoint: endpoint_json
                });
            }
        });
    }

    unsubscription(endpoint_json) {
        SUBSCRIPTION_TB.findAll({
            where: { auth: endpoint_json.keys.auth }
        })
        .then((res) => {
            if (res.length > 0) {
                SUBSCRIPTION_TB.destroy({
                    where: { auth: endpoint_json.keys.auth }
                });
            }
        });
    }

    send(endpoint, payload) {
        this.setVapid();
        webPush.sendNotification(endpoint, payload).catch((err) => {
            if (err.statusCode === 410) {
                return deleteSubscriptionFromDatabase(subscription._id)
            } else {
                console.log('Subscription is no longer valid: ', err)
            }
        });
    }
}

module.exports = new WebPush();