class HashTable {
    // length of the memory
    constructor(size) {
        this.data = new Array(size)
    }

    _hash(key) {
        let hash = 0

        for(let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash
    }

    set(key, value) {
        const address = this._hash(key)

        if(!this.data[address]) {
            this.data[address] = []
        }

        this.data[address].push([key, value])
        return this.data
    }

    get(key) {
        const address = this._hash(key)
        const bucket = this.data[address]

        if(bucket) {
            for(let i = 0; i < bucket.length; i++) {
                if(bucket[i][0] === key) {
                    return bucket[i][1]
                }
            }
        }
        return undefined
    }

}

const hash = new HashTable(20)
hash.set('test', 1)
hash.set('some other key', 'some other value')
console.log(hash.get('some other key!'))