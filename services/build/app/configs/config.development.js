'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_t3329lfgd = function () {
  var path = '/Users/jason/workspaces/github/bingchonghai/services/src/app/configs/config.development.es',
      hash = '61f00a53a8897af7d3c325c4d16beeca9e26d581',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/jason/workspaces/github/bingchonghai/services/src/app/configs/config.development.es',
    statementMap: {
      '0': {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 3,
          column: 29
        }
      },
      '1': {
        start: {
          line: 6,
          column: 0
        },
        end: {
          line: 6,
          column: 29
        }
      },
      '2': {
        start: {
          line: 7,
          column: 0
        },
        end: {
          line: 7,
          column: 24
        }
      },
      '3': {
        start: {
          line: 8,
          column: 0
        },
        end: {
          line: 8,
          column: 24
        }
      },
      '4': {
        start: {
          line: 9,
          column: 0
        },
        end: {
          line: 9,
          column: 32
        }
      },
      '5': {
        start: {
          line: 10,
          column: 0
        },
        end: {
          line: 10,
          column: 36
        }
      },
      '6': {
        start: {
          line: 13,
          column: 0
        },
        end: {
          line: 13,
          column: 32
        }
      },
      '7': {
        start: {
          line: 14,
          column: 0
        },
        end: {
          line: 14,
          column: 27
        }
      },
      '8': {
        start: {
          line: 15,
          column: 0
        },
        end: {
          line: 15,
          column: 49
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
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0
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

++cov_t3329lfgd.s[0];


_base2.default.service.port = '9088';

// db settings
++cov_t3329lfgd.s[1];
_base2.default.db.host = '127.0.0.1';
++cov_t3329lfgd.s[2];
_base2.default.db.port = '3306';
++cov_t3329lfgd.s[3];
_base2.default.db.user = 'root';
++cov_t3329lfgd.s[4];
_base2.default.db.pass = 'rootrootroot';
++cov_t3329lfgd.s[5];
_base2.default.db.name = 'bingchonghai_dev';

// cache settings
++cov_t3329lfgd.s[6];
_base2.default.cache.host = '127.0.0.1';
++cov_t3329lfgd.s[7];
_base2.default.cache.port = '6379';
++cov_t3329lfgd.s[8];
_base2.default.cache.opts.namespace = 'bingchonghai_dev';

exports.default = _base2.default;