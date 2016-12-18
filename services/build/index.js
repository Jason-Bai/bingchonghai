#! /usr/bin/env node
'use strict';

var cov_mj0dvee33 = function () {
  var path = '/Users/jason/workspaces/github/bingchonghai/services/src/index.es',
      hash = '56614cc1cda12ecb9ac631f0d5ebee5f07db101b',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/jason/workspaces/github/bingchonghai/services/src/index.es',
    statementMap: {
      '0': {
        start: {
          line: 6,
          column: 14
        },
        end: {
          line: 6,
          column: 32
        }
      },
      '1': {
        start: {
          line: 8,
          column: 0
        },
        end: {
          line: 8,
          column: 50
        }
      },
      '2': {
        start: {
          line: 11,
          column: 0
        },
        end: {
          line: 11,
          column: 70
        }
      },
      '3': {
        start: {
          line: 14,
          column: 0
        },
        end: {
          line: 14,
          column: 43
        }
      },
      '4': {
        start: {
          line: 15,
          column: 0
        },
        end: {
          line: 15,
          column: 43
        }
      },
      '5': {
        start: {
          line: 16,
          column: 0
        },
        end: {
          line: 16,
          column: 41
        }
      },
      '6': {
        start: {
          line: 17,
          column: 0
        },
        end: {
          line: 17,
          column: 43
        }
      },
      '7': {
        start: {
          line: 19,
          column: 0
        },
        end: {
          line: 22,
          column: 3
        }
      },
      '8': {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 20,
          column: 25
        }
      },
      '9': {
        start: {
          line: 20,
          column: 13
        },
        end: {
          line: 20,
          column: 25
        }
      },
      '10': {
        start: {
          line: 21,
          column: 2
        },
        end: {
          line: 21,
          column: 68
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 19,
            column: 27
          },
          end: {
            line: 19,
            column: 28
          }
        },
        loc: {
          start: {
            line: 19,
            column: 46
          },
          end: {
            line: 22,
            column: 1
          }
        }
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 6,
            column: 14
          },
          end: {
            line: 6,
            column: 32
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 6,
            column: 14
          },
          end: {
            line: 6,
            column: 26
          }
        }, {
          start: {
            line: 6,
            column: 30
          },
          end: {
            line: 6,
            column: 32
          }
        }]
      },
      '1': {
        loc: {
          start: {
            line: 20,
            column: 2
          },
          end: {
            line: 20,
            column: 25
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 20,
            column: 2
          },
          end: {
            line: 20,
            column: 25
          }
        }, {
          start: {
            line: 20,
            column: 2
          },
          end: {
            line: 20,
            column: 25
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
      '7': 0,
      '8': 0,
      '9': 0,
      '10': 0
    },
    f: {
      '0': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0]
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

var _utils = require('./app/lib/utils');

var _utils2 = _interopRequireDefault(_utils);

var _configs = require('./app/configs');

var _configs2 = _interopRequireDefault(_configs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cache = (++cov_mj0dvee33.s[0], (++cov_mj0dvee33.b[0][0], _configs2.default.cache) || (++cov_mj0dvee33.b[0][1], {}));

++cov_mj0dvee33.s[1];
_utils2.default.cached.init(cache.port, cache.host, cache.opts);

++cov_mj0dvee33.s[2];
_utils2.default.rest.utils.logger = _utils2.default.logger = _utils2.default.bunyan.createLogger(_configs2.default.logger);

// open-rest 插件
++cov_mj0dvee33.s[3];
require('open-rest-helper-getter')(_utils2.default.rest);
++cov_mj0dvee33.s[4];
require('open-rest-helper-assert')(_utils2.default.rest);
++cov_mj0dvee33.s[5];
require('open-rest-helper-rest')(_utils2.default.rest);
++cov_mj0dvee33.s[6];
require('open-rest-helper-params')(_utils2.default.rest);

++cov_mj0dvee33.s[7];
_utils2.default.rest(__dirname + '/app', function (error, server) {
  ++cov_mj0dvee33.f[0];
  ++cov_mj0dvee33.s[8];

  if (error) {
      ++cov_mj0dvee33.b[1][0];
      ++cov_mj0dvee33.s[9];
      throw Error;
    } else {
    ++cov_mj0dvee33.b[1][1];
  }++cov_mj0dvee33.s[10];
  console.log('service listening on %s port!', _configs2.default.service.port);
});