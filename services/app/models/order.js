const U = require('../lib/utils');
const ModelBase = require('./base');

const Sequelize = U.rest.Sequelize;

module.exports = (sequelize) => {
  const Order = U._.extend(sequelize.define('order', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER.UNSIGNED,
    },
    title: {
      type: Sequelize.type('string', 100),
      allowNull: false,
    },
    content: {
      type: Sequelize.TEXT,
      defaultValue: '',
    },
    isDelete: {
      type: Sequelize.ENUM,
      values: ['yes', 'no'],
      defaultValue: 'no',
    },
  }, {
    comment: '订单表',
    freezeTableName: true,
    hooks: {},
    instanceMethods: {},
    classMethods: {},
  }), ModelBase, {
    unique: ['title'],
    includes: {},
    sort: {
      default: 'createdAt',
      allow: ['title', 'content', 'isDelete', 'updatedAt', 'createdAt'],
    },
    writableCols: [
      'title', 'content', 'isDelete'
    ],
    editableCols: [
      'title', 'content', 'isDelete'
    ],
    /** 只有管理员才可以修改的字段 */
    onlyAdminCols: ['title', 'content', 'isDelete'],

    /** 定义允许包含返回的字段，不设置为全部 */
    allowIncludeCols: [
      'title', 'content', 'isDelete', 'createdAt'
    ],
  });
  return Order;
};
