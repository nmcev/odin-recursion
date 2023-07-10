// fibonacci.test.js
const { fibsRec } = require('./fibsRec');

test('fibsRec with number <= 0 should return an empty array', () => {
  expect(fibsRec(-1)).toEqual([]);
  expect(fibsRec(0)).toEqual([]);
});

test('fibsRec with number == 1 should return [0]', () => {
  expect(fibsRec(1)).toEqual([0]);
});

test('fibsRec with number == 2 should return [0, 1]', () => {
  expect(fibsRec(2)).toEqual([0, 1]);
});

test('fibsRec with number > 2 should return the correct Fibonacci sequence', () => {
  expect(fibsRec(3)).toEqual([0, 1, 1]);
  expect(fibsRec(5)).toEqual([0, 1, 1, 2, 3]);
  expect(fibsRec(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});
