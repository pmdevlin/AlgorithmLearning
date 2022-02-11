// Instructions
// Print out the numbers from 1 - 20.
// The rules:


// For numbers divisible by 3, print out “Fizz”.

// For numbers divisible by 5, print out “Buzz”.

// For numbers divisible by both 3 and 5, print out “FizzBuzz” in the console.

// Otherwise, just print out the number.


const fizzbuzz = () => {
    const arr = []

    for(let i = 1; i<=20; i++){
        if(i % 3 === 0 && i % 5 === 0){
            arr.push('fizzBuzz');
        }else if(i % 3 === 0){
            arr.push('fizz');
        }else if(i % 5 === 0){
            arr.push('buzz')
        }else{
            arr.push(i);
        }
    }
    console.log(arr)
}

fizzbuzz()