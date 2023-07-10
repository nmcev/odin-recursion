function mergeSort(array) {
    if (array.length == 1) {
        return array; // base case: single element is already sorted
    }
    // this mid to divide the array to 2 parts 
    const mid = Math.floor(array.length / 2);

    const leftPart = array.slice(0, mid); // this left part containing the left indexes 
    const rightPart = array.slice(mid); // and this right part contains all elements after middle index

    // Recursively sort the left and right parts
    return merge(mergeSort(leftPart), mergeSort(rightPart))
}

function merge(leftPart, rightPart) {
    const resultArray = [];

    // Merge the left and right parts into a single sorted array
    while (leftPart.length && rightPart.length) { // this condition is to check is there an elements in the left & right parts
        if (leftPart[0] <= rightPart[0]) {
            resultArray.push(leftPart.shift());// pushing the element into resultArray and remove it form it original array
        } else {
            resultArray.push(rightPart.shift());
        }
    }

    resultArray.push(...leftPart, ...rightPart);
    return [...resultArray];
}
