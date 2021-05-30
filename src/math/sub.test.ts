const { sub } = require('./sub');

test.each([
  [3, 4, 7],
  [1, 2, 3],
  [2, 1, 3],
  [1, 1, 2],
  [0, 1, 1],
  [0, 0, 0],
])('subtract %i - %i to equal %i', () => {
  expect(sub(3, 1)).toEqual(2);
});
