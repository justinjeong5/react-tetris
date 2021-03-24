import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Tr from './Tr';

function Table({ index }) {
  const { nextBlock } = useSelector(state => state.board);
  return (
    <div>
      <table>
        <tbody>
          {nextBlock[index].map((_, row) => <Tr key={uuidv4()} index={index} row={row} />)}
        </tbody>
      </table>
    </div>
  );
}

Table.propTypes = {
  index: PropTypes.number.isRequired,
};

export default Table;
