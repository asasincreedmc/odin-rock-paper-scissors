const btns = document.querySelectorAll("button")
const results = document.querySelector(".results");
btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        results.textContent = "a"
        console.log(playRound(btn.className));
    });
})



function computerPlay() {
    let ran = Math.floor(Math.random() * 3) + 1
    if (ran === 1) {
        return "Rock";
    } else if (ran === 2) {
        return "Paper";
    } else return "Scissors";
}

function playRound(playerSelection, computerSelection = computerPlay()) {
    playerSelection = playerSelection.toLowerCase();
    return checkWinner(playerSelection, computerSelection);

}

/*function playGame(){
    let playerPoints = 0;
    let computerPoints = 0;
    for(i = 0; i < 5; i++){
        let playerPlay = window.prompt("Your next play will be: ")
        let round = playRound(playerPlay)
        console.log(round)
        if(round.includes("win")){
            ++playerPoints;
        } else if(round.includes("lose")){
            ++computerPoints;
        }
    }
    return checkFinalWinner(playerPoints, computerPoints);
}
*/

function checkFinalWinner(playerPoints, computerPoints) {
    if (playerPoints > computerPoints) {
        return "You won " + playerPoints + " to " + computerPoints;
    } else if (playerPoints < computerPoints) {
        return "You lose " + computerPoints + " to " + playerPoints;
    } else return "You have a draw with " + playerPoints + " points";
}


function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        if (computerSelection == "Rock") {
            return "It's a draw!"
        } else if (computerSelection == "Paper") {
            return "Paper beats rock, you lose!"
        } else return "Rock beats scissors, you win!"
    }
    if (playerSelection == "paper") {
        if (computerSelection == "Rock") {
            return "Paper beats rock, you win!"
        } else if (computerSelection == "Paper") {
            return "It's a draw!"
        } else return "Scissors beats paper, you lose!"
    }
    if (playerSelection == "scissors") {
        if (computerSelection == "Rock") {
            return "Rock beats scissors, you lose!"
        } else if (computerSelection == "Paper") {
            return "Scissors beats paper, you win!"
        } else return "It's a draw!"
    }
}