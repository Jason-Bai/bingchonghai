const U = require('../lib/utils');
const helper = require('./helper');
const config = require('../configs');

const User = U.model('user');
const File = U.model('file');

const USER_ACTIONS = [
  helper.getter(User, 'user', 'userId'),
  helper.assert.exists('user'),
  [
    helper.checker.ownSelf('id', 'user'),
    helper.checker.sysAdmin(),
  ],
]

/**
 * @api {POST} /files 添加文件
 * @apiName file_add
 * @apiPermission admin
 * @apiGroup File
 * @apiParam (body) {String} name 文件名称
 * @apiParam (body) {String} extension 文件扩展名
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 201 Created
 *
 *   Body:
 *   {
 *     id: 2,
 *     name: '图片1',
 *     extension: '.jpg',
 *     createdAt: '2014-09-03T03:15:16.000Z',
 *     updatedAt: '2014-09-03T03:15:16.000Z'
 *   }
 * @apiVersion 1.0.0
 */
const add = USER_ACTIONS.concat([
  helper.uploader.handleFile(config.upload),
  helper.rest.add(File),
]);

/**
 * @api {GET} /files 文件列表
 * @apiName file_list
 * @apiGroup File
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
 *     name: '图片1',
 *     extension: '.jpg',
 *     path: 'xxx/xxx.jpg',
 *     createdAt: '2014-09-03T03:15:16.000Z',
 *     updatedAt: '2014-09-03T03:15:16.000Z'
 *   }]
 * @apiVersion 1.0.0
 */
const list = USER_ACTIONS.concat([
  helper.rest.list(File),
]);



/**
 * @api {GET} /files/:id 查看文件
 * @apiName file_detail
 * @apiPermission admin | owner
 * @apiGroup File
 * @apiParam (query) {Number} id 文件ID
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   Body:
 *   {
 *     id: 1,
 *     name: '图片1',
 *     extension: 'xxx.xx.jpg',
 *     path: 'xxx/xxx.jpg',
 *     createdAt: '2014-09-03T03:15:16.000Z',
 *     updatedAt: '2014-09-03T03:15:16.000Z'
 *   }
 * @apiVersion 1.0.0
 */
const detail = USER_ACTIONS.concat([
  helper.getter(File, 'file'),
  helper.assert.exists('hooks.file'),
  helper.rest.detail('file'),
]);

/**
 * @api {DELETE} /files/:id 删除文件
 * @apiName file_del
 * @apiPermission admin
 * @apiGroup File
 * @apiParam {Number} id 文件ID
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 204 No Content
 * @apiVersion 1.0.0
 */
const remove = USER_ACTIONS.concat([
  helper.getter(File, 'file'),
  helper.assert.exists('hooks.file'),
  helper.rest.remove.hook('file').exec(),
]);

/**
 * @api {PUT/PATCH} /files/:id 编辑文件
 * @apiName file_modify
 * @apiPermission admin | owner
 * @apiGroup File
 * @apiParam (query) {Number} id 文件ID
 * @apiParam (body) {String} [name] 文件名称
 * @apiParam (body) {String} [extension] 文件扩展名
 * @apiParam (body) {String} [path] 文件路径
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   Body:
 *   {
 *     id: 2,
 *     name: 'StonePHP',
 *     extension: 'xxx.xx.jpg',
 *     path: 'xxx/xxx.jpg',
 *   }
 * @apiVersion 1.0.0
 */
const modify = USER_ACTIONS.concat([
  helper.rest.modify(File, 'file'),
]);

module.exports = {
  list, add, detail, remove, modify,
};
