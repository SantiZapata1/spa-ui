import React from 'react'
import LinkedPages from './LinkedPages'
function NavBar() {
  return (
    <div className='flex flex-row bg-green-600 w-full'>
     <LinkedPages nombre="Inicio" url="/"/>
     <LinkedPages nombre="Contacto" url="/contacto"/>
     <LinkedPages nombre="Información" url="/info"/>
    </div>

)
}

export default NavBar