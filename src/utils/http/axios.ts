import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'http://192.168.101.240:1122',
  timeout: 10000,
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
