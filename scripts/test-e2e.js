#!/usr/bin/env node

var selenium = require('selenium-standalone');
var cp = require('child_process');
var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require(path.resolve(__dirname, '..', 'webpack.config.js'));
var logDir = process.env.LOG_DIR ?
  path.resolve(process.env.LOG_DIR) : path.resolve(__dirname, '..', 'reports');
var reportDir = process.env.REPORT_DIR ?
  path.resolve(process.env.REPORT_DIR) : path.resolve(__dirname, '..', 'reports', 'test-e2e');

var seleniumLog = fs.createWriteStream(path.resolve(logDir, 'selenium.log'));
var nightwatchRunner = path
  .resolve(__dirname, '..', 'node_modules', 'nightwatch', 'bin', 'runner.js');


function startServer(cb) {
  var server = new WebpackDevServer(webpack(webpackConfig), {quiet: true});

  server.listen(8080, 'localhost', cb);
}


function onServerStarted(seleniumChild) {
  return function (err) {
    if (err) {
      console.error(err);
      seleniumChild.kill('SIGINT');
      return process.exit(1);
    }

    cp.fork(nightwatchRunner,
      [
        '--config', path.resolve(__dirname, '..', 'nightwatch.json'),
        '--output', reportDir
      ])
      .on('error', function (error) {
        console.error(error);
        seleniumChild.kill('SIGINT');
        return process.exit(1);
      })
      .on('close', function (code) {
        seleniumChild.kill('SIGINT');
        process.exit(code);
      });
  };
}


function onSeleniumStarted(err, seleniumChild) {
  if (err) {
    console.error(err);
    return process.exit(1);
  }
  seleniumChild.stdout.pipe(seleniumLog);
  seleniumChild.stderr.pipe(seleniumLog);
  startServer(onServerStarted(seleniumChild));
}


function onSeleniumInstalled(err) {
  if (err) {
    console.error(err);
    return process.exit(1);
  }

  selenium.start({seleniumArgs: ['-debug']}, onSeleniumStarted);
}


selenium.install({}, onSeleniumInstalled);
