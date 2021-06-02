const { sum } = require('./sum');

test.each([
    [3, 4, 7],
    [1, 2, 3],
    [2, 1, 3],
    [1, 1, 2],
    [0, 1, 1],
    [0, 0, 0],
])('adds %i + %i to equal %i', (a, b, expected) => {
    expect(sum(a, b)).toEqual(expected);
});
