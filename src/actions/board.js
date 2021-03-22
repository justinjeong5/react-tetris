import { MERGE_BOARD, UPDATE_BOARD } from './types';

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
