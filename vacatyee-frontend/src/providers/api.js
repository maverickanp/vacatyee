import axios from 'axios';

const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/'
    : process.env.BASE_URL;

export const Api = axios.create({
  baseURL
});

export default Api;
