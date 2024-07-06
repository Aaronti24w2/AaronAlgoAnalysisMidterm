let str1 = '()'
let str2 = '(){}[]'
let str3 = '([})'
let str4 = '[({})]'

function checkIfValidParanthesis(str) {
    // an empty string is valid in this
    if (str.length === 0) {
        return true
    }

    // stack to keep track of open brackets
    let openBracketStack = []
    // map stores matching brackets
    let matchingCloseBrackets = {'{':'}', '[':']', '(':')'}

    // iterate through characters in string
    for (let char of str) {
        // if opening bracket, add to stack
        if (char === '{' || char === '[' || char === '(') {
            openBracketStack.push(char)
        } else {
            //closing bracket, check if stack is empty, or top of stack doesn't match closing bracket
            if ( openBracketStack.length === 0 || matchingCloseBrackets[openBracketStack.pop()] !== char) {
                return false
            }
        }
    }
    return openBracketStack.length === 0;
}

console.log(checkIfValidParanthesis(str1))
console.log(checkIfValidParanthesis(str2))
console.log(checkIfValidParanthesis(str3))
console.log(checkIfValidParanthesis(str4))


