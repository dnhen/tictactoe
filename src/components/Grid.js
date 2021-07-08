import Cell from './Cell';

const Grid = ( {cells, onClick} ) => {
  const gridStyle = { // Set the grid of cells to be a correct square
    gridTemplate: 'repeat(' + Math.sqrt(cells.length) + ', 1fr) / repeat(' + Math.sqrt(cells.length) + ', 1fr)',
  }

  return (
    <div className="grid" style={gridStyle}>
      {cells.map((cell, i) => (
        <Cell key={i} value={cell} onClick={() => onClick(i)} />
      ))}
    </div>
  );
}

export default Grid;
