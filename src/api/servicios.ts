import axios from "./axios";

// peticiones CRUD para comentarios

// obtener todos los comentarios
export const getServicesRequest = () => axios.get("/servicios");

// crear un comentario
export const createServiceRequest = (servicio:any) => axios.post("/crear-servicio", servicio);

// actualiazar un comentario
export const updateServiceRequest = (servicio:any) => axios.put(`/editar-servicio/${servicio._id}`, servicio);

// eliminar un comentario
export const deleteServicesRequest = (id:any) => axios.delete(`/eliminar-servicio/${id}`);