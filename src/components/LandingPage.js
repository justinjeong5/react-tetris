import React from 'react';
import Board from './Board';
import Score from './Score';
import SidePanel from './SidePanel';


function LandingPage() {
  return (
    <div>
      <Score />
      <div>
        <Board />
        <SidePanel />
      </div>
    </div>
  );
}

export default LandingPage;
