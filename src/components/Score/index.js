import React from 'react';
import { useSelector } from 'react-redux';

function Score() {
  const { score } = useSelector((state) => state.score);

  return (
    <div>
      Score : {score}
    </div>
  );
}

export default Score;
