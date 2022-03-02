function mostFrequent(str) {
    const obj = {}

    let mostFrequentCount = 0
    let mostFrequentCharacter = null

    for(let i = 0; i < str.length; i++) {
        let current = str[i]
        if(!obj[current]) {
            obj[current] = 1
        } else {
            obj[current]++
        }
    }

    for(let key in obj) {
        if(obj[key] > mostFrequentCount) {
            mostFrequentCount = obj[key]
            mostFrequentCharacter = key
        }
    }
    console.log(obj);
    return mostFrequentCharacter

}   

const str = 'aaabbbdddcccc'
console.log(mostFrequent(str))