import axios from 'axios';



export const baseURL = 
 'https://api2.sciencejobs.com.au/api';

export const BaseApi = axios.create({
  baseURL,
});

