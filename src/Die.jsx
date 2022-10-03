function Die(props) {
  return (
    <div className={`die-item ${props.bg}`} onClick={props.holdDice}>
      <span className="die-value">{props.value}</span>
    </div>
  );
}

export default Die;
