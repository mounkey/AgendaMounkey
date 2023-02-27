import { applyMiddleware, combineReducers, createStore } from 'redux';
import { personReducer, taskReducer } from './reduce/index';

import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  persons: personReducer,
  task: taskReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
