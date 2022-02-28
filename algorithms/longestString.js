 // given a string, return the longest word

 const str = 'this is the longest word string'

 function longest(str) {
     // your code here
     // split in an arr to have an arr with each word
     // loop over the arr 
     // find the length of each sting 
   
   // empty arr 
   // keep track length 
   // indexes of the arr
   
   let longest = 0
   let longestWord = ''
   
   const arr = str.split(' ')
   
   for(let i = 0; i < arr.length; i++) {
     // logic
     if(arr[i].length > longest){
       longest = arr[i].length
       longestWord = arr[i]
     }
   }
   return longestWord
 }
 // 'longest'
 
 console.log(longest(str))