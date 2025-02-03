import axios from 'axios';

const api = axios.create({
    baseURL: '/api',
});

export const register = (user) => api.post('/register', user);
export const login = (user) => api.post('/token', user);
export const getTasks = (token) => api.get('/tasks', {
    headers: { Authorization: `Bearer ${token}` },
});