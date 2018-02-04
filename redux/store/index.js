import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from'redux-thunk';

import sports from '../modules/sports/reducer';

const reducers = combineReducers({
  sports,
})

const middleware = [thunk]

const enhancer = applyMiddleware(...middleware)



const store = createStore(
  reducers,
  enhancer
)

export default store;