"use client"

// Hooks
import { useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { createTurnoRequest } from '@/api/turnos';

// Componentes
import InputText from '../Inputs/InputText';


type CardModalTurnosProps = {
    isOpen: boolean;
    onClose: () => void;
    nombreServicio: string;
}


export default function CardModalTurnos({ isOpen, onClose, nombreServicio }: CardModalTurnosProps) {

    // destructuramos useForm
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
    }, []);

    const { register, handleSubmit, setValue, formState: {
        errors
    }
    } = useForm()


    async function onsubmit({ values }: any) {
        console.log(values);
        try{
            await createTurnoRequest(values)
            console.log("turno creado exitosamente", values);

        }catch(error){
            console.log("error creando turno",error);
        }
    }

    // Para cerrar el modal al presionar la tecla escape

    if (!isOpen) return null; // No mostrar el modal si no está abierto
    return (
        // fondo

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-sage bg-opacity-80">
            {/* ventana modal */}
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
                {/* boton para salir */}
                <button className="absolute top-2 right-3 text-gray-500 hover:text-gray-800" onClick={onClose}>✕</button>
                <h2 className="text-lg font-bold">¡Agenda tu turno!</h2>

                {/* formulario con los datos del nuevo turno */}
                <form onSubmit={handleSubmit(onsubmit)}>

                    <div className="my-4">


                        <label htmlFor="date" className="block text-sm font-semibold mb-2">
                            Selecciona una fecha:
                        </label>
                        <input
                            type="date"
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
                            {...register('hora')}

                            className="w-full px-3 py-2 border rounded"
                        />
                    </div>
                    <div className="my-4">
                        <label htmlFor="time" className="block text-sm font-bold">
                            Nombre del servicio:
                        </label>
                        <InputText campo="" valor={nombreServicio} nombre="servicio" register={register} setValue={setValue} errors={errors.servicio} type="text" />
                    </div>

                    <div className="my-4">

                        <label htmlFor="time" className="block text-sm font-bold mb-2">
                            Comentario:
                        </label>
                        <InputText campo="" nombre="comentario" register={register} setValue={setValue} errors={errors.servicio} type="text" />
                    </div>
                    <button type="submit" className="px-4 py-2 bg-sage hover:bg-sage-hover text-white rounded">
                        Enviar
                    </button>
                </form>

            </div>
        </div>
    );
}