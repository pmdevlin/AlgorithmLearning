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

console.log(q.size())
console.log(q)







