"use strict";

var cov_bias77r4n = function () {
  var path = "/Users/jason/workspaces/github/bingchonghai/services/src/app/configs/extensions/private-ips.es",
      hash = "ee410e4462c93d33b6efefa60bfa07607abeef73",
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/jason/workspaces/github/bingchonghai/services/src/app/configs/extensions/private-ips.es",
    statementMap: {
      "0": {
        start: {
          line: 8,
          column: 16
        },
        end: {
          line: 10,
          column: 1
        }
      },
      "1": {
        start: {
          line: 13,
          column: 0
        },
        end: {
          line: 21,
          column: 3
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {},
    b: {},
    _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

var _utils = require("../../lib/utils");

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 这里将IP私有客户端的权限大概归类为一下几种，
 * 为了更好的控制权限，避免多地修改
 * groupName: [switch1, switch2]
 */
var switchs = (++cov_bias77r4n.s[0], {
  local: ["users"]
});

/** groupName: [ip1, ip2] */
++cov_bias77r4n.s[1];
module.exports = _utils2.default.privateIpMerge(switchs, {
  /**
   * 范例，同时做测试用
   * @zhaoxiongfei
   */
  local: ["192.168.199.188"]
});