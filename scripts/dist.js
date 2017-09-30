#!/usr/bin/env node
'use strict';


const {npm, CWD} = require(`./utils/bash`);


npm(`rimraf build`, {cwd: CWD});
npm(`webpack --config ${require.resolve(`./utils/webpack/dist.config.js`)}`, {
  cwd: CWD,
  env: {NODE_ENV: `production`}
});
npm(`webpack --config ${require.resolve(`./utils/webpack/min.config.js`)}`, {
  cwd: CWD,
  env: {NODE_ENV: `production`}
});
