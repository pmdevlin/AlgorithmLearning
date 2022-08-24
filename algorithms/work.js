// js function that take an array and a direction
// a string that will be asc or desc

const array = [5, 2, 4, 1, 7, 8];
const array1 = ["a", "D", "L", "s", "C", "b"];

// parameters (arr, asc, desc)

const acsSort = (arr) => {
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
};

const decsSort = (arr) => {
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
  return arr;
};

const allSorts = (arr, boolValue) => {
  if (boolValue === true) {
    return acsSort(arr);
  }
  if (boolValue === false) {
    return decsSort(arr);
  }
};

const result = allSorts(array, false);
console.log(result);
