const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';
/** These variables store the CSS classes for X and O (circle) marks, respectively. They are used to apply the corresponding class to the cells.*/

const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6] 
]
/** This variable is an array of arrays that represents the winning combinations in the tic-tac-toe game. Each inner array contains three indices that correspond to the cells forming a winning combination.*/


const cellElements = document.querySelectorAll('[data-cell]');
// This variable stores a NodeList of all the HTML elements that represent the cells in the tic-tac-toe board

const board = document.getElementById('board');
// This variable represents the HTML element that contains the tic-tac-toe board.

const winningMessageElement = document.getElementById('winningMessage')
const winningMessageTextElement = document.querySelector('[data-winning-message-text]');
//These variables store references to HTML elements responsible for displaying the winning message.

const restartButton = document.getElementById('restartButton');
//This variable holds a reference to the HTML button element used to restart the game.

let circleTurn;
//This variable is a Boolean flag indicating whether it's currently the turn of the circle (O) player.

startGame()
//This function call is responsible for setting up the board.

restartButton.addEventListener('click', startGame);
//Adding click typer event Listener.

function startGame(){
    circleTurn = false
    cellElements.forEach(cell => {
        cell.classList.remove(X_CLASS)
        cell.classList.remove(CIRCLE_CLASS)
        cell.removeEventListener('click', handelClick)
        cell.addEventListener('click', handelClick, {once: true});
    })
    setBoardHoverClass()
    winningMessageElement.classList.remove('show')
    /**Description: This function is responsible for initializing the game at the start or when the restart button is clicked. It resets the board, removes any winning message, and sets up event listeners for cell clicks.*/
}

function handelClick(e){
    const cell = e.target;
    //The event parameter e is used to access the clicked cell element through e.target.
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
    placeMark(cell, currentClass);
    if(checkWin(currentClass)){
        endGame(false)
    }else if(isDraw()){
        endGame(true)
    } else {
        swapTurns()
        setBoardHoverClass()
    } 
    /** This function is executed when a cell is clicked. It places the current player's mark in the clicked cell, checks for a win or draw condition, and updates the game state accordingly.*/
}

function endGame(draw){
    if(draw){
        winningMessageTextElement.innerText = 'Draw!'
    }else{
        winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`
    }
    winningMessageElement.classList.add('show');
    /**This function is called when the game ends either in a draw or with a winner. It displays the appropriate winning message or a draw message on the screen. */
}

function isDraw(){
    return [...cellElements].every(cell => {
        return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
    })
    //This function checks if the game ended in a draw by verifying if all the cells are filled with X or O marks.
}

function placeMark(cell, currentClass){
    cell.classList.add(currentClass);
    //adding current class to the cell.
}


function swapTurns(){
    circleTurn = !circleTurn;
    //Switches Turn
}


function setBoardHoverClass(){
    board.classList.remove(X_CLASS)
    board.classList.remove(CIRCLE_CLASS)
    if(circleTurn){
        board.classList.add(CIRCLE_CLASS)
    }else{
        board.classList.add(X_CLASS)
    }
    //The setBoardHoverClass function is responsible for updating the visual appearance of the tic-tac-toe board based on the current player's turn. It ensures that the hover effect matches the mark class of the player whose turn it is.
}

function checkWin(currentClass){
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass)
        })
    })
    /**This is a very Interesting function.
     * The checkWin function is responsible for determining whether the current player has achieved a winning combination in the tic-tac-toe game. It takes the currentClass as a parameter, which represents the mark class (X or O) of the current player.
     * 
     * Here's a detailed explanation of the function:
     * 
     * 1. return WINNING_COMBINATIONS.some(combination => { ... }): The WINNING_COMBINATIONS array contains arrays representing the various winning combinations in the game. The some method is used to iterate over each combination and check if any of them satisfy the condition specified in the callback function.
     * 
     * 2. combination.every(index => { ... }): For each combination in the WINNING_COMBINATIONS array, the every method is used to check if every index in that combination satisfies the condition specified in the callback function.
     * 
     * 3. return cellElements[index].classList.contains(currentClass): For each index in the combination, the function checks whether the corresponding cell element (retrieved from the cellElements NodeList) contains the currentClass in its list of CSS classes. If all the cells in a particular combination have the currentClass, it indicates that the player has achieved a winning combination.
     * 
     * 4. Returning the Result: If any of the combinations satisfy the condition of having all the cells with the currentClass, the some method returns true, indicating that the current player has won. If none of the combinations satisfy the condition, the some method returns false, indicating that the current player has not won yet.
     * 
     * In summary, the checkWin function iterates over the winning combinations and checks if the current player's mark class (currentClass) is present in all the cells of any combination. If a winning combination is found, it returns true, signifying that the current player has won the game. Otherwise, it returns false, indicating that the current player has not yet achieved a winning combination.
     */
}