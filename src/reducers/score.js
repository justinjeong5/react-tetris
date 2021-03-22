import producer from 'immer';
import {
  SET_SCORE, START_GAME, FINISH_GAME, UPDATE_HIGH_SCORE, RESET_SCORE,
} from '../actions/types';

const initialState = {
  score: 0,
  highScore: 0,
  finish: false,
  newRecord: false,
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
      case FINISH_GAME:
        draft.finish = true;
        break;
      case UPDATE_HIGH_SCORE: {
        const localScore = parseInt(localStorage.getItem('tetrisScore') || 0);
        if (localScore <= action.data.score) {
          localStorage.setItem('tetrisScore', action.data.score);
        }
        if (draft.highScore < action.data.score) {
          draft.newRecord = true;
          draft.highScore = action.data.score;
        }
        break;
      }
      case RESET_SCORE:
        draft.score = 0;
        draft.finish = false;
        draft.newRecord = false;
        break;
      default:
        break;
    }
  });
};

export default player;