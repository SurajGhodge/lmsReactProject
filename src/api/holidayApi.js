import axiosInstance from './axiosConfig';

export const fetchHolidays = () => axiosInstance.get('/holidays');
