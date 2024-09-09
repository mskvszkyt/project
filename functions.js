function getFirstElement(arr){
    if  (arr.len != 0){
        return arr[0];
    }
    else{
        console.log("Error: empty array")
    }
}

const numbers = [1, 2,3]
const words = ["apple", "banana", "cherry"]

console.log(`first number: ${getFirstElement(numbers)}`)
console.log(`first word: ${getFirstElement(words)}`)