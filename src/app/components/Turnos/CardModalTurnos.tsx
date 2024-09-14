"use client"

// Hooks
import { useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { createTurnoRequest } from '@/api/turnos';
import Swal from 'sweetalert2';
import { useAuth } from '@/context/auth';
import FormTurno from './FormTurno';
// Componentes
import InputText from '../Inputs/InputText';
import InputTextArea from '../Inputs/InputTextArea';
import { useRouter } from 'next/navigation';
// interfaz
type CardModalTurnosProps = {
    isOpen: boolean;
    onClose: () => void;
    nombreServicio: string;
}


export default function CardModalTurnos({ isOpen, onClose, nombreServicio }: CardModalTurnosProps) {

    

    const router = useRouter();
    const {user, isAuthenticated} = useAuth();

    // Para cerrar el modal al presionar la tecla escape
    useEffect(() => {
        // Al presionar esc del teclado se cierra el modal
        const cerrarModal = (e: any) => {
            // Si se presiona la tecla escape
            if (e.key === 'Escape') {
                // Cerrar el modal
                onClose();
            }
        };
        // Agregar el evento para cerrar el modal al presionar la tecla escape
        window.addEventListener('keydown', cerrarModal);
        // Remover el evento al desmontar el componente
        return () => {
            window.removeEventListener('keydown', cerrarModal);
        };
    });

    if (!isOpen) return null; // No mostrar el modal si no está abierto

    const onSubmit= async(values : any) =>{

        // console.log(values);

        if(isAuthenticated){
<<<<<<< HEAD

            try {
                await createTurnoRequest(values);
                alert("Turno creado exitosamente")
                router.push('/admin')
              } catch (error) {
                console.log(error);
              }
        }else{
            router.push('/login')
        }
=======
            Swal.fire({
                // Haz una pregunta si estás seguro de enviar el formulario
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
                        Swal.fire({
                            // Muestra un mensaje de éxito
                            title: '¡Listo!',
                            text: '¡Tu turno ha sido agendado correctamente!',
                            icon: 'success',
                            confirmButtonText: 'Aceptar',
                            confirmButtonColor: '#7BB263',
                        }).then(async (result) => {
                            if (result.isConfirmed) {
                                // Crea un turno con los datos del formulario
                                values.cliente = user.nombre + user.apellido 
                                values.idUsuario = user.id
                                await createTurnoRequest(values);
                            }
                        });
                    } catch (error) {
                        console.log(error);
                    }
                }
            }
            )
        }else{
            router.push('/login')
        }
        
>>>>>>> decdf2845cd10d88f26496666d2d63d3a58baca1
    }

    return (

        // fondo
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">

            {/* ventana modal */}
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">

                {/* boton para salir */}
                <button 
                    className="absolute top-2 right-3 text-gray-500 hover:text-gray-800" 
                    onClick={onClose}>
                        ✕
                </button>

                <h2 className="text-lg font-bold">¡Agenda tu turno!</h2>
<<<<<<< HEAD
               
=======

                {/* formulario con los datos del nuevo turno */}
                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* fecha */}
                    <div className="my-4">
                        <label htmlFor="date" className="block text-sm font-semibold mb-2">
                            Selecciona una fecha:
                        </label>
                        <input
                            type="date"
                            required
                            className="w-full px-3 py-2 border rounded"
                            {...register('fecha')}
                        />
                    </div>

                    {/* hora */}
                    <div className="my-4">
                        <label htmlFor="time" className="block text-sm font-bold mb-2">
                            Selecciona una hora:
                        </label>
                        <input
                            type="time"
                            required
                            {...register('hora')}

                            className="w-full px-3 py-2 border rounded"
                        />
                    </div>
                    {/* nombre del servicio */}
                    <div className="my-4">
                        <label htmlFor="time" className="block text-sm font-bold">
                            Nombre del servicio:
                        </label>
                        <InputText campo="" valor={nombreServicio} nombre="servicio" register={register} setValue={setValue} errors={errors.servicio} type="hidden" />
                        <p className="text-gray-500 text-xl ">{nombreServicio}</p>
                    </div>
                    
                    {/* comentario */}
                    <div className="my-4">
                        <label htmlFor="time" className="block text-sm font-bold mb-2">
                            Comentario:
                        </label>
                        <InputTextArea campo="" nombre="comentarios" placeholder='Agrega un comentario' register={register} setValue={setValue} errors={errors.servicio} type="text" />
                    </div>

                    {/* boton enviar */}
                    <button type="submit" className="px-4 py-2 bg-sage hover:bg-sage-hover text-white rounded">
                        Enviar
                    </button>
                </form>

>>>>>>> decdf2845cd10d88f26496666d2d63d3a58baca1
            </div>
        </div>
    );
}