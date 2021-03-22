import producer from 'immer';
import {
  SET_SCORE, START_GAME, UPDATE_HIGH_SCORE, RESET_SCORE
} from '../actions/types';

const initialState = {
  score: 0,
  highScore: 0,
};

const player = (state = initialState, action) => {
  return producer(state, (draft) => {
    switch (action.type) {
      case SET_SCORE:
        draft.score += action.data.score;
        break;
      case START_GAME: {
        draft.score = 0;
        break;
      }
      case UPDATE_HIGH_SCORE: {
        const localScore = parseInt(localStorage.getItem('tetrisScore'));
        if (localScore < action.data.score) {
          localStorage.setItem('tetrisScore', action.data.score);
        }
        if (draft.highScore < action.data.score) {
          draft.highScore = action.data.score;
        }
        break;
      }
      case RESET_SCORE:
        draft.score = 0;
        break;
      default:
        break;
    }
  });
};

export default player;