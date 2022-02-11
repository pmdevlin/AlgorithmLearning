



const mergeSortSplit = (arr) => {
    if(arr.length <= 1){
        return arr
    }
    const middle = Math.floor(arr.length /2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle)

    return sort(mergeSortSplit(left), mergeSortSplit(right))
}

const sort = (left, right) => {
    const solution = []
    while(left.length && right.length){
        if(left[0] < right[0]){
            solution.push(left.shift())
        }else{
            solution.push(right.shift())
        }
    }
    return solution.concat(left.slice()).concat(right.slice())
} 

const unsortedArr = [31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48, 37, 7, 26, 34, 21, 22, 6, 29, 32, 49, 10, 12, 19, 24, 38, 5, 14, 44, 40, 3, 50, 46, 25, 18, 33, 47, 4, 45, 39, 23, 2];

    const array = [2,5,7,6,5,9,8,1,2]
    const array2 = [1000,1006,1004,1007,1002,1008,1003,1005]
    console.log(mergeSortSplit(unsortedArr))  
    