import { asBoolean } from './as-boolean';

describe('asBoolean() should return boolean or undefined', () => {
  test.each([
    ['', undefined],
    [undefined, undefined],
    ['abc', undefined],
    ['1', undefined],
    ['0', undefined],
    ['True', true],
    ['False', false],
    ['2019-01-31T10:00:00Z', undefined],
  ])('verify %s produces %o', (input: string | undefined, expected) => {
    const ts = asBoolean(input);
    expect(ts).toEqual(expected);
  });
});
