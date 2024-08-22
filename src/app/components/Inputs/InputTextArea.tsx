'use client';
// Hooks
import { useEffect } from 'react'

// Props
interface InputRegisterProps {
    campo: string;
    nombre: string;
    register: any;
    type: string;
    variante?: any;
    valor?: any;
    placeholder: string;
    setValue?: any;
    errors: any;
    require?: Boolean
}

function InputTextArea({ require, errors, campo, nombre, register, type, variante, valor, placeholder, setValue }: InputRegisterProps) {
    // Si no se recibe un placeholder, se setea como string vacío
    placeholder ? placeholder : ''
    // Si se recibe un valor, se setea en el formulario directamente con setValue
    if (valor) {
        useEffect(() => {
            setValue(nombre, valor);
        }, [setValue, nombre, valor]);
    }
    return (
        <>
               {errors && <span className="mt-2 text-red-600">{placeholder} es requerido</span>} 
            <textarea className="border open-sans pl-4 my-2 py-5 resize-none text-lg border-gray-300 rounded-md w-full h-56 "type={type}
                {...register(nombre, { required: require === true ? true : false })} placeholder={placeholder}
                 />
                </>

    )
}
export default InputTextArea