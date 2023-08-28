import { main } from "./solution";


describe('sum module', () => {
  test('sum the numbers', async () => {
    expect(await main()).toBe(4);
  });
});

