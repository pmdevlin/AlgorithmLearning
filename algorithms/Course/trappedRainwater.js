const heights = [0,1,0,2,1,0,3,1,0,1,2] // 8 
const bigWater = [10,0,0,0,0,0,0,0,0,10] // 80
const test = [] // 0 
const test2 = [3] // 0 
const test3 = [3,4,3] // 0 


// brute force solution 
// time complexity O(n^2)
// space complexity O(1)
const getTrappedRainwater = function (heights){
    let totalWater = 0
   

    for(let p = 0; p < heights.length; p++){
       let leftP = p 
       let rightP = p 
       let maxLeft = 0
       let maxRight = 0 
       while(leftP >= 0){
           maxLeft = Math.max(maxLeft, heights[leftP])
           leftP--
       }
       while(rightP < heights.length){
        maxRight = Math.max(maxRight, heights[rightP])
        rightP++
       }
       const currentWater = Math.min(maxLeft, maxRight)-heights[p]
       if(currentWater >= 0 ){
           totalWater += currentWater
       }
    }
    return totalWater
}

console.log(getTrappedRainwater(bigWater))



// logic steps
// 1. identify pointer with lesser value 
// 2. is this pointer value greater than or equal to the max on that side 
//  === yes: update the max on that side 
//  === no : get water for pointer value and add it total 
// 3. move pointer inward 
// 4. repeat for other pointer  

// time complexity  = O(N) 
// space complexity = O(1) 

const getTrappedRainwater2 = function (heights){
    let left = 0
    let right = heights.length-1
    let total = 0
    let maxLeft = 0 
    let maxRight = 0 
    
    while(left < right){
        if(heights[left] <= heights[right]){
            if(heights[left] >= maxLeft){
                maxLeft = heights[left]
            }else{
                total += maxLeft - heights[left]
            }
            left++
        }else{
            if(heights[right] >= maxRight){
                maxRight = heights[right]
            }else{
                total += maxRight - heights[right]
            }
            right--
        }
    }
    return total
 }
 
 console.log(getTrappedRainwater2(bigWater))