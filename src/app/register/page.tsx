"use client"
// Componentes
import InputText from "../components/Inputs/InputText"

// Hooks
import { useForm } from 'react-hook-form'
import { useState } from 'react'
// Dependencias
import Link from 'next/link'
// API del BackEnd
import { registerRequest } from '../../api/auth'
function page() {

    
    const { register, handleSubmit, setValue, formState: { errors } } = useForm()
    // Estado para mostrar mensaje de error
    const [mensajeError, setMensajeError] = useState<String>("")
    // mensajeError es el estado (variable) que va a contener el mensaje de error
    // setMensajeError es la función que va a modificar el estado mensajeError
    return (
    <main className="h-screen p-8 rounded-lg shadow-lg max-w-md w-full mx-auto mt-8">
        
        <h1 className="text-3xl font-bold text-center text-green-500 mb-8">Registrarse</h1>
        {mensajeError && <p className="text-red-500 text-center">{mensajeError}</p>}
        <form className="space-y-6" method="post" onSubmit={handleSubmit(async (values) => {

              // Aquí pondriamos la conexión a la BD para enviar los datos del formulario usando React Hook Form
              console.log(values)
              if (values.pass !== values.passrepeat) { //Validación de contraseñas iguales
                setMensajeError("Las contraseñas no coinciden");
              }
              else{
                try{
                  const response = await registerRequest(values)
                }catch(error){
                  setMensajeError("Error al registrar el usuario")
                }
              }
            })}>
              <InputText
                campo="Nombre"
                nombre="nombre"
                type="text"
                placeholder=""
                register={register}
                setValue={setValue}
                errors={errors.nombre}
              />
              <InputText
                campo="Apellido"
                nombre="apellido"
                type="text"
                placeholder=""
                register={register}
                setValue={setValue}
                errors={errors.nombre}
              />
              <InputText
                campo="Correo electrónico"
                nombre="correo_electronico"
                type="email"
                placeholder=""
                register={register}
                setValue={setValue}
                errors={errors.nombre}
              />
              <InputText
                campo="Nombre de usuario"
                nombre="nombre_de_usuario"
                type="text"
                placeholder=""
                register={register}
                setValue={setValue}
                errors={errors.nombre}
              />
              
              <InputText
                campo="Contraseña"
                nombre="pass"
                type="password"
                placeholder=""
                register={register}
                setValue={setValue}
                errors={errors.nombre}
              />
              
              <InputText
                campo="Repite la contraseña"
                nombre="passrepeat"
                type="password"
                placeholder=""
                register={register}
                setValue={setValue}
                errors={errors.nombre}
              />

              
              <button className="w-full py-3 bg-green-500 text-white font-bold rounded-lg shadow-lg hover:bg-green-600 transition duration-300">
                Registrarse
              </button>
              
        </form>
      </main>
  
  )
}

export default page