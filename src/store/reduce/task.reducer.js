import { taskTypes } from '../types/index'

const { GET_TASKS, GET_TASK_ALL, ADD_TASK, REMOVE_TASK, CHANGE_STATUS  } = taskTypes;

const  initialState ={
  tasks: [],
  selected: [],
};

const tasksReducer = (state = initialState, action) => {
  switch(action.type){

    case GET_TASKS:
      const indexTasks = state.tasks.findIndex(
        (tasks) => task.id === ActivityIndicatorComponent.payload
      );
      if (indexTasks === -1) return state;
      return{
        ...state,
        selected: action.tasks
    }

    case ADD_TASK:
      return{
        selected: [...state.selected, {name: action.name, date: action.date, details: action.details, description: action.description, status: action.status}]
      }

    case REMOVE_TASK:
      return{
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.id)
      };

    case  CHANGE_STATUS:
      return{
        ...state,
        tasks: state.tasks.map(task => {
          if(task.id === action.id){
            return{
              ...task,
              status: action.status
            }
          }
          return task;
        })
      };

    default:
      return state;
  }
};

  export default tasksReducer;
