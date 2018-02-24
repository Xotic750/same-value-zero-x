(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.returnExports = f()}})(function(){var define,module,exports;return (function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(_dereq_,module,exports){
/**
 * @file ES6-compliant shim for SameValueZero.
 * @see {@link http://www.ecma-international.org/ecma-262/6.0/#sec-samevaluezero|7.2.10 SameValueZero(x, y)}
 * @version 1.3.2
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module same-value-zero-x
 */

'use strict';

var sameValue = _dereq_('same-value-x');

/**
 * This method determines whether two values are the same value.
 * SameValueZero differs from SameValue (`Object.is`) only in its treatment
 * of +0 and -0.
 *
 * @param {*} x - The first value to compare.
 * @param {*} y - The second value to compare.
 * @returns {boolean} A Boolean indicating whether or not the two arguments
 * are the same value.
 * @example
 * var sameValueZero = require('same-value-zero-x');
 * sameValueZero(0, 0); // true
 * sameValueZero(-0, -0); // true
 * sameValueZero(0, -0); // true
 * sameValueZero(NaN, NaN); //true
 * sameValueZero(Infinity, Infinity); // true
 * sameValueZero(-Infinity, -Infinity); // true
 */
module.exports = function sameValueZero(x, y) {
  return x === y || sameValue(x, y);
};

},{"same-value-x":3}],2:[function(_dereq_,module,exports){
/**
 * @file ES6-compliant shim for Number.isNaN - the global isNaN returns false positives.
 * @version 1.0.3
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module is-nan-x
 */

'use strict';

/**
 * This method determines whether the passed value is NaN and its type is
 * `Number`. It is a more robust version of the original, global isNaN().
 *
 * @param {*} value - The value to be tested for NaN.
 * @returns {boolean} `true` if the given value is NaN and its type is Number;
 *  otherwise, `false`.
 * @example
 * var numberIsNaN = require('is-nan-x');
 *
 * numberIsNaN(NaN);        // true
 * numberIsNaN(Number.NaN); // true
 * numberIsNaN(0 / 0);      // true
 *
 * // e.g. these would have been true with global isNaN()
 * numberIsNaN('NaN');      // false
 * numberIsNaN(undefined);  // false
 * numberIsNaN({});         // false
 * numberIsNaN('blabla');   // false
 *
 * // These all return false
 * numberIsNaN(true);
 * numberIsNaN(null);
 * numberIsNaN(37);
 * numberIsNaN('37');
 * numberIsNaN('37.37');
 * numberIsNaN('');
 * numberIsNaN(' ');
 */
module.exports = function isNaN(value) {
  return value !== value;
};

},{}],3:[function(_dereq_,module,exports){
/**
 * @file Determines whether two values are the same value.
 * @version 1.0.1
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module same-value-x
 */

'use strict';

var numberIsNaN = _dereq_('is-nan-x');

/**
 * This method is the comparison abstract operation SameValue(x, y), where x
 * and y are ECMAScript language values, produces true or false.
 *
 * @param {*} value1 - The first value to compare.
 * @param {*} value2 - The second value to compare.
 * @returns {boolean} A Boolean indicating whether or not the two arguments are
 *  the same value.
 * @example
 * var sameValue = require('same-value-x');
 *
 * sameValue(1, 1); // true
 * sameValue(true, true); // true
 * sameValue(NaN, NaN); // true
 * sameValue(true, false); // false
 * sameValue(0, -0); // false
 */
module.exports = function sameValue(value1, value2) {
  if (value1 === 0 && value2 === 0) {
    return 1 / value1 === 1 / value2;
  }

  if (value1 === value2) {
    return true;
  }

  return numberIsNaN(value1) && numberIsNaN(value2);
};

},{"is-nan-x":2}]},{},[1])(1)
});