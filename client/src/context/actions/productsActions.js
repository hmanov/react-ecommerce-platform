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
      return res;
    } catch (error) {
      return error.response;
    }
  },
  editProduct: async (_id, data, user) => {
    try {
      console.log(data);
      const res = await axios.put(
        'api/admin',
        { _id, ...data },
        {
          headers: {
            'x-auth-token': user.token,
          },
        }
      );
      return res;
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
  rateProduct: async ({ token }, productId, rating) => {
    try {
      return await axios.post(
        'api/product/rate',
        { productId, rating },
        {
          headers: {
            'x-auth-token': token,
          },
        }
      );
    } catch (error) {
      return error.response;
    }
  },
};
export default productService;
