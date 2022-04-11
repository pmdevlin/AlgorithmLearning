
// const obj = {
//     'I' : 1,
//     'V' : 5,
//     'X' : 10,
//     'L' : 50,
//     'C' : 100,
//     'D' : 500,
//     'M' : 1000
// }


const s = 'III'
//const s = 'LVIII'
//const s = 'MCMXCIV'

// const romanToInt = function(s) {
//     const obj = {
//         'I' : 1,
//         'V' : 5,
//         'X' : 10,
//         'L' : 50,
//         'C' : 100,
//         'D' : 500,
//         'M' : 1000
//     }
//     const value = []
//     const arr = s.split('')
//     for(let i = 0; i < arr.length; i++){
//         const current = arr[i]
//         for( let key in obj){
//             if(current === key){
//                 value.push(obj[key]) 

//             }
//         }
//     }
//     // console.log(value )
//     const initialValue = 0;
//     const getValue = (prev, curr) => {
//         if(curr > prev){
//           return 
//         }else{
//            return curr + prev
//         }
//     }
//     const sum = value.reduce((prev, curr) => getValue(prev, curr), initialValue)
//     return sum
// };

// console.log(romanToInt(s))


const romanToInt = (s) => {

    
const obj = {
    'I' : 1,
    'V' : 5,
    'X' : 10,
    'L' : 50,
    'C' : 100,
    'D' : 500,
    'M' : 1000
}

let value = 0 

for(let i = 0; i < s.length; i++){
    const current = obj[s[i]]
    const next = obj[s[i + 1]]
    if(current < next ){
        value -= current
    }else{
        value += current
    }
   
}
return value
}

console.log(romanToInt(s))

// var romanToInt = function(s) {
//     const map = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
//     let num = 0;
    
//     for(let i = 0; i < s.length; i++) {
//         const curr = map[s[i]], next = map[s[i+1]];
//         if(curr < next) num -= curr;
//         else num += curr;
//     }
//     return num;    
// };

// console.log(romanToInt(s))