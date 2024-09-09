function getFirstElement(arr){
    return arr[0];
}

function factorial(num){
    let factorial = 1
    for (let i = 2; i <= num; i++){
        factorial *= i;
    }
    return factorial
}

const numbers = [1, 2,3]
const words = ["apple", "banana", "cherry"]

console.log(`first number: ${getFirstElement(numbers)}`)
console.log(`first word: ${getFirstElement(words)}`)

console.log(factorial(5))