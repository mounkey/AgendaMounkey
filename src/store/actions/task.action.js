import { tasktypes } from "../types//index";
const {GET_TASKS} = tasktypes;

export const getTasks = (id) => ({
  type: GET_TASKS,
  payload: id,
});

