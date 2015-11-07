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
  devtool: 'eval',

  entry: [
    './src/example/Example.js',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server'
  ],
  output: {filename: 'bundle.js', path: path.resolve('example')},
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, loaders: ['react-hot', babelLoader], include: [path.resolve('src')]}
    ],
    preLoaders: [
      {test: /\.js$/, loaders: ['eslint'], include: [path.resolve('src')]}
    ]
  },
  resolve: {extensions: ['', '.js']},
  stats: {colors: true},
  eslint: {configFile: 'src/.eslintrc'},
  devServer: {
    hot: true,
    historyApiFallback: true,
    stats: {
      // Do not show list of hundreds of files included in a bundle
      chunkModules: false,
      colors: true
    }
  }
};
