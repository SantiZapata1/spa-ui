'use client';
import Card2 from '../../../components/Cards/CardAgenda';


export default function contacto(){

    const cardsData = [
        {
          title: 'Lorem ipsum',
          price: 50,
          period: 'hora',
          features: [
            { text: 'Lorem ipsum dolor', available: true },
            { text: 'Lorem ipsum dolor', available: true },
            { text: 'Lorem ipsum dolor', available: true },
            { text: 'Lorem ipsum dolor', available: true },
            { text: 'Lorem ipsum dolor', available: true },
            
          ],
          buttonText: 'Reservar turno',
          onButtonClick: () => alert('turno reservado!'),
        },
        {
            title: 'Lorem ipsum',
            price: 50,
            period: 'hora',
            features: [
              { text: 'Lorem ipsum dolor', available: true },
              { text: 'Lorem ipsum dolor', available: true },
              { text: 'Lorem ipsum dolor', available: true },
              { text: 'Lorem ipsum dolor', available: true },
              { text: 'Lorem ipsum dolor', available: true },
              
            ],
            buttonText: 'Reservar turno',
            onButtonClick: () => alert('turno reservado!'),
          },
          {
            title: 'Lorem ipsum',
            price: 50,
            period: 'hora',
            features: [
              { text: 'Lorem ipsum dolor', available: true },
              { text: 'Lorem ipsum dolor', available: true },
              { text: 'Lorem ipsum dolor', available: true },
              { text: 'Lorem ipsum dolor', available: true },
              { text: 'Lorem ipsum dolor', available: true },
              
            ],
            buttonText: 'Reservar turno',
            onButtonClick: () => alert('turno reservado!'),
          },
          {
            title: 'Lorem ipsum',
            price: 50,
            period: 'hora',
            features: [
              { text: 'Lorem ipsum dolor', available: true },
              { text: 'Lorem ipsum dolor', available: true },
              { text: 'Lorem ipsum dolor', available: true },
              { text: 'Lorem ipsum dolor', available: true },
              { text: 'Lorem ipsum dolor', available: true },
              
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