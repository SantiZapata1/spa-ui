import axios from './axios';

export const getTurnos = async () => {
  const response = await axios.get('/obtener-turnos');
  return response.data;
};