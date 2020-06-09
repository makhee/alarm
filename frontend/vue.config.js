module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000/api',
                changeOrigin: true,
                pathRewrite: { '^/api': '' }
            },
            '/js': {
                target: 'http://localhost:3000/js',
                changeOrigin: true,
                pathRewrite: { '^/js': '' },
                ws: false
            }
        },
    },
    outputDir: '../backend/public'
}