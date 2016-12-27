const U = require('../lib/utils');
const helper = require('./helper');
const config = require('../configs');

const Category = U.model('category');

/**
 * @api {GET} /categorys 农业分类列表
 * @apiName category_list
 * @apiGroup Category
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
 *     name: '农作物,
 *     level: 1,
 *     isDelete: 'no',
 *     parentId: 0,
 *     creatorId: 1,
 *     createdAt: '2014-09-03T03:15:16.000Z',
 *     updatedAt: '2014-09-03T03:15:16.000Z'
 *   }]
 * @apiVersion 1.0.0
 */
const list = [
  helper.checker.sysAdmin(),
  helper.rest.list(Category)
];

/**
 * @api {PUT/PATCH} /categorys/:id 编辑农业分类
 * @apiName category_modify
 * @apiPermission admin
 * @apiGroup Category
 * @apiParam (query) {Number} id 分类ID
 * @apiParam (body) {String} [name] 分类名称
 * @apiParam (body) {Number} [level] 分裂级别
 * @apiParam (body) {Enum} [isDelete] 是否删除
 * @apiParam (body) {Number} [parentId] 父分裂ID
 * @apiParam (body) {Number} [creatorId] 创建者ID
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   Body:
 *   {
 *     id: 1,
 *     name: '农作物,
 *     level: 1,
 *     isDelete: 'no',
 *     parentId: 1,
 *     creatorId: 1,
 *     createdAt: '2014-09-03T03:15:16.000Z',
 *     updatedAt: '2014-09-03T03:15:16.000Z'
 *   }
 * @apiVersion 1.0.0
 */
const modify = [
  helper.getter(Category, 'category'),
  helper.assert.exists('hooks.category'),
  [
    helper.checker.ownSelf('id', 'user'),
    helper.checker.sysAdmin()
  ],
  helper.rest.modify.Model(Category).hook('category').exec()
];

/**
 * @api {DELETE} /categorys/:id 删除分类
 * @apiName category_del
 * @apiPermission admin
 * @apiGroup Category
 * @apiParam {Number} id 分类ID
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 204 No Content
 * @apiVersion 1.0.0
 */
const remove = [
  helper.checker.sysAdmin(),
  helper.getter(Category, 'category'),
  helper.assert.exists('hooks.category'),
  helper.rest.remove.hook('category').exec()
];

/**
 * @api {GET} /categores/:id 查看分类
 * @apiName category_detail
 * @apiPermission admin | owner
 * @apiGroup Category
 * @apiParam (query) {Number} id 分类ID
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   Body:
 *   {
 *     id: 1,
 *     name: '农作物,
 *     level: 1,
 *     isDelete: 'no',
 *     parentId: 1,
 *     creatorId: 1,
 *     createdAt: '2014-09-03T03:15:16.000Z',
 *     updatedAt: '2014-09-03T03:15:16.000Z'
 *   }
 * @apiVersion 1.0.0
 */
const detail = [
  helper.getter(Category, 'category'),
  helper.assert.exists('hooks.category'),
  helper.rest.detail('category')
];

/**
 * @api {POST} /categorys 添加分类
 * @apiName category_add
 * @apiPermission admin
 * @apiGroup Category
 * @apiParam (body) {String} name 分类名称
 * @apiParam (body) {Number} level 分类级别
 * @apiParam (body) {Enum} [isDelete] 是否删除`yes` or `no`
 * @apiParam (body) {Number} parentId 父分类ID
 * @apiParam (body) {Number} creatorId 创建者ID
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 201 Created
 *
 *   Body:
 *   {
 *     id: 1,
 *     name: '农作物,
 *     level: 1,
 *     isDelete: 'no',
 *     parentId: 1,
 *     creatorId: 1,
 *     createdAt: '2014-09-03T03:15:16.000Z',
 *     updatedAt: '2014-09-03T03:15:16.000Z'
 *   }
 * @apiVersion 1.0.0
 */
const add = [
  helper.checker.sysAdmin(),
  helper.rest.add(Category)
];

module.exports = {
  list, modify, remove, detail, add
};
