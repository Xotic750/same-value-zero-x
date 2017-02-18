/* jslint maxlen:80, es6:true, white:true */

/* jshint bitwise:true, camelcase:true, curly:true, eqeqeq:true, forin:true,
   freeze:true, futurehostile:true, latedef:true, newcap:true, nocomma:true,
   nonbsp:true, singleGroups:true, strict:true, undef:true, unused:true,
   es3:true, esnext:true, plusplus:true, maxparams:1, maxdepth:2,
   maxstatements:11, maxcomplexity:3 */

/* eslint strict: 1, max-lines: 1, symbol-description: 1, max-nested-callbacks: 1,
   max-statements: 1 */

/* global JSON:true, expect, module, require, describe, it, returnExports */

;(function () { // eslint-disable-line no-extra-semi

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
      var numbers = [0, -0, Infinity, -Infinity, 42];
      var nonNullPrimitives = [true, false, 'foo', ''].concat(numbers);
      var primitives = [undefined, null].concat(nonNullPrimitives);
      expect(sameValueZero(NaN, NaN)).toBe(true, 'NaN is SameValueZero as NaN');
      expect(sameValueZero(0, -0)).toBe(true, '+0 is SameValueZero as -0');
      objects.concat(primitives).forEach(function (val) {
        expect(sameValueZero(val, val)).toBe(val === val, '"' + val + '" is SameValueZero to itself');
      });
    });
  });
}());
