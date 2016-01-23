'use strict';

// Babel6 does not hack the default behaviour of ES Modules anymore, so we should export
const CopyToClipboard = require('./CopyToClipboard').default;

module.exports = CopyToClipboard;
