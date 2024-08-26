
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

                <div className="filtro ">
                    <h1>{titulo}</h1>

                    <section className="contenido">
                        <section className="eslogan pl-14">
                            <p>{eslogan}</p>
                        </section>

                        <Link href="/#contacto">
                            <button className="text-white border py-2 px-5 bg-pink-800 mt-5 rounded-3xl text-xl main-button">{textoBoton}</button>
                        </Link>

                    </section>
                </div>
            </div> 
        </div>


    )

}

