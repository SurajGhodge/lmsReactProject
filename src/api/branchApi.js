import axiosInstance from './axiosConfig';

export const fetchBranches = () => axiosInstance.get('/branches');
export const addBranch = (data) => axiosInstance.post('/branches', data);
export const updateBranch = (id, data) => axiosInstance.put(`/branches/${id}`, data);
export const deleteBranch = (id) => axiosInstance.delete(`/branches/${id}`);