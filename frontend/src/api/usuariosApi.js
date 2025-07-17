import api from './axios';

export const createUser = (data) => api.post('/usuarios', data);
export const getUsuarios  = () => api.get('/usuarios');
export const eliminarUsuario = (id) => {return api.delete(`/usuarios/${id}`);};
export const getUsuario = (id) => api.get(`/usuarios/${id}`); 
export const updateUsuario = (id, data) => api.put(`/usuarios/${id}`, data);