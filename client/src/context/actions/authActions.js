import axios from 'axios';
const authService = {
  getUser: async ({ token }) => {
    try {
      // localStorage.setItem('token', token);
      return axios.get('api/auth', { headers: { 'x-auth-token': token } });
    } catch (error) {
      return error.response.data.errors;
    }
  },
  register: async (data) => {
    try {
      const res = await axios.post('api/auth/register', data);
      return authService.getUser(res.data);
    } catch (error) {
      console.log(error.response);
    }
  },
  login: async (data) => {
    try {
      const res = await axios.post('api/auth/login', data);
      return authService.getUser(res.data);
    } catch (error) {
      return error.response;
    }
  },

  logout: () => {
    localStorage.clear();
  },
};
export default authService;
