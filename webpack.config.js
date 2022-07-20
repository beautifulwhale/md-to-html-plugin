const { resolve } = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
const { MdWebpackPlugin } = require('./plugin/index')
module.exports = {
    entry: resolve(__dirname, 'src/app.js'),
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'app[hash:16].js'
    },
    devtool: 'source-map',
    plugins: [
        new MdWebpackPlugin({
            template:resolve(__dirname,'test.md'),
            filename:'test.html'
        })
    ],
    devServer: {
        port: 8080
    }
}