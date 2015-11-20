var path = require('path');
var fs = require('fs');
var JSZip = require('jszip');
var glob = require('glob');
var zip = new JSZip();
var root = path.join(__dirname, '..');
var build = path.join(root, 'build');
var bowerJson = require(path.join(root, 'bower.json'));
var npmJson = require(path.join(root, 'package.json'));


bowerJson.version = npmJson.version;


zip.file('bower.json', JSON.stringify(bowerJson, null, 2));


glob.sync('*', {nodir: true, cwd: build}).forEach(function (file) {
  zip.file(file, fs.readFileSync(path.join(build, file), 'utf-8'));
});


fs.writeFileSync(path.join(root, 'build.zip'),
  zip.generate({type: 'nodebuffer', compression: 'DEFLATE', compressionOptions: {level: 9}}));
