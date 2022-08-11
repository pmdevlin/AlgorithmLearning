// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

const arr1 = [1, 2, 3, 1]; // true
const arr2 = [1, 2, 3, 4]; // false
const arr3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]; // true

const containsDuplicate = (arr) => {
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    if (obj[current]) {
      return true;
    } else {
      obj[current] = current;
    }
  }
  return false;
};

console.log(containsDuplicate(arr3));
