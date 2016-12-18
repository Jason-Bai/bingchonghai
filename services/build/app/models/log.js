'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_jafvkom5j = function () {
  var path = '/Users/jason/workspaces/github/bingchonghai/services/src/app/models/log.es',
      hash = '0a6d7296de3a834c088bb77ec4517c99e5fe1b00',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/jason/workspaces/github/bingchonghai/services/src/app/models/log.es',
    statementMap: {
      '0': {
        start: {
          line: 4,
          column: 20
        },
        end: {
          line: 4,
          column: 36
        }
      },
      '1': {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 63,
          column: 5
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 6,
            column: 15
          },
          end: {
            line: 6,
            column: 16
          }
        },
        loc: {
          start: {
            line: 6,
            column: 30
          },
          end: {
            line: 64,
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

var _utils = require('../lib/utils');

var _utils2 = _interopRequireDefault(_utils);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sequelize = (++cov_jafvkom5j.s[0], _utils2.default.rest.Sequelize);

exports.default = function (sequelize) {
  ++cov_jafvkom5j.f[0];

  var Log;
  ++cov_jafvkom5j.s[1];
  return Log = _utils2.default._.extend(sequelize.define('log', {
    id: {
      type: Sequelize.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    verb: {
      type: Sequelize.STRING(10),
      allowNull: false,
      comment: '请求动作'
    },
    uri: {
      type: Sequelize.STRING(1024),
      allowNull: false,
      comment: '请求的路径'
    },
    userId: {
      type: Sequelize.UUID,
      allowNull: false,
      defaultValue: 0,
      comment: '请求用户id'
    },
    statusCode: {
      type: Sequelize.INTEGER,
      allowNull: false,
      comment: '请求状态， 2xx， 4xx, 5xx'
    },
    clientIp: {
      type: Sequelize.STRING(15),
      allowNull: false,
      comment: '请求来源IP'
    },
    params: {
      type: Sequelize.TEXT,
      comment: '请求的参数数据'
    },
    response: {
      type: Sequelize.TEXT,
      comment: '请求返回的内容'
    }
  }, {
    comment: '写操作日志表',
    freezeTableName: true,
    instanceMethods: {},
    classMethods: {},
    /** 禁止更新日志的记录，因为日志不需要更新操作 */
    updatedAt: false
  }), _base2.default, {
    sort: {
      default: 'id',
      allow: ['id', 'verb', 'userId', 'statusCode', 'createdAt']
    },
    writableCols: []
  });
};