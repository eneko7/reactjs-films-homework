/* eslint-disable global-require */
/* eslint-disable no-console */
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production') {
  console.log(`prod + ${process.env.NODE_ENV}`);
  module.exports = require('./config/webpack.production.config');
} else {
  console.log(`dev + ${process.env.NODE_ENV}`);
  module.exports = require('./config/webpack.development.config');
}
