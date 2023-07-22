import { useState } from "react";

export default function GameCard(props) {
    const [state, setState] = useState({
        cardValue: "",
        currentTurn: props.currentTurn
    })

    function handleClick(event) {
        if (state.cardValue === "x") {
            setState({...state, cardValue: "o"})
        } 
        
        if (state.cardValue === "o") {
            setState({...state, cardValue: "x"})
        } 
        
        if (state.cardValue === "") {
            setState({...state, cardValue: props.currentTurn})
        } 

        // Change turn after every click
        props.changeTurn()
    }




    if (state.cardValue === "o") {
        return (
            <td onClick={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="125" height="125" fill="black" class="bi bi-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                </svg>
            </td>
        )
    } else if (state.cardValue === "x") {
        return (
            <td onClick={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="125" height="125" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
            </td>
        )
    } else {
        return <td onClick={handleClick}></td>
    }
}