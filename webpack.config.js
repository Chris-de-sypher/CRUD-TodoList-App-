/** @format */

const { resolve } = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "development",
  entry: {
    bundle: resolve(__dirname, 'src/index.js'),
    typewriter: resolve(__dirname, 'src/typewritter.js'),
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name][contenthash].js',
    clean:true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      title: 'My first webpack App',
      filename: 'index.html',
      template: 'src/template.html'
    })
  ],
  devServer: {
    static: {
      directory: resolve(__dirname, 'dist'),
    },
    port: 3000,
    hot: true,
    compress: true,
    historyApiFallback: true,
    open:true,
  },

}