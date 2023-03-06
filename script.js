/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/
const totalScore ={computerScore: 0, playerScore: 0}
// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
  let choice  = ['Rock','Paper','Scissors'];
  let Random =Math.floor(Math.random(choice) * 3);
  return choice[Random]
}


// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  let score;
  if(playerChoice == computerChoice){
    score = 0;
  }else if(playerChoice == "Rock" && computerChoice=="Scissors"){
    score = 1;
  }else if(playerChoice == "Paper" && computerChoice=="Rock"){
    score = 1;
  }else if(playerChoice == "Scissors" && computerChoice=="Paper"){
    score = 1;
  } else {
    score = -1
  }

  // return score
  return score
}

function getResultComputer(computerChoice, playerChoice) {
    // return the result of score based on if you won, drew, or lost
    let score;
    if(playerChoice == computerChoice){
      score = 0;
    }else if(computerChoice == "Rock" && playerChoice=="Scissors"){
      score = 1;
    }else if(computerChoice == "Paper" && playerChoice=="Rock"){
      score = 1;
    }else if(computerChoice == "Scissors" && playerChoice=="Paper"){
      score = 1;
    } else {
      score = -1
    }
  
    // return score
    return score
  }

// console.log(getResult('Rock','Scissors'))
// console.log(getResult('Scissors','Rock'))
// console.log(getResult('Rock','Rock'))

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!

  let resultDiv = document.getElementById('result');
  let handsDiv = document.getElementById('hands');
  let playerScore = document.getElementById('player-score');
  let computerScore = document.getElementById('computer-score');
    if(score == -1){
        resultDiv.innerText = "You Lost";
    }else if(score == 0){
        resultDiv.innerText = "It's a tie";
    }else{
        resultDiv.innerText = "You won!";
    }
    handsDiv.innerText = `${playerChoice} VS ${computerChoice}`;
    playerScore.innerText = "Your Score is " + totalScore['playerScore'];
    computerScore.innerText = "Computer Score is " + totalScore['computerScore'];

}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  console.log(playerChoice)
  const computerChoice = getComputerChoice()
  console.log(computerChoice)
  const score = getResult(playerChoice,computerChoice)
  const score2 = getResult(computerChoice,playerChoice)
  totalScore['playerScore'] += score
  totalScore['computerScore'] += score2
  console.log(score)
  console.log(totalScore)
  showResult(score,playerChoice,computerChoice)

}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons

    let rpsButtons = document.querySelectorAll('.rpsButton');
  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  
  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument

  rpsButtons.forEach(rpsButton => {
    rpsButton.onclick=()=>onClickRPS(rpsButton.value)

  })

  // Add a click listener to the end game button that runs the endGame() function on click
  let endGameButton = document.getElementById("endGameButton");
  endGameButton.onclick = () =>endGame(totalScore)
  
}

// ** endGame function clears all the text on the DOM **
function endGame(totalScore) {
  totalScore['computerScore'] = 0
  totalScore['playerScore'] = 0

  
  let resultDiv = document.getElementById('result');
  let handsDiv = document.getElementById('hands');
  let playerScoreDiv = document.getElementById('player-score');

  resultDiv.innerText =''
  handsDiv.innerText =''
  playerScoreDiv.innerText=''
}

playGame()