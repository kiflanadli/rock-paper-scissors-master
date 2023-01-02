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
    <div className="rules-modal-container">
      <div onClick={props.handleModal} className="modal-bg"></div>
      <div className="rules-modal">
        <h2 className="rules-title">rules</h2>
        <img
          src="./assets/image-rules-bonus.svg"
          alt="rules"
          className="rules-content"
        />
        <button onClick={props.handleModal} className="close-modal">
          <img src="./assets/icon-close.svg" alt="close" />
        </button>
      </div>
    </div>
  );
}
