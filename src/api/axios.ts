import axios from 'axios';
import { BACKEND_API_URL } from 'constants';

const API = axios.create({
  baseURL: BACKEND_API_URL,
});

export default API;
