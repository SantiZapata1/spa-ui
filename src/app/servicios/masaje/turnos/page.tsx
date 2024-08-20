'use client';

import NavBar from '../../../components/NavBar/NavBar'
import Card2 from '../../../components/Card2/CardAgenda';


export default function contacto(){

    const cardsData = [
        {
          title: 'Anti-stress',
          price: 50,
          period: 'hora',
          features: [
            { text: 'Reducción del estrés', available: true },
            { text: 'Mejora la circulación', available: true },
            { text: 'Alivio del dolor muscular', available: true },
            { text: 'Relajación profunda', available: true },
            { text: 'Mejora del sueño', available: true },
            
          ],
          buttonText: 'Reservar turno',
          onButtonClick: () => alert('turno reservado!'),
        },
        {
            title: 'Descontracturantes',
            price: 50,
            period: 'hora',
            features: [
              { text: 'Reducción del estrés', available: true },
              { text: 'Mejora la circulación', available: true },
              { text: 'Alivio del dolor muscular', available: true },
              { text: 'Relajación profunda', available: true },
              { text: 'Mejora del sueño', available: true },
              
            ],
            buttonText: 'Reservar turno',
            onButtonClick: () => alert('turno reservado!'),
          },
          {
            title: 'Masajes con piedras calientes',
            price: 50,
            period: 'hora',
            features: [
              { text: 'Reducción del estrés', available: true },
              { text: 'Mejora la circulación', available: true },
              { text: 'Alivio del dolor muscular', available: true },
              { text: 'Relajación profunda', available: true },
              { text: 'Mejora del sueño', available: true },
              
            ],
            buttonText: 'Reservar turno',
            onButtonClick: () => alert('turno reservado!'),
          },
          {
            title: 'Circulatorios',
            price: 50,
            period: 'hora',
            features: [
              { text: 'Reducción del estrés', available: true },
              { text: 'Mejora la circulación', available: true },
              { text: 'Alivio del dolor muscular', available: true },
              { text: 'Relajación profunda', available: true },
              { text: 'Mejora del sueño', available: true },
              
            ],
            buttonText: 'Reservar turno',
            onButtonClick: () => alert('turno reservado!'),
          },
      ];
    
      return (
        <div className="flex flex-wrap justify-center space-x-8 bg-slate-500 min-h-screen p-8">
          {cardsData.map((card, index) => (
            <Card2 key={index} {...card} />
          ))}
        </div>
      );

}