import React from 'react';
import InputText from '../components/NavBar/InputText'; // Importamos el componente InputText
import NavBar from '../components/NavBar/NavBar';

const ContactoForm = () => {
  return (
    <>
      <NavBar /> {/* Incluimos la NavBar aquí */}
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-auto mt-8">
        <h1 className="text-3xl font-bold text-center text-green-500 mb-8">
          Contáctanos
        </h1>
        <form className="space-y-6">
          <InputText
            nombre="Nombre"
            type="text"
            placeholder="Tu nombre"
          />
          <InputText
            nombre="Correo Electrónico"
            type="email"
            placeholder="tucorreo@example.com"
          />
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mensaje
            </label>
            <textarea
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Escribe tu mensaje aquí"
              rows={4}
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
      </div>
    </>
  );
};

export default ContactoForm;