const newGameBtnId = 'new-game-btn-id';
const gameStatusId = 'game-status-id';
const circlePiece = 'piece--circle';
const xPiece = 'piece--x';

let gameRunning;
let turnCount = 0;

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8]
];


document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.cell').forEach(el => el.addEventListener('click', handleCellClick));
  gameRunning = true;

  document.getElementById(newGameBtnId).onclick = () => {
    clearBoard();
  };
});

function handleCellClick(el) {
  let status = document.getElementById(gameStatusId);
  let target = el.target;

  if (target.dataset.value !== '' || !gameRunning) {
    return;
  }

  if (turnCount % 2 === 0) {
    // target.innerText = 'x';
    drawX(target);
    target.dataset.value = 'x';
    status.innerText = 'Player O\'s Turn';
  } else {
    // target.innerText = 'o';
    drawO(target);
    target.dataset.value = 'o';
    status.innerText = 'Player X\'s Turn';
  }

  if (checkForWinner()) {
    if (turnCount % 2 === 0) {
      status.innerText = 'Player X Wins!';
    } else {
      status.innerText = 'Player O Wins!';
    }
    gameRunning = false;
    return;
  }

  if (turnCount >= 8) {
    status.innerText = 'It\'s a Draw!';
    gameRunning = false;
    return;
  }

  turnCount++;
}

function checkForWinner() {
  let winner = false;

  const positions = Array.from(document.querySelectorAll('.cell'));
  winningCombinations.forEach((val) => {
    const a = positions[val[0]].dataset.value;
    const b = positions[val[1]].dataset.value;
    const c = positions[val[2]].dataset.value;
    if ((a !== '') && (b !== '') && (c !== '') && (a === b) && (b === c)) {
      winner = true;
    }
  });
  return winner;
}

function clearBoard() {
  let status = document.getElementById(gameStatusId);
  this.positions = Array.from(document.querySelectorAll('.cell'));
  this.positions.forEach(position => {
    position.innerHTML = '';
    position.dataset.value = '';
  });
  turnCount = 0;
  gameRunning = true;
  status.innerText = 'Player X\'s Turn';
}

function drawX(target) {
  let x = document.createElement('div');
  x.className = xPiece;
  target.appendChild(x);
}

function drawO(target) {
  let circle = document.createElement('div');
  circle.className = circlePiece;
  target.appendChild(circle);
}
