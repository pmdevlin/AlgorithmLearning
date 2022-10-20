// input: string
// return true if only unique values
// return false if double value
// assume not empty
// they all the same case

// true
const str = "abcde";

// false
const str2 = "abcded";

// brute force
// takes a string
// split()
// array
// loop (2 loops ?)
// compare and return

const uniqueString = (str) => {
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return false;
      }
    }
  }
  return true
};
