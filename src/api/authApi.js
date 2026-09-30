import { apiClient } from './apiClient';

export const authApi = {
  /**
   * Authenticate Parent or Student user
   */
  async login({ username, password, environment = 'production' }) {
    apiClient.setEnvironment(environment);
    const response = await apiClient.post('/auth/login', { username, password });
    if (response.success && response.data?.token) {
      apiClient.setToken(response.data.token);
    }
    return response;
  },

  /**
   * Request password reset link
   */
  async requestPasswordReset(email) {
    return apiClient.post('/auth/forgot-password', { email });
  },

  /**
   * Check environment status
   */
  async checkGatewayStatus() {
    return apiClient.get('/gateway/status');
  }
};
