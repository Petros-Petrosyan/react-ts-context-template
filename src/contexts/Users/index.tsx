import { Dispatch, ReactElement, createContext, useReducer } from "react";
import { reducer } from "./reducer";
import { Action, InitialState } from "../../types/users";

interface UsersContextValue extends InitialState {
  dispatch: Dispatch<Action>;
}

const initialState: InitialState = {
  loading: false,
  error: false,
  users: [],
};

const initialContextValue: UsersContextValue = {
  ...initialState,
  dispatch: () => {},
};

const UsersContext = createContext<UsersContextValue>(initialContextValue);

export const UsersContextProvider = ({
  children,
}: {
  children: ReactElement;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UsersContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UsersContext.Provider>
  );
};

export { UsersContext };
