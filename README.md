<a
  href="https://travis-ci.org/Xotic750/same-value-zero-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/same-value-zero-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/same-value-zero-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/same-value-zero-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/same-value-zero-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/same-value-zero-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/same-value-zero-x"
  title="npm version">
<img src="https://badge.fury.io/js/same-value-zero-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/same-value-zero-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/same-value-zero-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/same-value-zero-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/same-value-zero-x?branch=master"
  alt="bettercodehub score" height="18">
</a>

<a name="module_same-value-zero-x"></a>

## same-value-zero-x

ES6-compliant shim for SameValueZero.

**See**: [7.2.10 SameValueZero(x, y)](http://www.ecma-international.org/ecma-262/6.0/#sec-samevaluezero)

<a name="exp_module_same-value-zero-x--module.exports"></a>

### `module.exports(x, y)` ⇒ <code>boolean</code> ⏏

This method determines whether two values are the same value.
SameValueZero differs from SameValue (`Object.is`) only in its treatment
of +0 and -0.

**Kind**: Exported function  
**Returns**: <code>boolean</code> - A Boolean indicating whether or not the two arguments
are the same value.

| Param | Type            | Description                  |
| ----- | --------------- | ---------------------------- |
| x     | <code>\*</code> | The first value to compare.  |
| y     | <code>\*</code> | The second value to compare. |

**Example**

```js
import sameValueZero from 'same-value-zero-x';

console.log(sameValueZero(0, 0)); // true
console.log(sameValueZero(-0, -0)); // true
console.log(sameValueZero(0, -0)); // true
console.log(sameValueZero(NaN, NaN)); //true
console.log(sameValueZero(Infinity, Infinity)); // true
console.log(sameValueZero(-Infinity, -Infinity)); // true
```
