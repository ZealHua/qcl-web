// auth/utils/api.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.API_BASE_URL,
});

export const register = async (email, password, password2) => {
  const response = await apiClient.post('/register/', { email, password, password2 });
  return response.data;
};

export const login = async (email, password) => {
  const response = await apiClient.post('/login/', { email, password });
  return response.data;
};

