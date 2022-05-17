//LeetCode Problem # 
//TEST CASES 
let s = 'hello world'
let a = "   fly me   to   the moon  "
let b = "luffy is still joyboy"

// My solution 
var lengthOfLastWord = function(s) {
    let convertToArray = s.split(' ')
    const removeSpaces = convertToArray.filter(item => item)
    let result = (removeSpaces[removeSpaces.length-1]).length
    return result
};

console.log(lengthOfLastWord(a))


// simplest solution 
var lengthOfLastWord = function(s) {
    return s.trim().split(" ").pop().length;
};

// trim() = removes white spaces from the front and back of any sting 
// .split(" ") = turns the string into an array of strings divided at the spaces
// .pop() = removes the last element from an array 
// .length = finds the length of an element  

