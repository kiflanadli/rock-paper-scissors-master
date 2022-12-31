import React, { Component } from "react";
import calculateWinner from "../calculateWinner";

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

const hands = ["scissors", "spock", "paper", "lizard", "rock"];

function PreStart({ handleStep, handlePick }) {
  const pickOption = (value) => (
    <Pick
      handleStep={handleStep}
      handlePick={handlePick}
      value={value}
      key={value}
    />
  );
  return (
    <div className="pentagon pick-btn-pointer">
      {hands.map((hand) => pickOption(hand))}
    </div>
  );
}

function DidStart({ handleStep, handlePick, pick, step }) {
  const [player, cpu] = pick;
  const pickedCpu = Math.floor(Math.random() * hands.length);
  let result = "";
  if (step < 4) {
    setTimeout(() => {
      handlePick("cpu", hands[pickedCpu]);
      handleStep();
    }, 1500);
  } else {
    result = calculateWinner(pick); // 'player' || 'cpu'
  }
  return (
    <div className="deck-layout">
      <div>
        <div className="pick-label">you picked</div>
        <Pick hand="player" value={player} result={result} />
      </div>
      {step === 4 && <Result handleStep={handleStep} result={result} />}
      <div>
        <div className="pick-label">the house picked</div>
        {cpu !== "none" ? (
          <Pick hand="cpu" value={cpu} result={result} />
        ) : (
          <div className="pick-load"></div>
        )}
      </div>
    </div>
  );
}

function Pick({
  handlePick,
  handleStep,
  value,
  hand = "hand",
  result = "result",
}) {
  function handleClick() {
    if (!handlePick) return;
    handlePick("player", value);
    handleStep();
  }
  let resultStyle = "";
  if (hand === result) {
    resultStyle = "win";
  }
  return (
    <div>
      <button
        onClick={handleClick}
        className={`pick-btn ${value} ${resultStyle}`}
      >
        <img src={`./assets/icon-${value}.svg`} alt="icon pick" />
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
}

function Result({ handleStep, result }) {
  let renderResult;
  if (result === "player") {
    renderResult = "you win";
  } else if (result === "cpu") {
    renderResult = "you lose";
  } else {
    renderResult = "draw";
  }
  return (
    <div className="result">
      <p>{renderResult}</p>
      <button onClick={handleStep} className="replay-btn element">
        play again
      </button>
    </div>
  );
}
