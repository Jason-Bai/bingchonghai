module.exports = [{
  name: '管理员添加一个一级分类',
  uri: '/categorys',
  verb: 'post',
  headers: {
    'X-Auth-Token': 'MOCK::1',
  },
  data: {
    name: '农作物',
    level: 1,
    parentId: 1,
  },
  expects: {
    Status: 201,
    JSON: {
      id: 1,
      name: '农作物',
      level: 1,
      parentId: 1,
      creatorId: 1,
    },
  },
}, {
  name: '管理员添加一个二级分类',
  uri: '/categorys',
  verb: 'post',
  headers: {
    'X-Auth-Token': 'MOCK::1',
  },
  data: {
    name: '禾本科',
    level: 2,
    parentId: 1,
  },
  expects: {
    Status: 201,
    JSON: {
      id: 2,
      name: '禾本科',
      level: 2,
      parentId: 1,
      creatorId: 1,
    },
  },
}, {
  name: '管理员添加一个三级分类',
  uri: '/categorys',
  verb: 'post',
  headers: {
    'X-Auth-Token': 'MOCK::1',
  },
  data: {
    name: '水稻',
    level: 3,
    parentId: 2,
  },
  expects: {
    Status: 201,
    JSON: {
      id: 3,
      name: '水稻',
      level: 3,
      parentId: 2,
      creatorId: 1,
    },
  },
}, {
  name: '检测查询包含父亲节点分类信息',
  uri: '/categorys/3?includes=parent',
  verb: 'get',
  headers: {
    'X-Auth-Token': 'MOCK::1',
  },
  expects: {
    Status: 200,
    JSON: {
      id: 3,
      name: '水稻',
      level: 3,
      parentId: 2,
      creatorId: 1,
      parent: {
        id: 2,
        name: '禾本科',
        level: 2,
        parentId: 1,
        creatorId: 1,
      }
    }
  },
}, {
  name: '管理员更新一个一级分类',
  uri: '/categorys/1',
  verb: 'patch',
  headers: {
    'X-Auth-Token': 'MOCK::1',
  },
  data: {
    name: '果树',
  },
  expects: {
    Status: 200,
    JSON: {
      id: 1,
      name: '果树',
      level: 1,
      parentId: 1,
      creatorId: 1,
    },
  },
}, {
  name: '管理员恢复更新的一级分类',
  uri: '/categorys/1',
  verb: 'patch',
  headers: {
    'X-Auth-Token': 'MOCK::1',
  },
  data: {
    name: '农作物',
  },
  expects: {
    Status: 200,
    JSON: {
      id: 1,
      name: '农作物',
      level: 1,
      parentId: 1,
      creatorId: 1,
    },
  },
}, {
  name: '管理员删除一个三级分类',
  uri: '/categorys/3',
  verb: 'delete',
  headers: {
    'X-Auth-Token': 'MOCK::1',
  },
  expects: {
    Status: 204,
  },
}, {
  name: '检测删除之后的分类个数',
  uri: '/categorys',
  verb: 'get',
  headers: {
    'X-Auth-Token': 'MOCK::1',
  },
  expects: {
    Status: 200,
    JSONLength: 2,
  },
}, {
  name: '管理员添加一个三级分类',
  uri: '/categorys',
  verb: 'post',
  headers: {
    'X-Auth-Token': 'MOCK::1',
  },
  data: {
    name: '红麻',
    level: 3,
    parentId: 2,
  },
  expects: {
    Status: 201,
    JSON: {
      id: 4,
      name: '红麻',
      level: 3,
      parentId: 2,
      creatorId: 1,
    },
  },
}, {
  name: '检测恢复删除之后的分类个数',
  uri: '/categorys?isDelete=no',
  verb: 'get',
  headers: {
    'X-Auth-Token': 'MOCK::1',
  },
  expects: {
    Status: 200,
    JSONLength: 3,
  },
}];
