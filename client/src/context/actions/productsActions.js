import axios from 'axios';
export const getFeatured = async (dispatch) => {
  try {
    const res = await axios.get('/api');

    dispatch({ type: 'GET_PRODUCTS', payload: res.data });
  } catch (error) {
    console.error(error);
  }
};
