import { personstypes } from '../types/index';

const { GET_PERSONS } = personstypes;

export const getPersons = (id) => ({
  type: GET_PERSONS,
  payload: id,
});
