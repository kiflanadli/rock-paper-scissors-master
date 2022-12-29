export function Rule(props) {
  return (
    <div className="rules-btn">
      <button onClick={props.handleModal}>rules</button>
    </div>
  );
}

export function Modal(props) {
  return (
    <div>
      <h2>rules</h2>
      <img src="./assets/image-rules-bonus.svg" alt="rules" />
      <button onClick={props.handleModal}>
        <img src="./assets/icon-close.svg" alt="close" />
      </button>
    </div>
  );
}
