require('dotenv').config();

module.exports = {
    FCM_PUBLIC_KEY: process.env.FCM_PUBLIC_KEY,
    FCM_PRIVATE_KEY: process.env.FCM_PRIVATE_KEY,
    NAVER_AUTH_CLIENT_ID: process.env.NAVER_AUTH_CLIENT_ID,
    NAVER_AUTH_CLIENT_SECRET_KEY: process.env.NAVER_AUTH_CLIENT_SECRET_KEY,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_DATABASE: process.env.DB_DATABASE,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT
}