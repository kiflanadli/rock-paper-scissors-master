import React, { Component } from "react";
import "./styles/index.scss";
import Header from "./component/header";
import { Rule, Modal } from "./component/modal";
import GamePanel from "./component/game-panel";

export default class App extends Component {
  state = {
    score: 0,
    modal: false,
    step: 1,
    pick: ["none", "none"],
  };

  render() {
    return (
      <div className="main-container">
        <Header score={this.state.score} />
        <GamePanel
          handleScore={this.handleScore}
          pick={this.state.pick}
          step={this.state.step}
          handlePick={this.handlePick}
          handleStep={this.handleStep}
        />
        <Rule handleModal={this.handleModal} />
        {this.state.modal && <Modal handleModal={this.handleModal} />}
      </div>
    );
  }

  handleModal = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleScore = (result) => {
    let newScore;
    if (result === "player") {
      newScore = this.state.score + 1;
      this.setState({ score: newScore });
    } else if (result === "cpu") {
      newScore = this.state.score - 1;
      newScore >= 0 && this.setState({ score: newScore });
    }
  };

  handlePick = (unit, value) => {
    if (this.state.step > 2) {
      return;
    }
    if (unit === "player") {
      let newPick = [value, "none"];
      this.setState({ pick: newPick });
    } else {
      let newPick = this.state.pick.slice();
      newPick.splice(1, 1, value);
      this.setState({ pick: newPick });
    }
  };

  handleStep = () => {
    let newStep = this.state.step + 1;
    newStep = newStep > 4 ? 1 : newStep;
    this.setState({ step: newStep });
  };
}
