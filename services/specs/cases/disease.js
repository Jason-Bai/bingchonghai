module.exports = [{
  name: '管理员添加一个病害',
  uri: '/diseases',
  verb: 'post',
  headers: {
    'X-Auth-Token': 'MOCK::1',
  },
  data: {
    name: '小麦秆枯病',
    categoryId: 1,
  },
  expects: {
    Status: 201,
    JSON: {
      id: 1,
      name: '小麦秆枯病',
      categoryId: 1,
      creatorId: 1,
    },
  },
}, {
  name: '检测添加之后的病害个数',
  uri: '/diseases',
  verb: 'get',
  headers: {
    'X-Auth-Token': 'MOCK::1',
  },
  expects: {
    Status: 200,
    JSONLength: 1,
  },
}, {
  name: '管理员更新一个病害',
  uri: '/diseases/1',
  verb: 'patch',
  headers: {
    'X-Auth-Token': 'MOCK::1',
  },
  data: {
    name: '小麦全蚀病',
  },
  expects: {
    Status: 200,
    JSON: {
      id: 1,
      name: '小麦全蚀病',
      categoryId: 1,
      creatorId: 1,
    },
  },
}, {
  name: '管理员删除一个病害',
  uri: '/diseases/1',
  verb: 'delete',
  headers: {
    'X-Auth-Token': 'MOCK::1',
  },
  expects: {
    Status: 204,
  },
}, {
  name: '检测删除之后的病害个数',
  uri: '/diseases',
  verb: 'get',
  headers: {
    'X-Auth-Token': 'MOCK::1',
  },
  expects: {
    Status: 200,
    JSONLength: 0,
  },
}];
