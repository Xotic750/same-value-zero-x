'use strict';

var sameValueZero;
if (typeof module === 'object' && module.exports) {
  require('es5-shim');
  require('es5-shim/es5-sham');
  if (typeof JSON === 'undefined') {
    JSON = {};
  }
  require('json3').runInContext(null, JSON);
  require('es6-shim');
  var es7 = require('es7-shim');
  Object.keys(es7).forEach(function (key) {
    var obj = es7[key];
    if (typeof obj.shim === 'function') {
      obj.shim();
    }
  });
  sameValueZero = require('../../index.js');
} else {
  sameValueZero = returnExports;
}

describe('sameValueZero', function () {
  it('Basic', function () {
    var coercibleObject = {
      toString: function () {
        return 42;
      },
      valueOf: function () {
        return 3;
      }
    };
    var valueOfOnlyObject = {
      toString: function () {
        return {};
      },
      valueOf: function () {
        return 4;
      }
    };
    var toStringOnlyObject = {
      toString: function () {
        return 7;
      },
      valueOf: function () {
        return {};
      }

    };
    var objects = [
      {},
      coercibleObject,
      toStringOnlyObject,
      valueOfOnlyObject
    ];
    var numbers = [
      0,
      -0,
      Infinity,
      -Infinity,
      42
    ];
    var nonNullPrimitives = [
      true,
      false,
      'foo',
      ''
    ].concat(numbers);
    var primitives = [undefined, null].concat(nonNullPrimitives);
    expect(sameValueZero(NaN, NaN)).toBe(true, 'NaN is SameValueZero as NaN');
    expect(sameValueZero(0, -0)).toBe(true, '+0 is SameValueZero as -0');
    objects.concat(primitives).forEach(function (val) {
      expect(sameValueZero(val, val)).toBe(val === val, '"' + val + '" is SameValueZero to itself');
    });
  });
});
