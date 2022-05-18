//given a word find the character that repeats the most within that string

//data
const str = '1112223334445555555'
// should return 5

//function
const mostFrequentSubString = (str) => {
    //step 1. use and object to store values
    const obj = {}

    //step 2. set up a count and result variable 
    let count = 0
    let result = null

    //step 3. iterate over the string place all the characters into the obj
    //        as keys and the number of characters as the value 
    for(let i = 0; i < str.length; i++){
        let current = str[i]
        if(!obj[current]){
            obj[current] = 1
        }else{
            obj[current]++ 
        }
    }
//review at this point all the different characters are object keys and
// the number of them are there values 

// step 4. iterate over the object comparing values and return the greatest one
    for(let key in obj){
        if(obj[key] > count){
            count = obj[key]
            result = key
        }
    }
//step 5 return the result that is storing the character with the greatest value
    return result
}

console.log(mostFrequentSubString(str))