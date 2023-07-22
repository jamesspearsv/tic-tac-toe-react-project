

export default function Status(props) {
    const winner = props.checkWinner()
    let status

    if (winner) {
      status = "The Winner is " + winner
    } else if (props.turnCount === 9) {
      status = "Cat! Game over."
    } else {
      status = props.isXTurn ? "Current turn: X" : "Current Turn: O"
    } 

    return (
    <div>
        <p>{ status }</p>
    </div>
    )
}