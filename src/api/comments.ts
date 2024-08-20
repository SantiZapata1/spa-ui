import axios from "axios";

// peticiones CRUD para comentarios

export const getCommentsRequest = () => axios.get("/comments");

export const getCommentRequest = () => axios.get("/comment");

export const createCommentRequest = (comment:any) => axios.post("/comments");

export const updateCommentRequest = (comment:any) => axios.put(`/comments/${comment.id}`, comment);

export const deleteCommentsRequest = (id:any) => axios.delete(`/comments/${id}`);