import React from 'react';
import Card from '../components/Cards/Card';


export default function NoticiasPage() {
  return (
    <div className="min-h-screen flex flex-col">

      <div className="flex-grow p-8 lg:p-10">
        
        {/* Grid layout para hasta 4 tarjetas en fila */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Card 
            title="Descuento" 
            text="Nuevo descuento en nuestro spa."
            imageUrl=""
          />
          <Card 
            title="Nuevo plan mensual" 
            text="Se renueva el plan mensual con beneficios adicionales."
            imageUrl=""
          />
          <Card 
            title="Nuevo descuento con tarjeta VISA" 
            text="Obtén un descuento especial pagando con tarjeta VISA."
            imageUrl=""
          />
          <Card 
            title="Promoción especial" 
            text="Promoción especial solo por tiempo limitado."
            imageUrl=""
          />
          {/* Agrega más tarjetas si es necesario */}
        </div>
      </div>
    </div>
  );
}
