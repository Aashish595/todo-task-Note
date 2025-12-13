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

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  });

  // 🔥 SAFETY CHECK
  const contentType = response.headers.get('content-type');
  const text = await response.text();

  let data;
  if (contentType?.includes('application/json')) {
    data = JSON.parse(text);
  } else {
    console.error('Non-JSON response:', text);
    throw new Error('Server returned invalid response');
  }

  if (!response.ok) {
    throw new Error(data?.message || 'Something went wrong');
  }

  return data;
};

export default apiRequest;
