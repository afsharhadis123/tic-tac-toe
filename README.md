# Tic-Tac-Toe

<img src="https://plus.unsplash.com/premium_photo-1671493286804-92cbe5ed1b6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="tic-tac-toe" class="img1">
  
<h2> 🙋‍♀️ Do you want to have fun ...?<a href="https://afsharhadis123.github.io/tic-tac-toe/" class="">  💻 click here</a> to see my live project</h2>

-----------------------------------------------------------------------------------------------------------

<h1> 📝 About : </h1> 
 This project is about the development of the tic tac toe game using javaScript, CSS and HTML. This game is for two players. One player plays X and another player plays O. If a player gets three marks in a row horizontally, vertically or diagonally, then that player wins the game.

<h3> 💰 My keywords :<h3>

- Two player : X & O
- The game's board : played on a 3*3 grid square.
- The goal is to place three of my symbols (either "X" or "O") in a either horizontally, vertically, or diagonally.
- First player to place three symbols in a straight is win else is tie!
- Game reset.
- Winner message!
- Reset button. 

<img src="https://user-images.githubusercontent.com/129059226/233876900-f2162871-b01d-4537-ac65-fc3a0b8083a5.png" width="500" height="400"  text-align: center;>


<h2> ✏ My planning :</h2>

 -  [X] First, I define three variables: playerX, playerO, and winner. playerX and playerO represent the X and O players respectively, and winner is who win the game.

 -  [X] I also define an array called board that represents of the Tic Tac Toe board. Each element of the board array represents a square on the board, and is firstly set to an empty string.

 -  [X] I use the querySelectorAll method to select all the squares on the board, and give them squares variable.

 -  [X] I set the currentPlayer variable to playerX, which means that X will go first.

 -  [X] I use a for loop to iterate over all the squares on the board, and add a click event listener to each square. When a square is clicked, the event listener checks if the square has already been clicked (board[i] !== '') or if the game has already been won (winner !== null). If either of these conditions are true, the function returns without doing anything.

 -  [X] If the square has not already been clicked and the game has not been won, the function sets the value of the clicked square to the currentPlayer (board[i] = currentPlayer;), and displays the currentPlayer's symbol in the square (document.getElementById(i).textContent = currentPlayer;).

 -  [X] The function then calls the checkWin function to check if the currentPlayer has won the game. (It was really challenging part 😱)

 -  [X] If the currentPlayer has won the game, a consol is shown to call the 🏆 winner (consol.log("Player " + winner  + " wins!");), and the winner variable is set to the value of the currentPlayer.

 -  [X] If the game has not been won, the currentPlayer is switched to the other player.

 -  [X] The checkWin function checks if the game has been won by checking all possible winning combinations on the board. If a winning combination is found, the function sets the winner variable to the symbol of the winning player (winner = board[i];).( 😭 I stock in this step for a day)

 -  [X] If no winning combination is found and there are no empty squares left on the board, the function sets the winner variable to "tie".(I had a 💩 bug in there but I fixed it)

 -  [X] The resetGame function is called when the "Reset" button is clicked. This function sets the winner variable to null, resets the board array to an array of empty strings, and sets the textContent of all the squares on the board to an empty string (squares[i].textContent = '';).

<img src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80" alt="" class="img2">

<h3> 🚀 Cool tech </h3>

 - JavaScript
 - HTML 
 - CSS
 - Animation for changing text color
 

<h3> 😱 Bugs to fix 💩 </h3>

 - The checkWin function should be changed. It doesn't stop after a player won.
 - The winner loop to be changed. 
 - The winning combination doesn't stop when all squares are filled.


<h3> 😭 Lessons learnt </h3> 
 <p> I have learnt to use open and close brackets at the right place. For example, in checkWin function I couldn't get the right answer because I closed the loop early.</p>

 <p> Use return; for breaking tie loop. It was challenging for me.</p>


 <h3> ✅  Future features </h3>
 
  - Add computer as second player
  - Use more animation






