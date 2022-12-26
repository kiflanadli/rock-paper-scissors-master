const winHands = [
  ["scissors", "paper"],
  ["paper", "rock"],
  ["rock", "lizard"],
  ["lizard", "spock"],
  ["spock", "scissors"],
  ["scissors", "lizard"],
  ["paper", "spock"],
  ["rock", "scissors"],
  ["lizard", "paper"],
  ["spock", "rock"],
];

export default function calculateWinner(picked) {
  let result = "cpu";
  winHands.forEach((hands) => {
    const [a, b] = hands;
    if (a === picked[0] && b === picked[1]) {
      result = "player";
    }
  });

  if (picked[0] === picked[1]) {
    result = "draw";
  }

  return result;
}
