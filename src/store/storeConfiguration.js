import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers';

const middlewares = [logger];
const enhancer = composeWithDevTools(applyMiddleware(...middlewares));
const store = createStore(rootReducer, enhancer, window.__REDUX_DEVTOOLS_EXTIONSION__ && window.__REDUX_DEVTOOLS_EXTIONSION__());

export default store;
