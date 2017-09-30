'use strict';


const {CWD: SRC, bash} = require(`./bash`);


const BUILD_HASH = bash(`git rev-parse --short HEAD`, {stdio: `pipe`});
exports.BUILD_HASH = BUILD_HASH;


const {
  CIRCLE_BRANCH: BUILD_BRANCH = bash(`git rev-parse --abbrev-ref HEAD`, {stdio: `pipe`}),
  CIRCLE_BUILD_NUM: BUILD_NUM = `0`,
  CIRCLE_REPOSITORY_URL: BUILD_REPO = ``,
  CIRCLE_SHA1: BUILD_SHA1 = bash(`git rev-parse HEAD`, {stdio: `pipe`}),
  CIRCLE_USERNAME: BUILD_USER = process.env.USER,
  CIRCLE_TAG: BUILD_TAG = BUILD_HASH
} = process.env;
exports.BUILD_NUM = BUILD_NUM;
exports.BUILD_REPO = BUILD_REPO;
exports.BUILD_SHA1 = BUILD_SHA1;
exports.BUILD_USER = BUILD_USER;


const IS_RELEASE = `CIRCLE_TAG` in process.env;
exports.IS_RELEASE = IS_RELEASE;


const IS_BRANCH = `CIRCLE_BRANCH` in process.env && BUILD_BRANCH === `master`;
exports.IS_BRANCH = IS_BRANCH;


const IS_PR = `CIRCLE_PR_NUMBER` in process.env || !IS_BRANCH;
exports.IS_PR = IS_PR;


const {name: APP_NAME} = require(`${SRC}/package.json`);
exports.APP_NAME = APP_NAME;


const APP_VERSION = BUILD_TAG.replace(/^v/, ``);
exports.APP_VERSION = APP_VERSION;


const print = () => {
  const vars = Object.assign({}, exports);
  delete vars.print;
  console.log(`Vars:\n`, vars);
};
exports.print = print;
