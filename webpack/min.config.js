
const {
  mode,
  pathTo,
  PACKAGE_NAME,
  COMPONENT_NAME,
  plugins,
  loaders,
  resolve,
  stats,
  externals
} = require('./common');


module.exports = {
  mode,
  devtool: false,
  entry: pathTo('src', 'index.js'),
  output: {
    filename: `${PACKAGE_NAME}.min.js`,
    path: pathTo('build'),
    library: COMPONENT_NAME,
    libraryTarget: 'umd'
  },
  plugins: [
    plugins.emptyPropTypes,
    plugins.loaderOptions
  ],
  module: {
    rules: [
      loaders.babelProd
    ]
  },
  resolve,
  stats,
  externals
};
