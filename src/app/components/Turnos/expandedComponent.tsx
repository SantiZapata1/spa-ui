import React from 'react'

import TableInfo from '@/app/components/TableInfo/TableInfo'
import SelectOptions from '../Select/SelectOptions'
import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'
import { getProfesionales, getUsuarioPorId } from '@/api/usuarios'
import { asignarTurnoAProfesional, setTurnoRealizado } from '@/api/turnos'
import Swal from 'sweetalert2'
import { useAuth } from '@/context/auth'
type expandedComponentProps = {
  data: any
}


export default function expandedComponent({ data }: expandedComponentProps) {

  const [listaProfesionales, setListaProfesionales] = useState([])
  const [profesionalNombre, setProfesionalNombre] = useState('')
  const { user } = useAuth();
  useEffect(() => {

    const obtenerProfesionalNombre = async () => {
      try {
        const profesional = await getUsuarioPorId(data.profesional_asignado);
        setProfesionalNombre(profesional.nombre + ' ' + profesional.apellido);
      } catch (error) {
        console.error("Error al obtener el profesional:", error);
      }
    }

    const obtenerProfesionales = async () => {
      try {
        const profesionales = await getProfesionales();
        const listaProfesionales = profesionales.map((profesional: any) => {
          return { nombre: profesional.nombre + ' ' + profesional.apellido, value: profesional._id }
        })
        setListaProfesionales(listaProfesionales);

      } catch (error) {
        console.error("Error al obtener los profesionales:", error);
      }
    };
    obtenerProfesionales();
    obtenerProfesionalNombre();
  }, []);


  const turnoDatosMostrar = [
    { nombre: "ID Turno", valor: data?._id },
    { nombre: "Fecha", valor: data?.fecha },
    { nombre: "Hora", valor: data?.hora },
    { nombre: "Profesional", valor: profesionalNombre ? profesionalNombre : 'No asignado' },
    { nombre: "Estado", valor: data?.estado },
    { nombre: "Comentarios", valor: data?.comentarios },
    { nombre: "Monto abonado", valor: data?.monto_abonado },

  ]

  const { register, handleSubmit, setValue, formState: { errors } } = useForm();


  const handleRealizado = async (id: String) => {


    Swal.fire({
      title: '¿Estás seguro?',
      text: "Una vez marcado como realizado, no podrás deshacer esta acción",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#7BB263',
      cancelButtonColor: '#D8316C',
      confirmButtonText: 'Sí, marcar como realizado',
      cancelButtonText: 'Cancelar'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await setTurnoRealizado(id);
          Swal.fire({

            title: 'Realizado!',
            text: 'El turno ha sido marcado como realizado',
            icon: 'success',
            confirmButtonColor: '#7BB263',
            cancelButtonColor: '#D8316C',
          }
          ).then(() => {
            window.location.reload();
          })
        } catch (error) {
          Swal.fire({

            title: 'Error',
            text: 'Hubo un error al marcar el turno como realizado',
            icon: 'error',
            confirmButtonColor: '#7BB263',
            cancelButtonColor: '#D8316C',
          }
          )
        }
      }
    })



  }

  return (
    <div>
      <TableInfo campo="Turno" datos={turnoDatosMostrar} />
      {user.rol !== 'Profesional' &&
        <>
          <h1 className='text-2xl'>Asignar profesional</h1>
          <div className='flex flex-row w-full items-center justify-center'>

            <form className='flex flex-row m-6' action="" onSubmit={
              handleSubmit(async (values) => {
                Swal.fire({
                  title: '¿Estás seguro?',
                  text: 'Estás a punto de asignar un profesional a este turno',
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#7BB263',
                  cancelButtonColor: '#D8316C',
                  confirmButtonText: 'Sí, asignar'
                }).then(async (result) => {
                  if (result.isConfirmed) {
                    await asignarTurnoAProfesional(data._id, values.profesional)
                    Swal.fire({
                      title: '¡Profesional asignado!',
                      text: 'El profesional ha sido asignado correctamente',
                      icon: 'success',
                      confirmButtonText: 'Ok',
                      confirmButtonColor: '#7BB263',

                    }).then(
                      () => {
                        window.location.reload()
                      }
                    )
                  }

                })
              })
            }>

              <SelectOptions setValue={setValue} error={errors.profesional} isRequired={true} campo="Profesional" nombre="profesional" opciones={listaProfesionales} />
              <button className='bg-spa-purple hover:bg-spa-light-purple text-white font-bold py-2 px-4 rounded'>Asignar</button>

            </form>
          </div>
        </>
      }
      <div className='flex flex-col items-center justify-center w-full'>
      <button
        className='bg-spa-purple hover:bg-spa-light-purple text-white font-bold py-2 px-4 rounded w-4/10'
        onClick={() => handleRealizado(data._id)}
        >Realizado</button>
        </div>

    </div>
  )
}

