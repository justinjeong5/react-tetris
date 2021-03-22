import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTetris } from '../../actions/board';

import Tetris from '../../utils/tetris';

function Board(props) {
  const dispatch = useDispatch();
  const { player } = useSelector((state) => state.player);
  const { board } = useSelector((state) => state.board);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let height = document.documentElement.clientHeight;
    const scale = height * 0.4 * 0.1;
    context.canvas.width = (height * 0.4);
    context.canvas.height = (height * 0.8);

    context.scale(scale, scale);

    const tetris = new Tetris({ context, player, board, dispatch });
    dispatch(setTetris(tetris));
  }, []);

  return (
    <canvas id='canvas' ref={canvasRef} {...props} />
  );
}

export default Board;
