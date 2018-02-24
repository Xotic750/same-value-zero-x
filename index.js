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

var sameValue = require('same-value-x');

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
