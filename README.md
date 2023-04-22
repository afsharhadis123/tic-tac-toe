# tic-tac-toe

 <h1>  My project summery : </h1>

<img src="https://images.unsplash.com/photo-1668901382969-8c73e450a1f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="tic-tac-toe" class="">
  
<h2> 🙋‍♀️ Do you want play with me<a href="http://https://afsharhadis123.github.io/tic-tac-toe/" class=""> click here !</a> ? </h2>

-----------------------------------------------------------------------------------------------------------

<h1> 📝 what should I do !? : </h1> 

<h3> 💰 my keywords :<h3>

- Two player : X & O
- The game's board : played on a 3*3 grid square
- the goal is to place three of your symbols (either "X" or "O") in a either horizontally, vertically, or diagonally.
-  first player to place three symbols in a straight is**win**else is**tie** !
- game reset.
- winner message !
- reset buttom 

<h2> ✏ my plan's steps :</h2>

<img src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80" alt="" class="">


 -  [X] First, I define three variables: playerX, playerO, and winner. playerX and playerO represent the X and O players respectively, and winner is used to keep track of who won the game.

 -  [X] I also define an array called board that represents the state of the Tic Tac Toe board. Each element of the board array represents a square on the board, and is initially set to an empty string.

 -  [X] I use the querySelectorAll method to select all the squares on the board, and assign them to the squares variable.
 -  [X] I set the currentPlayer variable to playerX, indicating that X will go first.

 -  [X] I use a for loop to iterate over all the squares on the board, and add a click event listener to each square. When a square is clicked, the event listener checks if the square has already been clicked (board[i] !== '') or if the game has already been won (winner !== null). If either of these conditions are true, the function returns without doing anything.

 -  [X] If the square has not already been clicked and the game has not been won, the function sets the value of the clicked square to the currentPlayer (board[i] = currentPlayer;), and displays the currentPlayer's symbol in the square (document.getElementById(i).textContent = currentPlayer;).

 -  [X] The function then calls the checkWin function to check if the currentPlayer has won the game.

 -  [X] If the currentPlayer has won the game, an alert is displayed announcing the winner (alert("Player " + winner + " wins!");), and the winner variable is set to the value of the currentPlayer.
 
 <img src="https://images.unsplash.com/photo-1578269174936-2709b6aeb913?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="" class="">

 -  [X] If the game has not been won, the currentPlayer is switched to the other player.

 -  [X] The checkWin function checks if the game has been won by checking all possible winning combinations on the board. If a winning combination is found, the function sets the winner variable to the symbol of the winning player (winner = board[i];).

 -  [X] If no winning combination is found and there are no empty squares left on the board, the function sets the winner variable to "tie".

 -  [X] The resetGame function is called when the "Reset" button is clicked. This function sets the winner variable to null, resets the board array to an array of empty strings, and sets the textContent of all the squares on the board to an empty string (squares[i].textContent = '';).

 -  [X] The resetBoard function is called when the "Play Again" button is clicked. This function resets the board array to an array of empty strings, sets the textContent of all the squares on the board to an empty string, sets the winner variable to null, and sets the currentPlayer variable back to playerX.

    <img src="https://plus.unsplash.com/premium_photo-1671493286804-92cbe5ed1b6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="end" class="">



