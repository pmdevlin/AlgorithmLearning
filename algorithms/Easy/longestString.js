// Given a string in the form of a sentence pr paragraph 
// return the longest word. 

// .length = returns the length of a given array 
// for loop = iterative practice giving you access to index and character
// .split = Method that divides a string into an ordered list of substrings and
//          puts these substrings into an array and returns the array. 


//data 
const str = 'this is the sentence that i am going to use for this task'

// function 
const longestWord = (str) => {
    //step 1. split the string word by word into an array
    const arr = str.split(' ')
    // step 2. declare a comparison integer to compare length
    let longest = 0
    // step 3. declare a variable to place the new longest word
    let longestWord = ''
    // step 4. iterate over the new arr
    for(let i = 0; i < arr.length; i++){
    //step 5. write logic to compare current string length to longest 
        if(arr[i].length > longest){
            longest = arr[i].length
            longestWord = arr[i]
        }     
    }
    // step 6. return the longest word outside the loop
    return longestWord
}

console.log(longestWord(str))