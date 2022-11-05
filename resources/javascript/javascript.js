const wholeDoc = document.body;
const createCard = document.getElementById('createCard');
let cardNo = 2;
let cards =[1,2];
let flippedCards = [];
let cardImagesArray = ['bird.png','butterfly.png','cat.png','chook.png','crab.png','dog.jpg','frog.jpg','mouse.jpg','penguin.jpg','sheep.jpg','whale.jpg'];

const allocateImages = arr => {
    let neededImages = [];
    let test = [];
    console.log(cardNo);
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
    else {
        console.log(document.getElementById(flipCard[0])); //HOW DO I CONVERT THIS TO A STRING?????!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        document.getElementById(flipCard[0]).innerHTML = '<img src="resources/images/CardBack.png" alt="card">';
        document.getElementById(flipCard[1].toString()).innerHTML = '<img src="resources/images/CardBack.png" alt="card">';
        flippedCards = [];
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
    addListener();
    cardImages = allocateImages();
}

function addListener() {
    cards.forEach(cardId => {
        document.getElementById(cardId).addEventListener('click', flipCard);
    })
}

createCard.addEventListener('click', createIt);

const card1 = document.getElementById('1');
const card2 = document.getElementById('2');
card1.addEventListener('click', flipCard);
card2.addEventListener('click', flipCard);