/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

module.exports = {
  title: '农资院',        // Your website title
  url: 'http://dev.bch.com',          // Your website URL
  project: 'nongziyuan',      // Firebase project. See README.md -> How to Deploy
  trackingID: 'UA-XXXXX-Y',                 // Google Analytics Site's ID
  routers: [{
    name: '首页',
    uri: '/'
  }, {
    name: '农业政策',
    uri: '/policies'
  }, {
    name: '病虫害查询',
    uri: '/diseases'
  }, {
    name: '农产品价格',
    uri: '/prices'
  }, {
    name: '关于我们',
    uri: '/about'
  }]
};
