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
  updateCartProducts: async ({ token }, itemId, count) => {
    try {
      const res = await axios.post(
        '/api/cart',
        { itemId, count },
        {
          headers: {
            'x-auth-token': token,
          },
        }
      );
      return res;
    } catch (error) {
      return error.response;
    }
  },
  removeCartProduct: async ({ token }, itemId) => {
    try {
      const res = await axios.delete('/api/cart', {
        headers: {
          'x-auth-token': token,
        },
        data: { itemId },
      });
      return res;
    } catch (error) {
      return error.response;
    }
  },
  clearCart: async ({ token }) => {
    try {
      const res = await axios.delete('/api/cart/clear', {
        headers: {
          'x-auth-token': token,
        },
      });
      return res;
    } catch (error) {
      return error.response;
    }
  },
};

export default productService;
