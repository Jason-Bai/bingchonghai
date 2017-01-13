const U = require('../lib/utils');
const helper = require('./helper');

const File = U.model('file');

const USER_ACTIONS = [
  helper.getter(User, 'user', 'userId')
  helper.checker.exists('user')
  [
    helper.checker.ownSelf('id', 'user')
    helper.checker.sysAdmin()
  ]
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
  helper.uploader.handleFile(config.upload)
  helper.rest.add(File)
]);

module.exports = {
  add,
};
