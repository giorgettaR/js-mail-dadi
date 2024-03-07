// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// buttons variables

const rollDiceButton = document.getElementById('rollDice');
const cleanUpButton = document.getElementById('cleanUp');

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

    const resultBox = document.createElement('div');
    resultBox.classList.add('col-4','card','p-3');
    
    if (userRoll > pcRoll){
        console.log('Your are the winner!');
        resultBox.innerHTML = '<h4 class="card-title">You are the winner!</h4>';
    } else if (userRoll === pcRoll) {
        console.log('It\' a draw!');
        resultBox.innerHTML = '<h4 class="card-title">It\' a draw!</h4>';
    } else {
        console.log('You loose!');
        resultBox.innerHTML = '<h4 class="card-title">You loose!</h4>';
    }

    // const dicesMiniBox = document.createElement('div');
    // dicesMiniBox.innerHTML = 'Your dice\: <i class="fa-solid fa-dice-' +  $[userRoll] + '"></i>';
    // resultBox.append(dicesMiniBox);

    resultsDiv.append(resultBox);
})


// get input click from user to clean up the results

cleanUpButton.addEventListener('click', function() {
    resultsDiv.innerHTML('');
})