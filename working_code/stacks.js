// ES6 

class Stack{
    constructor(){
        this.stack = {}
        this.tail = 0 
    }

    push(value){
        this.stack[this.tail] = value
        this.tail++
    }

    pop(){
        let last = this.stack[this.tail -1]
        delete this.stack[this.tail -1]
        this.tail -- 
        return last
    }
    size(){
        return this.tail
    }

}

const s = new Stack()

s.push(0)
s.push(0)
s.push(0)
s.push(0)
s.push(0)
s.pop()
s.pop()
console.log(s.size())

console.log(s)