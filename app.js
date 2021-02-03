const gameBoard = (function() {
    const _gameBoard = [
        [],
        [],
        []
    ];

    const render = () => {
        
    }

    const markCell = (x, y, value) => {
        _gameBoard[x][y] = value === 1 ? "X" : "O";
    }

})();

const Player = (playerName, playerNumber) => {
    // name

    // 
}