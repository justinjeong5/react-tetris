import { combineReducers } from 'redux';

import board from './board';

const rootReducer = (state, action) => {
  const combineReducer = combineReducers({
    board,
  });
  return combineReducer(state, action);
};

export default rootReducer;
