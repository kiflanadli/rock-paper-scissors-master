export default function Result({ handleStep, result }) {
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
