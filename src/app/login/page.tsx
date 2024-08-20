"use client"
// componentes
import InputText from '../components/Inputs/InputText'
import Link from 'next/link'

// hooks
import { useForm } from 'react-hook-form'
import { useAuth } from '../../context/auth'
import { useEffect } from 'react'

// ?
import { redirect } from 'next/navigation'

export default function Login() {

  // console.log("estamos en login")

  // destructuramos useForm
  const { 
    register, 
    handleSubmit, 
    setValue, 
    formState: { errors }
   } = useForm()

  //  destructuramos useAuth
   const { signIn, errorsAuth, user, isAuthenticated} = useAuth()
   
  //  si esta autenticado rediriquimos al home
    if(isAuthenticated){
      console.log(user)
      console.log("Auth")
      redirect('/')
    }


  return (

    <div className="flex flex-col height-full">

      <main className=" p-8 rounded-lg shadow-lg max-w-md w-full mx-auto mt-8">

        <h1 className="text-3xl font-bold text-center text-green-500 mb-8">
              Iniciar sesión
        </h1>

        <form className="space-y-6" onSubmit={handleSubmit(async (values) => {
          
              // Aquí pondriamos la conexión a la BD para enviar los datos del formulario usando React Hook Form
              console.log(values)
              signIn(values)
            })}>

              <InputText
                campo="Nombre de usuario"
                nombre="nombre_de_usuario"
                type="text"
                placeholder="Ingrese su nombre de usuario"
                register={register}
                setValue={setValue}
                errors={errors.nombre}
              />
              <InputText
                campo="Contraseña"
                nombre="pass"
                type="password"
                placeholder="Ingrese su contraseña"
                register={register}
                setValue={setValue}
                errors={errors.nombre}
              />
              <div className="text-center"> 
              <p>¿No tienes cuenta? <Link href="/register" className="text-green-500"> Regístrate </Link></p>
              </div>
              <button className="w-full py-3 bg-green-500 text-white font-bold rounded-lg shadow-lg hover:bg-green-600 transition duration-300">
                Iniciar Sesión
              </button>
              
        </form>
      </main>
    </div>
)
}

