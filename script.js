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

//try to change a cell from empty to x then o;
const cell1 = document.querySelector(".top.left");
cell1.addEventListener('click', cellFiller)

function cellFiller(z) {
  if (z.target.innerText === '') {
    z.target.innerText = whosTurnIsIt;
    itsYourTurn(); 
  }
  
}

function itsYourTurn() {
  if (whosTurnIsIt === 'X') {
    whosTurnIsIt = 'O';
  } else if (whosTurnIsIt === 'O') {
    whosTurnIsIt = 'X';
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