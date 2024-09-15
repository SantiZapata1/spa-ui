type expandedCvComponentProps = {
    data: any
}

// Importa de heroicon un icono de correo y otro de telefono
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'

function expandedCvComponent({data}: expandedCvComponentProps) {
  return (
    <div className='flex flex-col items-start p-4 '>
        <h1>{data.nombre}</h1>
        <h2 className='flex flex-row items-center text-lg'><EnvelopeIcon className='h-6 w-6 mr-4'/>{data.email}</h2>
        <h2 className='flex flex-row items-center text-lg '><PhoneIcon className='h-6 w-6 mr-4'/>{data.telefono}</h2>
        <h2 className='flex flex-row items-center text-lg'><b>Propuesta:</b> {data.propuesta}</h2>
    </div>
)
}

export default expandedCvComponent