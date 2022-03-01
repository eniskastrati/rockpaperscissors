//getting all the Elements form index.html by id
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let userChoice;
//
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
}))

let generateComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length + 1);//or just 3 as we have only 3 choises
    console.log(randomNumber)
};
 