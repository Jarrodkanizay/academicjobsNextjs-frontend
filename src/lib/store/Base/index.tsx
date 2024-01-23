import axios from 'axios';

const baseURL = 'http://localhost:3500/api' //'https://api2.sciencejobs.com.au/api' //

const BaseApi = axios.create({
  baseURL,
});
export default BaseApi;
