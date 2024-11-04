import { h1 } from "framer-motion/client";
import MenuLateral2 from '@/app/components/Menu/menuLateral2'

export default function estadisticas(){
    return(
        <>
            <div className="absolute top-0 left-0">
                <MenuLateral2 /> 
            </div>
            <h1 className="text-center">Estadisticas</h1>
        </>
        
    );
}