import { useState } from 'react'
import './App.css'
import GameCard from './compnents/GameCards/GameCard'

function App() {

  const [state, setState] = useState({
    isXNext: false
  })
  const [board, setBoard] = useState(Array(9).fill(null))
  
  function updateBoard(index) {
    const newBoard = board.slice()
    if (state.isXNext) {
      newBoard[index] = "O"
    } else {
      newBoard[index] = "X"
    }

    setBoard(newBoard)
  }

  const gameBoard = () => {
      const rows = []
      var index = -1
  
      // Create and add each table tow to const rows
      for (var r = 0; r < 3; r++) {
        const row = []
        // Create and add each row cell to const row
        for (var c = 1; c <= 3; c++) {
          index += 1
          row.push(
            <GameCard 
              index={index}
              value={board[index]}
              updateBoard={updateBoard}
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
          <tbody>
            { rows }
          </tbody>
        </table>
      )
    }

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <div id='game-board-container'>
          { gameBoard() }
      </div>
    </div>
  )
}

export default App
