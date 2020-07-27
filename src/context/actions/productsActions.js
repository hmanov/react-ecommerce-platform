import axios from 'axios';
export const getFeatured = async (dispatch) => {
  try {
    const res = await axios.get('http://localhost:5000');
    dispatch({ type: 'GET_PRODUCTS', payload: res.data });
  } catch (error) {
    console.error(error);
  }
};
