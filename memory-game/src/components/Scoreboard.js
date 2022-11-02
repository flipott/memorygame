import React from "react";

export default function Scoreboard(props) {
    return (
        <div className="scoreboard">
            <div>Current Score: {props.score.current}</div>
            <div>Best Score: {props.score.best}</div>
        </div>
    )
}