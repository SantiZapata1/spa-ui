const QuienesSomos = () => {
  const sections = [
    {
      id: 'quienes-somos',
      title: 'Quiénes Somos',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim, magna eu faucibus elementum, elit lectus interdum nisi, et ultrices mi est nec erat. Vestibulum ut erat ac eros aliquet tempor. Curabitur at ante at quam pharetra tincidunt eget a orci. Integer id nisl ac lectus ullamcorper tincidunt. Nam venenatis auctor ligula, et pellentesque ligula tempus sed. Suspendisse potenti. Nullam bibendum odio et nisl fermentum, sit amet tempor odio blandit.',
      bgColor: 'bg-red-100',
    },
    {
      id: 'vision',
      title: 'Visión',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod, felis a viverra cursus, ipsum turpis pretium magna, vel cursus lectus elit sed sapien. Sed convallis euismod dolor, non bibendum tortor malesuada non. Maecenas fermentum, eros non vehicula efficitur, risus sem consequat urna, in aliquet orci odio at sem. Morbi ut lacus nec odio fermentum consequat. Praesent id odio nec est pharetra varius. Vivamus ut diam nisl, nec fermentum velit.',
      bgColor: 'bg-green-100',
    },
    {
      id: 'mision',
      title: 'Misión',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Suspendisse ut urna lorem. Sed venenatis arcu sit amet quam interdum, ac suscipit elit dapibus. Cras euismod sem sed augue blandit, ut pretium arcu vestibulum. Curabitur varius, est sed convallis pellentesque, nunc arcu tristique nisi, vel auctor felis augue in ipsum. Donec interdum, nisi id feugiat interdum, augue metus fringilla ligula, et tincidunt urna felis ut eros.',
      bgColor: 'bg-blue-100',
    },
    {
      id: 'equipo',
      title: 'Equipo Profesional',
      content: '',
      bgColor: 'bg-yellow-100',
    },
  ];

  // Lista de profesionales para la sección "Equipo Profesional"
  const profesionales = [
    {
      nombre: 'Ana',
      apellido: 'Felicidad',
      foto: '/Masajes/masaje1.png',
      perfil: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      nombre: 'Dra. Romina',
      apellido: 'Felicidad',
      foto: '/Masajes/masaje1.png',
      perfil: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      nombre: 'Dr. Lionel',
      apellido: 'Messi',
      foto: '/Masajes/masaje1.png',
      perfil: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    // Agrega más profesionales según sea necesario
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-grow">
        <aside className="w-64 p-4 bg-gray-100 border-r border-gray-400">
          <ul className="space-y-4">
            {sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className="block p-3 text-gray-900 hover:bg-gray-200 hover:text-blue-700 rounded-lg transition duration-300">
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </aside>
        <main className="flex-grow overflow-auto">
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className={`min-h-screen p-8 ${section.bgColor} flex flex-col`}
            >
              <h2 className="text-3xl font-bold mb-4 text-center">{section.title}</h2>
              {section.id === 'equipo' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {profesionales.map((prof) => (
                    <div key={prof.nombre} className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center text-center">
                      <img
                        src={prof.foto}
                        alt={`${prof.nombre} ${prof.apellido}`}
                        className="w-24 h-24 rounded-full mb-4 object-cover"
                      />
                      <h3 className="text-xl font-semibold mb-2">{prof.nombre} {prof.apellido}</h3>
                      <p>{prof.perfil}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center">{section.content}</p>
              )}
            </section>
          ))}
        </main>
      </div>
    </div>
  );
};

export default QuienesSomos;













