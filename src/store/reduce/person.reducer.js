import { PERSONS } from '../../constants/data/index';
import {personstypes} from '../types/index';

const {GET_PERSONS, ADD_PERSONS} = personstypes;

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
      if (indexPerson === -1) return state;

      return{
        ...state,
        selected: state.persons[indexPerson],
      }

    case ADD_PERSONS:
      return {
        ...state,
        persons: [...state.persons, { names: action.names, mailp: action.mailp, mails: action.mails, phone: action.phone, phones: action.phones, face: action.face, insta: action.insta, link: action.link, address: action.address, city: action.city, country: action.country, coords: action.coords, photo: action.photo }],
      };

    default:
      return state;
  }
};

export default personsResducer;
