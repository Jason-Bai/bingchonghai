const U = require('../lib/utils');
const ModelBase = require('./base');

const Sequelize = U.rest.Sequelize;

module.exports = (sequelize) => {
  const Article = U._.extend(sequelize.define('article', {
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
    isPublish: {
      type: Sequelize.ENUM,
      values: ['yes', 'no'],
      defaultValue: 'no',
    },
    isDelete: {
      type: Sequelize.ENUM,
      values: ['yes', 'no'],
      defaultValue: 'no',
    },
    creatorId: {
      type: Sequelize.INTEGER.UNSIGNED,
      defaultValue: 1,
    },
    diseaseId: {
      type: Sequelize.INTEGER.UNSIGNED,
      defaultValue: 1,
    },
    visit: {
      type: Sequelize.INTEGER.UNSIGNED,
      defaultValue: 1,
    },
    comment: {
      type: Sequelize.INTEGER.UNSIGNED,
      defaultValue: 1,
    }
  }, {
    comment: '文章表',
    freezeTableName: true,
    hooks: {},
    instanceMethods: {},
    classMethods: {},
  }), ModelBase, {
    unique: ['title'],
    includes: {
      creator: 'user',
      disease: 'disease',
    },
    sort: {
      default: 'createdAt',
      allow: ['title', 'content', 'diseaseId', 'creatorId', 'updatedAt', 'createdAt'],
    },
    writableCols: [
      'title', 'content', 'diseaseId', 'creatorId', 'visit', 'comment',
    ],
    editableCols: [
      'title', 'content', 'diseaseId', 'creatorId',, 'visit', 'comment',
    ],
    /** 只有管理员才可以修改的字段 */
    onlyAdminCols: ['title', 'content', 'isPublish', 'diseaseId', 'visit', 'comment',],

    /** 定义允许包含返回的字段，不设置为全部 */
    allowIncludeCols: [
      'title', 'content', 'isPublish', 'isDelete', 'diseaseId', 'createdAt', 'visit', 'comment',
    ],
  });
  return Article;
};
