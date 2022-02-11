class Card {
        constructor(suit, value, rank){
            this.rank = rank
            this.suit = suit
            this.value = value 
        }
    }
    
    class Deck {
        constructor(){
            this.cards = []
            this.draw = []
            
        }
       
        findLength(){
            console.log(this.cards.length);
        }
    
        createDeck(){
            const suit = ['Spades', 'Clubs', 'Diamonds', 'Hearts']
            const rank = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K']
            const value = [1,2,3,4,5,6,7,8,9,10,11,12,13] 
    
            for(let i = 0; i < suit.length; i++){
                for(let j = 0; j < rank.length; j++){
                    this.cards.push(new Card(suit[i], rank[j], value[j]))
                }
            }
    
        }
    
        drawTwo(){
            let num = Math.floor(Math.random() * 51)
            let num2 = Math.floor(Math.random() * 51)
            if(num !== num2){
            this.draw.push(this.cards[num])
            this.draw.push (this.cards[num2])
            }else{
            this.draw.push(this.cards[10])
            this.draw.push (this.cards[43])
            }
        }
    
        clear() {
            this.draw = []
        }
    
        shuffle(){
            for(let i = 0; i < this.cards.length; i++){
                const random = Math.floor(Math.random() * (i + 1))
    
                const temp = this.cards[i]
                this.cards[i] = this.cards[random]
                this.cards[random] = temp
    
            }
        }
    }
    
    // class Player {
    //     constructor(name, hand){
    //         this.name = name
    //         this.hand = [] 
    //     }
    
    //     newPLayer(name, hand){
            
    //     }
    // }
    
    class Game { 
        constructor(){
            this.winner = []
            this.p1 = []
            this.p2 = []
        }
    
        startGame(){
            const deck = new Deck()
            deck.createDeck()
            deck.drawTwo()
            this.p1.push(...deck.draw)
            deck.clear()
            deck.drawTwo()
            this.p2.push(...deck.draw)
    
            const p1_Score = this.p1[0].rank + this.p1[1].rank
            const p2_Score = this.p2[0].rank + this.p2[1].rank
            if(p1_Score > p2_Score){
                this.winner.push('Player One wins')
            }else{
               this.winner.push('player Two wins')
            }
            
        }
    
    }
    
    const test = new Card('spades', 11, 'jack')
    const deck = new Deck()
    deck.createDeck()
    deck.drawTwo()
    deck.shuffle()
    deck.findLength()
    console.log(deck);
    
    const gameOne = new Game()
    gameOne.startGame()