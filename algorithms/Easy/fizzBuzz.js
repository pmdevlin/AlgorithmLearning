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
    for(let i = 1; i<=60; i++){
        if(i % 3 === 0 && i % 5 === 0){
            totals[i] = 'fizzbuzz'
        }else if(i % 3 === 0){
            totals[i] = 'fizz'         
        }else if(i % 5 === 0){
            totals[i] = 'buzz'
        }else{
            totals[i] = i
        }
    }

    for(let key in totals){
        if(totals[key] === 'fizzbuzz'){
            count++ 
        }
    }


    console.log(totals)
    console.log(`number of fizzbuzz ${count}`)
}

fizzbuzz()


 