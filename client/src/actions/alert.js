import { SET_ALERT, REMOVE_ALERT } from './types';
import uuid from 'uuid';

//Action creator is a function that creates and returns an action eg. line 7 - 14
//The action is the message inside the action creator containing a type and a payload eg. line 10 - 11

export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
  const id = uuid.v4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });
  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};
