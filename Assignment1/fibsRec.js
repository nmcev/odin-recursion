// Fibonacci using recursive 
function fibsRec(number) {
    if (number <= 0) {
        return [];
    } if (number == 1) {
        return [0];
    } if (number == 2) {
        return [0, 1];
    }
    const fibsArray = fibsRec(number - 1);
    fibsArray.push(fibsArray[fibsArray.length - 1] + fibsArray[fibsArray.length - 2]);
    return fibsArray;
};