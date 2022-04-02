

let computerPlay = () =>{
  //store possibles moves into an array
  let possiblePlays = ["rock", "paper", "scissors"] 
  //roll a random number between 0 and 2
  let randomNumber = Math.floor(Math.random()*3)
  //return that index of the array 
  return possiblePlays[randomNumber]
}

let playRound = (playerSelection, computerSelection) =>{
  // make playerSelection case insensitive
  playerselection = playerSelection.toLowerCase()
  console.log("PLAYER chose: " + playerSelection.toUpperCase())
  console.log("COMPUTER chose: " + computerSelection.toUpperCase())
  //determine the winner and return it
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

let game = () =>{
  let playerScore = 0;
  let computerScore = 0;
  let playerSelection
  let roundResult

  for (let i = 0; i < 5 ; i++){
    playerSelection = prompt('Type "Rock", "Paper" or "Scissors"')
    roundResult=playRound(playerSelection, computerPlay())
    if (roundResult == "player") playerScore++
    if (roundResult == "computer") computerScore++
    announceWinner(roundResult)
  }

  console.log("Game is over! Final Scores:")
  console.log(`PLAYER has ${playerScore} wins`)
  console.log(`COMPUTER has ${computerScore} wins`)
} 

let announceWinner= (winner)=>{
  if (winner == "tie"){
    return console.log("Its a Tie!")
  }
  console.log(`${winner.toUpperCase()} won!`)
  
}
