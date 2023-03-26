import { taskTypes } from '../types/index'

const { GET_TASKS, GET_TASK_ALL, ADD_TASK, REMOVE_TASK, CHANGE_STATUS  } = taskTypes;

const  initialState ={
  tasks: [],
  selected: [],
};

const tasksReducer = (state = initialState, action) => {
  switch(action.type){
    case GET_TASK_ALL:
      return{
        ...state,
        tasks: action.tasks
      }

    case GET_TASKS:
      const indexTasks = state.tasks.findIndex(
        (tasks) => tasks.id === action.id
      );
      if (indexTasks === -1) return state;
      return{
        ...state,
        selected: action.tasks(indexTasks)
    }

    case ADD_TASK:
      return{
        selected: [...state.selected, {name: action.name, date: action.date, details: action.details, description: action.description, status: action.status}]
      }

    default:
      return state;
  }
};

  export default tasksReducer;
