const str = "tacocat";
const str2 = "the taco cat the";
const test = "this is the string I want divided";

//finding a palindrome
function pal(str) {
  return str === str.split("").reverse().join("");
}

//console.log(pal(str))

// A copy of the split method for this code
const split = (str) => {
  let resultArray = [];
  let tempString = "";
  let space = str.indexOf(" ");
  let i = 0;

  if (space !== -1) {
    while (i < str.length) {
      if (str[i] !== " ") {
        tempString += str[i];
        i++;
      } else if (tempString.trim()) {
        resultArray.push(tempString);
        tempString = "";
        i++;
      }
    }
  } else {
    while (i < str.length) {
      resultArray.push(str[i]);
      i++;
    }
  }
  if (tempString) {
    resultArray.push(tempString);
  }
  return resultArray;
};

// console.log(split(str));
// console.log(split(str2));
// console.log(split(test));

const isPalindrome = (str) => {
  let newStr = split(str);
  let reversedArr = [];
  for (let i = newStr.length; i >= 0; i--) {
    reversedArr.push(newStr[i]);
  }
  return newStr.join("") === reversedArr.join("");
};

console.log(isPalindrome(str2));
