import axios from 'axios';
const authService = {
  getUser: async ({ token }) => {
    try {
      localStorage.setItem('token', token);
      const user = await axios.get('api/auth', { headers: { 'x-auth-token': token } });
      console.log(user.data);
      localStorage.setItem('user', JSON.stringify(user.data));
      return user;
    } catch (error) {
      localStorage.clear();
      return error.response;
    }
  },
  register: async (data) => {
    try {
      const res = await axios.post('api/auth/register', data);
      return authService.getUser(res.data);
    } catch (error) {
      return error.response;
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
