const path = require('path')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const devConfig = {
  mode: 'development',
  devServer: {
    // 配置开发环境访问前缀
    // 当设置为‘/prefix/’时 浏览器地址会变为127.0.0.1:8080/prefix/，会自动找/prefix/index.html 找不到时，index.html的寻找路径以contentBase为主 另外注意webpack-dev-server本身依赖的是一个虚拟的dist目录
    // 默认空字符串 没有设置值时，取out.publicPath 两者作用不同 不存在优先级问题 推荐根据环境 配置不同的output.publicPath
    // publicPath: '/prefix/', 
    // 设置index.html的寻找路径
    // contentBase: path.resolve(__dirname, '../dist'),
    // watchContentBase: true,
    host: '127.0.0.1', //默认 localhost
    port: '8080', //默认 8080
    hot: true, //FIXME:设置之后 就发现页面不对了 没有加载main.js
    open: true, //自动打开浏览器
    quiet: true, //净化终端信息 清除掉无用冗余的打包信息
  }
}

module.exports = merge(commonConfig, devConfig)
