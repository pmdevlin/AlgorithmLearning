const str = 'abccabb'
//return 3 

const longestSubstring = (str) => {
if(str.length <= 1){
    return str.length
}

let longest = 0 
for(let left = 0; left < str.length; left++){
    let seenChar = {}, currentLength = 0    
    console.log(seenChar)
    for(let right = left; right < str.length; right++){
        const currentChar = str[right]
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
    
longestSubstring(str)



// sliding window technique 
// involves to pointers that move together and keep track of what they on








