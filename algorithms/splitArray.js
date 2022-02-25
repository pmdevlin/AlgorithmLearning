// write an algo, that given an array and a number

// splits the array into subarray of length number

const arr = [1,2,3,4,5,6,7,8]

function splitter(arr, num) {
   let holder = []
    
    for(let i = 0; i < arr.length; i+=num){
        holder.push(arr.slice(i, i + num))
    }
    return holder
}

console.log(splitter(arr,2))
//[[1,2], [3,4],[5,6], [7,8]]