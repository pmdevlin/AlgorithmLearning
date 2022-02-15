let arr = [64, 25, 12, 22, 11];

// const selectSort = (arr) => {
//     for(let i = 0; i < arr.length; i++){
//         for(let j = arr.length; j >= 0; j--){
//             let left = arr[i]
//             let right = arr[j]

//             if(left > right){
//                 swap(arr, arr[i], arr[j])
//             }
      
        
//         }
      
//     }
//     return arr
// }

let left = arr[0]
let right = arr[4]



const swap = (arr, left, right) => {
     let temp = left
     left = right
     right = temp
}

swap(arr, left, right)
console.log(arr)

// console.log(selectSort(arr))
