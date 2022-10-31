const wholeDoc = document.body;
const createCard = document.getElementById('createCard');
let cardNo = 2;

const flipCard = (id) => {
    console.log(id);
    let theCard = document.getElementById(id);
    console.log(theCard.innerHTML);
    if (theCard.innerHTML === '1') {
        theCard.innerHTML = '<img src="resources/images/CardBack.png" alt="card">';
    } else {
        theCard.innerHTML = '1';
    }
    console.log(theCard.innerHTML);
}

const createCardFunction = () => {
    function createIt() {
        let create = document.createElement('div');
        create.className = 'card';
        create.innerHTML = '<img src="resources/images/CardBack.png" alt="card">';
        cardNo ++;
        create.id = cardNo;
        table.appendChild(create);
        
    }

    function addListener() {
        let card = document.getElementById(cardNo); 
        card.addEventListener('click', flipCard(cardNo));
        console.log('I did it!');
    }

    createIt();
    addListener()
    createIt(); 
    addListener()
}

createCard.addEventListener('click', createCardFunction);

const card1 = document.getElementById('1');
const card2 = document.getElementById('2');
card1.onclick = flipCard(card1.id);  
//card1.addEventListener('click', flipCard(card1.id));
card2.addEventListener('click', flipCard(card2.id));
