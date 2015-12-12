'use strict';

// Babel6 does not hack the default behaviour of ES Modules anymore, so we should export
const Component = require('./Component').default;

module.exports = Component;
