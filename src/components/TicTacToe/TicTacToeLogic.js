import { WINNING_MOVES } from "./TicTacToeConstants"

export  const checkWinner = (boardToCheck) => {
    for (const winningMove of WINNING_MOVES) {
        const [a, b, c] = winningMove
        if (
            boardToCheck[a] &&
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]
        ) {
            return boardToCheck[a]
        }
    }
    return null
}

export const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)
}