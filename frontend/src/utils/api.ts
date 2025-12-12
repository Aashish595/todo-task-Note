const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

interface RequestConfig extends RequestInit {
  token?: string;
}

const apiRequest = async (endpoint: string, config: RequestConfig = {}) => {
  const { token, ...customConfig } = config;

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const finalConfig: RequestInit = {
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  const response = await fetch(`${API_URL}${endpoint}`, finalConfig);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong');
  }

  return data;
};

export default apiRequest;
