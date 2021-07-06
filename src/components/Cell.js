const Cell = () => {
  const onClick = () => {
    console.log("Click");
  }

  return (
    <div className="cell" onClick={onClick}>
      <span> </span>
    </div>
  );
}

export default Cell;
