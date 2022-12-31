export function Rule(props) {
  return (
    <div className="rules-btn-container">
      <button onClick={props.handleModal} className="rules-btn element">
        rules
      </button>
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
