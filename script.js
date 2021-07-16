/*  Busines/Application/Real world Logic

how do you play a game/

(board clears/appears) set up the board

decide who goes first(each player decides their gamertag)

make a move

notify ""name"your turn"

Once board is full check if somebody won



check is there a winner? repeat last two until done

******celebrate!!!!!!!
*/
//register gamertag
let button = document.querySelector('button');

// const gamerTag1 = prompt("Please enter gamertag for player X:"),
//       gamerTag2 = prompt("Please enter gamertag for player O:");

button.addEventListener('click', resetGame);

function resetGame() {
  location.reload();
}

// A state variable
let whosTurnIsIt = 'X'; //or gamertag



//  target the table and use event bubbling
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
  // an array to use every method
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































/*
---------MVC---------

MVC used in Django, rails mostly full stack

Model - represents objectrs in the world/application domain
(Template) - View - what the user sees by the web page (html/css)
(viewLogic) - Controller - dictates Logic


Model are JS objects on ful l stack they connect to a DB like MySQL tables.

one object is a table My MySQL (sql, mongodb)


Ruby on Rails =  MVC 
Django python =  MTV

Models : objects in our appears


class Board {
  constructor
  cell {
    index: just a nuumber like 1 (from 1 to 9
   // isItCaptured: null,X,O) <-- 
  }

}



class Buttons {

}

class Player {

}

function viewLogic() {

// Initialize the board
function initialize() {
  //creating board cells
  //add event listeners <-- when everything created
    //listens for a click, create action like a capture.
}




}










*/