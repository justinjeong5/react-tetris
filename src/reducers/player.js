import producer from 'immer';
import {
  MOVE_PLAYER, RESET_PLAYER, FINISH_GAME,
} from '../actions/types';

const initialState = {
  position: { y: 0, x: 4 },
  block: null,
};

const player = (state = initialState, action) => {
  return producer(state, (draft) => {
    switch (action.type) {
      case MOVE_PLAYER:
        draft.position.y += action.data.position.y;
        draft.position.x += action.data.position.x;
        break;
      case RESET_PLAYER:
        draft.position.y = action.data.position.y;
        draft.position.x = action.data.position.x;
        draft.block = action.data.block;
        break;
      case FINISH_GAME:
        draft = {
          position: { y: 0, x: 4 },
          block: null,
        };
        break;
      default:
        break;
    }
  });
};

export default player;