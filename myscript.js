let computerScore = 0;
let humanScore = 0;

let listOf = ["rock", "paper", "scissors"];

function getComputerChoice(){
    return listOf[(Math.floor(Math.random() * listOf.length))];
}

function getHumanChoice(){
    let userType = prompt("Enter your choice: ").toLowerCase();
    return userType;
}

let playGame = function() {
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();
        
        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log("You win!");
            humanScore += 1;
        } else {
            console.log("The computer wins!");
            computerScore += 1;
        }
    
        console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
    }
    
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    
    playRound(humanSelection, computerSelection);
}
for (let i = 1; i <= 5; i++){
    playGame();
}
if (computerScore > humanScore){
    console.log(`The computer: ${computerScore}==> The computer wins!`);
}
else{
    console.log(`The computer: ${humanScore}==> the human wins!`)
}


