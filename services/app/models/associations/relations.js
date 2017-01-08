module.exports = function (Models) {
  /** 每个分类唯一属于一个用户 **/
  Models.category.belongsTo(Models.user, {
    as: 'creator',
    foreignKey: 'creatorId'
  });
  /** 每个分类唯一属于一个分类 **/
  Models.category.belongsTo(Models.category, {
    as: 'parent',
    foreignKey: 'parentId'
  });
};
