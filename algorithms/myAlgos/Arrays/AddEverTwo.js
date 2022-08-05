const arr = [7, 9, 10, 32, 3, 2, 4, 90];

const sumEver2 = (arr) => {
  const sumArr = [];
  for (let i = 0; i < arr.length; i++) {
    sumArr.push(arr[i] + arr[i + 1]);
    i++;
  }
  return sumArr;
};

console.log(sumEver2(arr));
