// find the 2 largest numbers that add up to the 
// the number given 

const arr = [2,7,11,15]
const arr2 = [1,2,3,4,52,4,3,2,10,6,7]
const num = 9
const target = 16

// const find = (arr, num) => {
//     const obj = {}
//     let current 
//     let number 

//     for(let i = 0; i < arr.length; i++){
//         current = arr[i]
//         number = num - current
//         if(!obj[number]){
//             obj[current] = i 
//         }else{
//             return `${current} + ${number} = ${num}`
//         }
//     }

//     return [current, number]
   
// }

//console.log(find(arr,num))


const finder = (arr, num) => {
    const obj = {}

    for(let i = 0; i< arr.length; i++){ 
        const current = arr[i]
        if(obj[current] >= 0){
            console.log(obj)
            return [obj[current], i]
        }
        obj[num - current] = i
    }
    
}

console.log(finder(arr2, target))

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

