import sameValue from 'same-value-x';
/**
 * This method determines whether two values are the same value.
 * SameValueZero differs from SameValue (`Object.is`) only in its treatment
 * of +0 and -0.
 *
 * @param {*} [x] - The first value to compare.
 * @param {*} [y] - The second value to compare.
 * @returns {boolean} A Boolean indicating whether or not the two arguments
 * are the same value.
 */

var sameValueZero = function sameValueZero(x, y) {
  return x === y || sameValue(x, y);
};

export default sameValueZero;

//# sourceMappingURL=same-value-zero-x.esm.js.map