// sort an array for smallest to larges


let arr = [1,9,2,8,3,7,4,6,5]
let arr2 = [1,3]
let left = 0
let right = 1



const swap = (arr, left, right) => {
    let temp = arr[left]
            arr[left] = arr[right]
            arr[right] = temp

   
}

console.log(swap(arr2));



// const quickSort = (arr) => {
   
//     const mid = arr[Math.floor((right + left) / 2)]

//     while(left <= right){
//         while(arr[left] <  mid){
//             left++
//         }

//         while(arr[right] > mid){
//             right--
//         }

//         if(left <= right ){
//             let temp = arr[left]
//             arr[left] = arr[right]
//             arr[right] = temp

//         }
//     }
//     return left
// }

//console.log(quickSort(arr));