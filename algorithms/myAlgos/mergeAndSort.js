//LeetCode Problem # 21 
//TEST CASES 

//let list1 = [1,2,4], list2 = [1,3,4]
//Output: [1,1,2,3,4,4]


// let list1 = [], list2 = []
// //Output: []

let list1 = [], list2 = [0]
// //Output: [0]

var mergeTwoLists = function(list1, list2) {
    let result = [...list1, ...list2]

    for(let i = 0; i < result.length; i++){
        for( let j = 0; j < result.length; j++){
            if(result[j] > result[j + 1]){
                let temp = result[j]
                result[j] = result[j + 1]
                result[j + 1] = temp 
            }
        }
    }
    return result
    
};

console.log(mergeTwoLists(list1, list2))