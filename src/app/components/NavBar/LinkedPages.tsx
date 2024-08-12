import React from 'react'
import Link from 'next/link'

type LinkedPagesProps = {
    url: string;
    nombre: string;
}

function LinkedPages({url, nombre}: LinkedPagesProps) {
    return (
        <Link href={url}>
            <div>
                <h1 className='text-sm md:text-lg lg:text-2xl text-white p-4'>{nombre}</h1>
            </div>
        </Link>
    )
}

export default LinkedPages