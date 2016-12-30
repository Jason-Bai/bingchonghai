const utils = require('shipit-utils');

// 注册published task
const publishedTasks = [
  'ship_services'
]

module.exports = function (shipit) {

  shipit = utils.getShipit(shipit);

  const task = 'ship_services';

  require('./ship_services')(shipit);

  shipit.on('published', function () {
    shipit.start(task);
  });

};
