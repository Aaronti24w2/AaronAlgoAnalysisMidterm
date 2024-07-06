const str1 = "ABC"
const str2 = "AB"

function generatePermutations(str){
    //default case to make recursions
    if (str.length === 0) {
        return ['']
    }
    let permus = []
    // loop through string
    for (let i = 0; i < str.length; i++) {
        //remove character at index and get remaining string
        let char = str[i]
        let remainingStr = str.slice(0, i) + str.slice(i + 1)
        //generate permutation of remaining string
        let remaningPermu = generatePermutations(remainingStr)
        //join removed character with permutation of the remianing string
        for (let perm of remaningPermu) {
            permus.push(char + perm)
        }
    
    }
    return permus
    
}

console.log (generatePermutations(str1))
console.log (generatePermutations(str2))