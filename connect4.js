
var turn = "X";
var board = [];
var gameOver = false;

function initBoard() {
    for (var i = 0; i < 4; i++) {
        board.push(new Array(4).fill(""));
    }
}

function updateBoard() {
    var boardDiv = document.getElementById("board");
    boardDiv.innerHTML = "";
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            var cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.addEventListener("click", function() {
                if (!gameOver) {
                    var row = parseInt(this.dataset.row);
                    var col = parseInt(this.dataset.col);
                    if (isValidMove(row, col)) {
                        makeMove(row, col);
                        checkWin(row, col);
                    }
                }
            });
            if (board[i][j] === "X") {
                cell.style.backgroundColor = "#0000Cd";
            } else if (board[i][j] === "O") {
                cell.style.backgroundColor = "#Cd0000";
            }
            boardDiv.appendChild(cell);
        }
    }
}

function isValidMove(row, col) {
    return board[row][col] === "";
}

function makeMove(row, col) {
    board[row][col] = turn;
    updateBoard();
    toggleTurn();
}

function toggleTurn() {
    turn = turn === "X" ? "O" : "X";
}

function resetGame() {
    turn = "X";
    board = [];
    gameOver = false;
    initBoard();
    updateBoard();
}

initBoard();
updateBoard();

document.getElementById("resetBtn").addEventListener("click", function() {
    resetGame();
});

function checkWin(row, col) {
    var player = board[row][col];
    for (var i = 0; i < 4; i++) {
        if (col - i >= 0 && col - i + 3 < 4 &&
            board[row][col - i] === player &&
            board[row][col - i + 1] === player &&
            board[row][col - i + 2] === player &&
            board[row][col - i + 3] === player) {
            announceWinner(player);
            return;
        }
    }
       for (var i = 0; i < 4; i++) {
        if (row - i >= 0 && row - i + 3 < 4 &&
            board[row - i][col] === player &&
            board[row - i + 1][col] === player &&
            board[row - i + 2][col] === player &&
            board[row - i + 3][col] === player) {
            announceWinner(player);
            return;
        }
    }
        for (var i = 0; i < 4; i++) {
        if (row - i >= 0 && row - i + 3 < 4 &&
            col - i >= 0 && col - i + 3 < 4 &&
            board[row - i][col - i] === player &&
            board[row - i + 1][col - i + 1] === player &&
            board[row - i + 2][col - i + 2] === player &&
            board[row - i + 3][col - i + 3] === player) {
            announceWinner(player);
            return;
        }
    }
        for (var i = 0; i < 4; i++) {
        if (row - i >= 0 && row - i + 3 < 4 &&
            col + i < 4 && col + i - 3 >= 0 &&
            board[row - i][col + i] === player &&
            board[row - i + 1][col + i - 1] === player &&
            board[row - i + 2][col + i - 2] === player &&
            board[row - i + 3][col + i - 3] === player) {
            announceWinner(player);
            return;
        }
    }
    var tie = true;
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (board[i][j] === "") {
                tie = false;
                break;
            }
        }
    }
    if (tie) {
        announceTie();
    }
}

function announceWinner(player) {
    gameOver = true;
    var statusLabel = document.getElementById("statusLabel");
    statusLabel.textContent = "Player " + player + " wins!";
}

function announceTie() {
    gameOver = true;
    var statusLabel = document.getElementById("statusLabel");
    statusLabel.textContent = "It's a tie!";
}
