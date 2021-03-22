import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { setTetris } from '../../actions/board';

import Tetris from '../../utils/tetris';

function Board(props) {
  const dispatch = useDispatch();
  const { player } = useSelector((state) => state.player);
  const { board } = useSelector((state) => state.board);
  const { finish } = useSelector((state) => state.score);
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

  const style = useCallback(() => {
    if (finish) {
      return {
        'position': 'fixed',
        'top': '110px',
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
      <canvas id='canvas' ref={canvasRef} {...props} />
    </>
  );
}

Board.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default Board;
