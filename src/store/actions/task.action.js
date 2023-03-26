import { REALTIME_DATABASE_URL } from '../../constants/firebase/';
import { taskTypes } from "../types/index";
const {GET_TASKS, GET_TASK_ALL, ADD_TASK, REMOVE_TASK, CHANGE_STATUS} = taskTypes;

export const getTasks = (id) => {
  return async (dispatch) => {
    try{
      const response = await fetch (`${REALTIME_DATABASE_URL}/tasks.json`,{
        method: 'GET',
        headers: {
         'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      const test = Object.keys(data).map(key => data[key]);
      const List = test.filter(item => item.id === id);
    console.log(List)
      dispatch({
        type: GET_TASKS,
        selected: List,
      });
    }
    catch(error){
      console.log(error);
    }
  }
};

export const getTaskAll = () => {
  return async (dispatch) => {
    try{
      const response = await fetch (`${REALTIME_DATABASE_URL}/tasks.json`,{
        method: 'GET',
        headers: {
         'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      const test = Object.keys(data).map(key => data[key]);
      dispatch({
        type: GET_TASK_ALL,
        tasks: test,
      });

    }
    catch(error){
      console.log(error);
    }
  }

};

export const addTask = (name, date, detail, reason, status) => {
  return async (dispatch) => {
    try {
      const response = await fetch (`${REALTIME_DATABASE_URL}/tasks.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          date: date,
          detail: detail,
          reason: reason,
          status: status,
        })
      });
      console.log(name, date, detail, reason, status );
      dispatch({
        type: ADD_TASK,
        name: name,
        date: date,
        detail: detail,
        reason: reason,
        status: status,
      });
    }catch(error){
      console.log(error);
    }
  }
};
