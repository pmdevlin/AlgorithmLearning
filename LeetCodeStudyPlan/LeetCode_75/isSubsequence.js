// Given two strings s and t, return true if s is a subsequence of t,
// or false otherwise. A subsequence of a string is a new string that
// is formed from the original string by deleting some (can be none) of
// the characters without disturbing the relative positions of the
// remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Example 1:
// let s = "abc",
//   t = "ahbgdc";
// Output: true

// Example 2:
// let s = "axc",
//   t = "ahbgdc";
// Output: false

//failure:
let s = "acb",
  t = "ahbgdc";

// thought process subtract letters form t and add them to an arr
// if the two arrays are equal then return true otherwise false

const isSubsequence = (s, t) => {
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], null);

    // for (let j = 0; j < t.length; j++) {
    //   if (s[i] === t[j]) {
    //     map.set(s[i], t[j]);
    //   }
    // }
  }
  //   if (map.size === s.length) {
  //     console.log(map);
  //     return true;
  //   } else {
  //     return false;
  //   }
  console.log(map);
};

console.log(isSubsequence(s, t));
