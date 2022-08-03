const arr = [1, 6, 4, 2, 4, 5, 7, 8, 3, 2, 9];

const sort = (arr) => {
  let temp;
  let test = true;

  while (test) {
    test = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
        test = true;
      }
    }
  }
  console.log(arr);
};

sort(arr);
