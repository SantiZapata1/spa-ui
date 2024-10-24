"use client";
import CardUserTurnos from '@/app/components/Cards/CardUserTurnos'
import MenuLateral2 from '@/app/components/Menu/menuLateral2'
import React from 'react'
import DateRangePicker from '@/app/components/DateRangePicker/DateRangePicker'
import { useForm } from 'react-hook-form'
import TableStats from '@/app/components/TableStats/TableStats';
import { generarEstadisticaTurnos } from '@/api/turnos'
import { useState } from 'react';
import PDF from './PDF';
import { pdf } from '@react-pdf/renderer';
import { useAuth } from '@/context/auth'
import { redirect } from 'next/navigation';


// import dynamic from 'next/dynamic';

// @ts-ignore
// const pdf = dynamic(() => import('@react-pdf/renderer'), { ssr: false });

// const PDF = dynamic(() => import('./PDF'), { ssr: false });


function Page() {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const { user, isLoading, isAuthenticated } = useAuth();

    const [ estadisticas, setEstadisticas ] = useState<any>([])


    
    const handlePrint = async (data: any) => {
        try{

            // @ts-ignore
            const blob = await pdf(<PDF estadisticas={data}  />).toBlob();
            // Crea una URL de objeto a partir del blob
            const url = URL.createObjectURL(blob);
            // Abre la URL en una nueva pestaña
            window.open(url);

        }catch(error){
            console.log(error)
        }

    }

    if(isLoading){
        return <div>Cargando...</div>
    }
    if ((!isLoading) && (!isAuthenticated)) return redirect('/login');

    if(!isLoading && user?.rol !== 'Administrador'){
        redirect('/panel-general/')
    }

  return (
    <section className="w-full flex flex-col items-center justify-center">
    <div className="absolute top-0 left-0">
        <MenuLateral2 /> 
    </div>
    <form action="" className='m-4 flex flex-col items-center justify-center  w-full'
        onSubmit={
            handleSubmit( async (data: any) => {
                const response = await generarEstadisticaTurnos(data.desde, data.hasta)

                setEstadisticas(response)


            })
        }
    >
    <DateRangePicker setValue={setValue} isRequired={true} />
    <button className="bg-sage text-white px-6 py-4 rounded-3xl mt-8 transform transition-transform duration-300 ease-in-out hover:scale-105 w-5/10" type="submit">Buscar</button>
    </form>
        <TableStats estadisticas = {estadisticas} />

        <button
            className='bg-sage text-white px-6 py-4 rounded-3xl mt-8 transform transition-transform duration-300 ease-in-out hover:scale-105' onClick={() => handlePrint(estadisticas)}
        >Imprimir</button>
</section>  


)
}

export default Page