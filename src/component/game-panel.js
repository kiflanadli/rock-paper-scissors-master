import React, { Component } from "react";
import calculateWinner from "../calculateWinner";

export default class GamePanel extends Component {
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

  render() {
    return (
      <main>
        {this.props.step <= 1 ? this.display(PreStart) : this.display(DidStart)}
      </main>
    );
  }

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
  return <>{hands.map((hand) => pickOption(hand))}</>;
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
    result = calculateWinner(pick);
  }
  return (
    <>
      <div>you picked</div>
      <Pick value={player} />
      <div>the house picked</div>
      {cpu !== "none" ? <Pick value={cpu} /> : <div>loading...</div>}
      {step === 4 && <Result handleStep={handleStep} result={result} />}
    </>
  );
}

function Pick({ handlePick, handleStep, value }) {
  function handleClick() {
    if (!handlePick) return;
    handlePick("player", value);
    handleStep();
  }
  return (
    <button onClick={handleClick}>
      <div>
        <img src={`./assets/icon-${value}.svg`} alt="icon pick" />
      </div>
    </button>
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
    <div>
      <p>{renderResult}</p>
      <button onClick={handleStep}>play again</button>
    </div>
  );
}
