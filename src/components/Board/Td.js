import React from 'react';
import style from 'styled-components';

const Cell = style.td`
  width: 30px;
  height: 30px;
  border: 1px solid gray;
`;

function Td() {
  return (
    <Cell />
  );
}

export default Td;
