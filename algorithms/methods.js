
const arr = [1,7,2,8,3,9,4,5,6,10]

// building a sorting object 
const sorting = { 
    bubbleSort: function(arr){
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
    },

    mergeSort: function(arr){

        const merge = (arr) => {
        if(arr.length <= 1 )return arr


        const mid = Math.floor(arr.length / 2) 
        const left = arr.slice(0, mid)
        const right= arr.slice(mid)
    
        return sort(merge(left), merge(right))
        }

        const sort = (left, right) => {
            const array = []

            while(left.length && right.length){
                if(left[0] < right[0]){
                    array.push(left.shift())
                }else{
                    array.push(right.shift())
                }
            }
            return array.concat(left).concat(right)
        }
        
        return merge(arr)
    }, 
}


console.log(sorting.bubbleSort(arr))
console.log(sorting.mergeSort(arr))











// const searching = { 

// }

//export default solution;