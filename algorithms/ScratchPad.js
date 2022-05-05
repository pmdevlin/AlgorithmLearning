// Question: 
// Given two Strings 'S' and 'T', return if they equal when both are types out.
// Any '#' that appears in the string counts as a backspace. 
// Example: 'cb#d === 'cd'

const S = "ab#z"  // az
const T = "az#z" // az 
//return true 

// const S = 'abc#d' // abd
// const T = 'acc#c' // acc 
// returns false 

// const S = 'x#y#z#' // ''
// const T = 'a#'     // ''
// returns true 

// const S = 'a###b' // b 
// const T = 'b'     // b
//returns true 

// const S = 'Ab#z' // 'Az' 
// const T = 'ab#z' // 'az'
// returns false 


// My solution 
// time complexity === O(N)
// space complexity === O(1)
const backspaceCompare = (s, t) => {
    let p1 = s.length - 1 
    let p2 = t.length - 1
  
    while(p1 >= 0 || p2 >= 0){
        if(s[p1] === '#' || t[p2] ==='#'){
            if(s[p1] === '#'){
                let backCount = 2
                while(backCount > 0){
                    p1--
                    backCount--
                    if(s[p1] === '#'){
                        backCount = backCount + 2
                    }
                }
            }
            if(t[p2] === '#'){
                let backCount = 2
                while(backCount > 0 ){
                    p2--
                    backCount--
                    if(t[p2]=== '#'){
                        backCount = backCount + 2
                    }
                } 
            }
        }else{
            if(s[p1] !== t[p2]){
                return false
            }else{
                p1--
                p2--
            }
        }


    }
    return true 
}
   
console.log(backspaceCompare(S, T))