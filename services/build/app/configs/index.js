'use strict';

var cov_pj7imwcmu = function () {
  var path = '/Users/jason/workspaces/github/bingchonghai/services/src/app/configs/index.es',
      hash = 'cc1a3d66ef457cc2ff12c0de18d66e49839187bd',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/jason/workspaces/github/bingchonghai/services/src/app/configs/index.es',
    statementMap: {
      '0': {
        start: {
          line: 1,
          column: 0
        },
        end: {
          line: 1,
          column: 78
        }
      }
    },
    fnMap: {},
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 1,
            column: 37
          },
          end: {
            line: 1,
            column: 74
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 1,
            column: 37
          },
          end: {
            line: 1,
            column: 57
          }
        }, {
          start: {
            line: 1,
            column: 61
          },
          end: {
            line: 1,
            column: 74
          }
        }]
      }
    },
    s: {
      '0': 0
    },
    f: {},
    b: {
      '0': [0, 0]
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

++cov_pj7imwcmu.s[0];
module.exports = require('./config.' + ((++cov_pj7imwcmu.b[0][0], process.env.NODE_ENV) || (++cov_pj7imwcmu.b[0][1], 'development')));