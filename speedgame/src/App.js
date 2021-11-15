import React, { Component } from "react";
import "./App.css";
import Circle from "./Circle";
import { circles } from "./circles";
class App extends Component {
  state = {};

  // onClick = () => {
  //   this.setState = {
  //     score: 100000,
  //   };
  // };
  render() {
    return (
      <div>
        <h1>Speed Game</h1>
        <h4>Your Score: {this.state.score}</h4>
        <div className="circles">
          {circles.map((circle) => (
            <Circle key={circle.id} id={circle.id} color={circle.color} />
          ))}
        </div>
        <div>
          <button>Start</button>
          <button>Stop</button>
        </div>
      </div>
    );
  }
}
export default App;
