export interface User {
  _id: string;
  name: string;
  email: string;
  bio?: string;
  avatar?: string;
}

export interface AuthResponse {
  _id: string;
  name: string;
  email: string;
  bio?: string;
  avatar?: string;
  token: string;
}

export interface Task {
  _id: string;
  title: string;
  description?: string;
  status: 'pending' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  dueDate?: string;
  user: string;
  createdAt: string;
  updatedAt: string;
}

export interface TaskFormData {
  title: string;
  description?: string;
  status?: 'pending' | 'in-progress' | 'completed';
  priority?: 'low' | 'medium' | 'high';
  dueDate?: string;
}
