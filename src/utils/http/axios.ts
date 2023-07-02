import Axios from 'axios';

const axios = Axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axios;
