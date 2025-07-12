import axiosInstance from './axiosConfig';

export const applyLeave = (data) => axiosInstance.post('/leaves', data);
export const getLeaveHistory = (empId) => axiosInstance.get(`/leaves/employee/${empId}`);
export const getLeaveBalance = (empId) => axiosInstance.get(`/leaves/balance/${empId}`);