import React, { Component } from "react";
import calculateWinner from "../calculateWinner";
import { PreStart, DidStart } from "./game-steps";

export default class GamePanel extends Component {
  render() {
    return (
      <main className="main">
        {this.props.step <= 1 ? this.display(PreStart) : this.display(DidStart)}
      </main>
    );
  }

  shouldComponentUpdate(prevP) {
    return prevP.step === this.props.step ? false : true;
  }

  display = (Comp) => (
    <Comp
      handlePick={this.props.handlePick}
      handleStep={this.props.handleStep}
      pick={this.props.pick}
      step={this.props.step}
    />
  );

  componentDidUpdate() {
    if (this.props.step === 4) {
      let result = calculateWinner(this.props.pick);
      this.props.handleScore(result);
    }
  }
}
