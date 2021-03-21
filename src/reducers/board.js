import producer from 'immer';

import {

} from './types';

const initialState = {
  row: 20,
  col: 10,
  nextBlock: [],
};

const user = (state = initialState, action) => {
  return producer(state, () => {
    switch (action.type) {

      default:
        return state;
    }
  });
};

export default user;