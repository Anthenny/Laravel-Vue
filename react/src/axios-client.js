// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
});

// axiosClient.interceptors.request.use((config) => {
//   const token = localStorage.get('ACCESS_TOKEN');
//   // eslint-disable-next-line no-param-reassign
//   config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

// axiosClient.interceptors.response.use(() => {

// }, (error) => {
//   const { response } = error;

//   if (response.status === 401) {
//     localStorage.removeItem('ACCESS_TOKEN');
//   }
// });

export default axiosClient;
