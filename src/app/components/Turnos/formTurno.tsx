"use client"
import React from "react";
import InputText from "../Inputs/InputText"
import { useForm } from "react-hook-form"

export default function FormTurno(){

    // const{handleSubmit, register, formState:{errors},setValue }=useForm()

    return(

        {/* formulario con los datos del nuevo turno */}
    //     <form onSubmit={handleSubmit(onSubmit)}>

    //         {/* fecha */}
    //         <div className="my-4">
    //             <label 
    //                 htmlFor="date" 
    //                 className="block text-sm font-semibold mb-2">
    //                 Selecciona una fecha:
    //             </label>
    //             <input
    //                 type="date"
    //                 required
    //                 className="w-full px-3 py-2 border rounded"
    //                 {...register('fecha')}
    //             />
    //         </div>

    //         {/* hora */}
    //         <div className="my-4">
    //             <label 
    //                 htmlFor="time" 
    //                 className="block text-sm font-bold mb-2">
    //                 Selecciona una hora:
    //             </label>
    //             <input
    //                 type="time"
    //                 required
    //                 {...register('hora')}
    //                 className="w-full px-3 py-2 border rounded"
    //             />
    //         </div>

    //         {/* nombre del cliente */}
    //         <div>
    //             <InputText 
    //                 campo="cliente" 
    //                 valor={user?.nombre ? user.nombre : ""}  
    //                 nombre="cliente" 
    //                 register={register} 
    //                 setValue={setValue} 
    //                 errors={errors.servicio} 
    //                 type="text" />
    //         </div>

    //         {/* nombre del servicio */}
    //         <div className="my-4">
    //             <label 
    //                 htmlFor="time" 
    //                 className="block text-sm font-bold">
    //                 Nombre del servicio:
    //             </label>
    //             <InputText 
    //                 campo="" 
    //                 valor={nombreServicio} 
    //                 nombre="servicio" 
    //                 register={register} 
    //                 setValue={setValue} 
    //                 errors={errors.servicio} 
    //                 type="text" />
    //         </div>
            
    //         {/* comentario */}
    //         <div className="my-4">
    //             <label 
    //                 htmlFor="time" 
    //                 className="block text-sm font-bold mb-2">
    //                 Comentario:
    //             </label>
    //             <InputText 
    //                 campo="" 
    //                 nombre="comentarios" 
    //                 register={register} 
    //                 setValue={setValue} 
    //                 errors={errors.servicio} 
    //                 type="text" />
    //         </div>

    //         {/* boton enviar */}
    //         <button 
    //             type="submit" 
    //             className="px-4 py-2 bg-sage hover:bg-sage-hover text-white rounded">
    //             Enviar
    //         </button>
    //     </form>

    );

}