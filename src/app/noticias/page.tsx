"use client"

// Componentes
import Card from '../components/Cards/Card';
import InputText from '../components/Inputs/InputText';
import InputTextArea from '../components/Inputs/InputTextArea';
// Hooks
import { useForm } from 'react-hook-form';
import { useState, useRef } from 'react';
// Contexto
import { useAuth } from '../../context/auth';
// Backend
import { createNoticia, getNoticias } from '../../api/noticias';
// Librerías
import Swal from 'sweetalert2';
import { useEffect } from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function NoticiasPage() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const { user, isAuthenticated, isLoading } = useAuth();
  const [ noticias, setNoticias ] = useState([]);
  const fileInputRef = useRef(null);

  
  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const noticias = await getNoticias();
        // Quiero que se muestren las noticias más recientes primero
        setNoticias(noticias.reverse());
      } catch (error) {
        console.log(error);
      }
    }  
    fetchNoticias();
  }, []);

  if (isLoading) {
    return <h1 className='text-4xl font-bold text-center mt-20'>Cargando...</h1>
  }

  return (
    <div className="min-h-screen flex flex-col">

      <div className="flex-grow p-8 lg:p-10">
        {user?.admin && (
          <div className='flex flex-col-items-center justify-center m-4'>
            <form method='post' encType="multipart/form-data" className='w-full md:w-4/10' onSubmit={
              handleSubmit(async (values) => {
                // @ts-ignore
                const file = fileInputRef?.current?.files[0];
                if (!file) {
                  Swal.fire('Error', 'Por favor, selecciona una imagen.', 'error');
                  return;
                }
                const noticia = {
                  titulo: values.titulo,
                  contenido: values.contenido,
                  imagen: file
                };
                Swal.fire({
                  title: '¿Estás seguro?',
                  text: "Estás por subir una noticia",
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#7BB263',
                  cancelButtonColor: '#D8316C',
                  confirmButtonText: 'Sí, enviar',
                  cancelButtonText: 'Cancelar'
                }).then((result: any) => {
                  if (result.isConfirmed)
                    Swal.fire({
                      title: '¡Listo!',
                      text: '¡Tu noticia ha sido enviada correctamente!',
                      icon: 'success',
                      confirmButtonText: 'Aceptar',
                      confirmButtonColor: '#7BB263',
                    }).then(async (result: any) => {
                      if (result.isConfirmed)
                        try {
                          await createNoticia(noticia);
                          window.location.reload();
                        } catch (error) {
                          console.log(error);
                        }
                    }
                    )
                })
              })}>

              <InputText campo="Título" nombre="titulo" type="text" register={register} require={true} errors={errors.titulo} />
              <InputTextArea type="text" placeholder='Contenido de la noticia' campo="Texto" nombre="contenido" register={register} require={true} errors={errors.texto} />
              <input ref={fileInputRef} type="file" accept="image/*" className='mb-2' />
              <button className="w-full py-3  text-white text-xl rounded-lg shadow-lg bg-green-700 hover:bg-green-800 transition duration-300">
                Subir noticia
              </button>
            </form>
          </div>
        )}
        {/* Grid layout para hasta 4 tarjetas en fila */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 h-4/10">
          {noticias.map((noticia: any) => (
            <Card
              key={noticia?._id}
              id={noticia?._id}
              title={noticia?.titulo}
              text={noticia?.contenido}
              imageUrl={noticia?.imagen ? `${API_URL}/images/Noticias/${noticia?.imagen}` : ""}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
