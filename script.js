let playerScore = 0
let computerScore = 0

const resultDiv = document.querySelector(".results")

const playerScoreDisplay = document.querySelector("#playerScore")
const computerScoreDisplay = document.querySelector("#computerScore")

const computerBtns = document.querySelectorAll(".computer-btn")
const playerBtns = document.querySelectorAll(".player-btn")

let computerPlay = () =>{
  let possiblePlays = ["rock", "paper", "scissors"] 
  let randomNumber = Math.floor(Math.random()*3)
  let play = possiblePlays[randomNumber]
  highlightComputerBtn(play)
  return play
}

//show the player what the Computer chose
let highlightComputerBtn = (play)=>{
  computerBtns.forEach(b=>{
    b.style.backgroundColor = "#3882F6"
    if(b.value == play) b.style.backgroundColor="red"
  })
}

let playRound = (playerSelection, computerSelection) =>{
  if(playerSelection == computerSelection){
    return "tie"
  }
  if(playerSelection == "rock"){
    if (computerSelection == "paper") return "computer"
    if (computerSelection == "scissors") return "player"
  }
  if(playerSelection == "paper"){
    if (computerSelection == "rock") return "player"
    if (computerSelection == "scissors") return "computer"
  }
  if(playerSelection == "scissors"){
    if (computerSelection == "rock") return "computer"
    if (computerSelection == "paper") return "player"
  }
}

const game = (playerSelection, computerSelection) => {
  let roundResult = playRound(playerSelection, computerSelection)
  announceRoundWinner(roundResult)
  increaseScore(roundResult)
  if(hasGameEnded()){
    endGame()
  }
} 

const hasGameEnded = () => {
  if(playerScore == 5 || computerScore == 5)return true
  return false
}

const announceRoundWinner = (winner) => {
  if (winner == "tie") return displayInstruction("It's a Tie")
  displayInstruction(`${winner.toUpperCase()} won the Round!`)
}

const increaseScore = (winner) => {
  if(winner == "player")
  playerScoreDisplay.innerText = ++playerScore
  if(winner == "computer") 
  computerScoreDisplay.innerText = ++computerScore
}

const endGame = () => {
  displayInstruction(`${playerScore == 5? "PLAYER" : "COMPUTER"} has won the game! <br><br>`)
  togglePlayerButtons()
  displayRestartBtn()
}

const displayRestartBtn = () => {
  const restartBtn = document.createElement("button")
  restartBtn.innerText = "Restart"
  restartBtn.addEventListener("click", restartGame)
  resultDiv.appendChild(restartBtn)
}

const togglePlayerButtons = () => {
  playerBtns.forEach( b => {
    b.toggleAttribute("disabled")
  })
}

const restartGame = () => {
  playerScoreDisplay.innerText = playerScore = 0
  computerScoreDisplay.innerText = computerScore = 0
  highlightComputerBtn()
  togglePlayerButtons()
  displayInstruction(`Press a button to start playing!`)
}

const displayInstruction  = message => {
  resultDiv.innerHTML = message
}

playerBtns.forEach( b => {
  b.addEventListener("click", (e)=>{
    game(e.target.value, computerPlay())
  })
})


