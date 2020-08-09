import React, { createContext, useReducer } from 'react';
import { actionTypes } from './actions/authTypes';

const getToken = () => localStorage.getItem('token');
const initialState = {
  token: getToken(),
  isAuth: !!localStorage.getItem('token'),
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {},
  authErrors: [],
};
const actionMap = {
  [actionTypes.LoginSuccess]: (state, data) => ({
    ...state,
    isAuth: true,
    user: data,
    authErrors: [],
    token: getToken(),
  }),
  [actionTypes.LoginFailure]: (state, data) => ({
    ...state,
    isAuth: false,
    user: {},
    authErrors: data.errors,
  }),
  [actionTypes.Logout]: (state) => ({ ...state, isAuth: false, token: null, user: {} }),
  [actionTypes.ClearErrors]: (state) => ({ ...state, authErrors: [] }),
};

export const authReducer = (state, action) => {
  const handler = actionMap[action.type];
  return handler ? handler(state, action.payload) : state;
};
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initialState);

  return <AuthContext.Provider value={{ authState, authDispatch }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
