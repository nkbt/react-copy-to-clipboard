#!/usr/bin/env node
'use strict';


const {npm, CWD} = require(`./utils/bash`);


npm(`rimraf lib`, {cwd: CWD});
npm(`babel src --out-dir lib`, {
  cwd: CWD,
  env: {NODE_ENV: `production`}
});
