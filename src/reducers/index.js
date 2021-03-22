import { combineReducers } from 'redux';

import player from './player';
import board from './board';
import score from './score';

const rootReducer = (state, action) => {
  const combineReducer = combineReducers({
    player,
    board,
    score,
  });
  return combineReducer(state, action);
};

export default rootReducer;
