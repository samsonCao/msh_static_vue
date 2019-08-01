const path = require('path')
module.exports = {
  configureWebpack: config => {
    return {
      resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
          '@': path.resolve(__dirname, 'src'),
          'assets': path.resolve(__dirname, 'src/assets'),
          'components': path.resolve(__dirname, 'src/components'),
          'helper': path.resolve(__dirname, 'src/helper'),
          'pages': path.resolve(__dirname, 'src/pages')
        }
      }
    }

    // alias: {
    //     '@': path.resolve(__dirname, 'src'),
    //     'helper': path.resolve(__dirname, 'src/helper'),
    // },
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      return {

      }
    }
  },
  lintOnSave: false,
  devServer: {
    // 禁用热加载
    hot: false,
    inline: false,
    host: '0.0.0.0',
    port: '8090',
    proxy: {
      '/api-node': {
        target: 'http://127.0.0.1:xxxxx/',
        changeOrigin: true
      }
    }
  }
}
