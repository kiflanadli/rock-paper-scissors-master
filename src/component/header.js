export default function Header(props) {
  return (
    <header>
      <img src="./assets/logo-bonus.svg" alt="title" />
      <div>
        <span>score: </span>
        {props.score}
      </div>
    </header>
  );
}
