

// ES6 class 

class Queue{ 
    constructor(){
        this.queue = {}
        this.head = 0
        this.tail = 0
    }

    enqueued(value){
        this.queue[this.tail] = value
        this.tail++ 
    }

    dequeued(){
        let last = this.queue[this.head]
        delete this.queue[this.head]
        this.head++
        return last
    }

    size(){
        return this.tail - this.head
    }


}

const q = new Queue()

q.enqueued(0)
q.enqueued(0)
q.enqueued(0)
q.enqueued(0)
q.enqueued(0)
q.enqueued(0)

//console.log(q.size())
//console.log(q)



// functional classes

const Queue = function(){
    const obj = {head:0, tail:0}
    Object.assign(obj, Queue.methods)
    return obj 
}

Queue.methods = {
    enqueued:  function(value){
        this[this.tail] = value
        this.tail++
    }, 
    dequeued: function(){
        const last = this[this.head]
        delete this[this.head]
        this.head++
        return last
    } 
}

const line = Queue()
line.enqueued(0)
line.enqueued(0)
line.enqueued(0)
line.enqueued(0)
line.dequeued()

//console.log(line)



// functional Object decorator 

const queue = function(obj){
    obj.tail = 0
    obj.head = 0 

    obj.enqueued = function(value){
        obj[obj.tail] = value 
        obj.tail++
    }
    obj.dequeued = function(){
        let last = obj[obj.head]
        delete obj[obj.head]
        obj.head++
        obj.tail--
        return last
    }
    return obj
}

const que = queue({})

que.enqueued(0)
que.enqueued(1)
que.enqueued(2)
que.enqueued(3)
que.dequeued()

//console.log(line)


// prototypal class 

const Queue = function(){
    const obj = Object.create(Queue.prototype)
    obj.head = 0 
    obj.tail = 0
    return obj 
}

Queue.prototype.enqueued = function(value){
    this[this.tail] = value
    this.tail++
}
Queue.prototype.dequeued = function(){
    let last = this[this.head]
    this.tail -- 
    delete this[this.head]
    this.head++
    return last
}

const queue2 = Queue()
queue2.enqueued(0)
queue2.enqueued(1)
queue2.enqueued(2)
queue2.dequeued()

//console.log(line)


// Pseudoclassical Classes

const Queue = function(){
    this.head = 0
    this.tail = 0 
}

Queue.prototype.enqueued = function(value){
    this[this.tail] = value 
    this.tail++ 
}
Queue.prototype.dequeued = function(){
    let front = this[this.head]
    delete this[this.head]
    this.head++
    this.tail--
    return front 
}
Queue.prototype.size = function(){
    return this.tail + 1 - this.head
}

const line2 = new Queue()
line2.enqueued(1)
line2.enqueued(2)
line2.enqueued(3)
line2.dequeued()

// console.log(line.size())
// console.log(line)



