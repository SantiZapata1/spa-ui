import axios from './axios';

export const getTurnos = async () => {
  const response = await axios.get('/obtener-turnos');
  return response.data;
};

// crear un turno
export const createTurnoRequest = (turno:any) => axios.post("/solicitar-turno", turno);

// agregar este controlador y ruta en la api
// actualiazar un turno
export const updateTurnoRequest = (turno:any) => axios.put(`/editar-turno/${turno._id}`, turno);

// eliminar un turno
export const deleteTurnoRequest = (id:any) => axios.delete(`/eliminar-turno/${id}`);