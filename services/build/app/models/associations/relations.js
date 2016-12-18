'use strict';

var cov_6m9lg06de = function () {
  var path = '/Users/jason/workspaces/github/bingchonghai/services/src/app/models/associations/relations.es',
      hash = '186e2ef781477f85d16b5b0085584eb76afe03bc',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/jason/workspaces/github/bingchonghai/services/src/app/models/associations/relations.es',
    statementMap: {
      '0': {
        start: {
          line: 1,
          column: 0
        },
        end: {
          line: 15,
          column: 2
        }
      },
      '1': {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 7,
          column: 5
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 1,
            column: 17
          },
          end: {
            line: 1,
            column: 18
          }
        },
        loc: {
          start: {
            line: 1,
            column: 35
          },
          end: {
            line: 15,
            column: 1
          }
        }
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0
    },
    f: {
      '0': 0
    },
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

++cov_6m9lg06de.s[0];
module.exports = function (Models) {
  ++cov_6m9lg06de.f[0];
  ++cov_6m9lg06de.s[1];


  /** 每个分类唯一属于一个用户 **/
  Models.category.belongsTo(Models.user, {
    as: 'creator',
    foreignKey: 'creatorId'
  });

  /** 每个分类唯一属于一个分类
  Models.category.hasMany(Models.category, {
    as: 'items',
    foreign: 'parentId'
  })
  */
};