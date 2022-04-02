let computerPlay = () =>{
  //store possibles moves into an array
  let possiblePlays = ["Rock", "Paper", "Scissors"] 
  //roll a random number between 0 and 2
  let randomNumber = Math.floor(Math.random()*3)
  //return that index of the array 
  return possiblePlays[randomNumber]
}