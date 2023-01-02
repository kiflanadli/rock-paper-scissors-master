import Pick from "./pick-button";
import Result from "./result";
import calculateWinner from "../calculateWinner";

const hands = ["scissors", "spock", "paper", "lizard", "rock"];

export function PreStart({ handleStep, handlePick }) {
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

export function DidStart({ handleStep, handlePick, pick, step }) {
  const [player, cpu] = pick;
  const pickedCpu = Math.floor(Math.random() * hands.length);
  let result = "";
  if (step < 4) {
    setTimeout(() => {
      handlePick("cpu", hands[pickedCpu]);
      handleStep();
    }, 700);
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
