const MainObj = {
  testArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  randomArr: [34, 9, 14, 100, 45, 66, 71, 2, 98],
  emptyArr: [],
  sortArr: function (arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  },
};

console.log(MainObj.testArr);
