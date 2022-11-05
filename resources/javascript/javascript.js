const wholeDoc = document.body;
const createCard = document.getElementById('createCard');
let cardNo = 2;
let cards =[1,2];
let flippedCards = [];


const flipCard = event => {
    console.log(event.target.src);
    
    let thisCardId;
    if (event.target.parentNode.id == 'table') {
        thisCardId = event.target.id;
    }
    else {
        thisCardId = event.target.parentNode.id;
    }
    let thisCard = document.getElementById(thisCardId);
    let thisCardsImage = thisCard.childNodes[0];
    flippedCards.push(thisCardId)


    if (thisCardsImage.src.includes("resources/images/CardBack.png")) {
        thisCardsImage.src = 'resources/images/cards/sheep.jpg';
    } 
    else {
        thisCardsImage.src = 'resources/images/CardBack.png';
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
    console.log(cards);
    addListener();
}

function addListener() {
    cards.forEach(cardId => {
        document.getElementById(cardId).addEventListener('click', flipCard);
    })
    console.log('Listeners added. I did it!');
}

createCard.addEventListener('click', createIt);

const card1 = document.getElementById('1');
const card2 = document.getElementById('2');
//card1.onclick = flipCard;  
card1.addEventListener('click', flipCard);
card2.addEventListener('click', flipCard);
console.log(card1);