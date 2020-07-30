import axios from 'axios';

export const register = async (dispatch, data) => {
  try {
    const res = await axios.post('api/auth/register', data);
    console.log(res);
  } catch (error) {}
  dispatch({ type: 'REGISTER' });
};

export const login = async (dispatch, data) => {
  try {
    const res = await axios.post('api/auth/register', data);
    console.log(res);
  } catch (error) {}
  dispatch({ type: 'LOGIN' });
};
