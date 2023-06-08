export const saveGameToLocalStorage = ({ board, turn }) => {
    localStorage.setItem("board", JSON.stringify(board))
	localStorage.setItem("turn", JSON.stringify(turn))
}

export const resetGameLocalStorage = () => {
    window.localStorage.removeItem("board")
    window.localStorage.removeItem("turn")
}