import { useState } from 'react'
import './App.css'
import GameCard from './compnents/GameCards/GameCard'

function App() {
  const [state, setState] = useState({
    currentTurn: 'x',
    turnCount: 0
  })

  const [board, setBoard] = useState(Array(9).fill(null))

  // Change current turn
  const changeTurn = (cardValue, index) => {
    // console.log(state.board)
    if (state.currentTurn === 'x') {
      setState({...state, currentTurn: 'o'})
    } else (
      setState({...state, currentTurn: 'x'})
    )
    
    // Update turn count
    setState(({...state}) => ({...state, turnCount: state.turnCount += 1
    }))
  }
  
  const updateBoard = (index) => {
    
    const newBoard = board.toSpliced(index, 1, state.currentTurn)
    setBoard(newBoard)
  }
  
  function checkWin () {
    const WINNINGLINES = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    WINNINGLINES.map(line => {
      const [a, b, c] = line
      if (board[a] === null || board[b] === null || board[c === null]) {
        return false
      }

      if (board[a] === board[b] && board[b] === board[c]) {
        console.log("Winner!")
        return true
      }
    })
  }

  function drawGameBoard() {
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
            currentTurn={state.currentTurn}
            index={index}
            value={board[index]}
            changeTurn={changeTurn}
            updateBoard={updateBoard}
            checkWin={checkWin}
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
      <p>Current Turn: {state.currentTurn.toUpperCase()}</p>
      <p>Turn Count: { state.turnCount }</p>
      <div id='game-board-container'>
          { drawGameBoard() }
      </div>
    </div>
  )
}

export default App
