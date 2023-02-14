import { TASKS } from  '../../constanst/data/index';
import { taskstypes } from '../types/index';

const { GET_TASKS } = taskstypes;

const  initialState ={
  tasks: TASKS,
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
