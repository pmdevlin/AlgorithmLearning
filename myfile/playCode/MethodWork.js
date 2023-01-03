const testObj = {
  testArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  randomArr: [34, 9, 14, 100, 45, 66, 71, 2, 98],
  emptyArr: [],
  GenerateArr: function (num) {
    let arr = [];
    for (let i = 1; i < num; i++) {
      arr.push(i);
    }
    return arr;
  },
  GenerateRandomArr: function (num) {
    let arr = [];

    for (let i = 1; i < num; i++) {
      arr.push(Math.floor(Math.random() * 100));
    }

    return arr;
  },
};

const json = [
  {
    name: "hank",
    rank: "SGT",
    pay: 3000,
    patches: [1234, 2342, 2462],
  },
  {
    name: "Jerry",
    rank: "SSG",
    pay: 5000,
    patches: [4321, 7842, 3342],
  },
  {
    name: "Tom",
    rank: "PV2",
    pay: 2000,
    patches: [3945, 1455, 8945],
  },
  {
    name: "Sara",
    rank: "CPL",
    pay: 2500,
    patches: [3214, 7772, 2000],
  },
];

const methodObj = {
  sortArr: function (arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  },
  countOddAndEven: function (arr) {
    let countEven = 0;
    let countOdd = 0;
    for (const elem of arr) {
      if (elem % 2 === 0) {
        countEven++;
      } else {
        countOdd++;
      }
    }
    return (
      "there are " +
      countEven +
      " Even Numbers and " +
      countOdd +
      " Odd Number In " +
      arr
    );
  },
  reverse: function (arr) {
    let reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversedArr.push(arr[i]);
    }
    return reversedArr;
  },
  displayEmployees: function (employeeArr) {
    employeeArr.map((item) => {
      return item;
    });
  },
};

// console.log(methodObj.sortArr(testObj.randomArr));
// console.log(methodObj.countOddAndEven(testObj.testArr));
// console.log(methodObj.reverse(methodObj.sortArr(testObj.randomArr)));
//console.log(testObj.GenerateRandomArr(100));

//console.log(methodObj.reverse(methodObj.sortArr(testObj.GenerateRandomArr(100))));

console.log(methodObj.displayEmployees(json));
