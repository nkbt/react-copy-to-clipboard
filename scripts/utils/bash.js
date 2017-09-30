'use strict';


const {execSync} = require(`child_process`);
const {resolve} = require(`path`);


const {NODE_DEBUG = ``} = process.env;
const isDebug = NODE_DEBUG.split(`,`).indexOf(`bash`) >= 0;


const CWD = process.cwd();
exports.CWD = CWD;


const debug = (...args) => isDebug && console.log(...args);


const clean = str => str.replace(/\s+/g, ` `).trim();
exports.clean = clean;


const bash = (cmd, options = {}) => {
  const cleanCmd = clean(cmd);
  debug(`>>`, cleanCmd);
  const result = execSync(cleanCmd, Object.assign(
    {stdio: `inherit`},
    options,
    {env: Object.assign({}, process.env, options.env)}));
  const stringResult = result ? result.toString().trim() : ``;
  debug(`<<`, stringResult);
  return stringResult;
};
exports.bash = bash;


const NPM_BIN = bash(`yarn bin`, {
  cwd: resolve(__dirname, `..`, `..`),
  stdio: `pipe`
});
exports.NPM_BIN = NPM_BIN;


const npm = (cmd, options) =>
  bash(`${NPM_BIN}/${cmd}`, options);
exports.npm = npm;


const rsync = (from, to, options) =>
  bash(`rsync --quiet --archive ${from} ${to}`, options);
exports.rsync = rsync;

