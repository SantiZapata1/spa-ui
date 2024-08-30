import axios from "./axios";

//Mostrar todos los cv
export const getCvRequest = () => axios.get("/buscar-cv");

//Crear un cv
export const createCvRequest = (cv: any) => axios.post("/crear-cv", cv);

//Eliminar un cv
export const deleteCvRequest = (id: string) => axios.delete(`/eliminar-cv/${id}`);

