// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23

const arr1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4]; // output 6
const arr2 = [1]; // output 1
const arr3 = [5, 4, -1, 7, 8]; // output 23

const maxSubArray = (arr) => {
  let maxSoFar = arr[0];
  let currentMax = arr[0];

  for (let i = 1; i < arr.length; i++) {
    currentMax = Math.max(arr[i], currentMax + arr[i]);
    maxSoFar = Math.max(maxSoFar, currentMax);
  }
  return maxSoFar;
};

console.log(maxSubArray(arr1));
