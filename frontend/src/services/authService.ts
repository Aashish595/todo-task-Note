import apiRequest from '../utils/api';
import { AuthResponse, User } from '../types';

export const authService = {
  async register(name: string, email: string, password: string): Promise<AuthResponse> {
    return apiRequest('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
    });
  },

  async login(email: string, password: string): Promise<AuthResponse> {
    return apiRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  },

  async getMe(token: string): Promise<User> {
    return apiRequest('/auth/me', {
      method: 'GET',
      token,
    });
  },

  async updateProfile(
    token: string,
    data: Partial<User> & { password?: string }
  ): Promise<AuthResponse> {
    return apiRequest('/auth/profile', {
      method: 'PUT',
      token,
      body: JSON.stringify(data),
    });
  },
};
