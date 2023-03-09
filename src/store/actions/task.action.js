import { REALTIME_DATABASE_URL } from '../../constants/firebase/index';
import { taskTypes } from "../types/index";
const {GET_TASKS, ADD_TASK, REMOVE_TASK, CHANGE_STATUS} = taskTypes;

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
      const test = Objecvt.keys(data).map(key => data[key]);
      const filterTask = test.filter(item=> item.id === id)
      dispatch({
        type: GET_TASKS,
        tasks: data,
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

export const removeTask = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch (`${REALTIME_DATABASE_URL}/tasks/${id}.json`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const resukt = await response.json();
      dispatch({
        type: REMOVE_TASK,
        payload: id,
      });
    }catch(error){
      dispatch({
        type: REMOVE_TASK,
        error,
      })
    }
  }
};

export const changeStatus = (id, status ) => {
  return async (dispatch) => {
    try {
      const response = await fetch (`${REALTIME_DATABASE_URL}/tasks/${id}.json`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          status: status,
        })
      });
      const result = await response.json();
      dispatch({
        type: CHANGE_STATUS,
        payload: result,
      });
    }catch(error){
      dispatch({
        type: CHANGE_STATUS,
        error,
      })
    }
  }
}

