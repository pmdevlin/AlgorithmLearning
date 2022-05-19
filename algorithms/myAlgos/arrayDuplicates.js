const num = [2,14,18,22,23]

const sets = (arr) => {
    return new Set(arr).size < arr.length
    // const mySet = new Set(arr)
    // const size = mySet.size
    // const length = arr.length
   
    // if(size < length){
    //     return true 
    // }else{
    //     return false
    // } 
}

//console.log(sets(num))

const containsDuplicate2 = (arr) => {
    
    const obj = {}
    for(let i = 0; i < arr.length; i++){
       const current = arr[i]
       if(obj[current]){
           return true
       }
       obj[current] = 1 
    }
    return false
}

console.log(containsDuplicate2(num))


const containsDuplicate = (arr) => {
    
    const obj = {}
    for(let i = 0; i < arr.length; i++){
        const current = arr[i]
        if(!obj[current]){
            obj[current] = 1
        }else{
            obj[current]++
        }
    }


    let count = 0

    for(let key in obj){
        if(obj[key]){
            return true
        }

    }
    
    if(count > 1){
        return true
    }else{
        return false
    }
};

//console.log(containsDuplicate(num))

