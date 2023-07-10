// fibonacci.test.js
const { fibs } = require('./fibs'); // Replace './fibonacci' with the correct path to your file

describe('fibs', () => {
    test('should return an empty array when number is less than or equal to 0', () => {
        expect(fibs(-1)).toEqual([]);
        expect(fibs(0)).toEqual([]);
    });

    test('should return [0] when number is 1', () => {
        expect(fibs(1)).toEqual([0]);
    });

    test('should return [0, 1] when number is 2', () => {
        expect(fibs(2)).toEqual([0, 1]);
    });

    test('should return the correct Fibonacci sequence for number > 2', () => {
        expect(fibs(3)).toEqual([0, 1, 1]);
        expect(fibs(5)).toEqual([0, 1, 1, 2, 3]);
        expect(fibs(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
    });
});
