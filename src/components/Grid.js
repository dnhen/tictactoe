import Cell from './Cell';

const GRID_SIZE = 3; // GRID_SIZE = 3, grid = 3 x 3

const Grid = () => {
  // Create the GRID_SIZE x GRID_SIZE grid
  const grid = [];
  for(let row = 0; row < GRID_SIZE; row++){
    let currRow = [];
    for(let col = 0; col < GRID_SIZE; col++){
      currRow.push([]);
    }
    grid.push(currRow);
  }

  return (
    <div>
      {grid.map((row, rowId) => {
        return <div>
          {row.map((cell, cellId) => {
            return <Cell id={cellId} />
          })}
        </div>
      })}
    </div>
  );
}

export default Grid;
