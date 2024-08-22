"use client";

// Componentes
import InputText from "../components/Inputs/InputText";

// Hooks
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

// Dependencias
import { redirect } from 'next/navigation'

// API del BackEnd
import { registerRequest } from "../../api/auth";

export default function Page() {


  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  // Estado para mostrar mensaje de error
  const [mensajeError, setMensajeError] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);


  useEffect(() => {
    if (registrationSuccess) {
        redirect("/");
    }
  }, [registrationSuccess]);

  return (
    <main className="my-6 bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-auto mt-8">

      <h1 className="text-3xl font-bold text-center text-green-600 mb-8">Registrarse</h1>

      {mensajeError && <p className="text-red-500 text-center">{mensajeError}</p>}

      <form
        className="space-y-3"
        method="post"
        onSubmit={handleSubmit(async (values) => {
          // Validación de contraseñas iguales
          if (values.pass !== values.passrepeat) {
            setMensajeError("Las contraseñas no coinciden");
          } else {
            try {
              const response = await registerRequest(values);

              if (response) { 
                setRegistrationSuccess(true);
              } else {
                setMensajeError("Error al registrar el usuario");
              }
            } catch (error) {
              setMensajeError("Error al registrar el usuario");
            }
          }
        })}
      >
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
  );
}
