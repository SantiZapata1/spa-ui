import React from 'react';

const PoliticaPrivacidad = () => {
  return (
    <div className="container mx-auto my-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Política de Privacidad</h1>
      <h2 className="text-2xl font-bold text-center mb-4">Sentirse Bien</h2>

      <section className="mb-8">
        <h3 className="text-xl font-bold mb-2">Política y Seguridad</h3>
        <p className="text-justify">
          En Sentirse Bien, contratamos los servicios de seguridad ofrecidos por Mercado Pago para todas nuestras transacciones. Mercado Pago utiliza encriptación avanzada mediante el protocolo Secure Sockets Layer (SSL) con llaves de 128 bits, garantizando la seguridad de la información transmitida desde su dispositivo a los servidores correspondientes. 
        </p>
        <p className="text-justify">
          Una vez que la información llega a los servidores de Mercado Pago, se almacena de forma segura, tanto física como electrónicamente, utilizando Firewalls que protegen la información de accesos no autorizados. Además, los servidores no están conectados directamente a Internet, lo que garantiza que la información solo sea accesible para computadoras autorizadas.
        </p>
        <p className="text-justify">
          Aparte de estas medidas de seguridad, Mercado Pago implementa protocolos adicionales para prevenir cualquier intento de fraude, garantizando la protección de los datos de los usuarios en cada transacción.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-bold mb-2">Uso de Información Personal</h3>
        <p className="text-justify">
          En Sentirse Bien, respetamos y protegemos la privacidad de nuestros clientes. Toda la información personal recolectada será utilizada exclusivamente con fines de ofrecer un mejor servicio y asegurar una experiencia satisfactoria. 
        </p>
        <p className="text-justify">
          La información personal como nombre, dirección, y datos de contacto solo será compartida con terceros en caso de ser necesario para procesar pagos o coordinar citas, y siempre cumpliendo con los estándares más altos de seguridad.
        </p>
        <p className="text-justify">
          Nos comprometemos a no vender, alquilar ni compartir información personal con ninguna empresa u organización ajena a nuestra operación, salvo en caso de ser requerida por la ley o por una autoridad competente.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-bold mb-2">Garantía a Clientes</h3>
        <p className="text-justify">
          En Sentirse Bien nos comprometemos a ofrecer a nuestros clientes un servicio personalizado y de alta calidad, tanto por parte de nuestro equipo como de los prestadores de servicios asociados. Cualquier consulta, duda o inconveniente será atendido de manera oportuna.
        </p>
        <p className="text-justify">
          Para cualquier duda, puede comunicarse telefónicamente al 0800 444 7225 o enviarnos un correo electrónico a info@sentirsebien.com.ar. Estamos aquí para asegurar que su experiencia con Sentirse Bien sea la mejor posible.
        </p>
      </section>
    </div>
  );
};

export default PoliticaPrivacidad;

