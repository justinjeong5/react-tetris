import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Td from './Td';

function Tr() {
  const { col } = useSelector(state => state.board);

  return (
    <tr>
      {Array.from(Array(col)).map(() => (
        <Td key={uuidv4()} />
      ))}
    </tr>
  );
}

export default Tr;
