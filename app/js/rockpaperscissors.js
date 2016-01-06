////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    return prompt("Please choose either 'rock', 'paper', or 'scissors'. Type 'quit' to quit.");
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}


function getWinner(winner) {
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
  
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    function showMoves(){
        alert('You chose ' + playerMove + '. The computer chose ' + computerMove);
    }
    


if (playerMove === computerMove){
    showMoves();
     winner = 'tie';
     return winner;
}

if (playerMove ==='rock'){
     showMoves();
     if (computerMove === 'paper'){
        
        winner = 'computer';
     }
     else {
        winner = 'player';
     }
     return winner;
}

if (playerMove ==='scissors'){
     showMoves();
     if (computerMove === 'rock'){
        winner = 'computer';
     }
     else {
        winner = 'player';
     }
     return winner;
}

if (playerMove ==='paper'){
    showMoves();
     if (computerMove === 'scissors'){
        winner = 'computer';
     }
     else {
        winner = 'player';
     }
     return winner;
}

if (playerMove ==="quit"){
    winner = "quit";
    return winner;
}

}

//when using playTo in console be sure to put a numeric value in parenthesis!
function playTo(x) {
  console.log("Let's play Rock, Paper, Scissors");
  var playerWins = 0;
  var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    var winCount = x;
      do{  var winner = getWinner();
            if (winner === 'player'){
                playerWins = playerWins + 1 ;
                alert("Player wins this round!" + "The score is "
                + playerWins + " player : " +
                computerWins + " computer");
            } else if (winner ==='computer'){
                computerWins = computerWins + 1 ;
                   alert("Computer wins this round!"+ "The score is "
                + playerWins + " player : " +
                computerWins + " computer");
            }else if (winner ==='tie'){
                alert("It's a tie!" + " The score is "
                + playerWins + " player : " +
                computerWins + " computer");
                /* winner = tie, add nothing, repeat*/
            }else if (winner ==="quit"){
                winCount = "quit";
              break;  
            } else {alert("Oops! There was an error! Please type carefully!");}
        } while (playerWins < winCount && computerWins < winCount && winCount !=="quit")
             alert("The final score is " + playerWins + " player: " + computerWins + " computer.")
             if (playerWins>computerWins){
                 alert("You are the champion!");
             }else if (winCount ==="quit"){
                 alert("Please play again some time!");
             } else {alert("Computer is the champion!");}
            return [playerWins, computerWins];
}

playTo(5);