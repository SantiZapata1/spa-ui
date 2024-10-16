"use client"

import MenuLateral2 from '@/app/components/Menu/menuLateral2'
import React from 'react'
import Turnos from '@/app/components/Turnos/Turnos'
function page() {
  return (
    <section className="w-full flex flex-col items-center justify-center">
    <div className="absolute top-0 left-0">
        <MenuLateral2 /> 
    </div>
    <h2>Turnos de hoy:</h2>
    <Turnos today/>
</section>  

)
}

export default page