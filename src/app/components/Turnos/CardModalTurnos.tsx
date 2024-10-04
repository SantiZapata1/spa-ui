"use client";

// Hooks
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { createTurnoRequest } from '@/api/turnos';
import Swal from 'sweetalert2';
import { useAuth } from '@/context/auth';
import { useRouter } from 'next/navigation';
import { postcreateSession } from '../../../api/pay'; // Importar la función para crear la sesión de pago

// Componentes
import InputText from '../Inputs/InputText';
import InputTextArea from '../Inputs/InputTextArea';


// Interfaz
type CardModalTurnosProps = {
    isOpen: boolean;
    onClose: () => void;
    nombreServicio: string;
    precio: number; // Recibir el precio
    detalles: string; // Recibir los detalles
}

export default function CardModalTurnos({ isOpen, onClose, nombreServicio, precio, detalles }: CardModalTurnosProps) {
    const { handleSubmit, register, formState: { errors }, setValue } = useForm();
    const router = useRouter();
    const { user, isAuthenticated } = useAuth();

    // Para cerrar el modal al presionar la tecla escape
    useEffect(() => {
        const cerrarModal = (e: any) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', cerrarModal);
        return () => {
            window.removeEventListener('keydown', cerrarModal);
        };
    }, [onClose]);

    if (!isOpen) return null; // No mostrar el modal si no está abierto

    const onSubmit = async (values: any) => {
        if (isAuthenticated) {
            Swal.fire({
                title: '¿Proceder a pagar?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#7BB263',
                cancelButtonColor: '#D8316C',
                confirmButtonText: 'Sí, pagar',
                cancelButtonText: 'Cancelar'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    try {
                        values.cliente = user.nombre + user.apellido;
                        values.idUsuario = user.id;

                        // Crear un turno con los datos del formulario
                        await createTurnoRequest(values);
                        
                        // Crear la sesión de pago
                        const session = await postcreateSession({ 
                            nombreServicio, 
                            precio, 
                            detalles 
                        });

                        // Redirigir a la URL de Stripe
                        window.location.href = session.url; 
                    } catch (error) {
                        console.log(error);
                        Swal.fire({
                            title: 'Error',
                            text: 'No se pudo procesar el pago. Intenta nuevamente.',
                            icon: 'error',
                            confirmButtonColor: '#D8316C',
                        });
                    }
                }
            });
        } else {
            router.push('/login');
        }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
                <button 
                    className="absolute top-2 right-3 text-gray-500 hover:text-gray-800" 
                    onClick={onClose}>
                    ✕
                </button>

                <h2 className="text-lg font-bold">¡Agenda tu turno!</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
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

                    <div className="my-4">
                        <label htmlFor="time" className="block text-sm font-bold">
                            Nombre del servicio:
                        </label>
                        <input 
                            type="hidden" 
                            {...register('servicio')} 
                            value={nombreServicio} 
                        />
                        <p className="text-gray-500 text-xl ">{nombreServicio}</p>
                    </div>
                    
                    <div className="my-4">
                        <label htmlFor="time" className="block text-sm font-bold mb-2">
                            Comentario:
                        </label>
                        <InputTextArea 
                            campo="" 
                            nombre="comentarios" 
                            placeholder='Agrega un comentario' 
                            register={register} 
                            setValue={setValue} 
                            errors={errors.servicio} 
                            type="text" 
                        />
                    </div>

                    <button type="submit" className="px-4 py-2 bg-sage hover:bg-sage-hover text-white rounded">
                        Pagar
                    </button>
                </form>
            </div>
        </div>
    );
}
