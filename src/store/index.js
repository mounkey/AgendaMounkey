import { combineReducers, createStore } from 'redux';
import { personReducer, taskReducer } from './reduce/index';

const rootReducer = combineReducers({
  persons: personReducer,
  task: taskReducer,
});

export default createStore(rootReducer);
