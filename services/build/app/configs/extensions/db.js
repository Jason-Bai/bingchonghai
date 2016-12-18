'use strict';

var cov_1gj9sqdo3c = function () {
  var path = '/Users/jason/workspaces/github/bingchonghai/services/src/app/configs/extensions/db.es',
      hash = '33443c7b454d519483c955734ca2beee01df4a71',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/jason/workspaces/github/bingchonghai/services/src/app/configs/extensions/db.es',
    statementMap: {
      '0': {
        start: {
          line: 1,
          column: 0
        },
        end: {
          line: 32,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      '0': 0
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

++cov_1gj9sqdo3c.s[0];
module.exports = {
  host: '127.0.0.1',
  port: 3306,
  name: 'openrest',
  encode: {
    set: 'utf8',
    collation: 'utf8_general_ci'
  },
  user: 'root',
  pass: '^7s*@asf21home($YUw',
  dialect: 'mysql',
  dialectOptions: {
    /** 支持大数的计算 */
    supportBigNumbers: true
  },
  logging: false,
  define: {
    underscored: false,
    freezeTableName: true,
    syncOnAssociation: false,
    charset: 'utf8',
    collate: 'utf8_general_ci',
    engine: 'InnoDB'
  },
  syncOnAssociation: true,
  pool: {
    min: 2,
    max: 10,
    /** 单位毫秒 */
    idle: 300 * 1000
  }
};