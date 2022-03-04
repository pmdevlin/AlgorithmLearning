
// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.



const num = [1,3,5,6]
const target = 4


const findAndPlace = (num, target) =>{
    
    const arr = []


    for(let i = 0; i < num.length; i++){
        const current = num[i]
        if(current === target) return i
        
        if(target > current){
            const split = num.splice(i)
            arr.push(...split)
        }
    }

    return [arr, num]
}


console.log(findAndPlace(num, target))

//console.log(num.splice(1))