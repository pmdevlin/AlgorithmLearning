// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order
//of characters. No two characters may map to the same character, but a character may map to itself.

// Example 1:
// let s = "egg",
//   t = "add";
// Output: true

// Example 2:
// let s = "foo",
//   t = "bar";
// Output: false

// Example 3:
let s = "paper",
  t = "title";
// Output: true

const isIsomorphic = (s, t) => {
  let map = new Map();
  let sSet = new Set(s);
  console.log(sSet);
  let tSet = new Set(t);
  console.log(tSet);
  if (sSet.size !== tSet.size) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    console.log(map);
    if (map.has(s[i]) && map.get(s[i]) != t[i]) {
      return false;
    } else {
      map.set(s[i], t[i]);
    }
  }

  return true;
};

console.log(isIsomorphic(s, t));

//Review solution

// var isIsomorphic = function(s, t) {
//     let mapS = {}, mapT = {};
//     for (let i = 0; i < s.length; i++) {
//         if (!mapS[s[i]] && !mapT[t[i]]) {
//             mapS[s[i]] = t[i];
//             mapT[t[i]] = s[i];
//         } else if (mapS[s[i]] !== t[i] || mapT[t[i]] !== s[i]) return false;
//     }
//     return true;
// };
