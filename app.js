// selecting the h2 span elements
// so that we can fill them with the user's value...
// and a randomly generated computer value.

const computerChoiceDisplay = document.getElementById('computer-choice');
const yourChoiceDisplay = document.getElementById('your-choice');
const resultDisplay = document.getElementById('result');
let yourChoice;  // declaration of variable
let computerChoice;
let result;

// select all the buttons
// returns a list of elements that match the choosen selector
const possibleChoices = document.querySelectorAll('button');

// add a click event listener to each button
possibleChoices.forEach(possibleChoice => 
    possibleChoice.addEventListener('click', (e) => {
        yourChoice = e.target.id;
        yourChoiceDisplay.innerHTML = yourChoice;
        computerChoiceDisplay.innerHTML = generateComputerChoice();
        resultDisplay.innerHTML = getResult();
    })) 

function generateComputerChoice() {
    // gives me a random number from 0 to 2.
    const randomNumber = Math.floor(Math.random() * possibleChoices.length);
    
    if (randomNumber === 0) {
        computerChoice = "rock"
    } else if (randomNumber === 1) {
        computerChoice = 'paper'
    } else {
        computerChoice = 'scissors'
    }

    return computerChoice;
}

function getResult() {

    if (computerChoice === yourChoice) {
        result = "Its a draw";
    } else if (computerChoice === 'rock' && yourChoice === "paper") {
        result = "You win";
    } else if (computerChoice === 'rock' && yourChoice === 'scissors') {
        result = "You lose"
    } else if (computerChoice === 'paper' && yourChoice === 'scissors') {
        result = "You win";
    } else if (computerChoice === "paper" && yourChoice === 'rock') {
        result = "You lose";
    }  else if (computerChoice === 'scissors' && yourChoice === 'rock') {
        result = "You win";
    } else {
        // in this case, computer choice is equal to scissors
        // yourChoice is equal to paper.
        result = "You lose";
    }
    return result;
}