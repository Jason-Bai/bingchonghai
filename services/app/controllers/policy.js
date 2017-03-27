const U = require('../lib/utils');
const helper = require('./helper');

const Policy = U.model('policy');

/**
 * @api {GET} /policys 政策列表
 * @apiName policy_list
 * @apiGroup Policy
 * @apiPermission admin
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   Headers:
 *   {
 *     "X-Content-Record-Total": 1 // 符合条件的记录总条数，并非当前返回数组的长度
 *   }
 *   Body:
 *   [{
 *     id: 1,
 *     title: '小麦全蚀病,
 *     content: '# 一级标题\n ## 二级标题'
 *     type: 'notice',
 *     isPublish: 'no',
 *     isDelete: 'no',
 *     diseaseId: 0,
 *     creatorId: 1,
 *     source: '农业网',
 *     author: '中国农业网'，
 *     createdAt: '2014-09-03T03:15:16.000Z',
 *     updatedAt: '2014-09-03T03:15:16.000Z'
 *   }]
 * @apiVersion 1.0.0
 */
const list = [
  helper.checker.sysAdmin(),
  helper.rest.list(Policy),
];

/**
 * @api {PUT/PATCH} /policys/:id 编辑政策
 * @apiName policy_modify
 * @apiPermission admin
 * @apiGroup Policy
 * @apiParam (query) {Number} id 政策ID
 * @apiParam (body) {String} [title] 政策标题
 * @apiParam (body) {String} [content] 政策内容
 * @apiParam (body) {Enum} [type] 政策类别
 * @apiParam (body) {Enum} [isPublish] 是否发布
 * @apiParam (body) {Enum} [isDelete] 是否删除
 * @apiParam (body) {Number} [diseaseId] 病害ID
 * @apiParam (body) {Number} [creatorId] 创建者ID
 * @apiParam (body) {String} [source] 来源
 * @apiParam (body) {String} [author] 作者
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   Body:
 *   {
 *     id: 1,
 *     title: '农作物,
 *     content: '# 一级标题\n ## 二级标题'
 *     type: 'notice',
 *     isPublish: 'no',
 *     isDelete: 'no',
 *     diseaseId: 1,
 *     creatorId: 1,
 *     source: '农业网',
 *     author: '中国农业网',
 *     createdAt: '2014-09-03T03:15:16.000Z',
 *     updatedAt: '2014-09-03T03:15:16.000Z'
 *   }
 * @apiVersion 1.0.0
 */
const modify = [
  helper.getter(Policy, 'policy'),
  helper.assert.exists('hooks.policy'),
  [
    helper.checker.ownSelf('id', 'user'),
    helper.checker.sysAdmin(),
  ],
  helper.rest.modify(Policy, 'policy'),
];

/**
 * @api {DELETE} /policys/:id 删除政策
 * @apiName policy_del
 * @apiPermission admin
 * @apiGroup Policy
 * @apiParam {Number} id 政策ID
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 204 No Content
 * @apiVersion 1.0.0
 */
const remove = [
  helper.checker.sysAdmin(),
  helper.getter(Policy, 'policy'),
  helper.assert.exists('hooks.policy'),
  helper.rest.remove.hook('policy').exec(),
];

/**
 * @api {GET} /policys/:id 查看政策
 * @apiName policy_detail
 * @apiPermission admin | owner
 * @apiGroup Policy
 * @apiParam (query) {Number} id 政策ID
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   Body:
 *   {
 *     id: 1,
 *     title: '农作物,
 *     content: '# 一级标题\n ## 二级标题'
 *     type: 'notice',
 *     isPublish: 'no',
 *     isDelete: 'no',
 *     isDelete: 'no',
 *     diseaseId: 1,
 *     creatorId: 1,
 *     source: '农业网',
 *     author: '中国农业网',
 *     createdAt: '2014-09-03T03:15:16.000Z',
 *     updatedAt: '2014-09-03T03:15:16.000Z'
 *   }
 * @apiVersion 1.0.0
 */
const detail = [
  helper.getter(Policy, 'policy'),
  helper.assert.exists('hooks.policy'),
  helper.rest.detail('policy'),
];

/**
 * @api {POST} /policys 添加政策
 * @apiName policy_add
 * @apiPermission admin
 * @apiGroup Policy
 * @apiParam (body) {String} title 政策名称
 * @apiParam (body) {String} content 政策内容
 * @apiParam (body) {Enum} type 政策类别
 * @apiParam (body) {Enum} [isPublish] 是否发布 `yes` or `no`
 * @apiParam (body) {Enum} [isDelete] 是否删除`yes` or `no`
 * @apiParam (body) {Number} diseaseId 病害ID
 * @apiParam (body) {Number} creatorId 创建者ID
 * @apiParam (body) {String} source 来源
 * @apiParam (body) {String} author 作者
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 201 Created
 *
 *   Body:
 *   {
 *     id: 1,
 *     name: '农作物,
 *     content: '# 一级标题\n ## 二级标题'
 *     type: 'notice',
 *     isPublish: 'no',
 *     isDelete: 'no',
 *     diseaseId: 1,
 *     creatorId: 1,
 *     source: '农业网',
 *     author: '中国农业网',
 *     createdAt: '2014-09-03T03:15:16.000Z',
 *     updatedAt: '2014-09-03T03:15:16.000Z'
 *   }
 * @apiVersion 1.0.0
 */
const add = [
  helper.checker.sysAdmin(),
  helper.rest.add(Policy),
];

module.exports = {
  list, modify, remove, detail, add,
};
