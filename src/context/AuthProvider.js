import React, { createContext, useReducer } from 'react';

export const authReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'LOG_IN':
      return { ...state, isAuth: !state.isAuth, user: payload };
    default:
      return state;
  }
};
export const AuthContext = createContext();

const initialState = {
  isAuth: false,
  user: [],
};

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initialState);
  return <AuthContext.Provider value={{ authState, authDispatch }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
