import { useState } from "react";

export default function GameCard(props) {

    function handleClick() {
        props.updateBoard(props.index)
    }

    const size = 70

    if (props.value == "O") {
        return (
            <td onClick={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size}  fill="currentColor" className="bi bi-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                </svg>
            </td>
        )
    } else if (props.value == "X") {
        return (
            <td onClick={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width={size}  height={size}  fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
            </td>
        )
    } else {
        return <td onClick={handleClick}></td>
    }
}