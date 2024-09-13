import React from 'react'
import CardServicio from '../Cards/CardServicio'

type Props = {
    data: any
}


function expandedComponents({data}: Props) {
  return (
    <div className='h-full w-full p-2'>
        {/* <h1 className='text-4xl'>Servicio</h1> */}
        <div className='flex  flex-col w-full md:justify-center md:items-center justify-start'>
        <CardServicio data={data} />
        </div>
    </div>
  )
}

export default expandedComponents