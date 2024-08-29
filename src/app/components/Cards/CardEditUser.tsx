import { useEffect } from "react"
import InputText from "../Inputs/InputText"
import { useForm } from "react-hook-form"

import Swal from 'sweetalert2'
// Contexto
import { useAuth } from '../../../context/auth';

interface CardDataUsuarioProps {
    datosUsuario: any
    setIsEditing: any
}

function CardDataUsuario({datosUsuario, setIsEditing}: CardDataUsuarioProps) {
    
    useEffect(() => {
        console.log(datosUsuario)
    }, [datosUsuario])
    
    const { handleSubmit, register, setValue, formState: { errors } } = useForm();
    const { editProfile } = useAuth();
    
    return (
    <div className="bg-white shadow-lg rounded-lg md:w-6/10 p-4">
        <h2 className="text-3xl font-medium">Tus Datos</h2>
        <form
        className="space-y-3"
        method="post"
        onSubmit={handleSubmit(async (values) => {
            Swal.fire({
                title: '¿Estás seguro?',
                text: "Podrás volver a editar más adelante.",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#7BB263',
                cancelButtonColor: '#D8316C',
                confirmButtonText: 'Sí, editar',
                cancelButtonText: 'Cancelar'
              }).then(async (result) => {
                // Si se confirma la carga de la denuncia, comienza la carga al backend
                if (result.isConfirmed) {

                    
                    try{
                        values.id = datosUsuario.id
                        editProfile(values)
                        Swal.fire({
                            title: '¡Listo!',
                            text: '¡Tus datos han sido editados correctamente!',
                            icon: 'success',
                            confirmButtonText: 'Aceptar',
                            confirmButtonColor: '#7BB263',
                          }).then((result) => {
                            if (result.isConfirmed) {
                              // Si se confirma, recargar la página
                              window.location.reload();
                            }
                          });
                    }catch(error){
                        console.log(error)
                    }
                }
            })
        })}
      >

        <InputText
            valor={datosUsuario.nombre}
            campo="Nombre"
            nombre="nombre"
            type="text"
            placeholder=""
            register={register}
            setValue={setValue}
            errors={errors.nombre}
            />
        <InputText 
            valor={datosUsuario.apellido}
            campo="Apellido"
            nombre="apellido"
            type="text"
            placeholder=""
            register={register}
            setValue={setValue}
            errors={errors.nombre}
        />
        <InputText 
            valor={datosUsuario.correo_electronico}
            campo="Correo electrónico"
            nombre="correo_electronico"
            type="email"
            placeholder=""
            register={register}
            setValue={setValue}
            errors={errors.nombre}
            />
        <InputText 
            valor={datosUsuario.telefono}
            campo="Teléfono"
            nombre="telefono"
            type="text"
            placeholder=""
            register={register}
            setValue={setValue}
            errors={errors.nombre}
        />  
        <div className="flex flex-col md:flex-row mt-2 justify-between">

        <div className='mr-2 bg-spa-purple hover:bg-spa-light-purple text-white cursor-pointer font-bold py-2 px-4 rounded w-9/10 flex items-center justify-center mt-2 md:mt-0' onClick={() => setIsEditing(false)}>
                Cancelar
            </div>
            <button className="bg-spa-purple hover:bg-spa-light-purple text-white cursor-pointer font-bold py-2 px-4 rounded w-9/10 flex items-center justify-center mt-2 md:mt-0">Guardar</button>
        </div>
            </form>
      </div>
)
}

export default CardDataUsuario