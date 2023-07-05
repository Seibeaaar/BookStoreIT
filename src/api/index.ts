import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.itbook.store/1.0',
  timeout: 10000,
});

export default instance;
