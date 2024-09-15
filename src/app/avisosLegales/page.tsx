import React from 'react';

const AvisoLegal = () => {
  return (
    <div className="container mx-auto my-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Aviso Legal</h1>
      <h2 className="text-2xl font-bold text-center mb-4">Sentirse Bien</h2>

      <section className="mb-8">
        <h3 className="text-xl font-bold mb-2">Información General</h3>
        <p className="text-justify">
          En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI), a continuación se detallan los datos identificativos del titular del sitio web.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-bold mb-2">Datos del Titular</h3>
        <p className="text-justify">
          <strong>Nombre o Razón Social:</strong> Sentirse Bien S.A.<br />
          <strong>NIF/CIF:</strong> 30-12345678-9<br />
          <strong>Dirección:</strong> Calle Ficticia 123, Buenos Aires, Argentina<br />
          <strong>Teléfono:</strong> +54 11 xxxx-xxxx<br />
          <strong>Correo Electrónico:</strong> info@sentirsebien.com.ar<br />
          <strong>Registro Mercantil:</strong> Inscrito en el Registro de Sociedades de Buenos Aires, Tomo 123, Folio 456
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-bold mb-2">Propiedad Intelectual e Industrial</h3>
        <p className="text-justify">
          Todos los contenidos del sitio web, incluidos textos, imágenes, gráficos, logotipos, íconos y software, están protegidos por derechos de propiedad intelectual e industrial, perteneciendo a Sentirse Bien S.A. o a terceros que han autorizado su uso. Queda prohibida la reproducción, distribución, modificación o cualquier otra forma de explotación de estos contenidos sin la autorización previa y por escrito de Sentirse Bien S.A.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-bold mb-2">Responsabilidad</h3>
        <p className="text-justify">
          Sentirse Bien S.A. no se hace responsable de los posibles daños o perjuicios derivados del uso del sitio web o de la imposibilidad de acceder a él. El sitio web puede contener enlaces a otros sitios que no están controlados por Sentirse Bien S.A. y por lo tanto, no asumimos ninguna responsabilidad sobre el contenido o las políticas de privacidad de estos sitios.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-bold mb-2">Protección de Datos</h3>
        <p className="text-justify">
          En cumplimiento de la Ley 25.326 de Protección de Datos Personales, Sentirse Bien S.A. se compromete a proteger la privacidad de sus usuarios. Para más información sobre el tratamiento de datos personales, consulte nuestra <a href="/politicaPrivacidad" className="text-blue-500 underline">Política de Privacidad</a>.
        </p>
      </section>



      <section className="mb-8">
        <h3 className="text-xl font-bold mb-2">Modificación del Aviso Legal</h3>
        <p className="text-justify">
          Sentirse Bien S.A. se reserva el derecho de modificar este Aviso Legal en cualquier momento. Los cambios serán efectivos en el momento en que se publiquen en este sitio web. Le recomendamos que revise periódicamente esta página para estar informado sobre cualquier actualización.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-bold mb-2">Ley Aplicable y Jurisdicción</h3>
        <p className="text-justify">
          La relación entre Sentirse Bien S.A. y el usuario se regirá por la legislación argentina. Cualquier controversia será sometida a los tribunales competentes de Buenos Aires, Argentina.
        </p>
      </section>
    </div>
  );
};

export default AvisoLegal;

