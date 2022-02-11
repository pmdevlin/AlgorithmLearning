class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null 
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }

    insert(value){
        const newNode = new Node(value)
        if(!this.root){
            this.root = newNode
        }
        
        let current = this.root;
        while(current){
            if(value === current.value) return undefined
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode
                    return this
                }
                current = current.left 
            }else{ 
                if(current.right === null){
                    current.right = newNode
                    return this
                }
                current = current.right
            }
        }
    }
    // lookup(id){
        
    // }


}



const bts = new BinarySearchTree()

bts.insert(100)
bts.insert(200)
bts.insert(50)
bts.insert(35)
bts.insert(10)

console.log(bts)

