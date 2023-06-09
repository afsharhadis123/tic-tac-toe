
var playerX = "X";
var playerO = "O";
var winner = null;
let board = ["", "", "", "", "", "", "", "", ""];

var squares = document.querySelectorAll('.square');
var currentPlayer = playerX;

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', function() {
    if (board[i] !== '' || winner !== null) {
      return;
    }
    board[i] = currentPlayer;
    document.getElementById(i).textContent = currentPlayer;
    checkWin();
    if (currentPlayer === playerX) {
      currentPlayer = playerO;
    } else {
      currentPlayer = playerX;
    }
  });
}

function checkWin() {
  // check rows
  if (board[0] !== "" && board[0] === board[1] && board[1] === board[2]) {
    winner = board[0];
  }
  if (board[3] !== "" && board[3] === board[4] && board[4] === board[5]) {
    winner = board[3];
  }
  if (board[6] !== "" && board[6] === board[7] && board[7] === board[8]) {
    winner = board[6];
  }
  // check columns
  if (board[0] !== "" && board[0] === board[3] && board[3] === board[6]) {
    winner = board[0];
  }
  if (board[1] !== "" && board[1] === board[4] && board[4] === board[7]) {
    winner = board[1];
  }
  if (board[2] !== "" && board[2] === board[5] && board[5] === board[8]) {
    winner = board[2];
  }
  // check diagonals
  if (board[0] !== "" && board[0] === board[4] && board[4] === board[8]) {
    winner = board[0];
  }
  if (board[2] !== "" && board[2] === board[4] && board[4] === board[6]) {
    winner = board[2];
  }
  if (winner !== null) {
    document.getElementById("winner").textContent = "Player " + winner + " wins!";
  }
// check for tie
var tie = true;
for (var i = 0; i < board.length; i++) {
  if (board[i] === "") {
    tie = false;
    return;
  }
}
if (tie && winner === null) {
  document.getElementById("winner").textContent = "Tie, Try again!";
}
}

var resetButton = document.getElementById("reset");
resetButton.addEventListener("click", function(event) {
  if (event.target.id === "reset") {
    board = ["", "", "", "", "", "", "", "", ""];
    winner = null;
    for (let i = 0; i < squares.length; i++) {
      squares[i].textContent = "";
    }
    document.getElementById("winner").textContent = "";
  }
});
