/* eslint-disable import/prefer-default-export */
import * as SecureStore from 'expo-secure-store';
import { decode as atob } from 'base-64';

export const getSession = async () => {
  const jwt = await SecureStore.getItemAsync('token');
  let session;
  try {
    if (jwt) {
      const base64Url = jwt.split('.')[1];
      const base64 = base64Url.replace('-', '+').replace('_', '/');
      // what is atob ?
      // https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/atob
      session = JSON.parse(atob(base64));
    }
  } catch (error) {
    console.log(error);
  }
  return session;
};
