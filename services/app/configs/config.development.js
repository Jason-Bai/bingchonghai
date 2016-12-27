const config = require('./base');

// api settings
config.service.port = '8099';

// db settings
config.db.host = '127.0.0.1';
config.db.port = '3306';
config.db.user = 'root';
config.db.pass = 'rootrootroot';
config.db.name = 'bingchonghai_dev';

// cache settings
config.cache.host = '127.0.0.1';
config.cache.port = '6379';
config.cache.opts.namespace = 'ORB';

module.exports = config;
