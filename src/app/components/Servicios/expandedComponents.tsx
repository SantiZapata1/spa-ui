import React from 'react'
import CardServicio from '../Cards/CardServicio'

type Props = {
    data: any
}


function expandedComponents({data}: Props) {
  return (
    <div className='h-full w-3/10 sm:w-5/10 md:w-full p-2'>
        {/* <h1 className='text-4xl'>Servicio</h1> */}
        <div className='flex  flex-col w-full  justify-start'>
        <CardServicio data={data} />
        </div>
    </div>
  )
}

export default expandedComponents