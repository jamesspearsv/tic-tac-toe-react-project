import { useState } from 'react'
import './App.css'
import GameCard from './compnents/GameCards/GameCard'

function App() {
  const [state, setState] = useState({
    currentTurn: 'x'
  })

  function changeTurn() {
    alert('change turn!')
  }

  function drawGameBoard(boardSize) {
    const rows = []
    // Create and add each table tow to const rows
    for (var r = boardSize; r > 0; r--) {
      const row = []
      // Create and add each row cell to const row
      for (var c = boardSize; c > 0; c--) {
        row.push(
          <GameCard 
            currentTurn={state.currentTurn}
            changeTurn={changeTurn}
          />
        )
      }

      rows.push(
        <tr>
          {row}
        </tr>
      )
    }

    // Return completed table
    return (  
      <table>
        { rows }
      </table>
    )

  }
  
  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <p>Current Turn: {state.currentTurn}</p>
      <div id='game-board-container'>
          { drawGameBoard(3) }
      </div>
    </div>
  )
}

export default App
