


const solution = {
    twoSum: (arr, num) => {
        const obj = {}
            for(let i = 0; i < arr.length; i++){
                 let current = arr[i]
                 let number = num - current
                 if(!obj[number]){
                     obj[current] = i
                 }else{
                    console.log([number, current])
                 }
            }
        
    }



}

export default solution;