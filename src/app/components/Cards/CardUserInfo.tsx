/*
  Componente utilizado en /perfil
  Muestra los datos del usuario y cuenta con el botón para poner en modo de edición
*/
interface CardDataUsuarioProps {
    datosUsuario: any
    setIsEditing: any
}
function CardDataUsuario({datosUsuario, setIsEditing}: CardDataUsuarioProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg md:w-6/10 p-4">
        <h2 className="text-3xl font-medium">Tus Datos</h2>
        <p className="mt-2 text-xl"><b>Nombre:</b> {datosUsuario.nombre}</p>
        <p className="mt-2 text-xl"><b>Apellido:</b> {datosUsuario.apellido}</p>
        <p className="mt-2 text-xl"><b>Correo electrónico:</b> {datosUsuario.correo_electronico}</p>
        <p className="mt-2 text-xl"><b>Teléfono:</b> {datosUsuario.telefono}</p>
        <div className='bg-spa-purple hover:bg-spa-light-purple text-white cursor-pointer font-bold py-2 px-4 rounded w-full flex items-center justify-center mt-2 md:mt-0' onClick={() => setIsEditing(true)}>
                Editar datos
            </div>
      </div>
)
}

export default CardDataUsuario