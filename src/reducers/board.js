import producer from 'immer';
import {
  INIT_BOARD, MERGE_BOARD, UPDATE_BOARD, ADD_BLOCK, FINISH_GAME, SET_TETRIS,
  PUSH_NEXT,
  RESET_PLAYER,
} from '../actions/types';

const initialBoard = ({ row, col }) => Array.from(Array(row)).map(() => Array.from(Array(col)).fill(0));

const initialState = {
  board: initialBoard({ row: 20, col: 10 }),
  nextBlock: [],
  tetris: null,
};

const board = (state = initialState, action) => {
  return producer(state, (draft) => {
    switch (action.type) {
      case INIT_BOARD:
        draft.board = initialBoard(action.data);
        break;
      case MERGE_BOARD: {
        const { y, x } = action.data.position;
        draft.board[y][x] = action.data.value;
        break;
      }
      case UPDATE_BOARD:
        draft.board = action.data.board;
        break;
      case ADD_BLOCK: {
        const block = draft.nextBlock.splice(0, 1);
        draft.board.push(block);
        break;
      }
      case FINISH_GAME:
        draft.board = initialBoard;
        break;
      case SET_TETRIS:
        draft.tetris = action.data.tetris;
        break;
      case PUSH_NEXT:
        draft.nextBlock.push(action.data.block);
        break;
      case RESET_PLAYER:
        draft.nextBlock.splice(0, 1);
        break;
      default:
        break;
    }
  });
};

export default board;