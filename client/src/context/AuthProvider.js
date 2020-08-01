import React, { createContext, useReducer } from 'react';

const initialState = {
  token: localStorage.getItem('token'),
  isAuth: false,
  user: [],
};

export const authReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'AUTH_USER':
      return { ...state, isAuth: true, user: payload };
    case 'SET_TOKEN':
      return { ...state, token: payload };
    case 'LOGOUT':
      return initialState;
    default:
      return state;
  }
};
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initialState);
  return <AuthContext.Provider value={{ authState, authDispatch }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
