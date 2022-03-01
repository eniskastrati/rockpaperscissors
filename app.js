//getting all the Elements form index.html by id
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

//varibale declaration
let userChoice, computerChoice, result;

//setting an click event Listener for every possibleChoice and displaying the value
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}))

//functions
const generateComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length + 1);//or just 3 as we have only 3 choises

    if (randomNumber === 1) {
        computerChoice = 'rock';
    } else if (randomNumber === 2) {
        computerChoice = 'paper'
    } else {
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice;
};

const getResult = () => {
    if (computerChoice === userChoice) {
        result = "It's a draw";
    } else if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'You win!';
    } else if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'You lose!';
    } else if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'You lose!';
    } else if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'You win!';
    } else if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'You win!';
    } else if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'You lose!';
    }
    resultDisplay.innerHTML = result;
};