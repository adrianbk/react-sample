const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const validate = require('webpack-validator');
const parts = require('./libs/parts');


const PATHS = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build')
};


const common = {

  // Allows imports without the file extension
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry: PATHS.src + '/view/main.js',
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Custom template',
      template: PATHS.src + '/view/app-template.ejs'
    })
  ]
};

var config;

// Detect how npm is run and branch based on that
switch (process.env.npm_lifecycle_event) {
  case 'build':
    config = merge(common,
      parts.setupJsx(PATHS.src),
      {
        devtool: 'source-map'
      }
    );
    break;
  default:
    config = merge(
      common,
      parts.setupJsx(PATHS.src),
      parts.devServer({
        host: process.env.HOST,
        port: process.env.PORT
      }),
      {
        devtool: 'eval-source-map'
      }
    );
}

module.exports = validate(config); //webpack-validator
