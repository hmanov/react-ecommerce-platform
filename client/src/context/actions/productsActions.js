import axios from 'axios';

export const getProducts = async (dispatch) => {
  try {
    const res = await axios.get('/api');
    dispatch({ type: 'GET_PRODUCTS', payload: res.data });
  } catch (error) {
    console.error(error);
  }
};

export const createProduct = async (data, user, dispatch) => {
  const res = await axios.post('api/admin', data, {
    headers: {
      'x-auth-token': user.token,
    },
  });

  dispatch({ type: 'ADD_PRODUCT', payload: res.data });
};

export const deleteProduct = async (dispatch, data, user) => {
  try {
    await axios.delete('api/admin', {
      headers: {
        'x-auth-token': user.token,
      },
      data: { data },
    });

    dispatch({ type: 'DELETE_PRODUCT', payload: data });
  } catch (error) {
    console.log(error.response);
  }
};
