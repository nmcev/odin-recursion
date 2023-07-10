// Fibonacci using for loop 
function fibs(number) {
    const array = [0, 1];
    for (let i = 2; i < number; i++) {
        array.push(array[i - 1] + array[i - 2]);
    }
    return array;
}