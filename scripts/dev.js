#!/usr/bin/env node
'use strict';


const {npm, CWD} = require(`./utils/bash`);


npm(`webpack-dev-server --config ${require.resolve(`./utils/webpack/dev.config.js`)}`, {
  cwd: CWD,
  env: {NODE_ENV: `development`}
});
