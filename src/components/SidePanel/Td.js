import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { colors } from '../../utils/block';
import { useSelector } from 'react-redux';

function Td({ index, row, col }) {

  const { nextBlock } = useSelector(state => state.board);

  const style = useCallback((color, value) => {
    if (!value) {
      return { width: 20, height: 20 };
    }
    return ({
      backgroundColor: color, width: 20, height: 20, border: '1px solid gray'
    });
  }, []);

  const renderTr = () => {
    const value = nextBlock[index][row][col];
    const color = colors[value];
    return <td style={style(color, value)} />;
  };

  return renderTr();
}

Td.propTypes = {
  index: PropTypes.number.isRequired,
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired,
};

export default Td;
