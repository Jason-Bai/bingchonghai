'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findOrCreate = exports.checkPass = exports.login = exports.logout = exports.session = undefined;

var cov_9qu3gdy91 = function () {
  var path = '/Users/jason/workspaces/github/bingchonghai/services/src/app/controllers/helper/user.es',
      hash = '97ecc5e933d225646694c8a45f6d6cbc91e910b7',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/jason/workspaces/github/bingchonghai/services/src/app/controllers/helper/user.es',
    statementMap: {
      '0': {
        start: {
          line: 6,
          column: 23
        },
        end: {
          line: 11,
          column: 1
        }
      },
      '1': {
        start: {
          line: 7,
          column: 2
        },
        end: {
          line: 10,
          column: 4
        }
      },
      '2': {
        start: {
          line: 8,
          column: 4
        },
        end: {
          line: 8,
          column: 34
        }
      },
      '3': {
        start: {
          line: 9,
          column: 4
        },
        end: {
          line: 9,
          column: 11
        }
      },
      '4': {
        start: {
          line: 14,
          column: 22
        },
        end: {
          line: 34,
          column: 1
        }
      },
      '5': {
        start: {
          line: 16,
          column: 15
        },
        end: {
          line: 16,
          column: 30
        }
      },
      '6': {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 33,
          column: 4
        }
      },
      '7': {
        start: {
          line: 19,
          column: 18
        },
        end: {
          line: 19,
          column: 33
        }
      },
      '8': {
        start: {
          line: 20,
          column: 17
        },
        end: {
          line: 26,
          column: 5
        }
      },
      '9': {
        start: {
          line: 21,
          column: 6
        },
        end: {
          line: 21,
          column: 20
        }
      },
      '10': {
        start: {
          line: 22,
          column: 6
        },
        end: {
          line: 24,
          column: 7
        }
      },
      '11': {
        start: {
          line: 23,
          column: 8
        },
        end: {
          line: 23,
          column: 54
        }
      },
      '12': {
        start: {
          line: 25,
          column: 6
        },
        end: {
          line: 25,
          column: 13
        }
      },
      '13': {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 32,
          column: 19
        }
      },
      '14': {
        start: {
          line: 30,
          column: 6
        },
        end: {
          line: 30,
          column: 31
        }
      },
      '15': {
        start: {
          line: 30,
          column: 17
        },
        end: {
          line: 30,
          column: 31
        }
      },
      '16': {
        start: {
          line: 31,
          column: 6
        },
        end: {
          line: 31,
          column: 44
        }
      },
      '17': {
        start: {
          line: 37,
          column: 21
        },
        end: {
          line: 63,
          column: 1
        }
      },
      '18': {
        start: {
          line: 39,
          column: 15
        },
        end: {
          line: 39,
          column: 30
        }
      },
      '19': {
        start: {
          line: 40,
          column: 15
        },
        end: {
          line: 40,
          column: 30
        }
      },
      '20': {
        start: {
          line: 42,
          column: 2
        },
        end: {
          line: 62,
          column: 4
        }
      },
      '21': {
        start: {
          line: 43,
          column: 30
        },
        end: {
          line: 43,
          column: 40
        }
      },
      '22': {
        start: {
          line: 49,
          column: 4
        },
        end: {
          line: 61,
          column: 7
        }
      },
      '23': {
        start: {
          line: 50,
          column: 6
        },
        end: {
          line: 50,
          column: 60
        }
      },
      '24': {
        start: {
          line: 50,
          column: 17
        },
        end: {
          line: 50,
          column: 60
        }
      },
      '25': {
        start: {
          line: 52,
          column: 3
        },
        end: {
          line: 59,
          column: 9
        }
      },
      '26': {
        start: {
          line: 53,
          column: 8
        },
        end: {
          line: 53,
          column: 38
        }
      },
      '27': {
        start: {
          line: 53,
          column: 19
        },
        end: {
          line: 53,
          column: 38
        }
      },
      '28': {
        start: {
          line: 54,
          column: 8
        },
        end: {
          line: 58,
          column: 11
        }
      },
      '29': {
        start: {
          line: 55,
          column: 10
        },
        end: {
          line: 55,
          column: 70
        }
      },
      '30': {
        start: {
          line: 55,
          column: 20
        },
        end: {
          line: 55,
          column: 70
        }
      },
      '31': {
        start: {
          line: 56,
          column: 10
        },
        end: {
          line: 56,
          column: 26
        }
      },
      '32': {
        start: {
          line: 57,
          column: 10
        },
        end: {
          line: 57,
          column: 17
        }
      },
      '33': {
        start: {
          line: 74,
          column: 25
        },
        end: {
          line: 96,
          column: 1
        }
      },
      '34': {
        start: {
          line: 76,
          column: 15
        },
        end: {
          line: 76,
          column: 30
        }
      },
      '35': {
        start: {
          line: 78,
          column: 2
        },
        end: {
          line: 95,
          column: 4
        }
      },
      '36': {
        start: {
          line: 79,
          column: 15
        },
        end: {
          line: 79,
          column: 23
        }
      },
      '37': {
        start: {
          line: 80,
          column: 25
        },
        end: {
          line: 80,
          column: 35
        }
      },
      '38': {
        start: {
          line: 81,
          column: 4
        },
        end: {
          line: 81,
          column: 46
        }
      },
      '39': {
        start: {
          line: 81,
          column: 15
        },
        end: {
          line: 81,
          column: 46
        }
      },
      '40': {
        start: {
          line: 82,
          column: 4
        },
        end: {
          line: 86,
          column: 5
        }
      },
      '41': {
        start: {
          line: 83,
          column: 6
        },
        end: {
          line: 85,
          column: 7
        }
      },
      '42': {
        start: {
          line: 84,
          column: 8
        },
        end: {
          line: 84,
          column: 22
        }
      },
      '43': {
        start: {
          line: 88,
          column: 18
        },
        end: {
          line: 88,
          column: 71
        }
      },
      '44': {
        start: {
          line: 88,
          column: 42
        },
        end: {
          line: 88,
          column: 70
        }
      },
      '45': {
        start: {
          line: 89,
          column: 4
        },
        end: {
          line: 89,
          column: 39
        }
      },
      '46': {
        start: {
          line: 89,
          column: 25
        },
        end: {
          line: 89,
          column: 39
        }
      },
      '47': {
        start: {
          line: 90,
          column: 4
        },
        end: {
          line: 90,
          column: 49
        }
      },
      '48': {
        start: {
          line: 90,
          column: 19
        },
        end: {
          line: 90,
          column: 49
        }
      },
      '49': {
        start: {
          line: 91,
          column: 4
        },
        end: {
          line: 94,
          column: 7
        }
      },
      '50': {
        start: {
          line: 92,
          column: 6
        },
        end: {
          line: 92,
          column: 32
        }
      },
      '51': {
        start: {
          line: 92,
          column: 18
        },
        end: {
          line: 92,
          column: 32
        }
      },
      '52': {
        start: {
          line: 93,
          column: 6
        },
        end: {
          line: 93,
          column: 42
        }
      },
      '53': {
        start: {
          line: 99,
          column: 28
        },
        end: {
          line: 123,
          column: 1
        }
      },
      '54': {
        start: {
          line: 100,
          column: 15
        },
        end: {
          line: 100,
          column: 30
        }
      },
      '55': {
        start: {
          line: 101,
          column: 23
        },
        end: {
          line: 101,
          column: 71
        }
      },
      '56': {
        start: {
          line: 103,
          column: 2
        },
        end: {
          line: 122,
          column: 4
        }
      },
      '57': {
        start: {
          line: 104,
          column: 28
        },
        end: {
          line: 104,
          column: 38
        }
      },
      '58': {
        start: {
          line: 105,
          column: 4
        },
        end: {
          line: 105,
          column: 39
        }
      },
      '59': {
        start: {
          line: 105,
          column: 25
        },
        end: {
          line: 105,
          column: 39
        }
      },
      '60': {
        start: {
          line: 106,
          column: 4
        },
        end: {
          line: 106,
          column: 42
        }
      },
      '61': {
        start: {
          line: 106,
          column: 16
        },
        end: {
          line: 106,
          column: 42
        }
      },
      '62': {
        start: {
          line: 107,
          column: 4
        },
        end: {
          line: 121,
          column: 19
        }
      },
      '63': {
        start: {
          line: 108,
          column: 6
        },
        end: {
          line: 113,
          column: 7
        }
      },
      '64': {
        start: {
          line: 109,
          column: 8
        },
        end: {
          line: 109,
          column: 36
        }
      },
      '65': {
        start: {
          line: 110,
          column: 8
        },
        end: {
          line: 110,
          column: 31
        }
      },
      '66': {
        start: {
          line: 111,
          column: 8
        },
        end: {
          line: 111,
          column: 54
        }
      },
      '67': {
        start: {
          line: 112,
          column: 8
        },
        end: {
          line: 112,
          column: 22
        }
      },
      '68': {
        start: {
          line: 114,
          column: 6
        },
        end: {
          line: 114,
          column: 55
        }
      },
      '69': {
        start: {
          line: 114,
          column: 17
        },
        end: {
          line: 114,
          column: 55
        }
      },
      '70': {
        start: {
          line: 115,
          column: 6
        },
        end: {
          line: 120,
          column: 9
        }
      },
      '71': {
        start: {
          line: 116,
          column: 8
        },
        end: {
          line: 116,
          column: 38
        }
      },
      '72': {
        start: {
          line: 116,
          column: 19
        },
        end: {
          line: 116,
          column: 38
        }
      },
      '73': {
        start: {
          line: 117,
          column: 8
        },
        end: {
          line: 117,
          column: 47
        }
      },
      '74': {
        start: {
          line: 118,
          column: 8
        },
        end: {
          line: 118,
          column: 53
        }
      },
      '75': {
        start: {
          line: 119,
          column: 8
        },
        end: {
          line: 119,
          column: 15
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 6,
            column: 23
          },
          end: {
            line: 6,
            column: 24
          }
        },
        loc: {
          start: {
            line: 6,
            column: 45
          },
          end: {
            line: 11,
            column: 1
          }
        }
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 7,
            column: 9
          },
          end: {
            line: 7,
            column: 10
          }
        },
        loc: {
          start: {
            line: 7,
            column: 29
          },
          end: {
            line: 10,
            column: 3
          }
        }
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 14,
            column: 22
          },
          end: {
            line: 14,
            column: 23
          }
        },
        loc: {
          start: {
            line: 14,
            column: 28
          },
          end: {
            line: 34,
            column: 1
          }
        }
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 18,
            column: 9
          },
          end: {
            line: 18,
            column: 10
          }
        },
        loc: {
          start: {
            line: 18,
            column: 29
          },
          end: {
            line: 33,
            column: 3
          }
        }
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 20,
            column: 17
          },
          end: {
            line: 20,
            column: 18
          }
        },
        loc: {
          start: {
            line: 20,
            column: 23
          },
          end: {
            line: 26,
            column: 5
          }
        }
      },
      '5': {
        name: '(anonymous_5)',
        decl: {
          start: {
            line: 28,
            column: 40
          },
          end: {
            line: 28,
            column: 41
          }
        },
        loc: {
          start: {
            line: 28,
            column: 50
          },
          end: {
            line: 32,
            column: 5
          }
        }
      },
      '6': {
        name: '(anonymous_6)',
        decl: {
          start: {
            line: 37,
            column: 21
          },
          end: {
            line: 37,
            column: 22
          }
        },
        loc: {
          start: {
            line: 37,
            column: 27
          },
          end: {
            line: 63,
            column: 1
          }
        }
      },
      '7': {
        name: '(anonymous_7)',
        decl: {
          start: {
            line: 42,
            column: 9
          },
          end: {
            line: 42,
            column: 10
          }
        },
        loc: {
          start: {
            line: 42,
            column: 29
          },
          end: {
            line: 62,
            column: 3
          }
        }
      },
      '8': {
        name: '(anonymous_8)',
        decl: {
          start: {
            line: 49,
            column: 41
          },
          end: {
            line: 49,
            column: 42
          }
        },
        loc: {
          start: {
            line: 49,
            column: 58
          },
          end: {
            line: 61,
            column: 5
          }
        }
      },
      '9': {
        name: '(anonymous_9)',
        decl: {
          start: {
            line: 52,
            column: 35
          },
          end: {
            line: 52,
            column: 36
          }
        },
        loc: {
          start: {
            line: 52,
            column: 52
          },
          end: {
            line: 59,
            column: 7
          }
        }
      },
      '10': {
        name: '(anonymous_10)',
        decl: {
          start: {
            line: 54,
            column: 52
          },
          end: {
            line: 54,
            column: 53
          }
        },
        loc: {
          start: {
            line: 54,
            column: 69
          },
          end: {
            line: 58,
            column: 9
          }
        }
      },
      '11': {
        name: '(anonymous_11)',
        decl: {
          start: {
            line: 74,
            column: 25
          },
          end: {
            line: 74,
            column: 26
          }
        },
        loc: {
          start: {
            line: 74,
            column: 60
          },
          end: {
            line: 96,
            column: 1
          }
        }
      },
      '12': {
        name: '(anonymous_12)',
        decl: {
          start: {
            line: 78,
            column: 9
          },
          end: {
            line: 78,
            column: 10
          }
        },
        loc: {
          start: {
            line: 78,
            column: 29
          },
          end: {
            line: 95,
            column: 3
          }
        }
      },
      '13': {
        name: '(anonymous_13)',
        decl: {
          start: {
            line: 88,
            column: 35
          },
          end: {
            line: 88,
            column: 36
          }
        },
        loc: {
          start: {
            line: 88,
            column: 42
          },
          end: {
            line: 88,
            column: 70
          }
        }
      },
      '14': {
        name: '(anonymous_14)',
        decl: {
          start: {
            line: 91,
            column: 46
          },
          end: {
            line: 91,
            column: 47
          }
        },
        loc: {
          start: {
            line: 91,
            column: 57
          },
          end: {
            line: 94,
            column: 5
          }
        }
      },
      '15': {
        name: '(anonymous_15)',
        decl: {
          start: {
            line: 99,
            column: 28
          },
          end: {
            line: 99,
            column: 29
          }
        },
        loc: {
          start: {
            line: 99,
            column: 38
          },
          end: {
            line: 123,
            column: 1
          }
        }
      },
      '16': {
        name: '(anonymous_16)',
        decl: {
          start: {
            line: 103,
            column: 9
          },
          end: {
            line: 103,
            column: 10
          }
        },
        loc: {
          start: {
            line: 103,
            column: 29
          },
          end: {
            line: 122,
            column: 3
          }
        }
      },
      '17': {
        name: '(anonymous_17)',
        decl: {
          start: {
            line: 107,
            column: 44
          },
          end: {
            line: 107,
            column: 45
          }
        },
        loc: {
          start: {
            line: 107,
            column: 54
          },
          end: {
            line: 121,
            column: 5
          }
        }
      },
      '18': {
        name: '(anonymous_18)',
        decl: {
          start: {
            line: 115,
            column: 63
          },
          end: {
            line: 115,
            column: 64
          }
        },
        loc: {
          start: {
            line: 115,
            column: 74
          },
          end: {
            line: 120,
            column: 7
          }
        }
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 6,
            column: 24
          },
          end: {
            line: 6,
            column: 40
          }
        },
        type: 'default-arg',
        locations: [{
          start: {
            line: 6,
            column: 37
          },
          end: {
            line: 6,
            column: 40
          }
        }]
      },
      '1': {
        loc: {
          start: {
            line: 22,
            column: 6
          },
          end: {
            line: 24,
            column: 7
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 22,
            column: 6
          },
          end: {
            line: 24,
            column: 7
          }
        }, {
          start: {
            line: 22,
            column: 6
          },
          end: {
            line: 24,
            column: 7
          }
        }]
      },
      '2': {
        loc: {
          start: {
            line: 30,
            column: 6
          },
          end: {
            line: 30,
            column: 31
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 30,
            column: 6
          },
          end: {
            line: 30,
            column: 31
          }
        }, {
          start: {
            line: 30,
            column: 6
          },
          end: {
            line: 30,
            column: 31
          }
        }]
      },
      '3': {
        loc: {
          start: {
            line: 50,
            column: 6
          },
          end: {
            line: 50,
            column: 60
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 50,
            column: 6
          },
          end: {
            line: 50,
            column: 60
          }
        }, {
          start: {
            line: 50,
            column: 6
          },
          end: {
            line: 50,
            column: 60
          }
        }]
      },
      '4': {
        loc: {
          start: {
            line: 53,
            column: 8
          },
          end: {
            line: 53,
            column: 38
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 53,
            column: 8
          },
          end: {
            line: 53,
            column: 38
          }
        }, {
          start: {
            line: 53,
            column: 8
          },
          end: {
            line: 53,
            column: 38
          }
        }]
      },
      '5': {
        loc: {
          start: {
            line: 55,
            column: 10
          },
          end: {
            line: 55,
            column: 70
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 55,
            column: 10
          },
          end: {
            line: 55,
            column: 70
          }
        }, {
          start: {
            line: 55,
            column: 10
          },
          end: {
            line: 55,
            column: 70
          }
        }]
      },
      '6': {
        loc: {
          start: {
            line: 81,
            column: 4
          },
          end: {
            line: 81,
            column: 46
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 81,
            column: 4
          },
          end: {
            line: 81,
            column: 46
          }
        }, {
          start: {
            line: 81,
            column: 4
          },
          end: {
            line: 81,
            column: 46
          }
        }]
      },
      '7': {
        loc: {
          start: {
            line: 82,
            column: 4
          },
          end: {
            line: 86,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 82,
            column: 4
          },
          end: {
            line: 86,
            column: 5
          }
        }, {
          start: {
            line: 82,
            column: 4
          },
          end: {
            line: 86,
            column: 5
          }
        }]
      },
      '8': {
        loc: {
          start: {
            line: 82,
            column: 8
          },
          end: {
            line: 82,
            column: 45
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 82,
            column: 8
          },
          end: {
            line: 82,
            column: 19
          }
        }, {
          start: {
            line: 82,
            column: 24
          },
          end: {
            line: 82,
            column: 44
          }
        }]
      },
      '9': {
        loc: {
          start: {
            line: 83,
            column: 6
          },
          end: {
            line: 85,
            column: 7
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 83,
            column: 6
          },
          end: {
            line: 85,
            column: 7
          }
        }, {
          start: {
            line: 83,
            column: 6
          },
          end: {
            line: 85,
            column: 7
          }
        }]
      },
      '10': {
        loc: {
          start: {
            line: 83,
            column: 12
          },
          end: {
            line: 83,
            column: 58
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 83,
            column: 12
          },
          end: {
            line: 83,
            column: 22
          }
        }, {
          start: {
            line: 83,
            column: 27
          },
          end: {
            line: 83,
            column: 57
          }
        }]
      },
      '11': {
        loc: {
          start: {
            line: 89,
            column: 4
          },
          end: {
            line: 89,
            column: 39
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 89,
            column: 4
          },
          end: {
            line: 89,
            column: 39
          }
        }, {
          start: {
            line: 89,
            column: 4
          },
          end: {
            line: 89,
            column: 39
          }
        }]
      },
      '12': {
        loc: {
          start: {
            line: 90,
            column: 4
          },
          end: {
            line: 90,
            column: 49
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 90,
            column: 4
          },
          end: {
            line: 90,
            column: 49
          }
        }, {
          start: {
            line: 90,
            column: 4
          },
          end: {
            line: 90,
            column: 49
          }
        }]
      },
      '13': {
        loc: {
          start: {
            line: 92,
            column: 6
          },
          end: {
            line: 92,
            column: 32
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 92,
            column: 6
          },
          end: {
            line: 92,
            column: 32
          }
        }, {
          start: {
            line: 92,
            column: 6
          },
          end: {
            line: 92,
            column: 32
          }
        }]
      },
      '14': {
        loc: {
          start: {
            line: 105,
            column: 4
          },
          end: {
            line: 105,
            column: 39
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 105,
            column: 4
          },
          end: {
            line: 105,
            column: 39
          }
        }, {
          start: {
            line: 105,
            column: 4
          },
          end: {
            line: 105,
            column: 39
          }
        }]
      },
      '15': {
        loc: {
          start: {
            line: 106,
            column: 4
          },
          end: {
            line: 106,
            column: 42
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 106,
            column: 4
          },
          end: {
            line: 106,
            column: 42
          }
        }, {
          start: {
            line: 106,
            column: 4
          },
          end: {
            line: 106,
            column: 42
          }
        }]
      },
      '16': {
        loc: {
          start: {
            line: 108,
            column: 6
          },
          end: {
            line: 113,
            column: 7
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 108,
            column: 6
          },
          end: {
            line: 113,
            column: 7
          }
        }, {
          start: {
            line: 108,
            column: 6
          },
          end: {
            line: 113,
            column: 7
          }
        }]
      },
      '17': {
        loc: {
          start: {
            line: 114,
            column: 6
          },
          end: {
            line: 114,
            column: 55
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 114,
            column: 6
          },
          end: {
            line: 114,
            column: 55
          }
        }, {
          start: {
            line: 114,
            column: 6
          },
          end: {
            line: 114,
            column: 55
          }
        }]
      },
      '18': {
        loc: {
          start: {
            line: 116,
            column: 8
          },
          end: {
            line: 116,
            column: 38
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 116,
            column: 8
          },
          end: {
            line: 116,
            column: 38
          }
        }, {
          start: {
            line: 116,
            column: 8
          },
          end: {
            line: 116,
            column: 38
          }
        }]
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
      '9': 0,
      '10': 0,
      '11': 0,
      '12': 0,
      '13': 0,
      '14': 0,
      '15': 0,
      '16': 0,
      '17': 0,
      '18': 0,
      '19': 0,
      '20': 0,
      '21': 0,
      '22': 0,
      '23': 0,
      '24': 0,
      '25': 0,
      '26': 0,
      '27': 0,
      '28': 0,
      '29': 0,
      '30': 0,
      '31': 0,
      '32': 0,
      '33': 0,
      '34': 0,
      '35': 0,
      '36': 0,
      '37': 0,
      '38': 0,
      '39': 0,
      '40': 0,
      '41': 0,
      '42': 0,
      '43': 0,
      '44': 0,
      '45': 0,
      '46': 0,
      '47': 0,
      '48': 0,
      '49': 0,
      '50': 0,
      '51': 0,
      '52': 0,
      '53': 0,
      '54': 0,
      '55': 0,
      '56': 0,
      '57': 0,
      '58': 0,
      '59': 0,
      '60': 0,
      '61': 0,
      '62': 0,
      '63': 0,
      '64': 0,
      '65': 0,
      '66': 0,
      '67': 0,
      '68': 0,
      '69': 0,
      '70': 0,
      '71': 0,
      '72': 0,
      '73': 0,
      '74': 0,
      '75': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
      '9': 0,
      '10': 0,
      '11': 0,
      '12': 0,
      '13': 0,
      '14': 0,
      '15': 0,
      '16': 0,
      '17': 0,
      '18': 0
    },
    b: {
      '0': [0],
      '1': [0, 0],
      '2': [0, 0],
      '3': [0, 0],
      '4': [0, 0],
      '5': [0, 0],
      '6': [0, 0],
      '7': [0, 0],
      '8': [0, 0],
      '9': [0, 0],
      '10': [0, 0],
      '11': [0, 0],
      '12': [0, 0],
      '13': [0, 0],
      '14': [0, 0],
      '15': [0, 0],
      '16': [0, 0],
      '17': [0, 0],
      '18': [0, 0]
    },
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

var _errors = require('../../lib/errors');

var _errors2 = _interopRequireDefault(_errors);

var _utils = require('../../lib/utils');

var _utils2 = _interopRequireDefault(_utils);

var _configs = require('../../configs');

var _configs2 = _interopRequireDefault(_configs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** 读取session */
var session = exports.session = (++cov_9qu3gdy91.s[0], function () {
  var statusCode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (++cov_9qu3gdy91.b[0][0], 200);
  ++cov_9qu3gdy91.f[0];
  ++cov_9qu3gdy91.s[1];

  return function (req, res, next) {
    ++cov_9qu3gdy91.f[1];
    ++cov_9qu3gdy91.s[2];

    res.send(statusCode, req.user);
    ++cov_9qu3gdy91.s[3];
    next();
  };
});

/** 退出 */
var logout = exports.logout = (++cov_9qu3gdy91.s[4], function () {
  ++cov_9qu3gdy91.f[2];


  var Auth = (++cov_9qu3gdy91.s[5], _utils2.default.model('auth'));

  ++cov_9qu3gdy91.s[6];
  return function (req, res, next) {
    ++cov_9qu3gdy91.f[3];

    var token = (++cov_9qu3gdy91.s[7], _utils2.default.getToken(req));
    var done = (++cov_9qu3gdy91.s[8], function () {
      ++cov_9qu3gdy91.f[4];
      ++cov_9qu3gdy91.s[9];

      res.send(204);
      ++cov_9qu3gdy91.s[10];
      if (Auth.readUserByToken.removeKey) {
        ++cov_9qu3gdy91.b[1][0];
        ++cov_9qu3gdy91.s[11];

        Auth.readUserByToken.removeKey(token, _utils2.default.noop);
      } else {
        ++cov_9qu3gdy91.b[1][1];
      }
      ++cov_9qu3gdy91.s[12];
      next();
    });

    ++cov_9qu3gdy91.s[13];
    Auth.findOne({ where: { token: token } }).then(function (auth) {
      ++cov_9qu3gdy91.f[5];
      ++cov_9qu3gdy91.s[14];

      /** 如果 auth 不存在则之简单的del cache */
      if (!auth) {
          ++cov_9qu3gdy91.b[2][0];
          ++cov_9qu3gdy91.s[15];
          return done();
        } else {
        ++cov_9qu3gdy91.b[2][1];
      }++cov_9qu3gdy91.s[16];
      auth.destroy().then(done).catch(next);
    }).catch(next);
  };
});

/** 登陆 */
var login = exports.login = (++cov_9qu3gdy91.s[17], function () {
  ++cov_9qu3gdy91.f[6];


  var User = (++cov_9qu3gdy91.s[18], _utils2.default.model('user'));
  var Auth = (++cov_9qu3gdy91.s[19], _utils2.default.model('auth'));

  ++cov_9qu3gdy91.s[20];
  return function (req, res, next) {
    ++cov_9qu3gdy91.f[7];

    var _ref = (++cov_9qu3gdy91.s[21], req.params),
        email = _ref.email,
        password = _ref.password;
    /**
     * 这里将 req 全部给进去，他会自由的判断
     * req._remoteIp 是必须的，要根据ip来控频，放置暴力密码
     * 这里返回的 user 是去掉 salt, password 的纯数据，而非 User 的实例
     */


    ++cov_9qu3gdy91.s[22];
    User.checkPass(req, email, password, function (error, user) {
      ++cov_9qu3gdy91.f[8];
      ++cov_9qu3gdy91.s[23];

      if (error) {
          ++cov_9qu3gdy91.b[3][0];
          ++cov_9qu3gdy91.s[24];
          return next(_errors2.default.notAuth(error.message));
        } else {
        ++cov_9qu3gdy91.b[3][1];
      } //req.user = user.toJSON();
      ++cov_9qu3gdy91.s[25];
      Auth.addAuth(user, req._realIp, function (error, auth) {
        ++cov_9qu3gdy91.f[9];
        ++cov_9qu3gdy91.s[26];

        if (error) {
            ++cov_9qu3gdy91.b[4][0];
            ++cov_9qu3gdy91.s[27];
            return next(error);
          } else {
          ++cov_9qu3gdy91.b[4][1];
        }++cov_9qu3gdy91.s[28];
        _utils2.default.model('auth').readUserByToken(auth.token, function (error, user) {
          ++cov_9qu3gdy91.f[10];
          ++cov_9qu3gdy91.s[29];

          if (error) {
              ++cov_9qu3gdy91.b[5][0];
              ++cov_9qu3gdy91.s[30];
              return next(_utils2.default.rest.errors.notAuth(error.message));
            } else {
            ++cov_9qu3gdy91.b[5][1];
          }++cov_9qu3gdy91.s[31];
          req.user = user;
          ++cov_9qu3gdy91.s[32];
          next();
        });
      });
      //next()
    });
  };
});

/**
 * 密码验证
 * 这个helper的目的是在用户修改自身信息的时候校验原密码
 * 这样能更安全
 * params
 *   cols: Array 要修改的列 e.g ['password', 'email'] 代表在修改 密码或者Email的时候要验证
 *   ignoreAdmin: Boolean 当用户是管理员是否要忽略,
 *   modifyUser: Boolean 是否是修改用户信息 此时仅当管理员要修改别人的信息才生效，修改自己的信息，任何人都要验证
 */
var checkPass = exports.checkPass = (++cov_9qu3gdy91.s[33], function (cols, ignoreAdmin, modifyUser) {
  ++cov_9qu3gdy91.f[11];


  var User = (++cov_9qu3gdy91.s[34], _utils2.default.model('user'));

  ++cov_9qu3gdy91.s[35];
  return function (req, res, next) {
    ++cov_9qu3gdy91.f[12];

    var user = (++cov_9qu3gdy91.s[36], req.user);

    var _ref2 = (++cov_9qu3gdy91.s[37], req.params),
        origPass = _ref2.origPass;

    ++cov_9qu3gdy91.s[38];

    if (!user) {
        ++cov_9qu3gdy91.b[6][0];
        ++cov_9qu3gdy91.s[39];
        return next(_errors2.default.notFound());
      } else {
      ++cov_9qu3gdy91.b[6][1];
    }++cov_9qu3gdy91.s[40];
    if ((++cov_9qu3gdy91.b[8][0], ignoreAdmin) && (++cov_9qu3gdy91.b[8][1], req.isAdmin === true)) {
      ++cov_9qu3gdy91.b[7][0];
      ++cov_9qu3gdy91.s[41];

      if (!((++cov_9qu3gdy91.b[10][0], modifyUser) && (++cov_9qu3gdy91.b[10][1], req.user.id === +req.params.id))) {
        ++cov_9qu3gdy91.b[9][0];
        ++cov_9qu3gdy91.s[42];

        return next();
      } else {
        ++cov_9qu3gdy91.b[9][1];
      }
    } else {
      ++cov_9qu3gdy91.b[7][1];
    }
    /** 判断如果没有必要的字段修改则不进行验证 */
    var dangers = (++cov_9qu3gdy91.s[43], _utils2.default._.filter(cols, function (x) {
      ++cov_9qu3gdy91.f[13];
      ++cov_9qu3gdy91.s[44];
      return req.params.hasOwnProperty(x);
    }));
    ++cov_9qu3gdy91.s[45];
    if (!dangers.length) {
        ++cov_9qu3gdy91.b[11][0];
        ++cov_9qu3gdy91.s[46];
        return next();
      } else {
      ++cov_9qu3gdy91.b[11][1];
    }++cov_9qu3gdy91.s[47];
    if (!origPass) {
        ++cov_9qu3gdy91.b[12][0];
        ++cov_9qu3gdy91.s[48];
        return next(_errors2.default.notAuth());
      } else {
      ++cov_9qu3gdy91.b[12][1];
    }++cov_9qu3gdy91.s[49];
    User.checkPass(req, user.email, origPass, function (error) {
      ++cov_9qu3gdy91.f[14];
      ++cov_9qu3gdy91.s[50];

      if (!error) {
          ++cov_9qu3gdy91.b[13][0];
          ++cov_9qu3gdy91.s[51];
          return next();
        } else {
        ++cov_9qu3gdy91.b[13][1];
      }++cov_9qu3gdy91.s[52];
      next(_errors2.default.notAuth(error.message));
    });
  };
});

/** 查找用户或者创建用户 */
var findOrCreate = exports.findOrCreate = (++cov_9qu3gdy91.s[53], function (hook) {
  ++cov_9qu3gdy91.f[15];

  var User = (++cov_9qu3gdy91.s[54], _utils2.default.model('user'));
  var emailMissing = (++cov_9qu3gdy91.s[55], _errors2.default.missingParameter('Email 必须指定', ['email']));

  ++cov_9qu3gdy91.s[56];
  return function (req, res, next) {
    ++cov_9qu3gdy91.f[16];

    var _ref3 = (++cov_9qu3gdy91.s[57], req.params),
        email = _ref3.email,
        name = _ref3.name;

    ++cov_9qu3gdy91.s[58];

    if (req.hooks[hook]) {
        ++cov_9qu3gdy91.b[14][0];
        ++cov_9qu3gdy91.s[59];
        return next();
      } else {
      ++cov_9qu3gdy91.b[14][1];
    }++cov_9qu3gdy91.s[60];
    if (!email) {
        ++cov_9qu3gdy91.b[15][0];
        ++cov_9qu3gdy91.s[61];
        return next(emailMissing);
      } else {
      ++cov_9qu3gdy91.b[15][1];
    }++cov_9qu3gdy91.s[62];
    User.findOne({ where: { email: email } }).then(function (user) {
      ++cov_9qu3gdy91.f[17];
      ++cov_9qu3gdy91.s[63];

      if (user) {
        ++cov_9qu3gdy91.b[16][0];
        ++cov_9qu3gdy91.s[64];

        req.params.userId = user.id;
        ++cov_9qu3gdy91.s[65];
        req.hooks[hook] = user;
        ++cov_9qu3gdy91.s[66];
        res.header("X-Content-System-User", 'exists');
        ++cov_9qu3gdy91.s[67];
        return next();
      } else {
        ++cov_9qu3gdy91.b[16][1];
      }
      ++cov_9qu3gdy91.s[68];
      if (!name) {
          ++cov_9qu3gdy91.b[17][0];
          ++cov_9qu3gdy91.s[69];
          req.params.name = email.split('@')[0];
        } else {
        ++cov_9qu3gdy91.b[17][1];
      }++cov_9qu3gdy91.s[70];
      _utils2.default.rest.helper.rest.beforeAdd(User, null, hook)(req, res, function (error) {
        ++cov_9qu3gdy91.f[18];
        ++cov_9qu3gdy91.s[71];

        if (error) {
            ++cov_9qu3gdy91.b[18][0];
            ++cov_9qu3gdy91.s[72];
            return next(error);
          } else {
          ++cov_9qu3gdy91.b[18][1];
        }++cov_9qu3gdy91.s[73];
        req.params.userId = req.hooks[hook].id;
        ++cov_9qu3gdy91.s[74];
        res.header("X-Content-System-User", 'added');
        ++cov_9qu3gdy91.s[75];
        next();
      });
    }).catch(next);
  };
});