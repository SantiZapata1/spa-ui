'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import InputText from '../components/NavBar/InputText'; // Asegúrate de que esta ruta sea correcta
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/NavBar/Footer';

// Define el tipo para los datos del formulario
type FormData = {
  nombre: string;
  correo_electronico: string;
  apellido: string;
  telefono: string;
  why_hire: string;
  cv: FileList;
};

const EmpleosForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log("Datos del formulario:", data);
    
  };

  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-grow bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-6 text-center">¿Quieres trabajar con nosotros?</h2>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <InputText
            campo="Nombre"
            nombre="nombre"
            type="text"
            placeholder="Tu nombre"
            register={register}
            setValue={() => {}}
            errors={errors.nombre}
            require={true}
          />
          <InputText
            campo="Correo Electrónico"
            nombre="correo_electronico"
            type="email"
            placeholder="tucorreo@ejemplo.com"
            register={register}
            setValue={() => {}}
            errors={errors.correo_electronico}
            require={true}
          />
          <InputText
            campo="Apellido"
            nombre="apellido"
            type="text"
            placeholder="Tu apellido"
            register={register}
            setValue={() => {}}
            errors={errors.apellido}
            require={true}
          />
          <InputText
            campo="Número de Teléfono"
            nombre="telefono"
            type="tel"
            placeholder="Tu número de teléfono"
            register={register}
            setValue={() => {}}
            errors={errors.telefono}
            require={true}
          />
          <div>
            <label className="block text-sm font-medium text-gray-700">
              ¿Por qué deberíamos contratarte?
            </label>
            <textarea
              {...register('why_hire', { required: 'Este campo es obligatorio' })}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 resize-none h-28"
              placeholder="Escribe tu respuesta aquí"
            ></textarea>
            {errors.why_hire && <p className="text-red-500 text-xs mt-1">{errors.why_hire.message}</p>}
          </div>
          <div className="relative z-0 w-full mb-5 flex justify-center group">
            <input
              type="file"
              {...register('cv', { required: 'Debes adjuntar un CV' })}
              className="text-sm text-gray-900 bg-transparent border-0 cursor-pointer focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            />
            <label className="sr-only">
              Archivo CV
            </label>
            {errors.cv && <p className="text-red-500 text-xs mt-1">{errors.cv.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-700 text-white font-bold rounded-lg shadow-lg hover:bg-blue-800 transition duration-300"
          >
            Enviar
          </button>
        </form>
      </main>
  
    </div>
  );
};

export default EmpleosForm;
