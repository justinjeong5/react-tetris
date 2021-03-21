import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

import Tr from './Tr';

const TableWrapper = styled.table`
  border-spacing: 0px;
  border: 1px solid gray;
`;

function Table() {

  const { row } = useSelector(state => state.board);

  return (
    <TableWrapper>
      {Array.from(Array(row)).map(() => (
        <Tr key={uuidv4()} row={row} />
      ))}
    </TableWrapper>
  );
}

export default Table;
