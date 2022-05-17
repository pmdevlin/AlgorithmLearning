// given an array and a number, split the array into subArrays of the length of the number

// used:
// .push() - method that adds on or more elements the end of and array and 
//           returns the new length of the array
// .slice() - method returns a shallow copy of a portion of an array into a new array
//           object selected from (start, end) 

//data: 
const arr = [2,3,5,9];
const num = 3
//function: 

const divide = (arr, num) => {
// step 1. use the array data structure to hold the smaller subArrays
    const arrayOfArrays = []

//step 2. iterate over the input array, increment by the amount of num 
    for(let i = 0; i < arr.length; i+=num){
//step 3. push into the arrayOfArrays slicing the num amount into each subarray 
        arrayOfArrays.push(arr.slice(i, i + num))
// note: for slice the start is the current index and the end is that index plus num
    }
// step 4. return the array containing the subArrays 
    return arrayOfArrays
    
}

console.log(divide(arr, num))