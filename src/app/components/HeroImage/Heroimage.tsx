
import Link from 'next/link'

type HeroImageProps={
    titulo:string;
    eslogan:string;
    textoBoton:string;
}

export default function HeroImage({titulo,eslogan,textoBoton}: HeroImageProps){

    return(
        
        <div className='main'> 

            <div className="hero-image bg-image-spa">

                <div className="filtro">

                    <h2 className='intro'>BIENVENIDO A</h2>

                    <h1 className='titulo'>{titulo}</h1>

                    <p className="eslogan">{eslogan}</p>

                        <Link href="/#contacto">
                            <button className="text-white py-2 mt-5 rounded-3xl text-2xl">{textoBoton}</button>
                        </Link>

                </div>
            </div> 
        </div>


    )

}

