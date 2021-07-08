const Cell = ( {value, onClick} ) => {
  const style = value ? `cell ${value}` : `cell`;

  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
}

export default Cell;
