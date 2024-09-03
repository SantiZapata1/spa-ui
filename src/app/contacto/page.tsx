'use client'

// Componentes
import InputText from '../components/Inputs/InputText'; // Importamos el componente InputText
import InputTextArea from '../components/Inputs/InputTextArea';

// Contexto
import { useAuth } from '../../context/auth'; // Importamos el contexto de autenticación
// Hooks
import { useForm } from 'react-hook-form';
// SweetAlert
import Swal from 'sweetalert2';
// Backend
import { sendMessageContacto } from '../../api/contacto'; // Importamos la función para enviar el mensaje de contacto

export default function ContactoForm(){

  const { register, watch, handleSubmit, setValue, formState: { errors } } = useForm();
  const { user } = useAuth(); // Obtenemos el usuario del contexto de autenticación

  return (
    <div className="flex flex-col w-full md:w-4/10">
      <main className="flex-grow bg-white p-8 rounded-lg shadow-lg">

        <h2 className="text-4xl ">
          Contáctanos
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit(async (values) => {
          
          // Aquí pondriamos la conexión a la BD para enviar los datos del formulario usando React Hook Form
          Swal.fire({
            title: '¿Estás seguro?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#7BB263',
            cancelButtonColor: '#D8316C',
            confirmButtonText: 'Sí, enviar',
            cancelButtonText: 'Cancelar'
          }).then(async (result) => {

            if (result.isConfirmed) {
              try {
                // Aquí iría la conexión a la BD
                Swal.fire({
                  title: '¡Listo!',
                  text: '¡Tu mensaje ha sido enviado correctamente!',
                  icon: 'success',
                  confirmButtonText: 'Aceptar',
                  confirmButtonColor: '#7BB263',
                }).then((result) => {
                  if (result.isConfirmed) {
                    // Si se confirma, recargar la página
                    sendMessageContacto(values);
                    window.location.reload();
                  }
                });
              } catch (error) {
                console.log(error)
              }
            }
          });

        })}>

          <InputText
            campo="Nombre"
            nombre="nombre"
            type="text"
            placeholder="Tu nombre"
            register={register}
            setValue={setValue}
            errors={errors.nombre}
            valor={user ? user.nombre : ''}
          />
          <InputText
            campo="Correo Electrónico"
            nombre="correo_electronico"
            type="email"
            placeholder="tucorreo@ejemplo.com"
            register={register}
            setValue={setValue}
            errors={errors.nombre}
            valor={user ? user.correo_electronico : ''}
          />
          <label className="block font-semibold text-gray-700">Mensaje</label>
          <InputTextArea
            campo="Mensaje"
            nombre="mensaje"
            type="text"
            placeholder='Escribe tu mensaje aquí'
            register={register}
            setValue={setValue}
            errors={errors.mensaje}
          />
          <div className="text-center">
            <button
              type="submit"
              className="w-full py-3  text-white text-xl rounded-lg shadow-lg bg-sage transition duration-300"
            >
              Enviar mensaje
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};
