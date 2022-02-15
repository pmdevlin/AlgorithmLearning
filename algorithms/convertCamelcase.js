

// convert any camel case string into a divided string with caps for 
// each first letter




let str = 'happyGilmore'

function sortName (str){
    let div = str.split('')
    for(let i = 0; i < div.length; i++){
        let current = div[i]
        if(current == current.toUpperCase()){
            let sHalf = div.splice(i, div.length).join('')
            let fHalf = div.splice(0, i).join('')
            const first = fHalf.charAt(0).toUpperCase() + fHalf.slice(1) 
            return first.concat(' '+sHalf)
        }
    }
    return 'sortName not working'
}

console.log(sortName(str))