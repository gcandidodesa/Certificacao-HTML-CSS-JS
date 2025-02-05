import React from "react";
import "./ScoreView.css";

const ScoreView = (props) => {
  return (
    <div className={props.leading ? 'score-view-wrapper-leading-true' : ''}>
      <h2>{props.teamName}: {props.score}</h2>
    </div>
  );
}

export default ScoreView;