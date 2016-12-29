if (process.env.NODE_ENV === 'production') {
  module.exports = require('./config.development');
} else {
  module.exports = require('./config.production');
}
