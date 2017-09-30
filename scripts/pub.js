#!/usr/bin/env node
'use strict';


const {npm, CWD} = require(`./utils/bash`);


npm(`rimraf lib`, {cwd: CWD});
npm(`webpack --config ${require.resolve(`./utils/webpack/pub.config.js`)}`, {
  cwd: CWD,
  env: {NODE_ENV: `production`}
});
