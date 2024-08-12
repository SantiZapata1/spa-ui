import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Card from '../components/NavBar/Card';
import Footer from '../components/NavBar/Footer';



export default function NoticiasPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <NavBar /> */}
      <div className="flex-grow p-8 lg:p-10">
        {/* Grid layout para hasta 4 tarjetas en fila */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Card 
            title="Descuento" 
            text="Nuevo descuento en nuestro spa."
            imageUrl="/path/to/image1.jpg"
          />
          <Card 
            title="Nuevo plan mensual" 
            text="Se renueva el plan mensual con beneficios adicionales."
            imageUrl="/path/to/image2.jpg"
          />
          <Card 
            title="Nuevo descuento con tarjeta VISA" 
            text="Obtén un descuento especial pagando con tarjeta VISA."
            imageUrl="/path/to/image3.jpg"
          />
          <Card 
            title="Promoción especial" 
            text="Promoción especial solo por tiempo limitado."
            imageUrl="/path/to/image4.jpg"
          />
          {/* Agrega más tarjetas si es necesario */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
