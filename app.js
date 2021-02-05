const gameBoard = (function() {
    let  _gameBoard = Array(9);

    const markCell = (index, markType) => {
        _gameBoard[index] = markType === 1 ? "X" : "O";
        Controller.render(_gameBoard);
    }

    const clearBoard = () => {
        // replace with new array
        _gameBoard = Array(9);
        Controller.resetBoard();
    }

    return {
        markCell,
        clearBoard,
    }
})();

const Player = (playerName, playerNumber) => {
    // name

    // 
}

const Controller = ((doc) => {
    let turn = true;
    const cells = doc.getElementsByClassName("cell");
    
    Array.from(cells).forEach(cell => {
        cell.addEventListener("click", function() {
            let mark = turn ? 1 : 0;
            gameBoard.markCell(Number.parseInt(this.dataset.index), mark);
            turn = !turn;
        });
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

    const rightTurn = () => {

    }

    const leftTurn = () => {

    }

    return {
        render,
        resetBoard,
    }

})(document);

const Game = (() => {
    console.log("Hello there");
})();