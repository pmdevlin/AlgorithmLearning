//create a node class
class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

//create the linked list 
class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0 
    }
// adds to the front of the linked list
    newHead(value) {
        const newNode = new Node(value) 
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
//adds to the back of a linked list
    newTail(data){
        if(!this.head){
        this.newHead(data)
        }else{
            const newNode = new Node(data)
            this.tail.next = newNode
            this.tail = newNode
            
        }
        this.length++
        return this
    }
// prints out all node values in a linked list
    print() {
        const list = []
        let count = 0
        let current = this.head
        while(count < this.length){
            list.push(current.data)
            current = current.next
            count++ 
        }
        return list
    }
//  returns the data of a specific node
    read(idx) {
        let current = this.head 
        let count = 0 
        while(count < idx){
            current = current.next
            count++
        }
        return `node data at index ${idx} is ${current.data}`
    }

    // insert(index, data) // inserts by index number
    insert(index, data){
        if (index < 0 || index > this.length) {
            return -1 
        }else if(index === 0 ){
            this.newHead(data)
        }else if(data === this.length){
            this.newTail(data)
        }else{
            const newNode = new Node(data)
            let current = this.head
            let counter = 0 

            while(counter < index -1){
                counter++
                current = current.next 
            }
            let temp = current.next
            current.next = newNode
            newNode.next = temp
            this.length++
        }
        return this 
    }  

    // delete(index) // deletes by index number
    // delete(data) {

    // }
    
    // // reverse() // reverse the linkedList
    // reverse() {

    // }
}

const list = new LinkedList
list.newHead(20)
list.newHead(21)
list.newHead(23)
list.newHead(24)
list.newHead(25)
list.newHead(26)
list.newHead(27)
list.insert(3, 'working')

console.log(list.print())
//console.log(list.readNode())
