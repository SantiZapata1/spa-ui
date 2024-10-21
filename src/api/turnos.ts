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

export const getTurnosByUser = async (id:any) => {
  const response = await axios.get(`/obtener-turnos-usuario/${id}`);
  return response.data;
};

export const getTurnosToday = async () => {
  const response = await axios.get('/obtener-turnos-hoy');
  return response.data;
};

export const getTurnosByDate = async (desde:any, hasta:any) => {
  const response = await axios.get(`/obtener-turno-por-fechas/${desde}/${hasta}`);
  return response.data;
};



export const generarEstadisticaTurnos = async (desde:any, hasta:any) => {
  const response = await axios.get(`/generar-estadistica-turnos/${desde}/${hasta}`);
  return response.data;
}

export const asignarTurnoAProfesional = async (idTurno:any, idProfesional:any) => {
  const response = await axios.put(`/asignar-turno/${idTurno}/${idProfesional}`);
  return response.data;
}

export const obtenerMisTurnosAsignados = async (idProfesional:any) => {
  const response = await axios.get(`/obtener-mis-turnos-asignados/${idProfesional}`);
  return response.data;
}