"use strict";


const exec = require('child_process').execSync;


process.env.NODE_ENV = process.argv[2];


exec(process.argv[3], {env: process.env, stdio: 'inherit'});
