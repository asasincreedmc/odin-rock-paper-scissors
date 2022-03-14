const btns = document.querySelectorAll("button")
const results = document.querySelector("div");
let playerPoints = 0;
let computerPoints = 0;
let games = 0;
btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (games == 5) {
            const paras = document.querySelectorAll(".result")
            paras.forEach((para) => {
                results.removeChild(para);
            })
            restartGame()
        }
        const para = document.createElement("p")
        para.classList.add("result")
        results.appendChild(para)
        para.textContent = playRound(btn.className)
        addPoint(para.textContent)
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

function checkFinalWinner(playerPoints, computerPoints) {
    if (playerPoints > computerPoints) {
        return "You won " + playerPoints + " to " + computerPoints;
    } else if (playerPoints < computerPoints) {
        return "You lose " + computerPoints + " to " + playerPoints;
    } else return "You have a draw with " + playerPoints + " points";
}

function restartGame() {
    playerPoints = 0;
    computerPoints = 0;
    games = 0;
}

function addPoint(resultString) {
    games++;
    if (resultString.includes("win")) {
        ++playerPoints;
    } else if (resultString.includes("lose")) {
        ++computerPoints;
    }
    console.log(playerPoints);
    console.log(computerPoints);
    if (games == 5) {
        const para = document.createElement("p")
        results.appendChild(para)
        para.textContent = checkFinalWinner(playerPoints, computerPoints);
        para.classList.add("result")
    }
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