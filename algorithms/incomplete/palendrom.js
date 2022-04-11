const str = 'tacocat'


//finding a palindrome
function pal (str){
    return str === str.split('').reverse().join('')
}

console.log(pal(str))

