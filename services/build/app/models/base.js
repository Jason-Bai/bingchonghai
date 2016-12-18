'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_12nq67irku = function () {
  var path = '/Users/jason/workspaces/github/bingchonghai/services/src/app/models/base.es',
      hash = 'd0da7704093738e9830c82fa0100367b68e66152',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/jason/workspaces/github/bingchonghai/services/src/app/models/base.es',
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

exports.default = {
  /** 分页设定 */
  pagination: {
    maxResults: 10,
    maxResultsLimit: 5000,
    maxStartIndex: 500000
  },

  /** sort 设定 */
  sort: {
    default: 'id',
    allow: ['id', 'createdAt', 'updatedAt']
  }
};