const _ = require('lodash');
const home = require('./home');
const session = require('./session');
const user = require('./user');
const category = require('./category');
const disease = require('./disease');

module.exports = _.flatten([
  home,
  session,
  user,
  category,
  disease,
]);
