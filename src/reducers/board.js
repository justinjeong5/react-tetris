import producer from 'immer';
import {
  MERGE_BOARD, UPDATE_BOARD, ADD_BLOCK,
} from '../actions/types';
import { getNextBlock } from '../utils/block';

const Y = 20, X = 10;
const initialBoard = Array.from(Array(Y)).map(() => Array.from(Array(X)).fill(0));

const initialState = {
  board: initialBoard,
  nextBlock: Array.from(Array(5)).map(() => getNextBlock()),
};

const board = (state = initialState, action) => {
  return producer(state, (draft) => {
    switch (action.type) {
      case MERGE_BOARD: {
        const { y, x } = action.data.position;
        draft.board[y][x] = action.data.value;
        break;
      }
      case UPDATE_BOARD:
        draft.board = action.data.board;
        break;
      case ADD_BLOCK:
        draft.board.push(getNextBlock());
        break;
      default:
        break;
    }
  });
};

export default board;