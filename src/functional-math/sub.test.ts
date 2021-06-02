const { sub } = require('./sub');

test.each([
  [3, 4, -1],
  [1, 2, -1],
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, -1],
  [0, 0, 0],
])('subtract %i - %i to equal %i', (a, b, expected) => {
  expect(sub(a, b)).toEqual(expected);
});
