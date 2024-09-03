"use client"
// componentes
import InputText from '../components/Inputs/InputText'
import Link from 'next/link'

// hooks
import { useForm } from 'react-hook-form'
import { useAuth } from '../../context/auth'
import { useEffect } from 'react'
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
      redirect('/')
    }

    const onSubmit = handleSubmit(async(values)=>{
      // console.log(values);
      signIn(values)
    });


  return (

    <div className="flex flex-col height-full">

      <main className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mt-16 mx-auto">

        <h1 className="text-3xl font-bold text-center text-green-600 mb-8">
              Iniciar sesión
        </h1>

        <form className="space-y-6" onSubmit={onSubmit}>

          

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
              <button className="w-full py-3 bg-green-600 text-white font-bold rounded-lg shadow-lg hover:bg-green-700 transition duration-300">
                Iniciar Sesión
              </button>
              
        </form>
      </main>
    </div>
)
}

