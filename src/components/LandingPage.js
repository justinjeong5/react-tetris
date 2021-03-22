import React from 'react';
import styled from 'styled-components';

import Board from './Board';
import Score from './Score';
import SidePanel from './SidePanel';

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function LandingPage() {
  return (
    <div>
      <Score />
      <Flex>
        <Board width='300px' height='600px' />
        <SidePanel />
      </Flex>
    </div>
  );
}

export default LandingPage;
