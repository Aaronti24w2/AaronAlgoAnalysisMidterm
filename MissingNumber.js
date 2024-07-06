let array1 = [5, 4 ,1, 2]
let n1 = 5
let array2 = [9, 5, 3, 2, 6, 1, 7, 8, 10]
let n2 = 10

function findMissingNumber(array, n) {
    // find the expected sum given n.
    const expectedSum = n*(n + 1)/2
    //find actual sum of array
    const trueSum = array.reduce((sum, num) => sum + num, 0)
    //expected sum - actual sum == missing number
    return expectedSum - trueSum
}

console.log(findMissingNumber(array1, n1))
console.log(findMissingNumber(array2, n2))