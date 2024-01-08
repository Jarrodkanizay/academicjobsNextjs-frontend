import axios from 'axios';

const baseURL: any =
  process.env.REACT_APP_ENV === 'https://api2.sciencejobs.com.au/api';

const BaseApi = axios.create({
  baseURL,
});

export default BaseApi;
