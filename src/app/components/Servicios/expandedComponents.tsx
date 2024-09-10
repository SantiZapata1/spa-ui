import React from 'react'
import CardServicio from '../Cards/CardServicio'
type Props = {
    data: any
    }


function expandedComponents({data}: Props) {
  return (
    <div className='h-full w-full p-2'>
        <h1 className='text-4xl'>Servicio</h1>
        <div className='flex w-full flex-col items-center justify-center'>
        <CardServicio data={data} />
        </div>
    </div>
  )
}

export default expandedComponents