

//permutation

// array element flipping 
// reverse array 
// reverse iterate through 

const input = [5,6,4,7,9,3,2,8,1]
//const arr = [1,2,3]

function permutation2 (arr){
    let newArr = []
    // if(arr.length === 0) return [];
    if (arr.length=== 1) return [arr]
    
    for(let i = 0; i<arr.length; i++){
        const current = arr[i]
        split = arr.slice(0, i).concat(arr.slice(i + 1))
        const leftovers = permutation2(split)
    
        for(let x = 0; x < leftovers.length; x++){
            const fixedArr = [current].concat(leftovers[x])
            newArr.push(fixedArr)
        }
    }   

    return newArr
} 
// console.log(permutation(arr));

// solution permutation
const arr = [5,6,4,7,9,3,2,8,1]


// [1,5,8,5,1,3,4,6,7]

// find the peak

// next largest number to the right of the peak

// flip peak = 1 and largest number to the right of the peak

// reverse from peak to the end of the arr



function permutation(arr) {
    // declare peak var
    let peak
    // find peak / reverse iterate through arr
    for(let i = arr.length; i >= 0; i--) {
        // if no peak, set to zero
        if(i === 0) {
            peak = 0
        }
        // if arr[i] > arr[i - 1] , remember to break out
        if(arr[i] > arr[i - 1]) {
            peak = i
            break
        }
    }

    // find largest on right of peak
    for(let j = arr.length - 1; j >= 0; j--) {
        // if arr[j] > arr[peak - 1], flip arr[j] and arr[peak - 1], remember to break
        if(arr[j] > arr[peak - 1]) {
            let temp = arr[j]
            arr[j] = arr[peak - 1]
            arr[peak - 1] = temp
            break
        }
    }

    // reverse from peak to end of arr
    // start = peak, end = arr.length - 1
    let start = peak 
    let end = arr.length - 1

    // while start < end

        // flip start and end, remember to decrement end and increment start
    while(start < end) {
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start++
        end--
    }

    // return arr
    return arr    
    
}

console.log(permutation(arr))





// write algo that takes in a string, without using built in #reverse, check to see if 
// String is a palendrome

//const str = 'racecar'
//const str1 = 'test'


// function pal(str) {
//     const arr = []

//     for(let i = str.length; i >= 0; i--){
//         arr.push(i)
//     }
//      if(str === arr.join('')) return true

//      return false
// }
//console.log(pal(str));
// racecar => true
// test => false
