// eslint-disable-next-line no-unused-vars
const path = require("path");

module.exports = {
    runtimeCompiler : true,
    pages:{
        money2021:{
            entry: 'src/pages/money2021/main.js',
            template: 'src/pages/money2021/index.html',
            filename: 'money2021.html'
        }
    },
    devServer: {
        proxy: {
            '/seminar': {
                target: 'https://event.hankyung.com/',
                changeOrigin: true
            }
        }
    },
    outputDir: 'docs',
    publicPath: '/vue/money2021'
}