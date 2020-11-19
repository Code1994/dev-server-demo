const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    main: path.resolve(__dirname, '../src/main.js')
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src')
    },
    extensions: ['.js', '.json']
  },
  output: {
    // publicPath: '/prefix/',
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[chunkhash:6].js'
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../assets'),
        to: path.resolve(__dirname, '../dist/assets')
      }
    ]),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html')
    })
  ]
}
