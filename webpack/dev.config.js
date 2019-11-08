
const {
  mode,
  pathTo,
  plugins,
  loaders,
  resolve,
  stats
} = require('./common');


module.exports = {
  mode,
  devtool: 'eval',

  entry: [
    pathTo('example', 'index.js'),
    'webpack-dev-server/client?http://localhost:8080'
  ],
  output: {
    filename: 'bundle.js',
    path: pathTo('dev')
  },
  plugins: [
    plugins.html
  ],
  module: {
    rules: [
      loaders.babel,
      loaders.css
    ]
  },
  resolve,
  stats,
  devServer: {
    historyApiFallback: true,
    stats: {
      // Do not show list of hundreds of files included in a bundle
      chunkModules: false,
      colors: true
    }
  }
};
