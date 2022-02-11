// find the 2 largest numbers that add up to the 
// the number given 

const arr = [1,2,3,4,52,4,3,2,10,6,7]
const num = 62

const find = (arr, num) => {
    const obj = {}
    for(let i = 0; i < arr.length; i++){
        const current = arr[i]
        const number = num - current
        if(!obj[number]){
            obj[current] = i 
        }else{
            return `${current} + ${number} = ${num}`
        }
    }
   return false
}

console.log(find(arr,num))


// need practice 

// find the 2 largest numbers that add up to the 
// the number given 

// const arr = [1,2,3,4,5,4,3,2,1,6,7]
// const num = 9

// const sum = (arr, num) => {
//     const obj = {}
//     for(let i = 0; i < arr.length; i++){
//         const current = arr[i]
//         const number = num - current
//         if(!obj[current]){
//             obj[current] = i 
//         }
//         else{
//             return [number, ]
//         }

//     }

// }


