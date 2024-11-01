import React from 'react';
import { UserCircleIcon, NewspaperIcon, CalendarDaysIcon, ClipboardDocumentCheckIcon, UserGroupIcon, ListBulletIcon } from '@heroicons/react/24/outline';
const BottomNav = () => {

    const adminViews = [
        { id: 'servicios', title: 'Servicios', route: '/panel-general/servicios', icon: <ListBulletIcon className='h-10 w-10'/> },
        { id: 'noticias', title: 'Noticias', route: '/panel-general/noticias', icon: <NewspaperIcon className='h-10 w-10'/> },
        // { id: 'mis-turnos', title: 'Mis turnos', route: '/panel-general/mis-turnos', icon: <CalendarDaysIcon className='h-10 w-10'/> },
        { id: 'turnos', title: 'Turnos', route: '/panel-general/turnos', icon: <CalendarDaysIcon className='h-10 w-10'/> },
        // { id: 'turnos-hoy', title: 'Turnos Hoy', route: '/panel-general/turnos-hoy', icon: <CalendarDaysIcon className='h-10 w-10'/> },
        { id: 'usuarios', title: 'Usuarios', route: '/panel-general/usuarios', icon: <UserGroupIcon className='h-10 w-10'/> },
        { id: 'informes', title: 'Informes', route: '/panel-general/informes', icon: <ClipboardDocumentCheckIcon className='h-10 w-10'/> },
        { id: 'perfil', title: 'Perfil', route: '/panel-general/perfil', icon: <UserCircleIcon className='h-10 w-10'/> },
    ]
    

    return (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-sage h-16 shadow-lg flex justify-around w-screen items-center">
            {adminViews.map((view) => (
                <a key={view.id} href={view.route} className="text-white hover:bg-sage-hover py-2 rounded"> {view.icon} </a>
            ))}

        </nav>
    );
};

export default BottomNav;
