// Instructions
// Given a Sting, find the length of the longest substring without repeating characters.


//Test Cases
const str = 'abccabb' // returns 3 

const str1 = 'ccccccc' // returns 1 

const str2 = '' // returns 0 

const str3 = 'abcbda' // return 4 



// Brute Force Method
// Time Complexity --- O(n^2) 
// Space Complexity --- o(n) 

const longestSubstring = (s) => {
if(s.length <= 1){
    return s.length
}

let longest = 0 
for(let left = 0; left < s.length; left++){
    let seenChar = {}, currentLength = 0    
    for(let right = left; right < s.length; right++){
        const currentChar = s[right]
        if(!seenChar[currentChar]){
            currentLength++
            seenChar[currentChar] = true
            longest = Math.max(longest, currentLength)
        }else{
            break
        }
    }    

}
return(longest)
}
    
console.log(longestSubstring(str))