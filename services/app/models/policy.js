const U = require('../lib/utils');
const ModelBase = require('./base');

const Sequelize = U.rest.Sequelize;

module.exports = (sequelize) => {
  const Policy = U._.extend(sequelize.define('policy', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER.UNSIGNED,
    },
    title: {
      type: Sequelize.type('string', 50),
      allowNull: false,
    },
    description: {
      type: Sequelize.type('string', 50),
      allowNull: false,
    },
    content: {
      type: Sequelize.TEXT,
      defaultValue: '',
    },
    type: {
      type: Sequelize.ENUM,
      values: ['subsidy', 'notice'],
      defaultValue: 'notice',
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
    visit: {
      type: Sequelize.INTEGER.UNSIGNED,
      defaultValue: 1,
    },
    comment: {
      type: Sequelize.INTEGER.UNSIGNED,
      defaultValue: 1,
    },
		source: {
      type: Sequelize.type('string', 255),
      allowNull: true,
			defaultValue: '',
		},
		author: {
      type: Sequelize.type('string', 20),
      allowNull: true,
			defaultValue: '',
		},
    postedAt: {
      type: Sequelize.type('date'),
      allowNull: false,
      defaultValue: Sequelize.NOW,
      comment: '过期时间',
    },
  }, {
    comment: '农业政策表',
    freezeTableName: true,
    hooks: {},
    instanceMethods: {},
    classMethods: {},
  }), ModelBase, {
    unique: ['title'],
    includes: {
      creator: 'user',
    },
    sort: {
      default: 'id',
      allow: ['id', 'title', 'content', 'creatorId', 'source', 'author', 'updatedAt', 'createdAt', 'postedAt',],
    },
    writableCols: [
      'title', 'content', 'creatorId', 'source', 'author', 'visit', 'comment', 'postedAt',
    ],
    editableCols: [
      'title', 'content', 'creatorId', 'source', 'author', 'visit', 'comment', 'postedAt',
    ],
    /** 只有管理员才可以修改的字段 */
    onlyAdminCols: ['title', 'content', 'isPublish', 'source', 'author', 'postedAt',],

    /** 定义允许包含返回的字段，不设置为全部 */
    allowIncludeCols: [
      'title', 'content', 'isPublish', 'isDelete', 'source', 'author', 'createdAt', 'visit', 'comment', 'postedAt',
    ],
  });
  return Policy;
};
