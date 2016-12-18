'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_1oxzy9kj47 = function () {
  var path = '/Users/jason/workspaces/github/bingchonghai/services/src/app/configs/config.apitest.es',
      hash = '419515fb611c93e84dbe8998465b6c3584911259',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/jason/workspaces/github/bingchonghai/services/src/app/configs/config.apitest.es',
    statementMap: {
      '0': {
        start: {
          line: 3,
          column: 12
        },
        end: {
          line: 3,
          column: 23
        }
      },
      '1': {
        start: {
          line: 6,
          column: 0
        },
        end: {
          line: 6,
          column: 45
        }
      },
      '2': {
        start: {
          line: 7,
          column: 0
        },
        end: {
          line: 7,
          column: 40
        }
      },
      '3': {
        start: {
          line: 8,
          column: 0
        },
        end: {
          line: 8,
          column: 40
        }
      },
      '4': {
        start: {
          line: 9,
          column: 0
        },
        end: {
          line: 9,
          column: 48
        }
      },
      '5': {
        start: {
          line: 10,
          column: 0
        },
        end: {
          line: 13,
          column: 32
        }
      },
      '6': {
        start: {
          line: 14,
          column: 0
        },
        end: {
          line: 14,
          column: 27
        }
      },
      '7': {
        start: {
          line: 15,
          column: 0
        },
        end: {
          line: 15,
          column: 50
        }
      }
    },
    fnMap: {},
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 6,
            column: 17
          },
          end: {
            line: 6,
            column: 44
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 6,
            column: 17
          },
          end: {
            line: 6,
            column: 29
          }
        }, {
          start: {
            line: 6,
            column: 33
          },
          end: {
            line: 6,
            column: 44
          }
        }]
      },
      '1': {
        loc: {
          start: {
            line: 7,
            column: 17
          },
          end: {
            line: 7,
            column: 39
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 7,
            column: 17
          },
          end: {
            line: 7,
            column: 29
          }
        }, {
          start: {
            line: 7,
            column: 33
          },
          end: {
            line: 7,
            column: 39
          }
        }]
      },
      '2': {
        loc: {
          start: {
            line: 8,
            column: 17
          },
          end: {
            line: 8,
            column: 39
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 8,
            column: 17
          },
          end: {
            line: 8,
            column: 29
          }
        }, {
          start: {
            line: 8,
            column: 33
          },
          end: {
            line: 8,
            column: 39
          }
        }]
      },
      '3': {
        loc: {
          start: {
            line: 9,
            column: 17
          },
          end: {
            line: 9,
            column: 47
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 9,
            column: 17
          },
          end: {
            line: 9,
            column: 29
          }
        }, {
          start: {
            line: 9,
            column: 33
          },
          end: {
            line: 9,
            column: 47
          }
        }]
      },
      '4': {
        loc: {
          start: {
            line: 10,
            column: 17
          },
          end: {
            line: 10,
            column: 52
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 10,
            column: 17
          },
          end: {
            line: 10,
            column: 29
          }
        }, {
          start: {
            line: 10,
            column: 33
          },
          end: {
            line: 10,
            column: 52
          }
        }]
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0
    },
    f: {},
    b: {
      '0': [0, 0],
      '1': [0, 0],
      '2': [0, 0],
      '3': [0, 0],
      '4': [0, 0]
    },
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

var env = (++cov_1oxzy9kj47.s[0], process.env);

// db settings
++cov_1oxzy9kj47.s[1];
_base2.default.db.host = (++cov_1oxzy9kj47.b[0][0], env.ORT_HOST) || (++cov_1oxzy9kj47.b[0][1], '127.0.0.1');
++cov_1oxzy9kj47.s[2];
_base2.default.db.port = (++cov_1oxzy9kj47.b[1][0], env.ORT_PORT) || (++cov_1oxzy9kj47.b[1][1], '3306');
++cov_1oxzy9kj47.s[3];
_base2.default.db.user = (++cov_1oxzy9kj47.b[2][0], env.ORT_USER) || (++cov_1oxzy9kj47.b[2][1], 'root');
++cov_1oxzy9kj47.s[4];
_base2.default.db.pass = (++cov_1oxzy9kj47.b[3][0], env.ORT_PASS) || (++cov_1oxzy9kj47.b[3][1], 'rootrootroot');
++cov_1oxzy9kj47.s[5];
_base2.default.db.name = (++cov_1oxzy9kj47.b[4][0], env.ORT_NAME) || (++cov_1oxzy9kj47.b[4][1], 'bingchonghai_test'),

// cache settings
_base2.default.cache.host = '127.0.0.1';
++cov_1oxzy9kj47.s[6];
_base2.default.cache.port = '6379';
++cov_1oxzy9kj47.s[7];
_base2.default.cache.opts.namespace = 'bingchonghai_test';

exports.default = _base2.default;