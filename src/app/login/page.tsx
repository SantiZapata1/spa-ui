"use client"
// Componentes
import InputText from '../components/Inputs/InputText'
import Link from 'next/link'
// Hooks
import { useForm } from 'react-hook-form'
function Login() {
  const { register, handleSubmit, setValue, 
    formState: { errors }
   } = useForm()
  return (
    <div className="flex flex-col">
    {/* <NavBar/> */}
    <main className="flex-grow bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-auto mt-8">
      <h1 className="text-3xl font-bold text-center text-green-500 mb-8">
            Inicia sesión
      </h1>

    <form className="space-y-6" onSubmit={handleSubmit(async (values) => {
          // Aquí pondriamos la conexión a la BD para enviar los datos del formulario usando React Hook Form
          console.log(values)
        })}>
          <InputText
            campo="Correo Electrónico"
            nombre="correo_electronico"
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

export default Login