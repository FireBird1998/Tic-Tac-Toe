# Tic-Tac-Toe

This repository contains the code for a Tic-Tac-Toe game implemented using HTML, CSS, and JavaScript.

## Files

- [index.html](index.html): Contains the HTML structure of the game board and winning message elements.
- [styles.css](styles.css): Contains the CSS styling for the game board and winning message.
- [script.js](script.js): Contains the JavaScript logic for the game, including handling user clicks, checking for a win, and updating the game state.

## JavaScript Logic

The `script.js` file contains the following JavaScript functions:

- `startGame()`: Initializes the game by setting up the game board and event listeners for user clicks.
- `handelClick(e)`: Handles the click event on a game cell, placing a mark and checking for a win or draw.
- `endGame(draw)`: Ends the game by displaying the winning message or a draw message.
- `isDraw()`: Checks if the game ended in a draw.
- `placeMark(cell, currentClass)`: Places a mark (X or O) on a game cell.
- `swapTurns()`: Swaps the current player's turn.
- `setBoardHoverClass()`: Updates the CSS class of the game board to indicate the current player's turn.
- `checkWin(currentClass)`: Checks if the current player has won the game by matching any of the winning combinations.


## Instructions

To play the Tic-Tac-Toe game, follow this link 

https://firebird1998.github.io/Tic-Tac-Toe/




