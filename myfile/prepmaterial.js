const addToFront = (arr, element) => {
  //   for (let i = arr.length - 1; i >= 0; i--) {
  //     arr[i + 1] = arr[i];
  //   }
  arr[arr.length] = element;
  return arr;
};

// let output = addToFront([1, 2], 3);
// console.log(output);

const lengthOfAllWords = (w1, w2, w3) => {
  return w1.length + w2.length + w3.length;
};

// let result = lengthOfAllWords("man", "tree", "large");
// console.log(result);

const getElementsAfter = (array, n) => {
  const holder = [];
  for (let i = 0; i < array.length; i++) {
    if (i > n) {
      holder.push(array[i]);
    }
  }
  return holder;
};

// const arr = ["a", "b", "c", "d", "e"];
// const answer = getElementsAfter(arr, 2);
// console.log(answer);

const getElementsUpTo = (array, n) => {
  const holder = [];
  for (let i = 0; i < array.length - 1; i++) {
    holder.push(array[i]);
  }
  return holder;
};

// const arr2 = ["a", "b", "c", "d", "e"];
// const answer2 = getElementsUpTo(arr2, 3);
// console.log(answer2);

const countCharacter = (str, char) => {
  let count = 0;
  let l = str.length;
  let i = 0;
  while (i < l) {
    if (str[i] == char) {
      count++;
    }
    i++;
  }
  return count;
};
var output = countCharacter("I am a hacker", "a");
console.log(output);
