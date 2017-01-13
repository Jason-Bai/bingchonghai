const U = require('../lib/utils');
const helper = require('./helper');

const Article = U.model('article');

/**
 * @api {GET} /articles 文章列表
 * @apiName article_list
 * @apiGroup Article
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
 *     isPublish: 'no',
 *     isDelete: 'no',
 *     diseaseId: 0,
 *     creatorId: 1,
 *     createdAt: '2014-09-03T03:15:16.000Z',
 *     updatedAt: '2014-09-03T03:15:16.000Z'
 *   }]
 * @apiVersion 1.0.0
 */
const list = [
  helper.checker.sysAdmin(),
  helper.rest.list(Article),
];

/**
 * @api {PUT/PATCH} /articles/:id 编辑文章
 * @apiName article_modify
 * @apiPermission admin
 * @apiGroup Article
 * @apiParam (query) {Number} id 文章ID
 * @apiParam (body) {String} [title] 文章标题
 * @apiParam (body) {String} [content] 文章内容
 * @apiParam (body) {Enum} [isPublish] 是否发布
 * @apiParam (body) {Enum} [isDelete] 是否删除
 * @apiParam (body) {Number} [diseaseId] 病害ID
 * @apiParam (body) {Number} [creatorId] 创建者ID
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   Body:
 *   {
 *     id: 1,
 *     title: '农作物,
 *     content: '# 一级标题\n ## 二级标题'
 *     isPublish: 'no',
 *     isDelete: 'no',
 *     diseaseId: 1,
 *     creatorId: 1,
 *     createdAt: '2014-09-03T03:15:16.000Z',
 *     updatedAt: '2014-09-03T03:15:16.000Z'
 *   }
 * @apiVersion 1.0.0
 */
const modify = [
  helper.getter(Article, 'article'),
  helper.assert.exists('hooks.article'),
  [
    helper.checker.ownSelf('id', 'user'),
    helper.checker.sysAdmin(),
  ],
  helper.rest.modify(Article, 'article'),
];

/**
 * @api {DELETE} /articles/:id 删除文章
 * @apiName article_del
 * @apiPermission admin
 * @apiGroup Article
 * @apiParam {Number} id 文章ID
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 204 No Content
 * @apiVersion 1.0.0
 */
const remove = [
  helper.checker.sysAdmin(),
  helper.getter(Article, 'article'),
  helper.assert.exists('hooks.article'),
  helper.rest.remove.hook('article').exec(),
];

/**
 * @api {GET} /articles/:id 查看文章
 * @apiName article_detail
 * @apiPermission admin | owner
 * @apiGroup Article
 * @apiParam (query) {Number} id 文章ID
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   Body:
 *   {
 *     id: 1,
 *     title: '农作物,
 *     content: '# 一级标题\n ## 二级标题'
 *     isPublish: 'no',
 *     isDelete: 'no',
 *     isDelete: 'no',
 *     diseaseId: 1,
 *     creatorId: 1,
 *     createdAt: '2014-09-03T03:15:16.000Z',
 *     updatedAt: '2014-09-03T03:15:16.000Z'
 *   }
 * @apiVersion 1.0.0
 */
const detail = [
  helper.getter(Article, 'article'),
  helper.assert.exists('hooks.article'),
  helper.rest.detail('article'),
];

/**
 * @api {POST} /articles 添加文章
 * @apiName article_add
 * @apiPermission admin
 * @apiGroup Article
 * @apiParam (body) {String} title 文章名称
 * @apiParam (body) {String} content 文章内容
 * @apiParam (body) {Enum} [isPublish] 是否发布 `yes` or `no`
 * @apiParam (body) {Enum} [isDelete] 是否删除`yes` or `no`
 * @apiParam (body) {Number} diseaseId 病害ID
 * @apiParam (body) {Number} creatorId 创建者ID
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 201 Created
 *
 *   Body:
 *   {
 *     id: 1,
 *     name: '农作物,
 *     content: '# 一级标题\n ## 二级标题'
 *     isPublish: 'no',
 *     isDelete: 'no',
 *     diseaseId: 1,
 *     creatorId: 1,
 *     createdAt: '2014-09-03T03:15:16.000Z',
 *     updatedAt: '2014-09-03T03:15:16.000Z'
 *   }
 * @apiVersion 1.0.0
 */
const add = [
  helper.checker.sysAdmin(),
  helper.rest.add(Article),
];

module.exports = {
  list, modify, remove, detail, add,
};
