let readline = require("readline-sync");

const INITIAL_MARKER = " ";
const HUMAN_MARKER = "X";
const COMPUTER_MARKER = "O";

//Step 1 - Set up and display the board
function displayBoard(board) {
  console.log("");
  console.log(` ${board["1"]} | ${board["2"]} | ${board["3"]} `);
  console.log("---+---+---");
  console.log(` ${board["4"]} | ${board["5"]} | ${board["6"]} `);
  console.log("---+---+---");
  console.log(` ${board["7"]} | ${board["8"]} | ${board["9"]} `);
  console.log("");
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

//Step 2 - Player and Computer Turn
function emptySquares(board) {
  return Object.keys(board).filter((key) => board[key] === INITIAL_MARKER);
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    square = readline
      .question(`Choose a square (${emptySquares(board).join(", ")}): `)
      .trim();
    if (emptySquares(board).includes(square)) break;

    console.log("Invalid entry.");
  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);

  let square = emptySquares(board)[randomIndex];
  board[square] = COMPUTER_MARKER;
}

let board = initializeBoard();
displayBoard(board);

//Step 3 - The Main Game Loop
function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return false;
}

while (true) {
  playerChoosesSquare(board);
  computerChoosesSquare(board);

  console.clear();
  displayBoard(board);

  if (someoneWon(board) || boardFull(board)) break;
}
