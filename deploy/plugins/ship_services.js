const utils = require('shipit-utils');
const config = require('../config');

module.exports = function(shipit) {

  utils.registerTask(shipit, 'ship_services', task);

  function task() {
    // 读取相关配置
    shipit.config = shipit.config || {}; // 读取相关配置

    const cmds = [
      'cd ' + shipit.config.deployTo + '/current/services/',
      'nvm use ' + config.services.node.version,
      'npm install pm2 -g',
      'npm install',
      'cp ~/config.production.js ' + shipit.config.deployTo + '/current/services/app/configs',
      'npm run _init',
      'NODE_ENV=production node index.js'
    ]

    // 执行命令
    return shipit.remote(cmds.join(' && '));
  }

}
