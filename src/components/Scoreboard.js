import React from "react";

export default function Scoreboard(props) {
    return (
        <div className="scoreboard">
            <div>
                <div><strong>Current Score:</strong></div>
                <div><strong>Best Score:</strong></div>
            </div>
            <div>
                <div>{props.score.current}</div>
                <div>{props.score.best}</div>
            </div>
        </div>
    )
}