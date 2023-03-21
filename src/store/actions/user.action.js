import { URL_AUTH_SIGN_IN, URL_AUTH_SIGN_UP } from '../../constants/firebase';

import { enableNetworkProviderAsync } from 'expo-location';
import { userTypes } from '../types';

const { SIGN_UP, SIGN_IN } = userTypes;

export const signUp = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL_AUTH_SIGN_UP, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });
      if (!response.ok) {
        const errorResData = await response.json();
        console.log(errorResData);
      }
      const resData = await response.json();
      dispatch({
        type: SIGN_UP,
        token: resData.idToken,
        userID: resData.localId,
      });
    } catch (err) {
      console.log(err);
    }
  }
};

export const signIn = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL_AUTH_SIGN_IN, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });
      if (!response.ok) {
        const errorResData = await response.json();
        console.log(errorResData);
      }

      const resData = await response.json();
      console.log (response);
      dispatch({
        type: SIGN_IN,
        token: resData.idToken,
        userID: resData.localId,
      });
    } catch (err) {
      console.log(err);
    }
  }
};
