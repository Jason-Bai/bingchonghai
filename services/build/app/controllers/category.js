'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add = exports.detail = exports.remove = exports.modify = exports.list = undefined;

var cov_sio60nrgm = function () {
  var path = '/Users/jason/workspaces/github/bingchonghai/services/src/app/controllers/category.es',
      hash = '8171a93466e11dea7e0bd3f59545f942c347d24d',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/jason/workspaces/github/bingchonghai/services/src/app/controllers/category.es',
    statementMap: {
      '0': {
        start: {
          line: 5,
          column: 17
        },
        end: {
          line: 5,
          column: 36
        }
      },
      '1': {
        start: {
          line: 31,
          column: 20
        },
        end: {
          line: 34,
          column: 1
        }
      },
      '2': {
        start: {
          line: 62,
          column: 22
        },
        end: {
          line: 70,
          column: 1
        }
      },
      '3': {
        start: {
          line: 82,
          column: 22
        },
        end: {
          line: 87,
          column: 1
        }
      },
      '4': {
        start: {
          line: 110,
          column: 22
        },
        end: {
          line: 114,
          column: 1
        }
      },
      '5': {
        start: {
          line: 142,
          column: 19
        },
        end: {
          line: 145,
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
      '5': 0
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

var Category = (++cov_sio60nrgm.s[0], _utils2.default.model('category'));

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
var list = exports.list = (++cov_sio60nrgm.s[1], [_helper2.default.checker.sysAdmin(), _helper2.default.rest.list(Category)]);

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
var modify = exports.modify = (++cov_sio60nrgm.s[2], [_helper2.default.getter(Category, 'category'), _helper2.default.assert.exists('hooks.category'), [_helper2.default.checker.ownSelf('id', 'user'), _helper2.default.checker.sysAdmin()], _helper2.default.rest.modify.Model(Category).hook('category').exec()]);

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
var remove = exports.remove = (++cov_sio60nrgm.s[3], [_helper2.default.checker.sysAdmin(), _helper2.default.getter(Category, 'category'), _helper2.default.assert.exists('hooks.category'), _helper2.default.rest.remove.hook('category').exec()]);

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
var detail = exports.detail = (++cov_sio60nrgm.s[4], [_helper2.default.getter(Category, 'category'), _helper2.default.assert.exists('hooks.category'), _helper2.default.rest.detail('category')]);

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
var add = exports.add = (++cov_sio60nrgm.s[5], [_helper2.default.checker.sysAdmin(), _helper2.default.rest.add(Category)]);