import React from 'react';

// Definimos el componente funcional InputText
function InputText({ placeholder, type, nombre }: { placeholder: string; type: string; nombre: string }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        {nombre}
      </label>
      <input
        type={type}
        className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputText;