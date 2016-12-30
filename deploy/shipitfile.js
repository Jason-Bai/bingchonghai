module.exports = function (shipit) {
  // 插件
  require('shipit-deploy')(shipit);

  // 自定义插件
  require('./plugins')(shipit);

  shipit.initConfig({
    default: {
      workspace: '/tmp/github-repositories',
      deployTo: '/home/baiyu/www/bingchonghai',
      repositoryUrl: 'https://github.com/jason1213/bingchonghai.git',
      branch: 'master',
      ignores: ['.git', 'node_modules'],
      keepReleases: 2,
      key: '~/.ssh/id_rsa',
      deleteOnRollback: false,
      shallowClone: true
    },
    aliyun: {
      servers: 'baiyu@101.200.181.218'
    }
  });

};
