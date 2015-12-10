"use strict";


const path = require('path');
const fs = require('fs');
const JSZip = require('jszip');
const glob = require('glob');
const zip = new JSZip();
const root = path.join(__dirname, '..');
const build = path.join(root, 'build');
const bowerJson = require(path.join(root, 'bower.json'));
const npmJson = require(path.join(root, 'package.json'));


bowerJson.version = npmJson.version;


zip.file('bower.json', JSON.stringify(bowerJson, null, 2));


glob.sync('*', {nodir: true, cwd: build}).forEach(file =>
  zip.file(file, fs.readFileSync(path.join(build, file), 'utf-8')));


fs.writeFileSync(
  path.join(root, 'build.zip'),
  zip.generate({type: 'nodebuffer', compression: 'DEFLATE', compressionOptions: {level: 9}})
);
