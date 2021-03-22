import producer from 'immer';
import {
  SET_SCORE
} from '../actions/types';

const initialState = {
  score: 0,
};

const player = (state = initialState, action) => {
  return producer(state, (draft) => {
    switch (action.type) {
      case SET_SCORE:
        draft.score += action.data.score;
        break;
      default:
        break;
    }
  });
};

export default player;