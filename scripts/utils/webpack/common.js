'use strict';


const webpack = require(`webpack`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const HtmlWebpackIncludeAssetsPlugin = require(`html-webpack-include-assets-plugin`);
const path = require(`path`);
const {NODE_ENV = `development`} = process.env;


const pathTo = p => path.join(process.cwd(), p);
exports.pathTo = pathTo;


const {
  config: {
    component: COMPONENT_NAME,
    externals: COMPONENT_EXTERNALS = {
      [`react`]: `React`,
      [`react-dom`]: `ReactDOM`
    }
  },
  name: PACKAGE_NAME
} = require(pathTo(`package.json`));
exports.PACKAGE_NAME = PACKAGE_NAME;
exports.COMPONENT_NAME = COMPONENT_NAME;


if (!COMPONENT_NAME) {
  throw Error(`<package.json>.config.component name is required`);
}


exports.PACKAGE_NAME = PACKAGE_NAME;


exports.loaders = {
  css: {
    test: /\.css$/,
    loader: `style-loader!css-loader`,
    include: [pathTo(`src`), pathTo(`example`)]
  },
  babel: {
    test: /\.js$/,
    loader: `babel-loader`,
    include: [pathTo(`src`), pathTo(`example`)],
    options: {
      babelrc: false,
      presets: [
        `react`,
        [`env`, {modules: false}]
      ],
      plugins: [
        `transform-object-rest-spread`,
        `transform-class-properties`
      ],
      env: {
        production: {
          plugins: [
            [`transform-react-remove-prop-types`, {removeImport: true}]
          ]
        }
      }
    }
  }
};


exports.plugins = {
  define: new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
  }),
  html: new HtmlWebpackPlugin(),
  uglify: new webpack.optimize.UglifyJsPlugin(),
  include: assets => new HtmlWebpackIncludeAssetsPlugin({
    assets,
    append: false
  }),
  loaderOptions: new webpack.LoaderOptionsPlugin({
    minimize: true
  })
};


exports.resolve = {
  extensions: [`.js`]
};


exports.stats = {colors: true};


exports.externals = COMPONENT_EXTERNALS;
