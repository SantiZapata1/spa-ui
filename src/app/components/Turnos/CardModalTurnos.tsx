"use client"
import { cwd } from 'process';
import { useForm } from 'react-hook-form'

export default function CardModalTurnos({ isOpen, onClose}:any){

    // destructuramos useForm
    const { 
        register, 
        handleSubmit, 
        setValue, 
        formState: { errors }
   } = useForm()

    if (!isOpen) return null; // No mostrar el modal si no está abierto

    async function crearServicio(){


    }

    function onsubmit({values}:any){
        console.log(values);
    }

    return (
        // fondo
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-sage bg-opacity-80">

            {/* ventana modal */}
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">

                {/* boton para salir */}
                <button
                className="absolute top-2 right-3 text-gray-500 hover:text-gray-800"
                onClick={onClose}
                >
                ✕
                </button>

                <h2 className="text-lg font-bold">Agenda tu turno!</h2>

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
                        <label htmlFor="time" className="block text-sm font-bold mb-2">
                        Nombre del servicio:
                        </label>
                        <input
                        type="text"
                        {...register('servicio')}
                        className="w-full px-3 py-2 border rounded"
                        />
                    </div>

                    <div className="my-4">
                        <label htmlFor="time" className="block text-sm font-bold mb-2">
                        Comentario:
                        </label>
                        <input
                        type="text"
                        {...register('comentario')}
                        
                        className="w-full px-3 py-2 border rounded"
                        />
                    </div>

                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
                        Enviar
                    </button>

                </form>
               
            </div>
        </div>
    );
}