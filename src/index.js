'use strict';

// Babel6 does not hack the default behaviour of ES Modules anymore, so we should export
const ReactComponentTemplate = require('./Component').default;

module.exports = ReactComponentTemplate;
