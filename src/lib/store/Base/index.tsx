import axios from 'axios';

const baseURL ='https://api2.sciencejobs.com.au/api'

const BaseApi = axios.create({
  baseURL,
});
export default BaseApi;
