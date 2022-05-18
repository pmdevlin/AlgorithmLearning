
// code out a binary search function 
// Input: arr = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in arr and its index is 4

const arr = [-1,0,3,5,9,12,4,23]
const target = 12


const search = function(arr, target) {
    let start = 0 
    let end = arr.length -1 
    
    while(start <= end ){
        let mid = Math.floor((start + end) / 2)
        
        if(arr[mid] === target){
            return {true: mid}
        }else if (arr[mid] < target){
            start = mid + 1 
        }else{
            end = mid - 1 
        }
    }
    return false
};

console.log(search(arr, target));