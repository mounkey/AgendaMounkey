import { applyMiddleware, combineReducers, createStore } from 'redux';
import { personReducer, taskReducer, userReducer } from './reduce/index';

import thunk from 'redux-thunk';
import { useReducer } from 'react';

const rootReducer = combineReducers({
  persons: personReducer,
  task: taskReducer,
  user: userReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
