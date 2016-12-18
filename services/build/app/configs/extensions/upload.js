'use strict';

var cov_1dxe2imelr = function () {
  var path = '/Users/jason/workspaces/github/bingchonghai/services/src/app/configs/extensions/upload.es',
      hash = '3340ae09dd1524034ed156f88e968886330da5a7',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/jason/workspaces/github/bingchonghai/services/src/app/configs/extensions/upload.es',
    statementMap: {
      '0': {
        start: {
          line: 1,
          column: 0
        },
        end: {
          line: 19,
          column: 2
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      '0': 0
    },
    f: {},
    b: {},
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

++cov_1dxe2imelr.s[0];
module.exports = {
  /** 是否允许直接解压zip包 */
  allowUnzip: false,

  /** 文件存储路径 */
  dir: '/data/upload',

  /** 解压缩包文件最多限制 */
  unzipMaxFileNum: 100,

  /**
   * 不允许的后缀，包括压缩包里的，如果要求解压的时候也要判断
   * 一旦有不和发的直接报错
   */
  blackList: ['.php'],

  /** 文件下载路径 */
  accessUrl: './access-files'
};