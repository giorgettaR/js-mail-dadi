// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// buttons variables

const rollDiceButton = document.getElementById('rollDice');
const cleanUpButton = document.getElementById('cleanUp');


// message function

function generateWinner(message, type) {
    return `<h4 class="card-title msg-${type}">${message}</h4>`;
}

// dices variables

const diceNumbers = ['one','two','three','four','five','six'];
const resultsDiv = document.querySelector('.results');


// get input click from user to play dice

rollDiceButton.addEventListener('click', function(){

    // generate random numbers for pc and user

    let userRoll = Math.floor(Math.random() * 6) + 1;
    let pcRoll = Math.floor(Math.random() * 6)  + 1;

    console.log(userRoll, pcRoll);
    
    // show dices and communicate result

    // create result box
    const resultBox = document.createElement('div');
    resultBox.classList.add('col-4','card','p-3');
    
    // check winner and add result box title
    
    if (userRoll > pcRoll){
        console.log('Your are the winner!');
        resultBox.innerHTML = generateWinner('You are the winner!', 'win');
    } else if (userRoll === pcRoll) {
        console.log('It\' a draw!');
        resultBox.innerHTML = generateWinner('It\' a draw!', 'draw');
    } else {
        console.log('You loose!');
        resultBox.innerHTML = generateWinner('You loose!', 'lose');
    }

    // create dice variable to show dice icon
    const userRollDice = diceNumbers[userRoll - 1];
    const pcRollDice = diceNumbers[pcRoll - 1];

    console.log(userRollDice);
    const dicesMiniBox = document.createElement('div');
    dicesMiniBox.innerHTML = 'Your dice\: <i class="fa-solid fa-dice-' +  userRollDice + '"></i>';
    dicesMiniBox.innerHTML += ' The opponent\'s dice\: <i class="fa-solid fa-dice-' +  pcRollDice + '"></i>';
    resultBox.append(dicesMiniBox);

    resultsDiv.append(resultBox);
})


// get input click from user to clean up the results

cleanUpButton.addEventListener('click', function() {
    resultsDiv.innerHTML = ('');
})

const template = document.getElementById('diceResult');
const firstClone = template.content.cloneNode(true);

document.querySelector('.results').appendChild(firstClone);