
"use client"
// componentes
import InputText from '../components/Inputs/InputText'
import Link from 'next/link'

// hooks
import { useForm } from 'react-hook-form'
import { useAuth } from '../../context/auth'
import { useEffect, useState } from 'react'
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
   const [error, setError] = useState('')
  //  si esta autenticado rediriquimos al home
    if(isAuthenticated && user.rol == "Administrador"){
      redirect('/admin')
    }else if(isAuthenticated && user.admin === false){
      redirect('/servicios')
    }

    const onSubmit = handleSubmit(async(values)=>{
      // console.log(values);
       await signIn(values)
    });


  return (

    <div className="flex flex-col height-full bg-flores-beige">

      <main className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mt-16 mx-auto">

        <h1 className="text-3xl font-bold text-center tx-sage mb-8">
              Iniciar sesión
        </h1>

        {errorsAuth && <div className='rounded-md bg-orange-500 p-2 text-white flex flex-col justify-center items-center'>{errorsAuth}</div>}

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
              <p>¿No tienes cuenta? <Link href="/register" className="text-green-900"> Regístrate </Link></p>
              </div>
              <button className="w-full py-3 bg-sage text-white text-xl rounded-lg shadow-lg transition duration-300">
                Iniciar Sesión
              </button>
              
        </form>
      </main>
    </div>
)
}

