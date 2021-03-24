import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Table from './Table';

function SidePanel() {
  const { nextBlock } = useSelector(state => state.board);
  return (
    <div style={{ marginLeft: 30 }}>
      {nextBlock.map((_, index) => <Table key={uuidv4()} index={index} />)}
    </div>
  );
}

export default SidePanel;
