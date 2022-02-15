//find the maximum
// contiguous subarray


let arr = [ -2, -3, 4, -1, -2, 1, 5, -3 ]
let nums = [ -2, -3, 4, -1, -2, 1, 5, -3 ]

const MaxSubArrSum = (arr) => {
   let l = arr.length
   let max_so_far = arr[0]
   let curr_max = arr[0]

    for(let i = 1; i < l; i++){
        curr_max = Math.max(arr[i], curr_max + arr[i])
        max_so_far = Math.max(max_so_far, curr_max)
    }

    return max_so_far
}

//console.log(MaxSubArrSum(arr))
let arr2 = [5,4,-1,7,8]

var maxSubArray = function(nums) {
    if(nums.length === 1){
        return nums[0];
    }
    
    let maxSum = nums[0];
    let curr = 0;
    
    for(let i = 0; i < nums.length; i++){
        curr += nums[i];
        
        if(curr > maxSum){
            maxSum = curr; 
        }
        if(curr < 0){
            curr = 0;
        }
    }
    
    return maxSum
};

console.log(maxSubArray(arr2))