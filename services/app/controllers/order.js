const U = require('../lib/utils');
const helper = require('./helper');

const Order = U.model('article');

/**
 * @api {GET} /orders 订单列表
 * @apiName order_list
 * @apiGroup order
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
 *     title: '售卖小麦,
 *     content: '手机 地点 数量'
 *     isDelete: 'no',
 *     createdAt: '2014-09-03T03:15:16.000Z',
 *     updatedAt: '2014-09-03T03:15:16.000Z'
 *   }]
 * @apiVersion 1.0.0
 */
const list = [
  helper.checker.sysAdmin(),
  helper.rest.list(Order),
];

/**
 * @api {PUT/PATCH} /orders/:id 编辑订单
 * @apiName order_modify
 * @apiPermission admin
 * @apiGroup order
 * @apiParam (query) {Number} id 订单ID
 * @apiParam (body) {String} [title] 订单标题
 * @apiParam (body) {String} [content] 订单内容
 * @apiParam (body) {Enum} [isDelete] 是否删除
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   Body:
 *   {
 *     id: 1,
 *     title: '售卖小麦,
 *     content: '手机 地点 数量'
 *     isDelete: 'no',
 *     createdAt: '2014-09-03T03:15:16.000Z',
 *     updatedAt: '2014-09-03T03:15:16.000Z'
 *   }
 * @apiVersion 1.0.0
 */
const modify = [
  helper.getter(Order, 'order'),
  helper.assert.exists('hooks.order'),
  [
    helper.checker.ownSelf('id', 'user'),
    helper.checker.sysAdmin(),
  ],
  helper.rest.modify(Order, 'order'),
];

/**
 * @api {DELETE} /orders/:id 删除订单
 * @apiName order_del
 * @apiPermission admin
 * @apiGroup order
 * @apiParam {Number} id 订单ID
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 204 No Content
 * @apiVersion 1.0.0
 */
const remove = [
  helper.checker.sysAdmin(),
  helper.getter(Order, 'order'),
  helper.assert.exists('hooks.order'),
  helper.rest.remove.hook('order').exec(),
];

/**
 * @api {GET} /orders/:id 查看订单
 * @apiName order_detail
 * @apiPermission admin | owner
 * @apiGroup order
 * @apiParam (query) {Number} id 订单ID
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   Body:
 *   {
 *     id: 1,
 *     title: '售卖小麦,
 *     content: '手机 地点 数量'
 *     isDelete: 'no',
 *     createdAt: '2014-09-03T03:15:16.000Z',
 *     updatedAt: '2014-09-03T03:15:16.000Z'
 *   }
 * @apiVersion 1.0.0
 */
const detail = [
  helper.getter(Order, 'order'),
  helper.assert.exists('hooks.order'),
  helper.rest.detail('order'),
];

/**
 * @api {POST} /orders 添加订单
 * @apiName order_add
 * @apiPermission admin
 * @apiGroup order
 * @apiParam (body) {String} title 订单名称
 * @apiParam (body) {String} content 订单内容
 * @apiParam (body) {Enum} [isDelete] 是否删除`yes` or `no`
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 201 Created
 *
 *   Body:
 *   {
 *     id: 1,
 *     title: '售卖小麦,
 *     content: '手机 地点 数量'
 *     isDelete: 'no',
 *     createdAt: '2014-09-03T03:15:16.000Z',
 *     updatedAt: '2014-09-03T03:15:16.000Z'
 *   }
 * @apiVersion 1.0.0
 */
const add = [
  helper.checker.sysAdmin(),
  helper.rest.add(Order),
];

module.exports = {
  list, modify, remove, detail, add,
};
