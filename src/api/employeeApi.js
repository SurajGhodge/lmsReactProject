import axiosInstance from './axiosConfig';

export const fetchEmployees = () => axiosInstance.get('/employees');
export const addEmployee = (data) => axiosInstance.post('/employees', data);
export const updateEmployee = (id, data) => axiosInstance.put(`/employees/${id}`, data);
export const deleteEmployee = (id) => axiosInstance.delete(`/employees/${id}`);