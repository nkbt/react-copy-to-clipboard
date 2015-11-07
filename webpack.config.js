'use strict';


var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var babelLoader = 'babel?' +
  JSON.stringify({
    presets: ['es2015', 'react'],
    plugins: ['transform-es2015-modules-commonjs', 'transform-object-rest-spread']
  });


module.exports = {
  devtool: 'source-map',
  entry: './src/example/Example.js',
  output: {filename: 'bundle.js', path: path.resolve('example')},
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ],

  module: {
    loaders: [
      {test: /\.js$/, loader: babelLoader, include: [path.resolve('src')]}
    ]
  },
  resolve: {extensions: ['', '.js']},
  stats: {colors: true}
};
