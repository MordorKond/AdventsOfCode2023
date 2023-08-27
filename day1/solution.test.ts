import {main} from './solution';

describe('sum module', () => {
  test('callories of the top 3 elfs', async () => {
    expect(await main()).toBe(4);
  });
});
