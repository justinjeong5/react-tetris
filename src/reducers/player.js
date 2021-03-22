import producer from 'immer';
import {
  MOVE_PLAYER, RESET_PLAYER,
} from '../actions/types';

const initialState = {
  player: {
    position: { y: 0, x: 4 },
    block: null,
  },
};

const player = (state = initialState, action) => {
  return producer(state, (draft) => {
    switch (action.type) {
      case MOVE_PLAYER:
        draft.player.position.y += action.data.position.y;
        draft.player.position.x += action.data.position.x;
        break;
      case RESET_PLAYER:
        draft.player.position.y = 0;
        draft.player.position.x = 4;
        draft.player.block = action.data.block;
        break;
      default:
        break;
    }
  });
};

export default player;