import { main } from "./solution";


describe('sum module', () => {
  test('sum the numbers', () => {
    expect(main(1,3)).toBe(4);
  });
});

