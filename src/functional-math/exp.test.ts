const { exp } = require('./exp');

test.each([
    [2, 2, 4],
    [2, 0, 1],
    [2, 1, 2],
    [3, 4, 81],
])('exponent %i ^ %i to equal %i', (a, b, expected) => {
    expect(exp(a, b)).toEqual(expected);
});
