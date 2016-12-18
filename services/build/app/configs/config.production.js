'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_lrwgqyo0v = function () {
  var path = '/Users/jason/workspaces/github/bingchonghai/services/src/app/configs/config.production.es',
      hash = '70b92f004b8fe4f97cd72b8b20b475bdda6659b0',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/jason/workspaces/github/bingchonghai/services/src/app/configs/config.production.es',
    statementMap: {
      '0': {
        start: {
          line: 4,
          column: 0
        },
        end: {
          line: 4,
          column: 27
        }
      },
      '1': {
        start: {
          line: 5,
          column: 0
        },
        end: {
          line: 5,
          column: 29
        }
      },
      '2': {
        start: {
          line: 6,
          column: 0
        },
        end: {
          line: 6,
          column: 39
        }
      },
      '3': {
        start: {
          line: 7,
          column: 0
        },
        end: {
          line: 7,
          column: 30
        }
      },
      '4': {
        start: {
          line: 8,
          column: 0
        },
        end: {
          line: 8,
          column: 32
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0
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

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** web service 的一些信息,主要提供给 restify.createServer 使用 */
++cov_lrwgqyo0v.s[0];
_base2.default.service.port = 9088;
++cov_lrwgqyo0v.s[1];
_base2.default.db.host = '127.0.0.1';
++cov_lrwgqyo0v.s[2];
_base2.default.db.name = 'openrest_production';
++cov_lrwgqyo0v.s[3];
_base2.default.db.user = 'openrest_w';
++cov_lrwgqyo0v.s[4];
_base2.default.db.pass = 'Maa3R%20oP3t';

exports.default = _base2.default;