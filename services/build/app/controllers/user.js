'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add = exports.detail = exports.remove = exports.modify = exports.list = exports.logout = exports.login = exports.session = undefined;

var cov_1dexbfh727 = function () {
  var path = '/Users/jason/workspaces/github/bingchonghai/services/src/app/controllers/user.es',
      hash = '0d24ab3873baba76144efe30e0043c7ec43e68e2',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/jason/workspaces/github/bingchonghai/services/src/app/controllers/user.es',
    statementMap: {
      '0': {
        start: {
          line: 5,
          column: 13
        },
        end: {
          line: 5,
          column: 28
        }
      },
      '1': {
        start: {
          line: 6,
          column: 24
        },
        end: {
          line: 8,
          column: 1
        }
      },
      '2': {
        start: {
          line: 36,
          column: 23
        },
        end: {
          line: 38,
          column: 1
        }
      },
      '3': {
        start: {
          line: 68,
          column: 21
        },
        end: {
          line: 71,
          column: 1
        }
      },
      '4': {
        start: {
          line: 83,
          column: 22
        },
        end: {
          line: 85,
          column: 1
        }
      },
      '5': {
        start: {
          line: 113,
          column: 20
        },
        end: {
          line: 116,
          column: 1
        }
      },
      '6': {
        start: {
          line: 147,
          column: 22
        },
        end: {
          line: 156,
          column: 1
        }
      },
      '7': {
        start: {
          line: 168,
          column: 22
        },
        end: {
          line: 173,
          column: 1
        }
      },
      '8': {
        start: {
          line: 198,
          column: 22
        },
        end: {
          line: 202,
          column: 1
        }
      },
      '9': {
        start: {
          line: 233,
          column: 19
        },
        end: {
          line: 236,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
      '9': 0
    },
    f: {},
    b: {},
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

var _utils = require('../lib/utils');

var _utils2 = _interopRequireDefault(_utils);

var _helper = require('./helper');

var _helper2 = _interopRequireDefault(_helper);

var _configs = require('../configs');

var _configs2 = _interopRequireDefault(_configs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = (++cov_1dexbfh727.s[0], _utils2.default.model('user'));
var CHECK_PASS_COLS = (++cov_1dexbfh727.s[1], ['email', 'password']);

/**
 * @api {GET} /session 查询 Session
 * @apiName user_session
 * @apiPermission owner
 * @apiGroup User
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *
 *   Body:
 *   {
 *     id: 1
 *     name: 'Redstone Zhao'
 *     email: '13740080@qq.com'
 *     role: 'admin'
 *     status: 'enabled'
 *     isDelete: 'no'
 *     auth: {
 *       id: 1
 *       token: '18ncomhx9npwhf'
 *       refreshToken: '92asdxni28sxshdms'
 *       expiredAt: '2016-05-27T12:00:01.000Z',
 *       onlineIp: '199.199.0.199'
 *     }
 *   }
 * @apiVersion 1.0.0
 */
var session = exports.session = (++cov_1dexbfh727.s[2], [_helper2.default.user.session()]);

/**
 * @api {POST} /session 登陆
 * @apiName user_login
 * @apiPermission owner
 * @apiGroup User
 * @apiParam (body) {String} email 登陆的 Email 地址
 * @apiParam (body) {String} password 登陆的密码
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 201 Created

 *   Body:
 *   {
 *     id: 1
 *     name: 'Redstone Zhao'
 *     email: '13740080@qq.com'
 *     role: 'admin'
 *     status: 'enabled'
 *     isDelete: 'no'
 *     auth: {
 *       id: 1
 *       token: '18ncomhx9npwhf'
 *       refreshToken: '92asdxni28sxshdms'
 *       expiredAt: '2016-05-27T12:00:01.000Z',
 *       onlineIp: '199.199.0.199'
 *     }
 *   }
 * @apiVersion 1.0.0
 */
var login = exports.login = (++cov_1dexbfh727.s[3], [_helper2.default.user.login(), _helper2.default.user.session(201)]);

/**
 * @api {DELETE} /session 退出
 * @apiName user_logout
 * @apiPermission owner
 * @apiGroup User
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 204 No Content

 * @apiVersion 1.0.0
 */
var logout = exports.logout = (++cov_1dexbfh727.s[4], [_helper2.default.user.logout()]);

/**
 * @api {GET} /users 系统用户列表
 * @apiName user_list
 * @apiGroup User
 * @apiPermission admin
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   Headers:
 *   {
 *     "X-Content-Record-Total": 1 // 符合条件的记录总条数，并非当前返回数组的长度
 *   }
 *   Body:
 *   [{
 *     id: 2,
 *     name: 'StonePHP',
 *     role: 'member',
 *     avatar: 'users/a2/21/1.png',
 *     email: '269718799@qq.com',
 *     status: 'enabled',
 *     language: 'zh',
 *     isDelete: 'no',
 *     createdAt: '2014-09-03T03:15:16.000Z',
 *     updatedAt: '2014-09-03T03:15:16.000Z'
 *   }]
 * @apiVersion 1.0.0
 */
var list = exports.list = (++cov_1dexbfh727.s[5], [_helper2.default.checker.sysAdmin(), _helper2.default.rest.list(User)]);

/**
 * @api {PUT/PATCH} /users/:id 编辑用户
 * @apiName user_modify
 * @apiPermission admin | owner
 * @apiGroup User
 * @apiParam (query) {Number} id 用户 ID
 * @apiParam (body) {String} [name] 用户语言设置
 * @apiParam (body) {String} [language] 用户语言设置
 * @apiParam (body) {Enum} [status] 用户状态`disabled` or `enabled` 仅管理员可用
 * @apiParam (body) {Enum} [role] 用户角色，`admin` or `number`, 仅管理员可用
 * @apiParam (body) {String} [password] 设置的新密码
 * @apiParam (body) {String} [origPass] 原密码，在设置新密码的时候必须要携带原始密码
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   Body:
 *   {
 *     id: 2,
 *     name: 'StonePHP',
 *     role: 'member',
 *     avatar: 'users/a2/21/1.png',
 *     email: '269718799@qq.com',
 *     status: 'enabled',
 *     language: 'zh',
 *     isDelete: 'no',
 *     createdAt: '2014-09-03T03:15:16.000Z',
 *     updatedAt: '2014-09-03T03:15:16.000Z'
 *   }
 * @apiVersion 1.0.0
 */
var modify = exports.modify = (++cov_1dexbfh727.s[6], [_helper2.default.getter(User, 'user'), _helper2.default.assert.exists('hooks.user'), [_helper2.default.checker.ownSelf('id', 'user'), _helper2.default.checker.sysAdmin()], _helper2.default.user.checkPass(CHECK_PASS_COLS, true, true), _helper2.default.rest.modify.Model(User).hook('user').exec()]);

/**
 * @api {DELETE} /users/:id 删除用户
 * @apiName user_del
 * @apiPermission admin
 * @apiGroup User
 * @apiParam {Number} id 用户 ID
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 204 No Content
 * @apiVersion 1.0.0
 */
var remove = exports.remove = (++cov_1dexbfh727.s[7], [_helper2.default.checker.sysAdmin(), _helper2.default.getter(User, 'user'), _helper2.default.assert.exists('hooks.user'), _helper2.default.rest.remove.hook('user').exec()]);

/**
 * @api {GET} /users/:id 查看用户
 * @apiName user_detail
 * @apiPermission admin | owner
 * @apiGroup User
 * @apiParam (query) {Number} id 用户 ID
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   Body:
 *   {
 *     id: 2,
 *     name: 'StonePHP',
 *     role: 'member',
 *     avatar: 'users/a2/21/1.png',
 *     email: '269718799@qq.com',
 *     status: 'enabled',
 *     language: 'zh',
 *     isDelete: 'no',
 *     createdAt: '2014-09-03T03:15:16.000Z',
 *     updatedAt: '2014-09-03T03:15:16.000Z'
 *   }
 * @apiVersion 1.0.0
 */
var detail = exports.detail = (++cov_1dexbfh727.s[8], [_helper2.default.getter(User, 'user'), _helper2.default.assert.exists('hooks.user'), _helper2.default.rest.detail('user')]);

/**
 * @api {POST} /users 添加用户
 * @apiName user_add
 * @apiPermission admin
 * @apiGroup User
 * @apiParam (body) {String} name 用户语言设置
 * @apiParam (body) {String} email Email 地址
 * @apiParam (body) {String} password 密码
 * @apiParam (body) {String} [language] 用户语言设置
 * @apiParam (body) {Enum} [status] 用户状态`disabled` or `enabled`
 * @apiParam (body) {Enum} [role] 用户角色，`admin` or `number`
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 201 Created
 *
 *   Body:
 *   {
 *     id: 2,
 *     name: 'StonePHP',
 *     role: 'member',
 *     avatar: 'users/a2/21/1.png',
 *     email: '269718799@qq.com',
 *     status: 'enabled',
 *     language: 'zh',
 *     isDelete: 'no',
 *     createdAt: '2014-09-03T03:15:16.000Z',
 *     updatedAt: '2014-09-03T03:15:16.000Z'
 *   }
 * @apiVersion 1.0.0
 */
var add = exports.add = (++cov_1dexbfh727.s[9], [_helper2.default.checker.sysAdmin(), _helper2.default.rest.add(User)]);