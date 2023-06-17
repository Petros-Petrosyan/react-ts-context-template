import { Action, InitialState, Payload } from "../../types/users";
import {
  ADD_USER_START,
  ADD_USER_SUCCESS,
  ADD_USER_FAIL,
  REMOVE_USER,
} from "./actionTypes";

const addUserStart = (state: InitialState) => {
  return {
    ...state,
    loading: true,
    error: false,
  };
};

const addUserSuccess = (state: InitialState, payload: Payload) => {
  const { name } = payload;
  return {
    ...state,
    users: [...state.users, name],
    loading: false,
    error: false,
  };
};

const addUserFail = (state: InitialState) => {
  return {
    ...state,
    loading: false,
    error: true,
  };
};

const removeUser = (state: InitialState, payload: Payload) => {
  const { name } = payload;
  const newUsers = state.users.filter((user) => user !== name);
  return {
    ...state,
    users: newUsers,
  };
};

export const reducer = (state: InitialState, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_USER_START:
      return addUserStart(state);
    case ADD_USER_SUCCESS:
      return addUserSuccess(state, payload as Payload);
    case ADD_USER_FAIL:
      return addUserFail(state);
    case REMOVE_USER:
      return removeUser(state, payload as Payload);
    default:
      return state;
  }
};
