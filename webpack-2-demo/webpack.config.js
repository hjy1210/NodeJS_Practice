const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const config = {
  context : path.resolve(__dirname, 'src'),
  entry: './app/index.js',
  output: {
    publicPath:"/dist/",
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {
            loader :'css-loader',
            options:{}
          }
        ]
      }
    ]
  },
  plugins: [
    //new webpack.optimize.UglifyJsPlugin()
  ]
};

module.exports = config;
