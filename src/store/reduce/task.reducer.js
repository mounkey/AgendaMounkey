import { Tasks } from '../../constants/data/index';
import { taskTypes } from '../types/index'

const { GET_TASKS, ADD_TASK, REMOVE_TASK } = taskTypes;

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

    case ADD_TASK:





    default:
      return state;
  }
};

  export default tasksReducer;
