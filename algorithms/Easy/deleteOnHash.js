// Question: 
// Given two Strings 'S' and 'T', return if they equal when both are types out.
// Any '#' that appears in the string counts as a backspace. 
// Example: 'cb#d === 'cd'

const S = "ab#z"  // az
const T = "az#z" // az 
//return true 

//const S = 'abc#d' // abd
//const T = 'acc#c' // acc 
// returns false 

//const S = 'x#y#z#' // ''
//const T = 'a#'     // ''
// returns true 

//const S = 'a###b' // b 
//const T = 'b'     // b
//returns true 

// const S = 'Ab#z' // 'Az' 
// const T = 'ab#z' // 'az'
// returns false 


// My solution 
// time complexity === O(N)
// space complexity === O(1)
const hashDelete = (a, b) => {
    const arr1 = []
    const arr2 = []

    for(let i = 0; i < a.length; i++){
        if(a[i] === '#'){
            arr1.pop()
        }else{
            arr1.push(a[i])
        }
    }
    for(let j = 0; j < b.length; j++){
        if(b[j] === '#'){
            arr2.pop()
        }else{
            arr2.push(b[j])
        }
    }

    if(arr1.join('') === arr2.join('')){
        return true
    }else{
        return false
    }
  
}

//console.log(hashDelete(S, T))


// Brute Force solution 

const buildString = (string) => {
    const arr = []
    for(let i = 0; i < string.length; i++){
        if(string[i] === '#'){
            arr.pop()
        }else{
            arr.push(string[i])
        }
    }
    return arr
}

const compare = (s, t) => {
    const finalS = buildString(s)
    const finalT = buildString(t)

    if(finalS.length !== finalT.length){
        return false
    }else{
        for(let j = 0; j < finalS.length; j++){
            if(finalS[j] !== finalT[j]){
                return false
            }
        }
    }
    return true
}

console.log(compare(S, T))


// Optimized Solution 
// two pointer technique utilizing two separate variables on single search

// Time Complexity --- 
// Space Complexity ---  

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


function equalityTester(S, T) {
    return hashChecker(S) === hashChecker(T);
}

function hashChecker(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '#' || str[i + 1] === '#') {
            continue;
        } else {
            result.push(str[i]);
        }
    }

    return result.join('');
}



// Kevin's Solution
function equalityTester(S, T) {
    return hashChecker(S) === hashChecker(T);
}

function hashChecker(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '#' || str[i + 1] === '#') {
            continue;
        } else {
            result.push(str[i]);
        }
    }

    return result.join('');
}

// Nicks solution 
function solution(S,T){
    // String parsing helper function
    const parse = (str) => {
        const strArr = str.split('')
        for(let i=0;i<strArr.length;i++){
            const char = strArr[i]
            if(char === "#") {
                strArr.splice(i-1,2)
                i = i-2 >= 0 ? i-2: 0; 
            }
        }
        return strArr.join('')
    }
    // Return the comparison
    return parse(S) === parse(T)
}