'use strict';

const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');
const PATHS = require('./paths');

// Merge webpack configuration files
const config = merge(common, {
  entry: {
    background: PATHS.src + '/background.js',
    fetch: PATHS.src + '/fetch.js',
  },
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000, // Docker container on Windows has issues with watching files
  },
});

module.exports = config;
