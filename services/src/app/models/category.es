import U from '../lib/utils';
import ModelBase  from './base';
import config from '../configs'

const Sequelize = U.rest.Sequelize;

module.exports = (sequelize) => {
  var Category;
  return Category = U._.extend(sequelize.define('category', {
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
  }), ModelBase, {
    unique: ['name'],
    includes: {
      creator: 'user'
    },
    sort: {
      default: 'createdAt',
      allow: ['name', 'isDelete', 'parentId', 'creatorId', 'updatedAt', 'createdAt'],
    },
    writableCols: [
      'name', 'level', 'parentId', 'creatorId'
    ],
    editableCols: [
      'name', 'level', 'parentId', 'creatorId'
    ],
    /** 只有管理员才可以修改的字段 */
    onlyAdminCols: ['name', 'level'],

    /** 定义允许包含返回的字段，不设置为全部 */
    allowIncludeCols: [
      'name', 'level', 'isDelete', 'parentId', 'createdAt'
    ]
  });
};
