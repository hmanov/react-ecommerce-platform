import axios from 'axios';
const productService = {
  getProducts: async () => {
    try {
      return await axios.get('/api');
    } catch (error) {
      return error.response;
    }
  },

  createProduct: async (data, user) => {
    try {
      const res = await axios.post('api/admin', data, {
        headers: {
          'x-auth-token': user.token,
        },
      });
    } catch (error) {
      return error.response;
    }
  },

  deleteProduct: async (data, user) => {
    try {
      return await axios.delete('api/admin', {
        headers: {
          'x-auth-token': user.token,
        },
        data: { data },
      });
    } catch (error) {
      return error.response;
    }
  },
};
export default productService;
