const nums = [10, 15, 20, 5, 1];
const num2 = [3, 1, 2, 10, 1];

// output: [10, 25, 45, 50, 51]

const runningSum = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
  }
  return nums;
};
console.log(runningSum(num2));

// const runningSum2 = (nums) => {
//   let sum = 0;
//   for (let i in nums) {
//     sum += nums[i];
//     nums[i] = sum;
//   }
//   return nums;
// };
