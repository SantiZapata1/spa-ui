import NavBar from '../components/NavBar/NavBar';

export default function InfoPage() {
    return (
      <div className="h-screen flex flex-col">
        <NavBar />
        <div className="flex-grow flex items-center justify-center">
          <div className="bg-white text-center p-8 rounded-lg shadow-lg max-w-md">
            <p className="text-green-500 font-bold text-3xl">
              Buscamos atraer la atención de nuestros clientes a través de experiencias inspiradas en la seducción de los sentidos.
              Adaptamos las propuestas con el objetivo de que logre desconectarse completamente de la rutina y disfrute de un momento de bienestar, en total armonía con la naturaleza.
            </p>
          </div>
        </div>
      </div>
    );
  }