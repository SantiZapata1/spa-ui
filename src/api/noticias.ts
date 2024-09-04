import axios from './axios';

export const getNoticias = async () => {
  const { data } = await axios.get('/obtener-noticias');
  return data;
};


export const createNoticia = async (noticia: any) => {
  try {
      const formData = new FormData();
      formData.append('image', noticia.imagen); // Asume que el objeto noticia tiene una propiedad 'image'
      formData.append('titulo', noticia.titulo); // Asume que el objeto noticia tiene una propiedad 'titulo'
      formData.append('contenido', noticia.contenido); // Asume que el objeto noticia tiene una propiedad 'contenido'

      await axios.post('/crear-noticia', formData, {
          headers: {
              'Content-Type': 'multipart/form-data'
          }
      });
  } catch (error) {
      console.log(error);
  }
};