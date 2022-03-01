const arr = [8,9,5,4,3,2,9]
const array = [10,5,3,9,1,7,8,2,4,6]


const bubbleSort = (arr) => {

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[j] > arr[j + 1]){
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

console.log(bubbleSort(array))
