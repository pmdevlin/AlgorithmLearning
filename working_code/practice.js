class Node{
    constructor(data) {
        this.data = data
        this.next = null         
    }
}

class Ll {
    constructor(){
        this.head = null
        this.tail = null 
        this.length = 0 
    }

    print(){
        const listData = []
        let current = this.head
         while(current < this.length){
            listData.push(current.data)
            current = current.next
        }
        return listData
    }

    newHead(data){
        const node = new Node(data)
        if(!this.head){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head = node 
        }
        this.length++
        return this
    }
    newTail(data){
        
        if(!this.tail){
          this.newHead(data)
        }else{
            const node = new Node(data)
            this.tail.next = node
            this.tail = node
            this.length++
        }
        return this
    }

}


const ll = new Ll()

ll.newHead(45)
ll.newHead(01)
ll.newHead(89)
ll.newHead(64)
ll.newHead(21)
ll.newTail(1000)


console.log(ll.print())
console.log(ll)




   
