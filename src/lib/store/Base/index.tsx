import axios from 'axios';

export const baseURL = 'http://localhost:3500/api';
                        //http://localhost:3500/api/

export const BaseApi = axios.create({
  baseURL,
});

