 const arr = [8,9,5,4,3,2,9]
// //     j           i

function bubbleSort(arr){
    //outer loop 
    for(let i = arr.length-1; i >= 2 ; i--){
        //inner loop 
        for(let j = 0; j < i - 1; j++){
            if(arr[j] > arr[j + 1]){
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }

    }
  console.log(arr); 
}

bubbleSort(arr)