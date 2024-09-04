import React from 'react';
import Image from 'next/image';
import { useAuth } from '../../../context/auth';
import { deleteNoticia } from '../../../api/noticias';
import Swal from 'sweetalert2';
interface CardProps {
  id: string;
  title: string;
  text: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({id, title, text, imageUrl }) => {

  const { user } = useAuth();
  const handleDelete = async () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Estás por eliminar una noticia",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#7BB263',
      cancelButtonColor: '#D8316C',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteNoticia(id);
          Swal.fire({
            title: '¡Listo!',
            text: '¡Tu noticia ha sido eliminada correctamente!',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#7BB263',
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.reload();
            }
          }
          )
        } catch (error) {
          console.log(error);
        }
      }
    }
    )
  }
  return (
    <div className="h-7/10 border rounded-lg shadow bg-gray-800 border-gray-700">
        <Image
          className="rounded-t-lg h-3/10"
          src={imageUrl}
          alt="Imagen de la noticia"
          width={400} // Ajusta el tamaño según sea necesario
          height={250}
        />
        
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-400">
          {text}
        </p>

      {user?.admin && (
        
        <div className="flex flex-row justify-end">
          <button className="bg-green-700 text-white px-4 py-2 rounded-lg" >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>
          </button>
          <button className="bg-orange-700 text-white px-4 py-2 rounded-lg ml-2" onClick={() => handleDelete()} > 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>

          </button>
        
        </div>
      )}
      </div>
    </div>
  );
}

export default Card;