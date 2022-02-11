
// let str = 'aaabbbbccc'

// const repeating = (str) => {
//     const obj = {}
   
//     for(let i = 0; i < str.length; i++){ 
//         const current = str[i]
//         if(!obj[current]){
//             obj[current] = 1
//         }else{
//             obj[current]++
            
//         }
//     }
//     let count = 0
//     let returnKey 

//     for(let key in obj){
//         if(obj[key] > count){
//             count = obj[key]
//             returnKey = key
//         }
//     }
    
//     return returnKey
// }

// console.log(repeating(str))



//let str = 'asdfghjklaasdfghjkl'
// returns a 


// const find = (str) => {
//     const obj = {}

//     str.split('').forEach((key) => {

//         obj[key] ? obj[key]++ : obj[key] = 1
        
//     });

//     let count = 0;
//     let returnKey

//     for(let key in obj){
//         if(obj[key] > count){
//             count = obj[key]
//             returnKey = key
//         }
//     }
//     return returnKey
// }

// console.log(find(str))