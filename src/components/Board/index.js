import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTetris } from '../../actions/board';

import Tetris from '../../utils/tetris';

function Board() {
  const dispatch = useDispatch();
  const { block, position } = useSelector((state) => state.player);
  const { board } = useSelector((state) => state.board);
  const { finish } = useSelector((state) => state.score);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const player = { position, block };
    const tetris = new Tetris({ context, player, board, dispatch });
    dispatch(setTetris(tetris));
  }, []);

  const style = useCallback(() => {
    if (finish) {
      return {
        'position': 'fixed',
        'top': '100px',
        'width': '100%',
        'height': '80%',
        'backgroundColor': 'rgba(0, 0, 0, 0.5)',
      };
    } else {
      return {
        'position': 'fixed',
      };
    }
  }, [canvasRef, finish]);

  return (
    <>
      <div style={style()}></div>
      <canvas id='canvas' ref={canvasRef} />
    </>
  );
}


export default Board;
