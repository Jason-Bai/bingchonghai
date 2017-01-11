const U = require('../lib/utils');
const ModelBase = require('./base');

const Sequelize = U.rest.Sequelize;

module.exports = (sequelize) => {
  const Disease = U._.extend(sequelize.define('disease', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    isDelete: {
      type: Sequelize.ENUM('yes', 'no'),
      defaultValue: 'no',
    },
    categoryId: {
      type: Sequelize.INTEGER,
      defaultValue: 1,
    },
    creatorId: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
  }, {
    comment: '分类表',
    freezeTableName: true,
    hooks: {},
    instanceMethods: {},
    classMethods: {},
  }), ModelBase, {
    unique: ['name'],
    includes: {
      creator: 'user',
      category: 'category',
    },
    sort: {
      default: 'createdAt',
      allow: ['name', 'isDelete', 'categoryId', 'creatorId', 'updatedAt', 'createdAt'],
    },
    writableCols: [
      'name', 'categoryId', 'creatorId',
    ],
    editableCols: [
      'name', 'categoryId', 'creatorId',
    ],
    /** 只有管理员才可以修改的字段 */
    onlyAdminCols: ['name'],

    /** 定义允许包含返回的字段，不设置为全部 */
    allowIncludeCols: [
      'name', 'isDelete', 'categoryId', 'createdAt',
    ],
  });
  return Disease;
};
