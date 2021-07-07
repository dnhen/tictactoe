import { useState } from 'react';

const Cell = ( {id} ) => {
  const [currVal, setVal] = useState('-');

  return (
    <div className="cell" id={id} onClick={(e) => setVal('X')}>
      <span>{currVal}</span>
    </div>
  );
}

export default Cell;
