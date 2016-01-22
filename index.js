/**
 * @file
 * <a href="https://travis-ci.org/Xotic750/same-value-zero-x"
 * title="Travis status">
 * <img
 * src="https://travis-ci.org/Xotic750/same-value-zero-x.svg?branch=master"
 * alt="Travis status" height="18">
 * </a>
 * <a href="https://david-dm.org/Xotic750/same-value-zero-x"
 * title="Dependency status">
 * <img src="https://david-dm.org/Xotic750/same-value-zero-x.svg"
 * alt="Dependency status" height="18"/>
 * </a>
 * <a
 * href="https://david-dm.org/Xotic750/same-value-zero-x#info=devDependencies"
 * title="devDependency status">
 * <img src="https://david-dm.org/Xotic750/same-value-zero-x/dev-status.svg"
 * alt="devDependency status" height="18"/>
 * </a>
 * <a href="https://badge.fury.io/js/same-value-zero-x" title="npm version">
 * <img src="https://badge.fury.io/js/same-value-zero-x.svg"
 * alt="npm version" height="18">
 * </a>
 *
 * sameValueZero module.
 *
 * <h2>ECMAScript compatibility shims for legacy JavaScript engines</h2>
 * `es5-shim.js` monkey-patches a JavaScript context to contain all EcmaScript 5
 * methods that can be faithfully emulated with a legacy JavaScript engine.
 *
 * `es5-sham.js` monkey-patches other ES5 methods as closely as possible.
 * For these methods, as closely as possible to ES5 is not very close.
 * Many of these shams are intended only to allow code to be written to ES5
 * without causing run-time errors in older engines. In many cases,
 * this means that these shams cause many ES5 methods to silently fail.
 * Decide carefully whether this is what you want. Note: es5-sham.js requires
 * es5-shim.js to be able to work properly.
 *
 * `json3.js` monkey-patches the EcmaScript 5 JSON implimentation faithfully.
 *
 * `es6.shim.js` provides compatibility shims so that legacy JavaScript engines
 * behave as closely as possible to ECMAScript 6 (Harmony).
 *
 * @version 1.0.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module same-value-zero-x
 */

/*jslint maxlen:80, es6:true, white:true */

/*jshint bitwise:true, camelcase:true, curly:true, eqeqeq:true, forin:true,
  freeze:true, futurehostile:true, latedef:true, newcap:true, nocomma:true,
  nonbsp:true, singleGroups:true, strict:true, undef:true, unused:true,
  es3:true, esnext:true, plusplus:true, maxparams:2, maxdepth:1,
  maxstatements:2, maxcomplexity:2 */

/*global module */

;(function () {
  'use strict';

  var $is = Object.is;

  /**
   * This method determines whether two values are the same value.
   * SameValueZero differs from SameValue (`Object.is`) only in its treatment
   * of +0 and -0.
   *
   * @param {*} x The first value to compare.
   * @param {*} y The second value to compare.
   * @return {boolean} A Boolean indicating whether or not the two arguments
   * are the same value.
   * @example
   * var sameValueZero = require('same-value-zero-x');
   * sameValueZero(0, 0); // true
   * sameValueZero(-0, -0); // true
   * sameValueZero(0, -0); // false
   * sameValueZero(NaN, NaN); //true
   * sameValueZero(Infinity, Infinity); // true
   * sameValueZero(-Infinity, -Infinity); // true
   */
  module.exports = function sameValueZero(x, y) {
    return x === y || $is(x, y);
  };
}());
