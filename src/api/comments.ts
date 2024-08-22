import axios from "./axios";

// peticiones CRUD para comentarios

// obtener todos los comentarios
export const getCommentsRequest = () => axios.get("/comentarios");

// obtener un comentarios
export const getCommentRequest = (id:any) => axios.get(`/comentario/${id}`);

// obtener comentarios de un usuario
export const getCommentsFromUserRequest = (id:any) => axios.get(`/comentarios-usuario/${id}`);
// crear un comentario
export const createCommentRequest = (comment:any) => axios.post("/comentarios", comment);

// actualiazar un comentario
export const updateCommentRequest = (comment:any) => axios.put(`/comentarios/${comment.id}`, comment);

// eliminar un comentario
export const deleteCommentsRequest = (id:any) => axios.delete(`/comentarios/${id}`);