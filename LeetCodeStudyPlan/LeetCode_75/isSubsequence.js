// Given two strings s and t, return true if s is a subsequence of t,
// or false otherwise. A subsequence of a string is a new string that
// is formed from the original string by deleting some (can be none) of
// the characters without disturbing the relative positions of the
// remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Example 1:
let s = "abc",
  t = "ahbgdc";
// Output: true

// Example 2:
// let s = "axc",
//   t = "ahbgdc";
// Output: false

//failure:
// let s = "acb",
//   t = "ahbgdc";

// two pointer solution to check with one evolution of the strings

const isSubsequence = function (s, t) {
  let i = 0,
    j = 0;

  while (j < t.length && i < s.length) {
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }
  return i === s.length ? true : false;
};

//console.log(isSubsequence(s, t));
console.log(isSubsequence(s, t));
