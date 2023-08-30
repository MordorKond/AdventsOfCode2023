import { main } from "./solution2";

    //RPS 1 2 3
    //LDW 0 3 6
    //RPS A B C
    //RPS X Y Z

/* describe('sum module', () => {
  test('R R', () => {
    expect(main(['A X'])).toBe(1+3);
  }),
  test('R P', () => {
    expect(main(['A Y'])).toBe(2+6);
  }),
  test('R S', () => {
    expect(main(['A Z'])).toBe(3+0);
  }),
  test('P R', () => {
    expect(main(['B X'])).toBe(1+0);
  }),
  test('P P', () => {
    expect(main(['B Y'])).toBe(2+3);
  }),
  test('P S', () => {
    expect(main(['B Z'])).toBe(3+6);
  }),
  test('S R', () => {
    expect(main(['C X'])).toBe(1+6);
  }),
  test('S P', () => {
    expect(main(['C Y'])).toBe(2+0);
  }),
  test('S S', () => {
    expect(main(['C Z'])).toBe(3+3);
  });
}); */

/* describe('sum module', () => {
  test('R L', () => {
    expect(main(['A X'])).toBe('C');
  }),
  test('R D', () => {
    expect(main(['A Y'])).toBe('A');
  }),
  test('R W', () => {
    expect(main(['A Z'])).toBe('B');
  }),
  test('P L', () => {
    expect(main(['B X'])).toBe('A');
  }),
  test('P D', () => {
    expect(main(['B Y'])).toBe('B');
  }),
  test('P W', () => {
    expect(main(['B Z'])).toBe('C');
  }),
  test('S L', () => {
    expect(main(['C X'])).toBe('B');
  }),
  test('S D', () => {
    expect(main(['C Y'])).toBe('C');
  }),
  test('S W', () => {
    expect(main(['C Z'])).toBe('A');
  });
}); */

describe('sum module', () => {
  test('run full list', async () => {
    expect(await main()).toBe(1+3);
  });
});

