import { TURNS } from "./TicTacToeConstants"
import { Square } from "./TicTacToeSquare"

export function Turn({ turn, resetGame }) {
    return (
        <section className="turn">
            <Square isSelected={turn === TURNS.X}>
                {TURNS.X}
            </Square>
            <Square isSelected={turn === TURNS.O}>
                {TURNS.O}
            </Square>
            <div>
                <button onClick={resetGame}>Reset game</button>
            </div>
        </section>
    )
}