import axios from 'axios';

const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3500/api'
    : 'https://api1.sciencejobs.com.au/api';

const BaseApi = axios.create({
  baseURL,
});

export default BaseApi;
