import logo from "./logo.svg";
import React from "react";
import "./App.css";

const Game = (props) => {
  let x = props.x;
  let y = props.y;
  let z = props.z;
  if (x === y && y === z) {
    return (
      <>
        <div className="main">
          <h1 >
            {x} {y} {z}
          </h1>
          <h1 style={{ color: "green" }}>match</h1>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="main">
          <h1>
            {x} {y} {z}
          </h1>
          <h1 style={{ color: "red" }}> not match</h1>
        </div>
      </>
    );
  }
};

function App() {
  return (
    <>
      <h1 className="head-section">
        🎰<span>slot machine game</span>🎰
      </h1>
      <div className="center">
        <Game x="😎" y="😎" z="😎" />
        <Game x="🎈" y="🎗" z="🎁" />
        <Game x="🎈" y="🎁" z="🎁" />
      </div>
    </>
  );
}

export default App;
