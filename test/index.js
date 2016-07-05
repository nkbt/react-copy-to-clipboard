import glob from 'glob';

const noop = () => null;

// Skip all extra extensions
require.extensions['.jpg'] = noop;
require.extensions['.jpeg'] = noop;
require.extensions['.png'] = noop;
require.extensions['.gif'] = noop;
require.extensions['.svg'] = noop;
require.extensions['.css'] = noop;
require.extensions['.ico'] = noop;

// copy-to-clipboard relies on navigator
global.navigator = {};

glob.sync('**/*-test.js', {realpath: true, cwd: __dirname}).forEach(require);
