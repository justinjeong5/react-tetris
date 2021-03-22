import { MERGE_BOARD, UPDATE_BOARD, FINISH_GAME, START_GAME, SET_TETRIS } from './types';

export const mergeBoard = (position, value) => ({
  type: MERGE_BOARD,
  data: {
    position,
    value,
  },
});

export const updateBoard = (board) => ({
  type: UPDATE_BOARD,
  data: {
    board
  },
});

export const finishGame = (score) => ({
  type: FINISH_GAME,
  data: {
    score
  }
});

export const startGame = () => ({
  type: START_GAME,
});

export const setTetris = (tetris) => ({
  type: SET_TETRIS,
  data: {
    tetris
  }
});
