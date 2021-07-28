/* eslint-disable no-param-reassign */
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

// URL need to be adapted to each environment
// TODO : use .env url value in the future
const apiUrl = 'http://192.168.1.63:3000';
axios.interceptors.request.use(
  async (config) => {
    const origin = new URL(config.url);
    const allowedOrigins = [apiUrl];
    const token = await SecureStore.getItemAsync('token');
    if (allowedOrigins.includes(origin)) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

const api = {
  apiUrl,
  axios,
};

export default api;
