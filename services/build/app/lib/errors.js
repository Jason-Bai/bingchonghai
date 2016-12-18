'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_18z5el255j = function () {
  var path = '/Users/jason/workspaces/github/bingchonghai/services/src/app/lib/errors.es',
      hash = 'e9395c1bd48fe033cead8e9276a4a821e7969523',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/jason/workspaces/github/bingchonghai/services/src/app/lib/errors.es',
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Object.assign({}, _utils2.default.rest.errors, {
  /**
   * here define your error
   * error1: (msg) =>
   *
   * error2: (msg) =>
   */
});