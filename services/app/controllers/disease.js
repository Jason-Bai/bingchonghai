const U = require('../lib/utils');
const helper = require('./helper');

const Disease = U.model('disease');

/**
 * @api {GET} /diseases 病害列表
 * @apiName disease_list
 * @apiGroup disease
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
 *     name: '小麦秆枯病',
 *     isDelete: 'no',
 *     categoryId: 1,
 *     creatorId: 1,
 *     createdAt: '2014-09-03T03:15:16.000Z',
 *     updatedAt: '2014-09-03T03:15:16.000Z'
 *   }]
 * @apiVersion 1.0.0
 */
const list = [
  helper.checker.sysAdmin(),
  helper.rest.list(Disease),
];

/**
 * @api {PUT/PATCH} /diseases/:id 编辑病害
 * @apiName disease_modify
 * @apiPermission admin
 * @apiGroup disease
 * @apiParam (query) {Number} id 病害ID
 * @apiParam (body) {String} [name] 病害名称
 * @apiParam (body) {Enum} [isDelete] 是否删除
 * @apiParam (body) {Number} [categoryId] 分类ID
 * @apiParam (body) {Number} [creatorId] 创建者ID
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   Body:
 *   {
 *     id: 1,
 *     name: '小麦秆枯病,
 *     isDelete: 'no',
 *     categoryId: 1,
 *     creatorId: 1,
 *     createdAt: '2014-09-03T03:15:16.000Z',
 *     updatedAt: '2014-09-03T03:15:16.000Z'
 *   }
 * @apiVersion 1.0.0
 */
const modify = [
  helper.getter(Disease, 'disease'),
  helper.assert.exists('hooks.disease'),
  [
    helper.checker.ownSelf('id', 'user'),
    helper.checker.sysAdmin(),
  ],
  helper.rest.modify(Disease, 'disease'),
];

/**
 * @api {DELETE} /diseases/:id 删除病害
 * @apiName disease_del
 * @apiPermission admin
 * @apiGroup disease
 * @apiParam {Number} id 病害ID
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 204 No Content
 * @apiVersion 1.0.0
 */
const remove = [
  helper.checker.sysAdmin(),
  helper.getter(Disease, 'disease'),
  helper.assert.exists('hooks.disease'),
  helper.rest.remove.hook('disease').exec(),
];

/**
 * @api {GET} /categores/:id 查看病害
 * @apiName disease_detail
 * @apiPermission admin | owner
 * @apiGroup disease
 * @apiParam (query) {Number} id 病害ID
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   Body:
 *   {
 *     id: 1,
 *     name: '小麦秆枯病,
 *     isDelete: 'no',
 *     categoryId: 1,
 *     creatorId: 1,
 *     createdAt: '2014-09-03T03:15:16.000Z',
 *     updatedAt: '2014-09-03T03:15:16.000Z'
 *   }
 * @apiVersion 1.0.0
 */
const detail = [
  helper.getter(Disease, 'disease'),
  helper.assert.exists('hooks.disease'),
  helper.rest.detail('disease'),
];

/**
 * @api {POST} /diseases 添加病害
 * @apiName disease_add
 * @apiPermission admin
 * @apiGroup disease
 * @apiParam (body) {String} name 病害名称
 * @apiParam (body) {Enum} [isDelete] 是否删除`yes` or `no`
 * @apiParam (body) {Number} categoryId 分类ID
 * @apiParam (body) {Number} creatorId 创建者ID
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 201 Created
 *
 *   Body:
 *   {
 *     id: 1,
 *     name: '小麦秆枯病,
 *     isDelete: 'no',
 *     categoryId: 1,
 *     creatorId: 1,
 *     createdAt: '2014-09-03T03:15:16.000Z',
 *     updatedAt: '2014-09-03T03:15:16.000Z'
 *   }
 * @apiVersion 1.0.0
 */
const add = [
  helper.checker.sysAdmin(),
  helper.rest.add(Disease),
];

module.exports = {
  list, modify, remove, detail, add,
};
