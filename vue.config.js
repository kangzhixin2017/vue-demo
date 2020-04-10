module.exports = {
    devServer: {
        //配置跨域请求问题
        proxy: {
            '/api': {
                target: 'http://www.web-jshtml.cn/productapi', // 设置你调用的接口域名和端口号
                changeOrigin: true,     // 跨域
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        before: app => { }
    }
}