
// Merge Sort
// merge sort divides the array into two halves. calls itself for the two halves and then merges 
// the two sorted halves. the merge() function is used for merging two halves.

// time complexity: 0(n log n)

// methods used
// slice(): return a shallow copy of a portion of an array into an new array from slice(start) to where it ends slice(start, end)
// shift(): removes the first element from an array and returns the removed element, this methods changes the length of the array 
// push(): this method adds one or more elements to the end of an array and return the new length of the array 
// concat(): this method is used too merge two or more arrays this method does not change the existing array but instead returns the new array


// Data to sort
const unsortedArr = [31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48, 37, 7, 26, 34, 21, 22, 6, 29, 32, 49, 10, 12, 19, 24, 38, 5, 14, 44, 40, 3, 50, 46, 25, 18, 33, 47, 4, 45, 39, 23, 2];
const array = [2,5,7,6,5,9,8,1,2]


function merge (arr) {
// edge case if the array is only one character its sorted so return the array 
    if(arr.length <= 1){
        return arr 
    } 
// create variables for the middle, left, and right index's of any array
    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)

// return a recursive call to split the new halves and put them into the sort function as new index's
    return sort(merge(left), merge(right))
}

// create the sort function to rearrange and sort the halves
function sort(left, right){
// create an empty array to store sorted halves
    const result = []

// loop through the as long as both halves have a length
    while(left.length && right.length){
// if left is less than right push left to array otherwise push the right
// using shift ensures that you only push one element at a time.
        if(left[0] < right[0]){
            result.push(left.shift())
        }else{
            result.push(right.shift())
        }
    }
// now concat in the result he left and right index's
    return result.concat(left).concat(right)
}


console.log(merge(unsortedArr))

