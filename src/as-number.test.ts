import { asNumber } from './as-number';

describe('asNumber() should return number or undefined', () => {
  test.each([
    ['', undefined],
    [undefined, undefined],
    ['abc', undefined],
    ['0', 0],
    ['1', 1],
    ['123', 123],
    ['true', undefined],
    ['false', undefined],
    ['9BX9', undefined],
    ['0x15', 0],
    ['2019-01-31T10:00:00Z', undefined],
  ])('verify %s produces %o', (input: string | undefined, expected) => {
    const num = asNumber(input);
    expect(num).toEqual(expected);
  });
});
