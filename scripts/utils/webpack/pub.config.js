'use strict';


const ExtractTextPlugin = require(`extract-text-webpack-plugin`);

const {
  pathTo,
  plugins,
  loaders,
  resolve,
  stats,
  externals
} = require(`./common`);


module.exports = {
  devtool: false,
  entry: pathTo(`example`, `index.js`),
  output: {
    filename: `bundle.js`,
    path: pathTo(`pub`)
  },
  plugins: [
    plugins.define,
    plugins.html,
    plugins.include([
      `https://unpkg.com/react@16.0.0/umd/react.production.min.js`,
      `https://unpkg.com/react-dom@16.0.0/umd/react-dom.production.min.js`,
      `styles.css`
    ]),
    new ExtractTextPlugin(`styles.css`)
  ],
  module: {
    rules: [
      loaders.babel,
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: `style-loader`,
          use: `css-loader`
        })
      }
    ]
  },
  resolve,
  stats,
  externals
};
