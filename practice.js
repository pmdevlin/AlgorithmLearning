const str = 'aaaabbbcccvvvlllsssppp'

// find the most repeating character

function find (str) { 
    const obj = {}

    let count = 0 
    let returnKey = null 

    for(let i = 0; i < str.length; i++){
        const current = str[i]
        if(!obj[current]){
            obj[current] = 1
        }else{
            obj[current]++
        }
    }

    for(let key in obj){
        if(obj[key] > count){
            count = obj[key]
            returnKey = key 
        }
    }

    return returnKey 
} 

console.log(find(str))