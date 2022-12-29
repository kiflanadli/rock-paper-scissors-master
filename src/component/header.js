export default function Header(props) {
  return (
    <header className="header-section">
      <img src="./assets/logo-bonus.svg" alt="title" />
      <div className="score-container">
        <span>score</span>
        <p className="score-text">{props.score}</p>
      </div>
    </header>
  );
}
