// Contexto
import { useAuth } from '../../../context/auth';
// Backend
import { deleteNoticia, editNoticia } from '../../../api/noticias';
// Librerías
import Swal from 'sweetalert2';
// Iconos
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';

import { TwitterShareButton, WhatsappShareButton, FacebookShareButton, EmailShareButton, XIcon, WhatsappIcon, FacebookIcon, EmailIcon } from 'react-share';
interface CardProps {
  id: string;
  title: string;
  text: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ id, title, text, imageUrl }) => {
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
      cancelButtonText: 'Cancelar',
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
          });
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  const handleEdit = () => {
    Swal.fire({
      html: `
        <input type="text" id="titulo" class="swal2-input" value="${title}">
        <textarea id="contenido" class="swal2-textarea" style="resize: none;">${text}</textarea>
            `,
      showCancelButton: true,
      confirmButtonColor: '#7BB263',
      cancelButtonColor: '#D8316C',
      confirmButtonText: 'Guardar',
      cancelButtonText: 'Cancelar',

    }).then((result) => {
      if (result.isConfirmed) {
        const titulo = (document.getElementById('titulo') as HTMLInputElement).value;
        const contenido = (document.getElementById('contenido') as HTMLTextAreaElement).value;
        editNoticia(id, { titulo, contenido });
        Swal.fire({
          title: '¡Listo!',
          text: '¡Tu noticia ha sido editada correctamente!',
          icon: 'success',
          confirmButtonText: 'Aceptar',
          confirmButtonColor: '#7BB263'
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        }
        );
      }
    });
  }

  return (
    <div className="h-full border rounded-lg shadow bg-gray-800 border-gray-700 flex flex-col justify-between">
      <img
        className="rounded-t-lg h-6/10 w-full object-cover"
        src={imageUrl}
        alt="Imagen de la noticia"

      />
      <div className="p-5 flex-grow">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-400">{text}</p>
      </div>
      <div className="flex flex-row justify-end p-5 ">
        <TwitterShareButton
          url="https://spa.sentirse-bien.gonzaloebel.tech/"
          title={title}
          hashtags={['SPA', 'SentirseBien']}
        >
          <XIcon className='rounded-2xl w-10 h-10 m-2' /></TwitterShareButton>
        <WhatsappShareButton
          url="https://spa.sentirse-bien.gonzaloebel.tech/"
          title={title}
        >
          <WhatsappIcon className='rounded-2xl w-10 h-10 m-2' ></WhatsappIcon>
        </WhatsappShareButton>
        <FacebookShareButton
          url="https://spa.sentirse-bien.gonzaloebel.tech/"
          hashtag={`${title} #SPA #SentirseBien #Noticias`}
          >
          <FacebookIcon className='rounded-2xl w-10 h-10 m-2' />
        </FacebookShareButton>
        <EmailShareButton 
          url="https://spa.sentirse-bien.gonzaloebel.tech/"
          subject={title}
          body={text}
        >
            <EmailIcon className='rounded-2xl w-10 h-10 m-2'/>
        </EmailShareButton>
      </div>

      {user?.admin && (
        <div className="flex flex-row justify-end p-5">
          <button className="bg-green-700 text-white px-4 py-2 rounded-lg mr-2" onClick={() => handleEdit()}>
            <PencilSquareIcon className='w-6 h-6' />
          </button>
          <button className="bg-orange-700 text-white px-4 py-2 rounded-lg" onClick={() => handleDelete()}>
            <TrashIcon className='w-6 h-6' />
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
