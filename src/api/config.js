/**
 * Centralized API Endpoints & Base Configuration
 */

export const API_BASE_URL = 'https://neuropi-user-api.azurewebsites.net/api';

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/users/login',
    PROFILE: '/users/profile',
    REFRESH_TOKEN: '/users/refresh-token',
  },
  STUDENTS: {
    LIST: '/students',
    DETAILS: (id) => `/students/${id}`,
  },
  PORTAL: {
    DASHBOARD: '/portal/dashboard',
  }
};
