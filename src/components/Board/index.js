import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Tetris from '../../utils/tetris';

function Board(props) {
  const dispatch = useDispatch();
  const { player } = useSelector((state) => state.player);
  const { board } = useSelector((state) => state.board);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.scale(20, 20);

    new Tetris({ context, player, board, dispatch });
  }, []);

  return (
    <canvas ref={canvasRef} {...props} />
  );
}

export default Board;
