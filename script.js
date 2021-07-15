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


// const gamerTag1 = prompt("Please enter gamertag for player X:"),
//       gamerTag2 = prompt("Please enter gamertag for player O:");


// A state variable
let whosTurnIsIt = 'X'; //or gamertag

//try to target the table and use event bubbling
const wholeTable = document.querySelector("table");

wholeTable.addEventListener('click', cellFiller )

// cache-ing rows

const row1 = document.querySelectorAll(".top")
      row2 = document.querySelectorAll('.mid')
      row3 = document.querySelectorAll('.bottom')
      col1 = document.querySelectorAll('.left')
      col2 = document.querySelectorAll('.center')
      col3 = document.querySelectorAll('.right')
      dia1 = document.querySelectorAll('.mid')
      dia2 = document.querySelectorAll('.mid')
      
// // need a service that does: for every cell in *row* .push() the .innerText to an array, like row1Arr;
//   // initialize arrays
// let row1Arr = [],
//     row2Arr = [],
//     row3Arr = [],
//     col1Arr = [],
//     col2Arr = [],
//     col3Arr = [],
//     dia1Arr = [],
//     dia2Arr = [];


// this is a render function
function cellFiller(mouseClick) {
  if (mouseClick.target.innerHTML === "") {
    mouseClick.target.innerHTML = whosTurnIsIt;
    isThereAWinner();  // check if there is a winner
    itsYourTurn();
  }
}

//
function itsYourTurn() {
  if (whosTurnIsIt === 'X') {
    whosTurnIsIt = 'O';
  } else if (whosTurnIsIt === 'O') {
    whosTurnIsIt = 'X';
  }
}



function isThereAWinner(threeCells) {
  //if every cell in top row is X or 
  if (
  (row1.every(cell => (cell === 'X')||(cell === 'O')))||(row2.every(cell => (cell === 'X')||(cell === 'O')))||(row3.every(cell => (cell === 'X')||(cell === 'O')))||(col1.every(cell => (cell === 'X')||(cell === 'O')))||(col2.every(cell => (cell === 'X')||(cell === 'O')))||(col3.every(cell => (cell === 'X')||(cell === 'O')))||(dia1.every(cell => (cell === 'X')||(cell === 'O')))||(dia2.every(cell => (cell === 'X')||(cell === 'O'))) ) {
  const isAWinner = whosTurnIsIt;
  console.log(`${isAWinner} is the winner!!!`);
  } 
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