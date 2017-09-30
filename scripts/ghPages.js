#!/usr/bin/env node
'use strict';


const path = require(`path`);
const {publish} = require(`gh-pages`);
const {CWD} = require(`./utils/bash`);


require(`./pub`);


const {name} = require(path.join(CWD, `package.json`));
publish(path.join(CWD, `pub`), {
  repo: `https://github.com/nkbt/${name}.git`,
  branch: `gh-pages`,
  message: `Publish examples`,
  user: {
    name: `Nik Butenko`,
    email: `noisekit@butenko.me`
  },
  clone: path.relative(CWD, `/tmp/${name}`),
  logger: message => console.log(message)
}, err => err ? console.error(err) : console.log(`Published`));
