import axios from 'axios';
import { API_URL } from 'Utils/constants';

const apiUrl = API_URL;

export const instance = axios.create({
  baseURL: apiUrl,
  withCredentials: true,

  // headers: {
  //   'Content-Type': 'application/json',
  //   'Content-Type': 'multipart/form-data',
  //   'Content-Type': 'application/x-www-form-urlencoded',
  // },
});
