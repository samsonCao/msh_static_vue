// const path = require('path');

module.exports = {
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
        } else {
            return {

            }
        }
    },
    lintOnSave: true,
    devServer: {
        // 禁用热加载
        hot: false,
        inline: false,
        host: '0.0.0.0',
        port: '8888',
        proxy: {
            '/api-node': {
                target: 'http://127.0.0.1:15017/',
                changeOrigin: true,
            },
        },
    }
}
