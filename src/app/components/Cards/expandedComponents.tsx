import React from 'react'

import TableInfo from '@/app/components/TableInfo/TableInfo'
import SelectOptions from '../Select/SelectOptions'
import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'
import { getProfesionales, getUsuarioPorId } from '@/api/usuarios'
import { asignarTurnoAProfesional, setTurnoRealizado } from '@/api/turnos'
import Swal from 'sweetalert2'
import { useAuth } from '@/context/auth'
import { EmailShareButton } from 'react-share'
import { postcreateSession } from '@/api/pay'
type expandedComponentProps = {
  data: any
}


export default function ExpandedComponent({ data }: expandedComponentProps) {

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
    { nombre: "Pago realizado", valor: data?.pago_realizado ? 'Sí' : 'No' },
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
  const handlePay = async (id: String) => {
    try{
        Swal.fire({
            title: '¿Quieres pagar el turno?',
            confirmButtonColor: '#7BB263',
            cancelButtonColor: '#D8316C',
            showCancelButton: true,
            confirmButtonText: 'Sí, pagar',
            cancelButtonText: 'Cancelar'
        }).then(async (result) => {
            if (result.isConfirmed) {
              const session =  await postcreateSession({nombreServicio: data.servicio, precio: data.monto_abonado, detalles: data.comentarios, idTurno: data._id})
            
                
              window.location.href = session.url;
            
            }
        })
    } catch(error){
        console.error("Error al pagar el turno:", error);
    }
}
  return (
    <div>
      <TableInfo campo="Turno" datos={turnoDatosMostrar} />
      
      <div className='flex flex-col items-center justify-center w-full'>
         {!data.pago_realizado && 
            <button onClick={() => handlePay(data._id)} className="bg-sage hover:bg-sage-hover text-white font-bold py-2 px-4 rounded my-4 w-4/10">
                Pagar
            </button>   
         }
        </div>
    </div>
  )

}
