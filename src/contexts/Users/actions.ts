import {
  REMOVE_USER,
  ADD_USER_START,
  ADD_USER_SUCCESS,
  ADD_USER_FAIL,
} from "./actionTypes";

export const addUserStart = () => {
  return {
    type: ADD_USER_START,
  };
};

export const addUserSuccess = (name: string) => {
  return {
    type: ADD_USER_SUCCESS,
    payload: { name },
  };
};

export const addUserFail = () => {
  return {
    type: ADD_USER_FAIL,
  };
};

export const removeUser = (name: string) => {
  return {
    type: REMOVE_USER,
    payload: { name },
  };
};
