let boxes = document.querySelectorAll('.box');
let rst = document.querySelector('#reset-btn');
let newGame = document.getElementById('newGame');
let msg = document.querySelector('.win');
let hidCon = document.querySelector('.hidnVar');


let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
]

const resetGame = () => {
  turnO = true;
  boxEnabled();
  hidCon.classList.add('hide');
}
const boxDisabled = () => {
  for(let box of boxes) {
    box.enabled = true;
  }
};

const boxEnabled = () => {
  for(let box of boxes) {
    box.disabled = false;
    box.innerHTML = '';
  }
};

boxes.forEach((box) => {
  box.addEventListener('click', () => {
    console.log(' box was clicked');
    if (turnO) {  // turnO === true same as turnO
      box.innerHTML = 'O';  //player O
      turnO = false;
    } else {
      box.innerHTML = 'X';
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});


const showWinner = (winner) => {
 
  hidCon.classList.remove('hide');
  boxDisabled();
}
const checkWinner = () => {
  for(pattern of winPatterns) {
      let pos1val = boxes[pattern[0]].innerHTML;
      let pos2val = boxes[pattern[1]].innerHTML; 
      let pos3val = boxes[pattern[2]].innerHTML;

      if (pos1val && pos2val && pos3val != '') {
        if (pos1val === pos2val && pos2val === pos3val) {
          console.log(`winner `, pos1val);
          showWinner(pos1val);
        }
      }

  }
};

rst.addEventListener('click', resetGame);
newGame.addEventListener('click', resetGame);
