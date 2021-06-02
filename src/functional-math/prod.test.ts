const { prod } = require('./prod');

test.each([
    [3, 4, 12],
    [1, 2, 2],
    [2, -1, -2],
    [-1, -1, 1],
    [-1, 1, -1],
    [0, 1, 0],
    [1, 0, 0],
])('product %i * %i to equal %i', (a, b, expected) => {
  expect(prod(a, b)).toEqual(expected);
});
