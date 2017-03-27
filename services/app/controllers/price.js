const U = require('../lib/utils');
const helper = require('./helper');

const Price = U.model('price');

/**
 * @api {GET} /prices 价格列表
 * @apiName price_list
 * @apiGroup price
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
 *     zone: '华北,
 *     category: '农作物',
 *     product: '玉米',
 *     date: '2017-01-01',
 *     price: 2.75,
 *     unit: 'g',
 *     location: '通州',
 *     contact: '白宇',
 *     position: 'manager',
 *     mobile: '132xxxxxxxx',
 *     email: '602316xxx@qq.com',
 *     creatorId: 1,
 *     createdAt: '2014-09-03T03:15:16.000Z',
 *     updatedAt: '2014-09-03T03:15:16.000Z'
 *   }]
 * @apiVersion 1.0.0
 */
const list = [
  helper.checker.sysAdmin(),
  helper.rest.list(Price),
];

/**
 * @api {PUT/PATCH} /prices/:id 编辑价格
 * @apiName price_modify
 * @apiPermission admin
 * @apiGroup price
 * @apiParam (query) {Number} id 价格ID
 * @apiParam (body) {String} [zone] 区域
 * @apiParam (body) {String} [category] 分类
 * @apiParam (body) {String} [product] 产品
 * @apiParam (body) {String} [content] 价格内容
 * @apiParam (body) {Date} [date] 日期
 * @apiParam (body) {Number} [price] 价格
 * @apiParam (body) {Enum} [unit] 单位
 * @apiParam (body) {String} [location] 地址
 * @apiParam (body) {String} [contact] 联系人
 * @apiParam (body) {Enum} [position] 职位
 * @apiParam (body) {String} [mobile] 手机
 * @apiParam (body) {String} [email] 邮箱
 * @apiParam (body) {Number} [creatorId] 创建者ID
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   Body:
 *   {
 *     id: 1,
 *     zone: '华北,
 *     category: '农作物',
 *     product: '玉米',
 *     date: '2017-01-01',
 *     price: 2.75,
 *     unit: 'g',
 *     location: '通州',
 *     contact: '白宇',
 *     position: 'manager',
 *     mobile: '132xxxxxxxx',
 *     email: '602316xxx@qq.com',
 *     creatorId: 1,
 *     createdAt: '2014-09-03T03:15:16.000Z',
 *     updatedAt: '2014-09-03T03:15:16.000Z'
 *   }
 * @apiVersion 1.0.0
 */
const modify = [
  helper.getter(Price, 'price'),
  helper.assert.exists('hooks.price'),
  [
    helper.checker.ownSelf('id', 'user'),
    helper.checker.sysAdmin(),
  ],
  helper.rest.modify(Price, 'price'),
];

/**
 * @api {DELETE} /prices/:id 删除价格
 * @apiName price_del
 * @apiPermission admin
 * @apiGroup price
 * @apiParam {Number} id 价格ID
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 204 No Content
 * @apiVersion 1.0.0
 */
const remove = [
  helper.checker.sysAdmin(),
  helper.getter(Price, 'price'),
  helper.assert.exists('hooks.price'),
  helper.rest.remove.hook('price').exec(),
];

/**
 * @api {GET} /prices/:id 查看价格
 * @apiName price_detail
 * @apiPermission admin | owner
 * @apiGroup price
 * @apiParam (query) {Number} id 价格ID
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   Body:
 *   {
 *     id: 1,
 *     zone: '华北,
 *     category: '农作物',
 *     product: '玉米',
 *     date: '2017-01-01',
 *     price: 2.75,
 *     unit: 'g',
 *     location: '通州',
 *     contact: '白宇',
 *     position: 'manager',
 *     mobile: '132xxxxxxxx',
 *     email: '602316xxx@qq.com',
 *     creatorId: 1,
 *     createdAt: '2014-09-03T03:15:16.000Z',
 *     updatedAt: '2014-09-03T03:15:16.000Z'
 *   }
 * @apiVersion 1.0.0
 */
const detail = [
  helper.getter(Price, 'price'),
  helper.assert.exists('hooks.price'),
  helper.rest.detail('price'),
];

/**
 * @api {POST} /prices 添加价格
 * @apiName price_add
 * @apiPermission admin
 * @apiGroup price
 * @apiParam (body) {String} [zone] 区域
 * @apiParam (body) {String} [category] 分类
 * @apiParam (body) {String} [product] 产品
 * @apiParam (body) {String} [content] 价格内容
 * @apiParam (body) {Date} [date] 日期
 * @apiParam (body) {Number} [price] 价格
 * @apiParam (body) {Enum} [unit] 单位
 * @apiParam (body) {String} [location] 地址
 * @apiParam (body) {String} [contact] 联系人
 * @apiParam (body) {Enum} [position] 职位
 * @apiParam (body) {String} [mobile] 手机
 * @apiParam (body) {String} [email] 邮箱
 * @apiParam (body) {Number} [creatorId] 创建者ID
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 201 Created
 *
 *   Body:
 *   {
 *     id: 1,
 *     zone: '华北,
 *     category: '农作物',
 *     product: '玉米',
 *     date: '2017-01-01',
 *     price: 2.75,
 *     unit: 'g',
 *     location: '通州',
 *     contact: '白宇',
 *     position: 'manager',
 *     mobile: '132xxxxxxxx',
 *     email: '602316xxx@qq.com',
 *     creatorId: 1,
 *     createdAt: '2014-09-03T03:15:16.000Z',
 *     updatedAt: '2014-09-03T03:15:16.000Z'
 *   }
 * @apiVersion 1.0.0
 */
const add = [
  helper.checker.sysAdmin(),
  helper.rest.add(Price),
];

module.exports = {
  list, modify, remove, detail, add,
};
