'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_18j5hsoljg = function () {
  var path = '/Users/jason/workspaces/github/bingchonghai/services/src/app/middle-wares/index.es',
      hash = '1b0ae1aa4155631f981c0a1ec80ef521c93c9c46',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/jason/workspaces/github/bingchonghai/services/src/app/middle-wares/index.es',
    statementMap: {
      '0': {
        start: {
          line: 8,
          column: 66
        },
        end: {
          line: 8,
          column: 72
        }
      },
      '1': {
        start: {
          line: 9,
          column: 14
        },
        end: {
          line: 9,
          column: 68
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      '0': 0,
      '1': 0
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

var _utils = require('../lib/utils');

var _utils2 = _interopRequireDefault(_utils);

var _configs = require('../configs');

var _configs2 = _interopRequireDefault(_configs);

var _writeLogger = require('./write-logger');

var _writeLogger2 = _interopRequireDefault(_writeLogger);

var _privateClientCheck = require('./private-client-check');

var _privateClientCheck2 = _interopRequireDefault(_privateClientCheck);

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _openI18n = require('open-i18n');

var _openI18n2 = _interopRequireDefault(_openI18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (++cov_18j5hsoljg.s[0], _configs2.default),
    accessLog = _ref.accessLog,
    dateTimeFormat = _ref.dateTimeFormat,
    languages = _ref.languages,
    defaultLanguage = _ref.defaultLanguage;

var LANGS = (++cov_18j5hsoljg.s[1], _utils2.default.getModules(__dirname + '/../../../locale', ['json']));

exports.default = [_utils2.default.openRestAccessLog(accessLog, dateTimeFormat), (0, _writeLogger2.default)(), (0, _privateClientCheck2.default)(_configs2.default.proxyIps, _configs2.default.privateIps), (0, _user2.default)(_configs2.default.allowGuestAccessPaths), _openI18n2.default.middleWare(languages, defaultLanguage, LANGS)];