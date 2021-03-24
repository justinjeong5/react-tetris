import {
  MOVE_PLAYER, RESET_PLAYER
} from './types';

export const movePlayer = (position) => ({
  type: MOVE_PLAYER,
  data: {
    position
  },
});

export const resetPlayer = (position, block) => ({
  type: RESET_PLAYER,
  data: {
    position,
    block
  }
});
