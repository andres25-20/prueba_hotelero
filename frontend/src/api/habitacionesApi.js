import api from './axios';

export const createHabitacion = (data) => api.post('/habitaciones', data);
export const getHoteles = () => api.get('/hoteles');
export const getTiposHabitacion = () => api.get('/tipos-habitacion');
export const getAcomodaciones = () => api.get('/acomodaciones');
export const getHabitaciones = () => api.get('/habitaciones');
export const getAcomodacionesPorTipo = (tipoId) => api.get(`/reglas-acomodacion/tipo/${tipoId}`);
