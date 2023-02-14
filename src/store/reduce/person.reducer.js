import { PERSONS } from '../../constanst/data/index';
import {personstypes} from '../types/index';

const {GET_PERSONS} = personstypes;

const initialState ={
  persons: PERSONS,
  selected: null,
};

const personsResducer = ( state = initialState, action) => {
  switch (action.type) {
    case GET_PERSONS:
      const indexPerson = state.persons.findindex(
       (persons) => persons.id  === action.payload
      );
      if (indexPersons === -1) return state;

      return{
        ...state,
        selected: state.persons[indexPerson],
      }

    default:
      return state;
  }
};
