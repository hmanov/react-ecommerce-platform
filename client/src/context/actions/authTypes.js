export const actionTypes = {
  Register: Symbol('[AUTH] Register'),
  Login: Symbol('[AUTH] Login'),
  LoginSuccess: Symbol('[AUTH] Login Success'),
  LoginFailure: Symbol('[AUTH] Login Failure'),

  Logout: Symbol('[AUTH] Logout'),
  LogoutSuccess: Symbol('[AUTH] Logout Success'),
  LogoutFailure: Symbol('[AUTH] Logout Failure'),
};

export const LoginSuccess = (data) => ({ type: actionTypes.Login, payload: data });
export const loginFailure = (data) => ({ type: actionTypes.LoginFailure, payload: data });
export const login = ({ data, status }) => (status >= 400 ? loginFailure(data) : LoginSuccess(data));
export const logout = (data) => ({ type: actionTypes.Logout, payload: {} });
export const logoutFailure = (data) => ({ type: actionTypes.Logout, payload: {} });
export const register = (data) => ({ type: actionTypes.Register, payload: data });
