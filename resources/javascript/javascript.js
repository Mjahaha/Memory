const wholeDoc = document.body;
const createCard = document.getElementById('createCard');
let cardNo = 2;

const flipCard = (id) => {
    let theCard = document.getElementById(id);
    theCard.innerHTML = "1";
}

const createCardFunction = () => {
    function createIt() {
        let create = document.createElement('div');
        create.className = 'card';
        create.innerHTML = '<img src="resources/images/CardBack.png" alt="card">';
        cardNo ++;
        create.id = cardNo;
        create.addEventListener('click', flipCard);
        table.appendChild(create);
        
    }
    createIt();
    createIt(); 
}

createCard.addEventListener('click', createCardFunction);




