import { Tasks } from '../../constanst/Data/index';
import { taskTypes } from '../types/index'
console.log (Tasks);
const { GET_TASKS } = taskTypes;

const  initialState ={
  tasks: Tasks,
  selected: null,
};

const tasksReducer = (state = initialState, action) => {
  switch(action.type){
   case GET_TASKS:
    const indexTask = state.tasks.findindex(
      (tasks) => tasks.id === action.payload
    );
    if (indexTask === -1) return state;

    return{
      ...state,
      selected: state.tasks[indexTask],
    };

    default:
      return state;
  }
};

  export default tasksReducer;
