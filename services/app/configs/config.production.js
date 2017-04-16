const config = require('./base');

/** web service 的一些信息,主要提供给 restify.createServer 使用 */
config.service.port = 9088;
config.db.host = '127.0.0.1';
config.db.name = 'openrest_production';
config.db.user = 'openrest_w';
config.db.pass = 'Maa3R%20oP3t';

// allowGuestAccessPaths
config.allowGuestAccessPaths = [
  // 允许登陆
  'POST /session',
  // 允许注册
  'POST /users',
  // 农业政策
  'GET /policys',
  // 农业政策详情
  'GET /policys/:id',
];

module.exports = config;
