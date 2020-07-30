import axios from 'axios';
export const getFeatured = async (dispatch) => {
  try {
    const res = await axios.get('/api');

    setTimeout(() => {
      dispatch({ type: 'GET_PRODUCTS', payload: res.data });
    }, 1000);
  } catch (error) {
    console.error(error);
  }
};
