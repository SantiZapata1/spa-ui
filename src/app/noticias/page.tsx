import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Card from '../components/NavBar/Card';
import Footer from '../components/NavBar/Footer';



export default function NoticiasPage() {
    return (
      <div className="h-screen flex flex-col">
        <NavBar />
        <div className="flex-grow p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card 
              title="Descuento" 
              text="Nuevo descuento en "
              imageUrl="/"
            />
            <Card 
              title="Nuevo plan mensual" 
              text="Se renueva plan mensual bla bla bla"
              imageUrl="/"
            />
            <Card 
              title="Nuevo descuento con tarjeta VISA" 
              text="Bla bla bla."
              imageUrl="/"
            />
            
            
           
          </div>
          
        </div>
        <Footer />
      </div>
    );
  }
