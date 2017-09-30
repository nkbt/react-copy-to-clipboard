'use strict';


const {
  pathTo,
  PACKAGE_NAME,
  COMPONENT_NAME,
  plugins,
  loaders,
  resolve,
  stats,
  externals
} = require(`./common`);


module.exports = {
  devtool: false,
  entry: pathTo(`src`, `index.js`),
  output: {
    filename: `${PACKAGE_NAME}.min.js`,
    path: pathTo(`build`),
    library: COMPONENT_NAME,
    libraryTarget: `umd`
  },
  plugins: [
    plugins.define,
    plugins.uglify,
    plugins.loaderOptions
  ],
  module: {
    rules: [
      loaders.babel
    ]
  },
  resolve,
  stats,
  externals
};
