import {
  MOVE_PLAYER, RESET_PLAYER
} from './types';

export const movePlayer = (position) => ({
  type: MOVE_PLAYER,
  data: {
    position
  },
});

export const resetPlayer = (block) => ({
  type: RESET_PLAYER,
  data: {
    block
  }
});
