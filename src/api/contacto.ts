import axios from "./axios";

export const sendMessageContacto = (data:any) => axios.post("/enviar-mensaje-contacto", data);
export const getContactos = () => axios.get("/obtener-contactos")