#!/usr/bin/env node
'use strict';


const {npm, CWD} = require(`./utils/bash`);


npm(`eslint --fix .`, {cwd: CWD});
