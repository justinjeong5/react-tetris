import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import Td from './Td';

function Tr({ index, row }) {
  const { nextBlock } = useSelector(state => state.board);
  return (
    <tr>
      {nextBlock[index][row].map((_, col) => <Td key={uuidv4()} index={index} row={row} col={col} />)}
    </tr>
  );
}

Tr.propTypes = {
  index: PropTypes.number.isRequired,
  row: PropTypes.number.isRequired,
};

export default memo(Tr);
