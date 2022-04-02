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