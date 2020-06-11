require('dotenv').config();
const webPush = require('web-push');

class WebPush {
    constructor() {}

    setVapid() {
        webPush.setVapidDetails(
            'mailto:fzl7808777@gmail.com',
            process.env.WEB_PUSH_PUBLIC_KEY,
            process.env.WEB_PUSH_PRIVATE_KEY
        );
    }

    subscription(endpoint) {
        // const store = await Store.create({ name: "Joe's corner store", address: { address1: "123 test street", city: "Los Angeles", state: "CA" } })
        console.log(endpoint);
    }

    unsubscription(endpoint) {
        console.log(endpoint);
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