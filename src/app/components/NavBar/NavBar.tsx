import React from 'react'
import LinkedPages from './LinkedPages'
import Image from "next/image";
import logo from "../../../../public/logo sin fondo.png"


function NavBar() {
  return (
    <div className='flex flex-row  bg-green-600 w-full'>
      <Image
          src={logo}
          alt="logo del spa"
          className='w-20'
        />
     <LinkedPages nombre="Inicio" url="/"/>
     <LinkedPages nombre="Contacto" url="/contacto"/>
     <LinkedPages nombre="Quienes somos" url="/info"/>
     <LinkedPages nombre="Servicios" url="/servicios"/>
    </div>

)
}

export default NavBar