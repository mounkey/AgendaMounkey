import { taskTypes } from "../types/index";
const {GET_TASKS} = taskTypes;

export const getTasks = (id) => ({
  type: GET_TASKS,
  payload: id,
});

