
const array = [7,1,2,3,9] 

const findArea = (arr) => {

    let MaxArea = 0

    for(let a = 0; a < arr.length; a++){
        for(let b = a + 1; b < arr.length; b++){
            let min 
            if(arr[a] < arr[b]){
                min = arr[a] 
            }else{
                min = arr[b]
            }

            let value = min * (b - a)
            if(value > MaxArea){
                MaxArea = value 
            }

        }
    }
    return MaxArea

}

//console.log(findArea(array))



const heights = [7,1,2,3,9]

const findArea2 = (heights) => {
    let maxArea = 0 

    for(let a = 0; a < heights.length; a++){
        for(let b = a + 1; b < heights.length; b++){
            const height = Math.min(heights[a], heights[b])
            const width = b - a 
            const area = height * width
            maxArea = Math.max(maxArea, area)
        }
    }
    return maxArea
}

//console.log(findArea2(array))



//shifting pointers technique

const arr2 = [4,8,1,2,3,9]
const test = [2,3,4,5,18,17,6]
                               
const findArea3 = (heights) => {

let a = 0, b = heights.length-1, maxArea = 0; 

    while(a < b){
        //console.log({a,b})
        const height = Math.min(heights[a], heights[b])  
        const width = b - a 
        const area = height * width 
        //console.log({height, width, area})
        maxArea = Math.max(maxArea, area) 
        //console.log({maxArea})
        
        if(heights[a] <= heights[b]){
            a++
        }else{
            b-- // b needs to deincrement down the array opposite the a 
        }

    }
    return maxArea
}

console.log(findArea3(test))


