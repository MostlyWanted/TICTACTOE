let button = document.querySelector('button');

button.addEventListener('click', resetGame);

function resetGame() {
  location.reload();
}

// A state variable
let whosTurnIsIt = 'X'; 



// Target the table and use event bubbling
const wholeTable = document.querySelector("table");

wholeTable.addEventListener('click', cellFiller )


const row1 = document.querySelectorAll(".top"),
      row2 = document.querySelectorAll('.mid'),
      row3 = document.querySelectorAll('.bottom'),
      col1 = document.querySelectorAll('.left'),
      col2 = document.querySelectorAll('.center'),
      col3 = document.querySelectorAll('.right'),
      dia1 = document.querySelectorAll('.dia1'),
      dia2 = document.querySelectorAll('.dia2'),
      turn = document.querySelector('span'),
      message = document.querySelector('h4');


const winningCombinations = [
  row1, 
  row2,
  row3,
  col1,
  col2,
  col3,
  dia1,
  dia2,
]


function cellFiller(mouseClick) {
  if (mouseClick.target.innerHTML === "") {
    mouseClick.target.innerHTML = whosTurnIsIt;
    winningCombinations.forEach( (combo) => {
      isThereAWinner(combo);
    });
    itsYourTurn();
  }
}


function itsYourTurn() {
  if (whosTurnIsIt === 'X') {
    whosTurnIsIt = 'O';
    turn.innerText = 'O';
  } else if (whosTurnIsIt === 'O') {
    whosTurnIsIt = 'X';
    turn.innerText = 'X';
  }
}



function isThereAWinner(threeCellsInARow) {
  // an array to use the .every() method
  let ourThreeCells = [];
  threeCellsInARow.forEach(cell => {
    if ((cell.innerText === 'X')||(cell.innerText === 'O')) {
      ourThreeCells.push(cell.innerText);
      if (ourThreeCells.length ===3){
        if (ourThreeCells.every( cell => (cell === 'X'))) {
          wholeTable.removeEventListener("click", cellFiller);
          highlightWinningCells(threeCellsInARow)
          winMsg()
        }  else if (ourThreeCells.every( cell => (cell === 'O'))) {
          wholeTable.removeEventListener("click", cellFiller);
          highlightWinningCells(threeCellsInARow)
          winMsg()          
        }
      }
    }
  })
}



function highlightWinningCells(winCells) {
  winCells.forEach( (cell) => {
    cell.setAttribute('style','color: cyan')          
  })  
}

function winMsg() {
  message.innerText = `${whosTurnIsIt}  WON !!!`;
}

