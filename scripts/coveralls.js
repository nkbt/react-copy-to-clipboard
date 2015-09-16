/*
* 1. Add `.coveralls.yml` to the project root with content:
* repo_token: [project token from coveralls.io]
*
* 2. Run `npm run test:cov`
* 3. Run `npm run coveralls`
* */
var handleInput = require('coveralls/lib/handleInput');
var fs = require('fs');
var path = require('path');
var input = fs.readFileSync(
  path.resolve(__dirname, '..', 'reports', 'coverage', 'lcov.info'), 'utf-8');

require('coveralls/lib/logger');

handleInput(input, function (err) {
  if (err) {
    throw err;
  }
});
