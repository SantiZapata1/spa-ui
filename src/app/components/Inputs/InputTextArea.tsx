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
    customSize?: string
}

function InputTextArea({customSize, require, errors, campo, nombre, register, type, variante, valor, placeholder, setValue }: InputRegisterProps) {
    // Si no se recibe un placeholder, se setea como string vacío
    placeholder ? placeholder : ''
    // Si se recibe un valor, se setea en el formulario directamente con setValue
    useEffect(() => {
    if (valor) {
            setValue(nombre, valor);
        }
    }, [setValue, nombre, valor]);
    return (
        <>
               {errors && <span className="mt-2 text-red-600">{placeholder} es requerido</span>} 
            <textarea className={`border open-sans p-2 my-2 resize-none text-sm border-gray-300 rounded-md w-full ${customSize ? customSize : "h-40"}`} type={type}
                {...register(nombre, { required: require === true ? true : false })} placeholder={placeholder}
                 />
                </>

    )
}
export default InputTextArea