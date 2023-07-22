import { useState } from 'react'
import './App.css'
import GameCard from './compnents/GameCards/GameCard'
import Status from './compnents/Status'

export default function App() {

  // App States
  const [isXTurn, setIsXTurn] = useState(true)
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turnCount, setTurnCount] = useState(0)
  
  // App functions
  function updateBoard(index) {

    if (board[index] != null || checkWinner()) {
      return null
    } else {
      const newBoard = board.slice()
  
      if (isXTurn) {
        newBoard[index] = "X"
      } else {
        newBoard[index] = "O"
      }

      setBoard(newBoard)
      setIsXTurn((isXTurn) => (!isXTurn))
      setTurnCount((turnCount) => (turnCount += 1))
    }
  }

  function checkWinner() {
    console.log("checking")
    const WINNINGLINES = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ]

    for (let i = 0; i < WINNINGLINES.length; i++) {

      const [a,b,c] = WINNINGLINES[i]
      
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        console.log('winner!')
        return board[a]
      }
    }
      return null  
  }

  function resetGame() {
    setIsXTurn(true)
    setBoard(Array(9).fill(null))
    setTurnCount(0)
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
              key={index}
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
      <Status 
      checkWinner={checkWinner}
      turnCount={turnCount}
      isXTurn={isXTurn}
      />
      <button onClick={resetGame}>Reset</button>
    </div>
  )
}