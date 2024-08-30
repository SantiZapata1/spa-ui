'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
import InputText from '../components/Inputs/InputText'; // Asegúrate de ajustar la ruta según sea necesario

// Define el tipo para los datos del formulario
type FormData = {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  propuesta: string;
};

const CVForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormData>();

  // Define la URL del endpoint de la API
  const API_URL = 'http://localhost:4000/api/crear-cv';

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
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
          // Enviar los datos a la API
          const response = await axios.post(API_URL, data, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
          Swal.fire({
            title: '¡Listo!',
            text: '¡Tu CV ha sido enviado correctamente!',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#7BB263',
          });
          console.log('Respuesta de la API:', response.data);
        }
      });
    } catch (error) {
      console.error('Error al enviar los datos:', error);
      Swal.fire({
        title: 'Error',
        text: 'Hubo un error al enviar el CV.',
        icon: 'error',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#D8316C',
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Enviar Currículum</h2>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <InputText
            campo="Nombre"
            placeholder="Tu nombre"
            type="text"
            nombre="nombre"
            register={register}
            require={true}
            setValue={setValue}
            errors={errors.nombre}
          />

          <InputText
            campo="Apellido"
            placeholder="Tu apellido"
            type="text"
            nombre="apellido"
            register={register}
            require={true}
            setValue={setValue}
            errors={errors.apellido}
          />

          <InputText
            campo="Correo Electrónico"
            placeholder="tucorreo@ejemplo.com"
            type="email"
            nombre="email"
            register={register}
            require={true}
            setValue={setValue}
            errors={errors.email}
          />

          <InputText
            campo="Número de Teléfono"
            placeholder="Tu número de teléfono"
            type="tel"
            nombre="telefono"
            register={register}
            require={true}
            setValue={setValue}
            errors={errors.telefono}
          />

          <div>
            <label className="block text-sm font-medium text-gray-700">Propuesta</label>
            <textarea
              {...register('propuesta', { required: 'Este campo es obligatorio' })}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 resize-none h-28"
              placeholder="Escribe tu propuesta aquí"
            ></textarea>
            {errors.propuesta && <p className="text-red-500 text-xs mt-1">{errors.propuesta.message}</p>}
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

export default CVForm;


/*
'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Swal from 'sweetalert2';
import InputText from '../components/Inputs/InputText'; // Asegúrate de ajustar la ruta según sea necesario
import { createCvRequest } from '../../api/cv'; // Ajusta la ruta si es necesario

// Define el tipo para los datos del formulario
type FormData = {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  propuesta: string;
};

const CVForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
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
          // Enviar los datos a la API usando la función createCvRequest
          const response = await createCvRequest(data);
          Swal.fire({
            title: '¡Listo!',
            text: '¡Tu CV ha sido enviado correctamente!',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#7BB263',
          });
          console.log('Respuesta de la API:', response.data);
        }
      });
    } catch (error) {
      console.error('Error al enviar los datos:', error);
      Swal.fire({
        title: 'Error',
        text: 'Hubo un error al enviar el CV.',
        icon: 'error',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#D8316C',
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Enviar Currículum</h2>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <InputText
            campo="Nombre"
            placeholder="Tu nombre"
            type="text"
            nombre="nombre"
            register={register}
            require={true}
            setValue={setValue}
            errors={errors.nombre}
          />

          <InputText
            campo="Apellido"
            placeholder="Tu apellido"
            type="text"
            nombre="apellido"
            register={register}
            require={true}
            setValue={setValue}
            errors={errors.apellido}
          />

          <InputText
            campo="Correo Electrónico"
            placeholder="tucorreo@ejemplo.com"
            type="email"
            nombre="email"
            register={register}
            require={true}
            setValue={setValue}
            errors={errors.email}
          />

          <InputText
            campo="Número de Teléfono"
            placeholder="Tu número de teléfono"
            type="tel"
            nombre="telefono"
            register={register}
            require={true}
            setValue={setValue}
            errors={errors.telefono}
          />

          <div>
            <label className="block text-sm font-medium text-gray-700">Propuesta</label>
            <textarea
              {...register('propuesta', { required: 'Este campo es obligatorio' })}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 resize-none h-28"
              placeholder="Escribe tu propuesta aquí"
            ></textarea>
            {errors.propuesta && <p className="text-red-500 text-xs mt-1">{errors.propuesta.message}</p>}
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

export default CVForm;
*/ 
