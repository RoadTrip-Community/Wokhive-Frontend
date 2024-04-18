import { API_BASE_URL } from '@/constants/routes';
import axios from 'axios';
import { getCookie } from 'cookies-next';

const token = getCookie('token') || '';

export const axiosInstance = axios.create({ baseURL: API_BASE_URL });

export const axiosInstanceWithAuth = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
