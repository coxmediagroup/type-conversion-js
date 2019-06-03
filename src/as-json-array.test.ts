import { asJSONArray } from './as-json-array';

describe('asJSONArray() should always return an array', () => {
  test.each`
    input                 | expected
    ${undefined}          | ${[]}
    ${''}                 | ${[]}
    ${'true'}             | ${[]}
    ${'null'}             | ${[]}
    ${'{"data":"stuff"}'} | ${[]}
    ${'[1, 2, 3]'}        | ${[1, 2, 3]}
  `('verify `$input` produces `$expected`', (testcase) => {
    const { input, expected } = testcase;
    const num = asJSONArray(input);
    expect(num).toEqual(expected);
  });
});
