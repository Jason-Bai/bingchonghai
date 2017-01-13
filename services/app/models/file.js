const U = require('../lib/utils');
const ModelBase = require('./base');
const config = require('../configs');

const Sequelize = U.rest.Sequelize;

module.exports = (sequelize) => {
  const File = U._.extend(sequelize.define('file', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER.UNSIGNED,
    },
    name: {
      type: Sequelize.type('string', 100),
      allowNull: false,
    },
    extension: {
      type: Sequelize.type('string', 20),
      allowNull: false,
    },
    path: {
      type: Sequelize.type('string', 255),
      allowNull: false,
      get() {
        return `${config.upload.accessUrl}/${this.getDataValue('path')}`;
      },
    },
    bytes: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    creatorId: {
      type: Sequelize.INTEGER.UNSIGNED,
      defaultValue: 0,
    },
  }, {
    comment: '文件表',
    freezeTableName: true,
    hooks: {},
    instanceMethods: {},
    classMethods: {},
  }), ModelBase, {
    includes: {
      creator: 'user',
    },
    sort: {
      default: 'createdAt',
      allow: ['name', 'extension', 'bytes', 'creatorId', 'updatedAt', 'createdAt'],
    },
    writableCols: [
      'name', 'extension', 'path', 'bytes', 'creatorId',
    ],
    editableCols: [
      'name', 'extension', 'path', 'bytes', 'creatorId',
    ],
    /** 只有管理员才可以修改的字段 */
    onlyAdminCols: ['name'],

    /** 定义允许包含返回的字段，不设置为全部 */
    allowIncludeCols: [
      'name', 'extension', 'path', 'bytes', 'creatorId',
    ],
  });
  return File;
};
