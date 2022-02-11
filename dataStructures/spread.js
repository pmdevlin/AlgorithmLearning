// the array meats with and without the spread operator

const meats = ["ham", "salami","bacon"];
console.log(meats)
console.log(...meats)

//  combining to arrays with spread operator

const num1 = [1, 2, 3];
const num2 = [...num1, 4, 5, 6];

console.log(num2)

// using the spread operator with an add function 

const nums = [3, 5, 7];

function addNums (a, b, c){
    console.log(a+b+c)
}

addNums(...nums)