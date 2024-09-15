import React from 'react';

const TerminosYCondiciones = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Título principal centrado */}
      <h1 className="text-4xl font-bold text-center mb-2">Términos y Condiciones</h1>
      <h2 className="text-xl text-center font-medium mb-6">Sentirse Bien</h2>

      {/* Sección 1 */}
      <section>
        <h3 className="text-xl font-bold mb-4">SENTIRSE BIEN</h3>
        <p className="mb-6">
          "Sentirse Bien" es una marca registrada que ofrece una variedad de servicios para mejorar la experiencia de bienestar de nuestros usuarios. Cada paquete de "Sentirse Bien" incluye tres elementos principales: un catálogo con detalles de los distintos servicios disponibles; una tarjeta/voucher o código que actúa como comprobante para canjear el servicio seleccionado, con validez única; y la caja que contiene tanto el catálogo como la tarjeta especificada.
        </p>
      </section>

      {/* Sección 2 */}
      <section>
        <h3 className="text-xl font-bold mb-4">CONDICIONES GENERALES</h3>
        <p className="mb-6">
          Toda contratación con "Sentirse Bien" está sujeta a los presentes términos y condiciones. Recomendamos al usuario leerlos detenidamente. Si la persona que adquiere el servicio no es el usuario final, es su responsabilidad compartir estos términos con el beneficiario. "Sentirse Bien" se reserva el derecho de modificar estos términos en cualquier momento sin previo aviso. Al contratar nuestros servicios, el cliente acepta los términos vigentes al momento de la solicitud. Si el cliente no está de acuerdo con los términos, deberá abstenerse de adquirir el servicio.
        </p>
      </section>

      {/* Sección 3 */}
      <section>
        <h3 className="text-xl font-bold mb-4">DERECHOS DEL USUARIO</h3>
        <p className="mb-6">
          El usuario tiene el derecho de seleccionar uno de los servicios ofrecidos en el catálogo recibido dentro de su paquete, canjeándolo mediante la tarjeta/voucher con el prestador seleccionado. En caso de que algún prestador haya cerrado su negocio o ya no esté disponible, el usuario deberá elegir entre los prestadores actualizados que figuran en el sitio web de "Sentirse Bien".
        </p>
      </section>

      {/* Sección 4 */}
      <section>
        <h3 className="text-xl font-bold mb-4">OBLIGACIONES DEL USUARIO</h3>
        <p className="mb-6">
          El usuario está obligado a reservar su cita con suficiente antelación. Al acudir a su cita, deberá presentar la tarjeta o código en buen estado al prestador. La disponibilidad de horarios está sujeta a las políticas del prestador. Es responsabilidad del usuario informarse previamente sobre las normativas que puedan aplicar, y aceptarlas al hacer uso del servicio.
        </p>
      </section>

      {/* Sección 5 */}
      <section>
        <h3 className="text-xl font-bold mb-4">MODALIDAD DE ENTREGA</h3>
        <p className="mb-6">
          Los paquetes de "Sentirse Bien" serán entregados por correo privado al domicilio indicado por el cliente. "Sentirse Bien" no se responsabiliza por retrasos en la entrega debidos a errores en la información proporcionada por el cliente, ni por ausencias en el domicilio al momento de la entrega.
        </p>
      </section>

      {/* Sección 6 */}
      <section>
        <h3 className="text-xl font-bold mb-4">PARTICULARIDADES</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Una tarjeta o voucher dañado o modificado perderá su validez.</li>
          <li>Si se pierde o destruye la tarjeta, no se ofrecerá reemplazo ni reembolso.</li>
          <li>El usuario debe utilizar la tarjeta dentro de los 9 meses posteriores a su adquisición.</li>
          <li>El prestador es el único responsable de los servicios brindados.</li>
        </ul>
      </section>

      {/* Sección 7 */}
      <section>
        <h3 className="text-xl font-bold mb-4">DESLINDE DE RESPONSABILIDAD</h3>
        <p className="mb-6">
          "Sentirse Bien" no se hace responsable por cualquier accidente que pueda ocurrir durante la utilización de los servicios contratados. El usuario es consciente de que algunas actividades pueden implicar riesgos, los cuales acepta al participar. "Sentirse Bien" no asume ninguna responsabilidad por daños o lesiones que puedan surgir durante el uso de los servicios.
        </p>
      </section>
    </div>
  );
};

export default TerminosYCondiciones;
