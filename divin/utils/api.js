/* eslint-disable no-param-reassign */
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

// apiUrl need to be adapted to run the project locally. Replace the IPaddr with yours
const apiUrl = 'http://192.168.50.195:3000';
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
