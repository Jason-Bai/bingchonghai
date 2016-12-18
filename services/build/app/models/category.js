'use strict';

var cov_f05u8w4du = function () {
  var path = '/Users/jason/workspaces/github/bingchonghai/services/src/app/models/category.es',
      hash = 'e311b6deacc74fac49340b2c4aebd2d4cb5f614d',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/jason/workspaces/github/bingchonghai/services/src/app/models/category.es',
    statementMap: {
      '0': {
        start: {
          line: 5,
          column: 18
        },
        end: {
          line: 5,
          column: 34
        }
      },
      '1': {
        start: {
          line: 7,
          column: 0
        },
        end: {
          line: 65,
          column: 2
        }
      },
      '2': {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 64,
          column: 5
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 7,
            column: 17
          },
          end: {
            line: 7,
            column: 18
          }
        },
        loc: {
          start: {
            line: 7,
            column: 32
          },
          end: {
            line: 65,
            column: 1
          }
        }
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0
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

var _configs = require('../configs');

var _configs2 = _interopRequireDefault(_configs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sequelize = (++cov_f05u8w4du.s[0], _utils2.default.rest.Sequelize);

++cov_f05u8w4du.s[1];
module.exports = function (sequelize) {
  ++cov_f05u8w4du.f[0];

  var Category;
  ++cov_f05u8w4du.s[2];
  return Category = _utils2.default._.extend(sequelize.define('category', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    level: {
      type: Sequelize.INTEGER,
      defaultValue: 1
    },
    isDelete: {
      type: Sequelize.ENUM('yes', 'no'),
      defaultValue: 'no'
    },
    parentId: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    creatorId: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    }
  }, {
    comment: '分类表',
    freezeTableName: true,
    hooks: {},
    instanceMethods: {},
    classMethods: {}
  }), _base2.default, {
    unique: ['name'],
    includes: {
      creator: 'user'
    },
    sort: {
      default: 'createdAt',
      allow: ['name', 'isDelete', 'parentId', 'creatorId', 'updatedAt', 'createdAt']
    },
    writableCols: ['name', 'level', 'parentId', 'creatorId'],
    editableCols: ['name', 'level', 'parentId', 'creatorId'],
    /** 只有管理员才可以修改的字段 */
    onlyAdminCols: ['name', 'level'],

    /** 定义允许包含返回的字段，不设置为全部 */
    allowIncludeCols: ['name', 'level', 'isDelete', 'parentId', 'createdAt']
  });
};