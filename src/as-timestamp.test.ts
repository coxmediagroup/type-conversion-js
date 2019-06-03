import { asTimestamp } from './as-timestamp';

describe('asTimestamp() should return number or undefined', () => {
  test.each([
    ['', undefined],
    [undefined, undefined],
    ['abc', undefined],
    ['123', undefined],
    ['2019-01-31T10:00:00Z', 1548928800000],
    ['2019-05-02T20:25:20+00:00', 1556828720000],
    ['2019-01-31T10:00:00.0Z', 1548928800000],
  ])('verify %s produces %o', (input: string | undefined, expected) => {
    const ts = asTimestamp(input);
    expect(ts).toEqual(expected);
  });
});
