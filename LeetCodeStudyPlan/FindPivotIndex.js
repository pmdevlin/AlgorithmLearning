// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.

// leetCode number 724

// Example
// Input: nums = [1,7,3,6,5,6]
// Output: 3
// Explanation:
// The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11

const arr = [1, 7, 3, 6, 5, 6]; // returns 3
const arr2 = [1, 2, 3]; // returns -1
const arr3 = [2, 1, -1]; // returns 0
const arr4 = [1, 2, 3, 4, 5, 10, 5, 4, 3, 2, 1]; // return 5

const pivot = (arr) => {
  let total = 0;
  for (let j = 0; j < arr.length; j++) total += arr[j];

  let leftSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (leftSum === total - arr[i] - leftSum) return i;
    leftSum += arr[i];
  }
  return -1;
};

console.log(pivot(arr4));
