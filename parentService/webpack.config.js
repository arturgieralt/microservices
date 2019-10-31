const HtmlWebPackPlugin = require("html-webpack-plugin");
var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    publicPath: '/',
  },
    devServer: {
      proxy: {
        '/service1/': {
          target: 'http://localhost:3002',
          pathRewrite: {'^/api' : ''}
        }
      },
      port: 3000,
      historyApiFallback: true
    },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./static/index.html",
      filename: "./index.html"
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
};