const { mult } = require('./mult');

test.each([
    [3, 4, 12],
    [1, 2, 2],
    [2, -1, -2],
    [-1, -1, 1],
    [0, 1, 0],
    [0, 0, 0],
])('multiplicate %i * %i to equal %i', (a, b, expected) => {
  expect(mult(a, b)).toEqual(expected);
});
