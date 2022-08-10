import axios from 'axios';
import { BACKEND_API_URL } from 'share/constants';

const API = axios.create({
  baseURL: BACKEND_API_URL,
});

export default API;
