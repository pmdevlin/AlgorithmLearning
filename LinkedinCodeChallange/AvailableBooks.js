//create a book class 

// need title, author, isbn, numCopies 
// keep track of the number of available copies 

//methods - getAvailability 
//if  0  = out of  stock
//if <10 = low stock 
// else = in stock  

// method - sell(numSold)
// this will take number sold and subtract form total number of copies 
// if not arg passed default subtract 1 copy

// method - restock(numCopies)
// adds argument to total number of copies
// if no argument is passed default restock to 5  

class Book {
    constructor(title, author,numCopies, ISBN){
        this.title = title
        this.author= author
        this.numCopies = numCopies
        this.ISBN = ISBN
    }

    getAvailability (){
        if(this.numCopies === 0 ){
            return 'OUT OF STOCK'
        }else if(this.numCopies < 10){
            return 'LOW STOCK'
        }else{
            return 'IN STOCK'
        }
    }

    sell(num){
     if(!num){
         return this.numCopies -= 1
     }else{
         return this.numCopies -= num
     }
    }
    restock(num) {
        if(!num){
            const addFive = this.numCopies += 5
            return addFive
        }else{
            const addNum = this.numCopies += num
            return addNum
        }
    }
}

const book = new Book('peter Pan', 'c.s. lewis',10, 123456)
book.restock(50)
book.sell(25)

console.log(book)
book.sell(35)
book.restock(10)
console.log(book.getAvailability())