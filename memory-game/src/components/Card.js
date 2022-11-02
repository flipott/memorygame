import React from "react";

export default function Card(props) {
    return (
        <button className="card" onClick={() => props.handleCardClick(props.number)}>
            {props.number}
        </button>
    )
}