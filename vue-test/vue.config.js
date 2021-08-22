module.exports = {
    productionSourceMap: true,
    devServer: {
        disableHostCheck: true,
         port: 8778,
        //解决跨域的问题
         proxy: {
             ["/redis"]: {
                target: 'http://localhost:8771',
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    ['^' + "/redis"]: ''
                },
            },
         },
    },
}