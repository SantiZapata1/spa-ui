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

export const deleteNoticia = async (id: string) => {
  try{
    console.log(id)
    await axios.delete(`/eliminar-noticia/${id}`);
  }catch(error){
    console.log(error)
  }
}

export const editNoticia = async (id: string, noticia: any) => {
  try{
    await axios.put(`/editar-noticia/${id}`, noticia);
  }catch(error){
    console.log(error)
  }
}