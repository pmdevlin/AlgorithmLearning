// js function that take an array and a direction
// a string that will be asc or desc

const array = [5, 2, 4, 1, 7, 8];
const array1 = ["a", "D", "L", "s", "C", "b"];

// parameters (arr, asc, desc)
//console.log(typeof array1[1]);

const sorter = {
  acsSort: function (arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    console.log(arr);
  },
  decsSort: function (arr) {
    let temp;
    let flag = true;
    while (flag) {
      flag = false;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i + 1]) {
          temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          flag = true;
        }
      }
    }
    console.log(arr);
  },
  numberArrayTest: function (arr) {
    let num = 0;
    let str = 0;
    let other = 0;
    while (num <= arr.length || str <= arr.length || other <= arr.length) {
      if (typeof arr[num] === "number") {
        num++;
        console.log(num);
      } else if (typeof arr[num] === "string") {
        str++;
      } else {
        other++;
      }
    }
    console.log(num);
    console.log(str);
    console.log(other);

    if (num === arr.length) {
      console.log("pure number array");
      return true;
    } else if (str === arr.length) {
      console.log("pure string array");
    } else if (other === arr.length) {
      console.log("pure array of different type");
      return false;
    } else {
      console.log("not a pure number function");
      return false;
    }
  },
};

sorter.numberArrayTest(array);
sorter.numberArrayTest(array1);

// sorter.acsSort(array);
// sorter.decsSort(array);
