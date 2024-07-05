let array1 = [5, 4 ,1, 2];
let array2 = [9, 5, 3, 2, 6, 1, 7, 8, 10]

function findMissingNumber(array, n) {
    const expectedSum = n*(n + 1)/2

    const trueSum = array.reduce((sum, num) => sum + num, 0)

    return expectedSum - trueSum
}

console.log(findMissingNumber(array1, 5))
console.log(findMissingNumber(array2, 10))