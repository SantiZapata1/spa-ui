import axios from './axios';

export const getNoticias = async () => {
  const { data } = await axios.get('/obtener-noticias');
  return data;
};

export const createNoticia = async (noticia: any) => {
    try{
      const formData = new FormData();
      formData.append('image', noticia); // Asume que el servidor espera un campo 'image' para el archivo
      await axios.post('/crear-noticia', noticia);
    }
    catch(error){
        console.log(error);
    }
};