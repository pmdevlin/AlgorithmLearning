
// // ES6 

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

// console.log(s.size())
// console.log(s)




//functional Classes 

const Stack = function(){
    const obj = {tail:0}
    Object.assign(obj, Stack.methods)
    return obj
}

Stack.methods = {
    push: function(value){
        this[this.tail] = value
        this.tail++
    },
    pop: function(){
        const last = this[this.tail -1]
        delete this[this.tail -1]
        this.tail -- 
        return last        
    }
}

const plates = Stack()
plates.push(0)
plates.push(0)
plates.push(0)
plates.push(0)
plates.push(0)
plates.pop()

//console.log(plates)


// functional object Decorator

const stacks = function(obj){
    obj.tail = 0

    obj.push = function(value){
        obj[obj.tail] = value
        obj.tail++
    }
    obj.pop= function(){
        let first = obj[obj.tail -1]
        delete obj[obj.tail-1]
        obj.tail--
        return first
    }
    return obj
}

const plates = stacks({})

plates.push(0)
plates.push(1)
plates.push(2)
plates.push(3)
plates.push(4)
plates.pop()

//console.log(plates)


// prototypal Class 

const Stack = function(){
    const obj = Object.create(Stack.prototype)
    obj.tail = 0
    return obj
}

Stack.prototype.push = function(value){
    this[this.tail] = value 
    this.tail++
}

Stack.prototype.pop = function(){
    let top = this[this.tail -1]
    delete this[this.tail-1]
    this.tail--
    return top
}

const plates = Stack()
plates.push(1)
plates.push(2)
plates.push(3)
plates.pop()

//console.log(plates)



// Pseudoclassical Classes

const Stack = function(){
    this.tail = 0 
}

Stack.prototype.push = function(value){
    this[this.tail] = value 
    this.tail++ 
}
Stack.prototype.pop = function(){
    let top = this[this.tail -1 ]
    delete this[this.tail -1]
    this.tail--
    return top 
}


const plates = new Stack()
plates.push(1)
plates.push(2)
plates.push(3)
plates.pop()

//console.log(plates)