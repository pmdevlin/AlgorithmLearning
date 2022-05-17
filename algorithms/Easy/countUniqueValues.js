// -- PROBLEM --
// Write a function called countUniqueValues which accepts a sorted array and counts the unique values in the array. 
//There can be negative numbers in the array but it will still be sorted.

// -- APPROACH --
// 1. Define pointers
// 2. Iterate through the sorted array (only once!)
// 3. If the values at the two pointers are unique (ie. not the same)
// A. Then move the first pointer to the next value and
// B. Change its value to the value at the second pointer
// C. Proceed to the next iteration
// 4. In the end you only need to return i + 1 for the number of unique values.

// EX:
// initial input arr = [1, 1, 2, 2, 3, 4, 8]
// After all the iterations = [1, 2, 3, 4, 8, 1, 2]
// **after the iterations, i is at index 4 and the value at arr[i] = 8
// **The count of unique numbers here is 5 ([1, 2, 3, 4, 8])
// **so return i + 1 (the length of this subarray)
// Returned: 5

const arr = [1,1,2,3] // returns 3 

const compare = (arr) => {
    let i = 0
    for(let j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++
            arr[i] = arr[j]
        }
    }
    
    return i + 1 
}

console.log(compare(arr))
