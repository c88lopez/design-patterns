var sum = require('./sum').sum;
test.each([
    [3, 4, -1],
    [1, 2, -1],
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, -1],
    [0, 0, 0],
])('adds 1 + 2 to equal 3', function () {
    expect(sum(1, 2)).toEqual(3);
});
