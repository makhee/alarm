require('dotenv').config();

module.exports = {
    FCM_PUBLIC_KEY: process.env.FCM_PUBLIC_KEY,
    FCM_PRIVATE_KEY: process.env.FCM_PRIVATE_KEY,
    WEB_PUSH_PUBLIC_KEY: process.env.WEB_PUSH_PUBLIC_KEY,
    WEB_PUSH_PRIVATE_KEY: process.env.WEB_PUSH_PRIVATE_KEY,
    NAVER_AUTH_CLIENT_ID: process.env.NAVER_AUTH_CLIENT_ID,
    NAVER_AUTH_CLIENT_SECRET_KEY: process.env.NAVER_AUTH_CLIENT_SECRET_KEY
}