'use client';
import React, { useState } from "react";
import InputText from "../Inputs/InputText";
import InputTextArea from "../Inputs/InputTextArea";
import { useForm } from "react-hook-form";
type Comentario = {
  nombre: string;
  comentario: string;
  calificacion: number;
};

export default function ComentarioForm(){

  // usar useForm()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [calificacion, setCalificacion] = useState(0);

  const manejarEnvio = async (datos:any) => {
    try{
      datos.calificacion = calificacion
      console.log(datos);
      setCalificacion(0);
    }catch(error){
      console.log("Error al enviar el comentario", error)
    }
  };

  

  return (
    <form className="flex flex-col w-full max-w-xl p-8 rounded-lg shadow-sm border bg-white" onSubmit={handleSubmit(manejarEnvio)}>
      <h2 className="text-4xl font-semibold text-center mb-8">Contanos tu experiencia</h2>
      <InputText require campo="Nombre" placeholder="" type="text" nombre="nombre" register={register} errors={errors.nombre}  />
      <InputTextArea require campo="Comentario" nombre="comentario" type="text" placeholder="" register={register} errors={errors.comentario} />
      <div className="mb-4">
        <label htmlFor="calificacion" className="block text-gray-700 font-bold mb-1">
          Calificación:
        </label>
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              className={`w-6 h-6 cursor-pointer ${
                calificacion >= star ? "text-yellow-400" : "text-gray-300"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
              onClick={() => setCalificacion(star)}
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.351 4.162a1 1 0 00.95.691h4.415c.969 0 1.371 1.24.588 1.81l-3.6 2.606a1 1 0 00-.364 1.118l1.351 4.162c.3.921-.755 1.688-1.54 1.118l-3.6-2.606a1 1 0 00-1.175 0l-3.6 2.606c-.784.57-1.839-.197-1.54-1.118l1.351-4.162a1 1 0 00-.364-1.118L2.2 9.59c-.784-.57-.381-1.81.588-1.81h4.415a1 1 0 00.95-.691l1.351-4.162z" />
            </svg>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 text-white text-semibold p-2 rounded-md hover:bg-green-700 transition-all"
      >
        Enviar
      </button>
    </form>
  );
};
