// Two Sum 
// Given an array or numbers and a number find the first two numbers that add up to the given number 

//data
const arr = [ 1,2,3,4,5,5,6,2,3,4,9]
let num = 11


// two sum function takes in an array and number
const twoSum = (arr, num) => {
// use the object to keep track of values already tested
    const obj = {}
// loop over the array
    for(let i = 0; i < arr.length; i++){
//find the number you are looking for by subtracting the original number value from the 
// current number at each index. if the number is not in the object continue. 
// if it is return the number and the current 

        let current = arr[i]
        let number = num - current
        if(!obj[number]){
            obj[current] = i 
        }else{
            return [number, current]
        }
    }
}

console.log(twoSum(arr, num))



//Two Sum 
// brute force / two pointer technique 
const array = [1,3,7,9,2]
const target = 11

const twoSum2 = (arr, t ) => {
    for(let i = 0; i < arr.length; i++){
            let numToFind = t - arr[i]
        for(let j = i + 1 ; j < arr.length; j++){
             
            if(numToFind === arr[j]){
                return [i, j]
            }
        }
    }
    return null
}

console.log(twoSum2(array, target))
