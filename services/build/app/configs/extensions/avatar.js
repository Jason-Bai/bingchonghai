"use strict";

var cov_2v126m3ys = function () {
  var path = "/Users/jason/workspaces/github/bingchonghai/services/src/app/configs/extensions/avatar.es",
      hash = "e1d4a5029b95cacf563eceb0e7369c0acf60f3ab",
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/jason/workspaces/github/bingchonghai/services/src/app/configs/extensions/avatar.es",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 0
        },
        end: {
          line: 7,
          column: 2
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
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

++cov_2v126m3ys.s[0];
module.exports = {
  /** 服务器端存储的路径 */
  path: __dirname + "/../../../../avatar",

  /** 头像的访问地址 */
  uri: "/_avatar"
};