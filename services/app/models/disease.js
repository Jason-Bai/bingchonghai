const U = require('../lib/utils');
const ModelBase = require('./base');

const Sequelize = U.rest.Sequelize;

module.exports = (sequelize) => {
  const Disease = U._.extend(sequelize.define('disease', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER.UNSIGNED,
    },
    name: {
      type: Sequelize.type('string', 30),
      allowNull: false,
    },
    type: {
      type: Sequelize.ENUM,
      values: ['disease', 'pest'],
      defaultValue: 'disease',
    },
    isDelete: {
      type: Sequelize.ENUM,
      values: ['yes', 'no'],
      defaultValue: 'no',
    },
    categoryId: {
      type: Sequelize.INTEGER.UNSIGNED,
      defaultValue: 1,
    },
    creatorId: {
      type: Sequelize.INTEGER.UNSIGNED,
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
      allow: ['name', 'type', 'isDelete', 'categoryId', 'creatorId', 'updatedAt', 'createdAt'],
    },
    writableCols: [
      'name', 'type', 'categoryId', 'creatorId',
    ],
    editableCols: [
      'name', 'type', 'categoryId', 'creatorId',
    ],
    /** 只有管理员才可以修改的字段 */
    onlyAdminCols: ['name', 'type'],

    /** 定义允许包含返回的字段，不设置为全部 */
    allowIncludeCols: [
      'name', 'type', 'isDelete', 'categoryId', 'createdAt',
    ],
  });
  return Disease;
};
