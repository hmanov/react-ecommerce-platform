import axios from 'axios';
export const getProducts = async (dispatch) => {
  try {
    const res = await axios.get('/api');
    dispatch({ type: 'GET_PRODUCTS', payload: res.data });
  } catch (error) {
    console.error(error);
  }
};

export const createProduct = async (dispatch, data, user) => {
  console.log(data);
  try {
    const res = await axios.post('api/admin', data, {
      headers: {
        'x-auth-token': user.token,
      },
    });
    dispatch({ type: 'ADD_PRODUCT', payload: res.data });
  } catch (error) {
    console.log(error.errors);
  }
};
