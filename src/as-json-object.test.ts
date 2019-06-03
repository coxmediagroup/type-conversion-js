import { asJSONObject } from './as-json-object';

describe('asJSONObject() should always return an object', () => {
  test.each`
    input                 | expected
    ${undefined}          | ${{}}
    ${''}                 | ${{}}
    ${'true'}             | ${{}}
    ${'null'}             | ${{}}
    ${'[1, 2, 3]'}        | ${{}}
    ${'{"data":"stuff"}'} | ${{ data: 'stuff' }}
  `('verify `$input` produces `$expected`', (testcase) => {
    const { input, expected } = testcase;
    const num = asJSONObject(input);
    expect(num).toEqual(expected);
  });
});
