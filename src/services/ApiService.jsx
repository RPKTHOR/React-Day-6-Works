import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3000' });

export const getUsers = () => API.get('/users');
export const addUser = (data) => API.post('/users', data);
export const getTurfs = () => API.get('/turfs');
export const addTurf = (data) => API.post('/turfs', data);
export const updateTurf = (id, data) => API.put(`/turfs/${id}`, data);
export const deleteTurf = (id) => API.delete(`/turfs/${id}`);
export const getCart = () => API.get('/cart');
export const addToCart = (data) => API.post('/cart', data);
export const clearCart = () => API.delete('/cart');
export const createBooking = (data) => API.post('/bookings', data);
export const getBookings = () => API.get('/bookings');
