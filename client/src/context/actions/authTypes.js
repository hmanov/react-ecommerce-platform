export const actionTypes = {
  Register: Symbol('[AUTH] Register'),
  Login: Symbol('[AUTH] Login'),
  LoginSuccess: Symbol('[AUTH] Login Success'),
  LoginFailure: Symbol('[AUTH] Login Failure'),

  Logout: Symbol('[AUTH] Logout'),
  LogoutSuccess: Symbol('[AUTH] Logout Success'),
  LogoutFailure: Symbol('[AUTH] Logout Failure'),
  ClearErrors: Symbol('[AUTH] Claer Errors'),
};

const loginSuccess = (data) => ({ type: actionTypes.LoginSuccess, payload: data });
const loginFailure = (data) => ({ type: actionTypes.LoginFailure, payload: data });
export const login = ({ data, status }) => (status >= 400 ? loginFailure(data) : loginSuccess(data));

export const register = ({ data, status }) => (status >= 400 ? loginFailure(data) : loginSuccess(data));
export const clearErrors = () => ({ type: actionTypes.ClearErrors });
export const logout = (data) => ({ type: actionTypes.Logout, payload: {} });
