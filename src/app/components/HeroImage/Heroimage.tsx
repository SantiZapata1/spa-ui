
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
                    <h1>{titulo}</h1>

                    <section className="contenido">
                        <section className="eslogan">
                            <p>{eslogan}</p>
                        </section>

                        <Link href="/#contacto">
                            <button className="primary-button">{textoBoton}</button>
                        </Link>

                    </section>
                </div>
            </div> 
        </div>


    )

}

