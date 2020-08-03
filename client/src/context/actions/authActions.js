import axios from 'axios';

const getUser = async ({ token }, dispatch) => {
  dispatch({ type: 'SET_TOKEN', payload: token });
  localStorage.setItem('token', token);
  try {
    const res = await axios.get('api/auth', { headers: { 'x-auth-token': token } });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error.response);
  }
};

export const register = async (dispatch, data) => {
  try {
    const res = await axios.post('api/auth/register', data);
    const user = await getUser(res.data, dispatch);

    dispatch({ type: 'AUTH_USER', payload: user });
  } catch (error) {
    console.log(error.response.msg);
  }
};

export const login = async (dispatch, data) => {
  try {
    const res = await axios.post('api/auth/login', data);
    const user = await getUser(res.data, dispatch);

    dispatch({ type: 'AUTH_USER', payload: user });
  } catch (error) {
    console.log(error.response);
  }
  dispatch({ type: 'LOGIN' });
};

export const logout = (dispatch) => {
  localStorage.clear();
  dispatch({ type: 'LOGOUT' });
};
