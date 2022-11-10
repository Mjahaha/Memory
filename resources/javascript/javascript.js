const wholeDoc = document.body;
const createCard = document.getElementById('createCard');
let cardNo = 2;
let cards =[1,2];
let flippedCards = [];
let cardImagesArray = ['bird.png','butterfly.png','cat.png','chook.png','crab.png','dog.jpg','frog.jpg','mouse.jpg','penguin.png','sheep.jpg','whale.png'];

const allocateImages = arr => {
    let neededImages = [];
    let test = [];
    for (i=0; i < cardNo; i++) {
        let access = Math.floor(i/2);
        neededImages.push('resources/images/cards/' + cardImagesArray[access]); 
        test.push('i');
    }
    let output = [];
    let iterations = neededImages.length;
    for (i=0; i < iterations; i++) {
        let rand = Math.floor(Math.random() * neededImages.length);
        output.push(neededImages[rand]);
        neededImages.splice(rand, 1);
    }
    return output;
}

let cardImages = allocateImages();


const flipCard = event => {
    createCard.style.display = 'none';
    let thisCardId;
    if (event.target.parentNode.id == 'table') {
        thisCardId = event.target.id;
    }
    else {
        thisCardId = event.target.parentNode.id;
    }
    let thisCard = document.getElementById(thisCardId);
    let thisCardsImage = thisCard.childNodes[0];
    
    if (flippedCards.length < 2) {
        if (thisCardsImage.src.includes("resources/images/CardBack.png")) {
            thisCardsImage.src = cardImages[thisCardId-1];
            flippedCards.push(thisCardId);
        } 
    }  
    
    if (flippedCards.length >= 2) {
    if (document.getElementById(flippedCards[0].toString()).innerHTML === document.getElementById(flippedCards[1].toString()).innerHTML) {
        flippedCards = [];
    }
    else {
        setTimeout(function() {
            document.getElementById(flippedCards[0].toString()).innerHTML = '<img src="resources/images/CardBack.png" alt="card">';
            document.getElementById(flippedCards[1].toString()).innerHTML = '<img src="resources/images/CardBack.png" alt="card">';
            flippedCards = [];
        }, 1000);
    }
    }
    for (i = 0; i < cardNo; i++) {
        if (document.getElementById(cards[i].toString()).innerHTML === '<img src="resources/images/CardBack.png" alt="card">') {
            break;
        }
        if (i >= cardNo - 1) {
            document.getElementById("winner").style.display = 'block';
        }
    } 
}

function createIt() {
    let create = document.createElement('div');
    create.className = 'card';
    create.innerHTML = '<img src="resources/images/CardBack.png" alt="card">';
    cardNo ++;
    create.id = cardNo;
    table.appendChild(create);
    cards.push(cardNo);
}

function addListener() {
    cards.forEach(cardId => {
        document.getElementById(cardId).addEventListener('click', flipCard);
    })
}

createCard.addEventListener('click', function(){
    createIt();
    createIt();
    addListener();
    cardImages = allocateImages();
    if (cardNo >= 22) {
        createCard.style.display = 'none';
    }
});

const card1 = document.getElementById('1');
const card2 = document.getElementById('2');
card1.addEventListener('click', flipCard);
card2.addEventListener('click', flipCard);