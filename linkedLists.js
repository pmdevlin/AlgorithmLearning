class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    // new Head
    newHead(data) {
        const newNode = new Node(data)
        if(!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    // new tail
    newTail(data){
        if (!this.head){ 
            this.newHead(data)
        }else{
            const node = new Node(data)
            this.tail.next = node 
            this.tail = node 
            this.length++
        }
        return this
    }

    // printListData
    print() {
        const listData = []
        let current = this.head
        while(current) {
            listData.push(current.data)
            current = current.next
        }
        return listData
    }

    // readNode(index) // gets back data from a spec node
    readNode(index) {
        let currentNode = this.head 
        let counter = 0 

        while (counter < index) {
            currentNode = currentNode.next 
            counter++
        }
        console.log(`Node data at index(${index}) is ${currentNode.data}`)
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
    delete(data) {

    }
    
    // reverse() // reverse the linkedList
    reverse() {

    }
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
