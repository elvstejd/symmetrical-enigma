const gameBoard = (function() {
    let  _gameBoard = ["","","","","","","","",""];

    const markCell = (index, markType) => {
        if (_gameBoard[index] != "") {
            return false;
        }
        _gameBoard[index] = markType === 1 ? "X" : "O";
        Game.render(_gameBoard);

        return true;
    }

    const clearBoard = () => {
        // replace with new array
        _gameBoard = ["","","","","","","","",""];
        Game.resetBoard();
    }

    const equals3 = (a, b, c) => {
        return (a === b && b === c && a != "");
    }

    const checkWin = () => {
        const firstHorizontalWin = equals3(_gameBoard[0], _gameBoard[1], _gameBoard[2]);
        const secondHorizontalWin = equals3(_gameBoard[3], _gameBoard[4], _gameBoard[5]);
        const thirdHorizontalWin = equals3(_gameBoard[6], _gameBoard[7], _gameBoard[8]);

        const firstVerticalWin = equals3(_gameBoard[0], _gameBoard[3], _gameBoard[6]);
        const secondVerticalWin = equals3(_gameBoard[1], _gameBoard[4],_gameBoard[7]);
        const thirdVerticalWin = equals3(_gameBoard[2], _gameBoard[5], _gameBoard[8]);

        const firstDiagonalWin = equals3(_gameBoard[0], _gameBoard[4], _gameBoard[8]);
        const secondDiagonalWin = equals3(_gameBoard[2], _gameBoard[4], _gameBoard[6]);

        if (firstHorizontalWin) {
            Game.winColorizer('fhw');
        } else if (secondHorizontalWin) {
            Game.winColorizer('shw');
        } else if (thirdHorizontalWin) {
            Game.winColorizer('thw');
        } else if (firstVerticalWin) {
            Game.winColorizer('fvw');
        } else if (secondVerticalWin) {
            Game.winColorizer('svw');
        } else if (thirdVerticalWin) {
            Game.winColorizer('tvw');
        } else if (firstDiagonalWin) {
            Game.winColorizer('fdw');
        } else if (secondDiagonalWin) {
            Game.winColorizer('sdw');
        }
    }

    return {
        markCell,
        clearBoard,
        checkWin,
    }
})();

const Player = (playerName, playerNumber) => {
    // name

    // 
}

const Game = ((doc) => {
    let turn = true;
    let gameIsFinished = false;
    const cells = doc.getElementsByClassName("cell");
    const playAgainBtn = doc.getElementById("play-again");

    const handleCellClick = (e) => {
        if (gameIsFinished) {
            return;
        }
        let mark = turn ? 1 : 0;
        const success = gameBoard.markCell(Number.parseInt(e.target.dataset.index), mark);
        if (success) {
            turn = !turn;
        }
        gameBoard.checkWin();
    }

    Array.from(cells).forEach(cell => {
        cell.addEventListener("click", handleCellClick);
    });

    const render = (array) => {
        array.forEach((element, index) => {
            if (element) {
                cells[index].textContent = element;
            }
        });
    }

    const resetBoard = () => {
        Array.from(cells).forEach(cell => {
            cell.textContent = "";
        });
    }

    const resetGame = () => {
        Array.from(cells).forEach(cell => {
            cell.classList.remove('win');
        });
        gameBoard.clearBoard();
        gameIsFinished = false;
    }

    const winColorizer = (winType) => {
        switch (winType) {
            case "fhw":
                cells[0].classList.add('win');
                cells[1].classList.add('win');
                cells[2].classList.add('win');
                break;
            case "shw":
                cells[3].classList.add('win');
                cells[4].classList.add('win');
                cells[5].classList.add('win');
                break;
            case "thw":
                cells[6].classList.add('win');
                cells[7].classList.add('win');
                cells[8].classList.add('win');
                break;
            case "fvw":
                cells[0].classList.add('win');
                cells[3].classList.add('win');
                cells[6].classList.add('win');
                break;
            case "svw":
                cells[1].classList.add('win');
                cells[4].classList.add('win');
                cells[7].classList.add('win');
                break;
            case "tvw":
                cells[2].classList.add('win');
                cells[5].classList.add('win');
                cells[8].classList.add('win');
                break;
            case "fdw":
                cells[0].classList.add('win');
                cells[4].classList.add('win');
                cells[8].classList.add('win');
                break;
            case "sdw":
                cells[2].classList.add('win');
                cells[4].classList.add('win');
                cells[6].classList.add('win');
                break;
        }
        gameIsFinished = true;
    }

    playAgainBtn.addEventListener("click", resetGame);

    return {
        render,
        resetBoard,
        winColorizer
    }

})(document);