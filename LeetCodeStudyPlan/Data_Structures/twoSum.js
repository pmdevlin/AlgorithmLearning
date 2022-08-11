// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

const arr1 = [2, 7, 11, 15];
const target = 9;

const twoSum = (num, target) => {
  const obj = {};
  for (let i = 0; i < num.length; i++) {
    const current = obj[num[i]];
    if (current >= 0) {
      return [current, i];
    } else {
      const numToFind = target - num[i];
      obj[numToFind] = i;
    }
  }
  return null;
};
console.log(twoSum(arr1, target));

//Two Sum
// brute force / two pointer technique
//const array = [1,3,7,9,2]
//const array = []
//const target = 11

const twoSum2 = (arr, t) => {
  for (let i = 0; i < arr.length; i++) {
    let numToFind = t - arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (numToFind === arr[j]) {
        return [i, j];
      }
    }
  }
  return null;
};

console.log(twoSum2(arr1, target));
