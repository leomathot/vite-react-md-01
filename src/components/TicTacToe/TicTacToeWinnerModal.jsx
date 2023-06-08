import { Square } from "./TicTacToeSquare"

export function WinnerModal({ winner, resetGame }) {
    if (winner === null) return null
    const winnerText = winner === false ? "Tie!" : "wins!"

    return (
        <section className="winner">
            <div className="text">
                <div>
                    {
                        winner && <Square>{winner}</Square>
                    }
                    <h2>
                        {winnerText}
                    </h2>
                </div>
                <button onClick={resetGame}>Play again</button>
            </div>
        </section>
    )
}