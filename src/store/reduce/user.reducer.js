import { userTypes } from '../types';

const { SIGN_UP, SIGN_IN}  = userTypes;

const initialState = {
  token: null,
  userId: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
      };
    case SIGN_IN:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
      };
    default:
      return state;
  }
}

export default userReducer;