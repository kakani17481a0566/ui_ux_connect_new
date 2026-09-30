import { apiClient } from './apiClient';
import { API_ENDPOINTS } from './config';

export const authService = {
  /**
   * Login user against production Azure API endpoint:
   * POST https://neuropi-user-api.azurewebsites.net/api/users/login
   */
  async login(username, password) {
    const response = await apiClient.post(API_ENDPOINTS.AUTH.LOGIN, {
      username,
      password,
    });

    if (response && response.data && response.data.accessToken) {
      apiClient.setToken(response.data.accessToken);
    }

    return response;
  },

  /**
   * Logout current user session
   */
  logout() {
    apiClient.clearToken();
  },

  /**
   * Check if token exists
   */
  isAuthenticated() {
    return !!apiClient.getToken();
  }
};
