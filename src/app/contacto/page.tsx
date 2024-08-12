'use client'

import React from 'react';
import InputText from '../components/Inputs/InputText'; // Importamos el componente InputText
// import NavBar from '../components/NavBar/NavBar';
import { useForm } from 'react-hook-form';
// import Footer from '../components/Footer/Footer';

const ContactoForm = () => {
  const { register, watch, handleSubmit, setValue, formState: { errors } } = useForm();

  return (
    <div className="flex flex-col w-full md:w-4/10">
      {/* <NavBar /> Incluimos la NavBar aquí */}
      <main className="flex-grow bg-white p-8 rounded-lg shadow-lg">

        <h1 className="text-3xl font-bold text-center text-green-500 mb-8">
          Contáctanos
        </h1>
        
        <form className="space-y-6" onSubmit={handleSubmit(async (values) => {
          // Aquí pondriamos la conexión a la BD para enviar los datos del formulario usando React Hook Form
          console.log(values)
        })}>
          <InputText
            campo="Nombre"
            nombre="nombre"
            type="text"
            placeholder="Tu nombre"
            register={register}
            setValue={setValue}
            errors={errors.nombre}
          />
          <InputText
            campo="Correo Electrónico"
            nombre="correo_electronico"
            type="email"
            placeholder="tucorreo@ejemplo.com"
            register={register}
            setValue={setValue}
            errors={errors.nombre}
          />
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mensaje
            </label>
            <textarea
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
              rows={4}
              {...register("Mensaje", { required: true })}
              placeholder="Escribe tu mensaje aquí"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-full py-3 bg-green-500 text-white font-bold rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
            >
              Enviar Mensaje
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default ContactoForm;