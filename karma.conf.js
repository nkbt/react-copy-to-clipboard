'use strict';


var path = require('path');
var rimraf = require('rimraf');
var mkdirp = require('mkdirp');


var withCoverage = process.argv.indexOf('coverage') !== -1 || process.env.COVERAGE;

var webpackConfig = {
  devtool: 'eval',
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: withCoverage ?
      [
        {test: /\.js$/, loader: 'babel', include: [path.resolve('test')]},
        {test: /\.js$/, loader: 'isparta', include: [path.resolve('src')]}
      ] :
      [
        {
          test: /\.js$/, loader: 'babel', include: [path.resolve('src'), path.resolve('test')]
        }
      ]
  },
  stats: {
    colors: true
  }
};

var coverageDir = path.resolve(
  path.join(process.env.CIRCLE_ARTIFACTS || 'reports', 'coverage')
);


if (withCoverage) {
  rimraf.sync(coverageDir);
  mkdirp.sync(coverageDir);
}


module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'node_modules/babel-core/browser-polyfill.js',
      'test/index.js'
    ],
    webpack: webpackConfig,
    webpackMiddleware: {
      stats: {
        chunkModules: false,
        colors: true
      }
    },
    exclude: [],
    preprocessors: {
      'test/index.js': ['webpack']
    },
    reporters: ['progress'],
    junitReporter: {
      outputDir: path.resolve(process.env.CIRCLE_TEST_REPORTS || 'reports'),
      suite: ''
    },
    coverageReporter: {
      dir: coverageDir,
      subdir: '.',
      reporters: [
        {type: 'html'},
        {type: 'lcovonly'},
        {type: 'text'},
        {type: 'text-summary', file: 'text-summary.txt'}
      ]
    },
    captureTimeout: 90000,
    browserNoActivityTimeout: 60000,
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true
  });
};
