import api from './axios';

export const getAcomodacionesPermitidas = () => api.get('/acomodaciones/permitidas');
export const getAcomodacionesConReglas = () => api.get('/acomodaciones/con-reglas');