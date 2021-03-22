import React, { useEffect, useRef } from 'react';

import { BLOCK } from '../utils/block';
import { init, draw } from '../utils/tetris';

function Canvas(props) {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    init(context);
    draw(context, BLOCK.SQUARE);

  }, []);

  return (
    <canvas ref={canvasRef} {...props} />
  );
}

export default Canvas;
