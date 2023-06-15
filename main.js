let player = {
    name: "Per",
    chips: 200,
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")



playerEl.textContent = player.name + ": $" + player.chips

//Create a function, getRandomCard(), that always returns the number 5.

function getRandomCard(){
    let randonNumber= Math.floor(Math.random() * 13 ) + 1
    if (randonNumber > 10){
        return 10
    }else if (randonNumber === 1){
        return 11
    }else {
        return randonNumber
    }
}


function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
    
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }

sumEl.textContent = "Sum: " + sum
    if (sum <= 20){
        message = "Do you want to dray a new card?"
    }else if (sum === 21){
        message = "You've got Blackjack!"
        hasBlackJack = true
    }else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}