

let str = 'this is my string'


// this is a pure: meaning that it does not change the original string 
const pureReverse = (str) => {
    const arr = []
         
    for(let i = str.length-1; i>= 0; i--){
        arr.push(str[i])
    }
    let string = arr.join('')
      
    return string
}




const impureReverse = (str) => {
    if (str === ''){
        return '';
    }else{
        return impureReverse(str.substr(1)) + str.charAt(0)
    }
}


const reverse = (str) => {
    let arr = str.split('')
    let reverse = []
    for(let i = arr.length-1; i >= 0; i--){
        reverse.push(arr[i])
    }
    arr = reverse.join('')
    return arr
}

let reverse = function(s) {
    let n = s.length;
    let a = s.split('')
  
    for(let i = 0; i < n / 2; i++) {
      let temp = a[i];
      a[i] = a[n - i - 1];
      a[n - i - 1] = temp;
    }
  
    return a.join('');
  }

// console.log(pureReverse(str))
// console.log(impureReverse(str))
// console.log(str.split('').reverse().join(''))
// console.log(reverse(str))
console.log(reversal(str))


// reverse a string 
// reverse a sting in place  