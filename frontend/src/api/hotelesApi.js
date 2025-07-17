import api from './axios';

export const createHotel = (data) => api.post('/hoteles', data);
export const getHoteles = () => api.get('/hoteles');
export const getCiudades = () => api.get('/ciudades');
export const getUsuarios = () => api.get('/usuarios');


