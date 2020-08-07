import React, { createContext, useReducer, useMemo } from 'react';
import { actionTypes, login, logout, register, loginFailure, logoutFailure } from './actions/authTypes';

const initialState = {
  token: localStorage.getItem('token'),
  isAuth: !!localStorage.getItem('token'),
  user: {},
  authErrors: [],
};
const actionMap = {
  [actionTypes.Login]: (state, user) => ({ ...state, isAuth: true, user, token: localStorage.getItem('token') }),
  [actionTypes.Logout]: (state) => ({ ...state, isAuth: false, token: null, user: {} }),
  [actionTypes.Register]: (state, user) => ({ ...state, isAuth: true, user, token: localStorage.getItem('token') }),
  [actionTypes.LoginFailure]: (state, err) => ({
    ...state,
    isAuth: false,
    user: null,
    token: null,
    authErrors: err,
  }),
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
