import { SET_SCORE, UPDATE_HIGH_SCORE, RESET_SCORE, } from './types';

export const setScore = (score) => ({
  type: SET_SCORE,
  data: {
    score
  },
});

export const updateHighScore = (score) => ({
  type: UPDATE_HIGH_SCORE,
  data: {
    score
  }
});

export const resetScore = () => ({
  type: RESET_SCORE,
});