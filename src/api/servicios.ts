import axios from "./axios";

// peticiones CRUD para comentarios

// obtener todos los comentarios
export const getServicesRequest = () => axios.get("/servicios");

// crear un comentario
export const createServicetRequest = (comment:any) => axios.post("/comentarios", comment);

// actualiazar un comentario
export const updateServiceRequest = (comment:any) => axios.put(`/comentarios/${comment.id}`, comment);

// eliminar un comentario
export const deleteServicesRequest = (id:any) => axios.delete(`/eliminar-servicio/${id}`);