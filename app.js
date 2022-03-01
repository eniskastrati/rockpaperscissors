//getting all the Elements form index.html by id
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let userChoice,computerChoice;
//
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
}))

let generateComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length + 1);//or just 3 as we have only 3 choises
    
    if(randomNumber === 1){
        computerChoice = 'rock';
    }else if(randomNumber === 2){
        computerChoice = 'paper'
    }else{
        computerChoice = 'scissors' 
    }
    computerChoiceDisplay.innerHTML = computerChoice;
};