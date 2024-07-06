let array1 = [1, 5, 2, 7]
let target1 = 8
let array2 = [20, 1, 5, 2, 11]
let target2 = 3

function findIndices (array, target){
    //create map to store numbers and indices
    const map = new Map()
    //loop through given array
    for (let i = 0; i < array.length; i++) {
        const num = array[i]
        //complement + num = target
        const complement = target - num
    
    
        // check if map has the complement. if yes, return the indice of the complement and num
        if (map.has(complement)) {
            return [map.get(complement), i]
        }
        // if no, add num and it's index to map
        else map.set(num, i)
    }
}

console.log (findIndices(array1, target1))
console.log (findIndices(array2, target2))