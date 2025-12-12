import apiRequest from '../utils/api';
import { Task, TaskFormData } from '../types';

interface TasksResponse {
  success: boolean;
  count: number;
  data: Task[];
}

interface TaskResponse {
  success: boolean;
  data: Task;
}

export const taskService = {
  async getTasks(
    token: string,
    filters?: {
      status?: string;
      priority?: string;
      search?: string;
      sort?: string;
    }
  ): Promise<TasksResponse> {
    const queryParams = new URLSearchParams();
    if (filters?.status) queryParams.append('status', filters.status);
    if (filters?.priority) queryParams.append('priority', filters.priority);
    if (filters?.search) queryParams.append('search', filters.search);
    if (filters?.sort) queryParams.append('sort', filters.sort);

    const queryString = queryParams.toString();
    const endpoint = queryString ? `/tasks?${queryString}` : '/tasks';

    return apiRequest(endpoint, {
      method: 'GET',
      token,
    });
  },

  async getTask(token: string, id: string): Promise<TaskResponse> {
    return apiRequest(`/tasks/${id}`, {
      method: 'GET',
      token,
    });
  },

  async createTask(token: string, taskData: TaskFormData): Promise<TaskResponse> {
    return apiRequest('/tasks', {
      method: 'POST',
      token,
      body: JSON.stringify(taskData),
    });
  },

  async updateTask(
    token: string,
    id: string,
    taskData: Partial<TaskFormData>
  ): Promise<TaskResponse> {
    return apiRequest(`/tasks/${id}`, {
      method: 'PUT',
      token,
      body: JSON.stringify(taskData),
    });
  },

  async deleteTask(token: string, id: string): Promise<{ success: boolean; message: string }> {
    return apiRequest(`/tasks/${id}`, {
      method: 'DELETE',
      token,
    });
  },
};
