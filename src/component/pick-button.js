export default function Pick({
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
