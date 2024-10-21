import React from 'react'

import TableInfo from '@/app/components/TableInfo/TableInfo'
import SelectOptions from '../Select/SelectOptions'
import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'
import { getProfesionales } from '@/api/usuarios'
import { asignarTurnoAProfesional } from '@/api/turnos'
type expandedComponentProps = {
  data: any
}


export default function expandedComponent({data}: expandedComponentProps) {

  const [listaProfesionales, setListaProfesionales] = useState([])

  useEffect(() => {
    const obtenerProfesionales = async () => {
      try {
        const profesionales = await getProfesionales();
        const listaProfesionales = profesionales.map((profesional: any) => {
          return { nombre: profesional.nombre + ' ' + profesional.apellido, value: profesional._id }
        })
        console.log(listaProfesionales)
        setListaProfesionales(listaProfesionales);


       
      } catch (error) {
        console.error("Error al obtener los profesionales:", error);
      }
    };
    obtenerProfesionales();
  }, []);


const turnoDatosMostrar = [
  { nombre: "ID Turno", valor: data?._id },
  { nombre: "Fecha", valor: data?.fecha },
  { nombre: "Hora", valor: data?.hora },
  { nombre: "Profesional", valor: data?.profesional_asignado },
  { nombre: "Estado", valor: data?.estado },
  { nombre: "Comentarios", valor: data?.comentarios },
  { nombre: "Monto abonado", valor: data?.monto_abonado },

]

  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  return (
    <div>
      <TableInfo campo="Turno" datos={turnoDatosMostrar}  />

      <h1 className='text-2xl'>Asignar profesional</h1>
      <div>

      <form action="" onSubmit={
        handleSubmit(async (values) => {
          await asignarTurnoAProfesional(data._id, values.profesional)
        })
      }>

      <SelectOptions setValue={setValue} error={errors.profesional} isRequired={true} campo="Profesional" nombre="profesional" opciones={listaProfesionales} />  
      <button className='bg-spa-purple hover:bg-spa-light-purple text-white font-bold py-2 px-4 rounded'>Asignar</button>

      </form>
      </div>

    </div>
  )
}

