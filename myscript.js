let computerScore = 0;
let humanScore = 0;

let listOf = ["rock", "paper", "scissors"];
const humanResult = document.getElementById('humanResult');
const computerResult = document.getElementById('computerResult');
const resultDisplay = document.querySelector('#result'); // Renamed to avoid conflict
const humanDisplayScore = document.querySelector('#humanDisplayScore');
const computerDisplayScore = document.querySelector('#computerDisplayScore');

function playGame(humanChoice) {
    // Declare computerChoice correctly
    const computerChoice = listOf[Math.floor(Math.random() * listOf.length)];
    let result = ""; // Renamed to avoid conflict with resultDisplay

for (let i = 1; i <= 2; i++){
    // Determine the result of the round
    if (humanChoice === computerChoice) {
        result = "It's a tie!";
    } else{
        switch(humanChoice){
             case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "COMPUTER WINS!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "COMPUTER WINS!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "COMPUTER WINS!";
                break;
    }
    }
}

   
    // Update the display text with corrected template literals
    humanResult.textContent = `Human: ${humanChoice}`;
    computerResult.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result; // Correctly update the result display
    
    resultDisplay.classList.remove("green", "red");
    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add('green');
            humanScore++;
            humanDisplayScore.textContent = humanScore;
            break;
        case "COMPUTER WINS!":
            resultDisplay.classList.add('red');
            computerScore++;
            computerDisplayScore.textContent = computerScore;
            break;
    }

}

