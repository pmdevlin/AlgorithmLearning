
// find the repeating substring

let str = 'aaabbbbccc'

function repeatingSubString(str){
 const obj = {}
 let count = 1 
    for(let i = 0; i < str.length; i++){
        if(!obj[str[i]]){
            obj[str[i]] = count 
        }
        if(obj[str[i]]){
            count++
        }
    
    }
    return obj
}
console.log(repeatingSubString(str))