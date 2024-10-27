const config = require('../eslint.config.js');

module.exports = {
  extends: ['next/core-web-vitals', 'prettier'],
  ...config,
};
