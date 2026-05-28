import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  console.log('🔗 API Request:', config.method?.toUpperCase(), config.url);
  return config;
});

api.interceptors.response.use(
  (response) => {
    console.log('✅ API Response:', response.status, response.data);
    const payload = response.data?.data ?? response.data;
    return { success: true, data: payload };
  },
  (error) => {
    console.error('❌ API Error:', error.response?.status, error.response?.data);
    return {
      success: false,
      error: error.response?.data?.error || error.message,
    };
  }
);

export const apiGet = (endpoint) => api.get(endpoint);
export const apiPost = (endpoint, data) => api.post(endpoint, data);
export const apiPut = (endpoint, data) => api.put(endpoint, data);
export const apiPutFormData = (endpoint, formData) => api.put(endpoint, formData);
export const apiDelete = (endpoint) => api.delete(endpoint);
export const apiPostFormData = (endpoint, formData) => api.post(endpoint, formData);
export const setAuthToken = (token) => localStorage.setItem('authToken', token);
export const removeAuthToken = () => {
  localStorage.removeItem('authToken');
  localStorage.removeItem('isAdminAuthenticated');
};
export const isAuthenticated = () => !!localStorage.getItem('authToken');

export default {
  apiGet,
  apiPost,
  apiPut,
  apiDelete,
  apiPostFormData,
  setAuthToken,
  removeAuthToken,
  isAuthenticated,
  BASE_URL: API_BASE_URL,
};
