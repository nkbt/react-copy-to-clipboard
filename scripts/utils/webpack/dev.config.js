'use strict';


const {
  pathTo,
  plugins,
  loaders,
  resolve,
  stats
} = require(`./common`);


module.exports = {
  devtool: `#source-map`,

  entry: [
    pathTo(`example`, `index.js`),
    `webpack-dev-server/client?http://localhost:8080`
  ],
  output: {
    filename: `bundle.js`,
    path: pathTo(`dev`)
  },
  plugins: [
    plugins.html,
    plugins.define
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
