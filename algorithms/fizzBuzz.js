// Instructions
// Print out the numbers from 1 - 20.
// The rules:


// For numbers divisible by 3, print out “Fizz”.

// For numbers divisible by 5, print out “Buzz”.

// For numbers divisible by both 3 and 5, print out “FizzBuzz” in the console.

// Otherwise, just print out the number.


const fizzbuzz = () => {
    // const arr = []
    const totals ={}
    let count = 0
    let fizz = 0
    let buzz = 0
    let number = 0
    for(let i = 1; i<=50000; i++){
        if(i % 3 === 0 && i % 5 === 0){
            // arr.push('fizzBuzz');
            count++
            totals.fizzbuzz = count  
        }else if(i % 3 === 0){
            // arr.push('fizz');
            fizz++
            totals.fizz = fizz
        }else if(i % 5 === 0){
            // arr.push('buzz')
            buzz++
            totals.buzz = buzz
        }else{
            // arr.push(i);
            number++
            totals.number = number
        }
    }
    console.log(totals)
    //console.log(arr)
    //console.log(count)
}

fizzbuzz()


 