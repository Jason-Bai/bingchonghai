"use strict";

var cov_2co5ja8mhc = function () {
  var path = "/Users/jason/workspaces/github/bingchonghai/services/src/app/routes.es",
      hash = "7a59fff3a449d450bea139c8c65f3704e9170efd",
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/jason/workspaces/github/bingchonghai/services/src/app/routes.es",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 0
        },
        end: {
          line: 25,
          column: 2
        }
      },
      "1": {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 9,
          column: 27
        }
      },
      "2": {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 12,
          column: 35
        }
      },
      "3": {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 15,
          column: 35
        }
      },
      "4": {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 18,
          column: 36
        }
      },
      "5": {
        start: {
          line: 21,
          column: 2
        },
        end: {
          line: 21,
          column: 21
        }
      },
      "6": {
        start: {
          line: 24,
          column: 2
        },
        end: {
          line: 24,
          column: 25
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 7,
            column: 17
          },
          end: {
            line: 7,
            column: 18
          }
        },
        loc: {
          start: {
            line: 7,
            column: 24
          },
          end: {
            line: 25,
            column: 1
          }
        }
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {
      "0": 0
    },
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

++cov_2co5ja8mhc.s[0];
/**
 * api route 定义，之所以需要这个文件
 * 是希望有一个统一的地方可以清晰的看到所有的路由配置
 * 方便开发人员快速的查找定位问题
 */

module.exports = function (r) {
  ++cov_2co5ja8mhc.f[0];
  ++cov_2co5ja8mhc.s[1];

  /** 首页默认路由 */
  r.get("/", "home#index");

  /** 用户登陆接口 */
  ++cov_2co5ja8mhc.s[2];
  r.post("/session", "user#login");

  /** 用户退出接口 */
  ++cov_2co5ja8mhc.s[3];
  r.del("/session", "user#logout");

  /** 用户查看自身信息接口 */
  ++cov_2co5ja8mhc.s[4];
  r.get("/session", "user#session");

  /** 用户接口 */
  ++cov_2co5ja8mhc.s[5];
  r.resource("user");

  /** 分类接口 */
  ++cov_2co5ja8mhc.s[6];
  r.resource("category");
};