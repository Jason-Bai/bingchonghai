"use strict";

var cov_1b6gvkcz1w = function () {
  var path = "/Users/jason/workspaces/github/bingchonghai/services/src/app/configs/extensions/private-switchs.es",
      hash = "2d630190f85ea7b78cd496662a8edc72a9e2e1b1",
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/jason/workspaces/github/bingchonghai/services/src/app/configs/extensions/private-switchs.es",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 0
        },
        end: {
          line: 13,
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

++cov_1b6gvkcz1w.s[0];
/**
 * 格式如下
 *
 *  swithname: [
 *   "VERB /uri" # GET /apis
 *
 *  ]
 */
module.exports = {
  users: ["GET /users"]
};