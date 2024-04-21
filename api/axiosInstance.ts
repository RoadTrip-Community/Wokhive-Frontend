import { API_BASE_URL, API_BASE_URL_V2 } from '@/constants/routes';
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

export const axiosInstanceV2 = axios.create({ baseURL: API_BASE_URL_V2 });

export const axiosInstanceV2WithAuth = axios.create({
  baseURL: API_BASE_URL_V2,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
