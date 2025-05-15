const board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
const cells = document.querySelectorAll('.cell');
const turnDisplay = document.getElementById('turn');
const modal = document.getElementById('modal');
const resultDisplay = document.getElementById('result');

cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

function handleCellClick(e) {
    const index = e.target.dataset.index;

    if (board[index] === '' && !checkWinner()) {
        board[index] = currentPlayer;
        e.target.textContent = currentPlayer;
        e.target.classList.add(currentPlayer.toLowerCase());

        if (checkWinner()) {
            showResult(`${currentPlayer} Wins!`);
        } else if (board.every(cell => cell !== '')) {
            showResult("It's a Draw!");
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            turnDisplay.textContent = `Player ${currentPlayer}'s Turn`;
            turnDisplay.classList.remove('x', 'o');
            turnDisplay.classList.add(currentPlayer.toLowerCase());
        }
    }
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return board[a] !== '' && board[a] === board[b] && board[b] === board[c];
    });
}

function showResult(message) {
    resultDisplay.textContent = message;
    modal.style.display = 'flex';
}

function restartGame() {
    board.fill('');
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('x', 'o');
    });
    currentPlayer = 'X';
    turnDisplay.textContent = `Player ${currentPlayer}'s Turn`;
    turnDisplay.classList.remove('o');
    turnDisplay.classList.add('x');
    modal.style.display = 'none';
}