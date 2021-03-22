import { SET_SCORE } from './types';

export const setScore = (score) => ({
  type: SET_SCORE,
  data: {
    score
  },
});