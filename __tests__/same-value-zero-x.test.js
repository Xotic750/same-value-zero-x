import sameValueZero from 'src/same-value-zero-x';

describe('sameValueZero', function() {
  it('basic', function() {
    expect.assertions(17);
    const coercibleObject = {
      toString() {
        return 42;
      },
      valueOf() {
        return 3;
      },
    };
    const valueOfOnlyObject = {
      toString() {
        return {};
      },
      valueOf() {
        return 4;
      },
    };
    const toStringOnlyObject = {
      toString() {
        return 7;
      },
      valueOf() {
        return {};
      },
    };
    const objects = [{}, coercibleObject, toStringOnlyObject, valueOfOnlyObject];
    const numbers = [0, -0, Infinity, -Infinity, 42];
    const nonNullPrimitives = [true, false, 'foo', ''].concat(numbers);
    const primitives = [undefined, null].concat(nonNullPrimitives);
    expect(sameValueZero(NaN, NaN)).toBe(true, 'NaN is SameValueZero as NaN');
    expect(sameValueZero(0, -0)).toBe(true, '+0 is SameValueZero as -0');
    objects.concat(primitives).forEach(function(val) {
      /* eslint-disable-next-line no-self-compare */
      expect(sameValueZero(val, val)).toBe(val === val, `"${val}" is SameValueZero to itself`);
    });
  });
});
