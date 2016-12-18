'use strict';

var cov_dk2zpvlky = function () {
  var path = '/Users/jason/workspaces/github/bingchonghai/services/src/app/controllers/helper/index.es',
      hash = '2dbdb907932ed921f546d70cc5e417ff3f5491c5',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/jason/workspaces/github/bingchonghai/services/src/app/controllers/helper/index.es',
    statementMap: {
      '0': {
        start: {
          line: 3,
          column: 14
        },
        end: {
          line: 3,
          column: 66
        }
      },
      '1': {
        start: {
          line: 5,
          column: 0
        },
        end: {
          line: 5,
          column: 59
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      '0': 0,
      '1': 0
    },
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

var _utils = require('../../lib/utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modules = (++cov_dk2zpvlky.s[0], _utils2.default.getModules(__dirname, 'js', ['index', 'defaults']));

++cov_dk2zpvlky.s[1];
module.exports = Object.assign({}, _utils2.default.rest.helper, modules);