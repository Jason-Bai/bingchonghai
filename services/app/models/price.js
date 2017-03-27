const U = require('../lib/utils');
const ModelBase = require('./base');

const Sequelize = U.rest.Sequelize;

module.exports = (sequelize) => {
  const Price = U._.extend(sequelize.define('price', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER.UNSIGNED,
    },
    zone: {
      type: Sequelize.ENUM,
      values: ['nc', 'sc', 'wc', 'ec', 'nw', 'ne'],
      defaultValue: 'nc',
    },
    category: {
      type: Sequelize.type('string', 50),
      allowNull: false,
    },
    product: {
      type: Sequelize.type('string', 50),
      allowNull: false,
    }, date: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
    price: {
      type: Sequelize.INTEGER.UNSIGNED,
      defaultValue: 1,
    },
    unit: {
      type: Sequelize.ENUM,
      values: ['g', 'kg', 'ton'],
      defaultValue: 'g',
    },
    location: {
      type: Sequelize.type('string', 255),
      allowNull: true,
    },
    contact: {
      type: Sequelize.type('string', 10),
      allowNull: false,
    },
    position: {
      type: Sequelize.ENUM,
      values: ['manager', 'employee'],
      defaultValue: 'employee',
    },
    mobile: {
      type: Sequelize.type('string', 20),
      allowNull: false,
    },
    email: {
      type: Sequelize.type('string', 100),
      allowNull: true,
      validate: {
        isEmail: true,
      }, unique: true,
      comment: '用户email地址',
    },
    creatorId: {
      type: Sequelize.INTEGER.UNSIGNED,
      defaultValue: 1,
    },
    isPublish: {
      type: Sequelize.ENUM,
      values: ['yes', 'no'],
      defaultValue: 'no',
    },
  }, {
    comment: '农业价格表',
    freezeTableName: true,
    hooks: {},
    instanceMethods: {},
    classMethods: {},
  }), ModelBase, {
    unique: [],
    includes: {
      creator: 'user',
    },
    sort: {
      default: 'createdAt',
      allow: ['zone', 'category', 'product', 'date', 'price', 'unit', 'updatedAt', 'createdAt',],
    },
    writableCols: [
      'zone', 'category', 'product', 'date', 'price', 'unit',
      'location', 'contact', 'position', 'mobile', 'email', 'creatorId',
      'updatedAt', 'createdAt',
    ],
    editableCols: [
      'zone', 'category', 'product', 'date', 'price', 'unit',
      'location', 'contact', 'position', 'mobile', 'email', 'creatorId',
      'updatedAt', 'createdAt',
    ],
    /** 只有管理员才可以修改的字段 */
    onlyAdminCols: ['zone', 'category', 'product', 'date', 'price', 'unit',],

    /** 定义允许包含返回的字段，不设置为全部 */
    allowIncludeCols: [
      'zone', 'category', 'product', 'date', 'price', 'unit',
      'location', 'contact', 'position', 'mobile', 'email', 'creatorId',
      'updatedAt', 'createdAt',
    ],
  });
  return Price;
};
