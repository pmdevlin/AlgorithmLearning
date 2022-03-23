  



const arr = [2,7,6,3,8,1,5,4]

const num = 10






const twoSum = (arr, num) => {
    const obj = {}

    for(let i = 0; i < arr.length; i++){
         let current = arr[i]
         let number = num - current
         if(!obj[number]){
             obj[current] = i
             console.log(obj)
         }else{
            console.log(obj)
            return [number, current]
            
         }
    }

    return -1 
}

console.log(twoSum(arr, num))


